class Background extends Phaser.Scene {
    constructor() {
        super({key: 'Background', active: true})
    }

    preload() {
        this.load.image('background', 'assets/background.png');
    }

    create() {
        this.width = 1530 / 2
        this.height = 1146 / 2
        this.background = this.add.image(this.width / 2, this.height / 2, 'background');
        this.background.setDisplaySize(this.width, this.height)
    }
}
