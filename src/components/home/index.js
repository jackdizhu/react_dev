import React from 'react'
// import { Button, Input, Alert } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as index_act from '../../actions/index'
import { mapstate } from '../../reducers/com'
import Head from '../public/head'
import Foot from '../public/foot'
// import { Link } from 'react-router-dom';
// import history from '../public/history';
// import { cuns } from 'esn'

class Index extends React.Component {
  constructor (arg) {
    super(arg)
  }

  componentDidMount = () => {

  }

  render () {
    //这里使用了嵌套路由，看不懂的，可以仔细的研究一下，对着我的写法做几次，就能理解了，不是很难
    return (
      <div className="zhuye">
        <Head red_head_tit={'home'} />
        <div className="connet">
          {this.props.children}
        </div>
        <Foot foot_tit={'footer'} />
      </div>
    )
  }
}

function bindact (dispatch) {
  return bindActionCreators(index_act, dispatch)
}

export default connect(mapstate, bindact)(Index)
