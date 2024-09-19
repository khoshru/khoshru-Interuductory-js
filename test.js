

// let userInfo = prompt("enter your name","sara");
// alert(userInfo);
///////////////////////////////////////////////////////////////////////////////////////////
// let userAge =prompt("your age" ,"12");
// let userNumAge = Number(userAge);
// alert(typeof userNumAge);
///////////////////////////////////////////////////////////////////////////////////////////////

// let exercises = +(prompt("enter your first number"));
// let exercises2 = +(prompt("enter your first number"));
// let sum = exercises + exercises2 ;
// let minus = exercises - exercises2 ;
// let div = exercises / exercises2 ;
// alert(`your sum is ${sum}` +" "+ `your div is ${div}` +" "+ `your minus is ${minus}`);

//////////////////////////////////////////////////////////////////////////////////////////////
// var a = +(prompt("enter your first number"));

// if (a % 2 == 0 ){
//     alert("even");
// } else{
//     alert("odd");
// }
////////////////////////////////////////////////////////////////////////////////////////////////
// var a = +(prompt("enter your first number"));
// var b = +(prompt("enter your first number"));
// var c = +(prompt("enter your first number"));

// var m = (a+b+c)/3;
// alert(m);
////////////////////////////////////////////////////////////////////////////////////////
// var userAge = +(prompt("enter your age"));

// if (userAge >= 18){
//     alert("welcome");
// }else{
//     alert("go to hell");
// }
////////////////////////////////////////////////////////////////////////////////////////
// var time = +(prompt("enter:"));
// let hours = parseInt(time / 60);
// let minuts = time % 60 ;
// alert(hours+" hour" + minuts + "minuts");
///////////////////////////////////////////////////////////////////////////////////////
// let sex = prompt("enter your gender");
// let age = prompt("enter your age");

// if(sex === "m" || age < 18){
//     alert("go to hell");
// }else{
//     alert("welcome");
// }
/////////////////////////////////////////////////////////////////
// let avrage = +prompt("enter your avrage");

// if(avrage>=18){
//     alert("a")
// }else if(avrage){}
/////////////////////////////////////////////////////////////////////////////
// //functions
// function number ( a ){
// if(a%2 === 0){
//     alert("even");

// }else{
//     alert("odd");
// }
// };
// number(854545);
////////////////////////////////////////////////////////////////////////
// function number ( a ,b,c ){
//     alert((a+b+c)/3);

//     };
// number(8, 6,7);
///////////////////////////////////////////////////////////////////////////////////
// function user (userName ,password){
//     if(userName.length < 3 || password.length < 8){
//         alert("welcome")
//     }else{
//         alert("go to hell")
//     }

// }
// user("jyjghhhjg", 6468)
/////////////////////////////////////////////////////////////////////////////////////
// function login (userName){
//     if(userName === "ali" || userName.toLowerCase() === "ali"){
//         alert("welcome");
//     }else{
//         alert("go to hell");
//     }

// }
// login("ALIt");
/////////////////////////////////////////////////////////////////////////////////////
// for(let i=0 ; i <= 100; i += 2){

//     console.log("your even number:" + i);

// };
/////////////////////////////////////////////////////////////////////
// let allPricese = 0;
// for(let i=1 ;i <6; i++){
//     allPricese = allPricese + +prompt("enter your price:");
// }
/////////////////////////////////////////////////////////////////////
// let numbers = 0;
// sum = 0;
// for (i = 0; i < 5; i++) {
//   numbers = +prompt("enter the " + (i + 1) + "number");
//   sum = sum + numbers;
// }
// alert(sum / 5);
/////////////////////////////////////////////////////////////////////??????????????????????????????????????

// let userNumber = prompt('enter your number:' , 0);
// let counter =0;

// for (var i = 0 ; userNumber /10 != 0 ; i++ ){
//     counter++
//     userNumber = Math.floor(userNumber/10);


// }
// alert(counter);
//////////////////////////////////////////////////////////////////////////////////////
// let userNumber = +prompt("enter ur number");
// let sum = 0;

// while(userNumber/10 != 0){
//     sum = sum + (userNumber%10 );
//     userNumber = Math.floor(userNumber/10);
// }
// alert(sum);
/////////////////////////////////////////////////////////////////
// let user1 = +prompt('enter a number:');
// let user2 = +prompt('enter a number:');
// if (user1 % 2 === 0) {
//     while (user1 < user2) {
//         console.log(user1);
//         user1 += 2;
//     }

// } else {
//     user1++;
//     while (user1 < user2) {
//         console.log(user1);
//         user1 += 2;
//     }


// }
///////////////////////////////////////////////////
// userNumber = 0;
// sum = 0;
// while(userNumber != -1){
//     userNumber = +prompt('enter a num:');
//     sum = sum + userNumber;

// }
// alert(sum +1 / );
//////////////////////////////////////////////////
// let user1 = +prompt('enter a number:');
// let user2 = +prompt('enter a number:');

// let power = 1;

// for(i = 0 ; i < user2 ; i++ ){
//    power = power * user1 ;
// }
// alert (power)
///////////////////////////////////////////////////

// let userNumbers = [];
// let userNumber = 0;
// sum = 0;


// while (userNumber != -1) {
//     userNumber = +prompt('enter a number:');
//     if (userNumber != -1) {
//         userNumbers.push(userNumber);
//     }


// }
// for (i = 0; i < userNumbers.length; i++) {
//     sum += userNumbers[i];

// }
// console.log( sum /userNumbers.length);

////////////////////////////////////////////////////////////
// let userInfo = [
//     { id: 1, name: 'dina', lastName: 'abdi', age: 22, email: 'sdwaeec' },
//     { id: 2, name: 'roya', lastName: 'salkncn', age: 22, email: 'efdsfdeec' },
//     { id: 3, name: 'dppna', lastName: 'abdfwdffi', age: 22, email: 'awrefdeec' }


// ];

// let userName = prompt('enter your name:');
// let userlastName = prompt('enter your last name:');

// let userAge = prompt('enter your age:');
// let userEmail = prompt('enter your email:');
// if (userName.length < 3 || userName.length > 10) {
//     alert('more than 3 words and less than 10');
// } else if (userlastName.length < 3 || userlastName.length >15) {
//     alert('more than 3 words and less than 15');

// } else if (isNaN(userAge || userAge.length > 3)){
//     alert('its not correct');

// }else{
//     let newUser ={
//         id : 4 , name :userName , lastName : userlastName , age : userAge ,email :userEmail
//     }
//     userInfo.push(newUser);
//     console.log(userInfo);

// }
////////////////////////////////////////////////////////////////////////////
// let userInfo = [
//     { id: 1, name: 'dina', lastName: 'abdi', age: 22, city: 'hmd' },
//     { id: 2, name: 'roya', lastName: 'salkncn', age: 45, city: 'tehran' },
//     { id: 3, name: 'dppna', lastName: 'abdfwdffi', age: 27, city: 'rasht' }


// ];

// userInfo.forEach(function(user){
//     console.log(user.name , user.lastName);
// });

//***********************************************************************************
//mohem
// //method some () && forEach()
// let allProducts = [
//     { id: 1, name: 'pen', price: 120000 },
//     { id: 2, name: 'apple', price: 25444400 },
//     { id: 3, name: 'book', price: 5005000 },
//     { id: 4, name: 'milk', price: 875000 },
//     { id: 5, name: 'phone', price: 455005000 }

// ];
// let basketArr = [
//     { id: 1, name: 'book', price: 5005000 },
//     { id: 2, name: 'phone', price: 5005000 }

// ];


// let userShop = prompt('enter your kala:');

// let requestProducts;

// let isInproduts = allProducts.some(function (products) {
//     if (products.name === userShop) {
//         requestProducts = products;
//         return true;
//     }
// });


// if (isInproduts === true) {

//     let newProducts = {
//         id: 3,
//         name: requestProducts.name,
//         price: requestProducts.price
//     }
//     basketArr.push(newProducts)
//     let sum = 0;

//     basketArr.forEach(function(product){
//         sum += product.price
//     })

//     console.log(basketArr);
//     console.log("total price:" ,sum)
// } else {
//     console.log('namojod');
// }
///////////////////////////////////////////////////////////////////////////
// //// method every()
// let userInfo = [
//     { id: 1, name: 'dina', lastName: 'abdi', age: 22, city: 'hmd' },
//     { id: 2, name: 'roya', lastName: 'salkncn', age: 54, city: 'tehran' },
//     { id: 3, name: 'soya', lastName: 'salkncn', age: 25, city: 'tehran' },
//     { id: 4, name: 'doya', lastName: 'salkncn', age: 45, city: 'tehran' },
//     { id: 5, name: 'poya', lastName: 'salkncn', age: 32, city: 'tehran' },
//     { id: 6, name: 'niki', lastName: 'abdfwdffi', age: 27, city: 'rasht' }
// ];

// let isAll = userInfo.every(function(user){
//     return user.age > 18;

// })
// if (isAll=== true){
//     console.log('welcome');
// }else{
//     console.log('go away kiddo')
// }

//////////////////////////////////////////////////////////////////////////////////


// let allProducts = [
//     { id: 1, name: 'pen', price: 120000 },
//     { id: 2, name: 'apple', price: 25444400 },
//     { id: 3, name: 'book', price: 5005000 },
//     { id: 4, name: 'milk', price: 875000 },
//     { id: 5, name: 'phone', price: 455005000 }

// ];
// let basketArr = [
//     { id: 1, name: 'pen', price: 5005000 },
//     { id: 2, name: 'phone', price: 4505000 },
//     { id: 3, name: 'milk', price: 575000 }


// ];

// let choose = +prompt('1.remove from basket \n 2.buy ');

// if (choose === 1) {
//     let indexDelEnter = +prompt('enter the number of the product that you want to remove from your basket: ');

//     let indexDel = basketArr.findIndex(function (Products) {
//         return Products.id === indexDelEnter;
//     })
//     console.log(indexDel);

//     if (indexDel !== -1) {
//         basketArr.splice(indexDel, 1);
//         console.log(basketArr);
//     } else {
//         console.log('not fount in basket');
//     }

// } else if (choose === 2) {
//     let usershop = prompt('add in your basket : ');
//     let requestProducts;

//     let isInproduts = allProducts.some(function (product) {
//         if (product.name.toLowerCase() === usershop.toLowerCase()) {
//             requestProducts = product;
//             return true;
//         }

//     });
//     if (isInproduts === true) {
//         let newProducts = {
//             id: 4,
//             name: requestProducts.name,
//             price: requestProducts.price
//         };
//         basketArr.push(newProducts);
//         console.log(basketArr);

//     } else {
//         console.log("no products like this");
//     }


// } else {
//     alert('enter 2 or 1');
// }
///////////////////////////////////////////////////////////////////
// //**work with forEach() && filter()**
// let userBasket = [
//     {id: 1 , name : 'pen ', price : 120000},
//     {id: 2 , name : 'apple ', price : 90000},
//     {id: 3 , name : 'phone ', price : 560000},
//     {id: 4 , name : 'laptob ', price : 890000},
//     {id: 5 , name : 'book ', price : 64000},
//     {id: 6, name : 'lamp', price : 96000}
// ];


// let lessPrice = userBasket.filter(function(product){
//     return product.price <100000 ;
// });

// let postCost = lessPrice.length * 1555 ;

// let sum = 0 ;

// let finalBaket = userBasket.forEach(function(product){
//     sum += product.price;

// })

// let totalPrice = sum + postCost
// console.log("price:" ,sum , 'post:' , postCost , 'total cost :', totalPrice);
////////////////////////////////////////////////////////////////////////////
// // **work with join()&& split( ) && reverse()**
// let Word = prompt('enter your word :');

// let wordArr = Word.split('');// make a array
// let revCharacter = wordArr.reverse(); // reverse
// let revWord = revCharacter.join('');

// console.log(revCharacter);


// if(Word===revWord){
//     console.log('you win')

// }else{
//     console.log('you loose')
// }
//////////////////////////////////////////////////////////////////////////
// // //toDo ************important ********video 80
// let toDoArr = [
//     { id: 1, name: 'task1', isDoing: true },
//     { id: 2, name: 'task2', isDoing: false },
//     { id: 3, name: 'task3', isDoing: false }

// ];
// let choices = +prompt('1.add todo \n 2.delet todo \n 3.change todo');



// if (choices === 1) {
//     let newTodoName = prompt('enter the Todo name:');
//     let newTodolist =
//         { id: 4, name: newTodoName, isDoing: false };
//     toDoArr.push(newTodolist);
//     console.log(toDoArr);

// } else if (choices === 2) {

//     let remTodoNumber = +prompt('enter the number of Todo name you want to remove:');

//     let delIndex = toDoArr.findIndex(function (todo) {
//         return todo.id === remTodoNumber;
//     })
//     console.log(delIndex);


//     if (delIndex !== -1) {
//         toDoArr.splice(delIndex, 1);
//         console.log(toDoArr)
//     } else {
//         console.log('enter a valid number')
//     }

// } else if (choices === 3) {
//     let changeTodoVaz = prompt('enter the Todo name:');

//     toDoArr.forEach(function (todo) {

//         if (changeTodoVaz === todo.name) {
//             todo.isDoing = true
//         }
//     })
//     console.log(toDoArr);

// } else {
//     console.log('enter a valid number')

// }
////////////////////////////////////////////////////////////
//// add task video 81
// let managersArray = {
//     ali : ['css' , 'js' ,'html'],
//     amin : ['pyton' , 'css' ,'java'],
//     reza : ['admin', 'c++' , 'csharp' ],
//     dina:['js','react']
// }

// let newTaskName = prompt('enter task name:') ;
// let employName = prompt('enter a name:');

// let employTask = managersArray[employName];

// employTask.push(newTaskName);
// console.log(managersArray);
/////////////////////////////////////////////////////////
//// vidoe 83 -----easy

// let cityArr = {
//     tehran : ['firozkoh' ,'alvand', 'pasdaran'],
//     hamedan : ['malayer' ,'toiserkan', 'nahavand'],
//     arak : ['khomein' ,'ashitan', 'mahalat']
// }
// let enterCity = prompt('enter the city name:')
// let mainCitiesName = cityArr[enterCity];


// mainCitiesName.forEach(city => {
//     console.log(city)

// });
////////////////////////////////////////////////////////
//// video 84

// let allQuestions = [
//     {id :1 , title : '1+1' ,answer : "2"},
//     {id :2 , title : '1+2' ,answer : "3"},
//     {id :3 , title : '1+3' ,answer : "4"},
//     {id :4 , title : '1+4' ,answer : "5"},
//     {id :5 , title : '1+5' ,answer : "6"},
//     {id :6 , title : '1+6' ,answer : "7"}

// ];
// let score = 0;


// allQuestions.forEach(function(question){
//     let answers = prompt('enter your answer:' + question.title + "?") 

//     if(answers === question.answer){
//         score ++;
//     }
// })
// console.log('this is your score:' ,score);
/////////////////////////////////////////////////////////////////
// // calc video 85 easy**
// let num1 = +prompt('enter a number :');
// let num2 = +prompt('enter a number :');
// let userOperator = prompt('enter a function (+ , * , / , **) :');

// if (userOperator === "+") {
//     sum(num1, num2);

// } else if (userOperator === "-") {
//     minus(num1, num2)
// } else if (userOperator === "*") {
//     zarb(num1, num2)
// } else if (userOperator === "/") {
//     dev(num1, num2)
// } else if (userOperator === "**") {
//     power(num1, num2)
// }else{
//     alert('not a valid parameter')
// }

// function sum() {
//     alert(num1 + num2)
// }
// function minus(num1, num2) {
//     alert(num1 - num2)
// }
// function zarb(num1, num2) {
//     alert(num1 * num2)
// }
// function dev(num1, num2) {
//     alert(num1 / num2)
// }
// function power(num1, num2) {
//     alert(num1 ** num2)
// }
///////////////////////////////////////////////////////////////////////////

// // // forgotten pass video 87

// let userLogging = [
//     { id: 1, userName: 'ali22', pass: 123 },
//     { id: 2, userName: 'amir22', pass: 5875 },
//     { id: 3, userName: 'ahmad22', pass: 45864 },
//     { id: 4, userName: 'dina22', pass: 45872 },
//     { id: 5, userName: 'hosein22', pass: 45974 },
//     { id: 6, userName: 'asqar22', pass: 45834 }
// ];

// let enterPass = +prompt('enter your password:');

// let findPass = userLogging.find(function (password) {
//     return password.pass === enterPass;
// })

// if (findPass === undefined) {
    
//     let forgetPass = prompt('your password is not valid enter your user name :')

//     let findUserName = userLogging.find(function (user) {
//         return user.userName === forgetPass;
//     })
    
//     if (findUserName.userName === forgetPass) {
//         alert('your pass:' + findUserName.pass);
//     } else {
//         alert('try again')
//     }
      
// } else {
    
//     alert('welcome');
// }
////////////////////////////////////////////////////////////////////////
// // timer video 92

// let i = 10 ;

// let timer =setInterval(function(){
//    if(i === 0){
//     clearInterval(timer)
//     console.log('game over')
//    }

// console.log(i)
// i--
// },1000)

////////////////////////////////////////////////////////////////////////
// // timer exercise video 92

// let enterminutes = +prompt('enter minutes:');
// let enterseconds = +prompt('enter second:');

// let timer = setInterval(function(){


//     if( enterseconds === -1){
//         enterminutes--
//         enterseconds =59    
//     }

//     if(enterminutes===0 && enterseconds===0)
//         clearInterval(timer)

//     console.log('timer:' + enterminutes + ':'+ enterseconds)
//     enterseconds--
    
// },1000)
//////////////////////////////////////////////////////////////////////

// // work with setTimeout() vide 96
// let hasTimeOut = false;
// setTimeout(() => {
//     if(!hasTimeOut){
//         alert("checkout")
//     }
    
// }, 5000);
/////////////////////////////////////////////////////////////
// // flag
// let userName = prompt('enter your name:');

// let users = ['amin ','ali','asqar','dina'];


// // using flag
// let loginFlag = false;

// for (let i = 0 ; i < users.length; i++){
//     if(users[i]=== userName){
//         loginFlag = true;
//     }
// }

// if(loginFlag){
//     console.log( 'welcome')
// }
// else{
//     console.log('ثبت نام نکردید')
// }
////////////////////////////////////////////////////






