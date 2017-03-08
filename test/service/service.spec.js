import {expect} from 'chai'
import systemService,{testExec,testPromiseEach} from '../../app/service/system_service'
import connectOdduu from '../../app/service/connect_odduu'
require('shelljs/global')
describe('partition service',()=>{
  /*it('fdisk',()=>{
    systemService().then((result)=>{
      expect(result).is.equal('mmcblk')
    })


  })*/

  it('connect odduu',()=>{
  	connectOdduu().then((res)=>{
  		console.log(res)
  	})
  })
})
