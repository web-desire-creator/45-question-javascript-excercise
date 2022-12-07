// //task 2
// var name = "Eric"
// alert("Hello " + name + ",would you like to learn some Python today")
// //task 3
// var x = "Eric"
// console.log(x.toUpperCase())
// console.log(x.toLowerCase())
// function titleCase(string) {
//       var sentence = string.toLowerCase().split(" ");
//       for(var i = 0; i< sentence.length; i++){
//          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//       }
//    console.log(sentence.join(" "));
//    return sentence;
//    }
//    titleCase(x);
// //task 4
// document.write("Albert Einstein once said, “A person who never made a mistake never tried anything new.”")
// //task 5
// var famous_person= "Albert Einstein"
// var msg = "A person who never made a mistake never tried anything new."
// document.write(famous_person + " once said, "+ '"' +msg+'"')
// //task 6
// // Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// // Make sure you use each character combination, "\t" and "\n", at least once. 
// // Print the name once, so the whitespace around the name is displayed.
// // Then print the name after striping the white spaces.
// let full_name = " Bilal Sheikh "
// console.log("\n\t"+full_name)
// let rstrip = ("\t" + full_name)
// let lstrip = ("\t" + full_name)
// let strip = ("\t" + full_name)
// console.log(full_name)
// console.log("Whitespace Stripping:\n\t" + rstrip + lstrip + strip)
// //task 7
// console.log(5+3)
// console.log(10-2)
// console.log(4*2)
// console.log(16/2)
//task 8
//nothing
//task 9
// x=9;
// console.log(`My fav number is ${9}`);
//task 10
//console.log(`My fav number is ${9}`); //i am printing 9
// task 11
// names = ["Adil","Bilal","Zarish","Maryam"]
// for (let index = 0; index < names.length; index++) {
//     console.log(names[index]);
// }
//task 12
// names = ["Adil","Bilal","Zarish","Maryam"]
// for (let index = 0; index < names.length; index++) {
//     console.log(`This is personallized Message for ${names[index]}`);
// }
//task 13
// let array=["Hondarraytorcycle","Yamaha array", "Suzuki 150", "Honda 70CC"]
// for (let index = 0; index < array.length; index++) {
//     console.log(`I would like to own a ${array[index]}`);

// }
//task 14, 15, 16 and 17
// const prompt = require('prompt-sync')();
// let array = ["saliha","ifrah", "amna", "urwah"]
// for (let index = 0; index < array.length; index++) {
//     console.log(`I would like to invite ${array[index]} for a dinner `);
// }
// const name= prompt("Enter is not coming: ")
// const i = array.indexOf(name); // 👉️  0

// if (i !== -1) {
//   array[i] = 'gurya';
// }
// console.log(array);
// console.log("I found a big dinning table.")
// array.push("katrina","maya","fatima")
// for (let index = 0; index < array.length; index++) {
//     console.log(`I would like to invite ${array[index]} for a dinner `);
// }

// console.log("you can invite only two people for dinner")
// for (let index = 0; index < (array.length+2); index++) {
// nikalDo= prompt("kis ko nikalain ab?: ")
// const inew = array.indexOf(nikalDo);
// if (inew > -1) { // only splice array when item is found
//   array.splice(inew, 1); // 2nd parameter means remove one item only
// }

// console.log(array);    
// }

// for (let index = 0; index < array.length; index++) {
//     console.log(`I would like to invite ${array[index]} for a dinner `);
// }
//task 18
// let array = ["Norway", "Turkey", "Germany", "Canada"];
// for (let index = 0; index < array.length; index++) {
//     console.log(`${index+1}. ${array[index]}`);
// }
// console.log("----------------------")
// sorted=array.slice().sort()
// for (let index = 0; index < sorted.length; index++) {
//     console.log(`${index+1}. ${sorted[index]}`);
// }
// console.log(array)
// console.log("----------------------")
// x=1;
// for (let index = sorted.length-1; index >= 0; index--) {
//     console.log(`${x}. ${sorted[index]}`);
//     x++;
// }
// console.log(array)
// arra = array.reverse()
// console.log(arra)
// console.log(array)
// console.log(array.reverse())
// array.sort()
// console.log(array)
// array.reverse()
// console.log(array)

// //task 20
// array= ["k2","ravi","pakistan","gujranwala","urdu"]
// //task 21
// object={
//     mountain : "k2",
//     river : "ravi",
//     country : "pakistan",
//     city : "gujranwala",
//     language : "urdu"
// }
//task 22
// array= ["k2","ravi","pakistan","gujranwala","urdu"]
// console.log(array[20])
//task 23
// let car = 'subaru';
// console.log(car == 'subaru')
// x =10
// console.log(x<12)
// x =12
// console.log(x<=12)
// x =13
// console.log(x>12)
// x =12
// console.log(x>=12)
// x =12
// console.log(x<12)
// x =10
// console.log(x>12)
// x =10
// console.log(x>=12)
// x =10
// console.log(x===12)
// x =10
// console.log(x>=12)

//task 24
// a="bilal"
// b=['b','i','l','a','l']
// console.log(a==b)
// console.log(a==b)
// // b=["bilal"]
// console.log(a===b)
// console.log(a==b)
// console.log(a==a.toLowerCase())
// console.log('2'==2)
// console.log(true || false)
// console.log(b.includes('j'))
// console.log(b.includes('b'))

// //task 25
// alien_color='green'
// if (alien_color==='green') {
//     console.log("you earned 5 points")
// }
// //task 26
// alien_color='green'
// if (alien_color==='green') {
//     console.log("you earned 5 points")
// }
// else 
// console.log("you earned 10 points")



//task 27
// alien_color='green'
// if (alien_color==='green') {
//     console.log("you earned 5 points")
// }
// else if (alien_color=='yellow'){
//     console.log("you earned 10 points")
// }
// else 
// console.log("you  earned 15 points")



// task 28
// let age=2
// if (age<=2) {
//     console.log("the person is a baby")
// }
// else if (age<=4) {
//     console.log("the person is a toddler.")
// }
// else if(age<13){
//     console.log(" the person is a kid.")
// }
// else if (age < 20) {
//     console.log("the person is a teenager.")
// }
// else if (age<65) {
//     console.log("the person is an adult.")
// }
// else
// console.log("The person is elder")


//task 29
// favorite_fruits=['banana', 'apple', 'mango','grapse']
// find_element='banana'
// if (favorite_fruits.indexOf(find_element)!=-1) {
//     if (find_element=='banana')
//     console.log("You really like bananas!")
//     else if (find_element==='mango') {
//     console.log("You really like mango!")    
//     }
//     else if (find_element==='grapse') {
//         console.log("You really like grapse!")    
//     }
// }
// else
// console.log("Not available in list")

//task 30
// userName=["Admin", "Bilal", "Adil"]
// for (let index = 0; index < userName.length; index++) {
//     if(userName[index]=="Admin")
//     console.log(`Hello ${userName[index]}, would you like to see a status report?`);
//     else 
//     console.log(`Hello ${userName[index]}, thank you for logging in again.`)
// }

//task 31
// userName=["Admin", "Bilal", "Adil"]
// userName=[]
// if (userName.lenght === undefined)
// {
//     console.log ("We need to find some users!")
// }


//task 32
// current_users=["sheikhb885", "bilalnadeem.7","sheikhbilal885","bilaldesigns885","adilnadeem709"]
// new_users=["carbondioxide","monooxidecarbon", "justdoit","sheikhb885","imheresince1997","adilnadeem1234"]
// for (let i = 0; i < new_users.length; i++) {
//     for (let j = 0; j < current_users.length; j++) {
//         if (current_users[j]===new_users[i]) {
//             console.log(`${current_users[j]} user name is not available`)
//         }
//     }
// }

//task 33
// array = [1,2,3,4,5,6,7,8,9]
// for (let index = 0; index < array.length; index++) {
//     if (array[index]===1) {
//         console.log(`${array[index]}st\n`)     
//     }
//     else if (array[index]===2) {
//         console.log(`${array[index]}nd\n`)     
//     } 
//     else if (array[index]===3) {
//         console.log(`${array[index]}rd\n`)     
//     } 
//     else {
//         console.log(`${array[index]}th\n`)     
//     }  
// }

// //task 34
// array=["fajita", "supreme", "barbquee"]
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }
// for (let index = 0; index < array.length; index++) {
//     console.log(`I like ${array[index]} pizza.`);
// }
// console.log("how much you like pizza")


//task 35
// animals=["Dog", "cat", "elephant", "loin"]
// for (let index = 0; index < animals.length; index++) {
//     console.log(`A ${ animals[index]} would make a great pet`)
// }
// console.log("Any of these animals will make a great pet")


//task 36
// make_tshirt= (size,printline) => console.log(`The size of t-shirt is ${size} and message on it is ${printline}`) 
// make_tshirt('L','text qoute')

//task 37
// make_tshirt= (printline,size='L') => console.log(`The size of t-shirt is ${size} and message on it is ${printline}`) 
// make_tshirt('L',"I love javascript")
// make_tshirt('M',"I love javascript")
// make_tshirt('S',"I love javascript")

//task 38
// describe_city =(city, country='Pakistan') => console.log(`${city} is in ${country}`)
// describe_city("Gujranwala")
// describe_city("Lahore")
// describe_city("Delhi","India")



//task 39
// city_country=(city, country)=>console.log(`${city}, ${country}`)
// city_country("Delhi","India")
// city_country("Lahore","Pakistan")
// city_country("Gujranwala","Pakistan")

//task 40
// make_album=(artistName, albumTitle)=> {
//     return {
//     Artist_Name : artistName,
//     Album_Title : albumTitle
//     }
// };
// dic1=make_album("Atif","Aadat")
// dic2=make_album("Nusrat","Kali Kali")
// dic3=make_album("Ali","Jaddu")
// console.log(dic1)
// console.log(dic2)
// console.log(dic3)


//task 41
// array = ["Adil","Bilal","Ashhab","Wabi"]
// show_magicians=(array)=>{
//     for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
//     }
// }
// show_magicians(array)

//task 42 and 43
// array = ["Adil","Bilal","Ashhab","Wabi"]
// show_magicians=(array)=>{
//     for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
//     }
// }
// make_great=(array)=>{
//     for (let index = 0; index < array.length; index++) {
//     array[index]="The great "+array[index]
//     }
//     return array
// }
// array2= make_great(array)
// show_magicians(array2)


// //task 44
// sandwitch_maker = (...args) =>{
//     for (let index = 0; index < args.length; index++) {
//     console.log(args[index]);
//     }
// }
// sandwitch_maker("Cheese", "Olives", "tomato", "vegetables", "chicken", "Origano")
// sandwitch_maker("souces", "vegetables", "chicken", "Origano")
// sandwitch_maker("Mustard", "tomato", "vegetables", "chicken", "Origano")

//task 45
car =(x,y,...args)=> {
return {
    maufacturer : x,
    model : y,
    color : args[0],
    optional_feature : args[1]
    }
}
car1 = car("Suzuki", "Mehran", "White", "AC")
console.log(car1)