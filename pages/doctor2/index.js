// pages/doctor2/index.js

const pages = {
  1: {
    title: "饮食与营养",
    text: [
      "了解健康饮食的重要性，探索平衡膳食和营养素的丰富来源。",
      "我们为您提供专业的饮食建议，助您养成健康的饮食习惯和生活方式。",
      "探索各种饮食方案，了解如何满足您的营养需求，并提供您和家人的食谱建议。",
    ],
  },
  2: {
    title: "健身与运动",
    text: [
      "探索身体活动的益处，了解如何制定合适的健身计划，提升身体素质。",
      "我们提供专业的运动指导，帮助您选择适合您的健身项目和锻炼方法。",
      "了解不同类型的运动，从有氧运动到力量训练，为您的身体带来全面的健康益处。",
    ],
  },
  3: {
    title: "心理健康",
    text: [
      "关注心理健康，了解如何管理压力、焦虑和情绪问题，提升心理幸福感。",
      "我们提供心理咨询和支持，帮助您应对挑战，建立积极的心理健康策略。",
      "探索心理健康的重要性，学习平衡工作、生活和情感的技巧，迈向更健康的生活。",
    ],
  },
  4: {
    title: "疾病预防",
    text: [
      "了解常见疾病的预防方法和风险因素，提前采取措施保护您的健康。",
      "我们提供针对不同年龄段和人群的疾病预防建议，帮助您预防疾病和保持健康。",
      "探索疫苗接种、定期筛查和生活习惯的重要性，为您提供全方位的疾病预防指南。",
    ],
  },
  5: {
    title: "慢性病管理",
    text: [
      "了解慢性疾病的管理方法，学习如何控制病情、减轻症状并改善生活质量。",
      "我们提供个性化的慢性病管理方案，帮助您更好地管理糖尿病、高血压等慢性疾病。",
      "了解药物治疗、饮食调整和运动计划等综合治疗手段，为您提供全方位的慢性病管理支持。",
    ],
  },
  6: {
    title: "妇女健康",
    text: [
      "关注女性健康问题，了解常见妇科疾病、月经周期和更年期的变化。",
      "我们提供专业的妇女健康咨询，包括生殖健康、妊娠保健和乳腺保健等方面。",
      "探索女性健康问题的预防和管理方法，了解如何维护身心健康，享受优质生活。",
    ],
  },
  7: {
    title: "儿童健康",
    text: [
      "关注儿童健康成长，了解儿童的营养需求、免疫接种和常见疾病预防。",
      "我们提供专业的儿童健康咨询，包括生长发育、行为管理和常见疾病的识别与治疗。",
      "了解如何培养健康的生活习惯、提高免疫力，并为孩子提供全面的健康保护。",
    ],
  },
  8: {
    title: "健康老年",
    text: [
      "关注老年健康，了解老年人常见疾病、护理和健康管理的重要性。",
      "我们提供专业的老年健康咨询，包括年龄相关疾病的预防、药物管理和生活质量提升。",
      "了解如何保持健康的老年生活，延缓衰老、保护认知功能和促进身心健康。",
    ],
  },
};
const images = {
  1: {
   title: '失眠',
   folderName: 'sm',
   imgs: [
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%B1%E7%9C%A0/1.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%B1%E7%9C%A0/2.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%B1%E7%9C%A0/3.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%B1%E7%9C%A0/4.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%B1%E7%9C%A0/5.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%B1%E7%9C%A0/6.png'
   ]
  },
  2: {
   title: '脱发',
   folderName: 'tf',
   imgs: [
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%84%B1%E5%8F%91/1.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%84%B1%E5%8F%91/2.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%84%B1%E5%8F%91/3.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%84%B1%E5%8F%91/4.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%84%B1%E5%8F%91/5.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%84%B1%E5%8F%91/6.png'
   ]
  },
  3: {
   title: '骨质疏松',
   folderName: 'gzss',
   imgs: [
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E9%AA%A8%E8%B4%A8%E7%96%8F%E6%9D%BE/1.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E9%AA%A8%E8%B4%A8%E7%96%8F%E6%9D%BE/2.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E9%AA%A8%E8%B4%A8%E7%96%8F%E6%9D%BE/3.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E9%AA%A8%E8%B4%A8%E7%96%8F%E6%9D%BE/4.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E9%AA%A8%E8%B4%A8%E7%96%8F%E6%9D%BE/5.png'
   ]
  },
  4: {
   title: '中风',
   folderName: 'zf',
   imgs: [
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E4%B8%AD%E9%A3%8E/1.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E4%B8%AD%E9%A3%8E/2.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E4%B8%AD%E9%A3%8E/3.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E4%B8%AD%E9%A3%8E/4.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E4%B8%AD%E9%A3%8E/5.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E4%B8%AD%E9%A3%8E/6.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E4%B8%AD%E9%A3%8E/7.png'
   ]
  },
  5: {
   title: '甲亢',
   folderName: 'jk',
   imgs: [
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E7%94%B2%E4%BA%A2/1.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E7%94%B2%E4%BA%A2/2.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E7%94%B2%E4%BA%A2/3.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E7%94%B2%E4%BA%A2/4.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E7%94%B2%E4%BA%A2/5.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E7%94%B2%E4%BA%A2/6.png'
   ]
  },
  6: {
   title: '胃癌',
   folderName: 'wa',
   imgs: [
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%83%83%E7%99%8C/1.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%83%83%E7%99%8C/2.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%83%83%E7%99%8C/3.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%83%83%E7%99%8C/4.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%83%83%E7%99%8C/5.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E8%83%83%E7%99%8C/6.png'
   ]
  },
  7: {
   title: 'HPV',
   folderName: 'hpv',
   imgs: [
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/HPV/1.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/HPV/2.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/HPV/3.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/HPV/4.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/HPV/5.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/HPV/6.png'
   ]
  },
  8: {
   title: '大肠癌',
   folderName: 'dca',
   imgs: [
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%A7%E8%82%A0%E7%99%8C/1.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%A7%E8%82%A0%E7%99%8C/2.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%A7%E8%82%A0%E7%99%8C/3.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%A7%E8%82%A0%E7%99%8C/4.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%A7%E8%82%A0%E7%99%8C/5.png',
    'https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com/upload/dev/sunshine-health-examination/default/%E5%AE%9D%E5%85%B8png/%E5%A4%A7%E8%82%A0%E7%99%8C/6.png'
   ]
  },
 }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: 0,
    height: 0,

    title: '',
    text: [],
    img: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const data = images[options.id || 1]

    this.setData({
      title: data.title,
      // text: data.text,
      // img: data.imgs
    })
    wx.showLoading({
      title: '获取数据中',
    })
    wx.request({
      url: `https://jiajianup.top/api/common/upload/getFolderName?folderName=${data.folderName}`,
      success: res => {
        const imgs = res.data.data || []
        console.log(res.data.data);
        const img = imgs.map(item => {
          console.log(item);
          item = 'data:image/png;base64,' + item
          return item.replace(/[\r\n]/g, '')
        })
        console.log('img', img);
        this.setData({
          img
        })
        wx.hideLoading()
      },
      fail: err => {
        wx.showToast({
          title: '获取失败',
          icon: 'error'
        })
        wx.hideLoading()
      },
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