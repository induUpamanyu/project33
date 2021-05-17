const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle;
var particles = [particle];

var divisions = [];
var divisionHeight = 300;

var plinkos = [];
var line;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
   createCanvas(1350, 600);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }
  
}
 

function draw() {
   background("red");
   Engine.update(engine);

   text("Score : "+score,20,30);
   textSize(20);
   text(" 100 ", 5, 550);
   text(" 100 ", 80, 550);
   text(" 100 ", 160, 550);
   text(" 200 ", 240, 550);
   text(" 200 ", 320, 550);
   text(" 200 ", 400, 550);
   text(" 300 ", 480, 550);
   text(" 300 ", 560, 550);
   text(" 300 ", 640, 550);
   text(" 400 ", 720, 550);
   text(" 400 ", 800, 550);
   text(" 400 ", 880, 550);
   text(" 500 ", 960, 550);
   text(" 500 ", 1040, 550);
   text(" 500 ", 1120, 550);
   text(" 600 ", 1200, 550);
   text(" 600 ", 1280, 550);

   ground.display();

   if ( gameState =="END") {
     background("red");
     fill("black");
     textSize(100);
     text("Game Over", 200, 400);
   
    } 

   for(var k = 0; k < plinkos.length; k++) {
     plinkos[k].display();
    }

   if(particle!=null)
   {
     particle.display();
    
     if (particle.body.position.y>700)
     {
       if (particle.body.position.x < 300) 
       {
         score=score+500;      
         particle=null;
         if ( count>= 5) gameState ="END";                          
        }

       else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
       {
         score = score + 100;
         particle=null;
         if ( count>= 5) gameState ="END";
        }

        else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
        {
          score = score + 200;
          particle=null;
          if ( count>= 5)  gameState ="END";
        }      
          
      }
    }

   for (var i = 0; i < divisions.length; i++) {
     divisions[i].display();
   }

   drawSprites();

}

function mousePressed() {
   if(gameState !== "END") {
     count++;
     particle = new Particle(mouseX, 50, 10, 10);
    }
}
