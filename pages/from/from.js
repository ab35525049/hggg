Page({

  data: {



  },

  formSubmit: function (e) {

    // if (e.detail.value.mobile.length == 0 || e.detail.value.password.length == 0) {

    //   wx.showToast({

    //     title: '手机号码或密码不得为空!',

    //     icon: 'loading',

    //     duration: 1500

    //   })

    //   setTimeout(function () {

    //     wx.hideToast()

    //   }, 2000)

    // } else if (e.detail.value.mobile.length != 11) {

    //   wx.showToast({

    //     title: '请输入11位手机号码!',

    //     icon: 'loading',

    //     duration: 1500

    //   })

    //   setTimeout(function () {

    //     wx.hideToast()

    //   }, 2000)

    // } else if (e.detail.value.password.length < 6 || e.detail.value.password.length > 20) {

    //   wx.showToast({

    //     title: '请输入6-20密码!',

    //     icon: 'loading',

    //     duration: 1500

    //   })

    //   setTimeout(function () {

    //     wx.hideToast()

    //   }, 2000)

    // } else if (e.detail.value.password != e.detail.value.repassword) {

    //   wx.showToast({

    //     title: '两次密码输入不一致!',

    //     icon: 'loading',

    //     duration: 1500

    //   })

    //   setTimeout(function () {

    //     wx.hideToast()

    //   }, 2000)

    // } else {

    wx.request({

      url: 'https://shop.yunapply.com/home/Login/register',
 
      header: {

        "Content-Type": "application/x-www-form-urlencoded"

      },

      method: "POST",

      data: { mobile: e.detail.value.mobile, password: e.detail.value.password },

      success: function (res) {

        if (res.data.status == 0) {

          wx.showToast({

            title: res.data.info,

            icon: 'loading',

            duration: 1500

          })

        } else {

          wx.showToast({

            title: res.data.info,//这里打印出登录成功

            icon: 'success',

            duration: 1000

          })

        }

      }

    })

  }

// },

})