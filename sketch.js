const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

function preload(){

}

function setup(){
    createCanvas(1200,600);

    engine=Engine.create();
    world=engine.world;

    ground=new Ground(600,580,1200,20);
    base1=new Ground(600, 520, 250, 15);
    base2=new Ground(1000, 420, 250, 15);


    // -----------------------------------for Base 1 (a)---------------------

    block1a=new Block(500,497,30,30);
    block2a=new Block(540,497,30,30);
    block3a=new Block(580,497,30,30);
    block4a=new Block(620,497,30,30);
    block5a=new Block(660,497,30,30);
    block6a=new Block(700,497,30,30);

    block7a=new Block(520,466,30,30);
    block8a=new Block(560,466,30,30);
    block9a=new Block(600,466,30,30);
    block10a=new Block(640,466,30,30);
    block11a=new Block(680,466,30,30);

    block12a=new Block(540,436,30,30);
    block13a=new Block(580,436,30,30);
    block14a=new Block(620,436,30,30);
    block15a=new Block(660,436,30,30);

    block16a=new Block(560,406,30,30);
    block17a=new Block(600,406,30,30);
    block18a=new Block(640,406,30,30);

    block19a=new Block(580,375,30,30);
    block20a=new Block(620,375,30,30);

    block21a=new Block(600,345,30,30);


    // ----------------------------------------For base 2 (b)--------------------------

    block1b=new Block(900,397,30,30);
    block2b=new Block(940,397,30,30);
    block3b=new Block(980,397,30,30);
    block4b=new Block(1020,397,30,30);
    block5b=new Block(1060,397,30,30);
    block6b=new Block(1100,397,30,30);

    block7b=new Block(920,366,30,30);
    block8b=new Block(960,366,30,30);
    block9b=new Block(1000,366,30,30);
    block10b=new Block(1040,366,30,30);
    block11b=new Block(1080,366,30,30);

    block12b=new Block(940,336,30,30);
    block13b=new Block(980,336,30,30);
    block14b=new Block(1020,336,30,30);
    block15b=new Block(1060,336,30,30);

    block16b=new Block(960,306,30,30);
    block17b=new Block(1000,306,30,30);
    block18b=new Block(1040,306,30,30);

    block19b=new Block(980,275,30,30);
    block20b=new Block(1020,275,30,30);

    block21b=new Block(1000,245,30,30);

    Engine.run(engine);
}

function draw(){
    background(220);

    Engine.update(engine);

    ground.display();

    base1.display();
    base2.display();


    block1a.display();
    block2a.display();
    block3a.display();
    block4a.display();
    block5a.display();
    block6a.display();
    
    block7a.display();
    block8a.display();
    block9a.display();
    block10a.display();
    block11a.display();

    block12a.display();
    block13a.display();
    block14a.display();
    block15a.display();

    block16a.display();
    block17a.display();
    block18a.display();

    block19a.display();
    block20a.display();

    block21a.display();



    block1b.display();
    block2b.display();
    block3b.display();
    block4b.display();
    block5b.display();
    block6b.display();
    
    block7b.display();
    block8b.display();
    block9b.display();
    block10b.display();
    block11b.display();

    block12b.display();
    block13b.display();
    block14b.display();
    block15b.display();

    block16b.display();
    block17b.display();
    block18b.display();

    block19b.display();
    block20b.display();

    block21b.display();

    textSize(30);
    text("Draw the hexagonal stone and release it, to launch it towards blocks", 100,100);
}