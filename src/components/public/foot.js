/**
 * Created by zengtao on 2017/8/16.
 */
//简单得纯组件，就不要引入redux了，保持他得纯净,需要redux得数据得话，我们直接从他得父组件 <Head {...this.props}/>这样就可以了，多么得爽
import React from 'react';
import {Table,Modal,Button} from 'antd';


export default class Foot extends React.Component {
    constructor(arg) {
        super(arg);
    }

    componentWillMount = ()=> {

    }

    render() {
        return (
            <div className="foot">
                Copyright © 2013-2018 react.com All Rights Reserved. 备案号：闽ICP备150127678768607号-1
            </div>
        )
    }
}
