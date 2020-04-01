import React from 'react';
import './Game.css'


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sque: Array(9).fill(null),
      count: 0,
      player: 'O',
      countWinO: 0,
      countWinX: 0
    };
    this.winLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 4, 2],
      [8, 4, 0],

    ]
  };


  afteWiner(rezplay) {
    console.log(rezplay)
  };


  testWin = (player) => {

    for (let i = 0; i < this.winLine.length; i++) {
      let winLine = this.winLine[i];
      if (this.state.sque[winLine[0]] === player &&
        this.state.sque[winLine[1]] === player &&
        this.state.sque[winLine[2]] === player) {
        //есть победилтель
        alert(`Win ${player}`);

        setTimeout(() => {
          this.setState({
            sque: Array(9).fill(null),
            count: 0
          });
        }, 3000);

        let rezPlay = { 'wLine': winLine, 'Wplayer': player };
        this.afteWiner(rezPlay);
        return 'win';
      }
    };

    if (this.state.sque.indexOf(null) === -1) {
      alert(`Ничья`);
      setTimeout(() => {
        this.setState({
          sque: Array(9).fill(null),
          count: 0
        });
      }, 3000);
    }
  };



  clickHandl = (e) => {
    let data = e.target.getAttribute('data');
    let curentSque = this.state.sque;

    let player = '';

    if (this.state.count % 2 === 0) {
      player = 'O'
      this.setState({ player: 'X' })
    } else {
      player = 'X'
      this.setState({ player: 'O' })
    }

    //let player = this.state.count % 2 === 0 ? 'O' : 'X';
    // this.setState({ player: player })

    if (!curentSque[data]) {
      curentSque[data] = player;
      // curentSque[data] = data
      this.setState({ count: this.state.count + 1 });
      this.setState({ sque: curentSque });
    }
    else {
      alert('Но Но Но!')
    };
    this.testWin(player);
  };

  render() {

    return (
      <div>
        <div className="game-wind">
          <h2 className='count-win'>Счет О <br /> <hr /> {this.state.countWinO}</h2>
          <div className='game-bourd'>
            <div className="game-sque" onClick={this.clickHandl} data='0'>{this.state.sque[0]}</div>
            <div className="game-sque" onClick={this.clickHandl} data='1'>{this.state.sque[1]}</div>
            <div className="game-sque" onClick={this.clickHandl} data='2'>{this.state.sque[2]}</div>
            <div className="game-sque" onClick={this.clickHandl} data='3'>{this.state.sque[3]}</div>
            <div className="game-sque" onClick={this.clickHandl} data='4'>{this.state.sque[4]}</div>
            <div className="game-sque" onClick={this.clickHandl} data='5'>{this.state.sque[5]}</div>
            <div className="game-sque" onClick={this.clickHandl} data='6'>{this.state.sque[6]}</div>
            <div className="game-sque" onClick={this.clickHandl} data='7'>{this.state.sque[7]}</div>
            <div className="game-sque" onClick={this.clickHandl} data='8'>{this.state.sque[8]}</div>
          </div>
          <h2 className='count-win'>Счет X <br /> <hr />{this.state.countWinX}</h2>
        </div>
        <h3>Сейчас ходит {this.state.player}</h3>
      </div>
    )
  }
}
export default Game