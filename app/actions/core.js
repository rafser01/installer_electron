import mori from 'mori'
export function setEntries(state, newState){
  console.log('into setEntries')
  return mori.into(state , mori.hashMap('entries',
        newState.reduce((vec,kv)=>{
                  return mori.conj(vec,kv);
                }, mori.vector())));
}
