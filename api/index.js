const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {config} = require('./config/index');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());


app.get('/',
    async(req,res,next)=>{
        res.send('Welcome to api MakeUp');
    }
);


app.listen(config.port,()=>{
    console.log(config.port);
})