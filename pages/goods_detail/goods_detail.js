/**
 * Created by 丸子 on 2018-03-31.
 */
const {calling, relativeurl} = require('../../util')
const {getToken} = require('../../login')
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    favoriteOn: false
  },
  // 数据
  calling(){
    calling(this.data.pageData.contact.phone[0])
  },
  requestDataList() {
    wx.showLoading({
      title: '加载中',
    })
    var vm = this
    var id = vm.data.id || "5ac73e97dd8fa225082fa9af"
    vm.setData({
      loading: true
    })
    wx.request({
      method: "GET",
      url: relativeurl + 'api/wxapp/house/' + id,
      dataType: 'json',
      header: {
        'Authorization': 'JWT ' + getToken()
      },
      success: function (res) {
        const houseDetail = res.data.data
        const {favoriteOn} = houseDetail
        vm.setData({
          houseDetail,
          favoriteOn
        })
        wx.setNavigationBarTitle({
          title: vm.data.houseDetail.name//页面标题为路由参数
        })
      },
      complete() {
        vm.setData({
          loadingImg: false
        })
        wx.hideLoading()
      }
    })
  },
  onShareAppMessage(res) {
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
  requestFavorite() {
    var vm = this
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      method: "POST",
      url: relativeurl + 'api/wxapp/favorite',
      dataType: 'json',
      header: {
        'Authorization': 'JWT ' + getToken()
      },
      data: {
        houseId: vm.data.id
      },
      success: function (res) {
        const {success, msg} = res.data
        if (!success) {
          wx.showModal({
            title: '提示',
            content: msg || '请求出错',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
              }
            }
          })
          return
        }
        var {favoriteOn} = res.data.data
        vm.setData({favoriteOn})
        if (favoriteOn) {
          wx.showToast({
            title: '收藏成功',
            icon: 'success',
            duration: 1200
          })
        } else {
          wx.showToast({
            title: '取消收藏成功',
            icon: 'success',
            duration: 1200
          })
        }
      },
      complete() {
        vm.setData({
          loadingImg: false
        })
        wx.hideLoading()
      }
    })
  },
  previewImage(event) {
    var vm = this
    var url = event.currentTarget.dataset.url
    var imgArr = vm.data.houseDetail.images.map(function (img, index) {
      return img.url
    })
    // houseDetail = houseDetail.split(",")
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: imgArr // 需要预览的图片http链接列表
    })
  },
  addTrack(){
    wx.showLoading({
      title: '加载中',
    })
    var vm = this
    wx.request({
      method: "POST",
      url: relativeurl + 'api/wxapp/user_track',
      dataType: 'json',
      header: {
        'Authorization': 'JWT ' + getToken()
      },
      data: {
        houseId: vm.data.id
      },
      success: function (res) {
      },
      complete(){
        wx.hideLoading()
      }
    })
  },
  onLoad(param) {
    var vm = this
    vm.setData({
      id: param.id
    })
    this.addTrack()
    this.requestDataList()
  }
})