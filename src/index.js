const express =require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes=require('./routes/user');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json())
app.use(cors())
app.use('/api', userRoutes);


//router
app.get('/', (req,res)=>{
    res.send("welcom to my API");
})

console.log(process.env.MONGODB_URI)
// modgoDB connection
mongoose
.set("strictQuery",true)
.connect(process.env.MONGODB_URI)
.then(()=>console.log("conexion a mongodb atlas"))
.catch((error)=>console.log(error))
app.listen(port, () => console.log('server listening on port', port));



