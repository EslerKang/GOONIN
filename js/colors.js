var Body = {
    setColor : function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor : function(color) {
        // var aList = document.querySelectorAll('a');
        // for(var i = 0; i< aList.length; i++) {
        //     aList[i].style.color = color;
        // }
        $('a').css('color', color);
    }
}

function night_day_handler(self){
    var target = document.querySelector('body');

    if(self.value == 'night') {
        Body.setColor('white');
        Body.setBackgroundColor('black');
        self.value = 'day';
        a_color = 'powderblue';
    } else {
        Body.setColor('black');
        Body.setBackgroundColor('white');
        self.value = 'night';
        a_color = 'blue';
    }
    Links.setColor(a_color);
}