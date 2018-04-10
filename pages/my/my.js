var {getToken} = require("../../login")
var {relativeurl} = require("../../util")
Page({
  data: {
  },
  onShareAppMessage: function (res) {
    const vm = this;
    return {
      title: '蒲悦地产',
      path: '/pages/index/index',
      form: 'menu',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  requestUserInfo(res) {
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
      complete: function () {
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
        //console.log(res);
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