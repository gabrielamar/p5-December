// Gabriela Martín 
// A polygon is created at random and every vertex is affected by
//two forces:
// Gravity and
// Wind towards the opposite corner of the canvas of the one the mouse 
// is pressed. 

// Each vertex is a particle:
function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;

// Forces of gravity and wind are applied by mean of this function:
  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

// Position, velocity and acceleration of each vertex
//are modified according to the force applied.
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

// Display the updated vertex.
  this.display = function() {
    fill(255, 150);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 12, 12);
  }

// Avoid the particles to go outside the canvas.
  this.edges = function() {
    if (this.pos.y > (height*0.95)) {
      this.vel.y *= -1;
      this.pos.y = (height*0.95);
    }

    if (this.pos.y < 0) {
      this.vel.y *= -1;
      this.pos.y = 0;
    }

    if (this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0;
    }
    
    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }
}
