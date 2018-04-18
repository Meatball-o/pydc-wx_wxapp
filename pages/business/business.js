//index.js
//获取应用实例
const {calling, requestData} = require('../../util')


Page({
  requestData,
  calling(){
    calling(this.data.pageData.contact.phone[0])
  },
  onLoad(){
    this.requestData()
  }
})