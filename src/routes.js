import bed from './routes/Bed';
import customer from './routes/Customer';
import feature from './routes/Feature';
import room from './routes/Room';
import type from './routes/Type';
import packageRate from './routes/PackageRate';
import rate from './routes/rate';

export default function routes(app) {
  app.use('/api/beds', bed);
  app.use('/api/customers', customer);
  app.use('/api/features', feature);
  app.use('/api/rooms', room);
  app.use('/api/types', type);
  app.use('/api/package-rates', packageRate);
  app.use('/api/rates', rate);
}