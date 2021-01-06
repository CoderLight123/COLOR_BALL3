
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var score;

function preload(){}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
    world = engine.world;
    score = 0;
 

	rock=new Stone(200,400,20);

	slingshot = new launcher(rock.body,{x:200, y:400});

    ground=new Ground(width/2,600,width+500,30);
    ground1=new Ground(400+205,270+200,240,10);
    ground2=new Ground(1100,500-200,240,10);

    //Create the Bodies Here.
    
    box1= new Box(530,435,30,40);
    box2= new Box(560,435,30,40);
    box3= new Box(590,435,30,40);
    box4= new Box(620,435,30,40);
    box5= new Box(650,435,30,40);
    box6= new Box(680,435,30,40);

    box7= new Box(560,395,30,40);
    box8= new Box(590,395,30,40);
    box9= new Box(620,395,30,40);//
    box10= new Box(650,395,30,40);
   // https://github.com/rupinwhitehatjr/BC3991CBA64BCFEF8B645947BC001124
    box11= new Box(590,355,30,40);
    box12= new Box(620,355,30,40);
    
    box13= new Box(605,315,30,40);
    
    box14= new Box(530+500,435-200,30,40);
    box15= new Box(560+500,435-200,30,40);
    box16= new Box(590+500,435-200,30,40);
    box17= new Box(620+500,435-200,30,40);
    box18= new Box(650+500,435-200,30,40);
    box19= new Box(680+500,435-200,30,40);

    box20= new Box(560+500,395-200,30,40);
    box21= new Box(590+500,395-200,30,40);
    box22= new Box(620+500,395-200,30,40);
    box23= new Box(650+500,395-200,30,40);

    box24= new Box(590+500,355-200,30,40);
    box25= new Box(620+500,355-200,30,40);

    box26= new Box(605+500,315-200,30,40);
  


    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  drawSprites();

  fill("yellow")
  textSize(15)
  text("score : "+score,740,40);


  ground.display();
  ground1.display();
  ground2.display();

  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();

  rock.display();
 
}


function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){

        Matter.Body.setPosition(rock.body, {x:200, y:400})
        slingshot.attach(rock.body);
    }
}


