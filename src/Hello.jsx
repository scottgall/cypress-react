import React from 'react'

export class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.name
    }
  }

  render () {
    return <p>Hello {this.state.name}!</p>
  }
}