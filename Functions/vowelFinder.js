function vowelFinder (str) {
	var vowelCheck = /[aeiou]/gi;
	str = str.match(vowelCheck);
	var vowelTotal = str.length;
	console.log(vowelTotal);
}
vowelFinder('The quick brown fox');