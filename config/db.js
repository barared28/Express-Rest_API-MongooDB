const mongoose = require('mongoose');
const url = 'mongodb+srv://barared28:Opoaeoleh123@database-latihan.3fk4i.mongodb.net/devcamper?retryWrites=true&w=majority'
const connectDB = async () => {
    const coon = await mongoose.connect(url, {
        useNewUrlParser : true ,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}

module.exports = connectDB;