namespace SpriteKind {
    export const gravityhit = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    Next_level()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Stop_play)) {
        if (Gravity_direction == 90) {
            Player_face.setImage(img`
                . 2 2 1 1 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.vy = -50
        } else if (Gravity_direction == 270) {
            Player_face.setImage(img`
                . 2 2 1 1 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.vy = -50
        }
    }
})
function Startupsound () {
    music.playTone(622, music.beat(BeatFraction.Triplet))
    music.playTone(523, music.beat(BeatFraction.Triplet))
    music.playTone(554, music.beat(BeatFraction.Triplet))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Double))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    Next_level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Gravity_direction == 0) {
        if (Player_face.isHittingTile(CollisionDirection.Top)) {
            Player_face.vy = 90.5
        }
    } else if (Gravity_direction == 90) {
        if (Player_face.isHittingTile(CollisionDirection.Right)) {
            Player_face.vx = -90.5
        }
    } else if (Gravity_direction == 180) {
        if (Player_face.isHittingTile(CollisionDirection.Bottom)) {
            Player_face.vy = -90.5
        }
    } else if (Gravity_direction == 270) {
        if (Player_face.isHittingTile(CollisionDirection.Left)) {
            Player_face.vx = 90.5
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    Stop_walk(Gravity_direction)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Stop_play)) {
        if (Gravity_direction == 0) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                1 2 1 1 2 2 2 2 
                1 2 1 1 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.vx = -50
        } else if (Gravity_direction == 180) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                1 2 1 1 2 2 2 2 
                1 2 1 1 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.vx = -50
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Stop_walk(Gravity_direction)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    Stop_walk(Gravity_direction)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    game.over(false)
})
function Next_level () {
    Lavelup += 1
    Reset()
    Uplavel(Lavelup)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    Next_level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Stop_play)) {
        if (Gravity_direction == 0) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 1 1 2 1 
                2 2 2 2 1 1 2 1 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.vx = 50
        } else if (Gravity_direction == 180) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 1 1 2 1 
                2 2 2 2 1 1 2 1 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.vx = 50
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    Next_level()
})
scene.onOverlapTile(SpriteKind.gravityhit, assets.tile`myTile4`, function (sprite, location) {
    if (!(Gravity_direction == 180)) {
        if (Player_face.isHittingTile(CollisionDirection.Bottom)) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 1 1 2 2 1 1 2 
                2 1 1 2 2 1 1 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.ax = 0
            Player_face.ay = 250
            Stop()
            Stop_play = true
            Gravity_direction = 180
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    Stop_walk(Gravity_direction)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.gravityhit, assets.tile`myTile3`, function (sprite, location) {
    if (!(Gravity_direction == 270)) {
        if (Player_face.isHittingTile(CollisionDirection.Left)) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 1 1 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 1 1 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.ax = -250
            Player_face.ay = 0
            Stop()
            Stop_play = true
            Gravity_direction = 270
        }
    }
})
scene.onOverlapTile(SpriteKind.gravityhit, assets.tile`myTile6`, function (sprite, location) {
    if (!(Gravity_direction == 0)) {
        if (Player_face.isHittingTile(CollisionDirection.Top)) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 1 1 2 2 1 1 2 
                2 1 1 2 2 1 1 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.ax = 0
            Player_face.ay = -250
            Stop()
            Stop_play = true
            Gravity_direction = 0
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Stop_play)) {
        if (Gravity_direction == 90) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 1 1 2 2 . 
                `)
            Player_face.vy = 50
        } else if (Gravity_direction == 270) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 1 1 2 2 . 
                `)
            Player_face.vy = 50
        }
    }
})
function Uplavel (Level: number) {
    if (Level == 0) {
        tiles.loadMap(tiles.createSmallMap(tilemap`level1`))
    } else if (Level == 1) {
        tiles.loadMap(tiles.createSmallMap(tilemap`level5`))
    } else if (Level == 2) {
        tiles.loadMap(tiles.createSmallMap(tilemap`level7`))
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(Player_face, assets.tile`myTile1`)
}
function Stop_walk (Dir: number) {
    if (Dir == 0) {
        Player_face.vx = 0
    } else if (Dir == 90) {
        Player_face.vy = 0
    } else if (Dir == 180) {
        Player_face.vx = 0
    } else if (Dir == 270) {
        Player_face.vy = 0
    }
    Stop_play = false
}
function Reset () {
    Player_face.setImage(img`
        . 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 1 1 2 2 1 1 2 
        2 1 1 2 2 1 1 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 . 
        `)
    Player_face.ax = 0
    Player_face.ay = 250
    Stop()
    Stop_play = true
    Gravity_direction = 180
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.gravityhit, assets.tile`myTile5`, function (sprite, location) {
    if (!(Gravity_direction == 90)) {
        if (Player_face.isHittingTile(CollisionDirection.Right)) {
            Player_face.setImage(img`
                . 2 2 2 2 2 2 . 
                2 2 2 1 1 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 
                2 2 2 1 1 2 2 2 
                2 2 2 1 1 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            Player_face.ax = 250
            Player_face.ay = 0
            Stop()
            Stop_play = true
            Gravity_direction = 90
        }
    }
})
function Stop () {
    Player_face.vx = 0
    Player_face.vy = 0
}
let Lavelup = 0
let Stop_play = false
let Gravity_direction = 0
let Player_face: Sprite = null
scene.setBackgroundImage(img`
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddd222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddd2222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddddddd222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddd22221122222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddddd2222212112222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddd222222122211222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddd222222122222112222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddd22222221222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddd22222221222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddd22222221222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddd22222222122222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddd22222222222222222222222ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddd22222222222222222222222dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddd22222222222222222222222ddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddd22222222222222222222222dddddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddd22222222222222222222222ddddd2ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddd222222222222222222222ddddddd2ddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddd222222222222222222222ddddddd2dddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddddd2222222222222222222ddddddddd2dddd22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddd22222222222222222ddddddddddd2ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddddddd222222222222222ddddd2ddddddd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddd2222222222222ddddddd2ddddddd2ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddd222222222dddddddddd2dddddd2dddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddd2ddddddd2dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd2ddddddd2dddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddd2dddd2ddddddd2dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddd2dddddddd2dddd2ddddddd2ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddddddddddddddddddd2ddddddd2ddddd2dddddd2dddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddd2ddddddd2dddd2ddddddd2dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffddddddddddddddddddddddddddddddd2ddddddd2dddd2ddddddd2ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddd2ddddddd2dddd2ddddddd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddd2dddddd2ddddd2dddddd2dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddd2ddddddd2ddddd2dddddd2dddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddd2ddddddd2dddd2ddddddd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddd2ddddddd2dddd2dddddd2dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddd2dddddd2ddddd2dddddd2dddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2ddddd2dddddd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dddd2dddddd2dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dddd2dddddd2ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2ddddd2dddddd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dddd2dddddd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dddd2dddddd2ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dddd2dddddd2ddddd22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dddd2dddddd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2ddddd2dddddd2dddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dddd2dddddd2dddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddddd2ddddd2ddddd2dddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dddd2ddddd2ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddd22dddd22ddddd2dddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddd2ddddd2dddddd2dddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddd2ddddd2dddddd2dddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddd2dddd2ddddddd2dddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222111112222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222211111111122222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222211111111122222222222222222222222222222211122211122222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111222221112222222222222222222222222222211122211122222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111222221112222222222222222222222222222211122211122222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111222222222222222222222222222222222222222222211122222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111222222222112211122111111112111222111211121111111211122211122ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111221111112111111121111111112111222111211121111111211122211122ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111221111112111122221112221112111222111211121111111211122211122ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111222221112111222221112221112211121112211122211122221112111222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111222221112111222221112221112211121112211122211122221112111222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222211111111122111222221112221112221111122211122211122222111112222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222211111111122111222221111111111121111122211122211122222111112222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222111112222111222222111111111122111222211122211122222211122222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222222222222222222222222222222222222222222222222222111122222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111111111112122222222221222222222222222222222222222221111222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111111111112111222112211122111222222222222222222222211112222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111111111112122121211221221221222222222222222222222211122222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222221112122121122221221221222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222221112111222111221222111122222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222221112222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222221112111221112112111121111221111111222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222221112111221112111111111111121111111122222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222221112111221112111221112211121112211122222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222221112111221112111221112211121112211122222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222221112111221112111221112211121112211122222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222211122111221112111221112211121112211122222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222211122111221112111221112211121112211122222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222111122111221112111221112211121112211122222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222221111222111221112111221112211121112211122222222222222222222f1fff1fffffffffffff1fffffff11ffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222111111222111221112111221112211121112211122222222222222222222f1fff1ffffffffffff11ffffff1ff1ffff1ff1ffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111111112222111111112111221112211121111111122222222222222222222f1fff1ff11ff1f11fff1ffffff1ff1ffff1ff1ffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111111222222211111112111221112211121111111222222222222222222222ff1f1ff1f11f11fffff1ffffff1ff1ffff1ff1ffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222111222222222222222222222222222222221112222222222222222222222222ff1f1ff11fff1ff11ff1fff11f1ff1f11f1ff1ffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222222222222222222222222222222221112222222222222222222222222fff1ffff111f1ff11ff1fff11ff11ff11ff11fffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222222222222222222222222222222221112222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    22222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22
    `)
pause(1000)
Startupsound()
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
scene.setBackgroundColor(13)
Player_face = sprites.create(img`
    . 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 1 1 2 2 1 1 2 
    2 1 1 2 2 1 1 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 . 
    `, SpriteKind.Player)
let Gravity_hit = sprites.create(img`
    . 1 1 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 1 
    1 1 . . . . . . 1 1 
    1 1 . . . . . . 1 1 
    1 1 . . . . . . 1 1 
    1 1 . . . . . . 1 1 
    1 1 . . . . . . 1 1 
    1 1 . . . . . . 1 1 
    1 1 1 1 1 1 1 1 1 1 
    . 1 1 1 1 1 1 1 1 . 
    `, SpriteKind.gravityhit)
Gravity_direction = 180
Gravity_hit.setFlag(SpriteFlag.GhostThroughWalls, true)
Gravity_hit.setFlag(SpriteFlag.Invisible, true)
Player_face.ay = 250
Stop_play = false
Lavelup = 0
Uplavel(Lavelup)
game.onUpdate(function () {
    Gravity_hit.setPosition(Player_face.x, Player_face.y)
})
