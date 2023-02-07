import Vaccination from '../models/vaccine.model';

//get all vaccination data
export const getAllData = async () => {
  const data = await Vaccination.find();
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }

};

