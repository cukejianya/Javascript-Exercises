function secSmLg(x) {
	if (typeof x === "object") {
		x.sort(function(a, b) {
			return a-b;
		});
		console.log(x);
		var y =[];
		var secSm;
		var secLg;
		for (i=0; i<x.length; i++){
			if (x[0] < x[i] && (x[i] < secSm || typeof secSm === "undefined")) {
				secSm = x[i];
			}
			if (x[x.length-1] > x[i] && (x[i] > secLg || typeof secLg === "undefined")) {
				secLg = x[i];
			}
		}
		y.push(secSm);
		y.push(secLg);
		console.log(y);
	}
}
secSmLg([1,2,3,4,5,6,7,8,9,0,2,3,20,3,4,5,1012,334,12,4,2034,2,3,4]);