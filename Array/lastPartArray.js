function lastPartArray(arr,n) {
	if (arr == null || Array.isArray(arr) === false)
		return void 0;
	if (n == null || typeof n !== "number")
		return [];
	if (n < 0)
		n = 1;
	return arr.slice(0, n);
}
var x = [2,3,4,5,"arr",3,4,5345,2];

console.log(lastPartArray(x,6));
console.log(lastPartArray());
console.log(lastPartArray("yo",6));
console.log(lastPartArray(x,323942034832));
console.log(lastPartArray(x));
console.log(lastPartArray(x,"adfakjhdf"));
console.log(lastPartArray(x,-2));