import mongoose from 'mongoose';

import BedConfiguration from './BedConfiguration';
import Customer from './Customer';
import Feature from './Feature';
import Image from './Image';
import Rate from './Rate';
import Room from './Room';
import RoomAvailability from './RoomAvailability';
import RoomExtra from './RoomExtra';
import Type from './Type';
import PackageRate from './PackageRate';

const connectDb = () => {
  const uri = process.env.MONGO_URI;
  const port = process.env.MONGO_PORT;
  const database = process.env.MONGO_DATABASE;

  const mongoUri = `mongodb://${uri}:${port}/${database}`;
  const mongoOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  };
  return mongoose.connect(mongoUri, mongoOptions);
}

export {
  connectDb,
  BedConfiguration,
  Feature,
  Image,
  Rate,
  Room,
  RoomAvailability,
  RoomExtra,
  Type,
  PackageRate,
  Customer
};