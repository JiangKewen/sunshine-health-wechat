// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: 0,
    height: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const res = wx.getMenuButtonBoundingClientRect()
    const top = res.top
    const height = res.height
    this.setData({
      top,
      height
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  goGet() {
    const report = wx.getStorageSync('report')
    console.log('report', report);
    if (report && JSON.parse(report).length) {
      wx.switchTab({
        url: '/pages/report/report',
      })
    } else {
      wx.navigateTo({
        url: '/pages/get/get',
      })
    }
    // wx.switchTab({
    //   url: '/pages/report/report'
    // })
  },

  goHome1() {
    wx.navigateTo({
      url: '/pages/home1/team',
    })
  },
  goHome2() {
    wx.navigateTo({
      url: '/pages/home2/help',
    })
  },
  goDoctor1(e) {
    const id = e.currentTarget.dataset['index']
    wx.navigateTo({
      url: '/pages/doctor1/index?id='+id,
    })
  },
  goDoctor2(e) {
    const id = e.currentTarget.dataset['index']
    wx.navigateTo({
      url: '/pages/doctor2/index?id='+id,
    })
  },


  startX: 0,
  startY: 0,

  touchstart(e) {
    this.startX = e.touches[0].clientX;
    this.startY = e.touches[0].clientY;
  },

  touchmove(e) {
    const { clientX, clientY } = e.touches[0];
    const deltaX = clientX - this.startX;
    const deltaY = clientY - this.startY;

    // 判断滑动方向，只有水平滑动距离大于垂直滑动距离时才触发切换
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < -120) {
        // 向左滑动超过50px，切换到下一页
        wx.switchTab({
          url: '/pages/report/report'
        });
      }
    }
  }
})