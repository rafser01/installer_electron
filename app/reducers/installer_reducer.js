// @flow
import mori from 'mori'
import {setEntries} from '../actions/core'

export type installerType={

}
type actionType={
  type: String
}

let INITIAL_STATE=mori.hashMap();
export default function (state=INITIAL_STATE,action){

  switch(action.type){
    case 'SET_ENTRIES':
    // console.log('...reducer...',setEntries(state , action.entries))
      return setEntries(state , action.entries);
  }
  return state;
}
