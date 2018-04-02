//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    paging: 0,
    currPage: 1,//页码
    totalPage: 5,// 总页码
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indexNav: [
      {img: "", text: 'unique_5'},
      {img: 4, text: 'unique_4'},
      {img: 3, text: 'unique_3'},
      {img: 2, text: 'unique_2'},
      {img: 1, text: 'unique_1'},
      {img: 0, text: 'unique_0'},
      {img: 5, text: 'unique_5'},
      {img: 5, text: 'unique_5'},
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  tapName: function (event) {
    console.log(event)
  },
  requestDataList: function () {
    var vm = this;
    wx.request({
      method: "GET",
      url: 'http://pydc.test.heiliuer.com/api/wxapp/house',
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
  onLoad: function () {
    this.requestDataList()

  },
})
