/**
 * Created by 丸子 on 2018/4/7.
 */
module.exports.calling = function (phoneNum) {
	wx.makePhoneCall({
		phoneNumber: phoneNum,
		success: function () {
			console.log("拨打电话成功！")
		},
		fail: function () {
			console.log("拨打电话失败！")
		}
	})
}
//接口请求路径
module.exports.relativeurl = 'https://heiliuer.com/pydc_test/'