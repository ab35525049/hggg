// pages/picker/pickerr/pickerr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    r_arr: [['我', '你', '她', '他'], ['是', '不是', '可能是'], ['人', '鬼']],
    r_index:[0,0,0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  ok: function (e) {
    console.log(e)
    console.log('99')
    this.setData({
      r_index: [e.detail.value[0], e.detail.value[1], e.detail.value[2]]
    })
  },
  _ok: function (e) {
    console.log(e)
    console.log('123')
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