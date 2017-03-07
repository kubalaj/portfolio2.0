import React from 'react';
import {render} from 'react-dom';
import CardComponent from './CardComponent.jsx';
import MenuComponent from './MenuComponent.jsx';


let lessLoader = require("!style-loader!css-loader!less-loader!./main.less");
let FontAwesome = require('react-fontawesome');


// <!--<FontAwesome name='bath' />-->
class App extends React.Component {
  render () {
    return (
      <div>
        <MenuComponent />
        <CardComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
