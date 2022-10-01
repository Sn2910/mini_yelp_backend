import express from 'express';
const router = express.Router()
router.get('/',(req,res)=>{
    res.send("hello from tags")
})
router.get('/:id',(req,res)=>{
    res.send("hello from tags id").status(200)
})
router.post('/',(req,res)=>{
    res.status(201).send({status:'Tag data created'})
})
export default router;