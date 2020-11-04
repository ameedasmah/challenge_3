
const express = require("express");
let app = express();
const {form1,form2,form3}=require("./public/db/index")

app.use(express.static(__dirname +'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post(,(req,res)=>{
//     res.status(201).jason(req.body)
// })

const data = {}
app.get('/app',(req,res)=>{
    res.sendFile(__dirname+'/./compiled/public/app.js')
})

app.post('/checkout',(req,res)=>{
    console.log(req.body)
    res.send(data)
})
app.listen(3000,()=>{
    console.log('server is working')
})

