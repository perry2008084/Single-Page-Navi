import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCanvasNest from 'react-canvas-nest';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      title: 'Single Page Navi'
    };
  }

  componentDidMount() {
    fetch('./config.json').then((res) => {
      return res.json();
    }).then((res) => {
      console.log(res);
      this.setState({
        items: res,
        isLoaded: true
      });
    }).catch(error => console.error('Error: ', error));
  }

  render() {
    const { items,isLoaded, title } = this.state;
    const projectList = items.map((value, index) => {
      return <li key={value.name}><a className="list-link" href={value.link}>{value.name}</a></li>
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="ac-logo" alt="logo" />
          <p className="ac-title">
            {title}
          </p>

          {
            isLoaded && <ul className='list-container'>
              {projectList}
            </ul>
          }

          <ReactCanvasNest config={{follow: true, pointColor: '255,255,255', lineColor: '255,255,255'}} style={{zIndex: -1}} />
        </header>
      </div>
    );
  }
}

export default App;
