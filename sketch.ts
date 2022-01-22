/// <reference path="node_modules/@types/p5/global.d.ts" />


var x = 0;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0);
  rect(x, 40, 50, 50);
  x++;
}