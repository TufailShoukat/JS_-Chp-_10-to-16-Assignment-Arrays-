// !!!!!//======JS CHAPTER 13 TO 16 ALL QUESTIONS (ARRAYS)//!!!!!//==========

// // ====!!!!!!!!!Q:(I)=====!!!!!!!
// an empty array using JS literal notation to store
// student names in future.

var student = ["Sohail", "Wajid", "Ali", "Sadaqat"];
student = [];
document.write(student)[1, 2, 3, 4];



// ====!!!!!!!!!Q:(II)=====!!!!!!!
// Declare and initialize a strings array.

var cities = ["Karachi", "Islamabad", "Lahore"];
document.write(cities[0], cities[1], cities[2]);



// ====!!!!!!!!!Q:(III)=====!!!!!!!
// Declare and initialize a numbers array.

// var  number = [1,2,3,4,5];
// console.log(number[0],number[1],number[2],number[3],number[4]);



// ====!!!!!!!!!Q:(IV)=====!!!!!!!
// Declare and initialize a boolean array.
//   var boolean = [ true,false];
//   console.log(boolean[0],boolean[1]);


// ====!!!!!!!!!Q:(V)=====!!!!!!!
// Declare and initialize a mixed array.
var mix = ["Tufail", 56, ture,];
console.log(mix[0], mix[1], mix[2]);



// ====!!!!!!!!!Q:(IV)=====!!!!!!!
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser:

var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
document.write("<h1>" + "1)" + education[0], "</h1>",
    "<h1>" + "2)" + education[1], "</h1>",
    "<h1>" + "3)" + education[2], "</h1>",
    "<h1>" + "4)" + education[3], "</h1>",
    "<h1>" + "5)" + education[4], "</h1>",
    "<h1>" + "6)" + education[5], "</h1>",
    "<h1>" + "7)" + education[6], "</h1>",
    "<h1>" + "8)" + education[7], "</h1>",

)


// ====!!!!!!!!!Q:(VII)=====!!!!!!!
// // a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students:

var student = ["Raza ", "Shair", "Moiz"];
document.write("<b>" + "Score of " + student[0], "</b")
var score = ["320", "230", "480"]
document.write("<b>" + " is." + score[0], " Percenage : 64%" + "</b>", "</br>")

document.write("<b>" + "Score of " + student[1], "</b>", "<b>" + " is." + score[1], " Percenage : 46%" + "</b>", "</br>"

)

document.write("<b>" + "Score of " + student[2], "</b>", "<b>" + " is." + score[2], " Percenage : 96%" + "</b>"

)

document.write("<b>" + " is." + score[1], " Percenage : 64%" + "</b>")



//====!!!!!!!!!Q:(VIII)=====!!!!!!!
//9. Initialize an array with color names. Display the array
//elements in your browser.

var colur = ["Green", "Pink", " Black", "White", "Blue"];
//a.  the user Purple  color he/she wants to add to the
//beginning & add that color to the beginning of the array.
//Display the updated array in your browser.
colur.unshift("Purple")
// Here is Add One more in first

// b. the user Yellow color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
colur.push("Grey")
// here one add more in last

// Delete the first color in the array. Display the updated
// array in your browser.
colur.shift("")
//here one delete in first


//Delete the last color in the array. Display the updated
//array in your browser.
//here is one delete in last

colur.pop("")
document.write(colur[0], colur[1], colur[2], colur[3], colur[4],);




//====!!!!!!!!!Q:(IX)=====!!!!!!!
// Write a program to create a single string from the:
var arr = ["This", "is", "My", "Cat"];
document.write(arr)




//====!!!!!!!!!Q:(X)=====!!!!!!!
//  A program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var scoreStudent = ["320", "230", "480", "120" + "</br>"];
document.write("Scores of students:" + scoreStudent,);
document.write(" Ordered Scores of students:" + scoreStudent[1] + "   ", scoreStudent[1] + "   ", scoreStudent[0] + "   ", scoreStudent[2]);



// ====!!!!!!!!!Q:(XI)=====!!!!!!!
//  A program to initialize an array with city names.
// Copy 2 array elements from cities array to selectedCities
// array.
var listCities = ["Karachi", "Lahore", "islamabad", "Quetta", "Peshawar",];
document.write("Cities List:" + "<br>" + listCities + "<br>");
document.write("Selected Cities List:" + "<br>", listCities[2], "," + listCities[3])



// // ====!!!!!!!!!Q:(XII)=====!!!!!!!
// A program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var mobiles = ["Apple", "Nokia", "Sony", "Harer", "Sumsung", "Motorola"];
document.write("<select>" + "<option>", [mobiles] + "</option>" + "</select>"[mobiles])



// ====!!!!!!!!!(THE END!)=====!!!!!!!!!!!!!!!!!!!////










