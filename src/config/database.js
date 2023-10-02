const mongoose = require('mongoose');


exports.connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGODB_URI)
        console.log('Successfully connected to database')
    }
    catch(error) {
        console.log("database connection failed. exiting now...");
        console.log(error)
        process.exit()
    }
}


