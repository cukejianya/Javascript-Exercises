Array.prototype.mergeSort = function() {
	var list = this;
	var list2 = [];
	console.log(list);
	console.log(list2);
	if (list.length > 2 && list.length > 2) {
		var half = Math.floor(list.length/2);
		list2 = list.splice(0, half);
		console.log("list 1");
		list.mergeSort();
		console.log("list 2");
		list2.mergeSort();
	}
	console.log("list2: " + list2);
	console.log("Before "+list);
	list = list.concat(list2);
	console.log(list);

	// console.log(list);
	// console.log(list2);

};
var l = [34,7,23,32,5,62];
console.log(l.mergeSort());