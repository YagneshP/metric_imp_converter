const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
	suite("getNumber function unit tests", function(){
		test('should correctly read a whole number input',function(){
			assert.strictEqual(convertHandler.getNum('3mi'),3,"getting whole number  from input")
		})
		test('should correctly read a decimal number input',function(){
			assert.strictEqual(convertHandler.getNum('3.1km'),3.1,"getting the decimal number")
		})
		test('should correctly read a fractional input', function(){
			assert.strictEqual(convertHandler.getNum("4/3L"),4/3,"getting fractional number")
		})
		test('should correctly return an error on a double-fraction',function(){
			assert.strictEqual(convertHandler.getNum("4.1/3.5L"),4.1/3.5,"getting fractional with decimal number")
		})
		test("should correctly return an error on a double-fraction",function(){
			assert.throws(convertHandler.getNum("1/2/3mi"), errorInstance,"Invalid Number")
		})
		test("should correctly default to a numerical input of 1 when no numerical input is provided", function(){
			assert.strictEqual(convertHandler.getNum("mi"),1,"getting 1 as default value for no input numeric");
		})
	})
	suite("getUnit function unit tests", function(){
		test("should correctly read each valid input unit",function(){
			assert.strictEqual(convertHandler.getUnit("1.2mi"),"mi","should read 'mi' unit only");
			assert.strictEqual(convertHandler.getUnit("1/3km"),"km","should read 'km' unit only")
		})
		test("should correctly return an error for an invalid input unit",function(){
			assert.throws(convertHandler.getUnit("1.3mim"), errorInstance,"Invalid Unit")
			assert.throws(convertHandler.getUnit("1.2mikm"),errorInstance,"Invalid Unit")
			assert.throws(convertHandler.getUnit("1.2"),errorInstance,"Invalid Unit")
		})

	})

});