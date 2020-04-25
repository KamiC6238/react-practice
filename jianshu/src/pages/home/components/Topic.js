import React from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'

const Topic = props => {
  const { topicList } = props
  return (
    <TopicWrapper>
      {
        topicList.map((item, index) => {
          return (
            <TopicItem key={item+index}>
              <img className="topic-pic" src={item.get('imgUrl')} />
              {item.get('title')}
            </TopicItem>
          )
        })
      }
    </TopicWrapper>
  )
}

const mapStateToProps = state => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps, null)(Topic)