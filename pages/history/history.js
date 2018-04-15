//index.js
//获取应用实例
const {relativeurl} = require('../../util')
const {getToken} = require('../../login')
const app = getApp()
Page({
  data: {
    paging: 0,
    currPage: 1,//页码
    totalPage: 5,// 总页码
  },
  tapName: function (event) {
  },
  requestDataList: function () {
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
      url: relativeurl + 'api/wxapp/user_track',
      dataType: 'json',
      header: {
        'Authorization': 'JWT ' + getToken()
      },
      data: {
        page: vm._index_curPage,
        limit: 10
      },
      success(res) {
        if (res.statusCode == 200) {
          const {docs, page, pages} = res.data.data
          const dataList = (vm.data.dataList || []).concat(docs)
          if (page >= pages) {
            vm._index_loaded = true
            vm.setData({
              loaded: true
            })
          }
          vm.setData({dataList})
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
  onLoad: function () {
    this.requestDataList()
  },
})
