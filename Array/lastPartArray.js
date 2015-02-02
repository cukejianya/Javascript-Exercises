function lastPartArray(arr,n) {
	if (arr == null || Array.isArray(arr) === false) 
	//check to see if arr is am array. If not, return "undefine";
		return void 0;
	if (n == null || typeof n !== "number") //if n is anything but a number
		return [];
	if (n < 0) //When n is negative, only emit 1 array
		n = 1;
	return arr.slice(arr.length-n, n+arr.length-n);
}
var x = [2,3,4,5,"arr",3,4,5345,2];

console.log(lastPartArray(x,4));
console.log(lastPartArray());
console.log(lastPartArray("yo",6));
console.log(lastPartArray(x,323942034832));
console.log(lastPartArray(x));
console.log(lastPartArray(x,"adfakjhdf"));
console.log(lastPartArray(x,-3));