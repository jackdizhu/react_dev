import React from 'react'
// import { Table, Modal, Button } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as index_act from '../../actions/index'
import history from '../public/history'
import { mapstate } from '../../reducers/com'
// import { qus } from 'esn'

class GoodsList extends React.PureComponent {
  constructor (arg) {
    super(arg)
    this.state = {
      list: []
    }
  }

  componentDidMount = () => {
    this.props.get('https://www.easy-mock.com/mock/5b7bbed645458a5efea87c82/api/get_listRandom', {
    }, (data) => {
      // this.props.act_list(data.data.data)
      this.setState({
        list: data.data.data
      })
      // console.log(this.state.list, 1111);
    })
  }

  handleCheckList = (data) => {
    return () => {
      this.props.actions_checkList(data)
      // setTimeout(() => {
      // }, 0)
      // console.log(this.props.checkList, 'handleCheckList');
      history.push('/details')
    }
  }

  render () {
    let list = this.state.list.map((data, index) => (
      <div key={index} className="list" onClick={this.handleCheckList(data, index)}>
        <div className="list-con">
          <div className="list_img">
            <img src={data.img} />
          </div>
          <div className="list_tit">{data.name}</div>
        </div>
      </div>))
    return (
      <div className="GoodsList">
        <div className="neiye">
          <h1>商品列表</h1>
        </div>
        <div className="list-box">
          {list}
        </div>
      </div>
    )
  }
}

function bindact (dispatch) {
  return bindActionCreators(index_act, dispatch)
}

export default connect(mapstate, bindact)(GoodsList)
