import React from 'react';
import ReactDOM from 'react-dom';
import Children from './page/singleton/Children.js';

export default class App extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            list: {
                // val: 0,
                name: "hch",
                email: "159187"
            }
        }
        this.test = this.test.bind(this);
        this.detail = this.detail.bind(this);
    }

    detail(){
        console.log("000")
    }

    test(val = 1,params={}){

        if(params){
            this.setState({
                list: {
                    val,
                    ...params
                }
            },()=>{
                console.log(this.state.list,'lst')
            })
        }
    }

    render() {
        return (
            <div className="App">
                设计模式
                <Children 
                    data={this.state.list} 
                    test={params => this.test(1,params)}
                    params={this.state.list}
                    detail={this.detail}
                />
            </div>
        );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
