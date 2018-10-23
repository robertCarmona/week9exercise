console.log("connected");
var myArray = ["iPhone", "Galaxy", "Pixel", "Pocophone","Razer"];

// length of the array
console.log(myArray.length);

// length of each item in the array
console.log(myArray[0].length,myArray[1].length,myArray[2].length,myArray[3].length,myArray[4].length);

// reverse the array and console log the array
//myArray.reverse();
//console.log(myArray);

// copy array without simple typing the array
// creating a function first
function arrayCopier(theArray){
  var copier = [];
  for(var i = 0; i < theArray.length; i++){
    copier.push(theArray[i]);
  }
  return copier;
}

// use the function to make a copy
myArrayCopy = arrayCopier(myArray);

// sort array alphabetically
myArrayCopy.sort();

// create a array of 5 numbers
myNumArray = [65, 23, 17, 1009, 11];
console.log(myNumArray);

// sort array in  ascending order
myNumArray.sort(function(a,b){
  if(a > b){
    return 1;
  } else {
    return -1;
  }
})
console.log(myNumArray);

//sort array in descending order
myNumArray.reverse();
console.log(myNumArray);

// array with 3 strings
var gameName = ["Halo", "Destiny", "Fortnite"];
console.log(gameName);

// add two more strings to array
gameName.push("GTA", "COD");
console.log(gameName);

// remove the first element from the array
gameName.shift();
console.log(gameName);

//function that stores users value in an array that displays it on
// an unorder list
var userArray = [];
var ulElement = document.createElement("ul");
document.body.appendChild(ulElement);

function storeInfo(){
  var value = "";
  var userI = document.getElementById("userI");
  value = userI.value;
  userArray.push(value);
  var userText = document.createElement("li");
  userText.innerText = userArray[userArray.length - 1];
  ulElement.appendChild(userText);
}
