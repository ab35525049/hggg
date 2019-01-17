//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    btn:'点我',
    btn_user_name:'点击我获取自己的名字',
    boor:true,
    boorr:'现在是true',
    fly:'点我起飞',
    can:'画布测试',
    map:'地图测试'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  btn_user:function(e){
    console.log(e.detail.userInfo)
    console.log(e.detail.userInfo.city)
    console.log(e.detail.userInfo.nickName)
    this.setData({
      btn_user_name: e.detail.userInfo.nickName
    })
  },
  url_text: function () {
    if(this.data.boor){
      this.setData({
        boor:false,
        boorr:'现在是false'
      })
      console.log(this.data.boor)
    }else{
      this.setData({
        boor: true,
        boorr: '现在是true'
      })
      console.log(this.data.boor)
    }
  },

})
