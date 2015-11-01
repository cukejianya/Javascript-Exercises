function schoolWeeks(){
	var current, firstday, lastday, startDiff, endDiff, week, weeksLeft, daysLeft, schoolDaysLet;

	current = new Date()
	firstday = new Date("August 31, 2015");
	lastday = new Date("December 12, 2015");
	startDiff = current.getTime() - startDate.getTime();
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
