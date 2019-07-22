import bed from './routes/Bed';
import customer from './routes/Customer';
import feature from './routes/Feature';

export default function routes(app) {
  app.use('/api/beds', bed);
  app.use('/api/customers', customer);
  app.use('/api/features', feature);
}