module.exports=function(app,db){

	app.get('/searchReports/:keyword',(req,res)=>{

		const keyword=req.params.keyword;
		const queryIfExists={
			"keyword":keyword
		}
		db.collection('allReports').find(queryIfExists).toArray((err,item)=>{
			if (err) {
				res.send({'error':'An error has occured'})
			} else {
				res.send(item)
			};
		});
	});
};