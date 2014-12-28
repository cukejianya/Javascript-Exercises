var amount = 127;
var coins = [25, 10, 5, 1];
function amountToCoins(x, y) {
	y.sort(function(a,b){
		return a-b;
	});
	var coinToT = [];
	var i = 0;
	while(x > 0){
		if (x > y[i]) {
			coinToT.push(y[i]);
			x -= y[i];
		} else {
			i++;
		}
	}	
	console.log(coinToT);
}
amountToCoins(amount, coins);