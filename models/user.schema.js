const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: [3,"Name minimum length is 3"],
        maxlength: [20,"Name maximum length is 15"]
    },
    age:{
        type: Number,
        required : true,
        min:[18,"Only 18+ user are allowed"],
        max:[100,"you are so old you need to rest in peace"]
    },
    date:{
        type: Date,
        default: Date.now
    }
});


module.exports = new mongoose.model('users',userSchema);