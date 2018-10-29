//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _ from 'lodash';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

const initialState = function(){
  return {
    authorized:   false,
    password:    'supersecret',
    show:         {},
    fetch:        false,
    season:       0,
    searchFailed: false
  };
};

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState=initialState(), action){

  switch (action.type){
    
    case 'SET_SEASON': {
      let state    = prevState;
      state.season = action.index;
      return _.clone(state);
    }

    case 'SET_AUTHORIZE': {
      let state        = prevState;
      state.authorized = true;
      return _.clone(state);
    }

    case 'LOADING': {
      let state   = prevState;
      state.fetch = action.status;
      return _.clone(state);
    }

    case 'SHOW_DETAIL': {
      let state  = prevState;
      state.show = action.data;
      return _.clone(state);
    }
    
    case 'RESET_SEARCH': {
      let state          = prevState;
      state.show         = {};
      state.season       = 0;
      state.searchFailed = false;
      return _.clone(state);
    }

    case 'SEARCH_FAILED': {
      let state          = prevState;
      state.searchFailed = action.flag;
      return _.clone(state);
    }
    
    default: {
      return prevState;
    }
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default reducer;

//-----------------------------------------------------------------------------//