var x = 0, y = 0,
    vx = 0, vy = 0,
    ax = 0, ay = 0;

var aim = document.getElementById("aim");

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = function(e) {
    ax = event.accelerationIncludingGravity.x * 1;
    ay = event.accelerationIncludingGravity.y * 1;

    if ( e.rotationRate ) {
    }
  }

  setInterval( function() {
    var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
    if ( landscapeOrientation) {
      vx = vx + ay;
      vy = vy + ax;
    } else {
      vy = vy - ay;
      vx = vx + ax;
    }
    vx = vx * 0.98;
    vy = vy * 0.98;
    y = parseInt(y + vy / 30);
    x = parseInt(x + vx / 30);


    aim.style.top = y + "px";
    aim.style.left = x + "px";

  }, 10);
}


function boundingBoxCheck(){
  if (x<0) { x = 0; vx = -vx; }
  if (y<0) { y = 0; vy = -vy; }
  if (x>document.documentElement.clientWidth-20) { x = document.documentElement.clientWidth-20; vx = -vx; }
  if (y>document.documentElement.clientHeight-20) { y = document.documentElement.clientHeight-20; vy = -vy; }
}
