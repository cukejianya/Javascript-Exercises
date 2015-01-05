function exponent(b, p) {
	if (p === 0) {
		return 1;
	} else {
		return b * exponent(b, p-1);
	}
}
console.log(exponent(2,10));