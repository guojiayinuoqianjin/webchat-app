
Page({
  data: {
    items: [],
    hasMore: true,
    showLoading: true,
    start: 0
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '玩乐店铺列表',
      path: '/pages/eat/eat',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 2000
        });
      },
      fail: function (res) {
        wx.showToast({
          title: '分享失败，再次分享',
          icon: 'success',
          duration: 2000
        });
      },
      complete:function(res){
        console.log("用户转发了");
      }
    }
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  scroll: function (e) {
    //console.log(e)
  },
  onLoad: function () {
    var that = this;
    var items=[
      {
        "imageUrl":"https://gz.bcebos.com/kejicheng/2017/1496473382004.png",
        "title":"球动力",
        "rating":5,
        "address":"111-115",
        "telephone":"Coming Soon"
      },
      {
        "imageUrl":"https://gz.bcebos.com/kejicheng/2017/1496755666421.png",
        "title":"英派斯健身俱乐部",
        "rating":5,
        "address":"科研路绿地中央广场",
        "telephone":" 0512-66800906"
      }
    ];
    that.setData({
      hasMore:true,
      items:items
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