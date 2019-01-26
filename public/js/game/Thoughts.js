class Thoughts {
    constructor(scene) {
        this.scene = scene
        this.group = scene.physics.add.group()

        this.scene.physics.add.overlap(this.scene.player.kayak, this.group, this.think, null, scene);

    }

    update() {
        Phaser.Actions.Call(this.group.getChildren(), function(thought) {
            if(thought.type == 'away') {
                thought.y++
            } else {
                thought.y--
            }
        })
    }

    add() {
        var gameWidth = this.scene.cameras.main.width
        if(Phaser.Math.Between(0,1)) {
            this.createThought(Phaser.Math.Between(gameWidth / 2.2, gameWidth - 120), -10, 0x00ff00, 'away')
        } else {
            this.createThought(Phaser.Math.Between(gameWidth / 2.2, gameWidth - 120), this.scene.cameras.main.height + 10, 0x0000ff, 'home')
        }
    }

    think(player, thought) {
        thought.destroy()
    }

    createThought(x,y,tint,type) {

        var thought = this.scene.add.sprite(x, y, 'thought');
        var width = 105 / 10
        var height = 105 / 10
        thought.setSize(width, height)
        thought.setDisplaySize(width , height)
        thought.setTint(tint)
        thought.type = type
        this.group.add(thought)
    }
}
