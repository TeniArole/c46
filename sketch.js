var bgImage, bg
var score
score = 0;
var pinkPrincessImage, pinkPrincess
var purplePrincessImage, purplePrincess
var pinkCandyImage, pinkCandy
var purpleCandyImage, purpleCandy
var mixedCandyImage, mixedCandy
var lemonImage, lemon
var pinkGroup, purpleGroup, mixedGroup, lemonGroup


function preload(){
    bgImage=loadImage("images/flower background.jpg")
    pinkCandyImage=loadImage("images/candy1.png")
    purpleCandyImage=loadImage("images/candy2.png")
    mixedCandyImage=loadImage("images/candy3.png")
    pinkPrincessImage=loadImage("images/princess pink copy.png")
    purplePrincessImage=loadImage("images/princess purple copy.png")

}

function setup(){
    createCanvas(displayWidth, displayHeight)
	bg=createSprite(10, 10, displayWidth, displayHeight)
    bg.addImage(bgImage)
	bg.scale = 4

    //pink princess
    pinkPrincess=createSprite(displayWidth/2, displayHeight - 200, 30, 30)
    pinkPrincess.addImage(pinkPrincessImage)
    pinkPrincess.scale= 1.2
    
    //purple princess
    purplePrincess=createSprite(50, 50, 30, 30)
    purplePrincess.addImage(purplePrincessImage)
    purplePrincess.scale= 1.3
    
    //groups
    pinkGroup = new Group()
    purpleGroup = new Group()
    mixedGroup = new Group()
    lemonGroup = new Group()

}

function draw(){
	//background("red")
	if(keyDown(UP_ARROW)){
		pinkPrincess.velocityY = -3
	}

	if(keyDown(LEFT_ARROW)){
		pinkPrincess.velocityX = -3
	}
	
	if(keyDown(RIGHT_ARROW)){
		pinkPrincess.velocityX = 3
	}

	if(pinkPrincess.isTouching(pinkGroup)){
		pinkGroup.destroyEach();
		score = score + 1;
	}
	textSize(30);
	fill("black")
	text("Score: " + score, displayHeight - 30, 40)
	
	
	pinkCandies();
	purpleCandies();
	mixedCandies();
	lemons();
	drawSprites();

}
console.log(frameCount)

function pinkCandies(){
    if(World.frameCount%30===0){
    pinkCandy=createSprite(Math.round(random(40, 100)), 
	Math.round(random(60, 100)), 20, 20)
    pinkCandy.addImage(pinkCandyImage)
    pinkCandy.scale = 0.1
   // pinkCandy.velocityY = -3;
    pinkGroup.add(pinkCandy)

    }
}

function purpleCandies(){
    if(World.frameCount%30===0){
    purpleCandy=createSprite(Math.round(random(10, 100)), 30, 20, 20)
    purpleCandy.addImage(purpleCandyImage)
    purpleCandy.scale = 0.1
   // purpleCandy.velocityY = -3;
    purpleGroup.add(purpleCandy)
    }
}

function mixedCandies (){
    if(World.frameCount%50===0){
    mixedCandy=createSprite((Math.round(random(10, 100))), 30, 20, 20)
    mixedCandy.addImage(mixedCandyImage)
    mixedCandy.scale = 0.1
   // mixedCandy.velocityY = -3;
    mixedGroup.add(mixedCandy)

    }
}

function lemons(){
    if(World.frameCount%30===0){
    lemon=createSprite(Math.round(random(10, 100)), 30, 20, 20)
    lemon.addImage(lemonImage)
    lemon.scale = 0.1
   // lemon.velocityY = -3;
    lemonGroup.add(lemon)
    }
}