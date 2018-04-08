/**
 * Created by 丸子 on 2018-03-31.
 */

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
    if (vm.data.loading || vm._index_loaded) {
      return
    }
    vm.setData({
      loading: true
    })
    vm._index_curPage = vm._index_curPage || 1
    wx.request({
      method: "GET",
      url: 'https://heiliuer.com/api/wxapp/house',
      dataType: 'json',
      data: {
        page: vm._index_curPage,
        limit: 10
      },
      header: {
      },
      success: function (res) {
        const {docs, page, pages} = res.data.data
        var dataList = (vm.data.dataList || []).concat(docs)
        if (page >= pages) {
          vm._index_loaded = true
          vm.setData({
            loaded: true
          })
        }
        vm.setData(
          {
            dataList: dataList,
            currPage: vm.data.currPage + 1,
          }
        );
        vm._index_curPage++
      }
    })
  },
  onShareAppMessage: function (res) {
    const vm = this;
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
  onLoad: function () {
    this.requestDataList()
  },
})
