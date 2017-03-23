import React from 'react';

import styles from './index.css';


export default class InputButton extends React.Component {
  render() {
    return (
      <div className={`${styles.input_button} ${this.props.decorator || ''}`}>
        <input
          className={this.props.inputMod || ''}
          type={this.props.inputType}
          value={this.props.value}
          onChange={this.props.inputOnChange}
          onFocus={this.props.inputOnFocus}
          onBlur={this.props.inputOnBlur}
          disabled={this.props.inputDisabled}
        />
        <button
          onClick={this.props.buttonAction}
          disabled={this.props.buttonDisabled}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}
