# react_dev

``` js
// 生命周期
constructor()
componentWillMount()
render()
componentDidMount() // 一般用于加载 外部数据 处理异步请求

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
