window.onresize = function () {
var winprop = document.getElementById("winprop");
var width = window.innerWidth;
winprop.innerHTML = width;
}
var oCpBtn = document.getElementById('ocpbtn');
oCpBtn.onclick = function () {
	var cp = document.getElementById('cp');
	var cCpBtn = document.getElementById('ccpbtn');
	cp.style.right = "0px";
	oCpBtn.style.right = "200px";
	cCpBtn.style.display = "block";
}
var cCpBtn = document.getElementById('ccpbtn');
cCpBtn.onclick = function () {
	cCpBtn.style.display = "none";
	cp.style.right = "-200px";
	oCpBtn.style.right = "10px";
}
var album = document.getElementById('album');
album.onclick = function () {
	var songsname = documen.getElementById('songsname');
	var songsnameheight = songsname.style.height;
	if (songsnameheight == 80) {
		songsname.style.height = "0px";
	} else {
		songsname.style.height = "80px";
	}
}