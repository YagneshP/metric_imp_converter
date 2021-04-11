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
				if(unit === "l"){
					return unit.toUpperCase();
				}
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
		const roundFive = function(value){
			return Number(Math.round(value+'e'+5)+'e-'+5);
		}
		switch (initUnit) {
			case 'L':
				return roundFive(initNum/galToL);
				break;
			case 'gal':
				return roundFive(initNum*galToL) 
				break;
			case 'kg':
				return roundFive(initNum/lbsToKg) 
				break;
			case 'lbs':
				return roundFive(initNum*lbsToKg) 
				break;
			case 'km':
				return roundFive(initNum/miToKm)
				break;
			case 'mi':
				return roundFive(initNum*miToKm)
				break;
		}
 
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
		let unitStrings = {
			lbs:"pounds",
			L:"liters",
			km:"kilometers",
			mi:"miles",
			kg:"kilograms",
			gl:"gallons"
		}
		let initUnitString = unitStrings[initUnit];
		let returnUnitString = unitStrings[returnUnit]
    let result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
