import Restaurant from "../model/Restaurants.js"
import Comment from "../model/Comments.js"
import { getComments } from "./comments_operation.js"
export const createRestaurant = async(req,res)=>{
    const newRestaurant =  new Restaurant(req.body)
try{
    const savedRestaurant = await newRestaurant.save()
    res.status(200).json(savedRestaurant)
}
catch(err){
    res.status(200).json(err)

}

}
export const getRestaurant = async(req,res)=>{
try{
    const restaurant = await Restaurant.findById(req.params.id)
    const comments = await getComments(restaurant._id)
    restaurant.comments =comments
    console.log("comments" , comments)

    res.status(200).json({...restaurant.toObject(),comments})
}
catch(err){
    res.status(200).json(err)

}

}
export const getRestaurants = async(req,res)=>{
    try{
        const restaurants = await Restaurant.find({})
        res.status(200).json(restaurants)
    }
    catch(err){
        res.status(200).json(err)
    
    }
    
    }
export const updateRestaurant = async (req, res) => {
    try {
      const updatedRestaurant = await Restaurant.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRestaurant);
    } catch (err) {
        res.status(200).json(err)
    }
  };
 