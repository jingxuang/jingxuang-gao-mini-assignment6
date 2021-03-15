import './App.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import {rollDice, clearDice} from './redux/ActionCreators';

const mapStateToProps = state => {
    return {
        sum: state.sum,
        diceList: state.diceList
    }
}

const mapDispatchToProps = dispatch => ({
    rollDice: (num) => {dispatch(rollDice(num))},
    clearDice: () => {dispatch(clearDice())}
});
class App extends Component {

    getRandomNum() {
        return (Math.floor(Math.random() * 6) + 1);
    }

    render() {
        
        const diceRows = this.props.diceList.map((diceRow) => {
            return(
                <div className="diceRow">
                    { diceRow }
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <button onClick={() => this.props.rollDice(this.getRandomNum())}>Roll Dice</button>
                    <button onClick={() => this.props.clearDice()}>Clear Dice</button>
                </div>

                <div className="row">
                    <h1>Sum: {this.props.sum} </h1>
                </div>
                
                { diceRows }
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);