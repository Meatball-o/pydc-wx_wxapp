//index.js
//获取应用实例
const {relativeurl} = require('../../util')
const app = getApp()

Page({
  data:{
    key:""
  },
  bindInput(event) {
    var vm=this
    setTimeout(function () {
      vm.setData({
        key:event.detail.value
      })
    })
  },
  bindconfirm(event){
    vm.setData({
      value:event.detail.value
    })
  }
})
