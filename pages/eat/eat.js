
Page({
  data: {
    items: [],
    hasMore: true,
    showLoading: true,
    start: 0
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  scroll: function (e) {
    //console.log(e)
  },
  onLoad: function () {
    var that = this;
    var items = [
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496473232538.png",
        "title": "一点点奶茶",
        "rating": 5,
        "address": "文体中心影城304-1",
        "telephone": "Comming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496539341490.jpg",
        "title": "星巴克",
        "rating": 5,
        "address": "文体中心图书馆316",
        "telephone": "Comming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496539344152.png",
        "title": "七分甜",
        "rating": 5,
        "address": "文体中心图书馆312",
        "telephone": "Comming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496473231388.jpg",
        "title": "无邪日式甜品",
        "rating": 5,
        "address": "文体中心图书馆314",
        "telephone": "Comming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496473497001.jpg",
        "title": "抓鱼吃",
        "rating": 5,
        "address": "健身房配套101-103",
        "telephone": "Comming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496537813149.png",
        "title": "宴遇四月天",
        "rating": 3,
        "address": "文体中心A102-103",
        "telephone": "Coming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496537832348.jpg",
        "title": "汉堡王",
        "rating": 3,
        "address": "E108-109",
        "telephone": "Coming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496538618255.jpg",
        "title": "杰克逊牛排工坊",
        "rating": 3,
        "address": "E102-221",
        "telephone": "Coming Soon."
      }
      ,
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496539095199.png",
        "title": "酒窝甜品",
        "rating": 3,
        "address": "文体中心影院305",
        "telephone": "Coming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496539144146.png",
        "title": "继光香香鸡",
        "rating": 3,
        "address": "文体中心影城304-2",
        "telephone": "Coming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496539205241.png",
        "title": "好人民间小吃",
        "rating": 3,
        "address": "文体中心影城310",
        "telephone": "Coming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496539253368.png",
        "title": "陈先生的肉肉",
        "rating": 3,
        "address": "文体中心影城308",
        "telephone": "Coming Soon."
      },
      {
        "imageUrl": "https://gz.bcebos.com//kejicheng/2017/1496544829471.png",
        "title": "重庆桥头火锅",
        "rating": 3,
        "address": "文体中心B101-102",
        "telephone": "Coming Soon."
      }
    ];
    that.setData({
      hasMore: true,
      items: items
    });

  },
  //滑动到底部
  scrolltolower: function () {
    var that = this
    functions.getCity(function (city) {
      functions.fetchFilms.call(that, url, city, that.data.start, pageSize, function (data) { })
    })
  },
  //查看详情
  viewDetail: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&type=ing'
    })
  }
})
