import React, { Component } from 'react';

class Home extends Component {
    routeChange() {
        window.location = '/planetpedia'
    }

    render() {
        return (
        <div className="main">
            <div className="logo logo-home">
                <div className="name-container">
                    <p>Planet</p>
                    <p>pedia</p>
                </div>
                <div className="logo-footer footer-home">A Star Wars game</div>
            </div>
            <div className="btn-home">
                <button onClick={this.routeChange}>Start</button>
            </div>
        </div>
        )
    }
}

export default Home;
