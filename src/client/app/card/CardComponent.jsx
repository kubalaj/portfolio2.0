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
			<div className="grid">
				<div className="grid__item" data-size="1280x1280">
					<a href="img/original/7.jpg" className="img-wrap"><img src="img/thumbs/7.jpg" alt="img07" />
						<div className="description description--grid">
							<h3>Silent Killer</h3>
							<p>Cows’ milk protein may be the single most significant chemical carcinogen to which humans are exposed. <em>&mdash; T. Colin Campbell</em></p>
							<div className="details">
								<ul>
								</ul>
							</div>
						</div>
					</a>
        </div>
			</div>
    );
  }

}

export default CardComponent;
