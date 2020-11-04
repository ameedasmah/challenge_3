// const mongoose = require('mongoose');

// let lscema= mongoose.Schema({
//     lineone='',
//     linetwo ='',

// })


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoping');


// const dbURI = 'mongodb+srv://netninja:test1234@cluster0.zafas.mongodb.net/node-tust?retryWrites=true&w=majority'
// const connect = mongoose.connect(dbURI,
//   {
//     useNewUrlParser: true, useUnifiedTopology: true,
//     useCreateIndex: true, useFindAndModify: false
//   })
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));

// var promise = mongoose.createConnection('mongodb://localhost/fetcher', {
//   useMongoClient: true,
/* other options */
let sceema = mongoose.Schema({

  // TODO: your schema here!

  'name':String,
  'type': String,
  'email' :  String,
  'passowerd' :String,
  'line1' :String,
  'line2' :String,
  'city' :String,
  'state' :String,
  'zipcode' :number,
  'phone' :number,
  'creditcard' :number,
  'expiry' :String,
  'cvv' :number,
  'zipcode':number
});

let data = mongoose.model('data', repoSchema);

let save = (obj) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for(var i in obj){
      var dat = new data({
        'name':obj.name,
        'type': obj.type,
        'email' :  obj.email,
        'passowerd' :obj.passowerd,
        'line1' :obj.line1,
        'line2' :obj.line2,
        'city' :obj.city,
        'state' :obj.state,
        'zipcode' :obj.zipcode,
        'phone' :obj.phone,
        'creditcard' :obj.creditcard,
        'expiry' :obj.expiry,
        'cvv' :obj.cvv,
        'zipcode':obj.zipcode
      })
  }
 
  data.save();

}

module.exports.save = save;
module.exports.Repo = Repo;