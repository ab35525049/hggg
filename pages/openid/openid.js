// const APP_ID = '';//输入小程序appid  
// const APP_SECRET = '';//输入小程序app_secret  
// var OPEN_ID = ''//储存获取到openid  
// var SESSION_KEY = ''//储存获取到session_key  
Page({
  data() {
    openid: ''
  },
  asd: function () {
    var that = this;
    wx.login({
      withCredentials: true,
      success: function (res) {
        var code = res.code
        // var appID = 'wx40dc20c7d4405904'
        // var secret = '224f548ffe52916043ec53284e79792d'
        if (code) {
          //发起网络请求
          wx.request({
            
            // url: `https://api.weixin.qq.com/sns/jscode2session?appid=${ appID }&secret=${ secret }&js_code=${ code }&grant_type=authorization_code`,
            // url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx40dc20c7d4405904&secret=224f548ffe52916043ec53284e79792d&js_code=' + code + '&grant_type=authorization_code',
            method: "GET",
            header: {
              'content-type': 'json'
            },
            success: function (res) {
              console.log(res)
              that.setData({
                openid: res.data.openid
              })
            }

          })
        } else {
          console.log("123213123")
        }
      }
    })
  }
})  
