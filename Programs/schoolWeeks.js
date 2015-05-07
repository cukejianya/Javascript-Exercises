function schoolWeeks(){
	var current = new Date();
	var startDate = new Date("January 26, 2015 00:00:00");
	var deadline = new Date("May 12, 2015 00:00:00");
	var x = current.getTime() - startDate.getTime();
	var y = deadline.getTime() - current.getTime();
	x = x * 1.15741e-8;
	y = y * 1.15741e-8;
	var daysX = Math.ceil(x/7);
	var daysY = Math.floor(y);
	var weeksY = Math.floor((daysY-2)/7);
	var daysY2 = daysY - weeksY*2;

	return "Week: "+daysX+"\nSchool Days Left: "+daysY2+"\nDays Left: "+ daysY +"\nWeeks Left: "+ weeksY;
}

console.log(schoolWeeks());