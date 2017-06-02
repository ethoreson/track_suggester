$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var formName = $("#name").val();
    var formType = $("#type").val();
    var formCompany = $("#company").val();
    var formLine = $("#line").val();
    var formRole = $("input:radio[name=role]:checked").val();


    console.log ("Thanks, " + formName + ". We suggest you take:");

    $(".result#" + formLine).toggle();
  });

});
