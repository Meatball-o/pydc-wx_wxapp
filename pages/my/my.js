Page({
  data: {},
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
})