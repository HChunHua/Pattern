import React from 'react';

export default class Person extends React.Component {
    
    constructor( props ){
        super( props );
        
        this.constr = this.constr.bind(this);
    }
    
    constr(){
        console.log("00")
    }

    render(){
        return (
            <div>
                <span>person</span>
            </div>
        )
    }

}