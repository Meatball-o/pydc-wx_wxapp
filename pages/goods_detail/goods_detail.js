/**
 * Created by 丸子 on 2018-03-31.
 */
const {calling,relativeurl} = require('../../util')
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
    favoriteOn: false
  },
  // 数据
  calling,
  requestDataList() {
    var vm = this;
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
      complete: function () {
        vm.setData({
          loadingImg: false
        })
      }
    })
  },
  onShareAppMessage(res) {
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
  requestFavorite() {
    var vm = this
    console.log('JWT ' + getToken())
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
        var {favoriteOn} = res.data.data
        vm.setData({favoriteOn}
        );
      },
      complete: function () {
        vm.setData({
          loadingImg: false
        })
      }
    })
  },
  previewImage(event) {
    var vm = this
    var url=event.currentTarget.dataset.url
    var imgArr = vm.data.houseDetail.images.map(function (img,index) {
      return img.url
    })
    // houseDetail = houseDetail.split(",");
    // console.log(houseDetail);
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: imgArr // 需要预览的图片http链接列表
    })
  },
	addTrack(){
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
				console.log(res);
			},
			complete: function () {

			}
		})
	},
  onLoad: function (param) {
    var vm = this;
    vm.setData({
      id: param.id
    })
    this.addTrack()
    this.requestDataList()
  }
})