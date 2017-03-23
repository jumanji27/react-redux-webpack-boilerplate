import React from 'react';

import styles from './index.css';


export default class Button extends React.Component {
  render() {
    const modifiers =
      this.props.mod && this.props.mod.split(' ').map(mod => styles[`button__${mod}`]).join(' ');

    return (
      <button
        className={`${styles.button} ${this.props.decorator || ''} ${modifiers || ''}`}
        onClick={this.props.action}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    );
  }
}
