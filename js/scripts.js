$(document).ready(function() {

  $("form#tracksuggester").submit(function(event) {
    var platform = $("select#platform").val();
    var career = $("select#career").val();
    var personality = $("select#personality").val();

    if (platform === "windows") {
      if (career === "developer" ) {
        $("#track").empty().append("Track1");
      } else if (career === "startup") {
        $("#track").empty().append("Track2");
      } else {
        $("#track").empty().append("Track3");
      }
    } else if (platform === "mac") {
      if (career === "developer" ) {
        $("#track").empty().append("Track1");
      } else if (career === "startup") {
        $("#track").empty().append("Track2");
      } else {
        $("#track").empty().append("Track3");
      }
    } else if (platform === "android"){
      if (career === "developer" ) {
        $("#track").empty().append("Track1");
      } else if (career === "startup") {
        $("#track").empty().append("Track2");
      } else {
        $("#track").empty().append("Track3");
      }
    } else {
      alert('Please enter your age.');
      }

    $("#statement").show();

    event.preventDefault();
  });
});
