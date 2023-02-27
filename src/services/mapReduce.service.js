import mapReduce from "../models/mapReduce.model";
import Orders from "../models/orders.model";
import Vaccination from '../models/vaccine.model';

//map
export const map = async () => {
    const data = await mapReduce.aggregate([
        {
            $project: {
                name: 1,
                subject: 1,
                marks: 1,
                marksFor100: {
                    $map: {
                        input: "$marks",
                        as: "mark",
                        in: { $multiply: ["$$mark", 2] }
                    }
                }
            }
        }
    ])
    if (data !== null) {
        return data;
    } else {
        throw new Error("No Data Available");
    }
}

//reduce
export const reduce = async () => {
    const data = await mapReduce.aggregate([
        {
            $project: {
                name: 1,
                subject: 1,
                marks: 1,
                reduced: {
                    $reduce: {
                        input: "$marks",
                        initialValue: { sum: 0 },
                        in: {
                            sum: { $add: ["$$value.sum", "$$this"] },
                        }
                    }
                }
            }
        }
    ])
    if (data !== null) {
        return data;
    } else {
        throw new Error("No Data Available");
    }
}

//mapReduce
export const mapReduceChek = async () => {
    var mapFunction = function () {
        emit(this.State, this.Sites);
    };

    var reduceFunction = function (key, total) {
        return Array.sum(total);
    };

    const data = await Vaccination.mapReduce(
        mapFunction,
        reduceFunction,
        {
            out: "map_reduce_example"
        }
    )

    if (data !== null) {
        return data;
    } else {
        throw new Error("No Data Available");
    }
}