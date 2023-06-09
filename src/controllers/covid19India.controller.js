import * as covid19Service from '../services/covid19India.service';
import HttpStatus from 'http-status-codes';
//import logger from '../config/logger';

/**
 * Controller to get all covid19 data available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const getCovidData = async (req, res, next) => {
    try {
        const data = await covid19Service.getCovidData();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All data fetched successfully'
        })
       // logger.info('All data fetched successfully');
    } catch (error) {
       // logger.error(error)
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }

}