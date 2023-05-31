// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: 0,
    height: 0,

    phoneNumber: '1234567890',
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
      if (deltaX > 120) {
        wx.switchTab({
          url: '/pages/report/report',
        })
      }
    }
  }
})