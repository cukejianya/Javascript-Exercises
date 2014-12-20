function perfNum(x) {
	var divSum = 0;
	for (var i = 0; i < x; i++) {
		if (x % i === 0) {
			divSum = divSum + i;
		}
	}
	if (divSum === x) {
		console.log(x + " is a perfect number");
	} else {
		console.log(x + " is not a perfect number");
	}
}
perfNum(8128);