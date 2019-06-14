import rp from 'request-promise';

import { getSampleApi } from '../endpoints';

function getPosts() {
  const options = getSampleApi();

  return rp(options);
}

module.exports = {
  getPosts
};