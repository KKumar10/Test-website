const options = {
  bottom: '30px', // default: '665px'
  right: 'unset', // default: '318px'
  left: '18px', // default: 'unset'
  time: '0.2s', // default: '0.2s'
  buttonColorLight:'#100f2c',  // default: '#100f2c'
  buttonColorDark: '#fff', // default: '#100f2c'
  label: '🌒', // default: ''
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

/*var input = document.getElementById("comments");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("submitBtn").click();
}
});*/
//new Darkmode(options).showWidget();
