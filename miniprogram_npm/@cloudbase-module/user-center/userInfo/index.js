import { getWedaAPI, createComponent, concatClassList, px2rpx } from '@cloudbase/weda-client'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _hanlderupdateUserInfo from './lowcode/handler/updateUserInfo' 
import _hanlderopenIdLoginInWxApp from './lowcode/handler/openIdLoginInWxApp' 

const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});

const handlers = {
  updateUserInfo: _hanlderupdateUserInfo, 
  openIdLoginInWxApp: _hanlderopenIdLoginInWxApp, 
}

const widgetProps = {
  "container1": {
    "style": {},
    "classList": [],
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
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
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdForm"
  },
  "container2": {
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
    "name": "avatarUrl",
    "single": true,
    "status": "edit",
    "value": [],
    "_parentId": "container2",
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
    "inputValue": "",
    "name": "nickName",
    "prefixIcon": "success",
    "prefixType": "",
    "status": "edit",
    "suffixIcon": "success",
    "suffixType": "",
    "template": "inputBox",
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container3": {
    "style": {
      "padding": "0px 16px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container2",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
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
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  }
}





const evtListeners = {"onform1$onDataChange": [
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
    ],"onbutton1$tap": [
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
    ],"onbutton1$w0280auq5ch_success": [
      {
          key: 'wdqstak8gv5',
          sourceKey: 'userInfo-duenri0a:updateUserInfo',
          handler: handlers.updateUserInfo,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton1$wdqstak8gv5_success": [
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
    ],"onbutton1$w0280auq5ch_fail": [
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
  "avatar": {
    type: Object,
    value: {"show":true,"label":"用户头像","labelVisible":true,"labelAlign":"","layout":"","showShape":"circular","borderedH5":true,"required":true,"requiredFlag":true}
  },
  "nickName": {
    type: Object,
    value: {"show":true,"labelVisible":true,"labelAlign":"","layout":"","placeholder":"请输入用户昵称","borderedH5":true,"required":true,"requiredFlag":true,"label":"用户昵称","extra":"昵称限2-32个字符，一个汉字为2个字符","maxLength":140}
  },
}

const events = [
]



const dataBinds = {
  container1: { 'data': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      Object.assign({"avatar":{"show":true,"label":"用户头像","labelVisible":true,"labelAlign":"","layout":"","showShape":"circular","borderedH5":true,"beforeUpload":{},"isCompressBeforeUpload":false,"maxSize":10,"required":true,"requiredMsg":"该项为必填项","requiredFlag":true},"nickName":{"show":true,"placeholder":"请输入用户昵称","label":"用户昵称","labelVisible":true,"labelAlign":"","layout":"","extra":"昵称限2-32个字符，一个汉字为2个字符","borderedH5":true,"maxLength":140,"required":true,"requiredMsg":"该项为必填项","requiredFlag":true}}, $comp.props.data)
    )}
  },
  form1: { 'value': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      (!$w.auth.currentUser.userType || $w.auth.currentUser.userType === 'anonymousUser' ? $comp.handler.openIdLoginInWxApp() : 1) && {
  avatarUrl: $w.auth.currentUser.avatarUrl,
  nickName: $w.auth.currentUser.nickName
}
    )}
  },
  uploadImage1: { 'borderedH5': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.borderedH5
    )},'extra': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.extra
    )},'isChooseAvatar': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.isCompressBeforeUpload
    )},'label': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.label
    )},'labelAlign': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.labelAlign
    )},'labelTips': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.labelTips
    )},'labelVisible': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.labelVisible
    )},'labelWidth': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.labelWidth
    )},'labelWrap': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.labelWrap
    )},'layout': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.layout
    )},'maxSize': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.maxSize
    )},'required': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.required
    )},'requiredFlag': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.requiredFlag
    )},'requiredMsg': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.requiredMsg
    )},'showShape': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.showShape
    )},'callbacks.beforeUpload': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      result => {
  // console.log('beforeUpload', result);
  return true; // 可以通过返回false，禁用默认上传逻辑，自定义上传
  // return false;
}
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.avatar?.show
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.uploadImage1.style}; if(!display) {style.display = "none"}; return style })((
$w.container1.data?.avatar?.show
))
    )}
  },
  input1: { 'borderedH5': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.borderedH5
    )},'extra': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.extra
    )},'isNickNameType': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.isNickNameType
    )},'label': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.label
    )},'labelAlign': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.labelAlign
    )},'labelTips': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.labelTips
    )},'labelVisible': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.labelVisible
    )},'labelWidth': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.labelWidth
    )},'labelWrap': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.labelWrap
    )},'layout': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.layout
    )},'maxLength': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.maxLength
    )},'placeholder': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.placeholder
    )},'required': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.required
    )},'requiredFlag': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.requiredFlag
    )},'requiredMsg': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.requiredMsg
    )},'_waDisplay': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.container1.data?.nickName?.show
    )},'style': ($comp, lists, forItems, event, $context, $w) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ((display)=>{ const style = {...widgetProps.input1.style}; if(!display) {style.display = "none"}; return style })((
$w.container1.data?.nickName?.show
))
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
  key: 'user-center:userInfo',
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
