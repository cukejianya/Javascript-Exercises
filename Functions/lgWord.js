function lgWord(str) {
	str = str.split(" ");
	console.log(str);
	var longest ="";
	for (i=0; i<str.length; i++) {
		if (str[i].length > longest.length) {
			longest = str[i];
		}
	}
	console.log(longest);
}
lgWord("I love you Chinedum");