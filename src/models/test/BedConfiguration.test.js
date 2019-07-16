import mongoose from 'mongoose';
import BedConfiguration, { validateBedConfig } from '../BedConfiguration';

describe('Model: BedConfiguration', () => {
  it('should return error object if values are incorrect', () => {
    const bedConfig = {
      name: '',
      quantity: '',
    };

    const { error } = validateBedConfig(bedConfig);
    const expectedResults = '"name" is not allowed to be empty';
    expect(error.details[0].message).toEqual(expectedResults);
  });
  it('should return success object if values are correct', () => {
    const bedConfig = {
      name: 'Queen Size',
      quantity: 5,
    };
    const { value } = validateBedConfig(bedConfig);

    expect(value).toEqual(bedConfig);
  });

  it('should return bed model object', () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      name: 'Queen Size',
      quantity: 5,
    };
    const newBedConfig = new BedConfiguration(payload);

    expect(newBedConfig).toHaveProperty('id');
    expect(newBedConfig).toHaveProperty('name');
    expect(newBedConfig).toHaveProperty('quantity');
    expect(newBedConfig.name).toEqual('Queen Size');
  });
});