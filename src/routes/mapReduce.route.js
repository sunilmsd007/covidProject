import express from "express";
import * as mapReduceController from "../controllers/mapReduce.controller";

const router = express.Router();

router.get('/map',mapReduceController.map);

router.get('/reduce',mapReduceController.reduce);

router.get('/mapReduce',mapReduceController.mapReduceCheck);

router.get('/getmapReduce',mapReduceController.getmapReduce);

export default router;