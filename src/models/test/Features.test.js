import mongoose from 'mongoose';
import Feature, { validateFeature } from '../Feature';

describe('DB: Feature', () => {
  let feature = {};

  it('should return error if name is empty', () => {
    feature.name = '';
    const { error } = validateFeature(feature);
    expect(error).toBeTruthy();
  });
  it('should return error if name is null', () => {
    feature.name = null;
    const { error } = validateFeature(feature);
    expect(error).toBeTruthy();
  })
  it('should return error if name is invalid type', () => {
    feature.name = 22;
    const { error } = validateFeature(feature);
    expect(error).toBeTruthy();
  });

  it('should return error if name is invalid type', () => {
    feature.name = 'ba';
    const { error } = validateFeature(feature);
    expect(error).toBeTruthy();
  });

  it('should return success if name is valid', () => {
    feature.name = 'bath';
    const { error } = validateFeature(feature);
    expect(error).toBeFalsy();
  });

  it('should return a feature object', () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      name: 'bath'
    };

    const newFeature = new Feature(payload);

    expect(newFeature).toHaveProperty('id');
    expect(newFeature).toHaveProperty('name');
  })

})
