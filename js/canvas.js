var slo;
var hatter = new Image();
function elsoRajzol() {
  hatter.src="kepek/hatter.jpg";

  var cv = document.getElementById('canvas');
  var ctx = cv.getContext("2d");

  ctx.fillStyle= ctx.createPattern(hatter, 'no-repeat');

  ctx.rect(0, 0, 1280, 720);
  ctx.fill();
  window.addEventListener("keydown", checkKeyPressed, false);


  slo = new Slo(new World(), ctx);
  slo.render();
  window.requestAnimationFrame(rajzol);
}

function rajzol() {
  var cv = document.getElementById('canvas');
  var ctx = cv.getContext("2d");
  ctx.fillStyle= ctx.createPattern(hatter, 'repeat');
  ctx.rect(0, 0, 1280, 720);
  ctx.fill();
  slo.render();
  window.requestAnimationFrame(rajzol);
}

function Slo(env, context) {
  this.x = 20;
  this.y = 20;
  this.magassag = 100;
  this.szelesseg = 100;
  this.hp = 100;
  this.world = env;
  const ctx = context;

  this.render = function() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.magassag, this.szelesseg);

  }

}

function World() {
  this.entitik = new Array();
  this.miVanADobozba = new function() {
    return new Array();
  }
}

function checkKeyPressed(e) {
  console.log(e.keyCode);

  //    w 87
  //    a 65
  //    s 83
  //    d 68
  var xSpeed = 7;
  var ySpeed = 3;
  switch (e.keyCode) {
    case 87:
      if (slo.y + ySpeed > 0)
        slo.y = slo.y - ySpeed;
      break;
    case 83:
      if (slo.y - ySpeed < 720)
        slo.y = slo.y + ySpeed;
      break;
    case 68:
      //if(slo.X+xSpeed>0)
      slo.x = slo.x + xSpeed;
      break;
    case 65:
      if (slo.x - xSpeed < 1280)
        slo.x = slo.x - xSpeed;
      break;
    default:

  }
}

function torol(ctx) {
  ctx.fillStyle = "red";
  ctx.rect(0, 0, 1280, 720);
  ctx.fill();
}
