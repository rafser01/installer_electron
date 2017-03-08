import mori from 'mori'
export function setState(state){
  return {type:'SET_ENTRIES',
          entries: state
          }
}
