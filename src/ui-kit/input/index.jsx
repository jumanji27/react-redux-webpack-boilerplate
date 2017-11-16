import React from 'react';

import styles from './index.css';


export default class Input extends React.Component {
  render() {
    return (
      <div className={`${this.props.decorator || ''} clear_float`}>
        <input
          className={styles.input}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.action}
        />
      </div>
    );
  }
}
