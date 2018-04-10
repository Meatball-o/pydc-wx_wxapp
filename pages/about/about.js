//index.js
//获取应用实例
const {relativeurl} = require('../../util')
const app = getApp()

Page({
	data: {},
	onLoad(){
		wx.request({
			method: "GET",
			url: relativeurl + 'api/wxapp/about',
			dataType: 'json',
			data: {},
			header: {},
			success(res) {
				if (res.statusCode == 200) {
					const {address, contact, desc,name} = res.data.data

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
