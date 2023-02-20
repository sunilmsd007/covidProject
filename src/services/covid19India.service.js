import Covid19India from "../models/covid19India.model";

//get all covid19 data
export const getCovidData = async () => {
    const data = await Covid19India.find();
    if (data !== null) {
        return data;
    } else {
        throw new Error('Data not avaialable');
    }
}