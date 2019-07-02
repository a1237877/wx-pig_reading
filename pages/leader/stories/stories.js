// pages/leader/stories/stories.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorInfo:[],
    article:[],
    index:[],
    msg:'关注',
    isfollow:true,
    src:'../../../assets/images/like.png', 
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5ca466ee13e4cf68f04a4308/wzx',
      success:function(res){
        console.log(res.data.data.index[options.id])
        that.setData({
          authorInfo:res.data.data.index[options.id].articleInfo,
          article: res.data.data.index[options.id].articleInfo,

        })
      }
    })
  },
  like(){
    
   
      this.setData({
        src:'../../../assets/images/like2.png',
       
      })
   
    
  },
  
  follow(){
    var isfollow = this.data.isfollow
    if(isfollow){
      this.setData({
        msg:'取消',
        isfollow:false
      })
    }else{
      this.setData({
        msg:'关注'
      })
    }
   
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