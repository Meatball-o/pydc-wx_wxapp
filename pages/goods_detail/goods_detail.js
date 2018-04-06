/**
 * Created by 丸子 on 2018-03-31.
 */
const {getToken} = require('../../login')
Page({
  data: {
    paging: 0,
    currPage: 1,//页码
    totalPage: 5,// 总页码
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    favoriteOn:false
  },
  // 数据
  requestDataList() {
    var vm = this;
    var id=vm.data.id||"5ac73e97dd8fa225082fa9af"
    vm.setData({
      loading: true
    })
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
      },
      complete: function () {
        vm.setData({
          loadingImg: false
        })
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
  requestFavorite() {
    var vm = this;
    wx.request({
      method: "POST",
      url: 'https://heiliuer.com/api/wxapp/favorite',
      dataType: 'json',
      header: {
        'content-type': 'application/json',// 默认值
        'Authorization': 'JWT '+getToken()// 默认值
      },
      data:{
        houseId:vm.data.id
      },
      success: function (res) {
        var {favoriteOn} = res.data.data
        vm.setData(
          {
            favoriteOn
          }
        );
      },
      complete: function () {
        vm.setData({
          loadingImg: false
        })
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