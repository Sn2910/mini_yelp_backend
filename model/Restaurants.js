import mongoose from 'mongoose';
const { Schema } = mongoose;
const RestaurantSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  image:{
    type:String,
  },
  website:{
    type:String,
  },
  city:
  {
    type:String,
  },
  
  
}) 