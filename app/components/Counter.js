// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Counter.css';


class Counter extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, incrementAsynclinux, powerofflinux, wifilinux, decrement, counter } = this.props;
    return (
      <div>


      </div>
    );
  }
}

export default Counter;

        //<div className={styles.poweroff}>
         // <button onClick={() => powerofflinux()}>
        //      <img className={styles.offimg} src="dist/poweroff.png"/>
        //  </button>
        //</div>
          // <button onClick={() => wifilinux()}>
          //     <img className={styles.wifiimg} src="dist/wifi.png"/>
          // </button>
