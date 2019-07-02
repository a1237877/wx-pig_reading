// pages/bookdesk/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTap:false,
    indicator_dots:true,
    autoplay:true,
    interval:2000,
    duration:1000,
    index_slides:[],
    nav_data:[],
    section:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5ca466ee13e4cf68f04a4308/wzx',
      success:function(res){
        
        that.setData({
          index_slides:res.data.data.index_slides,
          nav_data:res.data.data.nav_data,
          section:res.data.data.section
        })
      }
    })
  },
  toSearch(e){
    this.setData({
      isTap:true
    });
    wx.navigateTo({
      url: "search/search"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})