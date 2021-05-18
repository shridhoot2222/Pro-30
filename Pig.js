class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblility=255;
  }

 display(){
   if(this.body.speed<2.5){
  console.log(this.body.speed);

  super.display();

   }
   else{
     World.remove(world,this.body);
    push();
     this.Visiblility=this.Visiblility-5;
     tint(255,this.Visiblility);
     image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop ();
   }

 }



};