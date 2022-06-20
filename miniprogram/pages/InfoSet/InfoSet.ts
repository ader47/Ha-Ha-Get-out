const app = getApp<IAppOption>()
Page({
  data: {
    select1: false,
    select2:false,
    gate_name: '--请选择校门--',
    gates: ['常州校区北门（出门码）', '常州校区北门（进门码）', '常州校区西门（出门码）', '常州校区西门（进门码）'],
    major_name:'--请选择学院--',
    majors: ['机电工程学院', '商学院', '物联网工程学院', ]
  },
  bindShowMsg1() {
    this.setData({
      select1: !this.data.select1
    })
  },
  bindShowMsg2() {
    this.setData({
      select2: !this.data.select2
    })
  },
  mySelectGate(e:any) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    this.setData({
      gate_name: name,
      select1: false
    })
  },
  mySelectMajor(e:any) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    this.setData({
      major_name: name,
      select2: false
    })
  },
  github: function (e:any) {
        wx.setClipboardData({
          data: 'https://github.com/ader47/Ha-Ha-Get-out', 
          success (res) {
            wx.getClipboardData({
              success (res) {
                wx.showToast({
                    title: '项目地址已复制至您的剪贴板！\n https://github.com/ader47/Ha-Ha-Get-out',
                    icon: 'none',
                    duration: 1000
                  })
              }
            })
          }
        })
},

  bindViewTap: function (e:any) {
    // console.log(e.detail.value.name)
    // console.log(e.detail.value.major)
    // console.log(e.detail.value.gate)
    if(e.detail.value.name!=''&&this.data.major_name!='--请选择学院--'&&this.data.gate_name!='--请选择校门--'){
        wx.navigateTo({
            url: '../MainPage/MainPage?name='+e.detail.value.name+'&major='+this.data.major_name+'&gate='+this.data.gate_name
        })
    }
    else
    {
        wx.showToast({
            title: '请填写完整信息！',
            icon: 'none',
            duration: 1000//持续的时间
          })
    }
}
})

