function bubbleSort (x) {
	var sortedx = [];
	for (i=0; i < x.length; i++) {
		if (sortedx.length !== 0) {
			var j = 0;
			var keepGoing = true;
			// console.log("-------new----------");
			while (keepGoing && (j < sortedx.length)) {
				if (sortedx[j] > x[i]) {
					sortedx.splice(j, 0, x[i]);
					keepGoing = false;
				} else if (j+1 === sortedx.length) {
					sortedx.splice(j+1, 0, x[i]);
					keepGoing = false;
				}
				j++;
				// console.log("sortedx "+j+" value: "+sortedx[j]);			
			}
			// console.log("x "+i+" value: "+x[i]);
		} else {
			sortedx.push(x[i]);
		}
	}
	console.log(sortedx);
}
var y = [12, 345, 1, 546, 122, 1, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
bubbleSort(y);
