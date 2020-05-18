import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('BUTTON CLICKED');
        
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}


export default FunctionClick