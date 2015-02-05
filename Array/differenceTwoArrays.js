function differenceTwoArrays(arr1, arr2){
	if (Array.isArray(arr1) && Array.isArray(arr2)) {
		// console.log(arr1);
		arr1 = arr1.join(',').split(",");
		arr2 = arr2.join(',').split(",");
		arr1 = parseIntArray(arr1);
		arr2 = parseIntArray(arr2);
		arr1 = sortArray(arr1);
		arr2 = sortArray(arr2);
		// console.log(arr1);
		// console.log(arr1+"\n"+arr2);
		return mergerSort(arr1, arr2);
		
	}
}

var x = [2,3,4,5,"arr4",3,2,[45,42,435],3];
var y = [9493,4,2,11,4,3,2,44,32,4, "yo", "arr4", "49Iedj"];
console.log(differenceTwoArrays(x, y));






function parseIntArray(arr) {
	for(var i = 0; i < arr.length; i++){
		if (!isNaN(arr[i]))
			arr.splice(i,1,parseInt(arr[i]));
	}
	return arr;
}

function mergerSort(arr1, arr2){
	var retArray=[];
	while((arr1.length + arr2.length) !== 0) {
		var x = Math.min(arr1[0],arr2[0]); //  either returns the lowest number or NaN
		if (isNaN(x)) {
			x = sortArray([arr1[0], arr2[0]])[0]; // I first call sortArray()which returns a array then I assign the first element of the returned array to x. This is only done when one of the elements from arr1 or arr2 is a string
		}
		if (retArray[retArray.length-1] !== x){
			if (x === arr1[0])
				retArray.push(arr1[0]);
			else
				retArray.push(arr2[0]);
		}
		if (x === arr1[0])
			arr1.splice(0,1);
		else
			arr2.splice(0,1);
	}

	return retArray;
}

function sortArray(arr) {
	return arr.sort(function(a,b){
			// console.log("a is "+a+" b is "+b+" and a-b is "+(a-b));
			if (typeof a !== typeof b) {
				if (typeof a === "string")
					return 1;
				else if(typeof b === "string")
					return -1;
			} else if((typeof a && typeof b)==="string") {
				a = a.charCodeAt(0);
				b = b.charCodeAt(0);
				// console.log(a+" "+b);
			} 
			return a-b;
		});
}