function binaryDecimal(bin) {
	if (/[^01]/gi.test(bin)) {
		return "Only 0s and 1s please";
	} else {
		return parseInt((bin+'').replace(/[^01]/gi, ''), 2);
	}
}
console.log(binaryDecimal('10111'));
