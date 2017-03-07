import React from 'react';

class MenuComponent extends React.Component {

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
          <h1>JP Kubala</h1>
          <p>Adventurer</p>
        </div>
    );
  }

}

export default MenuComponent;
