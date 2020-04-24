import styled from 'styled-components'
import logoPic from '../../statics/images/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

// & 表示当前标签
export const NavItem = styled.div`
  line-height: 58px;
  font-size: 15px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  padding: 0 20px 10px 20px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size： 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 10px 0;
  font-size: 12px;
  border:1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    &.focused {
      background: #777;
      color: #fff;
      transition: 0.3s ease-in-out;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  border-radius: 19px;
  margin-top: 10px;
  margin-left: 20px;
  background: #eee;
  font-size: 14px;
  transition: 0.3s ease-in-out;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
    transition: 0.3s ease-in-out;
  }
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 58px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.regisiter {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`