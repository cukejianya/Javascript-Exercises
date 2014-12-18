function abcOrder(txt) {
	var letters = /^[A-Za-z]+$/;
	if (letters.test(txt)) {
		txt = txt.toLowerCase().split("").sort().join("");
		console.log(txt);
	} else {
		console.log("Please input only letters");
	}
}
abcOrder("Wordadsfklasjfdkjfalsfdjagagdhajkfhdsalsfhaj");