import React, { Component } from 'react'
import Die from './Die'

export default class RollDice extends Component {
  constructor(props) {
    super(props)
    this.state = { die1: 'one', die2: 'one', isRolling: false }
  }

  roll = () => {
    const { sides } = this.props
    // pick 2 new rolls
    const newDie1 = sides[Math.floor(Math.random() * sides.length)]
    const newDie2 = sides[Math.floor(Math.random() * sides.length)]
    // set state with new rolls
    this.setState({ die1: newDie1, die2: newDie2, isRolling: true })
    //   wait one sec then set isRolling to false
    setTimeout(() => {
      this.setState({ isRolling: false })
    }, 1000)
  }

  render() {
    const { die1, die2, isRolling } = this.state
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die face={die1} isRolling={isRolling} />
          <Die face={die2} isRolling={isRolling} />
        </div>
        <button onClick={this.roll} disabled={isRolling}>
          {isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}

RollDice.defaultProps = {
  sides: ['one', 'two', 'three', 'four', 'five', 'six'],
}
