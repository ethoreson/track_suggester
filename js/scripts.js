$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var formName = $("#name").val();
    var formType = $("#type").val();
    var formCompany = $("#company").val();
    var formLine = $("#line").val();
    var formRole = $("input:radio[name=role]:checked").val();

    $("span.name").text(formName);
    $("#thanks").fadeToggle();
    if (formCompany === "Microsoft") {
      $("#c").fadeToggle();
    } else if (formCompany === "Zillow") {
      $("#java").fadeToggle();
    } else if (formCompany === "Amazon") {
      $("#php").fadeToggle();
    } else if (formCompany === "Swecker") {
      $("#ruby").fadeToggle();
    } else {
      $("#css").fadeToggle();
    }
  });

});
