/*
function swap(a,b){
    var tmp = a;
    a = b;
    b = tmp;
}

var x = 1; y = 2;
swap(x,y);

console.log("x is "+x+" y is "+y);// x is 1 and y is 2
*/
function swap2(object){
    var temp = object.a;
    object.a = object.b;
    object.b = temp;
};
function swap3(object, a, b){
    var temp = object[a];
    object[a] = object[b];
    object[b] = temp;
};
var obj={a:1,b:2};
//swap2(obj);
swap3(obj, 'a', 'b');
console.log('after swap : ',obj);