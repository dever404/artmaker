var color=document.getElementById('colorPicker');
var width=document.getElementById('inputWidth');
var height=document.getElementById('inputHeight');
var form=document.getElementById('sizePicker');
var table = document.querySelector('#pixelCanvas');
makeGrid();
form.addEventListener("submit",  function(event){
    event.preventDefault();
    table.firstElementChild.remove();
    makeGrid();

  });

function makeGrid() {
  var x=height.value;
  var y=width.value;
  for(i=0;i<x;i++) {
     var row = table.insertRow(i);
    for(j=0;j<y;j++) {
      var cell=row.insertCell(j);
      cell.addEventListener('click', function(e) {
        e.target.style.background = color.value;
      });
    }
  }
}
