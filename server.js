const userRoute = require('./backend/Routes/userRoutes');

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Body Parser 
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3001;


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

//For CSS
app.use(express.static('frontend'));
app.use("/",userRoute);


app.listen(port, () => {
    console.log(`Form app listening on port ${port}`)
})





