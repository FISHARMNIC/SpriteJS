CanvasUpdateType = "autorender" //set render updater
CanvasSpeed = 100 //set render speed
csize = 500
CanvasCenter = [csize/2,csize/2] // set the center of the canvas
CanvasLocationType = "invertedY" //change the movement type
CreateCanvas(csize, csize) // create the CanvasCenter

NewSprite("worm","circle","orange",10)
NewSprite("food","circle","red",15)

var wormsize = 1
var wormspeed = 15 
var directions = [[wormspeed,0],[0,wormspeed],[-1*wormspeed,0],[0,-1*wormspeed]]
var direction = 0

var cid = 0
var direction_value

var food_location
var food_counter
movefood()
//delete clone after clonespeed seconds

function movefood() {
  food_location = [(Math.floor(Math.random() * Math.floor(csize)))-(csize/2), (Math.floor(Math.random() * Math.floor(csize)))-(csize/2)]
}

function dist (x1, y1, x2, y2) {
  var deltaX = x1-x2
  var deltaY = y1-y2
  var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
  return (dist)
}

function main() {

  direction_value = directions[direction]

  MoveSprite("worm",direction_value[0],direction_value[1])

  SetSprite("food",food_location[0],food_location[1])

  NewSprite(`worm${cid}`, "circle", "orange","10")
  SetSprite(`worm${cid}`,sprites["worm"]["x"],sprites["worm"]["y"])

  if (dist(sprites["worm"]["x"],sprites["worm"]["y"],sprites["food"]["x"],sprites["food"]["y"]) <= 16) {
    movefood()
    wormsize += 1
  }

  for (i = 0; i < (cid-wormsize); i++) {
    DeleteSprite(`worm${i}`)
  }

  if (observers["ArrowRight"]) {
    direction = 0
  } else if (observers["ArrowUp"]) {
    direction = 1
  } else if (observers["ArrowLeft"]) {
    direction = 2
  } else if (observers["ArrowDown"]) {
    direction = 3
  }

  cid += 1
}
