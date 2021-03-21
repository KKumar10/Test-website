//Updates 4
function showHide4() {
  var a = document.getElementById('upd4');
  if (a.style.display == 'none') {
    a.style.display = 'block';
  }
  else {
    a.style.display = 'none';
  }
}

//Updates 3
function showHide3() {
  var a = document.getElementById('upd3');
  if (a.style.display == 'none') {
    a.style.display = 'block';
  }
  else {
    a.style.display = 'none';
  }
}

//Updates 2
var a;
function showHide2() {
  if(a==1){
    document.getElementById('upd2').style.display="inline";
    return a=0;
  }
  else {
    document.getElementById('upd2').style.display="none";
    return a=1;
  }
}


//Updates 1
function showHide() {
  var a = document.getElementById('upd1');
  if (a.style.display == 'none') {
    a.style.display = 'block';
  }
  else {
    a.style.display = 'none';
  }
}
