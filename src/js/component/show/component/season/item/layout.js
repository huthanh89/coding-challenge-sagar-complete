//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  constructor(props){
    super(props);
    this.clickedItem = this.clickedItem.bind(this);
  }

  clickedItem(){
    this.props.actionChangeSeason(this.props.index)
  }

  isActive(){

    if(this.props.state.season == this.props.index){
      return true;
    }
    else{
      return false;
    }
  }

  getClass(){
    if(this.isActive()){
      return 'list-group-item active';
    }
    else{
      return 'list-group-item';
    }
  }

  render() {
    return(
      <li className={this.getClass()} onClick={this.clickedItem}>
        Season {this.props.index + 1}
      </li>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
