QuickCenterCanvas(200,0.5)
NewSprite("test","image","",200)
SpriteSource("test","/example2/hillbg.jpg")
function main() {
  if (observers["ArrowRight"]) {
    MoveSprite("test",0.1,0)
  }
}