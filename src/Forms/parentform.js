import React from 'react';
import Childform from './childform';
class Parentform extends React.Component {
    
    constructor(props){
        super(props)
          this.state={
              namevalue:""

              
          } 
        this.captureInput=this.captureInput.bind(this)
        this.sayHello = this.sayHello.bind(this)
    }

    captureInput(e){
 console.log(e.target.value);
 this.setState({
       nameValue: e.target.value

 })
    }

    sayHello(){
alert(this.state.nameValue)
    }
    render() { 
        return ( 
            <div> Parent Form
            <input type="text"onChange={this.captureInput}></input>
<button onClick={this.sayHello}> Hello</button>
<hr></hr>
childForm:
<Childform callHello={this.captureInput}></Childform>
            </div>
         );
    }
}
 
export default Parentform;