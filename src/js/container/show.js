//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   Show      from '../component/show/layout.js';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actionLoading: function (status){
            return dispatch({
                type:   'LOADING',
                status:  status
            });
        },
        actionShowDetail: function (data){
            return dispatch({
                type: 'SHOW_DETAIL',
                data:  data
            });
        },
        actionResetSearch: function (){
            return dispatch({
                type: 'RESET_SEARCH'
            });
        },
        actionSearchFailed: function (flag){
            return dispatch({
                type: 'SEARCH_FAILED',
                flag:  flag
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
)(Show);

//-----------------------------------------------------------------------------//