//back

var add = function(num1, num2, num3) {
  return num1 + num2 + num3;
};


//front-end

$(document).ready(function() {
  $("form#tracksuggester").submit(function(event) {
    var ideal = parseInt($("#ideal").val());
    var platform = parseInt($("#platform").val());
    var job = parseInt($("#job").val());
    var creation = parseInt($("#creation").val());
    var userInput = add(ideal, platform, job, creation);





    if (userInput <= 4) {
      $("#track").empty().append("CSS");
    }
    else if (userInput === 5 || userInput <= 8) {
      $("#track").empty().append("Java");
    }
    else if (userInput === 9 || userInput <= 12) {
      $("#track").empty().append("Ruby");
    }
    else {
      $("#track").empty().append("Ruby");
    }

    event.preventDefault();
    $("#statement").show();

  });
});
