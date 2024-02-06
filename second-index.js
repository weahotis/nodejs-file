const csv = require("csv-parse")
const fs = require("fs");

const results = []
fs.createReadStream("annual-enterprice-2021.csv").pipe(csv.parse({
    // seperate comment by #
    comment: "#",
    columns: true
})).on("data", (res)=>{
    results.push(res)
}).on("end", ()=>{
    console.log("file parsed")
    console.log(results)
})
