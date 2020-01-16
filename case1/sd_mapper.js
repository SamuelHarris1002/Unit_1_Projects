/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Samuel Harris
   Date:   1/16/20

*/
// declaring the variablecand date
var thisTime = new Date();

//saving the text of the thisTime variable in the timeStr variable
var timeStr = thisTime.toLocaleString();

//changing the id
document.getElementById("timeStamp").innerHTML = timeStr;

// creating map
var thisHour = thisTime.getHours("3");
var thisMonth = thisTime.getMonth("2");

//finding what map will be used depending on which montha and hour
var mapNum = ((2*thisMonth + thisHour) % 24);

//storing the variable in the textstring
var imgStr = "<img src= 'sd_sky" + mapNum + ".png' />";

//inserting the imgStr variable directly after the elements opening tag
document.getElementById("planisphere").insertAdjacentHTML('afterBegin',imgStr);