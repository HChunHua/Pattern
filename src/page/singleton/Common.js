import React from 'react';

export default class Common extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            is_type: 0,
            is_loading: 0
        }

        this.contru = this.contru.bind(this);
    }

    contru(val = 1){
        console.log(val,'val')
    }

    changVal(val = 0){
        this.setState({
            is_type: val
        },()=>{
            console.log(this.state.val,'val')
        })
    }
}