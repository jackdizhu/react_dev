import React from 'react';
import { Button, Form, Input, Icon, Checkbox } from 'antd';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions/index";
import history from '../public/history';
import { mapstate } from "../../reducers/com"
import { qus } from 'esn'
import '$less/login.module.less'

const FormItem = Form.Item

class LoginForm extends React.Component {
  constructor(arg) {
    super(arg);
    this.state = {
      username: '',
      password: '',
      checkbox: false
    }
  }
  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
    console.log(this.state.username, 'username');
  }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
    console.log(this.state.password, 'password');
  }
  handleCheckbox = (e) => {
    this.setState({
      checkbox: e.target.checked
    })
    console.log(e.target.checked, 'checkbox');
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password && this.state.checkbox) {
      this.props.post('https://www.easy-mock.com/mock/5b7bbed645458a5efea87c82/api/react_userInfo', {
        username: this.state.username,
        password: this.state.password
      }, (data) => {
        this.props.actions_userInfo(data.data.data)
        // console.log(this.props.userInfo, 111);
        history.push('/home');
      })
    }
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} className='LoginForm'>
        <div style={{ width: '300px', height: '260px' }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <Input onChange={this.handleUsername} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            </FormItem>
            <FormItem>
              <Input onChange={this.handlePassword} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
              <div>
                <Checkbox onChange={this.handleCheckbox}>用户协议</Checkbox>
                <a className="login-form-forgot" href="">忘记密码</a>
                <a href="" style={{ float: 'right' }}>立即注册</a>
              </div>
              <div className='btn-box'>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

function bindact(dispatch) {
  return bindActionCreators(index_act, dispatch)
}

export default connect(mapstate, bindact)(LoginForm);
