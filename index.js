const csvtojson = require('csvtojson')
const fs = require('fs')
const csvfilepath = "battles.csv"
const connectDB = require('./config/db');
//db
connectDB();

csvtojson()
.fromFile(csvfilepath)
.then((jsonObj)=>{
   let res =  fs.writeFileSync("output.json",JSON.stringify(jsonObj,"utf-8",(err)=>{
        if(err) console.log(err)
    }))
})