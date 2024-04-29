"use strict";

// setTimeout(() => {
//     alert("Salam")
// }, 3000)


// let array = [1,2,3,4,5,6];

// function sumOfOddNumbers(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(i%2 == 1){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sumOfOddNumbers(array));


// function sumOfEvenNumbers(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(i%2 == 0){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sumOfOddNumbers(array));


// function checkOddNum(){
//     return num % 2 == 1; 
// }

// function checkEvenNum(){
//     return num % 2 == 0; 
// }

// function sumOfNumsByCondition(array, callback){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(callback(i)){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sumOfNumsByCondition(array, m => m % 2 == 0));




// let array = [1,2,3,4,5,6];

// let result = array.filter(m => m % 2 == 0);
// console.log(result);


// let result = array.find(m => m > 4);
// console.log(result);


// let result = array.findIndex(m => m == 3);
// console.log(result);



// class Animal{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
// }

// let animal = new Animal(100,200);

// console.log(animal.height);


// class Bird extends Animal{
//     constructor(){
//         super(100,200);
//         this.name = "Devequshu";
//     }

//     getName(text){
//         console.log("text");
//     }
// }

// let bird = new Bird();
// console.log(bird.name);
// bird.getName("Salam");



// class Test{
//     constructor(name){
//         this.name = name;
//     }
// }

// let test = new Test("Salam");

// Test.prototype.surname = "Surname";

// console.log(test.surname);

// Test.prototype.getName = function(){
//     console.log("Name");
// }

// test.getName();


// String.prototype.customContains = function (searchText){
//     return this.includes(searchText);
// }

// let name = "Reshad";

// console.log(name.customContains("h"));



// let date = new Date();

// let year = date.getFullYear();

// console.log(year);

// let month = date.getMonth();

// console.log(month + 1);

// let data = Math.sqrt(81);

// console.log(data);





////DOM





// let h1 = document.getElementsByTagName("h1");

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);    
// }

// console.log(h1);


// let h1 = document.getElementsByClassName("test");

// console.log(h1)


// let h1 = document.getElementById("example");

// console.log(h1);


// let elem = document.querySelector("#example .test");

// console.log(elem);

// elem.style.backgroundColor = "Red";


// let h1 = document.querySelector(".test");

// console.log(h1.innerHTML);

// console.log(h1.innerText);

// h1.innerHTML = "Reshad bey";

// h1.style.color = "Blue";

// h1.className = "a"

// h1.classList.add("h1");

// console.log(h1.classList.contains("h1"));

// h1.setAttribute("id", "text");

// let button = document.querySelector("button");

// button.addEventListener("click", function(){
//     alert("Welcome")
// });

// button.addEventListener("click", function(){
//     this.style.backgroundColor = "Blue";
//     h1.style.backgroundColor = "Blue";
//     h1.style.color = "White";
// });

// button.addEventListener("dblclick", function(){
//     this.style.backgroundColor = "Red";
//     h1.style.backgroundColor = "Red";
//     h1.style.color = "White";
// });

// button.addEventListener("mouseover", function(){
//     this.style.backgroundColor = "Green";
//     h1.style.backgroundColor = "Green";
//     h1.style.color = "White";
// });



