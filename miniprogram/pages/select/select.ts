Page({
    /**
     * 页面的初始数据
     */
    data: {
      select: false,
      grade_name: '--请选择--',
      grades: ['1班', '2班', '3班', ]
    },
    bindShowMsg() {
      this.setData({
        select: !this.data.select
      })
    },
    mySelect(e:any) {
      console.log(e)
      var name = e.currentTarget.dataset.name
      this.setData({
        grade_name: name,
        select: false
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
  
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
  
    }
  })