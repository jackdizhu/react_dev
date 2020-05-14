import React from 'react';
import { Table, Modal, Button } from 'antd';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions/index";
import { mapstate } from "../../reducers/com"
import { qus } from 'esn'


class GoodsDetails extends React.PureComponent {
  constructor(arg) {
    super(arg);
    this.state = {
      details: {}
    }
  }

  componentDidMount = () => {
    this.props.get('https://www.easy-mock.com/mock/5b7bbed645458a5efea87c82/api/get_details', {
      id: this.props.checkList._id
    }, (data) => {
      // this.props.act_list(data.data.data)
      this.setState({
        details: data.data.data
      })
    })
  }

  render() {
    return (
      <div className='GoodsDetails'>
        <div className="neiye">
          <h1>商品详情</h1>
        </div>
        <div className="details-box">
          {
            this.state.details.name ?
              <div className='details-head flex justify-start items-start content-start'>
                <div className="img-box">
                  <img src={this.state.details.img} width="400px" />
                </div>
                <div className="tit-box">
                  <div className='tit'>
                    {this.state.details.name}
                    <span>
                      ({this.state.details.typeName})
                    </span>
                  </div>
                  <dl className='dl1'>
                    <dt>
                      主料:
                    </dt>
                    <dd>
                      <span>
                        {
                          this.state.details.data.mainMaterial.map((item, index) => {
                            return (
                              <span key={index}>
                                {item}
                              </span>
                            )
                          })
                        }
                      </span>
                    </dd>
                  </dl>
                  <dl className='dl1'>
                    <dt>
                      辅料:
                    </dt>
                    <dd>
                      <span>
                        {
                          this.state.details.data.auxiliaryMaterials.map((item, index) => {
                            return (
                              <span key={index}>
                                {item}
                              </span>
                            )
                          })
                        }
                      </span>
                    </dd>
                  </dl>
                  <dl className='dl2'>
                    <dt>
                      做法:
                    </dt>
                    <dd>
                      {
                        this.state.details.data.cookingMethod.map((item, index) => {
                          return (
                            <span key={index}>
                              {item}
                            </span>
                          )
                        })
                      }
                    </dd>
                  </dl>
                </div>
              </div>
            : ''
          }

        </div>
      </div>
    )
  }
}

function bindact(dispatch) {
  return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(GoodsDetails);
