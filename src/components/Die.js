import React, { Component } from 'react'
import '../styles/index.css'

export default class Die extends Component {
  render() {
    const { face, isRolling } = this.props
    return (
      <div className={`Die ${isRolling && 'shaking'}`}>
        <i className={`fas fa-dice-${face}`}> </i>
      </div>
    )
  }
}
