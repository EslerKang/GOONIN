var fileText = "";
var fileContent;


var today = new Date();
var day = ["일","월","화","수","목","금","토"];

function user(id, name, start, end, team, ability) {
	this.id = id;
	this.name = name;
	this.start = start;
	this.end = end;
	this.team = team;
	this.ability = ability;
}

var users = [];

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
	
	var sp;
	var a = [];
	var i;
	
	
	for(i=0; i<fileContent.length; i++) {
		sp = fileContent[i].split(",");
		users[i] = new user(sp[0],sp[1],sp[2],sp[3],sp[4],sp[5]);
		a[i] = i;
	}
	var tmp;
	var usersCopy = users.slice();
	var usersCopyT = users.slice();
	for(i=0; i<users.length-1; i++) {
		for(var j=0; j<i; j++) {
			if((usersCopy[j].start)*1 > (usersCopy[j+1].start)*1) {
				tmp = usersCopy[j].start;
				usersCopy[j].start = usersCopy[j+1].start;
				usersCopy[j+1].start = tmp;
				tmp = a[j];
				a[j] = a[j+1];
				a[j+1] = tmp;
			}
		}
	}
	alert(a)
	for(i=0;i<users.length;i++) {
		users[i] = usersCopyT[a[i]];
	}
	
}



function calcEscapeDate() {
	
}

openFile();
calcEscapeDate();
