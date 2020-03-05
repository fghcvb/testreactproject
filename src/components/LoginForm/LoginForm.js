import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import './LoginForm.css';
import { Redirect } from 'react-router'
class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let { username, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      /*loginForm */
      <div className="container marginTopBottom">
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input type="email" name="username" className="form-control" placeholder="Enter Username" onChange={e => this.setState({ username: e.target.value })} value={username} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" className="form-control" placeholder="Enter Password" onChange={e => this.setState({ password: e.target.value })} value={password} />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
          <div className="message">
            {isLoginPending && <div>Please wait...</div>}
            {isLoginSuccess &&
              <div>
                <Redirect to="/employeelist"/>
              </div>
            }
            {loginError && <div>{loginError.message}</div>}
          </div>
        </form>
      </div>

    )


  }

  // Submit
  onSubmit(e) {
    e.preventDefault();
    let { username, password } = this.state;
    this.props.login(username, password);
    this.setState({
      username: '',
      password: ''
    });

  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);