import bed from './routes/Bed';
import customer from './routes/Customer';
import feature from './routes/Feature';
import room from './routes/Room';
import type from './routes/Type';
import packageRate from './routes/PackageRate';
import rate from './routes/Rate';
import extras from './routes/RoomExtra';
import roomAvailability from './routes/RoomAvailability';
import reservation from './routes/Reservation';
import users from './routes/User';
import auth from './routes/Auth';

export default function routes(app) {
  app.use('/api/beds', bed);
  app.use('/api/customers', customer);
  app.use('/api/features', feature);
  app.use('/api/rooms', room);
  app.use('/api/types', type);
  app.use('/api/package-rates', packageRate);
  app.use('/api/rates', rate);
  app.use('/api/extras', extras);
  app.use('/api/room-availability', roomAvailability);
  app.use('/api/reservations', reservation);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
}