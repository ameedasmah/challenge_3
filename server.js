
const express = require("express");
let app = express();

app.use(express.static(__dirname +'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post(,(req,res)=>{
//     res.status(201).jason(req.body)
// })

// app.get('/Jasontocvs' , (req,res) =>{
//     res.status(200).json(req,res)
//   })

app.listen(3000,()=>{
    console.log('server is working')
})

