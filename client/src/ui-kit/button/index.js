import React from 'react'

import './index.css'


export default class Button extends React.Component {
  render() {
    return <button onClick={this.props.action} disabled={this.props.buttonDisabled}>{this.props.text}</button>
  }
}