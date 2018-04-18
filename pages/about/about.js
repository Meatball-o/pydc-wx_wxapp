//index.js
//获取应用实例
const {requestData} = require('../../util')

Page({
  requestData,
  onLoad(){
    this.requestData()
  }
})
