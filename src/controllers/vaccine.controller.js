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
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller to get total doses administered per month
export const dosesPerMonth = async (req, res, next) => {
  try {
    const data = await vaccineService.dosesPerMonth();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
   // logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller to get total doses in specific state
export const dosesInState = async (req, res, next) => {
  try {
    const data = await vaccineService.dosesInState();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller to get total doses in specific state for all gender
export const dosesForGender = async (req, res, next) => {
  try {
    const data = await vaccineService.dosesForGender();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller to get total dosage of individual vaccines in particular state
export const individualVaccinesInState = async (req, res, next) => {
  try {
    const data = await vaccineService.individualVaccinesInState();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for sorting total dosage administered within given date range for all states
export const dosageWithinDateRange = async (req, res, next) => {
  try {
    const data = await vaccineService.dosageWithinDateRange();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller to get total dosage within given date range of particular state
export const dosageWithinDateRangeForState = async (req, res, next) => {
  try {
    const data = await vaccineService.dosageWithinDateRangeForState();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
   // logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller to get first and second dose administered along with sites in all states in sorted manner
export const firstAndSecondDose = async (req, res, next) => {
  try {
    const data = await vaccineService.firstAndSecondDose();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller to get documents within a given range(ie 5-10)
export const documentsInRange = async (req, res, next) => {
  try {
    const data = await vaccineService.documentsInRange();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for pipeline optimization(skip)
export const skipOptimization = async (req, res, next) => {
  try {
    const data = await vaccineService.skipOptimization();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
   // logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for pipeline optimization(limit)
export const limitOptimization = async (req, res, next) => {
  try {
    const data = await vaccineService.limitOptimization();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
   //logger.info("All data fetched successfully")
  } catch (error) {
   // logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for pipeline optimization(match)
export const matchOptimization = async (req, res, next) => {
  try {
    const data = await vaccineService.matchOptimization();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for adding new fields
export const addFields = async (req, res, next) => {
  try {
    const data = await vaccineService.addFields();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for lookup implementation
export const lookup = async (req, res, next) => {
  try {
    const data = await vaccineService.lookup();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for unwind implementation
export const unwind = async (req, res, next) => {
  try {
    const data = await vaccineService.unwind();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for redact implementation
export const redact = async (req, res, next) => {
  try {
    const data = await vaccineService.redact();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for unionWith implementation
export const unionWith = async (req, res, next) => {
  try {
    const data = await vaccineService.unionWith();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for unset implementation
export const unset = async (req, res, next) => {
  try {
    const data = await vaccineService.unset();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
   // logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for sortByCount implementation
export const sortByCount = async (req, res, next) => {
  try {
    const data = await vaccineService.sortByCount();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//controller for out implementation
export const out = async (req, res, next) => {
  try {
    const data = await vaccineService.out();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All data fetched successfully'
    });
    //logger.info("All data fetched successfully")
  } catch (error) {
    //logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};