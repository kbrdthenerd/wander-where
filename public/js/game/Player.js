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
        this.anchor = this.scene.physics.add.sprite(-10, -10, 'kayak')
        this.anchor.setDisplaySize(1, 1)
        this.anchor.setSize(1, 1)
    }

    buildOar() {
        this.oar = this.scene.physics.add.sprite(this.scene.cameras.main.width - 59,this.scene.cameras.main.height/2 - 10, 'oar')
        this.oar.setDisplaySize(10, 75)
        this.oar.setSize(10, 75)
        this.oar.setAngularVelocity(-20)
    }

    update() {
        this.updateKayak()
    }

    updateKayak() {
        if(!this.kayak.done) {
            if(this.kayak.x < this.scene.cameras.main.width - 60) {
                this.kayak.x+=0.5
                this.oar.x+=0.5

            }

            var maxDistance = this.scene.cameras.main.width/2
            if(this.scene.thoughts.hasEnoughThoughts() && !this.scene.thoughts.areEqual()) {
                maxDistance = this.scene.cameras.main.width/3.5
            }

            if (this.kayak.x > maxDistance && (this.scene.key.isDown || this.scene.input.activePointer.isDown)) {
                if(this.oar.rotation < -.15) {
                    this.oar.setAngularVelocity(20)
                }

                if(this.oar.rotation > 0.15) {
                    this.oar.setAngularVelocity(-20)
                }

                this.kayak.x-=2
                this.oar.x-=2
            } else {
                this.oar.rotation = 0
            }
        }

        if(!this.kayak.done && this.kayak.x < this.scene.cameras.main.width/3.5) {
            this.kayak.done = true
            this.turnKayak()
        }


        if(Math.abs(this.kayak.rotation) > 1) {
            this.kayak.doneTurning = true
            this.kayak.body.angularVelocity = 0
            this.oar.body.angularVelocity = 0
            if(!this.noteShown) {
                this.scene.physics.moveToObject(this.kayak, this.anchor, 150)
                this.scene.physics.moveToObject(this.oar, this.anchor, 150)
                this.scene.note = new Note(this.scene)
                this.noteShown = true
            }
        } 
    }

    turnKayak() {
        if(this.scene.thoughts.mostThoughts() == 'away' ) {
            this.kayak.body.setAngularVelocity(10)
            this.oar.body.setAngularVelocity(10)
        } else {
            this.anchor.y = 566
            this.kayak.body.setAngularVelocity(-10)
            this.oar.body.setAngularVelocity(-10)
        }
    }

}
