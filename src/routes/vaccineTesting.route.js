import * as vaccineTestController from '../controllers/vaccineTesting.controller';
import express from 'express';

const router = express.Router();

//route to get all vaccination test data
router.get('', vaccineTestController.getAllVaccineTest);

export default router;