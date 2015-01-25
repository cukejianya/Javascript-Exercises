function decimalBHO(num, base) {
	if (/[^0-9]/gi.test(num) 
		|| /[^bho]/gi.test(base) 
		|| base.length > 1) {
		return "Please input the proper arguments";
	} else {
		base = base.toLowerCase();
		switch (base) {
			case 'b': 
				base = 2;
				break;
			case 'h':
				base = 16;
				break;
			case 'o':
				base = 8;
				break;
		}
		return parseInt(num).toString(base);
	}
}
console.log(decimalBHO(120,'b'));
console.log(decimalBHO(120,'O'));
console.log(decimalBHO(120,'H'));
console.log(decimalBHO(120,'bho'));
console.log(decimalBHO('1B0','b'));
console.log(decimalBHO(120,'td23'));
console.log(decimalBHO('120','t'));