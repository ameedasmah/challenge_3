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

  'name': String,
  'type': String,
  'email': String,
  'passowerd': String,
  'line1': String,
  'line2': String,
  'city': String,
  'state': String,
  'zipcode': number,
  'phone': number,
  'creditcard': number,
  'expiry': String,
  'cvv': number,
  'zipcode': number
});

let data = mongoose.model('data', repoSchema);

let save = obj => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for (var i in obj) {
    var dat = new data({
      'name': obj.name,
      'type': obj.type,
      'email': obj.email,
      'passowerd': obj.passowerd,
      'line1': obj.line1,
      'line2': obj.line2,
      'city': obj.city,
      'state': obj.state,
      'zipcode': obj.zipcode,
      'phone': obj.phone,
      'creditcard': obj.creditcard,
      'expiry': obj.expiry,
      'cvv': obj.cvv,
      'zipcode': obj.zipcode
    });
  }

  data.save();
};

module.exports.save = save;
module.exports.Repo = Repo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9kYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJjb25uZWN0Iiwic2NlZW1hIiwiU2NoZW1hIiwiU3RyaW5nIiwibnVtYmVyIiwiZGF0YSIsIm1vZGVsIiwicmVwb1NjaGVtYSIsInNhdmUiLCJvYmoiLCJpIiwiZGF0IiwibmFtZSIsInR5cGUiLCJlbWFpbCIsInBhc3Nvd2VyZCIsImxpbmUxIiwibGluZTIiLCJjaXR5Iiwic3RhdGUiLCJ6aXBjb2RlIiwicGhvbmUiLCJjcmVkaXRjYXJkIiwiZXhwaXJ5IiwiY3Z2IiwibW9kdWxlIiwiZXhwb3J0cyIsIlJlcG8iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsTUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCO0FBQ0FELFNBQVNFLE9BQVQsQ0FBaUIsNkJBQWpCOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsU0FBU0gsU0FBU0ksTUFBVCxDQUFnQjs7QUFFM0I7O0FBRUEsVUFBT0MsTUFKb0I7QUFLM0IsVUFBUUEsTUFMbUI7QUFNM0IsV0FBV0EsTUFOZ0I7QUFPM0IsZUFBYUEsTUFQYztBQVEzQixXQUFTQSxNQVJrQjtBQVMzQixXQUFTQSxNQVRrQjtBQVUzQixVQUFRQSxNQVZtQjtBQVczQixXQUFTQSxNQVhrQjtBQVkzQixhQUFXQyxNQVpnQjtBQWEzQixXQUFTQSxNQWJrQjtBQWMzQixnQkFBY0EsTUFkYTtBQWUzQixZQUFVRCxNQWZpQjtBQWdCM0IsU0FBT0MsTUFoQm9CO0FBaUIzQixhQUFVQTtBQWpCaUIsQ0FBaEIsQ0FBYjs7QUFvQkEsSUFBSUMsT0FBT1AsU0FBU1EsS0FBVCxDQUFlLE1BQWYsRUFBdUJDLFVBQXZCLENBQVg7O0FBRUEsSUFBSUMsT0FBUUMsR0FBRCxJQUFTO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLE9BQUksSUFBSUMsQ0FBUixJQUFhRCxHQUFiLEVBQWlCO0FBQ2IsUUFBSUUsTUFBTSxJQUFJTixJQUFKLENBQVM7QUFDakIsY0FBT0ksSUFBSUcsSUFETTtBQUVqQixjQUFRSCxJQUFJSSxJQUZLO0FBR2pCLGVBQVdKLElBQUlLLEtBSEU7QUFJakIsbUJBQWFMLElBQUlNLFNBSkE7QUFLakIsZUFBU04sSUFBSU8sS0FMSTtBQU1qQixlQUFTUCxJQUFJUSxLQU5JO0FBT2pCLGNBQVFSLElBQUlTLElBUEs7QUFRakIsZUFBU1QsSUFBSVUsS0FSSTtBQVNqQixpQkFBV1YsSUFBSVcsT0FURTtBQVVqQixlQUFTWCxJQUFJWSxLQVZJO0FBV2pCLG9CQUFjWixJQUFJYSxVQVhEO0FBWWpCLGdCQUFVYixJQUFJYyxNQVpHO0FBYWpCLGFBQU9kLElBQUllLEdBYk07QUFjakIsaUJBQVVmLElBQUlXO0FBZEcsS0FBVCxDQUFWO0FBZ0JIOztBQUVEZixPQUFLRyxJQUFMO0FBRUQsQ0F6QkQ7O0FBMkJBaUIsT0FBT0MsT0FBUCxDQUFlbEIsSUFBZixHQUFzQkEsSUFBdEI7QUFDQWlCLE9BQU9DLE9BQVAsQ0FBZUMsSUFBZixHQUFzQkEsSUFBdEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG4vLyBsZXQgbHNjZW1hPSBtb25nb29zZS5TY2hlbWEoe1xyXG4vLyAgICAgbGluZW9uZT0nJyxcclxuLy8gICAgIGxpbmV0d28gPScnLFxyXG5cclxuLy8gfSlcclxuXHJcblxyXG5jb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3Qvc2hvcGluZycpO1xyXG5cclxuXHJcbi8vIGNvbnN0IGRiVVJJID0gJ21vbmdvZGIrc3J2Oi8vbmV0bmluamE6dGVzdDEyMzRAY2x1c3RlcjAuemFmYXMubW9uZ29kYi5uZXQvbm9kZS10dXN0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcclxuLy8gY29uc3QgY29ubmVjdCA9IG1vbmdvb3NlLmNvbm5lY3QoZGJVUkksXHJcbi8vICAge1xyXG4vLyAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbi8vICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSwgdXNlRmluZEFuZE1vZGlmeTogZmFsc2VcclxuLy8gICB9KVxyXG4vLyAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdNb25nb0RCIENvbm5lY3RlZC4uLicpKVxyXG4vLyAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblxyXG4vLyB2YXIgcHJvbWlzZSA9IG1vbmdvb3NlLmNyZWF0ZUNvbm5lY3Rpb24oJ21vbmdvZGI6Ly9sb2NhbGhvc3QvZmV0Y2hlcicsIHtcclxuLy8gICB1c2VNb25nb0NsaWVudDogdHJ1ZSxcclxuLyogb3RoZXIgb3B0aW9ucyAqL1xyXG5sZXQgc2NlZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuXHJcbiAgLy8gVE9ETzogeW91ciBzY2hlbWEgaGVyZSFcclxuXHJcbiAgJ25hbWUnOlN0cmluZyxcclxuICAndHlwZSc6IFN0cmluZyxcclxuICAnZW1haWwnIDogIFN0cmluZyxcclxuICAncGFzc293ZXJkJyA6U3RyaW5nLFxyXG4gICdsaW5lMScgOlN0cmluZyxcclxuICAnbGluZTInIDpTdHJpbmcsXHJcbiAgJ2NpdHknIDpTdHJpbmcsXHJcbiAgJ3N0YXRlJyA6U3RyaW5nLFxyXG4gICd6aXBjb2RlJyA6bnVtYmVyLFxyXG4gICdwaG9uZScgOm51bWJlcixcclxuICAnY3JlZGl0Y2FyZCcgOm51bWJlcixcclxuICAnZXhwaXJ5JyA6U3RyaW5nLFxyXG4gICdjdnYnIDpudW1iZXIsXHJcbiAgJ3ppcGNvZGUnOm51bWJlclxyXG59KTtcclxuXHJcbmxldCBkYXRhID0gbW9uZ29vc2UubW9kZWwoJ2RhdGEnLCByZXBvU2NoZW1hKTtcclxuXHJcbmxldCBzYXZlID0gKG9iaikgPT4ge1xyXG4gIC8vIFRPRE86IFlvdXIgY29kZSBoZXJlXHJcbiAgLy8gVGhpcyBmdW5jdGlvbiBzaG91bGQgc2F2ZSBhIHJlcG8gb3IgcmVwb3MgdG9cclxuICAvLyB0aGUgTW9uZ29EQlxyXG4gIGZvcih2YXIgaSBpbiBvYmope1xyXG4gICAgICB2YXIgZGF0ID0gbmV3IGRhdGEoe1xyXG4gICAgICAgICduYW1lJzpvYmoubmFtZSxcclxuICAgICAgICAndHlwZSc6IG9iai50eXBlLFxyXG4gICAgICAgICdlbWFpbCcgOiAgb2JqLmVtYWlsLFxyXG4gICAgICAgICdwYXNzb3dlcmQnIDpvYmoucGFzc293ZXJkLFxyXG4gICAgICAgICdsaW5lMScgOm9iai5saW5lMSxcclxuICAgICAgICAnbGluZTInIDpvYmoubGluZTIsXHJcbiAgICAgICAgJ2NpdHknIDpvYmouY2l0eSxcclxuICAgICAgICAnc3RhdGUnIDpvYmouc3RhdGUsXHJcbiAgICAgICAgJ3ppcGNvZGUnIDpvYmouemlwY29kZSxcclxuICAgICAgICAncGhvbmUnIDpvYmoucGhvbmUsXHJcbiAgICAgICAgJ2NyZWRpdGNhcmQnIDpvYmouY3JlZGl0Y2FyZCxcclxuICAgICAgICAnZXhwaXJ5JyA6b2JqLmV4cGlyeSxcclxuICAgICAgICAnY3Z2JyA6b2JqLmN2dixcclxuICAgICAgICAnemlwY29kZSc6b2JqLnppcGNvZGVcclxuICAgICAgfSlcclxuICB9XHJcbiBcclxuICBkYXRhLnNhdmUoKTtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLnNhdmUgPSBzYXZlO1xyXG5tb2R1bGUuZXhwb3J0cy5SZXBvID0gUmVwbzsiXX0=