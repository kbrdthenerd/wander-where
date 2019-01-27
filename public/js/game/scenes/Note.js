class Note extends Phaser.Scene {
    constructor() {
        super({key: 'Note'})
    }

    preload() {
        this.load.image('note', 'assets/note.png');
    }

    create() {
        this.width = this.cameras.main.width
        this.height = this.cameras.main.height
        this.note = this.add.image(this.width / 2, this.height / 2, 'note');
        this.note.setAlpha(0)
        this.text = this.add.text(this.width / 2 - 300, this.height / 2 - 100, 'You travel to London and meet the love of your life\n\nPress space or click to play again', { fontSize: '24px', fill: '#ffd42a' })
        this.text.setFontFamily('font1');
        this.text.setAlpha(0)
    }

    update() {
        this.note.setAlpha(this.note.alpha + 0.01)
        this.text.setAlpha(this.text.alpha + 0.01)
    }
}
