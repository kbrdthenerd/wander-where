class Scores extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loveDestroyed: 1,
            hateDestroyed: 1
        }
    }

    componentDidMount() {
        this.socket = io();
        var self = this
        this.socket.on('globalBallonUpdate', function (love_destroyed, hate_destroyed) {
            self.setState({
                loveDestroyed: love_destroyed,
                hateDestroyed: hate_destroyed
            })
        });
    }

    render() {
        const total = this.state.loveDestroyed + this.state.hateDestroyed
        const percentHate = this.state.hateDestroyed / total
        const percentLove = this.state.loveDestroyed / total
      return (
        <div id='scores'>
            <h3>Love Destroyed:</h3>
            <h4> {Math.round(percentLove * 10000)/100}</h4>
            <div id='hate'>
                <h3>Hate Destroyed:</h3>
                <h4>{Math.round(percentHate * 10000)/100}</h4>
            </div>
        </div>
      )
    }
}
