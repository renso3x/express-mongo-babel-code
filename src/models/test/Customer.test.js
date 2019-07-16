import mongoose from 'mongoose';
import Customer, { validateCustomer } from '../Customer';

describe('Model: Customer', () => {
  it('should return error object if required params are not inputed', () => {
    const customer = {
      firstName: 'romeo',
      lastName: '',
      email: '',
      phoneNumber: '',
      idType: '',
      idNumber: ''
    };

    const { error } = validateCustomer(customer);

    expect(error).toBeTruthy();
  });

  it('should return a customer object if success', () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      firstName: 'romeo',
      lastName: 'enso',
      email: 'enso!23%@gmail.com',
      phoneNumber: '09215248318',
      idType: 'SSS',
      idNumber: 'AAAA1'
    };

    const newCustomer = new Customer(payload);

    expect(newCustomer).toHaveProperty('firstName');
    expect(newCustomer).toHaveProperty('lastName');
    expect(newCustomer).toHaveProperty('email');
    expect(newCustomer).toHaveProperty('phoneNumber');
    expect(newCustomer).toHaveProperty('idType');
    expect(newCustomer).toHaveProperty('idNumber');

  })
});
