var a = 1,
    b = { foo: 'bar' },
    c = "Rock start",
    a_ = a,
    b_ = b,
    c_ = c;

function makeChange(x,y,z){
    x = 2;
    y.foo = 'Fun qua';
    z = "Film Star";
};
makeChange(a,b,c);

console.log(a === a_);// ==> true
console.log(b === b_);// ==> true
console.log(c === c_);// ==> true

console.log('a = ', a, ', b = ', b,', c = ', c);
console.log('a_ = ', a_, ', b_ = ', b_,', c_ = ', c_);