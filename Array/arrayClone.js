arrayClone = function(x) {
	if (Array.isArray(x)) {
		return x.slice(0,x.length);
	}
};

console.log(arrayClone([3,5,2,3,"array",[3,4,5]]));