import express from 'express';
const router = express.Router()
router.get('/',(req,res)=>{
    res.send("hello from cities")
})
router.get('/:id',(req,res)=>{
    res.send("hello from cities id").status(200)
})
router.post('/',(req,res)=>{
    res.status(201).send({status:'city data created'})
})
export default router;