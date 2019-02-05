import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import NewsFeed from './components/NewsFeed/NewsFeed'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NewsFeed />
      </div>
    );
  }
}

export default App;
