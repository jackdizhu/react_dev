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
      if (data && data.data && data.data.data) {
        this.setState({
          list: data.data.data
        })
      } else {
        let arr = []
        for (let i = 0; i < 6; i++) {
          arr.push({
            img: 'https://create-react-app.dev/img/logo.svg',
            name: '测试名称__' + i
          })
        }
        this.setState({
          list: arr
        })
      }
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
  onDelete (index, e) {
    e.stopPropagation()
    // let list = this.state.list
    // let { list } = this.state
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  onDeleteFn (e, index) {
    this.onDelete(index, e)
  }

  render () {
    let list = this.state.list.map((data, index) => (
      <div key={index} className="list" onClick={this.handleCheckList(data, index)}>
        <div className="list-con">
          <div className="list_img">
            <img src={data.img} />
          </div>
          <div className="list_tit">
            {data.name}
            <span style={{ 'float': 'right' }} onClick={this.onDelete.bind(this, index)}> 删除</span>
            <span style={{ 'float': 'right' }} onClick={e => this.onDeleteFn(e, index)}> 删除</span>
          </div>
        </div>
      </div >))
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
