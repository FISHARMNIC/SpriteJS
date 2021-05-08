CanvasUpdateType = "autorender"
CanvasSpeed = 50
var csize = 500
CanvasCenter = [csize/2,csize/2]
CanvasLocationType = "invertedY"

CreateCanvas(csize, csize)

NewSprite("background","image")
SpriteSource("background", "/example2/hillbg.jpg")

NewSprite("balloon", "image")
SpriteSource("balloon", "/example2/balloon.png")

NewSprite("crosshair", "image")
SpriteSource("crosshair", "/example2/crosshair.png")

NewSprite("popped", "text")
SpriteSource("popped", 0)


SpriteSize("background",csize)
SpriteSize("balloon",80)
SpriteSize("crosshair",70)


SetSprite("background",csize/-2,csize/2)
SetSprite("crosshair",0,0)
var balloon_y
newballoony()
SetSprite("balloon",0,balloon_y)
SetSprite("popped",csize/-2,csize/2-30)

var dart_counter = 0 
var popped_counter = 0
function newballoony() {
  balloon_y = (Math.floor(Math.random() * Math.floor(csize)))-(csize/2)
}

function dist (x1, y1, x2, y2) {
  var deltaX = x1-x2
  var deltaY = y1-y2
  var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
  return (dist)
}

function main() {
  console.log("test")
  if (observers[" "]) {

    NewSprite(`Dart${dart_counter}`, "image")
    SpriteSource(`Dart${dart_counter}`, "/example2/dart.png")
    SetSprite(`Dart${dart_counter}`,sprites["crosshair"]["x"],sprites["crosshair"]["y"])
    SpriteSize(`Dart${dart_counter}`,50)
    dart_counter += 1
    if (dist(sprites["crosshair"]["x"],sprites["crosshair"]["y"],sprites["balloon"]["x"], sprites["balloon"]["y"]) <= 40) {
      newballoony()
      popped_counter += 1
      SpriteSource("popped", popped_counter)
    }
  }


  if (observers["ArrowRight"]) {
    MoveSprite("crosshair",10,0)
  } if (observers["ArrowLeft"]) {
    MoveSprite("crosshair",-10,0)
  } if (observers["ArrowUp"]) {
    MoveSprite("crosshair",0,10)
  } if (observers["ArrowDown"]) {
    MoveSprite("crosshair",0,-10)
  }

  if (sprites["balloon"]["x"] < csize/2) {
  SetSprite("balloon",sprites["balloon"]["x"]+5,balloon_y)
  } else {
    SetSprite("balloon",csize/-2,balloon_y)
  }


}
