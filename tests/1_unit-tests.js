const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
	test('get the whole number from the input', function(){
		assert.strictEqual(convertHandler.getNum('3mi'),3,"getting whole number  from input")
	})
	test('get the decimal number from the input', function(){
		assert.strictEqual(convertHandler.getNum('3.1km'),3.1,"getting the decimal number")
	})
	test('get the fraction number from the input', function(){
		assert.strictEqual(convertHandler.getNum("4/3L"),4/3,"getting fractional number")
	})
	test('get the fraction number with decimal from the input', function(){
		assert.strictEqual(convertHandler.getNum("4.1/3.5L"),4.1/3.5,"getting fractional with decimal number")
	})
	test("throw error when input has double-fraction",function(){
		assert.throws(convertHandler.getNum("1/2/3mi"), errorInstance,"Invalid Number")
	})
	test("should return default numeric value 1 when no input numeric", function(){
		assert.strictEqual(convertHandler.getNum("mi"),1,"getting 1 as default value for no input numeric");
	})

});