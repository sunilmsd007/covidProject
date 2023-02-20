import express from "express";
import * as covid19Controller from "../controllers/covid19India.controller";

const router = express.Router();

//route to get all covid19 data
router.get('',covid19Controller.getCovidData);

export default router;