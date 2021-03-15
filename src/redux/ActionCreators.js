import * as ActionTypes from './ActionTypes';
import Dice from '../components/DiceComponent';

export const rollDice = (num) => ({
    type: ActionTypes.ROLL_DICE,
    value: num,
    dice: <Dice number={num} />
});

export const clearDice = () => ({
    type: ActionTypes.CLEAR_DICE
});