// pages/report/report.js
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

  readPdf() {
    console.log('点击');
    wx.downloadFile({
      url: 'https://oss.sunshine.xin/upload/dev/syrma-bankruptcy-api/pdf/02fdce78662249d9adccf4a1257a9dd7.pdf',
      filePath: wx.env.USER_DATA_PATH + "/" + '孙悟空' + ".pdf",
      success(res) {
        console.log('res1', res);
        if (res.statusCode === 200) {
          const tempFilePath = res.filePath
          wx.openDocument({
            filePath: tempFilePath,
            showMenu: true,
            fileType: 'pdf',

          })
        } else {
          console.log('res', res);
        }
      },
      fail(err) {
        console.log('err', err.message);
      }
    })
  }
})