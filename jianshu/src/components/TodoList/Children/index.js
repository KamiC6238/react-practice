import React from 'react'

const ListItem = props => {
  return (
    <ul>
      {
        props.list.map((item, index) => {
          return (
            <li
              onClick={() => props.handleDelete(index)}
              key={item+index}
              // 将带标签的转为html格式
              dangerouslySetInnerHTML={{__html: item}}
            />
          )
        })
      }
    </ul>
  )
}

export default ListItem