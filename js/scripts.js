$(document).ready(function() {

  $("form#tracksuggester").submit(function(event) {
    var development = $("#development").val();
    var platform = $("#platform").val();
    var career = $("#career").val();
    var personality = $("#personality").val();

    if (platform === "windows") {
      if (development === "front-end" ) {
        $("#track").empty().append("CSS");
      } else if (development === "back-end") {
        $("#track").empty().append("Ruby");
      } else if (career === "large") {
        $("#track").empty().append("C#");
      } else if (career === "small") {
        $("#track").empty().append("Ruby");
      } else if (personality === "visual") {
        $("#track").empty().append("CSS");
      } else {
        $("#track").empty().append("C#, Java, PHP, or Ruby");
      }
    } else if (platform === "mac") {
      if (development === "front-end" ) {
        $("#track").empty().append("CSS");
      } else if (development === "back-end") {
        $("#track").empty().append("Ruby");
      } else if (career === "large") {
        $("#track").empty().append("PHP");
      } else if (career === "small") {
        $("#track").empty().append("Ruby");
      } else {
        $("#track").empty().append("Track3");
      }
    } else if (platform === "android"){
      if (development === "front-end" ) {
        $("#track").empty().append("CSS");
      } else if (development === "back-end") {
        $("#track").empty().append("Java");
      } else if (career === "large") {
        $("#track").empty().append("Java");
      } else if (career === "small") {
        $("track").empty().append("Java")
      } else if (personality === "visual") {
        $("#track").empty().append("CSS/Design");
      } else {
        $("#track").empty().append("C#, Java, PHP, or Ruby");
      }
    } else {
      alert('Please enter your age.');
      }

    $("#statement").show();

    event.preventDefault();
  });
});
