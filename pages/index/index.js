//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎使用小程序',
    userInfo: {},
    markers: [{
      iconPath: "/images/kejicheng.png",
      id: 0,
      latitude: 31.336420,
      longitude: 120.422200,
      width: 50,
      height: 50,
    }],
    controls:[],
    polyline:[],


    imgUrls: [
      'https://gz.bcebos.com/kejicheng/2017/1496755294486.jpg',
      'https://gz.bcebos.com/kejicheng/2017/1496755296067.jpg',
      'https://gz.bcebos.com/kejicheng/2017/1496755296552.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    duration:500
  }
  
})
