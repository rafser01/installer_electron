export default socket => store => next => action => {
  console.log('found in remoteMiddle')
  socket.on('action',action)

  //if(action.meta && action.meta.remote){
  //  socket.emit('action',action)
  //}
  return next(action)
}
