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
			assert.throws(convertHandler.getNum("1/2/3mi"), errorInstance,"invalid number")
		})
		test("should correctly default to a numerical input of 1 when no numerical input is provided", function(){
			assert.strictEqual(convertHandler.getNum("mi"),1,"getting 1 as default value for no input numeric");
		})
	})
	suite("getUnit function unit tests", function(){
		test("should correctly read each valid input unit",function(){
			assert.strictEqual(convertHandler.getUnit("1.2mi"),"mi","should read 'mi' unit only");
			assert.strictEqual(convertHandler.getUnit("1/3km"),"km","should read 'km' unit only");
			assert.strictEqual(convertHandler.getUnit("1.3l"),"L","should return 'L' unit only");
		})
		test("should correctly return an error for an invalid input unit",function(){
			assert.throws(convertHandler.getUnit("1.3mim"), errorInstance,"invalid unit")
			assert.throws(convertHandler.getUnit("1.2mikm"),errorInstance,"invalid unit")
			assert.throws(convertHandler.getUnit("1.2"),errorInstance,"invalid unit")
		})
	})
	suite("getReturnUnit function unit test",function(){
		test("should return the correct return unit for each valid input unit",function(){
			assert.strictEqual(convertHandler.getReturnUnit("mi"),"km","for 'mi' it returns 'km'")
			assert.strictEqual(convertHandler.getReturnUnit("km"),"mi","for 'km' it returns 'mi'")
		})
	})
	suite("spellOutUnit function unit test",function(){
		test("should correctly return the spelled-out string unit for each valid input unit",function(){
			assert.strictEqual(convertHandler.spellOutUnit("mi"),"miles","for 'mi' it returns 'miles'")
			assert.strictEqual(convertHandler.spellOutUnit("km"),"kilometers","for 'km' it returns 'kilometers'")
			assert.strictEqual(convertHandler.spellOutUnit("gal"),"gallons","for 'gal' it returns 'gallons'")
		})
	})
	suite("convert function unit test", function(){
		test("should correctly convert gal to L", function(){
			assert.strictEqual(convertHandler.convert(1.2,"gal"),4.54249,"converts gallons to liters")
		})
		test("should correctly convert L to gal", function(){
			assert.strictEqual(convertHandler.convert(1.2,"L"),0.31701,"converts liters to gallons")
		})
		test("should correctly convert mi to km", function(){
			assert.strictEqual(convertHandler.convert(1.2,"mi"),1.93121,"converts miles to kilometers")
		})
		test("should correctly convert km to mi", function(){
			assert.strictEqual(convertHandler.convert(1.2,"km"),0.74565,"converts kilometers to miles")
		})
		test("should correctly convert lbs to kg", function(){
			assert.strictEqual(convertHandler.convert(1.2,"lbs"),0.54431,"converts pounds to kilograms")
		})
		test("should correctly convert kg to lbs", function(){
			assert.strictEqual(convertHandler.convert(1.2,"kg"),2.64555,"converts kilograms to pounds")
		})
	})

});