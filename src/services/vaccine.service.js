import Vaccination from '../models/vaccine.model';

//get all vaccination data
export const getAllData = async () => {
  ///const data = await Vaccination.find();

  //total doses administered per month
  // const data = await Vaccination.aggregate([
  //   { $group: { _id: {Month: { $month: "$Updated On" }},total: {$sum: "$Total Doses Administered"} } },
  //   { $sort: { "_id.Month": 1 } }
  // ]);

  //total doses in specific state
  // const data = await Vaccination.aggregate([
  //   { $match: { State: "Karnataka" } },
  //   { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } }
  // ]);

  //total doses in specific state for all gender
  // const data = await Vaccination.aggregate([
  //   { $match: { State: "Assam" } },
  //   { $group: { _id: "$State", male: { $sum: "$Male (Doses Administered)" }, female: { $sum: "$Female (Doses Administered)" }, trans: { $sum: "$Transgender (Doses Administered)" } } }
  // ]);

  //total dosage of individual vaccines in particular state
  // const data = await Vaccination.aggregate([
  //   { $match: { State: "Assam" } },
  //   { $group: { _id: "$State", covaxin: { $sum: "$Covaxin (Doses Administered)" }, CoviShield: { $sum: "$CoviShield (Doses Administered)" }, Sputnik: { $sum: "$Sputnik V (Doses Administered)" } } },
  // ]);

  //sorting total dosage administered within given date range for all states
  // const data = await Vaccination.aggregate([
  //   { $match:  { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } } },
  //   { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } },
  //   { $sort: {totalDosage: 1}}
  // ]);

  //total dosage within given date range of particular state
  const data = await Vaccination.aggregate([
    { $match: { $and: [{ State: "Andhra Pradesh" }, { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } }] } },
    { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } }
  ]);

  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }

};

