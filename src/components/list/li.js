import React from 'react';
import {Table,Modal,Button} from 'antd';
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as index_act from "../../actions/index";
import {mapstate} from "../../reducers/com"
import {qus} from 'esn'


class Li extends React.PureComponent {
    constructor(arg) {
        super(arg);
    }

    componentDidMount = () => {
        this.props.get('https://www.easy-mock.com/mock/5b7bbed645458a5efea87c82/api/react_get', {
                    r: '0.7153214477881407'
                }, (data) => {
            this.props.act_list(data.data.data)
        })
    }

    render() {
        let list = this.props.red_list.map((data,index)=>(
            <div key={index}>
                <div className="list_img"></div>
                <div className="list_tit">{data.title}</div>
            </div>))
        return (
            <div>
                <div className="neiye">
                    <h1>我是内页，我也来个列表</h1>
                    <h3 className="hongzi">{qus('query')}</h3>
                </div>
                <div className="list">
                    {list}
                </div>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Li);
