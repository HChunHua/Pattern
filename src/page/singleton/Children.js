import React from 'react';
import Common from './Common';

export default class Children extends Common {
    constructor( props ){
        super( props );
    }
    componentDidMount(){
        console.log("componentDidMount")
        console.log(this.state.is_type,'type')
    }

    // componentDidUpdate(newProps,nextProps){
    //     console.log(newProps,'newProps')
    //     console.log(componentDidUpdate,'componentDidUpdate')
    // }

    render(){
        return (
            <div>
                <span>Children</span>
            </div>
        )
    }
} 