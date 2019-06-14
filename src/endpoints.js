function getSampleApi() {
  return {
    uri: process.env.SAMPLE_API,
    method: 'GET',
    json: true
  };
}

module.exports = {
  getSampleApi
};