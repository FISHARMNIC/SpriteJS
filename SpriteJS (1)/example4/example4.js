QuickCenterCanvas(500, 50)

NewSprite("background", "circle", "black", 500)

NewSprite("ship", "image", "", 40)
SpriteSource("ship", "/example4/spaceship.png")
SetSprite("ship", 0, -200)

function dist(x1, y1, x2, y2) {
  var deltaX = x1 - x2
  var deltaY = y1 - y2
  var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
  return (dist)
}

var laser_cid_start = 1
var laser_cid = 0

var enemy_lstart = 1
var enemy_laser = 0

var invader_cid = 0
var invaders_x = -250
var invaders_y = 250
var invader_speed = 3

for (y = 0; y < 3; y++) {
  for (x = 0; x < 7; x++) {
    NewSprite(`invader${invader_cid}`, "image", "", 35)
    SpriteSource(`invader${invader_cid}`, "/example4/invader.png")
    SetSprite(`invader${invader_cid}`, (x * 50) - 250, (-y * 50) + 250)
    invader_cid += 1
  }
}


var space_wasdown = false
function main() {

  if (observers["ArrowLeft"]) {
    MoveSprite("ship", -5, 0)
  } else if (observers["ArrowRight"]) {
    MoveSprite("ship", 5, 0)
  } if (observers[" "] && !space_wasdown) {
    space_wasdown = true
    NewSprite(`laser${laser_cid}`, "image", "", 10)
    SpriteSource(`laser${laser_cid}`, "/example4/laser.png")
    SetSprite(`laser${laser_cid}`, sprites["ship"]["x"] + 15, sprites["ship"]["y"])
    laser_cid += 1
  } else if (!(observers[" "])) {
    space_wasdown = false
  }

  for (i = 0; i < invader_cid; i++) {
    try {
      if (invaders_x > 3000) {

        invader_speed += 0.3
        invader_speed = -1 * invader_speed

        for (n = 0; n < invader_cid; n++) {
          MoveSprite(`invader${n}`,0,-10)
        }

        do {
          MoveSprite(`invader${i}`, invader_speed,0)
          invaders_x += invader_speed
        } while (invaders_x > 3000)

      } else if (invaders_x < -250) {

        invader_speed -= 0.3
        invader_speed = -1 * invader_speed

        for (n = 0; n < invader_cid; n++) {
          MoveSprite(`invader${n}`,0,-10)
        }
        

        do {
          MoveSprite(`invader${i}`, invader_speed,0)
          invaders_x += invader_speed
        } while (invaders_x < -250)

      } else {
        MoveSprite(`invader${i}`, invader_speed, 0)
        invaders_x += invader_speed
      }
    } catch {
      console.log("bob")
    }


    for (r = laser_cid_start; r < laser_cid; r++) {
      if ((`laser${r}` in sprites) && (`invader${i}` in sprites)) {
        if (dist(sprites[`laser${r}`]["x"], sprites[`laser${r}`]["y"], sprites[`invader${i}`]["x"], sprites[`invader${i}`]["y"]) < 50) {
          DeleteSprite(`invader${i}`)
          DeleteSprite(`laser${r}`)
        } else {
          //document.write()
        }
      }
    }

  }


  for (i = laser_cid_start - 1; i < laser_cid; i++) {
    console.log(i)
    try {
      MoveSprite(`laser${i}`, 0, 10)
      if (GetSpriteY[`laser${i}`] >= 250) {
        DeleteSprite(`laser${i}`)
        laser_cid_start += 1
      }
    } catch {
      console.log("bob")
    }
  }

}