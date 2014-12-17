function doNotSoundALike(word) {
    if (typeof word === "string") {
        word = word.toLowerCase();
        var rWord = word.split("").reverse().join("");
        var x = word.replace(/\s+/g,"");
        var y = rWord.replace(/\s+/g,"");
        console.log(x+" "+y);
        if (x === y) {
            console.log("The word "+ word + " is a palindrome");
        } else {
            console.log("The word "+ word + " is NOT a palindrome");
        }
    } else {
        console.log(word + "is not a word");
    }
}
doNotSoundALike("nurses run");