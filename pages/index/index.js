//index.js
//获取应用实例
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
    var vm = this;
    wx.request({
      method: "GET",
      url: 'https://heiliuer.com/api/wxapp/house',
      dataType: 'json',
      data: {
        page: vm.data.currPage,
        total: vm.data.totalPage,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var dataList = (vm.data.dataList || []).concat(res.data.data.docs);
        vm.setData(
          {
            dataList: dataList,
            currPage: vm.data.currPage + 1,
          }
        );
      }
    })
  },
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
  },
  onShareAppMessage: function (res) {
    const vm=this;
    return {
      title: '蒲悦地产',
      path: '/pages/index/index',
      form:'menu',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  //下拉刷新
  onPullDownRefresh:function() {
    wx.showNavigationBarLoading()
    setTimeout(function() {
      // complete
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    },1500);
  },
  onLoad: function () {
    this.requestDataList()
  },
})
