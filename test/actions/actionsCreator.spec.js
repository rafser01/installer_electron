import {expect} from 'chai'
import {setEntries} from '../../app/actions/core'
import installer_reducer from '../../app/reducers/installer_reducer'
import mori from 'mori'
describe('Actions with Mori',()=>{
  it('setEntries',()=>{
    let state=setEntries(mori.hashMap(),[1,2,3])
    let nextState=installer_reducer(undefined,{type:'SET_ENTRIES',entries:[1,2,3]})
    console.log('state ',state)
    console.log('Next state ',nextState)
    expect(mori.equals(nextState,state)).is.equal(true)
  })
})
