
function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter;
}
function budgetCalculator(clock, phone, laptop){
    var clockv = clock * 50;
    var phonev = phone * 100;
    var laptopv = laptop * 500;
    var total = clockv + phonev + laptopv;
    return total;
}
function hotelCost(days){
    var taka1 = 0;
    var taka2 = 0;
    var taka3 = 0;
    if(days<=10){
        taka1 = days * 100;
    }
    else if(days<=20){
        taka1 = 10 * 100;
        taka2 = (days-10) * 80;
    }
    else{
        taka1 = 10 * 100;
        taka2 = 10 * 80;
        taka3 = (days-20) * 50;
    }
    var taka = taka1 + taka2 + taka3;
    return taka;
}
function megaFriend(name){
    var big = name[0];
    for(var i=1; i<name.length; i++){
        if(name[i].length>big.length){
            big = name[i];
        }
    }
    return big;
}
var kilometer = 2;
var result1 = kilometerToMeter(kilometer);
console.log(result1);

var result2 = budgetCalculator(2, 2, 2);
console.log(result2);

var day = 22;
var result3 = hotelCost(day);
console.log(result3);

var result4 = megaFriend(["tamim", "sumon", "sunvi", "Mutasim", "rahman", "billah", "Muhammad"]);
console.log(result4);