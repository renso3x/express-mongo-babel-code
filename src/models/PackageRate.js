import mongoose from 'mongoose';

export const packageRateSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  room: {
    type: new mongoose.Schema({
      name: String
    })
  },
  date_in: {
    type: Date
  },
  date_out: {
    type: Date
  },
  description: {
    type: String,
  }
});

export default mongoose.model('PackageRate', packageRateSchema);