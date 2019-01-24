Page({
  data: {
    markers: [],
    hasMarkers: false,
    map_t: '',
    map_: {},
    map_dis: 0,
    mp: '0',
    laa: '',
    lnn: '',
    map_diss: "选择要去的地方"
  },
  go_tap: function () {
    if (!(this.data.map_dis == 1)) {
      this.setData({
        map_dis: 1,
        map_diss: '再次点击关闭'
      })
    } else {
      this.setData({
        map_dis: 0,
        map_diss: '选择要去的地方'
      })
    }

    // let latitude = 23.099994;
    // let longitude = 113.324520;
    // let name = '腾讯';
    // let address = '腾讯微信总部';
    // wx.getLocation({//获取当前经纬度
    //   type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
    //   success: function (res) {
    //     wx.openLocation({//​使用微信内置地图查看位置。
    //       latitude: latitude,//要去的纬度-地址
    //       longitude: longitude,//要去的经度-地址
    //       name: name,
    //       address: address
    //     })
    //   }
    // })
  },
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success:(res)=>{
        let laa = Number(res.latitude);
        let lnn = Number(res.longitude);
        this.setData({
          laa: laa,
          lnn: lnn,
        })
      },
    });

    this.setData({
      map_t: this.options.map_t,
    })
    wx.request({
      // url: 'http://localhost:3000/127',
      url: 'https://jz.mlp-hn.com/jiekou/map_.php',
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // console.log(res.data.data)
        var markers = [];
        for (let i = 0; i < res.data.length; i++) {
          // console.log(res.data.data[i].id)
          // console.log(res.data.data[i].name)
          // console.log(res.data.data[i].longitude)
          // console.log(res.data.data[i].latitude)
          var markerss = this.createMarker(res.data[i])
          markers.push(markerss)
          // console.log('321', markers)
        }
        this.setData({
          map_: res.data,
          markers: markers
        })
        // console.log('999', this.data.map_)
      }
    })
    // console.log('9991', this.data.map_)
  },
  createMarker(point) {
    let latitude = point.lat;
    let longitude = point.lng;
    let marker = {
      // iconPath: "/resources/others.png",
      id: point.id || 0,
      name: point.storename || '',
      latitude: latitude,
      longitude: longitude,
      width: 50,
      height: 50,
      name: point.storename,
      scale: '30',
      address: point.address,
      callout: {
        content: point.storename,
        color: "#DDDFFG",
        fontSize: "16",
        bgColor: "#ffffff",
        padding: "5",
        display: "BYCLICK"
      }
    };
    return marker;
  },
  // regionchange(e) {
  //   console.log(e.type)
  // },
  markertap(e) {
    console.log('12', e)
  },
  // controltap(e) {
  //   console.log('123',e)
  // },
  // bindmarkertap(e){
  //   console.log("1",e)
  // },
  // bindcallouttap(e){
  //   console.log("2", e)
  // },
  // bindcontroltap(e){
  //   console.log("3", e)
  // }
  m_tap: function (e) {
    let mp = e.currentTarget.dataset.name
    console.log(mp)
    this.setData({
      mp: mp,
    })
  },
  go_tap_: function () {
    // console.log(this.data.mp)
    var m = this.data.map_[this.data.mp]
    console.log(m)
    let latitude = Number(m.lat);
    let longitude = Number(m.lng);
    console.log(m.latitude)
    console.log(m.longitude)
    let name = m.storename;
    // let address = '腾讯微信总部';
    wx.getLocation({//获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: latitude,//要去的纬度-地址
          longitude: longitude,//要去的经度-地址
          name: name,
          // address: address

        })
      }
    })
  },
})