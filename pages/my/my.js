var {getToken} = require("../../login")
var {relativeurl} = require("../../util")
Page({
  data: {
  },
  onShareAppMessage: function (res) {
    wx.showLoading({
      title: '加载中',
    })
    const vm = this
    return {
      title: '蒲悦地产',
      path: '/pages/index/index',
      form: 'menu',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      },
      complete(){
        wx.hideLoading()
      }
    }
  },
  requestUserInfo(res) {
    wx.showLoading({
      title: '加载中',
    })
    var vm = this
    wx.request({
      method: "PUT",
      url: relativeurl + 'api/wxapp/wxuser',
      dataType: 'json',
      header: {
        'Authorization': 'JWT ' + getToken()
      },
      data: {
        userInfo:res.userInfo
      },
      success: function (res) {
      },
      complete(){
        wx.hideLoading()
      }
    })
  },
  getUserInfo:function () {
    var vm=this
    wx.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        var _res=res
        vm.setData({
          userInfo:res.userInfo
        })
        vm.requestUserInfo(res)
      }
    })
  },
  onLoad:function () {
    this.getUserInfo()
  }
})