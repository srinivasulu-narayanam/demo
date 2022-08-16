/*
//code1
let result = 3+5*8+10/2;
console.log(result);

//code2
function colorOfVeggies(veggies){
    let vegetables = {
        carrot : "orange",
        tomato : "red",
        cucumber : "green",
        cabbage : "light green",
        potato : "brown"
    }
    return vegetables[veggies];
}

console.log("color of vegetable is : " + colorOfVeggies("tomato"));


//code 3
let array = [5,4,6,7,3];
console.log(Math.max(...array));
console.log(Math.max.apply(null,array));
*/

//code4
// let array = [1,[2,3],[3],[4,5,6,[2,3]]];
// function getLength(arr){
//     let a = arr.flat(Infinity);
//     return a.length;
// }
// console.log(getLength(array));

//code 5
// function cutInHalfAndFloor(num) {
//     return Math.floor(num/2);
// }
// console.log(cutInHalfAndFloor(99));
  
//code 6
// function titleCaseEdit(title) {
//     const arr = title.split(" ");
//     for(let count = 0; count< arr.length; count++){
//         arr[count] = arr[count].charAt(0).toUpperCase() + arr[count].slice(1);
//     }
//     return arr.join(" ");
// }
// console.log(titleCaseEdit("the Road not taken"));
  
//code 7
// function hashing(sentence)
// {
//     const arr = sentence.split(" ");
//     const asc = arr.sort((a,b) => b.length - a.length);
//     let n = (arr.length <=3 )?arr.length:3;
//     for(let i = 0;i < n;i++){
//         asc[i] = "#" + asc[i];
//         console.log(asc[i]);
//     }
// }
// hashing("How the");

//code 8
// let car = {name:"Audi", model:"X400",color:"white"};
// Object.keys(car).forEach(prop => console.log(prop));


//code 9
// let array=[];
// function fizzBuzz(start, end) {
//     for(let i=start;i<=end;i++){
//         if(i%3==0 && i%5==0){
//             array.push("FIZZBUZZ")
//         }
//         else if(i%5==0){
//             array.push("BUZZ");
//         }
//         else if(i%3==0){
//             array.push("FIZZ");
//         }
//         else(array.push(i));
//     }
//     console.log(array);
//   }
  
//   fizzBuzz(1, 15);

//code 10
// function productOfNumbers(...num){
//     let product = 1;
//     for (let n = 0;n <num.length;n++){
//         product = product * num[n];
//     }
//     console.log(product);
//  }
//  productOfNumbers(2,3,5,6);
 

//code 11
let bookList =  
[
{
    name: "Javascript Good parts",
    author:"Douglas Crockford",
    stock:"10"
},
{
    name: "A Smarter Way to Learn JavaScript",
    author: "Mark Meyers",
    stock:"12"
},
{
    name: "Effective Javascript",
    author:"David Herman",
    stock:"0"
}
]


let filterarr = bookList.filter((e) => e.stock != 0)
filterarr.map((e)=>{console.log(JSON.stringify(e,(key,value)=>key === "stock"? undefined:value))});

//code 12
// let set1 = new Set([3,4,5]);
// let set2 = new Set([6,5,3]);
// set2.forEach(set1.add,set1);
// console.log(set1);

//code 13
// let str =  '{"Javascript" : "The Good Parts", "Author": "Douglas Crockford"}';

// let obj = JSON.parse(str);
// console.log(obj.Author);

//code 14
// function distanceTravel(cost)
// {
//     let dist=0;
//     if(cost!=0)
//     {
//     dist++;
//     cost-=3
//     }
//     while(cost!=0)
//     {
//         dist++;
//         cost-=2;
//     }
//     return dist;
// }
// console.log(distanceTravel(10));