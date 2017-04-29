$(document).ready(function() {

  $("form#tracksuggester").submit(function(event) {
    var development = $("select#development").val();
    var platform = $("select#platform").val();
    var career = $("select#career").val();
    var personality = $("select#personality").val();

    if (platform === "windows") {
      if (development === "front-end" ) {
        $("#track").empty().append("CSS/Design");
      } else if (development === "back-end") {
        $("#track").empty().append("Ruby");
      } else if (career === "large") {
        $("#track").empty().append("C#");
      } else if (career === "small") {
        $("#track").empty().append("Ruby");
      } else if (personality === "visual") {
        $("#track").empty().append("CSS/Design");
      } else {
        $("#track").empty().append("C#, Java, PHP, or Ruby");
      }
    } else if (platform === "mac") {
      if (development === "front-end" ) {
        $("#track").empty().append("CSS/Design");
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
        $("#track").empty().append("CSS/Design");
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
