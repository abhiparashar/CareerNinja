const fs  = require('fs')
const mongoose  = require('mongoose')
const dotenv = require('dotenv')

//Load env variables
dotenv.config()

//connect to db
mongoose.connect("mongodb://localhost:27017/battle",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})

//Read JSON files
const battles = JSON.parse(fs.readFileSync(`${__dirname}/output.json`,'utf-8'))

//Insert into database
const importDB = (res,err)=>{
    try {
        await Battle.create(battles)
        console.log('Data created')
        process.exit()
    } catch (error) {
        console.error(err)
    }
}

//Destroy DB
const destroyDB = async(res,err)=>{
    try {   
        await Battle.deleteMany()
        console.log("Data deleted...");
        process.exit()
    } catch (err) {
        console.log(err)
    }
}

if(process.argv[2]==='-i'){
    importDB()
}else if (process.argv[2] === "-d") {
    destroyDB()
}