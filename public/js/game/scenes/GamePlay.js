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
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.waves = new Waves(this)
        this.player = new Player(this)
    }

    update() {
        this.player.update()
    }
}
