$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault()

    var job = $("#job").val();
    var corp = $("#corp").val();
    var tech = $("#tech").val();
    var os = $("#os").val();
    var start = $("#start").val();

    if (job === "steady" && corp === "large" && tech === "micro" && os === "pc" && start === "no") {
      $(".java", ".c", ".Ruby").hide();
      $(".php").fadeIn();



    }
  });
});
