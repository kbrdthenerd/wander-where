var game;

class Game extends React.Component {
    componentDidMount() {
        var config = {
          type: Phaser.AUTO,
          parent: 'phaser-game',
          width: 741,
          height: 556,
          backgroundColor: 0x000000,
          scene: [Background, GamePlay]
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
