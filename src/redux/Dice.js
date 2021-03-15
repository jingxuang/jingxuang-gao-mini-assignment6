import * as ActionTypes from './ActionTypes';


/*
    Format the diceList:
    [
        [Dice1, Dice2, Dice3, Dice4, Dice5],
        [Dice1, Dice2, Dice3, .. ]
        [ ... ]
        .
        .
        .
    ]
*/
const formatList = (state, dice) => {
    var list = state.diceList;

    if( state.numOfDices % 5 === 0 ) {
        list.push([ dice ]);
    } else {
        list[list.length - 1].push(dice);
    }
    return list;
}


export const Dices = (state = {
    sum: 0,
    numOfDices: 0,
    diceList: []
}, action) => {

    switch(action.type) {
        case ActionTypes.ROLL_DICE:
            return {
                sum: state.sum + action.value,
                numOfDices: state.numOfDices + 1,
                diceList: formatList(state, action.dice)
            };
        case ActionTypes.CLEAR_DICE:
            return {
                sum: 0,
                numOfDices: 0,
                diceList: []
            };
        default:
            return state;
    }
} 