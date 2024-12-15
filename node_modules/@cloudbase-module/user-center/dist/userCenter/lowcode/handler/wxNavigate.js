import { getWedaAPI } from '@cloudbase/weda-client';
const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});
const $w = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.$w?.[prop] }});
export default function({event, data}) {
  const { action, actionParams } = data.target || {};
  const { navigateUrl = '', params = [] } = actionParams || {};
  const param = params.length > 0 ? params.reduce((res, cur, index)=>(`${res}${cur.key}=${cur.value}${index === params.length - 1 ? '' : '&'}`),'?') : '';
  const url = navigateUrl + param;
  if(action === 'redirectTo') {
    wx.redirectTo({
      url,
    }).catch(err => {
      console.error('页面跳转失败:', err);
    });
  } else {
    wx.navigateTo({
      url,
    }).catch(err => {
      console.error('页面跳转失败:', err);
    });
  }
}