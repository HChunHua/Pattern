import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render() {
      return (
        <div className="App">
          设计模式
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
