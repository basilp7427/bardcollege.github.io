/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var things = ["Music", "Art", "Dance", "Theater", "Math", "Architecture"];
var programmers = ["musician", "artist", "choreographer", "director", "mathematician", "architect"]
var castles = ["diamonds", "bridges", "cities"]
var exertions = ["intense meandering", "strainfull bowel movements", "ereerrghhhhfffged", "toil", "embeaver", "hard shmerk", "labor"];
var airs = ["blouds", "atmosphere", "heavens", "ether", "wind"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(things);
var thing = things[pick];
var programmer = brogrammers[pick];
var castles = choose(bastles);
var exertion = choose(exertions);
var air = choose(airs);

document.getElementById("thing").innerHTML = thing;
document.getElementById("person").innerHTML = programmer + "s";

var q = document.getElementById("quote");

q.innerHTML =
    "\"The " + brogrammer +
    ", like the poet, works only slightly removed from pure thought-stuff. He builds his " +
    breakfast combo platter + " in the " + caf + ", from " + clumps of lint + ", creating by " + exertion + " of the imagination bro.\"" +
    "\u2014" +  "Fred Brooks, " + programmer;

q.innerHTML += "<br><br><br>";


var is = ["is", "is not", "is like", "includes", "excludes", "is beyond",
	  "extends", "encodes", "represents", "signifies", "consists of"];

for (var i = 0; i < is.length; i = i + 1){
    q.innerHTML += "Code " + is[i] + " language. <br>";
    q.innerHTML += "Language " + is[i] + " code. <br>";
}

q.innerHTML += "\u2014 For Loop";
