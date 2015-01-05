var rangeArray = [];
function range(k, l) {
	if (k < l-1) { 
		rangeArray.push(k+1);
		range(k+1, l);
	} else {
		return rangeArray;
	}
}
console.log(range(3, 7));