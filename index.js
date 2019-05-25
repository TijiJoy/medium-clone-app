const express = require('express')
const app = express()
const port = 3000
const path=require('path')
const mongoose = require('mongoose');
const config=require('./config/database')



mongoose.Promise=global.Promise;
mongoose.connect(config.uri, {useNewUrlParser: true} ,(err)=>

{
if(err){
console.log('couldnot connect to database',err);
}else
{

//console.log(config.secret);
console.log('connected to database'+ ' '+ config.db);
}
});


app.use(express.static(__dirname+'/client/dist/'));
app.get('/', (req, res) =>{
   // res.send('Hello!!')
   res.sendfile(path.join(__dirname+'/client/dist/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))