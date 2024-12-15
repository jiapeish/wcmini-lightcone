const { getWedaAPI } = require('@cloudbase/weda-client');

Page({
  data: {
    banner: 'cloud://wcmini-lightcone-0fnx65347ef0196.7763-wcmini-lightcone-0fnx65347ef0196-1329925650/sand-small.png',
    actions: [
      {
        icon: 'https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/fbdddbc3-926a-48ab-806b-554a39e41c66.svg',
        title: '个人信息设置',
        show: true,
        action: 'userInfo'
      },
      {
        icon: 'https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/047bc345-a7ec-4b30-b88e-2317406324cf.svg',
        title: '联系客服',
        show: true,
        action: 'helper',
        actionParams: {
          sendMessageTitle: '客服咨询',
          sendMessagePath: '',
          sendMessageImg: '',
          sessionFrom: '个人中心'
        }
      },
      {
        icon: 'https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/d04109b7-c9c4-4911-a8aa-1de7a4838430.svg',
        title: '分享小程序',
        show: true,
        action: 'share',
        actionParams: {
          shareTitle: '歌德助手-喵呜学德语',
          image: '',
          path: 'pages/index/index'
        }
      }
    ],
    userInfo: null,
    isLogin: false
  },

  onLoad() {
    this.initUserInfo();
    this.getBannerUrl();
  },

  async getBannerUrl() {
    try {
      const result = await wx.cloud.getTempFileURL({
        fileList: [this.data.banner]
      });
      if (result.fileList && result.fileList[0] && result.fileList[0].tempFileURL) {
        this.setData({
          banner: result.fileList[0].tempFileURL
        });
      }
    } catch (error) {
      console.error('获取banner图片链接失败:', error);
    }
  },

  async initUserInfo() {
    try {
      const app = getWedaAPI().app;
      const auth = app.auth;
      
      if (auth && auth.currentUser) {
        const userInfo = auth.currentUser;
        this.setData({
          userInfo,
          isLogin: true
        });
      }
    } catch (error) {
      console.error('获取用户信息失败:', error);
    }
  },

  onShow() {
    // 每次显示页面时刷新用户信息
    this.initUserInfo();
  },

  // 处理登录
  handleLogin() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        const userInfo = res.userInfo;
        this.setData({
          userInfo,
          isLogin: true
        });
      },
      fail: (err) => {
        console.error('获取用户信息失败:', err);
      }
    });
  }
});
