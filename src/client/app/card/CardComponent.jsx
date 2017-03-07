import React from 'react';

let lessLoader = require("!style-loader!css-loader!less-loader!./card.less");

class CardComponent extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {likesCount : 0};
  //   this.onLike = this.onLike.bind(this);
  // }
  //
  // onLike () {
  //   let newLikesCount = this.state.likesCount + 1;
  //   this.setState({likesCount: newLikesCount});
  // }
  //
  render() {
    return (
      <div>
        <div><button>Like</button></div>
      </div>
    );
  }

}

export default CardComponent;
