/**
 * Created by 丸子 on 2018-03-31.
 */
Page({
  data: {
    paging: 0,
    currPage: 1,//页码
    totalPage: 5,// 总页码
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  requestDataList() {
    var vm = this;
    var id=vm.data.id
    wx.request({
      method: "GET",
      url: 'https://heiliuer.com/api/wxapp/house/'+id,
      dataType: 'json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var houseDetail = res.data.data;
        vm.setData(
          {
            houseDetail
          }
        );
      }
    })
  },
  onLoad: function (param) {
    var vm=this;
    vm.setData({
      id:param.id
    })
    this.requestDataList()

  },
})