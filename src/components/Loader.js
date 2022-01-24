import React, { Component } from 'react'
import spinner from '../../src/spinner.gif'

export class Loader extends Component {
  render() {
    return (
      <div>
        <img src={spinner} alt="" />
      </div>
    )
  }
}

export default Loader
