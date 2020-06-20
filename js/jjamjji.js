var today = new Date();
var day = ["일","월","화","수","목","금","토"];


function setCookie(value){
	var expire = new Date(9999,11,30);
	document.cookie = "data="+value+";expires="+expire.toUTCString()+"path=/";
}

function getCookie() {
	var value = document.cookie.match('(^|;) ?' + "data" + '=([^;]*)(;|$)');
  	return value? value[2] : null;
}

function delCookie(){
	document.cookie = 'data=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function user(id, name, start, end, team, ability) {
	this.id = id;
	this.name = name;
	this.start = start;
	this.end = end;
	this.team = team;
	this.ability = ability;
}

var users = [];

function makeData(){
	var str = "", s;
	for(var i=0;i<users.length;i++) {
		s = users[i];
		str+=s.id+","+s.name+","+s.start+","+s.end+","+s.team+","+s.ability;
		if(i!=(users.length-1)) {
			str+="|";
		}
	}
	return str;
}

function addUser(id, name, start, end, team, ability) {
	users[users.length] = new user(id, name, start, end, team, ability);
	sortUser();
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
	data = makeData();
	setCookie(data);
}

setCookie('2071602142,강태준,20200324,20210929,1소대 3분대,소형|207602142,강태,20200521,20211101,2소대 3분대,중형|20602142,강,20200412,20211201,특임소대 1분대,정비');

var data = getCookie();

if(data==null) {
	alert('사용자 입력 필요!');
}
else {
	var sp;
	var content = data.split('|');
	for(var i=0; i<content.length; i++) {
		sp = content[i].split(",");
		sp[0] = parseInt(sp[0]);
		sp[2] = parseInt(sp[2]);
		sp[3] = parseInt(sp[3]);
		users[i] = new user(sp[0],sp[1],sp[2],sp[3],sp[4],sp[5]);
	}
	sortUser();
}
