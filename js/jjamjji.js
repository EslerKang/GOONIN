var fileText = "";
var fileContent;

var today = new Date();
var day = ["일","월","화","수","목","금","토"];
document.write((today.getMonth()+1)+"<br>");
document.write(today.getDate()+"<br>");
document.write(day[today.getDay()]+"<br>");

function openFile(){
	file = "../file/userList.txt";
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function() {
		if(rawFile.readyState === 4) {
			if(rawFile.status === 200 || rawFile.status == 0) {
				var text = rawFile.responseText;
				fileText = text;
				fileContent = fileText.split('\n');
			}
		}
	};
	rawFile.send(null);
}


function calcEscapeDate() {
	
}

openFile();
calcEscapeDate();
