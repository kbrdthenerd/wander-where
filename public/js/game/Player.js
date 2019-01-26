class Player {
    constructor(scene) {
        this.scene = scene
        scene.key = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.buildKayak()
        this.buildOar()

    }

    buildKayak() {
        this.kayak = this.scene.physics.add.sprite(this.scene.cameras.main.width - 60,this.scene.cameras.main.height/2 - 10, 'kayak')
        var kayakWidth = 436 / 4
        var kayakHeight = 115 / 4
        this.kayak.setSize(kayakWidth, kayakHeight)
        this.kayak.setDisplaySize(kayakWidth , kayakHeight)
    }

    buildOar() {
        this.oar = this.scene.physics.add.sprite(this.scene.cameras.main.width - 59,this.scene.cameras.main.height/2 - 32, 'oar')
        this.oar.setDisplaySize(20, 100)
        this.oar.setSize(20, 100)
        this.oar.setOrigin(0.5,0.5)
    }

    update() {
        this.updateKayak()
        this.updateOar()
    }

    updateKayak() {
        if(this.kayak.x < this.scene.cameras.main.width - 60) {
            this.kayak.x+=0.5
            this.oar.x+=0.5

        }
        if (this.kayak.x > this.scene.cameras.main.width/3.5 && (this.scene.key.isDown || this.scene.input.activePointer.isDown)) {
            this.kayak.x-=2
            this.oar.x-=2
        } else {
            this.oar.rotation = 0
        }
    }

    updateOar() {


    }

}
