import React from 'react';
import Common from './Common';

export default class Children extends Common {
    constructor( props ){
        super( props );

        this.test = this.test.bind(this);
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentDidUpdate(newProps,nextProps){
        console.log(newProps,'newProps')
        console.log('componentDidUpdate')
    }

    test(){
        const val = 2;
        this.props.test({
            ...this.props.params,
            val,
            name: "ch"
        })
    }

    render(){
        return (
            <div>
                <div onClick={this.props.detail}>test</div>
                <div onClick={this.test}>Children</div>
            </div>
        )
    }
} 