import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'HailMary',
        bio: 'Jesus Christ Mother',
        imgSrc: 'https://t3.ftcdn.net/jpg/06/20/76/54/360_F_620765444_N2Oy5Vl7NEq5DU1z0GlUrW7qR6Kst0w1.jpg',
        profession: 'Queen of Heaven'
      },
      shows: false,
      mountedAt: null,
      timeElapsed: null
    };
  }

  componentDidMount() {
    this.setState({ mountedAt: new Date().getTime() });
    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - this.state.mountedAt;
      const minutes = Math.floor(timeElapsed / 60000);
      const seconds = Math.floor((timeElapsed % 60000) / 1000);
      this.setState({ timeElapsed: `${minutes} minutes and ${seconds} seconds` });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleShow}>Toggle Show</button>
          {this.state.shows && (
            <div>
              <h2>{this.state.person.fullName}</h2>
              <p>{this.state.person.bio}</p>
              <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
              <p>Profession: {this.state.person.profession}</p>
            </div>
          )}
          <p>Time elapsed since mounted: {this.state.timeElapsed}</p>
        </header>
      </div>
    );
  }
}

export default App;