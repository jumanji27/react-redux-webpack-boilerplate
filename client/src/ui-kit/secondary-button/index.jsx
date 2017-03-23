import React from 'react';

import styles from './index.css';


export default class SecondaryButton extends React.Component {
  render() {
    return (
      <button
        className={`${styles.secondary_button} ${this.props.decorator || ''}`}
        onClick={this.props.action}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    );
  }
}
