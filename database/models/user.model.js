import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name:{
    type:String,
    minLength:2,
    maxLength:15,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    minLength: 3,
    required:true
  },
  age:{
    type:Number,
    min:10,
    max:80
  },
  confirmedEmail:{
    type:Boolean,
    default:false
  }
});

export const userModel =mongoose.model('User',userSchema);