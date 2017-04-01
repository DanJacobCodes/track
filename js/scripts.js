$(document).ready(function(){
  $("#track").submit(function(event){
    event.preventDefault()

    var job = $("#job").val();
    var corp = $("#corp").val();
    var tech = $("#tech").val();
    var os = $("#os").val();
    var start = $("#start").val();

    if ((job === "steady") && (corp === "large") && (tech === "micro") && (os === "pc") && (start === "no")){
      $(".java", ".c", ".ruby").hide();
      $(".php").fadeIn();
    }
    else if ((job === "steady") && (corp === "large") && (tech === "goog") && (os === "mac") && (start === "yes")){
      $(".php", ".c", ".ruby").hide();
      $(".java").fadeIn();
    }
    else if ((job === "contract") && (corp === "startup") && (tech === "goog") && (os === "mac") && (start === "yes")){
      $(".java", ".c", ".php").hide();
      $(".ruby").fadeIn();
    }
    else {
      ((job === "steady") && (corp === "large") && (tech === "micro") && (os === "pc") && (start === "yes"))
      $(".java", ".php", ".ruby").hide();
      $(".c").fadeIn();
    }
  });
});
