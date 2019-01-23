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
    map:'地图测试',
    from_:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  url_text_6:function(){
    var _this = this;
    var math = Math.floor(Math.random() * 1000)
    if(math>=500){
      _this.setData({
        from_:'../from/from'
      })
    }else{
      _this.setData({
        from_: '../from1/from1'
      })
    }
  },
  onLoad: function (options) {

    this.url_text_6()
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
    withCredentials: true,
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  btn_user: function (e){
    var  _this = this
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://jz.mlp-hn.com/jiekou/info.php',
    //         data: {code: res.code},
    //         header:{
    //           'content-type':'application/json' 
    //         },
    //         success:function(res){
    //           _this.setData({
    //             fafd:JSON.parse(res.data)
    //           })
    //           console.log(JSON.parse(res.data))
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
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
