//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React   from 'react';
import Episode from './episode/layout.js';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  getItems(){
    let state  = this.props.state;
    let result = [];
    if(state.show.seasons.length){
      let season = state.show.seasons[state.season];
      season.forEach(function(episode){
        result.push(<Episode {...episode} key={episode.id}/>)
      });
    }
    return result;
  }

  render() {
    let data = this.props.state.show;
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h2 className="text-center">
              {data.name}
            </h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                  <img className="detail-image" src={data.image} alt="Image"/>
              </div>
              <div className="col-sm-9">
                <div dangerouslySetInnerHTML={{__html: data.summary}}></div>
              </div>
            </div>
          </div>
        </div>
          {this.getItems()}
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
