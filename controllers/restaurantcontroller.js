import Restaurant from "../model/Restaurants.js"
import Comment from "../model/Comments.js"
import { getcomments } from "./comments_operation.js"
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
    res.status(200).json(restaurant)
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
  export const getRestaurantsComment = async(req,res)=>{
    try{
        const restaurant = await Restaurant.findById(req.params.id);
        console.log(restaurant)
       
        restaurant ={
            comments:[]
        }
       const comments = await getcomments()
       console.log(comments)

        res.status(200).json(list)
    }
    catch(err){
        res.status(200).json(err)
    
    }
    
    }
