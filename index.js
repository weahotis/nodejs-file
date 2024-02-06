const csv = require("csv-parse")
const fs = require("fs")


const result = []
fs.createReadStream("kepler_data.csv").pipe(csv.parse({
    comment: '#',
    columns: true
})).on('data', (data)=>{
    result.push(data)
}).on("end", ()=>{
    console.log(result);
    console.log("data added successfully")
})
