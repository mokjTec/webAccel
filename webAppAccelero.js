let xV = 50;
let vend = true;
let canvas;
let g = 20; let d = 10;
let tAxis = "ikke vendt";
let maxAccel = 0;
let minusMaxAccel = 0;

function setup() {
  canvas = createCanvas(400, 600);
  background(0, 0, 200);
  canvas.mousePressed(changeGray);
  canvas.elt.style.border = '3px solid black';
  //canvas.keyPressed(changeViaKey);
  textSize(20);
}

function draw() {
  if (vend == true && xV > 65)
    vend = false;
  else if (vend == false && xV < 50)
    vend = true;
  if (vend == true)
    xV++;
  else
    xV--;
  background(100 + xV, 50, 50);
  ellipse(200, 200, xV, xV);

  fill(50,50,100);
  if(accelerationX > 0.4)
    d++;
  else if( accelerationX < -0.4)
    d--;
  ellipse(50, 50, d, d);
  fill(0);
  text(accelerationX, 50, 350);
  text(tAxis, 50, 400);
  text(maxAccel, 50, 425);
  text(minusMaxAccel, 50, 455);
  if(accelerationX > maxAccel)
    maxAccel = accelerationX;
  if(accelerationX < minusMaxAccel)
    minusMaxAccel = accelerationX;
}

// this function fires with any click anywhere
function mousePressed() {
  //d = d + 10;
}

function deviceTurned() {
  tAxis = turnAxis;
}
function keyPressed() {
  // tilføj p til dom-træet
  let p = createP('ny paragraf tilføjet main-elementet');
  p.style('font-size', '22px');
  p.position(50, 10);
  p.style('position', 'relative');
  // lav skriftstørrelse om på html-element med id overskrift
  // let a = select('#overskrift');
  // a.style('font-size', '42px');
  // tilføj border til element via klasse-navn
  // let b = select('.lilleOverskrift');
  // b.style('font-size', '42px');
  // b.style('border', '5px solid');
  // føj p til en div oven over canvas i main
  // standard-js til at fange element
  let c = document.getElementById('beholder');
  if (c != undefined) {
    console.log(c);
    let para = document.createElement("p");
    let node = document.createTextNode("paragraf føjet til div via vanilla js");
    para.appendChild(node);
    c.appendChild(para);
  }
  // fjerner de elementer, som er tilføjet via p5-funktioner
  if (key === 'r')
    removeElements();
  // fjerner alle html-elementer undtagen canvas
  else if (key === 'z') {
    let elems = document.body.getElementsByTagName("*");
    elems.forEach(element => {
      if (element.id != 'defaultCanvas0')
        element.remove();
    });
  }
}

// this function fires only when cnv is clicked
function changeGray() {
  g = random(0, 255);
  // p5-select til at fange element, bemærk brugen af elt
  let minDiv = select('#beholder');
  if (minDiv != null) {
    console.log(minDiv.elt);
    // føjer den til main-elementet direkte
    let para2 = createElement('h1', "ny h1 via p5js-select");
    // men føjer den så til minDiv - via .elt
    minDiv.elt.appendChild(para2.elt);
    // stilisering af paragraffen, også muligt efter tilføjelsen
    para2.style('color', '#00a1d3');
  }
}

function changeViaKey() {
  d = d + 100;
}
