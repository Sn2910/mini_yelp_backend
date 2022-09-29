const express = require('express')
const app = express()
app.use(express.json())
const port = 8000;

app.get('/',(req,res)=>{
    res.send('Hello World').status(200)
})
app.get('/restaurants',(req,res)=>{
    res.send({status:'Read data succesfully'}).status(200)
})
app.get('/restaurants/:id',(req,res)=>{
    res.send({status:'Read single data succesfully'}).status(200)
})
app.post('/restaurants',(req,res)=>{
    res.send({status:'Restaurants data created'}).status(201)
})
app.get('/tags',(req,res)=>{
    res.send({status:'Read tags succesfully'}).status(200)
})

app.get('/tags/:id',(req,res)=>{
    res.send({status:'Read single tag succesfully'}).status(200)
})
app.post('/tags',(req,res)=>{
    res.send({status:'Tags data created'}).status(201)
})
app.listen(port, () => console.log('Server started at port '  +port)
)