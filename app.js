//*****Require npm packages */
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

//*****Require routers */
const userRouter = require('./routes/user.router.js');
const healthRouter = require('./routes/health.router.js');

//****create app */
const app = express();

//******Bulid in middlewire use */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan());

//**use custom middlewire */
app.use('/api/users',userRouter);
app.use('/api',healthRouter);


//***Root route define */
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/./views/index.html');
})

//****Error handaling middleware function define */
    //***for 404 error */

    app.use((req,res,next)=>{
        res.status(404).send(`<h1> 404 not found </h1>`);
    });
    app.use((err,req,res,next)=>{
        res.status(500).send(`<h1> Something went wrong </h1>`);
    })

//******8Export app */
module.exports = app;