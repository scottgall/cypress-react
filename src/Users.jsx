import React from 'react'
import axios from 'axios'

export class Users extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    axios.get('http://jsonplaceholder.typicode.com/users?_limit=3')
    .then(response => {
      // JSON responses are automatically parsed.
      this.setState({
        users: response.data
      })
    })
  }

  render () {
    return <div>
      {this.state.users.map(user =>
        <li key={user.id}><strong>{user.id}</strong> - {user.name}</li>)}
    </div>
  }
}