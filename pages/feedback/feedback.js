//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    evaContent: ''
  },
  onLoad: function () {
  },
  //事件
  textBlur: function (e) {
    if (e.detail && e.detail.value.length > 0) {
      if (e.detail.value.length < 12 || e.detail.value.length > 500) {
        //app.func.showToast('内容为12-500个字符','loading',1200)
      } else {
        this.setData({
          evaContent: e.detail.value
        })
      }
    } else {
      this.setData({
        evaContent: ''
      })
      evaData.evaContent = ''
      app.func.showToast('请输入投诉内容', 'loading', 1200)
    }
  },
  //提交事件
  // evaSubmit: function (eee) {
  //   var that = this
  //   //提交(自定义的get方法)
  //   app.func.req('http://localhost:1111/ffeva/complaint?content='
  //   '+this.data.evaContent),get,function(res){
  //   console.log(res)
  //   if (res.result === '1') {
  //     //跳转到首页
  //     app.func.showToast('提交成功', 'loading', 1200)
  //   } else {
  //     app.func.showToast('提交失败', 'loading', 1200)
  //   }
  // }

})