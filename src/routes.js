import { IndexController, ItemController } from './controllers';
import { ValidateItemMiddleware } from './middlewares';

export default function routes(app) {
  app.get('/', IndexController.index);

  app.get('/item/posts', ItemController.getFromSampleApi);
  app.get('/item', ItemController.search);
  app.get('/item/:code', ItemController.get);
  app.post('/item', ValidateItemMiddleware.validateName, ItemController.create);
  app.put('/item/:code', ItemController.update);
}