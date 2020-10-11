const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength : 50
    },
    slug : String,
    description: {
        type: String,
        required: true,
        maxlength: 1000
    },
    website : {
        type: String,
        match : /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    },
    phone: { 
        type : String,
        maxlength : 20
    },
    email: {
        type : String,
        match : /^\w+([\.-]?\2+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    address : {
        type : String,
        required: true
    }
})