import React, { Component } from 'react';
import Hero from './Hero';

class App extends Component {
    constructor() {
      super();
      this.state = { heroes: [] };
    }

    componentDidMount()
    {
        fetch('/api/heroes').then(result => result.json()).then(json =>
            { 
                this.setState({heroes:json});    
            });
    }
    
render()
{
    return (
        <div>
            <h1>Heroes:</h1>
            <ul>
                {this.state.heroes.map(hero => {
                    return <Hero hero={hero}/>
                })}
            </ul>
            <div className="editarea">
            </div>    
        </div>
    )
}


}

export default App;
