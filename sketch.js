// Gabriela Martín
// A polygon is created at random and every vertex is affected by
//two forces:
// Gravity and
// Wind towards the opposite corner of the canvas of the one the mouse 
// is pressed. 

var particles = [];

// A set of random vertex are created.
function setup() {
  createCanvas(840, 560);
  
  
  for(i=0; i<10; i++){
  var p = new Particle(random(840),random(360),3);
  particles.push(p);
  }

}





function draw() {
  
  
  background(51);
  var wind = createVector(0.3, 0);

  for (var i = 0; i < particles.length; i++) {
    var gravity = createVector(0, 0.1 * particles[i].mass);
    particles[i].applyForce(gravity);

    // Wind is applied only if mouse is pressed
      if (mouseIsPressed) {
        var twind = createVector(0,0) 
        if(mouseX<=width/2){
          if(mouseY<=height/2){var twind = createVector(1,1).setMag(1)}
            else {var twind = createVector(1,-1).setMag(1)}
          
        }
         else {
               if(mouseY<=height/2){var twind = createVector(-1,1).setMag(1)}
               else {var twind = createVector(-1,-1).setMag(1)}
            
          }
          
      particles[i].applyForce(twind);
      
      }

    particles[i].update();
    particles[i].edges();
    particles[i].display();
  }

//Draw lines between vertex

 for( x=0; x<10; x++){  
   for(var i=0; i<10; i++){
     if(i>x){
       stroke(120);
       line(particles[x].pos.x,particles[x].pos.y, 
                 particles[i].pos.x,particles[i].pos.y);
     }
   }
 }
}
