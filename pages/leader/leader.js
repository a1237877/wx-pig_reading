//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    authors: [],
    // id: ''
  },
  onShow: function() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    setTimeout(function () {
      wx.hideToast()
    }, 500);
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca466ee13e4cf68f04a4308/wzx',
      success: function (res) {
        console.log(res.data.data.index);
        console.log(res.data.data.articleInfo);
        
        that.setData({
          authors: res.data.data.index,
          // id: res.data.data.articleInfo
        })
      }
    })
  },
  onshow(e){
    this.setData({
      isTap:false
    })
  },
  toSearch(e){
    this.setData({
      isTap:true
    });
    wx.navigateTo({
      url:"../search/seaech"
    })
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

})
