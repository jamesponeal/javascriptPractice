$(document).ready(function(){
  var url = "../info/employees.json";
  $.getJSON(url, function(response){
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index,employee){
      if(employee.inoffice === true){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    }); // end each
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); // end getJSON
}); // end ready