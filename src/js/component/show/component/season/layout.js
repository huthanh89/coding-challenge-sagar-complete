//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Item  from './item/layout.js';
import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  getViews(){
    let result = [];
    let show   = this.props.state.show;
    let view   = this;

    if(!_.isEmpty(show)){
      show.seasons.forEach(function(season, index){
        result.push(<Item {...view.props} key={index} index={index}/>);
      });
    }
    return result;
  }

  render() {
    return(
      <div className="card">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {this.getViews()}
          </ul>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
