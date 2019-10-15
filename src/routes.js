import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Vinicius Faustino',
    email: 'vinicius@vinicius.com',
    password_hash: '12341234',
  });

  return res.json(user);
});

export default routes;
