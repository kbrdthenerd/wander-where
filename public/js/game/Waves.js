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
        var gameWidth = this.scene.cameras.main.width
        var xMin = gameWidth / 2
        var xMax = gameWidth - 120
        var yMin = this.scene.cameras.main.height/2 - 30
        var yMax = this.scene.cameras.main.height/2 + 15

        this.add(xMin + 70, yMin,0xffffff)
        this.add(xMin + 175, yMin + 30,0xffffff)
        this.add(xMin + 300, yMin + 15,0xffffff)
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
