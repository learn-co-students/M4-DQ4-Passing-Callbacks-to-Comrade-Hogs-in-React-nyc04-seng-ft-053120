import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
  }

  relax = () => {
    this.setState({ panicked: false })
  }

  exclaim = () => {
    if (this.state.panicked === true) {
      return;
    } else {
      this.exclaimAudio.play()
      this.squeelAudio.play()
    }
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  // 3. After at least two seconds, things in the pig pen should cool off, and the environment should return to normal (this means we should be able to click on GalaxySNote7 again, instigating the same chain of events all over again AFTER he has cooled his jets)

  // After 2 seconds
  // The environment state of the PigPen should go back to "docile"
  // Change GalaxySNote7's panicked state to false

  // props = {
  //   environment:{this.state.environment},
  //   alterEnvironment: {this.alterEnvironment}
  // }

  handleOnClick = () => {
    this.setState({ panicked: true });
    this.exclaim();

    setTimeout(() => {

      this.props.alterEnvironment('inhospitable');

      setTimeout(() => {
        this.props.alterEnvironment('docile');
        this.relax();
      }, 2000);

    }, 1500);
    
    // Lines 53-62
    // After 1.5s (or 1500ms)
    // this.props.alterEnvironment('inhospitable') is called
    // and anothe timer is set for 2s (or 2000ms)

    // 2s after this
    // this.props.alterEnvironment('docile');
    // this.setState({ panicked: false });
  }

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.handleOnClick}>

        {(this.state.panicked) ? this.panic() : null}

      </div>
    )
  }
}


/* INSTRUCTIONS
  1. On click, GalaxySNote7 should trigger a change in state for the pig pen's environment (alter environment)

  2. Galaxy and his hog cadre should react to this change in their environment and use the panic method to render their warnings

  3. After at least two seconds, things in the pig pen should cool off, and the environment should return to normal (this means we should be able to click on GalaxySNote7 again, instigating the same chain of events all over again AFTER he has cooled his jets)

  instruction 3 breakdown:
  // After 2 seconds
  // The environment state of the PigPen should go back to "docile"
  // Change GalaxySNote7's panicked state to false
*/

// <GalaxySNote7 (this -> PigPen)
  //       environment={this.state.environment} 
  //       alterEnvironment={this.alterEnvironment} />