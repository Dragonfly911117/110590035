import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function App() {
    return (
        <div className="App">
            <Game/>
        </div>
    );
}

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={()=> this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }

}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            nextPlayer : true,
            NextString : 'Next player: ' + "O",
            res : null,
        };
    }
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }



    render() {
        // eslint-disable-next-line no-useless-concat
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            timerKey :false,
            timeIsUp :false,
        };
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = checkGameResult(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
            if (this.state.timeIsUp)
                // alert("dskal")
                status = 'Winner: ' + (this.state.xIsNext ? 'O' : 'X');
            else{
            if (winner) {
                status = 'Winner: ' + winner;
            } else {
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
                <CountdownCircleTimer
                    isPlaying
                    duration={20}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    key={this.state.timerKey}
                    onComplete={()=> {this.handleTimeIsUp();}}
                >
                {({ remainingTime }) => remainingTime + ' seconds left!'}
                </CountdownCircleTimer>
            </div>
        );
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (checkGameResult(squares) || squares[i] || this.state.timeIsUp)  {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            timerKey:!this.state.timerKey,
        });

    }

    handleTimeIsUp() {
        this.setState({
            timeIsUp:true,
        });
        // checkGameResult(this.state.squares);
    }
}
let checkGameResult = (squares)=>{
    // if (this.state.timeIsUp)
    //     return (this.state.nextPlayer === 'O') ?  'X' :  'O';
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default App;
