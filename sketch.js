var Imgfundo
var jerry, jerryImg1, jerryImg2, jerryImg3;
var tom, tomImg1, tomImg2, tomImg3;

function preload() {
    jerryFeliz = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryQueijo = loadAnimation("images/mouse1.png");
    jerrySurpreso = loadAnimation("images/mouse4.png");

    tomAndando = loadAnimation("images/cat2.png","images/cat3.png");
    tomSentadao = loadAnimation("images/cat1.png");
    tomFinal = loadAnimation("images/cat4.png");

    Imgfundo = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    jerry = createSprite(100,700,50,50);
    jerry.addAnimation("jerrystill", jerryQueijo)
    jerry.scale = 0.1

    tom = createSprite(800,700,50,50);
    tom.addAnimation("tomwalk", tomSentadao)
    tom.scale = 0.1
}

function draw() {
    background(Imgfundo);
    
    if(isTouching(jerry,tom)){
        tom.velocityX = 0;
        tom.addAnimation("tomdboa", tomFinal);
        tom.changeAnimation("tomdboa");

        jerry.addAnimation("jerrycurioso", jerrySurpreso);
        jerry.changeAnimation("jerrycurioso");
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        jerry.addAnimation("jerryprovocando", jerryFeliz);
        jerry.changeAnimation("jerryprovocando");
        jerry.frameDelay = 25;
        
        tom.addAnimation("tompasando", tomAndando);
        tom.changeAnimation("tompasando");

        tom.velocityX = -5;
    }


}
