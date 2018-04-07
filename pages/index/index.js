//index.js
//获取应用实例
const {calling} = require('../../util')
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
  },
  tapName(event) {
    console.log(event)
  },
  //下拉刷新
  // onPullDownRefresh: function () {
  //   wx.showNavigationBarLoading()
  // },
  requestHomeData: function () {
    var vm = this
    wx.showLoading({
      title: "加载中"
    })
    wx.request({
      method: "GET",
      url: 'https://heiliuer.com/api/wxapp/home',
      dataType: 'json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideLoading()
        if (res.statusCode == 200) {
          var homeData = res.data.data
          vm.setData({
              homeData
            }
          )
        } else {
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
      }
    })
  },
  requestFavoriteList: function () {
    var vm = this
    if (vm.data.loading || vm._index_loaded) {
      return
    }
    vm.setData({
      loading: true
    })
    vm._index_curPage = vm._index_curPage || 1
    wx.request({
      method: "GET",
      url: 'https://heiliuer.com/api/wxapp/home/user_like',
      dataType: 'json',
      data: {
        page: vm._index_curPage,
        limit: 10
      },
      header: {},
      success(res) {
        if (res.statusCode == 200) {
          const {docs, page, pages} = res.data.data
          const favoriteList = (vm.data.favoriteList || []).concat(docs)
          if (page >= pages) {
            vm._index_loaded = true
          }
          vm.setData({favoriteList})
          vm._index_curPage++
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
      complete: function () {
        vm.setData({
          loading: false
        })
      }
    })
  },
  calling,
  onShareAppMessage(res) {
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
      }
    }
  },
  onLoad() {
    this.requestFavoriteList()
    this.requestHomeData()
  }
})
