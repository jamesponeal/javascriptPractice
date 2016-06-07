var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    //console.log(typeof xhr.responseText);
    var employees = JSON.parse(xhr.responseText);
    console.log(employees);
  }
};
xhr.open('GET','info/employees.json');
xhr.send();
