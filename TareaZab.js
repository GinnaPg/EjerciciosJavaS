//Sum of resistors

const res1 = [-1, 5, 6, 3];
const res2 = [14, 3.5, 6];     //Estos son mis datos
const res3 = [8, 15, 100];

function sumResistance(resistor) {
    let Resistance = resistor.reduce((sum, resistor) => sum + Math.abs(resistor), 0);
    return Resistance + " ohms";
}
console.log(sumResistance(res1))
console.log(sumResistance(res2))
console.log(sumResistance(res3))

//Num divided into halves

const n= 4;
const n2 =10;

function numDiv(num){
    let res = [];
    const half = num /2;
    res.push(half);
    res.push(half);
    return res;
}
console.log(numDiv(n));
console.log(numDiv(n2));

//Secret society

const member1 =["Esperanza","Francisco", "Nia"];
const member2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
const member3 = ["Harry", "Ron", "Hermione"]

function secretName(arr){
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0)));
    return res.sort().join("");
}
console.log(secretName(member1));
console.log(secretName(member2));
console.log(secretName(member3));

//Online Status

const users= ["mockIng99", "J0eyPunch", "glassedFer2"]

function dispUsers(arr){
  const count = users.length;
  let res;
  if (count === 1){
    res = `${arr[0]} is online`;
} else if (count === 2){
    res = `${arr[0]}, ${arr[1]} are online`;
} else {
    res = `${arr[0]}, ${arr[1]}, and ${count - 2} more are online`;
}
return res;
}
console.log(dispUsers(users));

//Array of Multiples

const multiplos = [2 ,10];
const multiplos2 =[17, 6];

function arrayMulti(multiplos, length){
    let multis = [];
for (let i = 1; i <= length; i++){
    multis.push(multiplos [0] * i);
}
return multis;
}
console.log(arrayMulti(multiplos, multiplos[1]));
console.log(arrayMulti(multiplos2, multiplos2[1]));

//Positive Dominance

const sonPositivos = [-1, -3, -5,
4,6767]

function positiveDom(arr) {
    let positive = 0;
    let negative = 0;

for (let num of arr) {
if (num > 0) {
     positive++;
} else if (num < 0) {
     negative++;
}
}
return positive > negative;
}  
console.log(positiveDom(sonPositivos));

//Antipodal Average
 
const numeros = [1, 2, 3, 9, 8, 7];
 
console.log(numeros.slice(0,3));
console.log(numeros.slice(3, 6));
 
const reversed = numeros.slice(3,6).reverse();
 
console.log('reversed:', reversed);
 
let nuevo = numeros.slice(0,3).map((x,i) => (x+ reversed[i]));
 
console.log(nuevo);
 
let divisor = 2;
let arreglo= nuevo;
let r2= [];
 
arreglo.forEach(function(elemento, indice) {
r2[indice]= elemento/divisor
});
 
console.log(r2);