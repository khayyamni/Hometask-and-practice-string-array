"use strict";


// let nums = [2, 5, 4, 3, 7]

// function checkOddNums(num) {
//     return num % 2 == 1;
// }

// function checkEvenNums(num) {
//     return num % 2 == 0;
// }



// function calgulateNums(numbers,callback) {

//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {

//         if (callback(numbers[i] )) {
//             sum += numbers[i]
//         }

//     }

//     console.log(sum);
// }

// calgulateNums(nums,checkOddNums);
// calgulateNums(nums,checkEvenNums);



// function sumOfOddNums(numbers,callback) {

//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {

//         if (callback(numbers[i] )) {
//             sum += numbers[i]
//         }

//     }

//     console.log(sum);
// }

// sumOfOddNums(nums,checkOddNums);


// function sumEvenOddNums(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {

//         if (numbers[i] % 2 == 0) {
//             sum += numbers[i];
//         }

//     }

//     console.log(sum);
// }



// function sumOfNumsGreaterSix(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {

//         if (numbers[i] > 6) {
//             sum += numbers[i];
//         }

//     }

//     console.log(sum);
// }



// function divide(a, b, errorCallback, successCollback) {
//     if (b === 0) {
//         errorCallback("Can't be divided to zero")
//     }
//     else {
//         let result = a / b;
//         successCollback(`${result} - Divided success`)
//     }
// }




// function getError(error) {
//     console.log("Error: " + error);
// }



// function getSuccess(success) {
//     console.log("Success: " + success);
// }

// divide(10, 6, getError, getSuccess)

// document.querySelector("button").addEventListener("click", function(){

// })

// let nums = [2, 5, 4, 3, 7]

// function calgulateNums(numbers, callback) {

//     let sum = 0;
//     5
//     for (let i = 0; i < numbers.length; i++) {

//         if (callback(numbers[i])) {
//             sum += numbers[i]
//         }
//     }
//     console.log(sum);
// }

// calgulateNums(nums, m => m % 2 == 1);
// calgulateNums(nums, m => m > 4);


// let text = "Azerbaycan";

// console.log(text.length);

// console.log(text.slice(1,3));

// console.log(text.substring(2,5));

// console.log(text.substr(0,5));


// let text = " Yasha Azerbaycan";

// console.log(text.replace("Azer", "Ader"));

// let text = "Yasha Azerbaycan Azer";

// console.log(text.replaceAll("Azer" , "Ader"));

// let text = "Yasha Azerbaycan";

// let result = text.replaceAll("Azer", "Ader");

// console.log(result)

// let test = text.substring(0,5);

// console.log(test);

// console.log(text);



// let text1 = "Hello World"
// let text2 = text1.toLowerCase();

// console.log(text2);


// let text1 = "Hello World"
// let text2 = text1.toUpperCase();

// console.log(text2);


// let name = "Pervin";

// let surname = " Mirzeyev";


// let result = name.concat(surname);

// console.log(result);


// let text1 = "Salam";

// let text2 = "    Salam";

// console.log(text1 == text2);


// let text1 = "Salam";

// let text2 = "   Salam";


// console.log(text1 == text2.trim());


// let text1 = "Salam";

// console.log(text1.charAt(1));


// console.log(text1.charCodeAt(1));



// document.onkeydown = function(){
//     console.log("tested");
// }


// document.onkeydown = function(e){
//     if(e.keyCode == 13){
//         alert("Pressed enter")      //her iki enter iwleyir :)
//     }
// }


// let text = "Azerbaycan";


// for (let i = 0; i < text.length; i++) {

//     console.log(text[i]);

// }


// for (let i = 0; i < text.length; i++) {
//     if (text[i] == "c") {
//         console.log("yes");
//     }

// }


// let text = "Yashasin,Azerbaycan dovleti";

// let data = text.split(",")


// console.log(data);



// let text = "Yashasin,Azerbaycan dovleti";

// let data = text.split(",")


// data.forEach(element => {
//     console.log(element);
// });

// console.log(text);


// let numbers = [1,3,5,6,7];

// numbers.push(200);

// numbers.unshift(100);

// numbers.pop();

//numbers.shift();

// console.log(numbers);


// let numbers = [1,3,5,6,7];

// console.log(numbers.length);


// let numbers = [1,3,5,6,7];

// let result = numbers.toString();

// console.log(result);


// let numbers = [1, 3, 5, 6, 7];

// let nums = [4, 5, 6, 7, 8];

// let result = numbers.join("-");

// console.log(result);

// let arr2 = numbers;

// arr2[0] = 300;


// console.log(arr2);

// console.log(numbers)


// let num1 =5;

// let num2 = num1;

// num2 = 100;

// console.log(num2)
// console.log(num1)



// let numbers = [1,3,5,6,7];

// delete numbers[0];

// console.log(numbers);


// const myGirls = ["Cecilie", "lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren)



// const nums = [1, 2, 3];

// nums[0] = 100;

// nums.push(5);

// console.log(nums);

// nums =[1,5,7];



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");

// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0,1);

// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0,2);

// console.log(fruits.toString());


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);

// console.log(fruits)
// console.log(citrus)



// let adress = "Ehmedli";

// console.log(adress.includes("o"))


// let nums = [1, 2, 3, 4, 5];

// console.log(nums.includes(3))


// nums.forEach(element => {
//     console.log(element);
// });

// let filteredDatas = nums.filter(m => m > 3);

// console.log(filteredDatas);


// let filteredDatas = nums.filter(m => m > 3 && m<5);

// console.log(filteredDatas);


// let result = nums.find(m => m > 3);

// let result = nums.findIndex(m => m == 5);

// console.log(result);


// let text = "Lorem Ipsum is simply. Dummy text of the printing";

// let textArray = text.split("");

// let substringIndex = textArray.findIndex(m => m =="D");

// let substringText = text.substring(0,substringIndex);

// console.log(substringText);



// let text = "Lorem Ipsum is simply. Dummy text of the printing";

// const makeSubstring = () => {


// let textArray = text.split("");

// let substringIndex = textArray.findIndex(m => m =="D");

// let substringText = text.substring(0,substringIndex);

// return substringText;

// }

// console.log(makeSubstring(text));



// let text = "Lorem Ipsum is simply. Dummy text of the printing";

// const makeSubstring = () => {


// let textArray = text.split("");

// let substringIndex = textArray.findIndex(m => m =="D");

// let substringText = text.substring(0,substringIndex);

// return substringText;

// }


// let result = makeSubstring(text) + " ...";

// document.querySelector("h1").innerText = result;



// let ages = [20,21,23,55,66];

// let result = ages.map(function (elem) {
//     return elem *2 
// })

// console.log(ages)
// console.log(result)



// let ages = [20,21,23,55,66];

// let result = ages.map(function (elem) {
//     if(elem % 2 == 0){
//         return elem * 2
//     }
//     else{
//         return elem;
//     }
// })

// console.log(ages)
// console.log(result)




// let ages = [20,21,23,55,66];


// ages.forEach((element, index) => {
//       ages[index] = element * 2
// });

// console.log(ages)


//------------Home-Task------------//

// function reverseName(name) {
//     let result = Array.from(name).reverse().join("");
//     console.log(result);
// }
// let name = "Cavid";
// reverseName(name);



// function Name(name) {
//     let arr = name.split("");
//     let char="";
//     for (let i = arr.length-1; i>=0; i--){
       
//        char+=arr[i];
//     }
//     console.log(char);
// }


// let name = "Cavid";
// Name(name);










