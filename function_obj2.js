var numberObj = function(val){
    var value = parseFloat(val);
    return {
        absolute: function(){
            return value >0 ? value : -value;
        },
        square: function(){
            return value * value;
        }
    };
};
var result =numberObj(-10);
console.log(result.absolute(),result.square());