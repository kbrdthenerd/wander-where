class Player {
    constructor(scene) {
        this.scene = scene
        scene.key = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.kayak = this.scene.physics.add.image(700,280, 'kayak')
        this.kayak.setScale(0.25, 0.25)
    }

    update() {
        if(this.kayak.x < 700) {
            this.kayak.x+=0.5
        }
        if (this.kayak.x > 390 && this.scene.key.isDown) {
            this.kayak.x-=2
        }
    }

}
