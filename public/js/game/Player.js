class Player {
    constructor(scene) {
        this.scene = scene
        scene.key = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.kayak = this.scene.physics.add.sprite(this.scene.cameras.main.width - 60,this.scene.cameras.main.height/2 - 10, 'kayak')
        var width = 436 / 4
        var height = 115 / 4
        this.kayak.setSize(width, height)
        this.kayak.setDisplaySize(width , height)
    }

    update() {
        if(this.kayak.x < this.scene.cameras.main.width - 60) {
            this.kayak.x+=0.5
        }
        if (this.kayak.x > this.scene.cameras.main.width/3.5 && (this.scene.key.isDown || this.scene.input.activePointer.isDown)) {
            this.kayak.x-=2
        }
    }

}
