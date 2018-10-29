//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import $     from 'jquery'
import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props)
    this.changedUsername = this.changedUsername.bind(this);
    this.changedPassword = this.changedPassword.bind(this);
    this.clickedlogin    = this.clickedlogin.bind(this);

    this.state = {
      username: '',
      password: ''
    }

  }

  changedUsername(){
    let username = $('#login-username').val();
    this.setState({
      username: username
    })
  }

  changedPassword(){
    let password = $('#login-password').val();
    this.setState({
      password: password
    })
  }

  clickedlogin(){
    if(this.isValid()){
      this.props.actionAuthorize();
      this.props.history.push('/show');
    }
  }

  isValid(){
    let flag = true;
    if(this.state.username.length <= 2){
      flag = false;
    }
    if(this.state.password != this.props.state.password){
      flag = false;
    }
    return flag;
  }

  render() {

    let isValid     = this.isValid();
    let buttonClass = 'btn btn-info mt-2 float-right';

    if(!isValid){
      buttonClass += ' disabled';
    }

    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="card">

            <div className="card-header">
              Login
            </div>

            <div className="card-body">

              <div className="row">
                <div className="col-12">
                  <form>
                    <div className="form-group">
                      <label htmlFor="login-username">Username</label>
                      <input type="text" className="form-control" id="login-username" placeholder="Username" onChange={this.changedUsername}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="login-password">Password</label>
                      <input type="password" className="form-control" id="login-password" placeholder="Password" onChange={this.changedPassword}/>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <button className={buttonClass} id="login-button" onClick={this.clickedlogin}>
                    Login
                  </button>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h3>
              Show Search
              </h3>
            </div>
            <div className="card-body">
                Login required
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
