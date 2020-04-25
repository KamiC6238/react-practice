import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style.js'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writter from './components/Writter'

class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src='//upload-images.jianshu.io/upload_images/6126137-b875c763bdaa0006?imageMogr2/auto-orient/strip|imageView2/2/w/994/format/webp' />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writter></Writter>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home