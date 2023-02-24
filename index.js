const $ = document.querySelector.bind(document);
    var inc = 1000;
    clock();

function clock() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
  
  var hour = h*30;
  var minute =m*6;
  var second = s*60;
  $(".second").style.transform = `rotate(${second}deg)`;
  $(".minute").style.transform = `rotate(${minute}deg)`;
  $(".hour").style.transform = `rotate(${hour}deg)`;
}

setInterval(clock, inc);
