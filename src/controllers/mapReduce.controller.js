import * as mapReduceService from "../services/mapReduce.service";
import HttpStatus from 'http-status-codes';
import logger from '../config/logger';

/**
 * Controller to implement map and reduce
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const map = async (req, res, next) => {
    try {
        const data = await mapReduceService.map();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All data fetched successfully'
        })
        logger.info("All data fetched successfully")
    } catch (error) {
        logger.error(error)
        res.status(HttpStatus.BAD_REQUEST).json({
          code: HttpStatus.BAD_REQUEST,
          message: `${error}`
      });
    }
}

//
export const reduce = async (req, res, next) => {
    try {
        const data = await mapReduceService.reduce();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All data fetched successfully'
        })
        logger.info("All data fetched successfully")
    } catch (error) {
        logger.error(error)
        res.status(HttpStatus.BAD_REQUEST).json({
          code: HttpStatus.BAD_REQUEST,
          message: `${error}`
      });
    }
}

//controller for mapReduce
export const mapReduceCheck = async (req, res, next) => {
    try {
        const data = await mapReduceService.mapReduceChek();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All data fetched successfully'
        })
        logger.info("All data fetched successfully")
    } catch (error) {
        logger.error(error)
        res.status(HttpStatus.BAD_REQUEST).json({
          code: HttpStatus.BAD_REQUEST,
          message: `${error}`
      });
    }
}

//controller for getmapReduce
export const getmapReduce = async (req, res, next) => {
    try {
        const data = await mapReduceService.getmapReduce();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All data fetched successfully'
        })
        logger.info("All data fetched successfully")
    } catch (error) {
        logger.error(error)
        res.status(HttpStatus.BAD_REQUEST).json({
          code: HttpStatus.BAD_REQUEST,
          message: `${error}`
      });
    }
}