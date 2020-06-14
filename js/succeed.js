var imgIndex = 1;
var slideIndex = "1";
var content = [
	[
		"a<br>b",
		"b",
		"c"
	],
	[
		"d",
		"e",
	],
	[
		"f"
	],
	[
		"g"
	]
];
var title = ["상황관리", "결산", "배차", "배차 결재"];
showDivs(slideIndex, imgIndex);


function plusDivs(n) {
	showDivs(slideIndex, imgIndex+=n);
}

function showDivs(a, b) {
	var s = document.getElementsByClassName('slide'+a);
	var sa = document.querySelectorAll('img');
	if(b > s.length) {
		imgIndex = 1;
	} else if(b < 1) {
		imgIndex = s.length;
	} else {
		imgIndex = b;
	}
	for(var i = 0; i < sa.length; i++) {
		sa[i].style.display = "none";
	}
	
	s[imgIndex-1].style.display = "block";
	contentContent.innerHTML = content[slideIndex*1-1][imgIndex-1];

}

function changeDivs(n) {
	slideIndex = n;
	imgIndex=1;
	showDivs(slideIndex, imgIndex);
	contentTitle.innerHTML=title[slideIndex*1-1];
	contentContent.innerHTML = content[slideIndex*1-1][imgIndex-1];
}