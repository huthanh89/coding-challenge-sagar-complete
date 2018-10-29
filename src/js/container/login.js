//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   Login     from '../component/login/layout.js';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actionAuthorize: function (){
            return dispatch({
                type: 'SET_AUTHORIZE'
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
)(Login);

//-----------------------------------------------------------------------------//