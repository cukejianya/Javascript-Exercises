function triangleArea (a, b, c) {
	var p = (a + b + c)/2; // p is half of the the triangle's parameter
	var A = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	console.log(A);
}
triangleArea(3,4,5);