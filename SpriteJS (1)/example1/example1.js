CanvasUpdateType = "autorender" //set render updater
CanvasSpeed = 100 //set render speed

CanvasCenter = [100,100] // set the center of the canvas
CanvasLocationType = "invertedY" //change the movement type

CreateCanvas(200, 200) // create the canvas

NewSprite("bob", "circle") // make a new sprite
NewSprite("bar", "circle", "red", "10")

SetSprite("bob",0,0) // set the sprites location
SetSprite("bar",0,-50)

var rainbow = ["red","yellow","green","blue","purple"]
var sizes = [20,22]
var color_flipflop = 1
var size_flipflop = 1

function main() {
  console.log("test")
  if (observers["ArrowRight"]) {
    SetSprite("bob", (sprites["bob"]["x"]) + 10, (sprites["bob"]["y"]))
  } if (observers["ArrowLeft"]) {
    SetSprite("bob", (sprites["bob"]["x"] - 10), (sprites["bob"]["y"]))
  } if (observers["ArrowUp"]) {
    MoveSprite("bob",0,10)
  } if (observers["ArrowDown"]) {
    MoveSprite("bob",0,-10)
  }

  size_flipflop = (size_flipflop + 1) % sizes.length
  SpriteSize("bob",sizes[size_flipflop])

  if (sprites["bar"]["x"] < 100) {
    MoveSprite("bar",5,0)
  } else {
    SetSprite("bar",-100,-50)
  }
  
  color_flipflop = (color_flipflop + 1) % rainbow.length
  SpriteColor("bar",rainbow[color_flipflop])

}
