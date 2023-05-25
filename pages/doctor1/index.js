// pages/doctor1/index.js

const pages = {
  1: {
    text:[
      "我们拥有一支专业的医学影像团队，使用先进的影像技术为您提供精准的诊断和评估。",
   "我们的专家医生将对您的影像结果进行仔细解读，确保准确诊断和有效治疗方案。",
   "了解各种医学影像检查，如X光、CT扫描和MRI等，我们将为您提供全面的医学影像服务。",],
    title: '医学影像诊断'
  },
  2: {
    text: [
      "我们的实验室团队由经验丰富的技术人员和专业实验室医生组成，为您提供准确可靠的检验结果。",
      "我们采用最先进的设备和标准化的检验流程，确保您的样本得到精确的分析和诊断。",
      "了解各种常规和特殊实验室检验项目，包括血液、尿液、生化指标等，为您提供全面的健康评估。",
    ],
    title: '实验室检验'
  },
  3: {
    text: [
     "我们拥有多个专科医生团队，涵盖多个医学领域，为您提供专业的医疗服务和个性化的治疗方案。",
     "每位专科医生都具有丰富的临床经验和专业知识，致力于为您的特定健康问题提供最佳的解决方案。",
     "了解我们的专科服务范围，包括内科、外科、妇产科、心脏科等，我们将全力帮助您解决健康问题。",
    ],
    title: '专科医疗服务'
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: 0,
    height: 0,

    title: '',
    text: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const data = pages[options.id || 1]
    this.setData({
      title: data.title,
      text: data.text
    })
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

  goBack() {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
})