// Code Keypad Component Here
// <input type="password" /> to capture input

// render an input with the right type.
// add an event handler that listens for the change event on that input
// print out the text 'Entering password...' when that event fires

import React from 'react'

function Keypad (){

    function handleClick() {
        console.log("Entering password...")
    }

    return (
        <input type='password' onChange={handleClick} />
    )
}

export default Keypad;