import React from 'react';

export default class ProptimusOmega extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    return(
      <section>
        <img
          src={this.props.proptimusPhoto}
          className="App-logo"
          alt="logo"
          onClick={this.props.callForBetterHelp}
        />
        <p>{this.props.proptimusCatchPhrase}</p>
      </section>
    )
  }
}
