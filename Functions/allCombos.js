function allCombos(x) {
    x=x+"";
    var comboArray = x.split("");
    var allCombosArray = [];
    for (i=0; i<x.length; i++) {
        for (j=i; j<x.length; j++){
            var wordArray = [];
            k=i;
            //console.log(wordArray);
            while (k <= j) {
                wordArray.push(comboArray[k]);
                k++;
                //console.log(wordArray);
            }
            allCombosArray.push(wordArray.join(""));
        }
    }

    console.log(allCombosArray);
}
allCombos(12345);