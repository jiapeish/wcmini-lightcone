//app.js
import { init } from '@cloudbase/weda-client';

init({
  /** 云开发环境ID */
  envID: 'wcmini-lightcone-0fnx65347ef0196',
  appConfig: {
    /** 云后台访问链接中的域名 */
    staticResourceDomain: 'wcmini-lightcone-0fnx65347ef0196-.tcloudbaseapp.com',
  }
});

App({
  onLaunch() {
    // 初始化云开发环境
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'wcmini-lightcone-0fnx65347ef0196',
        traceUser: true,
      });
    }
  },
  onShow() {
    
  },
  onHide() {
    
  }
});
