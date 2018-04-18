/**
 * Created by 丸子 on 2018-03-31.
 */
const {relativeurl} = require('../../util')

Page({
  data: {
    date: true,
    price: null
  },
  toggleListActive(event){
    const vm = this
    const {type} = event.currentTarget.dataset
    if (type == "date") {
      vm.setData({
        price: null,
        date: !vm.data.date
      })
    } else if (type == "price") {
      vm.setData({
        date: null,
        price: !vm.data.price
      })
    }
    vm._index_curPage = 1
    vm._index_loaded=false
    vm.requestSearch()
  },
  toggleListStyle(){
    var vm = this
    vm.setData({
      isList: !vm.data.isList
    })
  },
  tapName: function (event) {
  },
  requestSearch() {
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
    const {date, price} = vm.data
    wx.request({
      method: "GET",
      url: relativeurl + 'api/wxapp/search',
      dataType: 'json',
      data: {
        sort: {
          createTime: date,
          averagePrice: price
        },
        key: vm.data.key || '',
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
      key: param.key
    })
    vm.requestSearch()
  }
})
