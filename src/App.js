import React, { Component } from 'react';
import AuthorInput from './components/AuthorInput';
import Authors from './components/Authors';
import BookInput from './components/BookInput';
import Books from './components/Books';
import { Switch, Link, Route } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            {/* // Potential NavBar component */}
            <ul>
              <li>
                <Link to="/authors">Authors</Link>
              </li>
              <li>
                <Link to="/books">Book</Link>
              </li>
            </ul>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
          <Route exact path="/authors">
            <h2>Authors</h2>
            <AuthorInput />
            <Authors />
          </Route>
          <Route path="/books">
            <h2>Books</h2>
            <BookInput />
            <Books />
          </Route>
          </Switch>
      </div>
    );
  }
};


{/* <BrowserRouter>
  <Route path="/profile" component={App} />
</BrowserRouter> */}

export default App;
