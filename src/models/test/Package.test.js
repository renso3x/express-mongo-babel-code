import mongoose from 'mongoose';
import moment from 'moment';
import PackageRate, { validatePackageRate } from '../PackageRate';
import Room from '../Room';

describe('DB: PackageRate', () => {

  describe('should return error if invalid values', () => {
    it('should return error name is null', () => {
      const rate = {
        name: null,
        room: new Room({
          name: '101',
        }),
        date_in: moment().format('MM-DD-YYYY'),
        date_out: moment().format('MM-DD-YYYY'),
        description: 'this is a test'
      };

      const { error } = validatePackageRate(rate);

      expect(error).toBeTruthy();
    });
    it('should return error if room is empty', () => {
      const rate = {
        name: 'Rainy Season',
        room: '',
        date_in: moment().format('MM-DD-YYYY'),
        date_out: moment().format('MM-DD-YYYY'),
        description: 'this is a test'
      };

      const { error } = validatePackageRate(rate);

      expect(error).toBeTruthy();
    });

    it('should return error if date is invalid', () => {
      const rate = {
        name: 'Rainy Season',
        room: new Room({
          name: '101',
        }),
        date_in: moment().format('YYYY-DD-MM'),
        date_out: moment().format('MM-DD-YYYY'),
        description: 'this is a test'
      };

      const { error } = validatePackageRate(rate);

      expect(error).toBeTruthy();
    })
  });
});