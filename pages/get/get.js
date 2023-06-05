// pages/get/get.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: 0,
    height: 0,

    isCodeSent: false, // 验证码是否已发送
    countDown: 60, // 倒计时时间
    name: '',
    phone: '', // 手机号
    id: '', // 身份证号
    code: '', // 验证码
    disabledPhone: true,

    wait: false,
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

  goBack() {
    // wx.switchTab({
    //   url: '/pages/home/home',
    // })
    wx.navigateBack()
  },

  // 姓名
  onNameInput(event) {
    this.setData({
      name: event.detail.value,
    });
  },

  // 手机号输入
  onPhoneInput(event) {
    this.setData({
      phone: event.detail.value,
      disabledPhone: !/^[1][3,4,5,7,8][0-9]{9}$/.test(event.detail.value),
    });
  },

  // 身份证输入
  onIdInput(event) {
    this.setData({
      id: event.detail.value,
    });
  },

  // 验证码输入
  onCodeInput(event) {
    this.setData({
      code: event.detail.value,
    });
  },
  // 发送验证码
  sendCode() {
    wx.request({
      url: `https://sizehealth.top/api/wx/sms/send?mobile=${this.data.phone}`,
      success(res) {
        if (res.statusCode === 200 && res.data.code === 200) {
          wx.showToast({
            title: '验证码已发送',
          })
        } else {
          wx.showToast({
            title: res?.data?.msg || '获取验证码失败',
            icon: 'error'
          })
        }
      },
      fail(err) {
        wx.showToast({
          title: err.message || '获取验证码失败',
          icon: 'error'
        })
      }
    })
    // 发送成功后设置 isCodeSent 为 true，并启动倒计时
    this.setData({
      isCodeSent: true,
    });
    this.startCountDown();
  },

  // 启动倒计时
  startCountDown() {
    let count = this.data.countDown;
    const timer = setInterval(() => {
      count--;
      if (count <= 0) {
        clearInterval(timer);
        this.setData({
          isCodeSent: false,
          countDown: 60,
        });
      } else {
        this.setData({
          countDown: count,
        });
      }
    }, 1000);
  },

  // 提交表单
  submitForm() {
    if (this.data.wait) return

    const {
      name,
      phone,
      id,
      code
    } = this.data;
    // console.log(name, phone, id, code);
    // wx.setStorageSync('report', '[a]')

    if (!name || !phone || !id || !code) {
      wx.showToast({
        title: '请先输入信息',
        icon: 'error'
      })
    } else {
      wx.clearStorageSync()
      this.setData({
        wait: true
      })
      wx.request({
        url: `https://sizehealth.top/api/wx/record/list?idName=${name}&idCard=${id}&code=${code}&mobile=${phone}`,
        success(res) {
          console.log('res2', res);
          if (res.statusCode === 200 && res.data.code === 200) {
            console.log('res报告', res);
            // TODO 处理
            wx.setStorageSync('report', JSON.stringify(res.data.data))
            setTimeout(() => {
              wx.switchTab({
                url: '/pages/report/report',
              })
            }, 500)
          } else {
            wx.showToast({
              title: res?.data?.msg || '获取报告失败',
              icon: 'error'
            })
            this.setData({
              wait: false
            })
          }
        },
        fail(err) {
          wx.showToast({
            title: err.message || '获取报告失败',
            icon: 'error'
          })
          this.setData({
            wait: false
          })
        }
      })
    }

  },
})