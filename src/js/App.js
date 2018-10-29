//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   Login   from './container/login.js';
import   Show    from './container/show.js';
import   React, { Component } from 'react';
import { Route } from "react-router-dom";

//-----------------------------------------------------------------------------//

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Route exact path="/" component={Login} />
        <Route path="/show"   component={Show} />
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default App;

//-----------------------------------------------------------------------------//
