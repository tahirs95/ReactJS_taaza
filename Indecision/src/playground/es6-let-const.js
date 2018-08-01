var nameVar = "mike";
var nameVar = "John"
console.log("NameVar", nameVar);

let name = "mike";
name = "h"
console.log("NameVar", nameVar);

 const fullname = "Sab Tahir Aaan";
// if (fullname){
//    var firstname = fullname.split(' ')[0];
// }

// console.log(firstname);

const firstname = (x) => x.split(' ')[2]
console.log(firstname(fullname));

const add = function(a,b){

    return a-b;

};
console.log(add(5,1));

const multiplier = {
    multiplyBy: 2,
    numbers : [1,2,3],
    multiply(){
       return this.numbers.map((num) => num  + "*" + this.multiplyBy  + " = " +  num * this.multiplyBy );
    }
}

console.log(multiplier.multiply());