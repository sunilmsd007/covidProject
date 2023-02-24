import express from 'express';
import * as vaccineController from '../controllers/vaccine.controller';

const router = express.Router();

//route to get all vaccination data
router.get('/getAllData', vaccineController.getAllData);

router.get('/dosesPerMonth', vaccineController.dosesPerMonth);

router.get('/dosesInState', vaccineController.dosesInState);

router.get('/dosesForGender', vaccineController.dosesForGender);

router.get('/individualVaccinesInState', vaccineController.individualVaccinesInState);

router.get('/dosageWithinDateRange', vaccineController.dosageWithinDateRange);

router.get('/dosageWithinDateRangeForState', vaccineController.dosageWithinDateRangeForState);

router.get('/firstAndSecondDose', vaccineController.firstAndSecondDose);

router.get('/documentsInRange', vaccineController.documentsInRange);

router.get('/skipOptimization', vaccineController.skipOptimization);

router.get('/limitOptimization', vaccineController.limitOptimization);

router.get('/matchOptimization', vaccineController.matchOptimization);

router.get('/addFields', vaccineController.addFields);

router.get('/lookup', vaccineController.lookup);

router.get('/unwind', vaccineController.unwind);

router.get('/redact', vaccineController.redact);

router.get('/unionWith', vaccineController.unionWith);

router.get('/unset', vaccineController.unset);

router.get('/sortByCount', vaccineController.sortByCount);

router.get('/out', vaccineController.out);

export default router;
