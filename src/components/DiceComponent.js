import {Component} from 'react';

class Dice extends Component {

    render() {
        return(
            <div className="dice">{this.props.number}</div>
        );
    }
}

export default Dice;