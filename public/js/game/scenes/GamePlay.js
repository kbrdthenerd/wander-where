class GamePlay extends Phaser.Scene {
    constructor() {
        super({key: 'GamePlay',
        physics: {
          default: 'arcade',
          arcade: {
            debug: false,
          }
      },
      active: true})
    }

    preload() {
        this.load.multiatlas('wave', 'assets/wave.json', 'assets')
        this.load.image('kayak', 'assets/kayak.png')
        this.load.image('thought', 'assets/thought.png')
        this.load.image('oar', 'assets/oar.png')
    }

    create() {
        this.waves = new Waves(this)
        this.player = new Player(this)
        this.thoughts = new Thoughts(this)
        this.timedEvent = this.time.addEvent({ delay: 0, callback: this.addThought, callbackScope: this, repeat: 0});﻿﻿

    }

    update() {
        this.player.update()
        this.thoughts.update()
    }

    addThought() {
        this.thoughts.add()
        this.timedEvent.reset({ delay: Phaser.Math.Between(500,1000), callback: this.addThought, callbackScope: this, repeat: 1});
    }
}
