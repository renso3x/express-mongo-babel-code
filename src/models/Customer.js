import mongoose from 'mongoose';

export const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true
  }
});

export default Customer = mongoose.model('Customer', customerSchema);