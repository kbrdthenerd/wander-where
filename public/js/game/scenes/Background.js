class Background extends Phaser.Scene {
    constructor() {
        super({key: 'Background', active: true})
    }

    preload() {
        this.load.image('background', 'assets/background.png');
    }

    create() {
        this.width = this.cameras.main.width
        this.height = this.cameras.main.height
        this.background = this.add.image(this.width / 2, this.height / 2, 'background');
        this.background.setDisplaySize(this.width, this.height)
    }
}
