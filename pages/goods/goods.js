/**
 * Created by 丸子 on 2018-03-31.
 */
Page({
  data:{
    selected:true,
    selected1:false,
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
  },
  selected:function(e){
    this.setData({
      selected1:false,
      selected:true
    })
  },
  selected1:function(e){
    this.setData({
      selected:false,
      selected1:true
    })
  },
})