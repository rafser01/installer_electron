var Promise=require('bluebird')
var sh = Promise.promisifyAll(require('shelljs'));
let cmds=[
  'mkdir -p /mnt/var/cache/pacman',
  'rm -rf /var/cache/pacman/pkg',
  'cp /root/pacman.conf /etc/',
  'mkdir -p /mnt/var/cache/pacman/pkg',
  'mkdir -p /root/.ssh'
  ]
export default function(){
  console.log('Connecting Odduu Server ...')
  return beforeIDrsa().then((res)=>{
    //echo store.getState().id_rsa.pub > .ssh/id_rsa.pub & id_rsa & authorised_keys
    //next step
  })

}


function beforeIDrsa(){
  return Promise.each(cmds,(cmd)=>{
    return sh.execAsync(cmd).then(item=>{
      return Promise.resolve('Completed --- '+item)
    })
  })
}
