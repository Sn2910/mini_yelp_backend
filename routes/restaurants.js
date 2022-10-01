import express from "express";
const router = express.Router();
const restaurant = {
  restaurant: {
    id: 1,
    name: "Burger King",
    RestaurantImage:
      "https://images.unsplash.com/photo-1626229652216-e5bb7f511917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    website: null,
    country: "Germany",
    city: "Augsburg",
    street: "",
    street_number: "",
    phone_number: "",
    latitude: "342.63778.758",
    longetude: "342.63778.758",
    comments: [
      {
        author: "Kenn",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        created_at: "",
        time: "",
      },
    ],
    rating: 1,
  },

  tags: ["Fast Food", "Vegan", "Drinks"],
};
const restaurants = [
  {
    id: 1,
    name: "Burger King",
    city: "Augsburg",
    tags: ["Fast Food", "Vegan", "Drinks"],
  },
  {
    id: 2,
    name: "Kfc",
    city: "Berlin",
    tags: ["Fast Food", "Vegan", "Burger"],
  },
  {
    id: 3,
    name: "Thai Restaurant",
    city: "Augsburg",
    tags: ["Vegan", "Drinks"],
  },
];
router.get("/", (req, res) => {
  res.send(restaurants);
});
router.get("/:id", (req, res) => {
  res.send(restaurant).status(200);
});
router.post("/", (req, res) => {
  res.status(201).send({ status: "Restaurants data created" });
});

router.get("/:id/comment", (req, res) => {
  res.status(201).send({ status: "Comment Added" });
});
export default router;
