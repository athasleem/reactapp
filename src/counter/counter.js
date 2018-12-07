import React from "react";

class Counter extends React.Component{

    constructor(props){
       super(props)
          this.state={
           counterValue:0
}

this.counterUtil = this.counterUtil.bind(this)
    }
    counterUtil(){
        console.log("Button clicked");
        this.setState({counterValue : this.state.counterValue +1})
    }
render(){
        return(
            <div>
                <h2>Counter</h2>
                <button onClick= {this.counterUtil}> CLICK ME</button>
                <br></br>
                Iam {this.state.counterValue} years old!!!

                </div>
        );
    }
}

export default Counter