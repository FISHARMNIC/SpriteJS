# SpriteJS
#### A weirdly-made browserJS 2d game library!
---

###### Setting up Your Canvas

|| CanvasUpdateType = type ||

- DESCRIPTION: Set the type of updater
- type: the type of updater, either "autorender" or "keypress"
- autorender: calculates + renders automatically after a certain interval, see CanvasSpeed
- keypress: calulates + renders every keypress

|| CanvasSpeed = milliseconds ||

- DESCRIPTION: How often the code is ran and re-rendered in autorender mode
- milliseconds: the time inbetween renders

|| CanvasCenter = [x,y] ||

- DESCRIPTION: Sets the center of the canvas to the given position
- x: the x position of the center
- y: the y position of the center
- EXAMPLE: CanvasCenter = [100,100]
- EXPLANATION: On a (200,200) canvas, the center of the canvas is now (0,0), not (100,100)

|| CanvasLocationType = type ||

- DECRIPTION: sets the type of location definition
- type: the type of definer, either "normal", "invertedX", or "invertedY"
EXPLANATION: invertedY makes y+10 go up instead of down, like on normal canvas

|| CreateCanvas(width,height)

- DESCRIPTION: Creates the canvas, must be done AFTER all other parameters above are set
- width: the width of the canvas
- height: the height of the canvas

|| QuickCenterCanvas(size,speed) ||

- DESCRIPTION: Quickly sets up and creates the canvas with center = 0,0, invertedY settings, and autorender
- size: the size of the canvas as a square
- speed: the autorender speed

###### Creating + Editing Sprites

|| NewSprite(name,color,size) ||

- DESCRIPTION: Creates a new sprite
- name: the name of the sprite
- OPTIONAL color: the color of the sprite ("red", "green", etc.)
- default: black
- OPTIONAL size: the size of the sprite
- default: 20
- EXAMPLE: NewSprite("bar","red",30)

|| SpriteSource(name,source) ||

- DESCRIPTION: Sets the sprites source or value
- name: the name of the sprite
- source: the source for the sprite
- EXAMPLE: SpriteSource("bob", "/images/chichken.png")
- EXAMPLE: SpriteSource("jon", "Hello world!")
- EXPLANATION: the first example prepares bob's image, the second sets jon's text
- NOTE: does not set the sprite type; See SpriteType for info 

|| SpriteType(name,type) ||

- DECRIPTION: Sets the type of the sprite
- name: the name of the sprite
- type: the type to be set to, must be "circle","image", or "text"
- NOTE: the sprites value (if text or image its the source or text) must be set with
SpriteSource()

|| SetSprite(name,x,y) ||

- DESCRIPTION: Set the position of a sprite
- name: the name of the sprite
- x: the x position that the sprite will go to
- y: the y position that the sprite will go to

|| MoveSprite(name,x,y) ||

- DESCRIPTION: Relativley moves the sprite
- name: the name of the sprite
- x: the x value that the sprite will change by
- y: the y value that the sprite will change by

|| SpriteColor(name,color) ||

- DESCRIPTION: Sets the sprites color
- color: the color that the sprite will be set to
- EXPLANATION: color must be in format "red" or "blue" etc.

|| SpriteSize(name,size) ||

- DESCRIPTION: Sets the spirtes size
- name: the name of the sprite
- size: the size that the sprite will be set to

|| DeleteSprite(name) ||

- DESCRIPTION: deletes the sprite
- name: the name of the sprite

###### Pulling Sprite's Values + Getters

- sprites[name]["x"]: get the sprites x
- sprites[name]["y"]: get the sprites y
- sprites[name]["color"]: get the sprites color
- sprites[name]["size"]: get the sprites size
- observers[.key]: boolean if the key is pressed, see <a href="https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/">this</a> for help

###### Running Your Code
  
- function main(): Where looped code that runs once and waits depending on CanvasUpdateTime

###### Tips and tricks

- cloning is not yet added, but you can do something like:

canvas setup... 

var cid = 0

Newsprite("dummy","circle")

function main() {
  Newsprite(\`dummy${cid}\`,"circle")
  cid += 1
}

###### Example Code With Comments

CanvasUpdateType = "autorender"  // set render updater
CanvasSpeed = 100                // set render speed
CanvasCenter = [100,100]         // set the center of the canvas
CanvasLocationType = "invertedY" // change the movement type

CreateCanvas(200, 200) // create the canvas

NewSprite("bob")            // make a new sprite
NewSprite("bar", "red", 10) // make another new sprite, this time with color red and size 10

SetSprite("bob",0,0)   // set the sprites location
SetSprite("bar",0,-50)

function main() { // where the looping code is ran

  if (observers["ArrowRight"]) { //see if keys are pressed, if so move bob accordingly
    MoveSprite("bob",10,0)
  } if (observers["ArrowLeft"]) {
    MoveSprite("bob",-10,0)
  } if (observers["ArrowUp"]) {
    MoveSprite("bob",0,10)
  } if (observers["ArrowDown"]) {
    MoveSprite("bob",0,-10)
  }

  if (sprites["bar"]["x"] < 100) { // as long as our sprite bar is still in the area, move to the right
    MoveSprite("bar",5,0)
  } else {
    SetSprite("bar",-100,-50)
  }

}
