import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  }]
})

export default (state=defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}