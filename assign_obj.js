var flight = {status: "Flying"};
var byReffFlight = flight;

var byCopyFlight = Object.create(flight);
console.log('byCopyFlight.status = ',byCopyFlight.status);
byReffFlight.status = "landing";
//Assign by reference 
console.log('flight.status = '+flight.status+'. byRefFlight.status = '+byReffFlight.status);
console.log('byCopyFlight.status = ',byCopyFlight.status);


//Assign by copy
byCopyFlight.status = 'Crash!';
console.log('flight.status = '+flight.status+'. byRefFlight.status = '+byReffFlight.status);
console.log('byCopyFlight.status = ',byCopyFlight.status);

