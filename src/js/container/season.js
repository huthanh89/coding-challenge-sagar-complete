//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   Season    from 'component/show/component/season/layout.js';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actionChangeSeason: function (index){
            return dispatch({
                type: 'SET_SEASON',
                index: index
            });
        }
    };
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Season);

//-----------------------------------------------------------------------------//