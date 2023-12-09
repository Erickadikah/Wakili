const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    title: {
        type: String,
        required: [true, 'Title is required'],
        maxlength: [32, 'Title must be less than 32 characters']
    },
    firstname: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: [32, 'Name must be less than 32 characters'],
        minlength: [3, 'Name must be more than 3 characters']

    },
   lastname: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: [32, 'Name must be less than 32 characters'],
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        maxlength: [32, 'Phone must be less than 32 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },

});

module.exports = mongoose.model('User', userSchema);