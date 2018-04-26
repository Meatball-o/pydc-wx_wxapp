//index.js
//获取应用实例
const {calling, relativeurl} = require('../../util')

Page({
  data: {
    // 是否显示面板指示点
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
  },
  tapName(event) {
  },
  requestHomeData: function () {
    var vm = this
    wx.showLoading({
      title: "加载中"
    })
    wx.request({
      method: "GET",
      url: relativeurl + 'api/wxapp/home',
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
  ce(){
   console.log(111);
  },
  ce1(){
    console.log(222);
  },
  requestFavoriteList() {
    var vm = this
    //如果全局变量loading(该方法是否执行完毕) 或者是这个方法内的变量_index_loaded(是否最后一页)任意一个不为true的话，直接跳出该方法
    if (vm.data.loading || vm._index_loaded) {
      return
    }
    //赋值全部变量的loading为true
    vm.setData({
      loading: true
    })
    //当前页码值默认为1
    vm._index_curPage = vm._index_curPage || 1

    wx.request({
      method: "GET",
      url: relativeurl + 'api/wxapp/home/user_like',
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
            vm.setData({
              loaded: true
            })
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
      complete() {
        vm.setData({
          loading: false
        })
      }
    })
  },
  calling(){
    calling(this.data.pageData.contact.phone[0])
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
  onLoad() {
    this.requestHomeData()
  }
})
