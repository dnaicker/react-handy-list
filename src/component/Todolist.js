import React, { Component } from 'react'

/**
 * Done:
 *  - [x] initialise list with preselected checkboxes
 *  - [x] filter hide list items on search
 */

class Todolist extends Component {
  // --------------
  constructor (props) {
    super(props)
    this.state = {
      list: [
        { name: 'name 123', surname: 'surname 12', selected: true, visible: '' },
        { name: 'name 22', surname: 'surname 22', selected: false, visible: '' },
        { name: 'name 31', surname: 'surname 3', selected: true, visible: '' }
      ],
      inputSearch: ''
    }
    this.handleSearch = this.handleSearch.bind(this) // if not defined state can not be used in function
    this.handleCheck = this.handleCheck.bind(this) // if not defined state can not be used in function
    this.handleSave = this.handleSave.bind(this) // if not defined state can not be used in function
  }

  // --------------
  // filter items
  handleSearch (event) {
    this.setState({ inputSearch: event.target.value }, () => {
      this.setState({
        list: this.state.list.map((obj) => {
          (((new RegExp(this.state.inputSearch, 'gm')).exec(obj.name)) !== null) ? obj.visible = '' : obj.visible = 'none'
          return obj
        })
      })
    })
  }

  // --------------
  // select items
  handleCheck (event) {
    this.setState({
      list: this.state.list.map((obj) => {
        (((new RegExp(event.target.value.name, 'gm')).exec(obj.name)) !== null) ? obj.selected = true : obj.selected = false
        return obj
      })
    })
  }

  // --------------
  // save list
  handleSave (event) {
    console.log('handle save', this.state.list)
  }

  render () {
    return (
      <div>
        {/* ------------- */}
        {/* // search bar */}
        <input onChange={this.handleSearch} value={this.state.inputSearch} />
        {/* ------------- */}
        {/* // display list */}
        <div>
          {
            this.state.list.map((obj) => {
              return (
                <div key={obj.name} style={{ display: obj.visible }}>
                  <label>
                    <input type='checkbox' value={obj} onClick={this.handleCheck} defaultChecked={obj.selected} />
                    {obj.name}
                  </label>
                </div>
              )
            })
          }
        </div>
        {/* ------------- */}
        {/* save */}
        <div>
          <button onClick={this.handleSave}> Save </button>
        </div>
      </div>
    )
  }
}

export default Todolist
