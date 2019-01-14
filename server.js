const express=require('express');
const MongoClient=require('mongodb').MongoClient;
const bodyParser=require('body-parser');
const db=require('./config/db');

const app=express();

const port=8000;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended:true}))

MongoClient.connect(db.url,{ useNewUrlParser: true },(err,client)=>{
	if (err) return console.log(err)
	const database=client.db('reports')
	require('./app/routes')(app,database);
	app.listen(port,()=>{
		console.log("We are live on port number: "+port);
	})
})