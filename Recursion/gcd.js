function gcd(n, m) {
	if (n === 0 || m === 0) {
		if (n > m) {
			return n;
		} else {
			return m;
		}
	} else if(n > m){
		n = n%m;
		return gcd(n, m);
	} else {
		m = m%n;
		return gcd(n,m);
	}

}
console.log(gcd(44, 800));