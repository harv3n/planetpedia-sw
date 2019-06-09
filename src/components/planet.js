import React, { Component } from 'react'
import Logo from './logo'

class Planet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: [],
            featFilms: 0,
            isLoading: false
        }

        this.getPlanets = this.getPlanets.bind(this);
    }
    
    getPlanets() {
        this.setState({ isLoading: true });
        fetch('https://swapi.co/api/planets/'+ (Math.floor(Math.random() * (61 - 1)) + 1) + '/')
        .then(res => res.json())
        .then((data) => {
            this.setState({ planet: data, featFilms: data.films.length, isLoading: false })
        })
        .catch(console.log)
    }

    __refreshPage() {
        window.location.reload()
    }

    componentDidMount() {
        this.getPlanets()
    }
    
    render() {
        if(this.state.isLoading) {
            console.log('loading')
            return <div id="loading">Loading...</div>
        }

        return (
            <React.Fragment>
                <Logo></Logo>
                <div className="main">
                    <div className="card">
                        <header className="card-header">
                            <h2>{this.state.planet.name}</h2>
                        </header>
                        <section className="card-body">
                            <div><span>Population: </span>{this.state.planet.population}</div>
                            <div><span>Climate: </span>{this.state.planet.climate}</div>
                            <div><span>Terrain: </span>{this.state.planet.terrain}</div>
                        </section>
                        <footer className="card-footer">
                            <p>Featured in {this.state.featFilms} movie{this.state.featFilms > 1 && 's'}</p>
                        </footer>
                    </div>
                    <div className="btn-game">
                        <button onClick={this.getPlanets}>Next Planet</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Planet;