$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var formName = $("#name").val();
    var formType = $("#type").val();
    var formCompany = $("#company").val();
    var formLine = $("#line").val();
    var formRole = $("input:radio[name=role]:checked").val();

    $("span.name").text(formName);
    $("#thanks").show();
    if (formCompany === "Microsoft") {
      $("#c").show();
    } else if (formCompany === "Zillow") {
      $("#java").show();
    } else if (formCompany === "Amazon") {
      $("#php").show();
    } else if (formCompany === "Swecker") {
      $("#ruby").show();
    } else {
      $("#css").show();
    }
  });

});
