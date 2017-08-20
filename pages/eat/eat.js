
Page({
  data: {
    items: [],
    hasMore: true,
    showLoading: true,
    start: 0,
    storeList:[]
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  scroll: function (e) {
    //console.log(e)
  },
  onLoad: function () {
    var that = this;

    that.setData({
      hasMore: true,
    });
    var categoryId="599587ea4a7baa480b2ab5dc";
    this.fetchStoreList(categoryId);

  },
  fetchStoreList: function (categoryId) {
    let that = this
    let tableID = 821;


    var params = {
      tableID,
      category_id: categoryId
    }


    wx.BaaS.getRecordList(params).then((res) => {

      for (var i = 0; i < res.data.objects.length; i++) {
        res.data.objects[i].publishDate = new Date(res.data.objects[i].created_at * 1000).toLocaleString();
      }

      that.setData({
        storeList: res.data.objects,
      })
    }, (err) => {
      console.log(err);
    })
  },
  //滑动到底部
  scrolltolower: function () {
    var that = this
    // functions.getCity(function (city) {
    //   functions.fetchFilms.call(that, url, city, that.data.start, pageSize, function (data) { })
    // })
  },
  //查看详情
  viewDetail: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&type=ing'
    })
  }
})
