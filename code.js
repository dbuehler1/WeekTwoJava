function calcPizza(){
    var numPeople = parseInt(prompt("Enter the number of people sharing(Include yourself): "));
    var numToppings = parseInt(prompt("Enter the number toppings ordered: "));
    var total = parseFloat(((numToppings * 1.25) + 15)/numPeople);
    alert("The cost per person is: $" + total.toFixed(2));
}
function calcLibrary(){
    var numBooks = parseInt(prompt("Enter the number of books: "));
    var numDVD = parseInt(prompt("Enter the number of DVDs: "));
    var numDays = parseInt(prompt("Enter the number of days late: "));
    var total = parseFloat((numBooks * (numDays * 0.25))+(numDVD * (numDays * 0.50)));
    alert("The  amount due is: $" + total.toFixed(2));
}