import bedRoute from './routes/BedRoute';

export default function routes(app) {
  app.use('/api/bed', bedRoute);
}