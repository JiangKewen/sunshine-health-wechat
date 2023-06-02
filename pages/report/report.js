// pages/report/report.js

// 对象转数组
const result = data => {
  if (!data || data.length === 0) {
    return []
  }
  return data.reduce((acc, obj) => {
    const index = acc.findIndex(item => item[0].year === obj.year);
    if (index !== -1) {
      acc[index].push(obj);
    } else {
      acc.push([obj]);
    }
    return acc;
  }, []);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: 0,
    height: 0,

    wait: false,
    storage: JSON.parse(wx.getStorageSync('report') || '[]'),
    reports: result(JSON.parse(wx.getStorageSync('report') || '[]')),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    this.setData({
      storage: JSON.parse(wx.getStorageSync('report') || '[]')
    })

    this.setData({
      reports: result(JSON.parse(wx.getStorageSync('report') || '[]'))
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

  readPdf(e) {
    if (this.data.wait) return
    this.setData({
      wait: true
    })
    setTimeout(() => {
      this.setData({
        wait: false
      })
    }, 800);
    console.log('点击', e.target.dataset.ossurl);
    wx.downloadFile({
      url: `https://sunshine-health-examination.oss-cn-hangzhou.aliyuncs.com${e.target.dataset.ossurl}`,
      filePath: wx.env.USER_DATA_PATH + "/" + e.target.dataset.name + '-' + e.target.dataset.date + ".pdf",
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
  },

  goGet() {
    wx.navigateTo({
      url: '/pages/get/get',
    })
  },

  zhinan() {
    wx.showToast({
      title: '暂无解读指南',
      icon: 'error'
    })
  },
  jianyi() {
    wx.showToast({
      title: '暂无健康建议',
      icon: 'error'
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
          url: '/pages/my/my'
        });
      } else if (deltaX > 120) {
        wx.switchTab({
          url: '/pages/home/home',
        })
      }
    }
  }
})