module.exports=function(app,db){

	app.get('/reports',(req,res)=>{
		db.collection('allReports').find({}).toArray((err,item)=>{
			if (err) {
				res.send({'error':'An error has occured'})
			} else {
				res.send(item)
			};
		});
	});
};