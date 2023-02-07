import express from 'express';
const router = express.Router();

import vaccineRoute from './vaccine.route';
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

  return router;
};

export default routes;
