/**
 * Created by Adam on 6/16/2016.
 */

var trees= [];
var img;
function preload() {
  img = loadImage("images/andy.png");
}
function setup() {


  createCanvas(800, 600);
  console.log("ok");
  stroke(19, 59, 28);
  fill(0);
  trees.push(new BinaryTree(createVector(0,0), 5, map(mouseX, 0, width, 0, TWO_PI), 75));
}

function draw() {

  translate(width / 2, height / 2);

  background(200, 200, 30);

  trees[0].setAngle(map(frameCount*2, 0, width, 0, 2 * PI));

  trees[0].display();
  push();
  angleMode(DEGREES);
  rotate(180);
  trees[0].display();
  angleMode(RADIANS);
  pop();
  // angleMode(RADIANS);
  // var v1 = p5.Vector.add(createVector(width / 2, height / 2), p5.Vector.fromAngle(map(mouseX, 0, width, 0, 2 * PI)).setMag(20));
  //
  // line(width / 2, height / 2, v1.x, v1.y);

}
function BinaryTree(loc, height, angle, size, parent) {

  this.parent = parent || null;
  if (height > 0) {
    this.children = [];
  } else {
    this.children = null;
  }
  this.x = loc.x || 0;
  this.y = loc.y || 0;
  this.loc = loc || createVector(0, 0);
  this.height = height;
  this.angle = angle;
  this.size = size || 100;
  if (height > 0) {

    this.children[0] = new BinaryTree(p5.Vector.fromAngle(angle).setMag(size), height - 1, angle, size, this);
    this.children[1] = new BinaryTree(p5.Vector.fromAngle(-angle).setMag(size), height - 1, -angle, size, this);
  }
  this.display = function () {
    push();
    translate(this.x, this.y);
    if (this.children != null) {
      for (var i = 0, len = this.children.length; i < len; i++) {

        line(0, 0, this.children[i].x, this.children[i].y);
        this.children[i].display();
      }
    }
    // ellipse(0, 0, 5, 5);
    image(img, -25, -25, 50, 50);
    pop();
  };
  this.setAngle = function (newAngle, changeOnlyThisAngle) {
    if (this.children != null && this.children.length !== 0) {
      this.children[0].angle = newAngle;
      this.children[0].setLoc(p5.Vector.fromAngle(newAngle).setMag(this.size));
      this.children[1].angle = -newAngle;
      this.children[1].setLoc(p5.Vector.fromAngle(-newAngle).setMag(this.size));
      if (!changeOnlyThisAngle) {
        this.children[0].setAngle(newAngle - TWO_PI/6, false);
        this.children[1].setAngle((newAngle - TWO_PI/6), false);
      }
    }
  };
  this.setLoc = function (newLoc) {
    this.loc = newLoc;
    this.x = newLoc.x;
    this.y = newLoc.y;
  };
}
function signedNoise() {
  return noise.apply(this, arguments) - 0.5;
}

function Vine(segments) {

  this.segs = [];

  for (var i = 0; i < segments; i++) {

  }
}
function VineSeg(x, y) {
  //expects final arguments to be child vinesegs
  this.x = x || null;
  this.y = y || null;
  this.children = [];
  if (arguments.length > 2) {
    if (typeof arguments[2] === 'function') {

    }
    else {
      for (var i = 2, len = arguments.length; i < len; i++) {
        children.push(arguments[i]);
      }
    }
  }

}
function VineNode(a, b) {
  this.next = [];
}
function VineNode(vec) {
  VineNode(vec.x, vec.y);
}
