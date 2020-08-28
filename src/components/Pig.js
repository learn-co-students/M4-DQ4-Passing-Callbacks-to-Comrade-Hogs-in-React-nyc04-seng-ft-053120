import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)

  // props = {
  //   environment
  //   id,
  //   name,
  // }

  // Galaxy and his hog cadre should react to this change in their environment and use the panic method to render their warnings

  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.props.environment === 'inhospitable' ? this.panic() : null }
      </div>
    )
  }
}

// two possible states for the environment:
// 1. "docile"
// 2. "inhospitable"
