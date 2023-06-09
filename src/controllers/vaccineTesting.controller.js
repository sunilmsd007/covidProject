import * as vaccineTestService from "../services/vaccineTesting.service";
import HttpStatus from 'http-status-codes';
//import logger from '../config/logger';

/**
 * Controller to get all vaccine test data available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const getAllVaccineTest = async (req, res, next) => {
    try {
        const data = await vaccineTestService.getAllVaccineTest();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All data fetched successfully'
        })
        //logger.info("All data fetched successfully")
    } catch (error) {
        //logger.error(error)
        res.status(HttpStatus.BAD_REQUEST).json({
          code: HttpStatus.BAD_REQUEST,
          message: `${error}`
      });
    }
}