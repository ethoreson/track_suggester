$(document).ready(function() {
  $("#submitButton").click(function(event) {
    var c_total = 0;
    var java_total = 0;
    var php_total = 0;
    var ruby_total = 0;
    var css_total = 0;

    $("#c").hide();
    $("#java").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#css").hide();
    $("#thanks").hide();
    event.preventDefault();

    var formName = $("#name").val();
    var formType = $("#type").val();
    var formCompany = $("#company").val();
    var formPersonality = $("#personality").val();
    var formLine = $("input:radio[name=line]:checked").val();
    var formRole = $("input:radio[name=role]:checked").val();

    $("span.name").text(formName);
    $("#thanks").fadeToggle();

    if (formType === "Large Tech Giant") {
      c_total += 1;
    } else if (formType === "Enterprise Corporation") {
      java_total += 1;
    } else if (formType === "Content Management Organization") {
      php_total += 1;
    } else if (formType === "Startup Company") {
      ruby_total += 1;
    } else {
      css_total += 1;
    }

    if (formCompany === "Microsoft") {
      c_total += 1;
    } else if (formCompany === "Zillow") {
      java_total += 1;
    } else if (formCompany === "Amazon") {
      php_total += 1;
    } else if (formCompany === "Swecker") {
      ruby_total += 1;
    } else {
      css_total += 1;
    }

    if (formPersonality === "Fun") {
      c_total += 1;
    } else if (formPersonality === "Friendly") {
      java_total += 1;
    } else if (formPersonality === "Unique") {
      php_total += 1;
    } else if (formPersonality === "High-energy") {
      ruby_total += 1;
    } else {
      css_total += 1;
    }
    console.log(c_total, java_total, php_total, ruby_total, css_total);
    if (formLine === "system") {
      c_total += 1;
    } else if (formLine === "out") {
      java_total += 1;
    } else if (formLine === "echo") {
      php_total += 1;
    } else if (formLine === "puts") {
      ruby_total += 1;
    } else {
      css_total += 1;
    }

    if (formRole === "business_software") {
      c_total += 1;
    } else if (formRole === "high_performance_applications") {
      java_total += 1;
    } else if (formRole === "backend_developer") {
      php_total += 1;
    } else if (formRole === "user_interaction") {
      ruby_total += 1;
    } else {
      css_total += 1;
    }


    if ((c_total > java_total) && (c_total > php_total) && (c_total > ruby_total) && (c_total > css_total)) {
        $("#c").fadeToggle();
    } else if ((java_total > php_total) && (java_total > ruby_total) && (java_total > css_total)) {
        $("#java").fadeToggle();
    } else if ((php_total > ruby_total) && (php_total > css_total)) {
      $("#php").fadeToggle();
    } else if (ruby_total > css_total) {
      $("#ruby").fadeToggle();
    } else {
      $("#css").fadeToggle();
    }
  });
});
