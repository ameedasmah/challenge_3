// const mongoose = require('mongoose');

// let lscema= mongoose.Schema({
//     lineone='',
//     linetwo ='',

// })


const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://netninja:test1234@cluster0.zafas.mongodb.net/node-tust?retryWrites=true&w=majority';
const connect = mongoose.connect(dbURI, {
  useNewUrlParser: true, useUnifiedTopology: true,
  useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

// var promise = mongoose.createConnection('mongodb://localhost/fetcher', {
//   useMongoClient: true,
/* other options */
let Form1 = mongoose.Schema({

  // TODO: your schema here!

  name: String,
  type: String,
  email: String,
  passowerd: String
});
let Form2 = mongoose.Schema({

  line1: String,
  line2: String,
  city: String,
  state: String,
  zipcode: Number,
  phone: Number
});
let Form3 = mongoose.Schema({
  creditcard: Number,
  expiry: String,
  cvv: Number,
  zipcode: Number
});

let form1 = mongoose.model('Form1', Form1);
let form2 = mongoose.model('Form2', Form2);
let form3 = mongoose.model('Form3', Form3);
// let save = (obj) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
//   for(var i in obj){
//       var dat = new data({
//         'name':obj.name,
//         'type': obj.type,
//         'email' :  obj.email,
//         'passowerd' :obj.passowerd,
//         'line1' :obj.line1,
//         'line2' :obj.line2,
//         'city' :obj.city,
//         'state' :obj.state,
//         'zipcode' :obj.zipcode,
//         'phone' :obj.phone,
//         'creditcard' :obj.creditcard,
//         'expiry' :obj.expiry,
//         'cvv' :obj.cvv,
//         'zipcode':obj.zipcode
//       })
//   }

// data.save();


module.exports.form1 = form1;
module.exports.form2 = form2;
module.exports.form3 = form3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9kYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJkYlVSSSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiRm9ybTEiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwidHlwZSIsImVtYWlsIiwicGFzc293ZXJkIiwiRm9ybTIiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInN0YXRlIiwiemlwY29kZSIsIk51bWJlciIsInBob25lIiwiRm9ybTMiLCJjcmVkaXRjYXJkIiwiZXhwaXJ5IiwiY3Z2IiwiZm9ybTEiLCJtb2RlbCIsImZvcm0yIiwiZm9ybTMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE1BQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFJQSxNQUFNQyxRQUFRLGtHQUFkO0FBQ0EsTUFBTUMsVUFBVUgsU0FBU0csT0FBVCxDQUFpQkQsS0FBakIsRUFDZDtBQUNFRSxtQkFBaUIsSUFEbkIsRUFDeUJDLG9CQUFvQixJQUQ3QztBQUVFQyxrQkFBZ0IsSUFGbEIsRUFFd0JDLGtCQUFrQjtBQUYxQyxDQURjLEVBS2JDLElBTGEsQ0FLUixNQUFNQyxRQUFRQyxHQUFSLENBQVksc0JBQVosQ0FMRSxFQU1iQyxLQU5hLENBTVBDLE9BQU9ILFFBQVFDLEdBQVIsQ0FBWUUsR0FBWixDQU5BLENBQWhCOztBQVFBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLFFBQVFiLFNBQVNjLE1BQVQsQ0FBZ0I7O0FBRTFCOztBQUVBQyxRQUFLQyxNQUpxQjtBQUsxQkMsUUFBTUQsTUFMb0I7QUFNMUJFLFNBQVNGLE1BTmlCO0FBTzFCRyxhQUFXSDtBQVBlLENBQWhCLENBQVo7QUFTQSxJQUFJSSxRQUFRcEIsU0FBU2MsTUFBVCxDQUFnQjs7QUFFMUJPLFNBQU9MLE1BRm1CO0FBRzFCTSxTQUFPTixNQUhtQjtBQUkxQk8sUUFBTVAsTUFKb0I7QUFLMUJRLFNBQU9SLE1BTG1CO0FBTTFCUyxXQUFTQyxNQU5pQjtBQU8xQkMsU0FBT0Q7QUFQbUIsQ0FBaEIsQ0FBWjtBQVNBLElBQUlFLFFBQVE1QixTQUFTYyxNQUFULENBQWdCO0FBQzFCZSxjQUFZSCxNQURjO0FBRTFCSSxVQUFRZCxNQUZrQjtBQUcxQmUsT0FBS0wsTUFIcUI7QUFJMUJELFdBQVFDO0FBSmtCLENBQWhCLENBQVo7O0FBT0EsSUFBSU0sUUFBUWhDLFNBQVNpQyxLQUFULENBQWUsT0FBZixFQUF3QnBCLEtBQXhCLENBQVo7QUFDQSxJQUFJcUIsUUFBUWxDLFNBQVNpQyxLQUFULENBQWUsT0FBZixFQUF3QmIsS0FBeEIsQ0FBWjtBQUNBLElBQUllLFFBQVFuQyxTQUFTaUMsS0FBVCxDQUFlLE9BQWYsRUFBd0JMLEtBQXhCLENBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRTs7O0FBSUZRLE9BQU9DLE9BQVAsQ0FBZUwsS0FBZixHQUF1QkEsS0FBdkI7QUFDQUksT0FBT0MsT0FBUCxDQUFlSCxLQUFmLEdBQXVCQSxLQUF2QjtBQUNBRSxPQUFPQyxPQUFQLENBQWVGLEtBQWYsR0FBdUJBLEtBQXZCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuLy8gbGV0IGxzY2VtYT0gbW9uZ29vc2UuU2NoZW1hKHtcclxuLy8gICAgIGxpbmVvbmU9JycsXHJcbi8vICAgICBsaW5ldHdvID0nJyxcclxuXHJcbi8vIH0pXHJcblxyXG5cclxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuXHJcblxyXG5jb25zdCBkYlVSSSA9ICdtb25nb2RiK3NydjovL25ldG5pbmphOnRlc3QxMjM0QGNsdXN0ZXIwLnphZmFzLm1vbmdvZGIubmV0L25vZGUtdHVzdD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXHJcbmNvbnN0IGNvbm5lY3QgPSBtb25nb29zZS5jb25uZWN0KGRiVVJJLFxyXG4gIHtcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlXHJcbiAgfSlcclxuICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTW9uZ29EQiBDb25uZWN0ZWQuLi4nKSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG5cclxuLy8gdmFyIHByb21pc2UgPSBtb25nb29zZS5jcmVhdGVDb25uZWN0aW9uKCdtb25nb2RiOi8vbG9jYWxob3N0L2ZldGNoZXInLCB7XHJcbi8vICAgdXNlTW9uZ29DbGllbnQ6IHRydWUsXHJcbi8qIG90aGVyIG9wdGlvbnMgKi9cclxubGV0IEZvcm0xID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuXHJcbiAgLy8gVE9ETzogeW91ciBzY2hlbWEgaGVyZSFcclxuXHJcbiAgbmFtZTpTdHJpbmcsXHJcbiAgdHlwZTogU3RyaW5nLFxyXG4gIGVtYWlsIDogIFN0cmluZyxcclxuICBwYXNzb3dlcmQgOlN0cmluZyxcclxufSlcclxubGV0IEZvcm0yID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuXHJcbiAgbGluZTEgOlN0cmluZyxcclxuICBsaW5lMiA6U3RyaW5nLFxyXG4gIGNpdHkgOlN0cmluZyxcclxuICBzdGF0ZSA6U3RyaW5nLFxyXG4gIHppcGNvZGUgOk51bWJlcixcclxuICBwaG9uZSA6TnVtYmVyLFxyXG59KVxyXG5sZXQgRm9ybTMgPSBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGNyZWRpdGNhcmQgOk51bWJlcixcclxuICBleHBpcnkgOlN0cmluZyxcclxuICBjdnYgOk51bWJlcixcclxuICB6aXBjb2RlOk51bWJlclxyXG59KTtcclxuXHJcbmxldCBmb3JtMSA9IG1vbmdvb3NlLm1vZGVsKCdGb3JtMScsIEZvcm0xKTtcclxubGV0IGZvcm0yID0gbW9uZ29vc2UubW9kZWwoJ0Zvcm0yJywgRm9ybTIpO1xyXG5sZXQgZm9ybTMgPSBtb25nb29zZS5tb2RlbCgnRm9ybTMnLCBGb3JtMyk7XHJcbi8vIGxldCBzYXZlID0gKG9iaikgPT4ge1xyXG4vLyAgIC8vIFRPRE86IFlvdXIgY29kZSBoZXJlXHJcbi8vICAgLy8gVGhpcyBmdW5jdGlvbiBzaG91bGQgc2F2ZSBhIHJlcG8gb3IgcmVwb3MgdG9cclxuLy8gICAvLyB0aGUgTW9uZ29EQlxyXG4vLyAgIGZvcih2YXIgaSBpbiBvYmope1xyXG4vLyAgICAgICB2YXIgZGF0ID0gbmV3IGRhdGEoe1xyXG4vLyAgICAgICAgICduYW1lJzpvYmoubmFtZSxcclxuLy8gICAgICAgICAndHlwZSc6IG9iai50eXBlLFxyXG4vLyAgICAgICAgICdlbWFpbCcgOiAgb2JqLmVtYWlsLFxyXG4vLyAgICAgICAgICdwYXNzb3dlcmQnIDpvYmoucGFzc293ZXJkLFxyXG4vLyAgICAgICAgICdsaW5lMScgOm9iai5saW5lMSxcclxuLy8gICAgICAgICAnbGluZTInIDpvYmoubGluZTIsXHJcbi8vICAgICAgICAgJ2NpdHknIDpvYmouY2l0eSxcclxuLy8gICAgICAgICAnc3RhdGUnIDpvYmouc3RhdGUsXHJcbi8vICAgICAgICAgJ3ppcGNvZGUnIDpvYmouemlwY29kZSxcclxuLy8gICAgICAgICAncGhvbmUnIDpvYmoucGhvbmUsXHJcbi8vICAgICAgICAgJ2NyZWRpdGNhcmQnIDpvYmouY3JlZGl0Y2FyZCxcclxuLy8gICAgICAgICAnZXhwaXJ5JyA6b2JqLmV4cGlyeSxcclxuLy8gICAgICAgICAnY3Z2JyA6b2JqLmN2dixcclxuLy8gICAgICAgICAnemlwY29kZSc6b2JqLnppcGNvZGVcclxuLy8gICAgICAgfSlcclxuLy8gICB9XHJcbiBcclxuICAvLyBkYXRhLnNhdmUoKTtcclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuZm9ybTEgPSBmb3JtMTtcclxubW9kdWxlLmV4cG9ydHMuZm9ybTIgPSBmb3JtMjtcclxubW9kdWxlLmV4cG9ydHMuZm9ybTMgPSBmb3JtMzsiXX0=