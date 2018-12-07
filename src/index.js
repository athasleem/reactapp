import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./AppComponent";
import Parent from "./Family/parent";
import Alphabet from "./Alphabet/alphabet";
import Counter from "./counter/counter";
import Lifecycle from "./Lifecycle/lifecycle";
import RemoteAPIData from "./remote/apiData";
import Parentform from "./Forms/parentform";


var position= document.getElementById("root")

ReactDOM.render (<div>
                 <AppComponent></AppComponent>
                <hr></hr>
             <Parent nameson="arshad" namedaughter="shahida">mehra </Parent>
             <hr></hr>
             <Parent nameson="abdul" namedaughter="ayesha">nehra </Parent>
             <hr></hr>
             <Alphabet fcolor="red" bcolor="yellow">R</Alphabet>
             <Alphabet fcolor="red" bcolor="green">A</Alphabet>              
            <Alphabet fcolor="red" bcolor="blue">I</Alphabet>
            <Alphabet fcolor="red" bcolor="aqua">N</Alphabet>
            <Alphabet fcolor="red" bcolor="brown">B</Alphabet>
             <Alphabet fcolor="red" bcolor="black">O</Alphabet>
            <Alphabet fcolor="red" bcolor="yellow">W</Alphabet>
            <hr></hr>
            <Counter></Counter>
            <hr></hr>
            
             </div>,position)

ReactDOM.render (<Lifecycle></Lifecycle>,document.getElementById("lifecycle"))
ReactDOM.render (<RemoteAPIData ></RemoteAPIData>,document.getElementById("data"))
ReactDOM.render(<Parentform></Parentform>,document.getElementById("form"))
