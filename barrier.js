var w = window.innerWidth;
var h = window.innerHeight;
var barrier = new barrier();
var barrierW = 120;
var barrierH = 40;

    function barrier() {
      this.x = w;
      this.y = 0;
      this.gravity = -0.9; //the force of gravity
      this.lift = -10; //opposing the force of gravity
      this.velocity = 0; //velocity of player
      
      this.show = function() {
        fill(color('white'));
        rect(this.x,this.y,barrierW,barrierH);
      }

      
      this.update = function() {
        this.velocity += this.gravity; //gravity applied when not jumping
        this.x += this.velocity;
        this.velocity *= 0.8; //air resistance
       
       if (this.x < 0) {
         this.x = w;
         this.y = w;
         this.y = random(h);
         this.gravity = random(2,5)
         barrierH = random(50,100)
         barrierW = random(50,200)
       }
      }
    } //object ends here
    
 
