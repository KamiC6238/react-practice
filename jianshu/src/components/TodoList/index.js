import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.inputChange = this.inputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  render () {
    return (
      <Fragment>
        <div>
          {/* 使用for时会被react理解为是循环的for, 会有错误提示, 所以这里要使用htmlFor */}
          <label htmlFor="inputArea">输入内容：</label>
          <input
            id="inputArea"
            onChange={this.inputChange}
            value={this.state.inputValue}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  onClick={() => this.handleDelete(index)}
                  key={item+index}
                  // 将带标签的转为html格式
                  dangerouslySetInnerHTML={{__html: item}}
                />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  inputChange (event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleDelete (index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list })
  }
}

export default TodoList