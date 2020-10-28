$(document).ready(
    function(){
        $("#calcTotal").click(calcPizza);
        $("#calcfeeTotal").click(calcLibrary);
        function calcPizza(){
            var numPeople = parseInt($("#numPeople").val());
            var numToppings = parseInt($("#numtoppings").val());
            var total = parseFloat(((numToppings * 1.25) + 15)/numPeople);
            $("#due").text((total.toFixed(2)));
        }
        function calcLibrary(){
            var numBooks = parseInt($("#books").val());
            var numDVD = parseInt($("#dvd").val());
            var numDays = parseInt($("#days").val());
            var total = parseFloat((numBooks * (numDays * 0.25))+(numDVD * (numDays * 0.50)));
            $("#fee").text((total.toFixed(2)));
        }
    }
);
