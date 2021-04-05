class Block{
    constructor(x, y, width, height) {
        var options = {
        
          restitution :0.4,
          friction :0.0,
          //isStatic:true
        }
        
        //body defined
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //adding sprite to World
        World.add(world, this.body);
      }
       display(){
      if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      }
    }

