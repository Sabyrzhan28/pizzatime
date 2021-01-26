import React from 'react';
import ClassNames from 'classnames';
import propTypes from 'prop-types';

const Button = ({onClick, className, outline, children})=>{    
    return ( 
        <button 
        onClick={onClick}
        className={ClassNames('button', className, {
            'button--outline': outline
        })}>
            {children}
        </button>
            );
};



// function Button(props) {
//     console.log(props)
//         return <button className={ClassNames('button',{
//             'button--outline': props.outline
//         })}>{props.children}</button>;
// }

Button.propTypes = {
    onClick: propTypes.func,
}

export default Button;