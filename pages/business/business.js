//index.js
//获取应用实例
const {calling,relativeurl} = require('../../util')

Page({
  data: {},
  calling(){
	  calling(this.data.pageData.contact.phone[0])
  },
	onLoad(){
        const vm = this;
		wx.request({
			method: "GET",
			url: relativeurl + 'api/wxapp/about',
			dataType: 'json',
			data: {},
			header: {},
			success(res) {
				if (res.statusCode == 200) {
				  vm.setData({
						pageData:res.data.data
					});

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

			}
		})
	}
})