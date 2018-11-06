import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './UserList/UserList.js';
import UserAlbums from './UserAlbums/UserAlbums.js';
import Photos from './Photos/Photos.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='main'>
          <Route 
            path='/' 
            component={UserList} 
          />
          <Route 
            path='/users/:id' 
            component={UserAlbums}
          />
          <Route 
            path='/users/:id/albums/:id' 
            component={Photos} 
          />
        </div>
      </Router>
    );
  }
}

export default App;
