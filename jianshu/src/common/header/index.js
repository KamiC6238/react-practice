import React from 'react'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style.js'
import {
  actionSearchFocus,
  actionSearchBlur,
  actionMouseEnter,
  actionMouseLeave,
  actionPageChange,
  getList
} from './store'

const getSearchArea = props => {
  const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handlePageChange } = props
  const pageList = []
  const _list = list.toJS()
  // 获取到数据的时候才执行下面代码，否则key会变成undefined，导致报错
  if (_list.length) {
    for (let i = (page-1) * 10; i < page * 10; i++) {
      pageList.push(
        <SearchInfoItem key={_list[i]}>{_list[i]}</SearchInfoItem>
      )
    }
  }
  // 选项框的显示依赖于一下两个来显示
  if (focused || mouseIn) {
    return (
      <SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => handlePageChange(page, totalPage)}>换一换</SearchInfoSwitch>
        </SearchInfoTitle>
        {pageList}
      </SearchInfo>
    )
  }
  return null
}

const Header = props => {
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
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
            className={props.focused ? 'focused' : ''}
          />
          <i
            className={
              props.focused ?
              'focused iconfont' :
              'iconfont'
            }
          >&#xe62b;</i>
          { getSearchArea(props) }
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

const mapStateToProps = state => {
  // 使用了immuatable之后只能使用get来获取state里的数据
  // 两种写法
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus () {
      dispatch(getList())
      dispatch(actionSearchFocus())
    },
    handleInputBlur () {
      dispatch(actionSearchBlur())
    },
    handleMouseEnter () {
      dispatch(actionMouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionMouseLeave())
    },
    handlePageChange (page, totalPage) {
      if (page < totalPage) {
        dispatch(actionPageChange(page + 1))
      } else {
        dispatch(actionPageChange(1))
      }
    }
  }
}

/*
  connect会返回一个容器组件，这个组件包含两部分，一部分是UI组件，也就是Header，一部分是逻辑处理，也就是
  mapStateToProps和mapDispatchToProps
*/
export default connect(mapStateToProps, mapDispatchToProps)(Header)