Array.prototype.brSearch = function (n) {
	var arrayList = this.sort(function(a,b) {
		return a-b;
	});
	var splitArray = function() {
		var x = arrayList.length/2;
		var halfArray = Math.floor(x);
		var midIndex = arrayList[halfArray];
		// console.log("x:" + x +" halfArray:"+ halfArray+" midIndex:"+midIndex+" n:"+n);
		if (midIndex === n) {
				return midIndex;
		} else if (arrayList.length !== 0) {
			if (midIndex > n) {
				arrayList.splice(halfArray, halfArray);
				// console.log(arrayList.length + " " + arrayList[0]);
				return splitArray();
			} else {
				arrayList.splice(0, halfArray+1);
				// console.log(arrayList.length + " " + arrayList[0]);
				return splitArray();
			}
		} else {
			return "The number "+n+" was not found";
		}
	};
	return splitArray();
};
var list = [4605, 7023, 7389, 19425, 24345, 28193, 30195, 32954, 41745, 49907, 53410, 69448, 72353, 73363, 83108, 88125, 95897, 98252, 100440, 101721, 102068, 117607, 120906, 126028, 140517, 144911, 174240, 178898, 179254, 182280, 195509, 198309, 226044, 243353, 245558, 247807, 259579, 259943, 273230, 288520, 299141, 305169, 320087, 323444, 326751, 336163, 345492, 362912, 363631, 372332, 389020, 398605, 399558, 404691, 414684, 414966, 418803, 431051, 431427, 435841, 437791, 445094, 447153, 450063, 458168, 459244, 480337, 516574, 518229, 536408, 549366, 550961, 565589, 568752, 591148, 600960, 604248, 614599, 624818, 637496, 641555, 653409, 673374, 674988, 680145, 690912, 693657, 696295, 699626, 705890, 720553, 738987, 739111, 754944, 756588, 758178, 760316, 800009, 801427, 802712, 808046, 811894, 819280, 819965, 824746, 835732, 846726, 861859, 862389, 870277, 881382, 882528, 887029, 895157, 899358, 901290, 905638, 906140, 907293, 907474, 916988, 929860, 938522, 944476, 950489, 974056, 984662, 990817, 995116, 998703];
console.log(list.brSearch(102068));