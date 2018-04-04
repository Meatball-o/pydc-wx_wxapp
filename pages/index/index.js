//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    paging: 0,
    currPage: 1,//页码
    totalPage: 5,// 总页码
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indexNav: [
      {img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522822694254&di=cf56e44c9bfd752b858cc2cc87a74da3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df17ca3bf3ffae6cd18b9a32267da6551%2F7a899e510fb30f2424f0ae8bc295d143ac4b03cb.jpg", text: '南山区'},
      {img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522822694254&di=cf56e44c9bfd752b858cc2cc87a74da3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df17ca3bf3ffae6cd18b9a32267da6551%2F7a899e510fb30f2424f0ae8bc295d143ac4b03cb.jpg", text: '南山区'},
      {img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522822694254&di=cf56e44c9bfd752b858cc2cc87a74da3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df17ca3bf3ffae6cd18b9a32267da6551%2F7a899e510fb30f2424f0ae8bc295d143ac4b03cb.jpg", text: '南山区'},
      {img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522822694254&di=cf56e44c9bfd752b858cc2cc87a74da3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df17ca3bf3ffae6cd18b9a32267da6551%2F7a899e510fb30f2424f0ae8bc295d143ac4b03cb.jpg", text: '南山区'},
      {img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522822694254&di=cf56e44c9bfd752b858cc2cc87a74da3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df17ca3bf3ffae6cd18b9a32267da6551%2F7a899e510fb30f2424f0ae8bc295d143ac4b03cb.jpg", text: '南山区'},
      {img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522822694254&di=cf56e44c9bfd752b858cc2cc87a74da3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df17ca3bf3ffae6cd18b9a32267da6551%2F7a899e510fb30f2424f0ae8bc295d143ac4b03cb.jpg", text: '南山区'},
      {img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522822694254&di=cf56e44c9bfd752b858cc2cc87a74da3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df17ca3bf3ffae6cd18b9a32267da6551%2F7a899e510fb30f2424f0ae8bc295d143ac4b03cb.jpg", text: '南山区'},
      {img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522822694254&di=cf56e44c9bfd752b858cc2cc87a74da3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df17ca3bf3ffae6cd18b9a32267da6551%2F7a899e510fb30f2424f0ae8bc295d143ac4b03cb.jpg", text: '南山区'},
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  tapName: function (event) {
    console.log(event)
  },
  requestDataList: function () {
    var vm = this;
    wx.request({
      method: "GET",
      url: 'https://heiliuer.com/api/wxapp/house',
      dataType: 'json',
      data: {
        page: vm.data.currPage,
        total: vm.data.totalPage,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var dataList = (vm.data.dataList || []).concat(res.data.data.docs);
        vm.setData(
          {
            dataList: dataList,
            currPage: vm.data.currPage + 1,
          }
        );
      }
    })
  },
  onLoad: function () {
    this.requestDataList()

  },
})
