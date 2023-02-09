import Vaccination from '../models/vaccine.model';
import vaccineTesting from '../models/vaccineTesting.model';
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
  // const data = await Vaccination.aggregate([
  //   { $match: { $and: [{ State: "Andhra Pradesh" }, { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } }] } },
  //   { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } }
  // ]);

  //get first and second dose administered along with sites in all states in sorted manner
  // const data = await Vaccination.aggregate([
  //   { $sort: { State: 1 } },
  //   { $project: { State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } }
  // ]);

  //get documents within a given range(ie 5-10)
  // const data = await Vaccination.aggregate([
  //   { $limit: 10},
  //   { $project: { "Updated On": 1 ,State: 1, "Total Doses Administered": 1 } },
  //   { $skip: 5}
  // ]);

  //pipeline optimization ( the two $skip stages can coalesce into a single $skip where the skip numbers is the sum of the two initial skip numbers)
  // const data = await Vaccination.aggregate([
  //   { $sort: { State: 1 } },
  //   { $skip: 5000},
  //   { $project: { "Updated On": 1 ,State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
  //   { $skip: 2840}
  // ]);

  //pipeline optimization (the two $limit stages can coalesce into a single $limit where the limit number is the smaller of the two initial limit numbers)
  // const data = await Vaccination.aggregate([
  //   { $sort: { State: 1 } },
  //   { $limit: 50},
  //   { $project: { "Updated On": 1 ,State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
  //   { $limit: 5}
  // ]);

  //pipeline optimization ( the two $match stages can coalesce into a single $match combining the conditions with an $and)
  const data = await Vaccination.aggregate([
    { $match: { State: "Assam" } },
    { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
    { $match: { "Updated On": new Date("2021-02-01") } }
  ]);

  if (data.length != 0) {
    console.log(data)
    return data;
  } else {
    throw new Error('No data available');
  }

};

