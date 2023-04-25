import React from 'react'
import CompD from '../CompD'
 class CompC extends React.Component {
    Msg="Good morning"
  render() {
    return (
      <div>
<CompD message={this.Msg} />
      </div>
    )
  }
}

export default CompC