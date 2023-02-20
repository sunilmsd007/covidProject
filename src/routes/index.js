import express from 'express';
const router = express.Router();

import vaccineRoute from './vaccine.route';
import vaccineTestRoute from './vaccineTesting.route';
import covid19Route from './covid19India.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/vaccineStatewise', vaccineRoute);
  router.use('/vaccineTest', vaccineTestRoute);
  router.use('/covid19', covid19Route);

  return router;
};

export default routes;
