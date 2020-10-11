const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// load env
dotenv.config({ path : './config/config.env'});

// connect database
connectDB();

const app = express();

// load route
const bootcamps = require('./routes/bootcamps');


// dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// route
app.use('/api/v1/bootcamps', bootcamps);

// listen to port
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Berjalan di ${process.env.NODE_ENV} mode di port ${PORT}`));

// handle unhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(err.message);
    server.close(() => process.exit(1));
})