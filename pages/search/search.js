//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    focus:true,
    key:""
  },
  bindInput(event) {
    var vm=this
    setTimeout(function () {
      vm.setData({
        key:event.detail.value
      })
    })
  }
})
