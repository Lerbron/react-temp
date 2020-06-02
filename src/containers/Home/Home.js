import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setNum } from 'actions/testActions'
import { Button } from 'antd';

class Home extends Component {
  render() {
    return(
      <div>
        <div className='content'>{this.props.num}</div>
        <Button onClick={this.props.setNum}>button</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    num: state.test.num
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setNum: () => {
      dispatch(setNum())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)