function matrixID (x){
	var matrix = [];
	for (i = 0; i < x; i++) {
		var row = [];
		for(j=0; j < x; j++) {
			if(i===j) {
				row.push(1);
			} else {
				row.push(0);
			}
		}
		matrix.push(row);
	}
	console.log(matrix);
}
matrixID(10);