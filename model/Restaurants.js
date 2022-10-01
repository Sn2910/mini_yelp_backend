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
  street:{
    type:String,
    required:true
  },
  streetnumber:{
    type:Number,
    required:true
  },
  phonenumber:{
    type:String,
    required:true
  },
  latitude:{
    type:String,
    
  },
  longitude:{
    type:String,
    
  },
  rating:{
    type:Number,
    min: 0,
    max: 5,
  },
  tags:{
    type:[String],
    
  },
  
}) 
export default mongoose.model("Restaurant",RestaurantSchema)