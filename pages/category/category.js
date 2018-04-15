/**
 * Created by 丸子 on 2018-03-31.
 */
const {relativeurl} = require('../../util')
const app = getApp()

Page({
  data: {
    paging: 0,
  },
  toggleListStyle(){
    var vm=this
    vm.setData({
      isList:!vm.data.isList
    })
  },
  tapName: function (event) {
  },
  requestSearch() {
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
      url: relativeurl + 'api/wxapp/search',
      dataType: 'json',
      data: {
        categoryId: vm.data.id,
        page: vm._index_curPage,
        limit: 10
      },
      header: {},
      success(res) {
        if (res.statusCode == 200) {
          const {docs, page, pages} = res.data.data
          const goodsList = (vm.data.goodsList || []).concat(docs)
          if (page >= pages) {
            vm._index_loaded = true
            vm.setData({
              loaded: true
            })
          }
          vm.setData({goodsList})
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
      },
    })
  },
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
  onLoad(param) {
    var vm = this
    vm.setData({
      id:param.id
    })
    this.requestSearch()
  }
})
