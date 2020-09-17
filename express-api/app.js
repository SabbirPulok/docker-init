const express = require('express');

const app = express();

app.use((req,res)=>{
    res.status(200).json({
        error:false,
        message:"Express Way"
    });
});

app.listen(4000,()=>{
    console.log("App running!");
});