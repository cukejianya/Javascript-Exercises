function multiplesDeConstr(n) {
	num = n;
	var look = function(start, history) {
		n = n/start; 
		console.log(n+" "+start);
		console.log(n===1);
		
		if(n === 1) {
			console.log('work');
			console.log(history);
			return 'done';
		}
		if (n%1 !== 0) {
			n = n * start;
			console.log('false');
			return null;
		} else if (start > num/2) {
			return "Your number is a prime number";
		} else {
			console.log('works '+n+' '+history);
			return look(start, history+" * "+ start) || 
			look(start +1, history+" * "+ (start+1));		
		}
	};
	look(2, "2");

}

console.log(multiplesDeConstr(25));