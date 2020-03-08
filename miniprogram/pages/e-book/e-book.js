// pages/e-book/e-book.js
//常量是应为我自己上传的图片其文件名不同。
const image_path_grade_8 = "/8年级_";
const image_path_grade_9 = "/9上电子书_";
const app = getApp()
var index = 0,
  total = 0,
  isused = 0,
  sms= '',
  srclist = [];

Page({
  /**fileid的形式为：如下
   *  "cloud://first-33pc9.6669-first-33pc9-1301215213/8/8年级_" + index + ".png" 所有这里使用字符串拼接。
   *拼接参数：filebase+grade+filepatch+index+".png"前缀：filebase 中间filepatch_grade 后缀“.pmg”
   变量为grade 和 index
   */
  data: {
    grade: 0,
    filebase: "cloud://first-33pc9.6669-first-33pc9-1301215213/",
    filepatch_grade: "/8年级_",
    src: "",
    imageWidth: 0,
    imageHeight: 0,
    isend: false,
    isbegin: true
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (!app.globalData.openid){
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
    };
    index = options.index
    total = options.total
    //既是初始化使用次数，又使用了1次，所有+1
    isused = 1;
    //获得用户客服端的宽度并设置用户所选择的年级
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,
      imageHeight: wx.getSystemInfoSync().windowHeight,
      grade: options.grade
    });
    switch (this.data.grade) {
      case "8":
        this.setData({
          filepatch_grade: image_path_grade_8
        });
        break;
      case "9":
        this.setData({
          filepatch_grade: image_path_grade_9
        });
        break;
    }
    var myfile = this.data.filebase + this.data.grade + this.data.filepatch_grade + index + ".png";
    wx.cloud.getTempFileURL({
      fileList: [{
        fileID: myfile,
        maxAge: 60 * 60, // one hour
      }]
    }).then(res => {
      // get temp file URL
      this.setData({
        src: res.fileList[0].tempFileURL
      });
      srclist.push(this.data.src);
    }).catch(error => {
      console.error
    })
  },
  add: function() {
    if (isused < total) {
      //设置当前索引+1 意味着新的页面索引
      index++;
      var myfile = this.data.filebase + this.data.grade + this.data.filepatch_grade + index + ".png";
      wx.cloud.getTempFileURL({
        fileList: [{
          fileID: myfile,
          maxAge: 60 * 60, // one hour
        }]
      }).then(res => {
        // get temp file URL
        this.setData({
          src: res.fileList[0].tempFileURL,
          isbegin: false,
          isend: false
        });
        //此处使用了一张。所以页面 isused+1  向左滑动的开关可以打开data->isbegin为true
        isused++;
        srclist.push(res.fileList[0].tempFileURL);
      }).catch(error => {
        console.error
        // handle error
      });
      wx.showToast({title:'请稍等',duration:888});
    } else {
      //首先设置向右滑动的箭头 不显示
      //增加了返回上一页的功能。所有改进。加一个判断
      this.setData({
        isend: true
      })
      wx.showToast({
        title: '本节内容已经完毕，再看其他节次请返回',
        icon: '',
        image: '',
        duration: 2000,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  sub: function() {
    if (isused == 1) {
      this.setData({
        isbegin: true
      });
      wx.showToast({
        title: '这是本节的第一页，请点击顶部返回',
        duration: 2000
      });
      return
    }
    let indexsrclist = srclist.length - 2;
    this.setData({
      src: srclist[indexsrclist],
      isend: false
    });
    index--;
    isused--;
    srclist.pop();
    wx.showToast({ title: '请稍等', duration: 888 })
  },
  //页面滑动事件
  onchange:function(e){
    sms = e.detail

  },
  startbut:function(e){
    console.log(sms)
  },
  pho:function(){
    wx.chooseImage({
      success: function(res) {
        let imge = res.tempFilePaths[0]
        console.log(imge)
        wx.showToast({
          title: imge,
          duration:3000
        })
      },
    })
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