/**
 * Created by 丸子 on 2018/4/7.
 */
//接口请求路径
module.exports.relativeurl = 'https://heiliuer.com/pydc_test/'
const relativeurl = module.exports.relativeurl
module.exports.calling = function (phoneNum) {
  wx.makePhoneCall({
    phoneNumber: phoneNum,
    success: function () {
      console.log("拨打电话成功！")
    },
    fail: function () {
      console.log("拨打电话失败！")
    }
  })
}
module.exports.requestData = function () {
  var vm = this
  wx.showLoading({
    title: '加载中',
  })
  vm.setData({
    loading: true
  })
  wx.request({
    method: "GET",
    url: relativeurl + 'api/wxapp/about',
    dataType: 'json',
    header: {},
    success(res) {
      wx.hideLoading()
      if (res.statusCode == 200) {
        var requestData = res.data.data
        vm.setData({
            requestData
          }
        )
      } else {
        wx.showModal({
          title: '提示',
          content: '请求出错',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
            }
          }
        })
      }
    },
    fail() {
      wx.hideLoading()
      wx.showModal({
        title: '提示',
        content: '请求出错',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
    },
    complete() {
      wx.hideLoading()
    }
  })
}