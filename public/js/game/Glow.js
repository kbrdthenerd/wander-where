class Glow {
    constructor(scene) {
        this.scene = scene
        this.glow = this.scene.physics.add.sprite(225,this.scene.cameras.main.height/2 - 10, 'glow')
        this.glow.setDisplaySize(350 , 350)
        this.glow.setAlpha(0)


    }

    update() {
        if(this.scene.thoughts.hasEnoughThoughts() && !this.scene.thoughts.areEqual()) {
            this.glow.setAlpha(0.75)
            if(this.scene.thoughts.mostThoughts() == 'away') {
                this.glow.setTint(0xffd42a)
            } else {
                this.glow.setTint(0xffffff)
            }
        } else {
            this.glow.setAlpha(0)
        }
    }

}
