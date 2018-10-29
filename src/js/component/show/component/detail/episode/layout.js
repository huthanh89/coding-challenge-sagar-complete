//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import moment from 'moment'
import React  from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  getImage(){
    if(this.props.image){
      let image = this.props.image.medium;
      return(<img className="detail-image" src={image} alt="Image"/>);
    }
    else{
      return(
        <span className="text-muted">
          No Image
        </span>
      );
    }
  }

  getSummary(){
    if(this.props.summary){
      return(
        <div>
          <span className="mr-1">Summary:</span>
          <div dangerouslySetInnerHTML={{__html: this.props.summary}}></div>
        </div>
      );
    }
    else{
      return(
        <span className="text-muted">
          No Summary
        </span>
      );
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
                {this.getImage()}
            </div>
            <div className="col-sm-9">
              <p>
                <span>{moment(this.props.airdate).format('MMMM DD, YYYY')}, Season {this.props.season} episode {this.props.number}</span>
              </p>
              {this.getSummary()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
