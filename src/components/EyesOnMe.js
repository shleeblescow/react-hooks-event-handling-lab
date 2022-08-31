// Code EyesOnMe Component Here


// In that component, render a button with the text 'Eyes on me'.
// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
// import React from 'react'

function EyesOnMe() {
    
    function handleFocus() {
        console.log("Good!")
    }

    function handleBlur() {
        console.log("Hey! Eyes on me!")
    }
    
    return(
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe