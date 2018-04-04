//index.js
//获取应用实例
Page({
  data: {},
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15319518745',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})