class Waves {
    constructor(scene) {
        this.scene = scene
        this.group = scene.physics.add.group()

        var frameNames = [{ key:'wave', frame:'wave1.png' },
                        { key:'wave', frame:'wave2.png' },
                        { key:'wave', frame:'wave3.png' },
                        { key:'wave', frame:'wave4.png' },
                        { key:'wave', frame:'wave5.png' },
                        { key:'wave', frame:'wave6.png' },
                        { key:'wave', frame:'wave7.png' },
                        { key:'wave', frame:'wave8.png' },
                        { key:'wave', frame:'wave9.png' },
                        { key:'wave', frame:'wave10.png' },
                        { key:'wave', frame:'wave11.png' },
                        { key:'wave', frame:'wave12.png' }]

        this.scene.anims.create({ key: 'waving', frames: frameNames, frameRate: 7, repeat: -1 })

        this.add(450,260,0xffffff)
        this.add(500,300,0x1A3578)
        this.add(380,290,0x7E91C1)
        this.add(580,280,0x1A3578)
        this.add(660,290,0x7E91C1)
        this.add(385,265,0x1A3578)
        this.add(395,284,0x1A3578)
        this.add(740,268,0xB1A9BE)
        this.add(700,275,0xB1A9BE)
        this.add(400,289,0xB1A9BE)
    }

    add(x,y,tint) {
        var wave = this.scene.add.sprite(x, y, 'wave', 'wave1.png');
        wave.setScale(0.25, 0.3)
        wave.setTint(tint)
        wave.anims.play('waving')
        this.group.add(wave)
    }

    update() {
    }
}
