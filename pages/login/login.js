//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 遮罩层
    get_user: true,
    // 动画
    animation_user: {}
  },
  get_user_: function () {
    // 创建动画是咧
    const animation = wx.createAnimation({
      duration: 3000,//动画持续时间
      timingFunction: "linear",//效果
    })
    this.animation = animation,
      // 透明度变0 step()结束
      animation.opacity(0).step()
    this.setData({
      // export导出到
      animation_user: animation.export(),
    })
    // 动画结束后关闭遮罩层
    setTimeout(function () {
      this.setData({
        get_user: false,
      })
      // bind(this)
    }.bind(this), 3000)
    wx.switchTab({
      url: '../index/index',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
    })
  },
  //事件处理函数
  bindViewTap: function () {
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
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    withCredentials: true,
      console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  btn_user: function (e) {
    var _this = this
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
    if (this.data.boor) {
      this.setData({
        boor: false,
        boorr: '现在是false'
      })
      console.log(this.data.boor)
    } else {
      this.setData({
        boor: true,
        boorr: '现在是true'
      })
      console.log(this.data.boor)
    }
  },

})
