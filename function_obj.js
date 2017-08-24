/*
function add(a,b){
    return a+b;
};

console.log(add(2,3));

var cong=add;
console.log(cong(2,3));

var square = function(x){
    return x*x;
};
console.log(square(10));


add.description = function(){
    console.log("Add two numbers");
};
add.description();

add.description.help = function(){
    console.log("input two numbers");
}
add.description.help();
*/

var addSafe = function(a,b){
    if(typeof a != 'number' || typeof b !== 'number')
        {
            throw {
                name: 'TypeError',
                message: 'addSafe requires number parameters'
            };
        }
    return a+b;
};
console.log(addSafe(10,2));

//function return function
function arithmetic(operatorString){
    switch(operatorString){
        case '+':
            return function(a,b){
                return a+b;
            };
        case '-':
            return function(a,b){
                return a-b;
            };
        case '*':
            return function(a,b){
                return a*b;
            };
        case '/':
            return function(a,b){
                return a/b;
            };
    }
};
var x = arithmetic('+')(32,6);
console.log(x);
var x = arithmetic('-')(32,6);
console.log(x);
var x = arithmetic('*')(32,6);
console.log(x);
var x = arithmetic('/')(32,6);
console.log(x);

//function nested inside function
























