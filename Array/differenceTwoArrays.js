function differenceTwoArrays(arr1, arr2){
	if (Array.isArray(arr1) && Array.isArray(arr2)) {
		console.log(arr1);
		arr1 = arr1.join(+',').split(+",");
		arr2 = arr2.join(+',').split(+",");
		console.log(arr1);
		arr1 = sortArray(arr1);
		arr2 = sortArray(arr2);
		console.log(arr1);
		console.log(mergerSort(arr1, arr2));
		console.log(arr1+"\n"+arr2);

	}
	console.log('working');
}

var x = [2,3,4,5,3,2,[45,42,435],3];
var y = [9493,4,2,11,4,3,2,44,32,4];
console.log(differenceTwoArrays(x, y));









function mergerSort(arr1, arr2){
	var retArray;
	while((arr1.length + arr2.length) === 0) {
		var x = Math.min(arr1[0],arr2[0]);
		if (retArray[retArray.length-1] != x){
			if (x === arr1[0])
				retArray.push(arr1.splice(0,1));
			else
				retArray.push(arr2.splice(0,1));
		} else {
			if (x === arr1[0])
				arr1.splice(0,1);
			else
				arr2.splice(0,1);
		}
	}

	return retArray;
}

function sortArray(arr) {
	return arr.sort(function(a,b){
			// console.log("a is "+a+" b is "+b+" and a-b is "+(a-b));
			if (typeof a !== typeof b) {
				if (typeof a === "string")
					return -1;
				else if(typeof b === "string")
					return 1;
			} else if((typeof a && typeof b)==="string") {
				a = a.charCodeAt(0);
				b = b.charCodeAt(0);
				// console.log(a+" "+b);
			} 
			return a-b;
		});
}