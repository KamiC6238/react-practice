import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style.js'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  render () {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
              className={this.state.focused ? 'focused' : ''}
            />
            <i
              className={
                this.state.focused ?
                'focused iconfont' :
                'iconfont'
              }
            >&#xe62b;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className="regisiter">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus () {
    this.setState({
      focused: true
    })
  }

  handleInputBlur () {
    this.setState({
      focused: false
    })
  }
}

export default Header