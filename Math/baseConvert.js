function baseConvert(num, base1, base2){
	if ((2 <= base1 && base1<= 36)||(2 <= base2 && base2<= 36)) {
		
		num = num.toString().split("");
		var baseX = 0;
		var charToInt;
		var power = num.length-1; // var for exponent when converting base1 to base of 10;

		//this for loop does a few things. It first checks to see if the digit is a char or a int. If it is a char, using ACSII, we substract 55 from the char code which gives us our deserved digit in base 10. If it is a int, then parseInt to a datatype int.
		//Afterwords, it replaces the array element with the new int.
		//Then we add up the digits multiplied by the corresponding base powered.
		for (var i = 0; i < num.length; i++) {
			var tooBig = num[i]; // var just incase digit is too big since we 						change num[i] to int
			if (isNaN(parseInt(num[i]))) {
				charToInt = num[i].toUpperCase().charCodeAt(0)-55;
				num.splice(i, 1, charToInt);
			} else {
				charToInt = parseInt(num[i]);
			}
			//check to see if digit actually belongs to base1 digit
			if (base1 > num[i]) { 
				num.splice(i, 1, charToInt);
				baseX += Math.pow(base1, power-i)*num[i];
			} else {
				return tooBig+" is too big to be a digit of base "+base1;
			}
		}

		num = baseX;
		y = [];
		var base2Conversion = function(num, base2) {
			x = parseInt(num/base2);
			if (x !== 0){
				base2Conversion(x, base2);
			}
			y.push(num%base2);
		};
		base2Conversion(num, base2);
		y = y.join("");
		return y;

    } else {
    	console.log("Please pick bases between 2 and 36");     
    } 
}
console.log(baseConvert("F63", 16, 2));
