import React from 'react'
function InputFn (Component, reg, msg) {
  // 缓存value setState会更新组件
  let $val = ''
  return class Input extends React.Component {
    constructor () {
      super()
      this.state = {
        reg: reg || /^[0-9a-zA-Z]*$/,
        msg: msg || '高阶组件只能输入限定字符'
      }
    }
    check (val) {
      return this.state.reg.test(val)
    }
    onChange (e) {
      let val = e.target.value
      if (this.check(val)) {
        this.props.onChange(e)
      }
    }
    setValue (val) {
      if (this.check(val)) {
        $val = val
        return val
      } else {
        return $val
      }
    }
    render () {
      return (
        <Component
          {...this.props}
          value={this.setValue.call(this, this.props.value)}
          onChange={this.onChange.bind(this)}
          placeholder={this.state.msg}
        ></Component>
      )
    }
  }
}
export default InputFn
