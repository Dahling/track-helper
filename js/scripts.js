//back

var add = function(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
};


//front-end

$(document).ready(function() {
  $("form#tracksuggester").submit(function(event) {
    var ideal = parseInt($("#ideal").val());
    var platform = parseInt($("#platform").val());
    var job = parseInt($("#job").val());
    var creation = parseInt($("#creation").val());
    var confidence = parseInt($("#confidence").val());
    var userInput = add(ideal, platform, job, creation, confidence);





    if (userInput <= 4) {
      $("#track").empty().append("CSS");
    }
    else if (userInput >= 5 && userInput <= 8) {
      $("#track").empty().append("Java");
    }
    else if (userInput >= 9 && userInput <= 12) {
      $("#track").empty().append("Ruby");
    }
    else {
      $("#track").empty().append("Try <br> Again");
    }

    event.preventDefault();
    $("#statement").show();

  });
});
