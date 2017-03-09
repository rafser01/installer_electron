// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import connectOdduu from '../../app/service/connect_odduu'

export default class Home extends Component {
  getStore() {
    return this.props.primaryData || [];
  }
  render() {
    connectOdduu(this.getStore())
    return (
      <div>
        <div className={styles.container}>
          <h2>Installing....</h2>
            {this.getStore().map(function(t){
                return <div > {t[0]} </div>
            })

          }
        </div>
      </div>
    );
  }
}


//<Link to="/counter">to Counter</Link>
