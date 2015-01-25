function baseConvert(num, base1, base2){
	if ((2 <= base1 && base1<= 36)||(2 <= base2 && base2<= 36)) {
		num = num.toString().split("");
		var baseX = 0;

		for(var i = num.length-1; i >= 0; i--) {
			console.log(parseInt(num[i]));
			if (parseInt(num[i]) == isNaN) {
				var charToInt = num[i].toUpperCase().charCode(0)-55;
				num.splice(i, 1, charToInt);
				console.log(num + "Yo");
			}
			// baseX += Math.pow(baseX, i)*num[i];
		}

	} else {
		console.log("Please pick bases between 2 and 36");
	}
}
baseConvert("432F", 3, 4);