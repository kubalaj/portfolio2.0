import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

var lessLoader = require("!style-loader!css-loader!less-loader!./main.less");
var FontAwesome = require('react-fontawesome');


class App extends React.Component {
  render () {
    return (
      <div>
        <h1>JP Kubala</h1>
        <p>Adventurer</p>
        <FontAwesome name='bath' />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
