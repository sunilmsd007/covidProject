import vaccineTesting from "../models/vaccineTesting.model";

//get all vaccination test data
export const getAllVaccineTest = async () =>
{
    const data = await vaccineTesting.find();
    if(data!== null){
        return data;
    }else{
        throw new Error("No Data Available");
    }
}