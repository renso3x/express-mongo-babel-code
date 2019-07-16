import mongoose from 'mongoose';
import Image, { validateImage } from '../Image';

describe('DB: Image', () => {
  let image = {}

  it('should return error object if incorrect format: 555', () => {

    image.file = 555;

    const { error } = validateImage(image);
    expect(error).toBeTruthy();
  });

  it('should return error object if incorrect format: {string}', () => {
    image.file = 'longgggg';
    const { error } = validateImage(image);
    expect(error).toBeTruthy();
  });

  it('should return error object if incorrect format: null', () => {
    image.file = null;
    const { error } = validateImage(image);
    expect(error).toBeTruthy();
  });

  it('should return error object if incorrect format: .doc', () => {
    image.file = 'test.doc';
    const { error } = validateImage(image);
    expect(error).toBeTruthy();
  });

  it('should return error object if incorrect format: .pdf', () => {
    image.file = 'test.pdf';
    const { error } = validateImage(image);
    expect(error).toBeTruthy();
  });

  it('should return image object if correct format', () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      file: 'test.jpg',
      payload: 'allooongstring'
    };

    const newImage = new Image(payload);

    expect(newImage).toHaveProperty('file');
    expect(newImage).toHaveProperty('payload');

  });

});