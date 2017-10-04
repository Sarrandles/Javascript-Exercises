//exercise 1

var input=prompt("Enter a number.")
var num=parseInt(input)
var total = 0;
for (num; num>0; num--) {
var total = total + num;

}

alert(total);

//exercise 2
var str1 = ""
//without this, it cancels out the prompt after one cycle?
do{
  var answer1= prompt ("Do you want to play?")
  if (answer1 == "yes") {
  var answer2= prompt ("Please enter a word.")
  var str2= answer2 + " ";
  var str1= str1.concat(str2);
}
}
while (answer1 == "yes");
  alert(str1);

//exercise 3

var str1 = prompt ("What is your name?")

var answer1 = prompt ("Would you like to print your name?")

while (answer1 != "no")
{
alert ("Hello my name is " + str1);
var answer1= prompt ("Would you lke to print your name?")
var str2 = "!";
var str1 = str1.concat (str2);
}

//exercise 4

var answer1 = prompt ("What time of day is it?")

var time = ["", "breakfast", "lunch", "dinner"];
var meal = ["", "eggs and toast", "a salad", "chicken and rice"];

if (answer1 == "morning")
{
  var answer2 = "1";
}
if (answer1 == "noon")
{
  var answer2 = "2";
}
if (answer1 == "evening")
{
  var answer2 = "3";
}
var str1 = time[answer2];
var str2 = meal[answer2];
//alert (answer2);

alert ("Since it is " + answer1 + ", you should be eating " + str1 + ". We suggest " + str2 + ".");
