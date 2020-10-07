const csvParser = require("csv-parser");
const fs = require("fs");
//const csv = require ("csv-parser");
const csv = require("fast-csv");

function totalPopulation(onFinished) {
  let total = 0;
  console.log("HI i'm HERE");
  fs.createReadStream("cities.csv")
    .pipe(csv.parse({ Headers: true }))

    .on("data", (row) => {
      total += row.totalPopulation;
      console.log(row);
    })
    .on("end", () => {
      console.log("success!");
    });
}

module.exports = {
  totalPopulation,
};
