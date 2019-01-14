module.exports=function(app,db){
	app.post('/createReport',(req,res)=>{
		const user={
			title:req.body.title,
			image:req.body.image,
			shortDesc:req.body.shortDesc,
			date:new Date(req.body.year,req.body.month),
			cost:req.body.cost,
			keyword:req.body.keyword,
			desc:req.body.desc
		};
		db.collection('allReports').insertOne(user,(err,results)=>{
			if (err) {
				res.send({'error':'An error has occured'})
			} else {
				res.send(results.ops[0])
			}
		});
	});
}