const cb = wx.cloud.database();
const users = cb.collection('users');
const bookdata_8 = require("../../utils/bookdata");
const bookdata_9 = require("../../utils/garad9books");

var books_8 = bookdata_8.books;
var books_9 = bookdata_9.books;
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    copyright: "人民教育出版社：www.pep.com.cn",
    yourchoose: '1.《力》',
    grade: 8,
    zhang: [],
    jie: []

  },

  onLoad: function () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    this.setData({ zhang: Object.keys(bookdata_8.books), jie: Object.values(bookdata_8.books)[0] })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function (e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function () {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        console.log(app.globalData)
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  bindChange: function (e) {
    let choose=e.detail.value[1]
    let index = e.detail.value[0];
    if (this.data.grade == 8) {
      this.setData({ jie: Object.values(books_8)[index] });

    } else {
      this.setData({ jie: Object.values(books_9)[index] });
    }
    let str_choose = this.data.jie[choose];
    this.setData({ yourchoose: str_choose })
  },
  go: function () {
    let par = {};
    //整个switch看后期能不能改进一下。就是说整个界面能不能做一个。简化流程
    switch (this.data.grade) {
      case 8:
        par = bookdata_8.switchbooks(this.data.yourchoose);
        break;
      case 9:
        par = bookdata_9.switchbooks(this.data.yourchoose);
    }
    wx.navigateTo({
      url: '/pages/e-book/e-book?total=' + par.total + '&index=' + par.indexs + '&grade=' + this.data.grade
    })
  },
  radioChange: function (e) {
    switch (e.detail.value) {
      case '8':
        this.setData({
          grade: 8,
          zhang: Object.keys(books_8),
          jie: Object.values(books_8)[0],
          //yourchoose: Object.values(books_8)[0][0]
        });
        break;
      case '9':
        this.setData({
          grade: 9,
          zhang: Object.keys(books_9),
          jie: Object.values(books_9)[0],
          //yourchoose: Object.values(books_9)[0][0]
        })
        break;
    }
  }
})
