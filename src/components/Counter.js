import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, color, increment,
    onDecrement, onSetColor }) => {
    return (
        <div
            className="Counter"
            onClick={increment}
            onContextMenu={(e) => {
                e.preventDefault();
                onDecrement();
            }}
            onDoubleClick={onSetColor}
            style={{ backgroundColor: color }}>
            {number}
        </div>
    );
};
Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    increment: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};
Counter.defaultProps = {
    number: 0,
    color: 'blue',
    increment: () => console.warn('increment not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};
export default Counter;