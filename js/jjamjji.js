var fileText = "";
var fileContent;
var file;

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

function changeFile() {

}

function makeFileContent(){
	var str = "", s;
	for(var i=0;i<users.length;i++) {
		s = users[i];
		str+=s.id+","+s.name+","+s.start+","+s.end+","+s.team+","+s.ability;
		if(i!=(users.length-1)) {
			str+="\n";
		}
	}
	return str;
}

function sortUser() {
	var tmp;
	var usersCopy = users.slice();
	var key = true;
	var count = 0;
	while(key) {
		for(i=0; i<users.length-1; i++) {
			if(usersCopy[i].start > usersCopy[i+1].start) {
				tmp = usersCopy[i];
				usersCopy[i] = usersCopy[i+1];
				usersCopy[i+1] = tmp;
				count++;
			}
		}
		if(count==0) {
			key = false;
		}
		count =0;
	}
	for(i=0;i<users.length;i++) {
		users[i] = usersCopy[i];
	}
	fileText = makeFileContent();
	changeFile();
}

function addUser() {
	
	
	sortUser();
}

function delUser() {
	
}

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
	var i;
	
	
	for(i=0; i<fileContent.length; i++) {
		sp = fileContent[i].split(",");
		sp[0] = parseInt(sp[0]);
		sp[2] = parseInt(sp[2]);
		sp[3] = parseInt(sp[3]);
		users[i] = new user(sp[0],sp[1],sp[2],sp[3],sp[4],sp[5]);
	}
	sortUser();
}



openFile();
