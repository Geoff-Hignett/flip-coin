import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class Flipper extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      {
        side: 'tails',
        imgSrc: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      flips: 0,
      heads: 0,
      tails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  coinFlip() {
    const newCoin = choice(this.props.coins);
    this.setState(prevState => {
      return {
        currCoin: newCoin,
        flips: prevState.flips + 1,
        heads: prevState.heads + (newCoin.side === 'heads' ? 1 : 0),
        tails: prevState.tails + (newCoin.side === 'tails' ? 1 : 0)
      };
    });
  }

  handleClick(e) {
    this.coinFlip();
  }
  render() {
    return (
      <div className="Flipper">
        <h1>Lets flip a coin!</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>FLIP ME</button>
        <p>
          Out of {this.state.flips} flips, there have been {this.state.heads}{' '}
          heads and {this.state.tails} tails.
        </p>
      </div>
    );
  }
}

export default Flipper;
