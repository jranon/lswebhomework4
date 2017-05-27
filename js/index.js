document.body.style.backgroundColor="red";

document.querySelector("h1").style.backgroundColor="blue";

document.body.style.fontFamily="sans-serif";

document.getElementById("nickname").innerHTML="Jay";

document.getElementById("favorites").innerHTML="49ers, Sushi, Poetry, Weightlifting";

document.getElementById("hometown").innerHTML="Honolulu, HI";

var lis = document.querySelectorAll("li");

for (var i=0; i<lis.length; i++) {
  lis[i].className="listitem";
}

var listitems = document.getElementsByClassName("listitem");

for (var i=0; i<listitems.length; i++) {
  listitems[i].style.color="red";
}

var mypic = document.createElement("img")

mypic.setAttribute('src', 'http://i.imgur.com/9uilccQ.jpg');

document.body.appendChild(mypic);