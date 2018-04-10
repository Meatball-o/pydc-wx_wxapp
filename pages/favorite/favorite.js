//index.js
//获取应用实例
const {relativeurl} = require('../../util')
const app = getApp()

Page({
  data: {
    paging: 0,
    currPage: 1,//页码
    totalPage: 5,// 总页码
  },
  tapName: function (event) {
    console.log(event)
  },
  requestDataList: function () {
    var vm = this
    wx.request({
      method: "GET",
      url: relativeurl + 'api/wxapp/house',
      dataType: 'json',
      data: {
        page: vm.data.currPage,
        total: vm.data.totalPage,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var dataList = (vm.data.dataList || []).concat(res.data.data.docs)
        vm.setData(
          {
            dataList: dataList,
            currPage: vm.data.currPage + 1,
          }
        )
      }
    })
  },
  onLoad: function () {
    this.requestDataList()
  },
})
