//index.js
const {getToken} = require("../../login.js")
//获取应用实例
const {relativeurl} = require('../../util')

var app = getApp()
Page({
  data: {
    con: '',
    wx:'',
    email:''
  },
  onLoad: function () {
  },
  //事件
  bindInputCon(event) {
    var vm=this
    setTimeout(function () {
      vm.setData({
        con:event.detail.value
      })
    })
  },
  bindInputEmail(event) {
    var vm=this
    setTimeout(function () {
      vm.setData({
        email:event.detail.value
      })
    })
  },
  bindInputWx(event) {
    var vm=this
    setTimeout(function () {
      vm.setData({
        wx:event.detail.value
      })
    })
  },
  submitFeedback() {
    var vm = this
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      method: "GET",
      url: relativeurl + 'api/wxapp/feedback',
      dataType: 'json',
      data: {
        con:vm.data.con,
        wx:vm.data.wx,
        email:vm.data.email,
      },
      header: {
        'Authorization': 'JWT ' + getToken()
      },
      success(res) {
        const {success,msg}=res.data
        if(success){
          wx.showModal({
            title: '提示',
            cancelText:'回首页',
            content: '反馈成功，感谢您的反馈！',
            success: function(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                wx.navigateBack({
                  delta: 2
                })
              }
            }
          })
        }else{
          wx.showModal({
            title: '提示',
            content: msg||'请求出错',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
              }
            }
          })
        }
      },
      complete(){
        wx.hideLoading()
      }
    })
  },
})