import {spawn} from 'child_process'
//require('shelljs/global')
var Promise=require('bluebird')
var sh = Promise.promisifyAll(require('shelljs'));

let cmds=[
    'pacman -S parted --noconfirm',
    'parted -s /dev/mmcblk0 p',
    'parted -s /dev/mmcblk0 mklabel gpt',
    'parted -s /dev/mmcblk0 mkpart ESP fat32 1MiB 513MiB',
    'parted -s /dev/mmcblk0 set 1 boot on',
    'parted -s /dev/mmcblk0 mkpart primary ext4 513MiB 20GiB',
    'parted -s /dev/mmcblk0 mkpart primary linux-swap 20GiB 24GiB',
    'parted -s /dev/mmcblk0 p',
    'mkfs.fat -F32 /dev/mmcblk0p1',
    'mkfs.ext4 -F /dev/mmcblk0p2',
    'mkswap /dev/mmcblk0p3',
    'swapon /dev/mmcblk0p3']

export default function(){
    let a=checkParition().then((result)=>{
            switch(result){
              case 'mmcblk':
                return mmcBlk();
              case 'sda':
                return sda();
            }
          });
    return a;
}
let checkParition=()=>{
  return new Promise((resolve,reject)=>{
    const grep=spawn('grep',['/dev/'])
    const fDisk=spawn('fdisk',['-l'])

    grep.stdout.setEncoding('utf8');
    fDisk.stdout.pipe(grep.stdin)
    grep.stdout.on('data',(data)=>{
      if(data.split('/dev/mmcblk0').length > 0){
          resolve('mmcblk')
      }else{
        resolve('sda')
      }


    })
    grep.stderr.on('data',(data)=>{
      console.log('stdErr',data)
      reject('Error in checking partition')
    })
  })
}

let mmcBlk=()=>{
  return Promise.each(cmds,(cmd)=>{
    return sh.execAsync(cmd).then(item=>{
      return Promise.resolve('Completed --- '+item)
    })
  })
}
let sda=()=>{
  return new Promise((resolve,reject)=>{
    resolve('in sda')
  })
}

//[TEST CASE]
export const testExec=()=>{
  return sh.execAsync('ls').then(function (argument) {
    console.log(argument);
  })
}
export const testPromiseEach=()=>{
  let t=['ls', 'fdisk -l']
  return Promise.map(t,function(cmd){
    return sh.execAsync(cmd).then(function(res){
      return Promise.resolve('Completed --- '+res);
    })
  })
}



/*let exe=exec('parted -s /dev/mmcblk0 p');
    exe.stdout.on('data',(data)=>{
      return new Promise((resolve,reject)=>{
        let exe1=exec('parted -s /dev/mmcblk0 mklabel gpt');
        exe1.stdout.on('data',(data1)=>{
            return new Promise((resolve,reject)=>{
            let exe2=exec('parted -s /dev/mmcblk0 mkpart ESP fat32 1MiB 513MiB');
            exe2.stdout.on('data',(data2)=>{
                let exe3=exec('parted -s /dev/mmcblk0 mklabel gpt');
                exe3.stdout.on('data',(data3)=>{

                })
            })
        })
      })
    })
  })*/
