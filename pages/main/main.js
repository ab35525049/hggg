// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      text_1:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.setData({
          text_1:parseInt(this.options.id)
        })
  },
  add: function(){
        this.setData({
          text_1: this.data.text_1+1
        })
    this.setblack()
  },
  jian:function(){
        this.setData({
          text_1: this.data.text_1-1
        })
    this.setblack()
  },
  setblack:function(){
    // 获取页面栈的实例
    let router = getCurrentPages();
    // -1是当前页面。-2是上一级
    let router_p = router[router.length - 2];
    // 给上一级设置数据
    router_p.setData({
      // fly是上一级的数据，this。data。text——1是这一季
      fly: this.data.text_1
    });
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