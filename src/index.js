import React from 'react';
import ReactDOM from 'react-dom';
import Children from './page/singleton/Children.js';

export default class App extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            list: {
                name: "hch",
                email: "159187"
            }
        }
        this.test = this.test.bind(this);
    }

    test(val = 1,params={}){
        console.log(val,'val')
        console.log(params,'params')
        if(params){
            const data = Object.assign({},this.state.list,{name: val})
            this.setState({
                list: data
            },()=>{
                console.log(this.state.list,'lst')
            })
        }
    }

    render() {
        const params = this.state.list
        return (
            <div className="App">
                设计模式
                <Children 
                    data={this.state.list} 
                    test={params => this.test(val=1,params)}
                />
            </div>
        );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
