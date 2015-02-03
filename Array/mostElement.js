function mostElement(arr) {
	if (Array.isArray(arr)===true) {
		arr.sort(function(a,b){
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
	console.log(arr);
	}
	var i = 0;
	var highestAmount = 0;
	var currAmount = 0;
	var lastElem = "null";
	var highestElem;
	while(i < arr.length) {
		// console.log(arr[i]+' '+lastElem+" "+highestAmount);
		if ((arr[i] === lastElem) || (lastElem === "null")) {
			// console.log("Still works "+i+"\n");
			++currAmount;
			lastElem = arr[i];
		} else if(currAmount > highestAmount){
			highestAmount = currAmount;
			currAmount = 1;
			highestElem = arr[i-1];
			lastElem = arr[i];
		} else {
			lastElem = arr[i];
			currAmount = 1;
		}
		i++;
	}
	
	return "Element: "+highestElem+' Amount: '+highestAmount;
}

var x =[9,'d', 'a', 'a', 'b', 2,'d', 3, 'a','d', 3, 'w', 2,'d', 4, 9, 3,'d', 9 , 23,'d', 43 , 9, 235245, 9, 'd','d'];
console.log(mostElement(x));
