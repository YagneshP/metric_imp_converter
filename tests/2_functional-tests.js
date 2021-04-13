const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
	suite('GET /api/convert', function () {
		test("should convert 1.2 mi to 1.93121 km", function (done) {
			chai
				.request(server)
				.get("/api/convert?input=1.2mi")
				.send({"initNum":1.2,"initUnit":'mi',"returnNum":1.93121,"returnUnit":'km',"string":'1.2 miles converts to 1.93121 kilometers'})
				.end(function (err, res) {
					if(err)	done(err)
					assert.equal(res.status, 200, "response status should be 200");
					assert.equal(res.body.initNum,1.2,"initNum is 1.2");
					assert.equal(res.body.initUnit,'mi',"initUnit is mi");
					assert.equal(res.body.returnNum,1.93121,"returnNum is 1.93121");
					assert.equal(res.body.returnUnit,'km',"returnUnit is km");
					assert.equal(res.body.string,'1.2 miles converts to 1.93121 kilometers','string should be in this format : {initNum} {initUnitString} converts to {returnNum} {returnUnitString}')
					// assert.property(req.body,'string');
					done();
				});
		});
});
});
