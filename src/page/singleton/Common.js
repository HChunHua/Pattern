import React from 'react';

export default class Common extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            is_type: 0
        }
    }

    render(){
        return (
            <div>
                <span>common</span>
            </div>
        )
    }
}