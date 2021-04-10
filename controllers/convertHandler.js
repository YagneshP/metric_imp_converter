function ConvertHandler() {

  this.getNum = function(input) {
		// let numberRegex = /^(\d{1,}((\.)?(\d))?)((\/)\d{1,}((\.)?(\d))?)?/g  /*^(\d{1,}((.|\/)(\d{1,}))?)*/
		let consucetiveDotsRegex = /\..?(?=\.)/
		let doubleFractionRegex = /\/.?(?=\/)/
		let strRegex = /[a-z]/ 
		let inputLower =	input.toLowerCase(); 
		let index = inputLower.match(strRegex)["index"];//find the first word and its index 
		let num;
		if(index && index !== 0){
			num = inputLower.slice(0,index);
			if(!consucetiveDotsRegex.test(num)&&!doubleFractionRegex.test(num)){
				num = eval(num); // replace eval 
			}else{
				throw Error("invalid number") // not sure should return error
			}
		}else{
			num = 1
		}
    return num;
  };
  
  this.getUnit = function(input) {
    let strRegex = /[a-z]/ ;
		let unitRegex = /^(mi|km|gal|l|lbs|kg)$/g;
		let inputLower =	input.toLowerCase(); 
		let index = inputLower.match(strRegex)["index"];//find the first word and its index 
		let unit;
		if(index){
			unit = inputLower.slice(index);
			if(unitRegex.test(unit)){
				return unit
			} else{
				throw Error("invalid unit");
			}
		}else{
			throw Error("invalid unit")
		}
  };
  
  this.getReturnUnit = function(initUnit) {
		let units = {
			mi:"km",
			km:"mi",
			L:"gal",
			gal:"L",
			lbs:"kg",
			kg:"lbs"
		}
    return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    let unitString = {
			mi:"miles",
			km:"kilometers",
			L:"liters",
			gal:"gallons",
			lbs:"pounds",
			kg:"kilograms"
		}
    
    return unitString[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
