import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderopenIdLoginInWxApp from './lowcode/handler/openIdLoginInWxApp' 
import _hanlderwxNavigate from './lowcode/handler/wxNavigate' 
import _hanlderupdateUserInfo from './lowcode/handler/updateUserInfo' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  openIdLoginInWxApp: _hanlderopenIdLoginInWxApp, 
  wxNavigate: _hanlderwxNavigate, 
  updateUserInfo: _hanlderupdateUserInfo, 
}

const widgetProps = {
  "container1": {
    "style": {},
    "classList": [],
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container2": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image1": {
    "style": {
      "width": "100%",
      "height": "180PX"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "alt": "[图片]",
    "fit": "widthFix",
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container3": {
    "style": {
      "top": "-25px",
      "position": "relative",
      "background": "#fff",
      "paddingLeft": "20px",
      "paddingRight": "20px",
      "borderTopLeftRadius": "8px",
      "borderTopRightRadius": "8px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "container4": {
    "style": {
      "top": "-16px",
      "display": "flex",
      "position": "relative",
      "alignItems": "flex-end",
      "marginBottom": "18px",
      "flexDirection": "row"
    },
    "classList": [],
    "data": {},
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "image2": {
    "style": {
      "width": "64PX",
      "height": "64PX",
      "borderRadius": "32px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "alt": "[图片]",
    "fit": "cover",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "text1": {
    "style": {
      "fontSize": "18px",
      "fontWeight": "bolder",
      "lineHeight": "27px",
      "paddingLeft": "16px",
      "paddingBottom": "9px"
    },
    "classList": [],
    "maxLines": "1",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "forIndex": "index_repeater1",
    "forItem": "item_repeater1",
    "suffix": "repeater1",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "grid1": {
    "style": {},
    "classList": [],
    "gutterX": "8px",
    "template": "[1,3]",
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Grid"
  },
  "row1": {
    "style": {},
    "classList": [],
    "alignItems": "center",
    "_parentId": "grid1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Row"
  },
  "col1": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "fit-content",
    "_parentId": "row1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Col"
  },
  "icon1": {
    "style": {
      "width": "24PX",
      "height": "24PX"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "type": "custom",
    "_parentId": "col1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "col2": {
    "style": {
      "border": "none"
    },
    "classList": [],
    "alignSelf": "auto",
    "widthType": "auto-fill",
    "_parentId": "row1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Col"
  },
  "share1": {
    "style": {
      "color": "#000",
      "width": "100%",
      "border": "none",
      "padding": "0",
      "fontSize": "16px",
      "textAlign": "left",
      "background": "#fff",
      "fontWeight": "normal",
      "lineHeight": "24px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "image"
    ],
    "size": "mini",
    "type": "default",
    "withParams": true,
    "_parentId": "col2",
    "_order": 0,
    "widgetType": "gsd-h5-react:Share"
  },
  "customerService1": {
    "style": {
      "top": "0",
      "left": "0",
      "width": "100%",
      "display": "inline-block",
      "padding": "0px",
      "minWidth": "48px",
      "overflow": "visible",
      "position": "relative",
      "textAlign": "left",
      "background": "transparent"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg"
    ],
    "showMessageCard": true,
    "template": "normal",
    "_parentId": "col2",
    "_order": 1,
    "widgetType": "gsd-h5-react:CustomerService"
  },
  "text3": {
    "style": {
      "fontSize": "16px",
      "textAlign": "left",
      "fontWeight": "normal"
    },
    "classList": [],
    "maxLines": "1",
    "_parentId": "customerService1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "text2": {
    "style": {
      "lineHeight": "24px"
    },
    "classList": [],
    "maxLines": "1",
    "_parentId": "col2",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdText"
  },
  "col3": {
    "style": {},
    "classList": [],
    "alignSelf": "auto",
    "widthType": "fit-content",
    "_parentId": "row1",
    "_order": 2,
    "widgetType": "gsd-h5-react:Col"
  },
  "icon2": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "name": "chevronright",
    "_parentId": "col3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "divider1": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1_item",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdDivider"
  },
  "button1": {
    "style": {},
    "classList": [],
    "block": true,
    "icon": "success",
    "text": "退出登陆",
    "theme": "error",
    "_parentId": "container3",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "modal1": {
    "style": {},
    "classList": [],
    "closeType": [
      "mask"
    ],
    "defaultMaskShow": true,
    "defaultShow": false,
    "position": "bottom",
    "template": "default",
    "_parentId": "container1",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdModal"
  },
  "text4": {
    "style": {
      "fontWeight": "bolder"
    },
    "classList": [],
    "level": "title-7",
    "maxLines": "1",
    "text": "个人信息",
    "_parentId": "modal1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "icon3": {
    "style": {
      "color": "rgba(0, 0, 0, 0.6)"
    },
    "classList": [],
    "name": "td:close",
    "_parentId": "modal1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "form1": {
    "style": {
      "display": "block"
    },
    "classList": [],
    "_id": "",
    "datasourceType": "expression",
    "formType": "edit",
    "formType_bind": false,
    "initialValues": {},
    "lgWidth": "md",
    "methodCreate": "",
    "methodGetItem": "",
    "methodUpdate": "",
    "paramGetItem": {},
    "_parentId": "modal1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdForm"
  },
  "container5": {
    "style": {},
    "classList": [
      "wd-form-item",
      "wd-form-title"
    ],
    "_parentId": "form1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "uploadImage1": {
    "style": {},
    "classList": [],
    "callbacks": {},
    "label": "用户头像",
    "name": "avatarUrl",
    "required": true,
    "requiredMsg": "该项为必填项",
    "showShape": "circular",
    "single": true,
    "status": "edit",
    "value": [],
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdUploadImage"
  },
  "input1": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "extra": "昵称限2-32个字符，一个汉字为2个字符",
    "inputValue": "",
    "label": "用户昵称",
    "name": "nickName",
    "placeholder": "请输入用户昵称",
    "prefixIcon": "success",
    "prefixType": "",
    "required": true,
    "requiredMsg": "该项为必填项",
    "status": "edit",
    "suffixIcon": "success",
    "suffixType": "",
    "template": "inputBox",
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container6": {
    "style": {
      "padding": "0px 16px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container5",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "button2": {
    "style": {
      "width": "100%",
      "margin": "16px 0px 0px 0px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "sendMessageImg",
      "iconSrc"
    ],
    "block": true,
    "icon": "success",
    "text": "保存",
    "_parentId": "container6",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"ontext1$tap": [
      {
          key: 'wh2200gi95d',
          sourceKey: 'platform:utils.If',
          handler: function({args}){ return $app.utils.If(...args)},
          args: {
  "params": [
    {
      "alternate": false,
      "consequent": true
    }
  ]
},
          argsBinds: {'params.0.condition': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !$w.auth.currentUser.userType || $w.auth.currentUser.userType === 'anonymousUser'
    )}}
        }
    ],"ontext1$wh2200gi95d_success": [
      {
          key: 'wij5hfhlnmh',
          sourceKey: 'userCenter-6231hxwk:openIdLoginInWxApp',
          handler: handlers.openIdLoginInWxApp,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"ongrid1$tap": [
      {
          key: 'wsvyme6ybto',
          sourceKey: 'platform:utils.If',
          handler: function({args}){ return $app.utils.If(...args)},
          args: {
  "params": [
    {
      "alternate": false,
      "consequent": true
    }
  ]
},
          argsBinds: {'params.0.condition': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex;const {If} = $app.utils || {}; return(
      If($w.item_repeater1.action === 'callPhone', true, false)
    )}}
        },{
          key: 'wr5djjqotgb',
          sourceKey: 'platform:utils.If',
          handler: function({args}){ return $app.utils.If(...args)},
          args: {
  "params": [
    {
      "alternate": false,
      "consequent": true
    }
  ]
},
          argsBinds: {'params.0.condition': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex;const {If} = $app.utils || {}; return(
      If($w.item_repeater1.action === 'userInfo', true, false)
    )}}
        },{
          key: 'w53w5b41aps',
          sourceKey: 'platform:utils.If',
          handler: function({args}){ return $app.utils.If(...args)},
          args: {
  "params": [
    {
      "alternate": false,
      "consequent": true
    }
  ]
},
          argsBinds: {'params.0.condition': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex;const {If} = $app.utils || {}; return(
      If($w.item_repeater1.action === 'redirectTo' || $w.item_repeater1.action === 'navigateTo', true, false)
    )}}
        }
    ],"ongrid1$wsvyme6ybto_success": [
      {
          key: 'wtmwez69h29',
          sourceKey: 'platform:callPhone',
          handler: function({args}){ return $app.callPhone(...args)},
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.tel': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1?.actionParams?.tel || ''
    )}}
        }
    ],"ongrid1$wr5djjqotgb_success": [
      {
          key: 'wp02sct914d',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){
                const func = $w[data?.component]?.[data.method];
                if (typeof func !== 'function') {
                  throw new Error(`调用方法失败：未找到id为${data.component}下的方法${data.method}`);
                }
                return func(data.params);
              },
          args: {
  "params": [
    {
      "component": "modal1",
      "method": "open",
      "params": {
        "info": ""
      }
    }
  ]
},
          argsBinds: {}
        }
    ],"ongrid1$w53w5b41aps_success": [
      {
          key: 'wblojqxyac1',
          sourceKey: 'userCenter-6231hxwk:wxNavigate',
          handler: handlers.wxNavigate,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {'params.0.target': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1 || {}
    )}}
        }
    ],"onicon3$tap": [
      {
          key: 'wdModal978',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){
                const func = $w[data?.component]?.[data.method];
                if (typeof func !== 'function') {
                  throw new Error(`调用方法失败：未找到id为${data.component}下的方法${data.method}`);
                }
                return func(data.params);
              },
          args: {
  "params": [
    {
      "component": "modal1",
      "method": "close",
      "params": {
        "info": "icon"
      }
    }
  ]
},
          argsBinds: {}
        }
    ],"onform1$onDataChange": [
      {
          key: '',
          sourceKey: ':',
          handler: ({event})=>{
      if(event.currentTarget) {
        $app.utils.set(event.currentTarget._scope, 'dataContext.data', event?.detail?.data);
        $app.utils.set(event.currentTarget._scope, 'dataContext.state', event?.detail?.state);
      }
    },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$tap": [
      {
          key: 'w0280auq5ch',
          sourceKey: 'platform:utils.If',
          handler: function({args}){ return $app.utils.If(...args)},
          args: {
  "params": [
    {
      "alternate": false,
      "consequent": true
    }
  ]
},
          argsBinds: {'params.0.condition': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.form1.value.avatarUrl && $w.form1.value.nickName
    )}}
        }
    ],"onbutton2$w0280auq5ch_success": [
      {
          key: 'wdqstak8gv5',
          sourceKey: 'userCenter-6231hxwk:updateUserInfo',
          handler: handlers.updateUserInfo,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$wdqstak8gv5_success": [
      {
          key: 'wt1gc8gzwl4',
          sourceKey: 'platform:showToast',
          handler: function({args}){ return $app.showToast(...args)},
          args: {
  "params": [
    {
      "duration": 1500,
      "icon": "success",
      "title": "保存成功"
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$wt1gc8gzwl4_success": [
      {
          key: 'wnivfhbu3vt',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){
                const func = $w[data?.component]?.[data.method];
                if (typeof func !== 'function') {
                  throw new Error(`调用方法失败：未找到id为${data.component}下的方法${data.method}`);
                }
                return func(data.params);
              },
          args: {
  "params": [
    {
      "component": "modal1",
      "method": "close",
      "params": {
        "info": ""
      }
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton2$w0280auq5ch_fail": [
      {
          key: 'wg17rxakk5l',
          sourceKey: 'platform:showToast',
          handler: function({args}){ return $app.showToast(...args)},
          args: {
  "params": [
    {
      "duration": 1500,
      "icon": "warning",
      "title": "请填写完整信息"
    }
  ]
},
          argsBinds: {}
        }
    ],}

const behaviors = []

const properties = {
  "banner": {
    type: String,
    value: "https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/956fcedd-667e-4eb6-bfbf-dae065a6d54a.png"
  },
  "actions": {
    type: Array,
    value: [{"icon":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/fbdddbc3-926a-48ab-806b-554a39e41c66.svg","title":"个人信息设置","show":true,"action":"userInfo"},{"icon":"https://api.icon.woa.com/static_source_business/3ded7b68-b984-4fb8-a9d4-6e2887fbee1d.svg","title":"联系客服","show":true,"action":"helper","actionParams":{"sendMessageTitle":"会话标题","sendMessagePath":"","sendMessageImg":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/a519d7da-f2e2-42db-b7b4-af2820942204.png","sessionFrom":"会话来源"}},{"icon":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/d04109b7-c9c4-4911-a8aa-1de7a4838430.svg","title":"分享小程序","show":true,"action":"share","actionParams":{"shareTitle":"分享标题","image":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/a519d7da-f2e2-42db-b7b4-af2820942204.png","path":"index","params":[{"key":"test","value":"test"}]}}]
  },
}

const events = [
]



const dataBinds = {
  container1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      Object.assign({"banner":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/956fcedd-667e-4eb6-bfbf-dae065a6d54a.png","personal":{"icon":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/fbdddbc3-926a-48ab-806b-554a39e41c66.svg","title":"个人信息设置","show":true},"helper":{"icon":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/047bc345-a7ec-4b30-b88e-2317406324cf.svg","title":"联系客服","show":true,"sendMessageTitle":"会话标题","sendMessagePath":"","sendMessageImg":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/a519d7da-f2e2-42db-b7b4-af2820942204.png","sessionFrom":"会话来源"},"share":{"icon":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/d04109b7-c9c4-4911-a8aa-1de7a4838430.svg","title":"分享小程序","show":true,"shareTitle":"分享标题","image":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/a519d7da-f2e2-42db-b7b4-af2820942204.png"},"actions":[{"icon":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/fbdddbc3-926a-48ab-806b-554a39e41c66.svg","title":"个人信息设置","show":true,"action":"userInfo"},{"icon":"https://api.icon.woa.com/static_source_business/3ded7b68-b984-4fb8-a9d4-6e2887fbee1d.svg","title":"联系客服","show":true,"action":"helper","actionParams":{"sendMessageTitle":"会话标题","sendMessagePath":"","sendMessageImg":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/a519d7da-f2e2-42db-b7b4-af2820942204.png","sessionFrom":"会话来源"}},{"icon":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/d04109b7-c9c4-4911-a8aa-1de7a4838430.svg","title":"分享小程序","show":true,"action":"share","actionParams":{"shareTitle":"分享标题","image":"https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/a519d7da-f2e2-42db-b7b4-af2820942204.png","path":"index","params":[{"key":"test","value":"test"}]}}]}, $comp.props.data)
    )}
  },
  image1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.banner
    )}
  },
  image2: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.auth.currentUser.avatarUrl || 'https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/57a68552-4b49-4219-b905-4338b8063fee.svg'
    )}
  },
  text1: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !$w.auth.currentUser.userType || $w.auth.currentUser.userType === 'anonymousUser' ? '请点击登录' : $w.auth.currentUser.nickName || '微信用户'
    )}
  },
  repeater1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.actions || []
    )}
  },
  repeater1_item: { '_waFor': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data.actions || []
    )}
  },
  grid1: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.share?.show
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.grid1.style}; if(!display) {style.display = "none"}; return style })((
$w.container1.data?.share?.show
))
    )}
  },
  icon1: { 'src': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.icon
    )}
  },
  share1: { 'image': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1?.actionParams?.image || ''
    )},'params': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1?.actionParams?.params || []
    )},'path': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1?.actionParams?.path || ''
    )},'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.title || ''
    )},'title': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1?.actionParams?.shareTitle || ''
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.action === 'share'
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.share1.style}; if(!display) {style.display = "none"}; return style })((
$w.item_repeater1.action === 'share'
))
    )}
  },
  customerService1: { 'sendMessageImg': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1?.actionParams?.sendMessageImg || ''
    )},'sendMessagePath': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1?.actionParams?.sendMessagePath || ''
    )},'sendMessageTitle': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1?.actionParams?.sendMessageTitle || ''
    )},'sessionFrom': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1?.actionParams?.sessionFrom || ''
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.action === 'helper'
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.customerService1.style}; if(!display) {style.display = "none"}; return style })((
$w.item_repeater1.action === 'helper'
))
    )}
  },
  text3: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.title || ''
    )}
  },
  text2: { 'text': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.title || ''
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      !['helper', 'share'].includes($w.item_repeater1?.action)
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.text2.style}; if(!display) {style.display = "none"}; return style })((
!['helper', 'share'].includes($w.item_repeater1?.action)
))
    )}
  },
  divider1: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.share?.show
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.divider1.style}; if(!display) {style.display = "none"}; return style })((
$w.container1.data?.share?.show
))
    )}
  },
  button1: { '_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      false
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.button1.style}; if(!display) {style.display = "none"}; return style })((
false
))
    )}
  },
  form1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
  avatarUrl: $w.auth.currentUser.avatarUrl,
  nickName: $w.auth.currentUser.nickName
})
    )}
  },
  uploadImage1: { 'callbacks.beforeUpload': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      result => {
  // console.log('beforeUpload', result);
  return true; // 可以通过返回false，禁用默认上传逻辑，自定义上传
  // return false;
}
    )}
  },
}

const query = {
}

const eventFlows = [
]

const config = {}
const datasetProfile = {
  "state": {}
};

createComponent({
  key: 'user-center:userCenter',
  behaviors,
  properties,
  events,
  handler: handlers,
  dataBinds,
  evtListeners,
  widgetProps,
  lifeCycle,
  stateFn,
  computedFuncs,
  config,
  datasetProfile,
  query,
  eventFlows,
  nativeMode: !!1,
})
