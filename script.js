$("#submit").click(function() {
  if ($("#empty").is(":empty")) {
    console.log("Yes");
    $("#empty").append(" | Hello");
  } else if ($("#empty2").is(":empty")) {
    console.log("Yes2");
    $("#empty2").append(" | Hello there");
  } else console.log("No");
});
