import React from 'react';

export default class Person extends React.Component {
    constructor(props){
        super( props );
        this.state = {
            test: 1
        }
    }

    render(){
        return (
            <div>
                <span>person</span>
            </div>
        )
    }

}