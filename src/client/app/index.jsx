import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

require("!style-loader!css-loader!less-loader!./main.less");


class App extends React.Component {
  render () {
    return (
      <div>
        <h1>JP Kubala</h1>
        <p>Adventurer</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
