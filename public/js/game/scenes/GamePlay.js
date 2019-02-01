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
        this.load.audio('music', "assets/havenly.wav");
        this.load.multiatlas('wave', 'assets/wave.json', 'assets')
        this.load.image('kayak', 'assets/kayak.png')
        this.load.image('thought', 'assets/thought.png')
        this.load.image('oar', 'assets/oar.png')
        this.load.image('note', 'assets/note.png');
        this.load.image('glow', 'assets/glow.png');
    }

    create() {
        this.startMusic()

        this.waves = new Waves(this)
        this.player = new Player(this)
        this.thoughts = new Thoughts(this)
        this.glow = new Glow(this)
        this.timedEvent = this.time.addEvent({ delay: 0, callback: this.addThought, callbackScope: this, repeat: 0});﻿
    }

    update() {
        this.player.update()
        this.thoughts.update()
        this.glow.update()
        if(this.note) {
            this.note.update()
        }
    }

    addThought() {
        this.thoughts.add()
        this.timedEvent.reset({ delay: Phaser.Math.Between(500,1000), callback: this.addThought, callbackScope: this, repeat: 1});
    }

    startMusic() {
        var music = this.sound.add('music', {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        });
        music.play()
    }
}
