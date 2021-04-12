'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
	app.route("/api/convert")
		 .get(function(req,res){
			 let input = req.body
			 let initNum = convertHandler.getNum(input);
			 let initUnit = convertHandler.getUnit(input);
			 let returnUnit = convertHandler.getReturnUnit(initUnit);
			 let returnNum = convertHandler.convert(initNum,initUnit);
			 let string = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);
			 return res.json({"initNum":initNum,"initUnit":initUnit,"returnNum":returnNum,"returnUnit":returnUnit,"string":string})
		 })
};
