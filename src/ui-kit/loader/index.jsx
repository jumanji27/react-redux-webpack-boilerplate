import React from 'react';

import styles from './index.css';


export default class Loader extends React.Component {
  render() {
    return (
      <div className={`${styles.loader} ${this.props.decorator || ''}`}>
        <div className={styles.spinner} />
      </div>
    );
  }
}
