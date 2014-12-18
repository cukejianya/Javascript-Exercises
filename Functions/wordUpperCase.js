function wordUpperCase (stc){
	var stcArray = stc.split(" ");
	stc = "";
	for (i=0; i < stcArray.length; i++) {
		if (i === 0) {
			stc = stcArray[i].charAt(0).toUpperCase() + stcArray[i].slice(1);
		} else {
		stc = stc + " " + stcArray[i].charAt(0).toUpperCase() + stcArray[i].slice(1);
		}
	}
	console.log(stc);
}
wordUpperCase("The sun is great outside.");