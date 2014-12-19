function primeTeller(x) { 
	if (typeof x === "number") {
		for(i=1; i<=x; i++) {
			if (x % i === 0 && x !== x) {
				console.log(x + " is not a prime number.");
				break;
			} else if(x == x) {
				console.log(x + " is a prime number.");
				break;
			}
		}
	} else {
		console.log("Please Input a Number");
	}
}
primeTeller(32416190071);