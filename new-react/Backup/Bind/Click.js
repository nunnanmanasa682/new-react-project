import React, {Component} from "react";
class Click extends Component{
    Constructer(props){
        Super(props)
        this.state={
            message:'welcome'
        }
    }
    render(){
        return(
        <div>
            <h3>{this.state.message}</h3>
            <button>Click</button>
        </div>
        )
    }
}
export default Click
