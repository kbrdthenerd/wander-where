class Note {
    constructor(scene) {
        this.scene = scene
        this.note = scene.add.image(scene.cameras.main.width /2, scene.cameras.main.height/2, 'note')
        this.note.setAlpha(0)
        this.text = scene.add.text(scene.cameras.main.width / 2 - 300, scene.cameras.main.height / 2 - 100, 'You travel to London and meet the love of your life\n\nPress space or click to play again', { fontSize: '24px', fill: '#ffd42a' })
        this.text.setFontFamily('font1')
        this.text.setAlpha(0)
        this.note.depth = 1
        this.text.depth = 2
    }

    update() {
        this.note.setAlpha(this.note.alpha + 0.01)
        this.text.setAlpha(this.text.alpha + 0.01)
        if (this.scene.key.isDown || this.scene.input.activePointer.isDown) {
            this.note.destroy()
            this.text.destroy()
            this.scene.note = null
            this.scene.scene.restart()
        }
    }
}
