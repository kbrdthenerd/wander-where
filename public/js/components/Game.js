var game;

class Game extends React.Component {
    componentDidMount() {
        var smallestDimension = Math.min(window.innerWidth, window.innerHeight)
        var config = {
          type: Phaser.AUTO,
          parent: 'phaser-game',
          width: 2224 / 2.5,
          height: 1668 / 2.5,
          backgroundColor: 0x000000,
          scene: [Background, GamePlay, Note]
        };

        game = new Phaser.Game(config);
        var hasLogged = false
    }

    render() {
      return (
          <div id='game'>
        <section id='phaser-game'>
            <script src="js/game/scenes/Background.js"></script>
            <script src="js/game/scenes/GamePlay.js"></script>
        </section>
        </div>
      )
    }
}
