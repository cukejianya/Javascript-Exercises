function evenDash(x) {
	if (typeof x === "number") {
		x = x.toString();
		x = x.split("");
		console.log(parseInt(x[1]));
	for (var i = 0; i < x.length-1; i++) {
		if (typeof x == "number")
			parseInt(x[i]);
		if (x[i]%2 === 0 && x[i+1]%2 === 0) {
				x.splice(i,0,"-");
				console.log(x);
		}
	}
		console.log(x);

	} else {
		return "please input a number.";
	}
}

evenDash(32423890);