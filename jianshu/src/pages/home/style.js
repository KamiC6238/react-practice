import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 240px;
  padding-top: 30px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding:  20px 0 10px 0;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 0 18px 18px 0;
  padding-right: 10px;
  .topic-pic {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`