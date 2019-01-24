//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      withCredentials: true,
      success: res => {
        var code = res.code
        console.log(code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
          wx: wx.request({
            url: 'https://wyjk.etshfw.cn/test/getcode.php',
            data: { 
              code: code,
              appID: 'wx40dc20c7d4405904',
              secret: '224f548ffe52916043ec53284e79792d'
            },
            header: {
              'content-type': 'application/json'
            },
            method:'GET',
            success: function (res) {
              // console.log(JSON.parse(res.data))
              console.log(res)
              console.log(res.data)
            },
            fail: function (res) {},
            complete: function (res) { },
          })     
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
                console.log(this.globalData.userInfo)
              }

            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
  }
})