scene.onOverlapTile(SpriteKind.Player, assets.tile`collectible norm`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.score() == 4) {
        teleportcolectable.destroy()
        info.changeScoreBy(1)
    }
})
let teleportcolectable: Sprite = null
scene.setBackgroundImage(assets.image`FOG`)
let mySprite = sprites.create(assets.image`main character`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 19))
scene.cameraFollowSprite(mySprite)
teleportcolectable = sprites.create(assets.image`sprit colect tele`, SpriteKind.Food)
tiles.setTileAt(tiles.getTileLocation(17, 3), assets.tile`collectible norm`)
tiles.setTileAt(tiles.getTileLocation(17, 3), assets.tile`collectible norm`)
forever(function () {
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level 2`)
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level1`)
})
forever(function () {
    if (randint(1, 4) == 1) {
        tiles.placeOnTile(teleportcolectable, tiles.getTileLocation(6, 5))
    } else if (randint(1, 4) == 2) {
        tiles.placeOnTile(teleportcolectable, tiles.getTileLocation(14, 10))
    } else if (randint(1, 4) == 3) {
        tiles.placeOnTile(teleportcolectable, tiles.getTileLocation(11, 4))
    } else if (randint(1, 4) == 4) {
        tiles.placeOnTile(teleportcolectable, tiles.getTileLocation(19, 7))
    }
    pause(5000)
})
game.onUpdateInterval(200, function () {
    if (info.score() == 5) {
        game.over(true, effects.confetti)
    }
})
