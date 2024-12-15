Page({
  data: {
    userInfo: null
  },

  onLoad() {
    const pages = getCurrentPages();
    const profilePage = pages[pages.length - 2]; // Get the profile page
    if (profilePage) {
      this.setData({
        userInfo: profilePage.data.userInfo
      });
    }
  },

  onShow() {
    wx.setNavigationBarTitle({
      title: '个人信息'
    });
  }
});
