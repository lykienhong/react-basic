import React from "react";
import Color from "../HOC/Color"

class Home extends React.Component{

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.push('/todo')
    //     },3000)
    // }


    render(){
        console.log(">>>>> check props :",this.props)
        return(
            <div>Welcome to home page</div>
        )
    }
}

export default Color(Home)