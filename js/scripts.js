$(document).ready(function() {
//this creates an array with 5 grocery list items

//this stores the user input and turns it into a string


//this will trigger a function when the form is submitted
  $("form").submit(function(e) {
    e.preventDefault();
    //create an array with grocery list items
    var groceries =  ["firstItem", "secondItem", "thirdItem", "fourthItem", "fifthItem"];


    //take users input into a upperCase string
         groceries.forEach(function(groceries) {


          var input = $("input#" + groceries).sort().val().toUpperCase();


          console.log(groceries[]);
            //  input = input.sort();
            // var inputArray = input.split(" ");
            // inputArray.sort();


            $("ul").append("<li>" + input + "</li>", );
            $('form').hide();


          });



    // hide in the input

    //output manipulated input to an element
    //  $('inputGroceries').text(input);

  });

});
