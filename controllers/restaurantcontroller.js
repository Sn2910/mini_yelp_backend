import Restaurant from "../model/Restaurants.js"
import Comment from "../model/Comments.js"
import { getComments } from "./comments_operation.js"
function _makeRestaurant(mdbRestaurant)  {
    return {
        id: mdbRestaurant._id,
        name: mdbRestaurant.name,
		image: mdbRestaurant.image,
		website: mdbRestaurant.website,
		city: mdbRestaurant.city,
		street: mdbRestaurant.street,
		streetnumber: mdbRestaurant.streetnumber,
		phonenumber: mdbRestaurant.phonenumber,
		latitude: mdbRestaurant.latitude,
		longitude: mdbRestaurant.longitude,
		rating: mdbRestaurant.rating,
		tags: mdbRestaurant.tags,
		
	}
    }


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

    res.status(200).json({..._makeRestaurant(restaurant),comments})
}
catch(err){
    res.status(200).json(err)

}

}
export const getRestaurants = async(req,res)=>{
    try{
        const restaurants = await Restaurant.find({})
        res.status(200).json(restaurants.map((restaurant)=>_makeRestaurant(restaurant)))
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
 