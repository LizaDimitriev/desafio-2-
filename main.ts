scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    game.over(false)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . a f a . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f . f f f . f . . . . . . 
    . . . f . f f f . f . . . . . . 
    . . . f . f f f . f . . 7 7 7 . 
    . . . f . f f f . f . . f 7 f . 
    . . . f . f . f . f . . 7 7 7 . 
    . . . . . f . f . . . 7 7 7 7 7 
    . . . . . f . f . . . 7 7 7 7 7 
    . . . . . f . f . . . 7 7 7 7 7 
    . . . . f f . f f . . f f f f f 
    . . . . . . . . . . 7 7 7 f 7 7 
    . . . . . . . . . . 7 7 7 f 7 7 
    `, SpriteKind.Player)
scene.setBackgroundColor(5)
tiles.setTilemap(tiles.createTilemap(hex`10001000020202000305030305080205020203040208080503050505060202050502030402080a0003050205050202020502020402080805030502020502020505020207020505050305020205020202050202030205020203000202050202020505020302050205050505020505020202050500020502030205020201000202020502030205050505050205020502020200020302020205020101050205050505050000020202050303030505050205020202050202020205020202050202050202050503030202080205050501020502050503050502050505020202020200020305030905020202020202050202050202020502050505050505050505050505020202`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles14,sprites.builtin.brick,sprites.castle.shrub,myTiles.tile7,myTiles.tile8,myTiles.tile3,myTiles.tile2], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
