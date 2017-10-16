import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import SearchBar from './search_bar';
import Weather from './weather';
import Detail from './detail';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route render={props => {
            return (
              <header className="header">
                <Link to={{pathname: '/'}}><h1>Weather Finder</h1></Link>
                <SearchBar onSubmitSearch={city => {
                  props.history.push({
                    pathname: './weather',
                    search: '?city=' + city
                  });
                }}/>
              </header>
            );
          }} />
          <Route exact path='/' render={props => {
            return (
              <div className="main-container">
                <label>Enter a city name</label>
                <SearchBar onSubmitSearch={city => {
                  props.history.push({
                    pathname: './weather',
                    search: '?city=' + city
                  });
                }}/>
              </div>
            );
          }} />
          <Route path='/weather' component={Weather} />
          <Route path='/details' component={Detail} />
        </div>
      </Router>
    );
  }
}
