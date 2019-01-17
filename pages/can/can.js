// pages/can/can.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    can_title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      can_title: this.options.can_t
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const ctx = wx.createCanvasContext('canvas_id');
    ctx.beginPath()
    ctx.setLineWidth(5)
    ctx.setStrokeStyle('red')
    ctx.moveTo(40, 40)
    ctx.lineTo(280, 40)
    ctx.lineTo(160, 240)
    ctx.lineTo(40,40)
    ctx.stroke()
    ctx.draw()

  },
  ctx_path:function(x,y,x1,y1){
    const ctx = wx.createCanvasContext('canvas_id');
    ctx.beginPath()
    ctx.setLineWidth(5)
    ctx.setStrokeStyle('red')
    ctx.moveTo(x, y)
    var timer = setInterval(function(){
      var z = x1-x;
      var v = y1-y;
      x+=z/10;
      y+=v/10;
      ctx.lineTo(x,y)
      ctx.stroke()
      ctx.draw()

    },10)
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