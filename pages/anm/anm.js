Page({
  data: {
    animationData: {}//动画
  },
  onShow() {
    const animation = wx.createAnimation({//创建实例
      duration: 1000,//持续时间
      timingFunction: 'ease',//动画效果
    })

    this.animation = animation

    // animation.scale(2, 2).rotate(45).step()
    // animation.opacity(0).step()

    // this.setData({
    //   animationData: animation.export()
    // })

    setTimeout(function () {
      animation.translate(30).step()
      this.setData({
        animationData: animation.export() //动画导出
      })
    }.bind(this), 1000)
  },




  rotateAndScale() {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale() {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate() {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  }
})