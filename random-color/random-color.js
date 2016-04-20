var html = '';

function randomColorCode(){
  return Math.floor(Math.random() * 256 );
}

function rgbColor(){
  return 'rgb(' + randomColorCode() + ',' + randomColorCode() + ',' + randomColorCode() + ')';
}

for( var i = 1; i <= 100; i += 1){
  html += '<div style="background-color:' + rgbColor() + '"></div>';
}

document.write(html);