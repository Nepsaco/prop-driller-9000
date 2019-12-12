import React from 'react';
import './App.css';
import ProptimusOmega from './proptimusOmega'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
            proptimusPhotos: {
                "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
                "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
                "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
            },
            catchPhrase: {
                "Proptimus Prime": "I'm Rock and CAN help",
                "Proptimus Beta": "I'm better!",
                "Proptimus Omega": "I'm hereish",
            },
            activeProp: '',
        }
    }


    callForBadHelp = (event) => {
        if(this.state.activeProp === ''){
            this.setState({
                activeProp: 'Proptimus Omega'
            })
        } else if (this.state.activeProp === 'Proptimus Omega'){
            this.setState({
                activeProp: 'Proptimus Beta'
            })
        } else if (this.state.activeProp === 'Proptimus Beta'){
            this.setState({
                activeProp: 'Proptimus Prime'
            })
        } else{
            this.setState({
                activeProp: ''
            })
        }
    }

    callForBetterHelp = (event) => {

    }

    gimmeAllYouGot = (event) => {

    }

    sendThemHome = (event) => {

    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src={this.state.callForHelp}
                        className="App-logo"
                        alt="logo"
                        onClick={this.callForBadHelp}
                    />
                    {this.state && this.state.activeProp !== '' /*Which Proptobot should be checked for?*/ &&
                        <>
                        <p className="">Will this do, human?</p>
                        <ProptimusOmega 
                            proptimusPhoto={this.state.proptimusPhotos[this.state.activeProp]}
                            proptimusCatchPhrase={this.state.catchPhrase[this.state.activeProp]}
                        />
                        </>
                    }
                </header>
            </div>
        );
    }
}
