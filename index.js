const express = require('express')
const app = express()
app.use(express.json())
const port = 8000;

app.get('/',(req,res)=>{
    res.send('Hello World').status(200)
})
app.listen(port, () => console.log('Server started at port '  +port)
)