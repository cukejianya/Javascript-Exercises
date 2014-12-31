var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var half = "AM";
var n = d.getHours();
if (d.getHours() > 12){
	n = d.getHours() - 12;
	half = "PM";
}
console.log('Today is: '+dayOfWeek[d.getDay()]+ ". Current time is: "+n+" "+half+" : "+d.getMinutes()+" : "+d.getSeconds());