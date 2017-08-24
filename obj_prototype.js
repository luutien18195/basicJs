function Robot(type){
    this.type = type;
};
//ke thua
var flyRobot =  new Robot('fly');
var diveRobot =  new Robot('dive');

Robot.prototype.speak = function(text){
    console.log(this.type + " robot says '"+text+"'");
};

flyRobot.speak("I can fly !! ");
diveRobot.speak("I can dive !!!");

flyRobot.talk = function(){
    console.log("Hello world");
};
diveRobot.talk = function(){
    console.log("fu*k");
};
diveRobot.talk();
flyRobot.talk();