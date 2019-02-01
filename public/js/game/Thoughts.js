class Thoughts {
    constructor(scene) {
        this.scene = scene
        this.group = scene.physics.add.group()
        this.thoughtsCollected = {
            away: 0,
            home: 0
        }

        this.scene.physics.add.overlap(this.scene.player.kayak, this.group, this.think, null, scene);

        this.thoughtText = {
            away: scene.add.text(140, 0, 'No thoughts of away ', { fontSize: '32px', fill: '#ffd42a' }),
            home: scene.add.text(120, this.scene.cameras.main.height - 50, 'No thoughts of home ', { fontSize: '32px', fill: '#ffffff' })
        }
        this.thoughtText.away.setFontFamily('font1');
        this.thoughtText.home.setFontFamily('font1');

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
            this.createThought(Phaser.Math.Between(gameWidth / 2.2, gameWidth - 120), -10, 0xffd42a, 'away')
        } else {
            this.createThought(Phaser.Math.Between(gameWidth / 2.2, gameWidth - 120), this.scene.cameras.main.height + 10, 0xffffff, 'home')
        }
    }

    think(player, thought) {
        this.thoughts.thoughtsCollected[thought.type]++
        var thoughtsOfType = this.thoughts.thoughtsCollected[thought.type]
        var grammarStuff = thoughtsOfType > 1 ? 'thoughts' : 'thought'

        this.thoughts.thoughtText[thought.type].setText(`${thoughtsOfType} ${grammarStuff} of ${thought.type}`)
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

    mostThoughts() {
        if(this.thoughtsCollected.away > this.thoughtsCollected.home) {
            return 'away'
        } else {
            return 'home'
        }
    }

    hasEnoughThoughts() {
        return this.thoughtsCollected.away + this.thoughtsCollected.home >= 10
    }

    areEqual() {
        return this.thoughtsCollected.away == this.thoughtsCollected.home
    }
}
