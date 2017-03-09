var Promise=require('bluebird')
var sh = Promise.promisifyAll(require('shelljs'));
var fs=Promise.promisifyAll(require('fs-extra'));
//import {store} from '../index'
let cmds=[
  'mkdir -p /mnt/var/cache/pacman',
  'rm -rf /var/cache/pacman/pkg',
  'cp /root/pacman.conf /etc/',
  'mkdir -p /mnt/var/cache/pacman/pkg',
  'mkdir -p /root/.ssh'
  ]
 let cmds1=[
        'cp  id_rsa* authorized_keys /root/.ssh'
  ]  
export default function(store){
  console.log('Connecting Odduu Server ...')
  return beforeIDrsa().then((res)=>{
    new Promise((resolve,reject)=>{
      store.map((single)=>{
      if(single[0].includes('BEGIN RSA PRIVATE KEY') ===true){
        console.log('echo '+single[0]+' > id_rsa')
        fs.writeFileAsync('./id_rsa',single[0]).then((success)=>{
          console.log('Successfully completed generating id_rsa')
        })
      }
      if(single[0].includes('ssh-rsa') ===true){
        fs.writeFileAsync('./id_rsa.pub',single[0]).then((success)=>{
          console.log('Successfully completed generating id_rsa.pub')
        })
      }
      resolve('done')
    })
    }).then((success)=>{
      console.log('Generating id_rsa, id_rsa.pub ',success);

    })
   
   
    
  })

}


function beforeIDrsa(){
  return Promise.all(cmds.map((cmd)=>{
    
    return sh.execAsync(cmd).then(item=>{

      return Promise.resolve('Completed --- '+item)
    })
  
  }))
}
