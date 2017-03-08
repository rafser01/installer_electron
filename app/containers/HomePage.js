// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as installerActions from '../actions/installerActions'
import {toJs,toClj,hashMap,vector,keys,first} from 'mori';
/*export default class HomePage extends Component {
  render() {
    return (
      <Home  />
    );
  }
}*/

function mapStateToProps(state){

  let stateJs=toJs(toClj(state));
  if(stateJs['installer_reducer'].entries!=undefined){
    let data=stateJs['installer_reducer'].entries.map(function(kv){

        return Object.values(kv)
    })
    console.log(data)
    return {
      installer: stateJs['installer_reducer'],
      primaryData: data
     };
  }



  return {installer:state.intaller_reducer

  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(installerActions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
