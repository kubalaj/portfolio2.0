import React from 'react';
import {render} from 'react-dom';
import CardComponent from './card/CardComponent.jsx';
import MenuComponent from './menu/MenuComponent.jsx';
import classie from './thirdParty/classie';
import main from './thirdParty/main';
import masonry from './thirdParty/masonry.pkgd.min';
var Modernizr = require('./thirdParty/modernizr-custom');
import imagesloaded from './thirdParty/imagesloaded.pkgd.min';


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
