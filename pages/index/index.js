//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indexNav: [
      {img:"", text: 'unique_5'},
      {img: 4, text: 'unique_4'},
      {img: 3, text: 'unique_3'},
      {img: 2, text: 'unique_2'},
      {img: 1, text: 'unique_1'},
      {img: 0, text: 'unique_0'},
      {img: 5, text: 'unique_5'},
      {img: 5, text: 'unique_5'},
    ],
    indexCon: [
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '塘水围一区',
        address:'民治地铁站',
        price:'9999'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '塘水围一区',
        address:'民治地铁站',
        price:'9999'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '塘水围一区',
        address:'民治地铁站',
        price:'9999'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '塘水围一区',
        address:'民治地铁站',
        price:'9999'
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  tapName: function(event) {
    console.log(event)
  }
})
