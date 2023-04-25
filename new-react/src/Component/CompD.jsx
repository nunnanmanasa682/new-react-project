import React, { Component } from 'react'

 class CompD extends Component {
  render() {
    return (
      <div> 
        <h2>Hello manasa</h2>
        <pre>{this.props.message}</pre>
      </div>
    )
  }
}

export default CompD