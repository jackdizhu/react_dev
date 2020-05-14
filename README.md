# react_dev

## 父子组件通信

* 通过props属性传递属性、方法到子组件
* 子组件通过调用父级组件传入的方法通知/修改父级组件属性

## 定义props类型

* 通过引入prop-types模块处理

```js
import React from 'react'
import PropTypes from 'prop-types'
class FormButton extends React.Component {
  constructor () {
    super()
  }
}
// 定义组件props类型
FormButton.propTypes = {
  show: PropTypes.bool,
  username: PropTypes.string,
  callBack: PropTypes.func
}
// 定义组件props默认值
FormButton.defaultProps = {
  show: true,
  username: '',
  callBack: () => { }
}
```

## 生命周期

### 挂载卸载过程

1. constructor() 初始化数据
2. componentWillMount() 初始化数据后，但是还未渲染DOM时
3. componentDidMount() dom节点已经生成，setState后组件会重新渲染
4. componentWillUnmount() 完成组件的卸载和数据的销毁

* Can only update a mounted or mounting component ⚠️

```js
componentDidMount() {
  this.isMount === true
  axios.post().then((res) => {
    this.isMount && this.setState({ // 增加条件ismount为true时
      aaa:res
    })
  })
}
componentWillUnmount() {
  this.isMount === false
}
```

### 更新过程

1. componentWillReceiveProps(nextProps) 在接受父组件改变后的props需要重新渲染组件时用到
2. shouldComponentUpdate(nextProps, nextState) 主要用于性能优化，在这里return false可以阻止组件的更新
3. componentWillUpdate (nextProps, nextState) 组件进入重新渲染的流程
4. componentDidUpdate(prevProps, prevState) 组件更新完毕
5. render()

### React新增的生命周期[（生命周期）](https://www.jianshu.com/p/b331d0e4b398)

1. getDerivedStateFromProps(nextProps, prevState)
2. getSnapshotBeforeUpdate(prevProps, prevState)

``` js
// 路由嵌套
<Switch>
  <Route exact path="/" component={Login}/>
  { /* Index 页面 嵌套 page 页面 */ }
  <Index>
    <Route path="/home"/>
    <Route path="/page1" component={Page1}/>
    <Route path="/page2" component={Page2}/>
  </Index>
</Switch>

// 双层循环 嵌套 if else
{arr.map((item) => {
  return (
    item.disable === false ?
    <SubMenu key={item.name} title={<span><Icon type={item.type} /><span>{item.value}</span></span>}>
    {
      item.chiden.map((li) => {
        return (
          li.disable === false ?
          <Menu.Item key={li.name}>{li.value}</Menu.Item>
          : ''
        )
      })
    }
    </SubMenu>
    : ''
  )
})}

// 遍历数组，在每一项元素后面触发一个回调函数，经过计算返回一个累加的值。
state.reduce()
// 遍历数组，在每一项元素后面触发一个回调函数，通过判断，保留或移除当前项，最后返回一个新数组。
state.filter()
// 遍历数组，在每一项元素后面触发一个回调函数，通过计算，返回一个新的当前项，最后返回一个新数组。
state.map()
// 只要有一个满足判断，就返回 true
state.some()
// 只要有一项不满足判断，就返回 false
state.every()

import {Provider} from 'react-redux';
import store from './redux/store';
// 通过 Provider 组件 使所有组件通过
<Provider store={store}>
  <Router>
    <RootElement/>
  </Router>
</Provider>
例:
// 子孙组件 访问 store
import {connect} from 'react-redux';
export default connect((state) => ({userInfo: state.userInfo}))(Nav);
render() {
  const {userInfo} = this.props.userInfo;
  return (
    <div>
      {userInfo.name}
    </div>
  )
}

connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {})
例:
  connect(mapStateToProps, mapDispatchToProps)(Counter);
// mapStateToProps：
// this.props.counter.count
// 绑定 state.counter 到 this.props
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }

};

// mapDispatchToProps：
// 绑定 store 中 actions 方法到 this.props
// this.props.increment()
// this.props.decrement()
// this.props.reset()
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({
        type: 'INCREMENT'
      })
    },
    decrement: () => {
      dispatch({
        type: 'DECREMENT'
      })
    },
    reset: () => {
      dispatch({
        type: 'RESET'
      })
    }
  }
};

// mergeProps：mergeProps如果不指定，则
// 默认返回 Object.assign({}, ownProps, stateProps, dispatchProps)，顾名思义，
// mergeProps是合并的意思，将state合并后传递给组件。

// options：通过配置项可以更加详细的定义connect的行为，通常只需要执行默认值
```

## 注意事项

* 不要在render的函数中绑定值（父组件更新时会产生新的方法，更新子组件 不好）

```html
<!-- 不推荐 -->
<CommentItem likeComment={() => this.likeComment(user.id)} />

<!-- 推荐 -->
<CommentItem likeComment={this.likeComment} userID={user.id} />
```

* Component与PureComponent的区别

```
PureCompoent 当其props或者state改变之时，新旧props与state将进行浅对比
```
