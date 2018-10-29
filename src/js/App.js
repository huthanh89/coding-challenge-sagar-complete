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

    console.log(this);

    return (
      <div className="App container">
        <Route exact path="/uber" component={Login} />
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
