function firstPartArray(arr,n) {
	if ( (Array.isArray(arr) === false) || 
		(typeof n !== "number") &&
		(typeof n !== "undefined") )
		return "please put in the right args";
	if (n < 0 || typeof n === "undefined")
		n =1;
	if (n > arr.length)
		n = arr.length;
	return arr.slice(0, n);
}
var x = [2,3,4,5,"arr",3,4,5345,2];

console.log(firstPartArray(x,6));