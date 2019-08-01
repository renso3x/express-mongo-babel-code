import mongoose from 'mongoose';
import redis from 'redis';
import util from 'util';

const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);
client.hget = util.promisify(client.hget);
const exec = mongoose.Query.prototype.exec;

// decide whether to cache a query
mongoose.Query.prototype.cache = function (options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '');
  return this;
}

mongoose.Query.prototype.exec = async function () {
  // if not applied cache, make a query call
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }
  // Create a unique key
  const key = Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name
  });

  const cacheValue = await client.hget(this.hashKey, JSON.stringify(key));

  if (cacheValue) {
    const doc = new this.model(JSON.parse(cacheValue));
    // check if array results
    return Array.isArray(doc) ?
      doc.map(d => new this.model(d))
      : new this.model(doc);
  }

  const result = await exec.apply(this, arguments);

  // console.log(`
  // client.hset(${this.hashKey}, ${JSON.stringify(key)}, ${JSON.stringify(result)})`);
  client.hset(this.hashKey, key, JSON.stringify(result));

  return result;

}

export function clearCache(hashKey) {
  return client.del(hashKey);
}