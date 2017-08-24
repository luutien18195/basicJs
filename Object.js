/*
var person ={firstName:"Tien", lastName:"Luu", age:20, eyeColor:"blue"};
var person2 ={
    firstName:"Tien", 
    lastName:"Luu",
    age:20, 
    eyeColor:"blue"
};
person2.gneder="male";
delete person2.eyeColor;
console.log(person2);
*/


function person(first,last,age,eye)
{
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
var myFather = new person("Long","Luu",50,"black");
var myMother = new person("Thoa","Ngo",40,"black");
person.prototype.showInfo = function(){
    "use strict";
    console.log("name :",this.firstName,this.lastName,",age: ",this.age," ,EyeColor: ",this.eyeColor);
};
myFather.showInfo();
myMother.showInfo();