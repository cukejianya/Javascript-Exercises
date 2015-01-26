function randomInt(int1, int2){
	var min = Math.min(int1, int2);
	var max = Math.max(int1, int2);
	var randomReal = Math.random()*(max-min)+min;

	if(isNaN(int1)){
		return 0;
	} else if(isNaN(int2)) {
		return int1;
	} else {
		return Math.round(randomReal);
	}

}

console.log(randomInt(5));
console.log(randomInt(5,4));
console.log(randomInt(3,0));
console.log(randomInt(5, 10));
console.log(randomInt(2,60));
console.log(randomInt(1000, 10000));
console.log(randomInt());
console.log(randomInt("yo", 2));