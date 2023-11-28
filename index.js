require ('dotenv').config() //vytvori configurable env environment v aplikaci
const express = require('express') // require expressJS before running

//Variables
const app = express();
const port = process.env.PORT;
const msg = "Hello World!"

app.get('/',(req,res) => {
  res.send(msg);  
});

app.listen(port,()=>{
    console.log("[server] The app is running at ...")
})