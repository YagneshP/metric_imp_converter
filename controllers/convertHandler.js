function ConvertHandler() {
  const units = ["lbs", "km","gal","mi"];
  this.getNum = function(input) {
		// let numberRegex = /^(\d{1,}((\.)?(\d))?)((\/)\d{1,}((\.)?(\d))?)?/g  /*^(\d{1,}((.|\/)(\d{1,}))?)*/
		let consucetiveDotsRegex = /\..?(?=\.)/
		let doubleDividerRegex = /\/.?(?=\/)/
		let strRegex = /[a-z]/ // this regex will find the first word and its index in form of array
		let inputLower =	input.toLowerCase(); 
		let index = inputLower.match(strRegex)["index"];
		let num;
		if(index && index !== 0){
			num = inputLower.slice(0,index);
			if(!consucetiveDotsRegex.test(num)&&!doubleDividerRegex.test(num)){
				num = eval(num); // replace eval 
			}else{
				throw Error("Invalid Number") // not sure should return error
			}
		}else{
			num = 1
		}
    
    return num;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
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
