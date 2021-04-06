
const mongoogse = require("mongoose");

mongoogse.connect("mongodb://localhost:27017/portfolio",{
   useCreateIndex:true,
   useNewUrlParser:true,
   useUnifiedTopology:true,

}).then(()=>{
    console.log("Connection successfull");
}).catch((e)=>{
    console.log("No Connection");
})