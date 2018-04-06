/**
 * Created by 丸子 on 2018/4/7.
 */
function saveToken(token) {
  try {
    wx.setStorageSync('token', token)
  } catch (e) {
  }
}
module.exports.saveToken = saveToken
// 登录
module.exports.login = function () {
  wx.login({
    success: function (res) {
      if (res.code) {
        console.log(res);
        //发起网络请求
        wx.request({
          method: "POST",
          url: 'https://heiliuer.com/api/wxapp/session/login',
          data: {
            code: res.code,
          },
          success(res){
            const {token} = res.data.data
            saveToken(token)
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  });
}
// 获取存储token 查看用户是否登录
module.exports.getToken = function () {
  try {
    var token = (wx.getStorageSync('token') || '').trim()
    return token
  } catch (e) {
  }
  return ''
}