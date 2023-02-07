import HttpStatus from 'http-status-codes';
import logger from '../config/logger';
import * as vaccineService from '../services/vaccine.service';

/**
 * Controller to get all vaccine data available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllData = async (req, res, next) => {
  try {
    const data = await vaccineService.getAllData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    logger.info("All data fetched successfully")
  } catch (error) {
    logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
  
};