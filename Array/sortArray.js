function sortArray(arr) {
	if (Array.isArray(arr)===true) {
		return arr.sort(function(a,b){
				return a-b;
		});
	}
}

var x = [3,5,2,-3,1,45,23,23,-4, 56,13,-1034,68,82,-450];
console.log(sortArray());