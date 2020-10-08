const express =  require ('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

require('./app/routes/note.routes')(app);

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("Connected to database ....");
})
.catch(err=>{
    console.log("Failed to connect", err);
    process.exit();
})


app.get('/',(req,res)=>{
    res.json({"message":"H!i"});
})

app.listen(3000,()=>{
    console.log("Server running 3000");
})