$(document).ready(function() {

//the array info is the appended location
  $("#theOne").submit(function(event) {
    var groceries = ["item1", "item2", "item3", "item4", "item5"];
    var sortGroceries = groceries.sort();



    groceries.forEach(function(groceries) {

      var userInput = $("input#" + groceries).val();

      $("." + groceries).text(userInput.toUpperCase());

      $("form").hide();

      event.preventDefault();

    });
  });
});
