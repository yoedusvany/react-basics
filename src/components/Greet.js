import React from 'react';

/*function Greet(props) {
    return (
        <div>
            <h1>Hello Yoe</h1>       
        </div>
    );
}*/

const Greet = props => {
    const {name, heroName} = props
    
    return (
        <div>
            <h1>Hello {name} {heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet;