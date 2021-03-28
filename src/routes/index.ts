import { Router } from 'express';
import companiesRouter from './companies.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/users', usersRouter);

export default routes;
