const reports=require('./reports');
const createReport=require('./createReport');
const searchReports=require('./searchReports');

module.exports=function(app,db){
	reports(app,db);
	createReport(app,db);
	searchReports(app,db);
}