import React from 'react'
import PropTypes from 'prop-types'
import '$less/button.module.less'

class FormButton extends React.Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }
  // 调用父组件方法更新state
  usernameShift () {
    let str = this.props.username.substr(0, this.props.username.length - 1)
    this.props.callBack({ username: str })
  }
  render () {
    return (
      <div className="form-test">
        <p>双向绑定、父子组件通信测试</p>
        <div className="form-test-btn" onClick={this.usernameShift.bind(this)}>
          {this.props.username || '测试按钮'}
        </div>
      </div>
    )
  }
}
// 定义组件props类型
FormButton.propTypes = {
  show: PropTypes.bool,
  username: PropTypes.string,
  callBack: PropTypes.func
}

export default FormButton
