class App extends React.Component {
  render() {
    return (
    <div id='contents'>
        <Game />
    </div> )
  }
}

const element = <App />;
ReactDOM.render(element, document.getElementById('root'));
