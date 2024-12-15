module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1734234913771, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt = exports.helpers = exports.utils = exports.events = exports.cache = exports.adapters = exports.constants = void 0;
var constants = __importStar(require("./constants"));
exports.constants = constants;
var adapters = __importStar(require("./adapters"));
exports.adapters = adapters;
var cache = __importStar(require("./libs/cache"));
exports.cache = cache;
var events = __importStar(require("./libs/events"));
exports.events = events;
var utils = __importStar(require("./libs/util"));
exports.utils = utils;
var helpers = __importStar(require("./helpers"));
exports.helpers = helpers;
var jwt_decode_1 = __importDefault(require("jwt-decode"));
var jwt = {
    decode: jwt_decode_1.default,
};
exports.jwt = jwt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF3QztBQWN0Qyw4QkFBUztBQWJYLG1EQUFzQztBQWNwQyw0QkFBUTtBQWJWLGtEQUFxQztBQWNuQyxzQkFBSztBQWJQLG9EQUF1QztBQWNyQyx3QkFBTTtBQWJSLGlEQUFvQztBQWNsQyxzQkFBSztBQWJQLGlEQUFvQztBQWNsQywwQkFBTztBQVpULDBEQUFrQztBQUVsQyxJQUFNLEdBQUcsR0FBRztJQUNWLE1BQU0sRUFBRSxvQkFBUztDQUNsQixDQUFBO0FBU0Msa0JBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBhZGFwdGVycyBmcm9tICcuL2FkYXB0ZXJzJ1xuaW1wb3J0ICogYXMgY2FjaGUgZnJvbSAnLi9saWJzL2NhY2hlJ1xuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJy4vbGlicy9ldmVudHMnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2xpYnMvdXRpbCdcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJ1xuXG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnXG5cbmNvbnN0IGp3dCA9IHtcbiAgZGVjb2RlOiBqd3REZWNvZGUsXG59XG5cbmV4cG9ydCB7XG4gIGNvbnN0YW50cyxcbiAgYWRhcHRlcnMsXG4gIGNhY2hlLFxuICBldmVudHMsXG4gIHV0aWxzLFxuICBoZWxwZXJzLFxuICBqd3QsXG59XG4iXX0=
}, function(modId) {var map = {"./constants":1734234913772,"./adapters":1734234913775,"./libs/cache":1734234913778,"./libs/events":1734234913779,"./libs/util":1734234913777,"./helpers":1734234913780}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913772, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OATUH_LOGINTYPE = void 0;
__exportStar(require("./common"), exports);
__exportStar(require("./errors"), exports);
exports.OATUH_LOGINTYPE = 'constants';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0I7QUFDeEIsMkNBQXdCO0FBRVgsUUFBQSxlQUFlLEdBQUcsV0FBVyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9jb21tb24nXG5leHBvcnQgKiBmcm9tICcuL2Vycm9ycydcblxuZXhwb3J0IGNvbnN0IE9BVFVIX0xPR0lOVFlQRSA9ICdjb25zdGFudHMnXG4iXX0=
}, function(modId) { var map = {"./common":1734234913773,"./errors":1734234913774}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913773, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMUNITY_SITE_URL = exports.IS_DEBUG_MODE = exports.getProtocol = exports.setProtocol = exports.getSdkName = exports.setSdkName = void 0;
var sdkName = '@cloudbase/js-sdk';
function setSdkName(name) {
    sdkName = name;
}
exports.setSdkName = setSdkName;
function getSdkName() {
    return sdkName;
}
exports.getSdkName = getSdkName;
var PROTOCOL = 'https:';
function setProtocol(protocol) {
    PROTOCOL = protocol;
}
exports.setProtocol = setProtocol;
function getProtocol() {
    return PROTOCOL;
}
exports.getProtocol = getProtocol;
exports.IS_DEBUG_MODE = process.env.NODE_ENV === 'development';
exports.COMMUNITY_SITE_URL = 'https://support.qq.com/products/148793';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSSxPQUFPLEdBQUcsbUJBQW1CLENBQUE7QUFDakMsU0FBZ0IsVUFBVSxDQUFDLElBQVk7SUFDckMsT0FBTyxHQUFHLElBQUksQ0FBQTtBQUNoQixDQUFDO0FBRkQsZ0NBRUM7QUFDRCxTQUFnQixVQUFVO0lBQ3hCLE9BQU8sT0FBTyxDQUFBO0FBQ2hCLENBQUM7QUFGRCxnQ0FFQztBQUVELElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQTtBQUV2QixTQUFnQixXQUFXLENBQUMsUUFBMEI7SUFDcEQsUUFBUSxHQUFHLFFBQVEsQ0FBQTtBQUNyQixDQUFDO0FBRkQsa0NBRUM7QUFFRCxTQUFnQixXQUFXO0lBQ3pCLE9BQU8sUUFBUSxDQUFBO0FBQ2pCLENBQUM7QUFGRCxrQ0FFQztBQUVZLFFBQUEsYUFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWEsQ0FBQTtBQUV0RCxRQUFBLGtCQUFrQixHQUFHLHdDQUF3QyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHNka05hbWUgPSAnQGNsb3VkYmFzZS9qcy1zZGsnXG5leHBvcnQgZnVuY3Rpb24gc2V0U2RrTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgc2RrTmFtZSA9IG5hbWVcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZGtOYW1lKCkge1xuICByZXR1cm4gc2RrTmFtZVxufVxuXG5sZXQgUFJPVE9DT0wgPSAnaHR0cHM6J1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvdG9jb2wocHJvdG9jb2w6ICdodHRwJyB8ICdodHRwcycpIHtcbiAgUFJPVE9DT0wgPSBwcm90b2NvbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvdG9jb2woKSB7XG4gIHJldHVybiBQUk9UT0NPTFxufVxuLy8g5piv5ZCm5Li65byA5Y+R5qih5byPXG5leHBvcnQgY29uc3QgSVNfREVCVUdfTU9ERSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXG4vLyDpl67nrZTnpL7ljLrpk77mjqVcbmV4cG9ydCBjb25zdCBDT01NVU5JVFlfU0lURV9VUkwgPSAnaHR0cHM6Ly9zdXBwb3J0LnFxLmNvbS9wcm9kdWN0cy8xNDg3OTMnXG4iXX0=
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913774, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ERRORS = void 0;
exports.ERRORS = {
    INVALID_PARAMS: 'INVALID_PARAMS',
    INVALID_SYNTAX: 'INVALID_SYNTAX',
    INVALID_OPERATION: 'INVALID_OPERATION',
    OPERATION_FAIL: 'OPERATION_FAIL',
    NETWORK_ERROR: 'NETWORK_ERROR',
    UNKOWN_ERROR: 'UNKOWN_ERROR',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxNQUFNLEdBQUc7SUFDcEIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFlBQVksRUFBRSxjQUFjO0NBQzdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRVJST1JTID0ge1xuICBJTlZBTElEX1BBUkFNUzogJ0lOVkFMSURfUEFSQU1TJyxcbiAgSU5WQUxJRF9TWU5UQVg6ICdJTlZBTElEX1NZTlRBWCcsXG4gIElOVkFMSURfT1BFUkFUSU9OOiAnSU5WQUxJRF9PUEVSQVRJT04nLFxuICBPUEVSQVRJT05fRkFJTDogJ09QRVJBVElPTl9GQUlMJyxcbiAgTkVUV09SS19FUlJPUjogJ05FVFdPUktfRVJST1InLFxuICBVTktPV05fRVJST1I6ICdVTktPV05fRVJST1InLFxufVxuIl19
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913775, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDefaultAdapter = exports.useAdapters = exports.RUNTIME = void 0;
var Web = __importStar(require("./platforms/web"));
var util_1 = require("../libs/util");
var RUNTIME;
(function (RUNTIME) {
    RUNTIME["WEB"] = "web";
    RUNTIME["WX_MP"] = "wx_mp";
})(RUNTIME = exports.RUNTIME || (exports.RUNTIME = {}));
function useAdapters(adapters) {
    var adapterList = util_1.isArray(adapters) ? adapters : [adapters];
    for (var _i = 0, adapterList_1 = adapterList; _i < adapterList_1.length; _i++) {
        var adapter = adapterList_1[_i];
        var isMatch = adapter.isMatch, genAdapter = adapter.genAdapter, runtime = adapter.runtime;
        if (isMatch()) {
            return {
                adapter: genAdapter(),
                runtime: runtime,
            };
        }
    }
}
exports.useAdapters = useAdapters;
function useDefaultAdapter() {
    return {
        adapter: Web.genAdapter(),
        runtime: RUNTIME.WEB,
    };
}
exports.useDefaultAdapter = useDefaultAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRhcHRlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUFzQztBQUN0QyxxQ0FBc0M7QUFFdEMsSUFBWSxPQUdYO0FBSEQsV0FBWSxPQUFPO0lBQ2pCLHNCQUFXLENBQUE7SUFDWCwwQkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFHbEI7QUFFRCxTQUFnQixXQUFXLENBQUMsUUFBNkM7SUFDdkUsSUFBTSxXQUFXLEdBQXVCLGNBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBOEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUE0QixDQUFDLENBQUE7SUFDM0gsS0FBc0IsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7UUFBOUIsSUFBTSxPQUFPLG9CQUFBO1FBQ1IsSUFBQSxPQUFPLEdBQTBCLE9BQU8sUUFBakMsRUFBRSxVQUFVLEdBQWMsT0FBTyxXQUFyQixFQUFFLE9BQU8sR0FBSyxPQUFPLFFBQVosQ0FBWTtRQUNoRCxJQUFJLE9BQU8sRUFBRSxFQUFFO1lBQ2IsT0FBTztnQkFDTCxPQUFPLEVBQUUsVUFBVSxFQUFFO2dCQUNyQixPQUFPLFNBQUE7YUFDUixDQUFBO1NBQ0Y7S0FDRjtBQUNILENBQUM7QUFYRCxrQ0FXQztBQUVELFNBQWdCLGlCQUFpQjtJQUMvQixPQUFPO1FBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUU7UUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO0tBQ3JCLENBQUE7QUFDSCxDQUFDO0FBTEQsOENBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG91ZGJhc2VBZGFwdGVyIH0gZnJvbSAnQGNsb3VkYmFzZS9hZGFwdGVyLWludGVyZmFjZSdcbmltcG9ydCAqIGFzIFdlYiBmcm9tICcuL3BsYXRmb3Jtcy93ZWInXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vbGlicy91dGlsJ1xuXG5leHBvcnQgZW51bSBSVU5USU1FIHtcbiAgV0VCID0gJ3dlYicsXG4gIFdYX01QID0gJ3d4X21wJyAvLyDlvq7kv6HlsI/nqIvluo9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFkYXB0ZXJzKGFkYXB0ZXJzOiBDbG91ZGJhc2VBZGFwdGVyfENsb3VkYmFzZUFkYXB0ZXJbXSkge1xuICBjb25zdCBhZGFwdGVyTGlzdDogQ2xvdWRiYXNlQWRhcHRlcltdID0gaXNBcnJheShhZGFwdGVycykgPyBhZGFwdGVycyBhcyBDbG91ZGJhc2VBZGFwdGVyW10gOiBbYWRhcHRlcnMgYXMgQ2xvdWRiYXNlQWRhcHRlcl1cbiAgZm9yIChjb25zdCBhZGFwdGVyIG9mIGFkYXB0ZXJMaXN0KSB7XG4gICAgY29uc3QgeyBpc01hdGNoLCBnZW5BZGFwdGVyLCBydW50aW1lIH0gPSBhZGFwdGVyXG4gICAgaWYgKGlzTWF0Y2goKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWRhcHRlcjogZ2VuQWRhcHRlcigpLFxuICAgICAgICBydW50aW1lLFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHJldHVybiB7XG4gICAgYWRhcHRlcjogV2ViLmdlbkFkYXB0ZXIoKSxcbiAgICBydW50aW1lOiBSVU5USU1FLldFQixcbiAgfVxufVxuIl19
}, function(modId) { var map = {"./platforms/web":1734234913776,"../libs/util":1734234913777}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913776, function(require, module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebRequest = exports.genAdapter = void 0;
var adapter_interface_1 = require("@cloudbase/adapter-interface");
var util_1 = require("../../libs/util");
var common_1 = require("../../constants/common");
var WebRequest = (function (_super) {
    __extends(WebRequest, _super);
    function WebRequest(config) {
        var _this = _super.call(this) || this;
        var timeout = config.timeout, timeoutMsg = config.timeoutMsg, restrictedMethods = config.restrictedMethods;
        _this.timeout = timeout || 0;
        _this.timeoutMsg = timeoutMsg || '请求超时';
        _this.restrictedMethods = restrictedMethods || ['get', 'post', 'upload', 'download'];
        return _this;
    }
    WebRequest.prototype.get = function (options) {
        return this.request(__assign(__assign({}, options), { method: 'get' }), this.restrictedMethods.includes('get'));
    };
    WebRequest.prototype.post = function (options) {
        return this.request(__assign(__assign({}, options), { method: 'post' }), this.restrictedMethods.includes('post'));
    };
    WebRequest.prototype.put = function (options) {
        return this.request(__assign(__assign({}, options), { method: 'put' }));
    };
    WebRequest.prototype.upload = function (options) {
        var data = options.data, file = options.file, name = options.name, method = options.method, _a = options.headers, headers = _a === void 0 ? {} : _a;
        var reqMethod = { post: 'post', put: 'put' }[method === null || method === void 0 ? void 0 : method.toLowerCase()] || 'put';
        var formData = new FormData();
        if (reqMethod === 'post') {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
            formData.append('key', name);
            formData.append('file', file);
            return this.request(__assign(__assign({}, options), { data: formData, method: reqMethod }), this.restrictedMethods.includes('upload'));
        }
        return this.request(__assign(__assign({}, options), { method: 'put', headers: headers, body: file }), this.restrictedMethods.includes('upload'));
    };
    WebRequest.prototype.download = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var data, url, fileName, link, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.get(__assign(__assign({}, options), { headers: {}, responseType: 'blob' }))];
                    case 1:
                        data = (_a.sent()).data;
                        url = window.URL.createObjectURL(new Blob([data]));
                        fileName = decodeURIComponent(new URL(options.url).pathname.split('/').pop() || '');
                        link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', fileName);
                        link.style.display = 'none';
                        document.body.appendChild(link);
                        link.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(link);
                        return [3, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3, 3];
                    case 3: return [2, new Promise(function (resolve) {
                            resolve({
                                statusCode: 200,
                                tempFilePath: options.url,
                            });
                        })];
                }
            });
        });
    };
    WebRequest.prototype.request = function (options, enableAbort) {
        var _this = this;
        if (enableAbort === void 0) { enableAbort = false; }
        var method = (String(options.method)).toLowerCase() || 'get';
        return new Promise(function (resolve) {
            var url = options.url, _a = options.headers, headers = _a === void 0 ? {} : _a, data = options.data, responseType = options.responseType, withCredentials = options.withCredentials, body = options.body, onUploadProgress = options.onUploadProgress;
            var realUrl = util_1.formatUrl(common_1.getProtocol(), url, method === 'get' ? data : {});
            var ajax = new XMLHttpRequest();
            ajax.open(method, realUrl);
            responseType && (ajax.responseType = responseType);
            Object.keys(headers).forEach(function (key) {
                ajax.setRequestHeader(key, headers[key]);
            });
            var timer;
            if (onUploadProgress) {
                ajax.upload.addEventListener('progress', onUploadProgress);
            }
            ajax.onreadystatechange = function () {
                var result = {};
                if (ajax.readyState === 4) {
                    var headers_1 = ajax.getAllResponseHeaders();
                    var arr = headers_1.trim().split(/[\r\n]+/);
                    var headerMap_1 = {};
                    arr.forEach(function (line) {
                        var parts = line.split(': ');
                        var header = parts.shift().toLowerCase();
                        var value = parts.join(': ');
                        headerMap_1[header] = value;
                    });
                    result.header = headerMap_1;
                    result.statusCode = ajax.status;
                    try {
                        result.data = responseType === 'blob' ? ajax.response : JSON.parse(ajax.responseText);
                    }
                    catch (e) {
                        result.data = responseType === 'blob' ? ajax.response : ajax.responseText;
                    }
                    clearTimeout(timer);
                    resolve(result);
                }
            };
            if (enableAbort && _this.timeout) {
                timer = setTimeout(function () {
                    console.warn(_this.timeoutMsg);
                    ajax.abort();
                }, _this.timeout);
            }
            var payload;
            if (util_1.isFormData(data)) {
                payload = data;
            }
            else if (headers['content-type'] === 'application/x-www-form-urlencoded') {
                payload = util_1.toQueryString(data);
            }
            else if (body) {
                payload = body;
            }
            else {
                payload = data ? JSON.stringify(data) : undefined;
            }
            if (withCredentials) {
                ajax.withCredentials = true;
            }
            ajax.send(payload);
        });
    };
    return WebRequest;
}(adapter_interface_1.AbstractSDKRequest));
exports.WebRequest = WebRequest;
function genAdapter() {
    var adapter = {
        root: window,
        reqClass: WebRequest,
        wsClass: WebSocket,
        localStorage: localStorage,
    };
    return adapter;
}
exports.genAdapter = genAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3BsYXRmb3Jtcy93ZWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBUXFDO0FBQ3JDLHdDQUFzRTtBQUN0RSxpREFBb0Q7QUFLcEQ7SUFBeUIsOEJBQWtCO0lBT3pDLG9CQUFZLE1BQXNCO1FBQWxDLFlBQ0UsaUJBQU8sU0FLUjtRQUpTLElBQUEsT0FBTyxHQUFvQyxNQUFNLFFBQTFDLEVBQUUsVUFBVSxHQUF3QixNQUFNLFdBQTlCLEVBQUUsaUJBQWlCLEdBQUssTUFBTSxrQkFBWCxDQUFXO1FBQ3pELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQTtRQUMzQixLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxNQUFNLENBQUE7UUFDdEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUE7O0lBQ3JGLENBQUM7SUFDTSx3QkFBRyxHQUFWLFVBQVcsT0FBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyx1QkFDZCxPQUFPLEtBQ1YsTUFBTSxFQUFFLEtBQUssS0FDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUNNLHlCQUFJLEdBQVgsVUFBWSxPQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLHVCQUNkLE9BQU8sS0FDVixNQUFNLEVBQUUsTUFBTSxLQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBQ00sd0JBQUcsR0FBVixVQUFXLE9BQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sdUJBQ2QsT0FBTyxLQUNWLE1BQU0sRUFBRSxLQUFLLElBQ2IsQ0FBQTtJQUNKLENBQUM7SUFDTSwyQkFBTSxHQUFiLFVBQWMsT0FBOEI7UUFDbEMsSUFBQSxJQUFJLEdBQXVDLE9BQU8sS0FBOUMsRUFBRSxJQUFJLEdBQWlDLE9BQU8sS0FBeEMsRUFBRSxJQUFJLEdBQTJCLE9BQU8sS0FBbEMsRUFBRSxNQUFNLEdBQW1CLE9BQU8sT0FBMUIsRUFBRSxLQUFpQixPQUFPLFFBQVosRUFBWixPQUFPLG1CQUFHLEVBQUUsS0FBQSxDQUFZO1FBQzFELElBQU0sU0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQTtRQUU5RSxJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFBO1FBQy9CLElBQUksU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQzVCLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ2pDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDNUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyx1QkFDZCxPQUFPLEtBQ1YsSUFBSSxFQUFFLFFBQVEsRUFDZCxNQUFNLEVBQUUsU0FBUyxLQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7U0FDOUM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLHVCQUNkLE9BQU8sS0FDVixNQUFNLEVBQUUsS0FBSyxFQUNiLE9BQU8sU0FBQSxFQUNQLElBQUksRUFBRSxJQUFJLEtBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFDWSw2QkFBUSxHQUFyQixVQUFzQixPQUF3Qjs7Ozs7Ozt3QkFFekIsV0FBTSxJQUFJLENBQUMsR0FBRyx1QkFDMUIsT0FBTyxLQUNWLE9BQU8sRUFBRSxFQUFFLEVBQ1gsWUFBWSxFQUFFLE1BQU0sSUFDcEIsRUFBQTs7d0JBSk0sSUFBSSxHQUFLLENBQUEsU0FJZixDQUFBLEtBSlU7d0JBS04sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNsRCxRQUFRLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7d0JBQ25GLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUV4QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTt3QkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTt3QkFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO3dCQUUzQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO3dCQUVaLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs7NEJBRWpDLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPOzRCQUN6QixPQUFPLENBQUM7Z0NBQ04sVUFBVSxFQUFFLEdBQUc7Z0NBQ2YsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHOzZCQUMxQixDQUFDLENBQUE7d0JBQ0osQ0FBQyxDQUFDLEVBQUE7Ozs7S0FDSDtJQUtTLDRCQUFPLEdBQWpCLFVBQWtCLE9BQXdCLEVBQUUsV0FBbUI7UUFBL0QsaUJBaUVDO1FBakUyQyw0QkFBQSxFQUFBLG1CQUFtQjtRQUM3RCxJQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUE7UUFDOUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDakIsSUFBQSxHQUFHLEdBQWdGLE9BQU8sSUFBdkYsRUFBRSxLQUE4RSxPQUFPLFFBQXpFLEVBQVosT0FBTyxtQkFBRyxFQUFFLEtBQUEsRUFBRSxJQUFJLEdBQTRELE9BQU8sS0FBbkUsRUFBRSxZQUFZLEdBQThDLE9BQU8sYUFBckQsRUFBRSxlQUFlLEdBQTZCLE9BQU8sZ0JBQXBDLEVBQUUsSUFBSSxHQUF1QixPQUFPLEtBQTlCLEVBQUUsZ0JBQWdCLEdBQUssT0FBTyxpQkFBWixDQUFZO1lBQ2xHLElBQU0sT0FBTyxHQUFHLGdCQUFTLENBQUMsb0JBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzNFLElBQU0sSUFBSSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUE7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDMUIsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQTtZQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDMUMsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLEtBQUssQ0FBQTtZQUNULElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUE7YUFDM0Q7WUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3hCLElBQU0sTUFBTSxHQUFtQixFQUFFLENBQUE7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7b0JBQ3pCLElBQU0sU0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO29CQUM1QyxJQUFNLEdBQUcsR0FBRyxTQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO29CQUUzQyxJQUFNLFdBQVMsR0FBRyxFQUFFLENBQUE7b0JBQ3BCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO3dCQUNmLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQzlCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTt3QkFDMUMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDOUIsV0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQTtvQkFDM0IsQ0FBQyxDQUFDLENBQUE7b0JBQ0YsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFTLENBQUE7b0JBQ3pCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtvQkFDL0IsSUFBSTt3QkFFRixNQUFNLENBQUMsSUFBSSxHQUFHLFlBQVksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO3FCQUN0RjtvQkFBQyxPQUFPLENBQUMsRUFBRTt3QkFDVixNQUFNLENBQUMsSUFBSSxHQUFHLFlBQVksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUE7cUJBQzFFO29CQUNELFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUNoQjtZQUNILENBQUMsQ0FBQTtZQUNELElBQUksV0FBVyxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLEtBQUssR0FBRyxVQUFVLENBQUM7b0JBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO29CQUM3QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ2QsQ0FBQyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNqQjtZQUVELElBQUksT0FBTyxDQUFBO1lBQ1gsSUFBSSxpQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUVwQixPQUFPLEdBQUcsSUFBSSxDQUFBO2FBQ2Y7aUJBQU0sSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssbUNBQW1DLEVBQUU7Z0JBQzFFLE9BQU8sR0FBRyxvQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzlCO2lCQUFNLElBQUksSUFBSSxFQUFFO2dCQUNmLE9BQU8sR0FBRyxJQUFJLENBQUE7YUFDZjtpQkFBTTtnQkFFTCxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7YUFDbEQ7WUFFRCxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7YUFDNUI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTFKRCxDQUF5QixzQ0FBa0IsR0EwSjFDO0FBWW9CLGdDQUFVO0FBVi9CLFNBQVMsVUFBVTtJQUNqQixJQUFNLE9BQU8sR0FBd0I7UUFDbkMsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsU0FBUztRQUNsQixZQUFZLGNBQUE7S0FDYixDQUFBO0lBQ0QsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQztBQUVRLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU0RLQWRhcHRlckludGVyZmFjZSxcbiAgQWJzdHJhY3RTREtSZXF1ZXN0LFxuICBJUmVxdWVzdE9wdGlvbnMsXG4gIFJlc3BvbnNlT2JqZWN0LFxuICBJVXBsb2FkUmVxdWVzdE9wdGlvbnMsXG4gIElSZXF1ZXN0Q29uZmlnLFxuICBJUmVxdWVzdE1ldGhvZCxcbn0gZnJvbSAnQGNsb3VkYmFzZS9hZGFwdGVyLWludGVyZmFjZSdcbmltcG9ydCB7IGlzRm9ybURhdGEsIGZvcm1hdFVybCwgdG9RdWVyeVN0cmluZyB9IGZyb20gJy4uLy4uL2xpYnMvdXRpbCdcbmltcG9ydCB7IGdldFByb3RvY29sIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbW1vbidcblxuLyoqXG4gKiBAY2xhc3MgV2ViUmVxdWVzdFxuICovXG5jbGFzcyBXZWJSZXF1ZXN0IGV4dGVuZHMgQWJzdHJhY3RTREtSZXF1ZXN0IHtcbiAgLy8g6buY6K6k5LiN6ZmQ6LaF5pe2XG4gIHByaXZhdGUgcmVhZG9ubHkgdGltZW91dDogbnVtYmVyO1xuICAvLyDotoXml7bmj5DnpLrmlofmoYhcbiAgcHJpdmF0ZSByZWFkb25seSB0aW1lb3V0TXNnOiBzdHJpbmc7XG4gIC8vIOi2heaXtuWPl+mZkOivt+axguexu+Wei++8jOm7mOiupOaJgOacieivt+axguWdh+WPl+mZkFxuICBwcml2YXRlIHJlYWRvbmx5IHJlc3RyaWN0ZWRNZXRob2RzOiBBcnJheTxJUmVxdWVzdE1ldGhvZD47XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogSVJlcXVlc3RDb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgY29uc3QgeyB0aW1lb3V0LCB0aW1lb3V0TXNnLCByZXN0cmljdGVkTWV0aG9kcyB9ID0gY29uZmlnXG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dCB8fCAwXG4gICAgdGhpcy50aW1lb3V0TXNnID0gdGltZW91dE1zZyB8fCAn6K+35rGC6LaF5pe2J1xuICAgIHRoaXMucmVzdHJpY3RlZE1ldGhvZHMgPSByZXN0cmljdGVkTWV0aG9kcyB8fCBbJ2dldCcsICdwb3N0JywgJ3VwbG9hZCcsICdkb3dubG9hZCddXG4gIH1cbiAgcHVibGljIGdldChvcHRpb25zOiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB9LCB0aGlzLnJlc3RyaWN0ZWRNZXRob2RzLmluY2x1ZGVzKCdnZXQnKSlcbiAgfVxuICBwdWJsaWMgcG9zdChvcHRpb25zOiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgfSwgdGhpcy5yZXN0cmljdGVkTWV0aG9kcy5pbmNsdWRlcygncG9zdCcpKVxuICB9XG4gIHB1YmxpYyBwdXQob3B0aW9uczogSVJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxSZXNwb25zZU9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgfSlcbiAgfVxuICBwdWJsaWMgdXBsb2FkKG9wdGlvbnM6IElVcGxvYWRSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8UmVzcG9uc2VPYmplY3Q+IHtcbiAgICBjb25zdCB7IGRhdGEsIGZpbGUsIG5hbWUsIG1ldGhvZCwgaGVhZGVycyA9IHt9IH0gPSBvcHRpb25zXG4gICAgY29uc3QgcmVxTWV0aG9kID0geyBwb3N0OiAncG9zdCcsIHB1dDogJ3B1dCcgfVttZXRob2Q/LnRvTG93ZXJDYXNlKCldIHx8ICdwdXQnXG4gICAgLy8g5LiK5Lyg5pa55byP5Li6cG9zdOaXtu+8jOmcgOi9rOaNouS4ukZvcm1EYXRhXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGlmIChyZXFNZXRob2QgPT09ICdwb3N0Jykge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGRhdGFba2V5XSlcbiAgICAgIH0pXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2tleScsIG5hbWUpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKVxuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICBtZXRob2Q6IHJlcU1ldGhvZCxcbiAgICAgIH0sIHRoaXMucmVzdHJpY3RlZE1ldGhvZHMuaW5jbHVkZXMoJ3VwbG9hZCcpKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgaGVhZGVycyxcbiAgICAgIGJvZHk6IGZpbGUsXG4gICAgfSwgdGhpcy5yZXN0cmljdGVkTWV0aG9kcy5pbmNsdWRlcygndXBsb2FkJykpXG4gIH1cbiAgcHVibGljIGFzeW5jIGRvd25sb2FkKG9wdGlvbnM6IElSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5nZXQoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBoZWFkZXJzOiB7fSwgLy8g5LiL6L296LWE5rqQ6K+35rGC5LiN57uP6L+Hc2VydmljZe+8jGhlYWRlcua4heepulxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgIH0pXG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbZGF0YV0pKVxuICAgICAgY29uc3QgZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobmV3IFVSTChvcHRpb25zLnVybCkucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKSB8fCAnJylcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgbGluay5ocmVmID0gdXJsXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlTmFtZSlcbiAgICAgIGxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXG4gICAgICBsaW5rLmNsaWNrKClcbiAgICAgIC8vIOWbnuaUtuWGheWtmFxuICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKVxuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgdGVtcEZpbGVQYXRoOiBvcHRpb25zLnVybCxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtJUmVxdWVzdE9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVBYm9ydCDmmK/lkKbotoXml7bkuK3mlq3or7fmsYJcbiAgICovXG4gIHByb3RlY3RlZCByZXF1ZXN0KG9wdGlvbnM6IElSZXF1ZXN0T3B0aW9ucywgZW5hYmxlQWJvcnQgPSBmYWxzZSk6IFByb21pc2U8UmVzcG9uc2VPYmplY3Q+IHtcbiAgICBjb25zdCBtZXRob2QgPSAoU3RyaW5nKG9wdGlvbnMubWV0aG9kKSkudG9Mb3dlckNhc2UoKSB8fCAnZ2V0J1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgeyB1cmwsIGhlYWRlcnMgPSB7fSwgZGF0YSwgcmVzcG9uc2VUeXBlLCB3aXRoQ3JlZGVudGlhbHMsIGJvZHksIG9uVXBsb2FkUHJvZ3Jlc3MgfSA9IG9wdGlvbnNcbiAgICAgIGNvbnN0IHJlYWxVcmwgPSBmb3JtYXRVcmwoZ2V0UHJvdG9jb2woKSwgdXJsLCBtZXRob2QgPT09ICdnZXQnID8gZGF0YSA6IHt9KVxuICAgICAgY29uc3QgYWpheCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgICBhamF4Lm9wZW4obWV0aG9kLCByZWFsVXJsKVxuICAgICAgcmVzcG9uc2VUeXBlICYmIChhamF4LnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZSlcbiAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBhamF4LnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pXG4gICAgICB9KVxuICAgICAgbGV0IHRpbWVyXG4gICAgICBpZiAob25VcGxvYWRQcm9ncmVzcykge1xuICAgICAgICBhamF4LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIG9uVXBsb2FkUHJvZ3Jlc3MpXG4gICAgICB9XG4gICAgICBhamF4Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBSZXNwb25zZU9iamVjdCA9IHt9XG4gICAgICAgIGlmIChhamF4LnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYWpheC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgICAgIGNvbnN0IGFyciA9IGhlYWRlcnMudHJpbSgpLnNwbGl0KC9bXFxyXFxuXSsvKVxuICAgICAgICAgIC8vIENyZWF0ZSBhIG1hcCBvZiBoZWFkZXIgbmFtZXMgdG8gdmFsdWVzXG4gICAgICAgICAgY29uc3QgaGVhZGVyTWFwID0ge31cbiAgICAgICAgICBhcnIuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBwYXJ0cy5zaGlmdCgpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFydHMuam9pbignOiAnKVxuICAgICAgICAgICAgaGVhZGVyTWFwW2hlYWRlcl0gPSB2YWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVzdWx0LmhlYWRlciA9IGhlYWRlck1hcFxuICAgICAgICAgIHJlc3VsdC5zdGF0dXNDb2RlID0gYWpheC5zdGF0dXNcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8g5LiK5LygcG9zdOivt+axgui/lOWbnuaVsOaNruagvOW8j+S4unhtbO+8jOatpOWkhOWuuemUmVxuICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSByZXNwb25zZVR5cGUgPT09ICdibG9iJyA/IGFqYXgucmVzcG9uc2UgOiBKU09OLnBhcnNlKGFqYXgucmVzcG9uc2VUZXh0KVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gcmVzcG9uc2VUeXBlID09PSAnYmxvYicgPyBhamF4LnJlc3BvbnNlIDogYWpheC5yZXNwb25zZVRleHRcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZW5hYmxlQWJvcnQgJiYgdGhpcy50aW1lb3V0KSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKHRoaXMudGltZW91dE1zZylcbiAgICAgICAgICBhamF4LmFib3J0KClcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KVxuICAgICAgfVxuICAgICAgLy8g5aSE55CGIHBheWxvYWRcbiAgICAgIGxldCBwYXlsb2FkXG4gICAgICBpZiAoaXNGb3JtRGF0YShkYXRhKSkge1xuICAgICAgICAvLyBGb3JtRGF0Ye+8jOS4jeWkhOeQhlxuICAgICAgICBwYXlsb2FkID0gZGF0YVxuICAgICAgfSBlbHNlIGlmIChoZWFkZXJzWydjb250ZW50LXR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpIHtcbiAgICAgICAgcGF5bG9hZCA9IHRvUXVlcnlTdHJpbmcoZGF0YSlcbiAgICAgIH0gZWxzZSBpZiAoYm9keSkge1xuICAgICAgICBwYXlsb2FkID0gYm9keVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5YW25a6D5oOF5Ya1XG4gICAgICAgIHBheWxvYWQgPSBkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhDcmVkZW50aWFscykge1xuICAgICAgICBhamF4LndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cbiAgICAgIGFqYXguc2VuZChwYXlsb2FkKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuQWRhcHRlcigpIHtcbiAgY29uc3QgYWRhcHRlcjogU0RLQWRhcHRlckludGVyZmFjZSA9IHtcbiAgICByb290OiB3aW5kb3csXG4gICAgcmVxQ2xhc3M6IFdlYlJlcXVlc3QsXG4gICAgd3NDbGFzczogV2ViU29ja2V0LFxuICAgIGxvY2FsU3RvcmFnZSxcbiAgfVxuICByZXR1cm4gYWRhcHRlclxufVxuXG5leHBvcnQgeyBnZW5BZGFwdGVyLCBXZWJSZXF1ZXN0IH1cbiJdfQ==
}, function(modId) { var map = {"../../libs/util":1734234913777,"../../constants/common":1734234913773}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913777, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformPhone = exports.sleep = exports.printGroupLog = exports.throwError = exports.printInfo = exports.printError = exports.printWarn = exports.execCallback = exports.createPromiseCallback = exports.removeParam = exports.getHash = exports.getQuery = exports.toQueryString = exports.createSign = exports.formatUrl = exports.genSeqId = exports.isFormData = exports.isInstanceOf = exports.isNull = exports.isPalinObject = exports.isUndefined = exports.isString = exports.isArray = void 0;
var hmac_sha256_1 = __importDefault(require("crypto-js/hmac-sha256"));
var enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
var enc_utf8_1 = __importDefault(require("crypto-js/enc-utf8"));
var constants_1 = require("../constants");
function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}
exports.isArray = isArray;
function isString(val) {
    return typeof val === 'string';
}
exports.isString = isString;
function isUndefined(val) {
    return typeof val === 'undefined';
}
exports.isUndefined = isUndefined;
function isPalinObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}
exports.isPalinObject = isPalinObject;
function isNull(val) {
    return Object.prototype.toString.call(val) === '[object Null]';
}
exports.isNull = isNull;
function isInstanceOf(instance, construct) {
    return instance instanceof construct;
}
exports.isInstanceOf = isInstanceOf;
function isFormData(val) {
    return Object.prototype.toString.call(val) === '[object FormData]';
}
exports.isFormData = isFormData;
function genSeqId() {
    return Math.random().toString(16)
        .slice(2);
}
exports.genSeqId = genSeqId;
function formatUrl(PROTOCOL, url, query) {
    if (query === void 0) { query = {}; }
    var urlHasQuery = /\?/.test(url);
    var queryString = '';
    Object.keys(query).forEach(function (key) {
        if (queryString === '') {
            !urlHasQuery && (url += '?');
        }
        else {
            queryString += '&';
        }
        queryString += key + "=" + encodeURIComponent(query[key]);
    });
    url += queryString;
    if (/^http(s)?:\/\//.test(url)) {
        return url;
    }
    return "" + PROTOCOL + url;
}
exports.formatUrl = formatUrl;
function base64url(source) {
    var encodedSource = enc_base64_1.default.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
}
function createSign(payload, secret) {
    var header = {
        alg: 'HS256',
        typ: 'JWT',
    };
    var headerStr = base64url(enc_utf8_1.default.parse(JSON.stringify(header)));
    var payloadStr = base64url(enc_utf8_1.default.parse(JSON.stringify(payload)));
    var token = headerStr + "." + payloadStr;
    var sign = base64url(hmac_sha256_1.default(token, secret));
    return token + "." + sign;
}
exports.createSign = createSign;
function toQueryString(query) {
    if (query === void 0) { query = {}; }
    var queryString = [];
    Object.keys(query).forEach(function (key) {
        queryString.push(key + "=" + encodeURIComponent(query[key]));
    });
    return queryString.join('&');
}
exports.toQueryString = toQueryString;
function getQuery(name, url) {
    if (typeof window === 'undefined') {
        return false;
    }
    var u = url || window.location.search;
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = u.substr(u.indexOf('?') + 1).match(reg);
    return (r !== null && r !== undefined) ? r[2] : '';
}
exports.getQuery = getQuery;
exports.getHash = function (name) {
    if (typeof window === 'undefined') {
        return '';
    }
    var matches = window.location.hash.match(new RegExp("[#?&/]" + name + "=([^&#]*)"));
    return matches ? matches[1] : '';
};
function removeParam(key, sourceURL) {
    var rtn = sourceURL.split('?')[0];
    var param;
    var params = [];
    var queryString = sourceURL.indexOf('?') !== -1 ? sourceURL.split('?')[1] : '';
    if (queryString !== '') {
        params = queryString.split('&');
        for (var i = params.length - 1; i >= 0; i -= 1) {
            param = params[i].split('=')[0];
            if (param === key) {
                params.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params.join('&');
    }
    return rtn;
}
exports.removeParam = removeParam;
function createPromiseCallback() {
    var cb;
    if (!Promise) {
        cb = function () { };
        cb.promise = {};
        var throwPromiseNotDefined = function () {
            throw new Error('Your Node runtime does support ES6 Promises. '
                + 'Set "global.Promise" to your preferred implementation of promises.');
        };
        Object.defineProperty(cb.promise, 'then', { get: throwPromiseNotDefined });
        Object.defineProperty(cb.promise, 'catch', { get: throwPromiseNotDefined });
        return cb;
    }
    var promise = new Promise(function (resolve, reject) {
        cb = function (err, data) {
            if (err)
                return reject(err);
            return resolve(data);
        };
    });
    cb.promise = promise;
    return cb;
}
exports.createPromiseCallback = createPromiseCallback;
function execCallback(fn, err, data) {
    if (data === void 0) { data = null; }
    if (fn && typeof fn === 'function') {
        return fn(err, data);
    }
    if (err) {
        throw err;
    }
    return data;
}
exports.execCallback = execCallback;
function printWarn(error, msg) {
    console.warn("[" + constants_1.getSdkName() + "][" + error + "]:" + msg);
}
exports.printWarn = printWarn;
function printError(error, msg) {
    console.error({
        code: error,
        msg: "[" + constants_1.getSdkName() + "][" + error + "]:" + msg,
    });
}
exports.printError = printError;
function printInfo(error, msg) {
    console.log("[" + constants_1.getSdkName() + "][" + error + "]:" + msg);
}
exports.printInfo = printInfo;
function throwError(error, msg) {
    throw new Error(JSON.stringify({
        code: error,
        msg: "[" + constants_1.getSdkName() + "][" + error + "]:" + msg,
    }));
}
exports.throwError = throwError;
function printGroupLog(options) {
    var title = options.title, _a = options.subtitle, subtitle = _a === void 0 ? '' : _a, _b = options.content, content = _b === void 0 ? [] : _b, _c = options.printTrace, printTrace = _c === void 0 ? false : _c, _d = options.collapsed, collapsed = _d === void 0 ? false : _d;
    if (collapsed) {
        console.groupCollapsed(title, subtitle);
    }
    else {
        console.group(title, subtitle);
    }
    for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
        var tip = content_1[_i];
        var type = tip.type, body = tip.body;
        switch (type) {
            case 'info':
                console.log(body);
                break;
            case 'warn':
                console.warn(body);
                break;
            case 'error':
                console.error(body);
                break;
        }
    }
    if (printTrace) {
        console.trace('stack trace:');
    }
    console.groupEnd();
}
exports.printGroupLog = printGroupLog;
exports.sleep = function (ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (r) { return setTimeout(r, ms); });
};
function transformPhone(phoneNumber) {
    return "+86" + phoneNumber;
}
exports.transformPhone = transformPhone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0VBQXlDO0FBQ3pDLG9FQUF5QztBQUN6QyxnRUFBcUM7QUFFckMsMENBQXlDO0FBRXpDLFNBQWdCLE9BQU8sQ0FBQyxHQUFRO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGdCQUFnQixDQUFBO0FBQ2pFLENBQUM7QUFGRCwwQkFFQztBQUNELFNBQWdCLFFBQVEsQ0FBQyxHQUFRO0lBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFBO0FBQ2hDLENBQUM7QUFGRCw0QkFFQztBQUNELFNBQWdCLFdBQVcsQ0FBQyxHQUFRO0lBQ2xDLE9BQU8sT0FBTyxHQUFHLEtBQUssV0FBVyxDQUFBO0FBQ25DLENBQUM7QUFGRCxrQ0FFQztBQUNELFNBQWdCLGFBQWEsQ0FBQyxHQUFRO0lBQ3BDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGlCQUFpQixDQUFBO0FBQ2xFLENBQUM7QUFGRCxzQ0FFQztBQUNELFNBQWdCLE1BQU0sQ0FBQyxHQUFRO0lBQzdCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGVBQWUsQ0FBQTtBQUNoRSxDQUFDO0FBRkQsd0JBRUM7QUFDRCxTQUFnQixZQUFZLENBQUMsUUFBYSxFQUFFLFNBQWM7SUFDeEQsT0FBTyxRQUFRLFlBQVksU0FBUyxDQUFBO0FBQ3RDLENBQUM7QUFGRCxvQ0FFQztBQUNELFNBQWdCLFVBQVUsQ0FBQyxHQUFRO0lBQ2pDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLG1CQUFtQixDQUFB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RTtRQUF0QixJQUFNLEdBQUcsZ0JBQUE7UUFDSixJQUFBLElBQUksR0FBVyxHQUFHLEtBQWQsRUFBRSxJQUFJLEdBQUssR0FBRyxLQUFSLENBQVE7UUFDMUIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakIsTUFBSztZQUNQLEtBQUssTUFBTTtnQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNsQixNQUFLO1lBQ1AsS0FBSyxPQUFPO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ25CLE1BQUs7U0FDUjtLQUNGO0lBQ0QsSUFBSSxVQUFVLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0tBQzlCO0lBQ0QsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQ3BCLENBQUM7QUF6QkQsc0NBeUJDO0FBRVksUUFBQSxLQUFLLEdBQUcsVUFBQyxFQUFNO0lBQU4sbUJBQUEsRUFBQSxNQUFNO0lBQUssT0FBQSxJQUFJLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFVBQVUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQWpCLENBQWlCLENBQUM7QUFBbkMsQ0FBbUMsQ0FBQTtBQUVwRSxTQUFnQixjQUFjLENBQUMsV0FBbUI7SUFDaEQsT0FBTyxRQUFNLFdBQWEsQ0FBQTtBQUM1QixDQUFDO0FBRkQsd0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHMyNTYgZnJvbSAnY3J5cHRvLWpzL2htYWMtc2hhMjU2J1xuaW1wb3J0IGJhc2U2NCBmcm9tICdjcnlwdG8tanMvZW5jLWJhc2U2NCdcbmltcG9ydCB1dGY4IGZyb20gJ2NyeXB0by1qcy9lbmMtdXRmOCdcbmltcG9ydCB7IEtWIH0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcydcbmltcG9ydCB7IGdldFNka05hbWUgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJ1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJ1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFsaW5PYmplY3QodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh2YWw6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IE51bGxdJ1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5zdGFuY2VPZihpbnN0YW5jZTogYW55LCBjb25zdHJ1Y3Q6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJ1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlblNlcUlkKCk6IHN0cmluZyB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KVxuICAgIC5zbGljZSgyKVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybChQUk9UT0NPTDogc3RyaW5nLCB1cmw6IHN0cmluZywgcXVlcnk6IEtWPGFueT4gPSB7fSk6IHN0cmluZyB7XG4gIGNvbnN0IHVybEhhc1F1ZXJ5ID0gL1xcPy8udGVzdCh1cmwpXG4gIGxldCBxdWVyeVN0cmluZyA9ICcnXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAocXVlcnlTdHJpbmcgPT09ICcnKSB7XG4gICAgICAhdXJsSGFzUXVlcnkgJiYgKHVybCArPSAnPycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5U3RyaW5nICs9ICcmJ1xuICAgIH1cbiAgICBxdWVyeVN0cmluZyArPSBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5W2tleV0pfWBcbiAgfSlcbiAgdXJsICs9IHF1ZXJ5U3RyaW5nXG4gIGlmICgvXmh0dHAocyk/OlxcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIHVybFxuICB9XG4gIHJldHVybiBgJHtQUk9UT0NPTH0ke3VybH1gXG59XG5cbmZ1bmN0aW9uIGJhc2U2NHVybChzb3VyY2U6IEtWPGFueT4pOiBzdHJpbmcge1xuICBsZXQgZW5jb2RlZFNvdXJjZSA9IGJhc2U2NC5zdHJpbmdpZnkoc291cmNlKVxuXG4gIGVuY29kZWRTb3VyY2UgPSBlbmNvZGVkU291cmNlLnJlcGxhY2UoLz0rJC8sICcnKVxuICBlbmNvZGVkU291cmNlID0gZW5jb2RlZFNvdXJjZS5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICBlbmNvZGVkU291cmNlID0gZW5jb2RlZFNvdXJjZS5yZXBsYWNlKC9cXC8vZywgJ18nKVxuXG4gIHJldHVybiBlbmNvZGVkU291cmNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaWduKHBheWxvYWQ6IEtWPGFueT4sIHNlY3JldDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgaGVhZGVyID0ge1xuICAgIGFsZzogJ0hTMjU2JyxcbiAgICB0eXA6ICdKV1QnLFxuICB9XG4gIGNvbnN0IGhlYWRlclN0ciA9IGJhc2U2NHVybCh1dGY4LnBhcnNlKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpKVxuICBjb25zdCBwYXlsb2FkU3RyID0gYmFzZTY0dXJsKHV0ZjgucGFyc2UoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpKVxuXG4gIGNvbnN0IHRva2VuID0gYCR7aGVhZGVyU3RyfS4ke3BheWxvYWRTdHJ9YFxuICBjb25zdCBzaWduID0gYmFzZTY0dXJsKGhzMjU2KHRva2VuLCBzZWNyZXQpKVxuICByZXR1cm4gYCR7dG9rZW59LiR7c2lnbn1gXG59XG5leHBvcnQgZnVuY3Rpb24gdG9RdWVyeVN0cmluZyhxdWVyeTogS1Y8YW55PiA9IHt9KSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gW11cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHF1ZXJ5U3RyaW5nLnB1c2goYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVtrZXldKX1gKVxuICB9KVxuICByZXR1cm4gcXVlcnlTdHJpbmcuam9pbignJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeShuYW1lOiBzdHJpbmcsIHVybD86IHN0cmluZykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICAvLyDlj4LmlbDvvJrlj5jph4/lkI3vvIx1cmzkuLrnqbrliJnooajku47lvZPliY3pobXpnaLnmoR1cmzkuK3lj5ZcbiAgY29uc3QgdSA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG4gIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYChefCYpJHtuYW1lfT0oW14mXSopKCZ8JClgKVxuICBjb25zdCByID0gdS5zdWJzdHIodS5pbmRleE9mKCc/JykgKyAxKS5tYXRjaChyZWcpXG4gIHJldHVybiAociAhPT0gbnVsbCAmJiByICE9PSB1bmRlZmluZWQpID8gclsyXSA6ICcnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRIYXNoID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICBjb25zdCBtYXRjaGVzID0gd2luZG93LmxvY2F0aW9uLmhhc2gubWF0Y2gobmV3IFJlZ0V4cChgWyM/Ji9dJHtuYW1lfT0oW14mI10qKWApKVxuICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiAnJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGFyYW0oa2V5OiBzdHJpbmcsIHNvdXJjZVVSTDogc3RyaW5nKSB7XG4gIGxldCBydG4gPSBzb3VyY2VVUkwuc3BsaXQoJz8nKVswXVxuICBsZXQgcGFyYW1cbiAgbGV0IHBhcmFtcyA9IFtdXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc291cmNlVVJMLmluZGV4T2YoJz8nKSAhPT0gLTEgPyBzb3VyY2VVUkwuc3BsaXQoJz8nKVsxXSA6ICcnXG4gIGlmIChxdWVyeVN0cmluZyAhPT0gJycpIHtcbiAgICBwYXJhbXMgPSBxdWVyeVN0cmluZy5zcGxpdCgnJicpXG4gICAgZm9yIChsZXQgaSA9IHBhcmFtcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBwYXJhbSA9IHBhcmFtc1tpXS5zcGxpdCgnPScpWzBdXG4gICAgICBpZiAocGFyYW0gPT09IGtleSkge1xuICAgICAgICBwYXJhbXMuc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuICAgIHJ0biA9IGAke3J0bn0/JHtwYXJhbXMuam9pbignJicpfWBcbiAgfVxuICByZXR1cm4gcnRuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9taXNlQ2FsbGJhY2soKSB7XG4gIGxldCBjYjogYW55XG4gIGlmICghUHJvbWlzZSkge1xuICAgIGNiID0gKCkgPT4geyB9XG4gICAgY2IucHJvbWlzZSA9IHt9XG5cbiAgICBjb25zdCB0aHJvd1Byb21pc2VOb3REZWZpbmVkID0gKCkgPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIE5vZGUgcnVudGltZSBkb2VzIHN1cHBvcnQgRVM2IFByb21pc2VzLiAnXG4gICAgICAgICsgJ1NldCBcImdsb2JhbC5Qcm9taXNlXCIgdG8geW91ciBwcmVmZXJyZWQgaW1wbGVtZW50YXRpb24gb2YgcHJvbWlzZXMuJylcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2IucHJvbWlzZSwgJ3RoZW4nLCB7IGdldDogdGhyb3dQcm9taXNlTm90RGVmaW5lZCB9KVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYi5wcm9taXNlLCAnY2F0Y2gnLCB7IGdldDogdGhyb3dQcm9taXNlTm90RGVmaW5lZCB9KVxuICAgIHJldHVybiBjYlxuICB9XG5cbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjYiA9IChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgcmV0dXJuIHJlc29sdmUoZGF0YSlcbiAgICB9XG4gIH0pXG4gIGNiLnByb21pc2UgPSBwcm9taXNlXG4gIHJldHVybiBjYlxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhlY0NhbGxiYWNrKGZuOiBGdW5jdGlvbiB8IG51bGwgfCB1bmRlZmluZWQsIGVycjogYW55LCBkYXRhID0gbnVsbCkge1xuICBpZiAoZm4gJiYgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZuKGVyciwgZGF0YSlcbiAgfVxuICBpZiAoZXJyKSB7XG4gICAgdGhyb3cgZXJyXG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50V2FybihlcnJvcjogc3RyaW5nLCBtc2c6IHN0cmluZykge1xuICBjb25zb2xlLndhcm4oYFske2dldFNka05hbWUoKX1dWyR7ZXJyb3J9XToke21zZ31gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRFcnJvcihlcnJvcjogc3RyaW5nLCBtc2c6IHN0cmluZykge1xuICBjb25zb2xlLmVycm9yKHtcbiAgICBjb2RlOiBlcnJvcixcbiAgICBtc2c6IGBbJHtnZXRTZGtOYW1lKCl9XVske2Vycm9yfV06JHttc2d9YCxcbiAgfSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcmludEluZm8oZXJyb3I6IHN0cmluZywgbXNnOiBzdHJpbmcpIHtcbiAgY29uc29sZS5sb2coYFske2dldFNka05hbWUoKX1dWyR7ZXJyb3J9XToke21zZ31gKVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3I6IHN0cmluZywgbXNnOiBzdHJpbmcpIHtcbiAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHtcbiAgICBjb2RlOiBlcnJvcixcbiAgICBtc2c6IGBbJHtnZXRTZGtOYW1lKCl9XVske2Vycm9yfV06JHttc2d9YCxcbiAgfSkpXG59XG5cbmludGVyZmFjZSBJUHJpbnRHcm91cExvZ09wdGlvbnMge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nIHwgb2JqZWN0O1xuICBjb250ZW50OiB7XG4gICAgdHlwZTogJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJyxcbiAgICBib2R5OiBzdHJpbmcgfCBFcnJvcjtcbiAgfVtdO1xuICBwcmludFRyYWNlPzogYm9vbGVhbjtcbiAgY29sbGFwc2VkPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwTG9nKG9wdGlvbnM6IElQcmludEdyb3VwTG9nT3B0aW9ucykge1xuICBjb25zdCB7IHRpdGxlLCBzdWJ0aXRsZSA9ICcnLCBjb250ZW50ID0gW10sIHByaW50VHJhY2UgPSBmYWxzZSwgY29sbGFwc2VkID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgaWYgKGNvbGxhcHNlZCkge1xuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQodGl0bGUsIHN1YnRpdGxlKVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZ3JvdXAodGl0bGUsIHN1YnRpdGxlKVxuICB9XG4gIGZvciAoY29uc3QgdGlwIG9mIGNvbnRlbnQpIHtcbiAgICBjb25zdCB7IHR5cGUsIGJvZHkgfSA9IHRpcFxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgY29uc29sZS53YXJuKGJvZHkpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYm9keSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgaWYgKHByaW50VHJhY2UpIHtcbiAgICBjb25zb2xlLnRyYWNlKCdzdGFjayB0cmFjZTonKVxuICB9XG4gIGNvbnNvbGUuZ3JvdXBFbmQoKVxufVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAobXMgPSAwKSA9PiBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgbXMpKVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUGhvbmUocGhvbmVOdW1iZXI6IHN0cmluZykge1xuICByZXR1cm4gYCs4NiR7cGhvbmVOdW1iZXJ9YFxufVxuXG4iXX0=
}, function(modId) { var map = {"../constants":1734234913772}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913778, function(require, module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudbaseCache = void 0;
var adapter_interface_1 = require("@cloudbase/adapter-interface");
var util_1 = require("./util");
var constants_1 = require("../constants");
var TcbCacheObject = (function (_super) {
    __extends(TcbCacheObject, _super);
    function TcbCacheObject(root) {
        var _this = _super.call(this) || this;
        _this.root = root;
        if (!root.tcbCacheObject) {
            root.tcbCacheObject = {};
        }
        return _this;
    }
    TcbCacheObject.prototype.setItem = function (key, value) {
        this.root.tcbCacheObject[key] = value;
    };
    TcbCacheObject.prototype.getItem = function (key) {
        return this.root.tcbCacheObject[key];
    };
    TcbCacheObject.prototype.removeItem = function (key) {
        delete this.root.tcbCacheObject[key];
    };
    TcbCacheObject.prototype.clear = function () {
        delete this.root.tcbCacheObject;
    };
    return TcbCacheObject;
}(adapter_interface_1.AbstractStorage));
function createStorage(persistence, adapter) {
    switch (persistence) {
        case 'local':
            if (!adapter.localStorage) {
                util_1.printWarn(constants_1.ERRORS.INVALID_PARAMS, 'localStorage is not supported on current platform');
                return new TcbCacheObject(adapter.root);
            }
            return adapter.localStorage;
        case 'none':
            return new TcbCacheObject(adapter.root);
        default:
            if (!adapter.localStorage) {
                util_1.printWarn(constants_1.ERRORS.INVALID_PARAMS, 'localStorage is not supported on current platform');
                return new TcbCacheObject(adapter.root);
            }
            return adapter.localStorage;
    }
}
var CloudbaseCache = (function () {
    function CloudbaseCache(config) {
        this.keys = {};
        var persistence = config.persistence, _a = config.platformInfo, platformInfo = _a === void 0 ? {} : _a, _b = config.keys, keys = _b === void 0 ? {} : _b;
        this.platformInfo = platformInfo;
        if (!this.storage) {
            this.persistenceTag = this.platformInfo.adapter.primaryStorage || persistence;
            this.storage = createStorage(this.persistenceTag, this.platformInfo.adapter);
            this.keys = keys;
        }
    }
    Object.defineProperty(CloudbaseCache.prototype, "mode", {
        get: function () {
            return this.storage.mode || 'sync';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudbaseCache.prototype, "persistence", {
        get: function () {
            return this.persistenceTag;
        },
        enumerable: false,
        configurable: true
    });
    CloudbaseCache.prototype.setStore = function (key, value, version) {
        if (this.mode === 'async') {
            util_1.printWarn(constants_1.ERRORS.INVALID_OPERATION, 'current platform\'s storage is asynchronous, please use setStoreAsync insteed');
            return;
        }
        if (!this.storage) {
            return;
        }
        try {
            var val = {
                version: version || 'localCachev1',
                content: value,
            };
            this.storage.setItem(key, JSON.stringify(val));
        }
        catch (e) {
            throw new Error(JSON.stringify({
                code: constants_1.ERRORS.OPERATION_FAIL,
                msg: "[" + constants_1.getSdkName() + "][" + constants_1.ERRORS.OPERATION_FAIL + "]setStore failed",
                info: e,
            }));
        }
        return;
    };
    CloudbaseCache.prototype.setStoreAsync = function (key, value, version) {
        return __awaiter(this, void 0, void 0, function () {
            var val, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.storage) {
                            return [2];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        val = {
                            version: version || 'localCachev1',
                            content: value,
                        };
                        return [4, this.storage.setItem(key, JSON.stringify(val))];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [2];
                    case 4: return [2];
                }
            });
        });
    };
    CloudbaseCache.prototype.getStore = function (key, version) {
        var _a;
        if (this.mode === 'async') {
            util_1.printWarn(constants_1.ERRORS.INVALID_OPERATION, 'current platform\'s storage is asynchronous, please use getStoreAsync insteed');
            return;
        }
        try {
            if (typeof process !== 'undefined' && ((_a = process.env) === null || _a === void 0 ? void 0 : _a.tcb_token)) {
                return process.env.tcb_token;
            }
            if (!this.storage) {
                return '';
            }
        }
        catch (e) {
            return '';
        }
        version = version || 'localCachev1';
        var content = this.storage.getItem(key);
        if (!content) {
            return '';
        }
        if (content.indexOf(version) >= 0) {
            var d = JSON.parse(content);
            return d.content;
        }
        return '';
    };
    CloudbaseCache.prototype.getStoreAsync = function (key, version) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var content, d;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        try {
                            if (typeof process !== 'undefined' && ((_a = process.env) === null || _a === void 0 ? void 0 : _a.tcb_token)) {
                                return [2, process.env.tcb_token];
                            }
                            if (!this.storage) {
                                return [2, ''];
                            }
                        }
                        catch (e) {
                            return [2, ''];
                        }
                        version = version || 'localCachev1';
                        return [4, this.storage.getItem(key)];
                    case 1:
                        content = _b.sent();
                        if (!content) {
                            return [2, ''];
                        }
                        if (content.indexOf(version) >= 0) {
                            d = JSON.parse(content);
                            return [2, d.content];
                        }
                        return [2, ''];
                }
            });
        });
    };
    CloudbaseCache.prototype.removeStore = function (key) {
        if (this.mode === 'async') {
            util_1.printWarn(constants_1.ERRORS.INVALID_OPERATION, 'current platform\'s storage is asynchronous, please use removeStoreAsync insteed');
            return;
        }
        this.storage.removeItem(key);
    };
    CloudbaseCache.prototype.removeStoreAsync = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.storage.removeItem(key)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return CloudbaseCache;
}());
exports.CloudbaseCache = CloudbaseCache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9jYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQXFHO0FBR3JHLCtCQUFrQztBQUNsQywwQ0FBaUQ7QUFLakQ7SUFBNkIsa0NBQWU7SUFFMUMsd0JBQVksSUFBUztRQUFyQixZQUNFLGlCQUFPLFNBS1I7UUFKQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQTtTQUN6Qjs7SUFDSCxDQUFDO0lBQ00sZ0NBQU8sR0FBZCxVQUFlLEdBQVcsRUFBRSxLQUFVO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQTtJQUN2QyxDQUFDO0lBQ00sZ0NBQU8sR0FBZCxVQUFlLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBQ00sbUNBQVUsR0FBakIsVUFBa0IsR0FBVztRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFDTSw4QkFBSyxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUNqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBckJELENBQTZCLG1DQUFlLEdBcUIzQztBQUlELFNBQVMsYUFBYSxDQUFDLFdBQXdCLEVBQUUsT0FBNEI7SUFDM0UsUUFBUSxXQUFXLEVBQUU7UUFDbkIsS0FBSyxPQUFPO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7Z0JB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QkFDdkMsV0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUE7Ozs7O0tBQ25DO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBeElELElBd0lDO0FBeElZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmFnZUludGVyZmFjZSwgQWJzdHJhY3RTdG9yYWdlLCBTREtBZGFwdGVySW50ZXJmYWNlIH0gZnJvbSAnQGNsb3VkYmFzZS9hZGFwdGVyLWludGVyZmFjZSdcbmltcG9ydCB7IElDbG91ZGJhc2VDYWNoZSwgSUNhY2hlQ29uZmlnIH0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcy9jYWNoZSdcbmltcG9ydCB7IEtWLCBQZXJzaXN0ZW5jZSwgSUNsb3VkYmFzZVBsYXRmb3JtSW5mbyB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMnXG5pbXBvcnQgeyBwcmludFdhcm4gfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBFUlJPUlMsIGdldFNka05hbWUgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbi8qKlxuICogcGVyc2l0ZW5jZT1ub25l5pe255m75b2V5oCB5L+d5a2Y5Zyo5YaF5a2Y5LitXG4gKi9cbmNsYXNzIFRjYkNhY2hlT2JqZWN0IGV4dGVuZHMgQWJzdHJhY3RTdG9yYWdlIHtcbiAgcHJpdmF0ZSByZWFkb25seSByb290OiBhbnk7XG4gIGNvbnN0cnVjdG9yKHJvb3Q6IGFueSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJvb3QgPSByb290XG4gICAgaWYgKCFyb290LnRjYkNhY2hlT2JqZWN0KSB7XG4gICAgICByb290LnRjYkNhY2hlT2JqZWN0ID0ge31cbiAgICB9XG4gIH1cbiAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnJvb3QudGNiQ2FjaGVPYmplY3Rba2V5XSA9IHZhbHVlXG4gIH1cbiAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnRjYkNhY2hlT2JqZWN0W2tleV1cbiAgfVxuICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xuICAgIGRlbGV0ZSB0aGlzLnJvb3QudGNiQ2FjaGVPYmplY3Rba2V5XVxuICB9XG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICBkZWxldGUgdGhpcy5yb290LnRjYkNhY2hlT2JqZWN0XG4gIH1cbn1cbi8qKlxuICog5bel5Y6C5Ye95pWwXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2UocGVyc2lzdGVuY2U6IFBlcnNpc3RlbmNlLCBhZGFwdGVyOiBTREtBZGFwdGVySW50ZXJmYWNlKTogU3RvcmFnZUludGVyZmFjZSB7XG4gIHN3aXRjaCAocGVyc2lzdGVuY2UpIHtcbiAgICBjYXNlICdsb2NhbCc6XG4gICAgICBpZiAoIWFkYXB0ZXIubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIHByaW50V2FybihFUlJPUlMuSU5WQUxJRF9QQVJBTVMsICdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZCBvbiBjdXJyZW50IHBsYXRmb3JtJylcbiAgICAgICAgLy8g5LiN5pSv5oyBbG9jYWxzdG9yYWdl55qE5bmz5Y+w6ZmN57qn5Li6bm9uZVxuICAgICAgICByZXR1cm4gbmV3IFRjYkNhY2hlT2JqZWN0KGFkYXB0ZXIucm9vdClcbiAgICAgIH1cbiAgICAgIHJldHVybiBhZGFwdGVyLmxvY2FsU3RvcmFnZVxuICAgIGNhc2UgJ25vbmUnOlxuICAgICAgcmV0dXJuIG5ldyBUY2JDYWNoZU9iamVjdChhZGFwdGVyLnJvb3QpXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICghYWRhcHRlci5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgcHJpbnRXYXJuKEVSUk9SUy5JTlZBTElEX1BBUkFNUywgJ2xvY2FsU3RvcmFnZSBpcyBub3Qgc3VwcG9ydGVkIG9uIGN1cnJlbnQgcGxhdGZvcm0nKVxuICAgICAgICAvLyDkuI3mlK/mjIFsb2NhbHN0b3JhZ2XnmoTlubPlj7DpmY3nuqfkuLpub25lXG4gICAgICAgIHJldHVybiBuZXcgVGNiQ2FjaGVPYmplY3QoYWRhcHRlci5yb290KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFkYXB0ZXIubG9jYWxTdG9yYWdlXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkYmFzZUNhY2hlIGltcGxlbWVudHMgSUNsb3VkYmFzZUNhY2hlIHtcbiAgcHVibGljIGtleXM6IEtWPHN0cmluZz4gPSB7fTtcblxuICBwcml2YXRlIHBlcnNpc3RlbmNlVGFnOiBQZXJzaXN0ZW5jZTtcbiAgcHJpdmF0ZSBwbGF0Zm9ybUluZm86IElDbG91ZGJhc2VQbGF0Zm9ybUluZm87XG4gIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZUludGVyZmFjZTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElDYWNoZUNvbmZpZykge1xuICAgIGNvbnN0IHsgcGVyc2lzdGVuY2UsIHBsYXRmb3JtSW5mbyA9IHt9LCBrZXlzID0ge30gfSA9IGNvbmZpZ1xuICAgIHRoaXMucGxhdGZvcm1JbmZvID0gcGxhdGZvcm1JbmZvXG4gICAgaWYgKCF0aGlzLnN0b3JhZ2UpIHtcbiAgICAgIHRoaXMucGVyc2lzdGVuY2VUYWcgPSB0aGlzLnBsYXRmb3JtSW5mby5hZGFwdGVyLnByaW1hcnlTdG9yYWdlIHx8IHBlcnNpc3RlbmNlXG4gICAgICB0aGlzLnN0b3JhZ2UgPSBjcmVhdGVTdG9yYWdlKHRoaXMucGVyc2lzdGVuY2VUYWcsIHRoaXMucGxhdGZvcm1JbmZvLmFkYXB0ZXIpXG4gICAgICB0aGlzLmtleXMgPSBrZXlzXG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAZ2V0dGVyIHN0b3JhZ2XmqKHlvI8t5ZCM5q2lL+W8guatpVxuICAgKi9cbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5tb2RlIHx8ICdzeW5jJ1xuICB9XG4gIGdldCBwZXJzaXN0ZW5jZSgpOiBQZXJzaXN0ZW5jZSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdGVuY2VUYWdcbiAgfVxuXG4gIHB1YmxpYyBzZXRTdG9yZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgdmVyc2lvbj86IGFueSkge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdhc3luYycpIHtcbiAgICAgIHByaW50V2FybihFUlJPUlMuSU5WQUxJRF9PUEVSQVRJT04sICdjdXJyZW50IHBsYXRmb3JtXFwncyBzdG9yYWdlIGlzIGFzeW5jaHJvbm91cywgcGxlYXNlIHVzZSBzZXRTdG9yZUFzeW5jIGluc3RlZWQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghdGhpcy5zdG9yYWdlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsID0ge1xuICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uIHx8ICdsb2NhbENhY2hldjEnLFxuICAgICAgICBjb250ZW50OiB2YWx1ZSxcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsKSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjb2RlOiBFUlJPUlMuT1BFUkFUSU9OX0ZBSUwsXG4gICAgICAgIG1zZzogYFske2dldFNka05hbWUoKX1dWyR7RVJST1JTLk9QRVJBVElPTl9GQUlMfV1zZXRTdG9yZSBmYWlsZWRgLFxuICAgICAgICBpbmZvOiBlLFxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmV0dXJuXG4gIH1cbiAgcHVibGljIGFzeW5jIHNldFN0b3JlQXN5bmMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHZlcnNpb24/OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuc3RvcmFnZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbCA9IHtcbiAgICAgICAgdmVyc2lvbjogdmVyc2lvbiB8fCAnbG9jYWxDYWNoZXYxJyxcbiAgICAgICAgY29udGVudDogdmFsdWUsXG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbCkpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuXG4gIH1cbiAgcHVibGljIGdldFN0b3JlKGtleTogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2FzeW5jJykge1xuICAgICAgcHJpbnRXYXJuKEVSUk9SUy5JTlZBTElEX09QRVJBVElPTiwgJ2N1cnJlbnQgcGxhdGZvcm1cXCdzIHN0b3JhZ2UgaXMgYXN5bmNocm9ub3VzLCBwbGVhc2UgdXNlIGdldFN0b3JlQXN5bmMgaW5zdGVlZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIOa1i+ivleeUqOS+i+S9v+eUqFxuICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudj8udGNiX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi50Y2JfdG9rZW5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnN0b3JhZ2UpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgdmVyc2lvbiA9IHZlcnNpb24gfHwgJ2xvY2FsQ2FjaGV2MSdcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBpZiAoY29udGVudC5pbmRleE9mKHZlcnNpb24pID49IDApIHtcbiAgICAgIGNvbnN0IGQgPSBKU09OLnBhcnNlKGNvbnRlbnQpXG4gICAgICByZXR1cm4gZC5jb250ZW50XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9XG4gIHB1YmxpYyBhc3luYyBnZXRTdG9yZUFzeW5jKGtleTogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIOa1i+ivleeUqOS+i+S9v+eUqFxuICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudj8udGNiX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi50Y2JfdG9rZW5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnN0b3JhZ2UpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgdmVyc2lvbiA9IHZlcnNpb24gfHwgJ2xvY2FsQ2FjaGV2MSdcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBpZiAoY29udGVudC5pbmRleE9mKHZlcnNpb24pID49IDApIHtcbiAgICAgIGNvbnN0IGQgPSBKU09OLnBhcnNlKGNvbnRlbnQpXG4gICAgICByZXR1cm4gZC5jb250ZW50XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9XG4gIHB1YmxpYyByZW1vdmVTdG9yZShrZXk6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdhc3luYycpIHtcbiAgICAgIHByaW50V2FybihFUlJPUlMuSU5WQUxJRF9PUEVSQVRJT04sICdjdXJyZW50IHBsYXRmb3JtXFwncyBzdG9yYWdlIGlzIGFzeW5jaHJvbm91cywgcGxlYXNlIHVzZSByZW1vdmVTdG9yZUFzeW5jIGluc3RlZWQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgfVxuICBwdWJsaWMgYXN5bmMgcmVtb3ZlU3RvcmVBc3luYyhrZXk6IHN0cmluZykge1xuICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgfVxufVxuIl19
}, function(modId) { var map = {"./util":1734234913777,"../constants":1734234913772}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913779, function(require, module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEventListener = exports.activateEvent = exports.addEventListener = exports.CloudbaseEventEmitter = exports.IErrorEvent = exports.CloudbaseEvent = void 0;
var util_1 = require("./util");
function customeAddEventListener(name, listener, listeners) {
    listeners[name] = listeners[name] || [];
    listeners[name].push(listener);
}
function customRemoveEventListener(name, listener, listeners) {
    if (listeners === null || listeners === void 0 ? void 0 : listeners[name]) {
        var index = listeners[name].indexOf(listener);
        if (index !== -1) {
            listeners[name].splice(index, 1);
        }
    }
}
var CloudbaseEvent = (function () {
    function CloudbaseEvent(name, data) {
        this.data = data || null;
        this.name = name;
    }
    return CloudbaseEvent;
}());
exports.CloudbaseEvent = CloudbaseEvent;
var IErrorEvent = (function (_super) {
    __extends(IErrorEvent, _super);
    function IErrorEvent(error, data) {
        var _this = _super.call(this, 'error', { error: error, data: data }) || this;
        _this.error = error;
        return _this;
    }
    return IErrorEvent;
}(CloudbaseEvent));
exports.IErrorEvent = IErrorEvent;
var CloudbaseEventEmitter = (function () {
    function CloudbaseEventEmitter() {
        this.listeners = {};
    }
    CloudbaseEventEmitter.prototype.on = function (name, listener) {
        customeAddEventListener(name, listener, this.listeners);
        return this;
    };
    CloudbaseEventEmitter.prototype.off = function (name, listener) {
        customRemoveEventListener(name, listener, this.listeners);
        return this;
    };
    CloudbaseEventEmitter.prototype.fire = function (event, data) {
        if (util_1.isInstanceOf(event, IErrorEvent)) {
            console.error(event.error);
            return this;
        }
        var ev = util_1.isString(event) ? new CloudbaseEvent(event, data || {}) : event;
        var name = ev.name;
        if (this.listens(name)) {
            ev.target = this;
            var handlers = this.listeners[name] ? __spreadArrays(this.listeners[name]) : [];
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                var fn = handlers_1[_i];
                fn.call(this, ev);
            }
        }
        return this;
    };
    CloudbaseEventEmitter.prototype.listens = function (name) {
        return this.listeners[name] && this.listeners[name].length > 0;
    };
    return CloudbaseEventEmitter;
}());
exports.CloudbaseEventEmitter = CloudbaseEventEmitter;
var eventEmitter = new CloudbaseEventEmitter();
function addEventListener(event, callback) {
    eventEmitter.on(event, callback);
}
exports.addEventListener = addEventListener;
function activateEvent(event, data) {
    if (data === void 0) { data = {}; }
    eventEmitter.fire(event, data);
}
exports.activateEvent = activateEvent;
function removeEventListener(event, callback) {
    eventEmitter.off(event, callback);
}
exports.removeEventListener = removeEventListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStDO0FBVy9DLFNBQVMsdUJBQXVCLENBQUMsSUFBWSxFQUFFLFFBQWtCLEVBQUUsU0FBb0I7SUFDckYsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNoQyxDQUFDO0FBUUQsU0FBUyx5QkFBeUIsQ0FBQyxJQUFZLEVBQUUsUUFBa0IsRUFBRSxTQUFvQjtJQUN2RixJQUFJLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRyxJQUFJLEdBQUc7UUFDckIsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNqQztLQUNGO0FBQ0gsQ0FBQztBQVlEO0lBS0Usd0JBQVksSUFBWSxFQUFFLElBQVM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksd0NBQWM7QUFpQjNCO0lBQWlDLCtCQUFjO0lBRTdDLHFCQUFZLEtBQVksRUFBRSxJQUFVO1FBQXBDLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxTQUVoQztRQURDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBOztJQUNwQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBaUMsY0FBYyxHQU05QztBQU5ZLGtDQUFXO0FBV3hCO0lBQUE7UUFPbUIsY0FBUyxHQUFjLEVBQUUsQ0FBQztJQThEN0MsQ0FBQztJQXJEUSxrQ0FBRSxHQUFULFVBQVUsSUFBWSxFQUFFLFFBQWtCO1FBQ3hDLHVCQUF1QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQVFNLG1DQUFHLEdBQVYsVUFBVyxJQUFZLEVBQUUsUUFBa0I7UUFDekMseUJBQXlCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDekQsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBT00sb0NBQUksR0FBWCxVQUFZLEtBQThCLEVBQUUsSUFBVTtRQUVwRCxJQUFJLG1CQUFZLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUUsS0FBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMzQyxPQUFPLElBQUksQ0FBQTtTQUNaO1FBRUQsSUFBTSxFQUFFLEdBQW1CLGVBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsS0FBZSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBdUIsQ0FBQTtRQUU5RyxJQUFBLElBQUksR0FBSyxFQUFFLEtBQVAsQ0FBTztRQUVuQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFaEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtZQUN0RSxLQUFpQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtnQkFBdEIsSUFBTSxFQUFFLGlCQUFBO2dCQUNYLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO2FBQ2xCO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFRTyx1Q0FBTyxHQUFmLFVBQWdCLElBQVk7UUFDMUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDO0FBckVZLHNEQUFxQjtBQXdFbEMsSUFBTSxZQUFZLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFBO0FBRWhELFNBQWdCLGdCQUFnQixDQUFDLEtBQWEsRUFBRSxRQUFrQjtJQUNoRSxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUNsQyxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsS0FBYSxFQUFFLElBQWM7SUFBZCxxQkFBQSxFQUFBLFNBQWM7SUFDekQsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDaEMsQ0FBQztBQUZELHNDQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsS0FBYSxFQUFFLFFBQWtCO0lBQ25FLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQ25DLENBQUM7QUFGRCxrREFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU3RyaW5nLCBpc0luc3RhbmNlT2YgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBMaXN0ZW5lcnMsIElDbG91ZGJhc2VFdmVudEVtaXR0ZXIgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzL2V2ZW50cydcblxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIgLSDmt7vliqDnm5HlkKxcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gZXZlbnTlkI3np7BcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0g5ZON5bqU5Ye95pWwXG4gKiBAcGFyYW0ge0xpc3RlbmVyc30gbGlzdGVuZXJzIC0g5bey5a2Y5ZON5bqU5Ye95pWw6ZuG5ZCIXG4gKi9cbmZ1bmN0aW9uIGN1c3RvbWVBZGRFdmVudExpc3RlbmVyKG5hbWU6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uLCBsaXN0ZW5lcnM6IExpc3RlbmVycykge1xuICBsaXN0ZW5lcnNbbmFtZV0gPSBsaXN0ZW5lcnNbbmFtZV0gfHwgW11cbiAgbGlzdGVuZXJzW25hbWVdLnB1c2gobGlzdGVuZXIpXG59XG4vKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gX3JlbW92ZUV2ZW50TGlzdGVuZXIgLSDnp7vpmaTnm5HlkKxcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gZXZlbnTlkI3np7BcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0g5ZON5bqU5Ye95pWwXG4gKiBAcGFyYW0ge0xpc3RlbmVyc30gbGlzdGVuZXJzIC0g5bey5a2Y5ZON5bqU5Ye95pWw6ZuG5ZCIXG4gKi9cbmZ1bmN0aW9uIGN1c3RvbVJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZTogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24sIGxpc3RlbmVyczogTGlzdGVuZXJzKSB7XG4gIGlmIChsaXN0ZW5lcnM/LltuYW1lXSkge1xuICAgIGNvbnN0IGluZGV4ID0gbGlzdGVuZXJzW25hbWVdLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgbGlzdGVuZXJzW25hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cbmludGVyZmFjZSBJRXZlbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRhcmdldDogYW55O1xuICBkYXRhOiBhbnk7XG59XG4vKipcbiAqIOiHquWumuS5ieS6i+S7tlxuICogQGNsYXNzIENsb3VkYmFzZUV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOexu+Wei1xuICogQHBhcmFtIHthbnl9IGRhdGEgLSDmlbDmja5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkYmFzZUV2ZW50IGltcGxlbWVudHMgSUV2ZW50IHtcbiAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgcHVibGljIHRhcmdldDogYW55O1xuICBwdWJsaWMgZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCBudWxsXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG59XG4vKipcbiAqIOiHquWumuS5iemUmeivr+S6i+S7tlxuICogQGNsYXNzIElFcnJvckV2ZW50XG4gKiBAZXh0ZW5kcyBDbG91ZGJhc2VFdmVudFxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgLSDplJnor6/kv6Hmga/lr7nosaFcbiAqIEBwYXJhbSB7YW55fSBkYXRhICAtIOaVsOaNrlxuICovXG5leHBvcnQgY2xhc3MgSUVycm9yRXZlbnQgZXh0ZW5kcyBDbG91ZGJhc2VFdmVudCB7XG4gIHB1YmxpYyByZWFkb25seSBlcnJvcjogRXJyb3I7XG4gIGNvbnN0cnVjdG9yKGVycm9yOiBFcnJvciwgZGF0YT86IGFueSkge1xuICAgIHN1cGVyKCdlcnJvcicsIHsgZXJyb3IsIGRhdGEgfSlcbiAgICB0aGlzLmVycm9yID0gZXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBDbG91ZGJhc2VFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkYmFzZUV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElDbG91ZGJhc2VFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJlYWRvbmx5XG4gICAqIEBwcm9wZXJ0eSB7TGlzdGVuZXJzfSBsaXN0ZW5lcnMgLSDlk43lupTlh73mlbDpm4blkIhcbiAgICogQGRlZmF1bHQgYHt9YFxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IExpc3RlbmVycyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBtZXRob2Qgb24gLSDmt7vliqDnm5HlkKxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBldmVudOWQjeensFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIOWTjeW6lOWHveaVsFxuICAgKiBAcmV0dXJuIGB0aGlzYFxuICAgKi9cbiAgcHVibGljIG9uKG5hbWU6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uKTogdGhpcyB7XG4gICAgY3VzdG9tZUFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIsIHRoaXMubGlzdGVuZXJzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG1ldGhvZCBvZmYgLSDnp7vpmaTnm5HlkKxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBldmVudOWQjeensFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIOWTjeW6lOWHveaVsFxuICAgKiBAcmV0dXJuIGB0aGlzYFxuICAgKi9cbiAgcHVibGljIG9mZihuYW1lOiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbik6IHRoaXMge1xuICAgIGN1c3RvbVJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIsIHRoaXMubGlzdGVuZXJzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG1ldGhvZCBmaXJlIC0g6Kem5Y+R5LqL5Lu2XG4gICAqIEBwYXJhbSB7c3RyaW5nfENsb3VkYmFzZUV2ZW50fSBldmVudCAtIGV2ZW50XG4gICAqIEByZXR1cm4gYHRoaXNgXG4gICAqL1xuICBwdWJsaWMgZmlyZShldmVudDogc3RyaW5nIHwgQ2xvdWRiYXNlRXZlbnQsIGRhdGE/OiBhbnkpOiB0aGlzIHtcbiAgICAvLyDmiZPljbDplJnor6/kv6Hmga9cbiAgICBpZiAoaXNJbnN0YW5jZU9mKGV2ZW50LCBJRXJyb3JFdmVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKGV2ZW50IGFzIElFcnJvckV2ZW50KS5lcnJvcilcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgY29uc3QgZXY6IENsb3VkYmFzZUV2ZW50ID0gaXNTdHJpbmcoZXZlbnQpID8gbmV3IENsb3VkYmFzZUV2ZW50KGV2ZW50IGFzIHN0cmluZywgZGF0YSB8fCB7fSkgOiBldmVudCBhcyBDbG91ZGJhc2VFdmVudFxuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBldlxuXG4gICAgaWYgKHRoaXMubGlzdGVucyhuYW1lKSkge1xuICAgICAgZXYudGFyZ2V0ID0gdGhpc1xuXG4gICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMubGlzdGVuZXJzW25hbWVdID8gWy4uLnRoaXMubGlzdGVuZXJzW25hbWVdXSA6IFtdXG4gICAgICBmb3IgKGNvbnN0IGZuIG9mIGhhbmRsZXJzKSB7XG4gICAgICAgIGZuLmNhbGwodGhpcywgZXYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWV0aG9kIGxpc3RlbnMgLSDliKTmlq3mmK/lkKbnm5HlkKzkuoZuYW1l5LqL5Lu2XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gZXZlbnTlkI3np7BcbiAgICogQHJldHVybiBgYm9vbGVhbmBcbiAgICovXG4gIHByaXZhdGUgbGlzdGVucyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnNbbmFtZV0gJiYgdGhpcy5saXN0ZW5lcnNbbmFtZV0ubGVuZ3RoID4gMFxuICB9XG59XG5cblxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IENsb3VkYmFzZUV2ZW50RW1pdHRlcigpXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICBldmVudEVtaXR0ZXIub24oZXZlbnQsIGNhbGxiYWNrKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVFdmVudChldmVudDogc3RyaW5nLCBkYXRhOiBhbnkgPSB7fSkge1xuICBldmVudEVtaXR0ZXIuZmlyZShldmVudCwgZGF0YSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gIGV2ZW50RW1pdHRlci5vZmYoZXZlbnQsIGNhbGxiYWNrKVxufVxuIl19
}, function(modId) { var map = {"./util":1734234913777}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913780, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./decorators"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMnXG4iXX0=
}, function(modId) { var map = {"./decorators":1734234913781}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913781, function(require, module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErrorsDecorator = void 0;
var util_1 = require("../libs/util");
var constants_1 = require("../constants");
var isFirefox = false;
if (typeof navigator !== 'undefined' && navigator.userAgent) {
    isFirefox = navigator.userAgent.indexOf('Firefox') !== -1;
}
var REG_STACK_DECORATE = isFirefox
    ? /(\.js\/)?__decorate(\$\d+)?<@.*\d$/
    : /(\/\w+\.js\.)?__decorate(\$\d+)?\s*\(.*\)$/;
var REG_STACK_LINK = /https?:\/\/.+:\d*\/.*\.js:\d+:\d+/;
function catchErrorsDecorator(options) {
    var _a = options.mode, mode = _a === void 0 ? 'async' : _a, _b = options.customInfo, customInfo = _b === void 0 ? {} : _b, title = options.title, _c = options.messages, messages = _c === void 0 ? [] : _c;
    return function (target, methodName, descriptor) {
        if (!constants_1.IS_DEBUG_MODE) {
            return;
        }
        var className = customInfo.className || target.constructor.name;
        var fnName = customInfo.methodName || methodName;
        var fn = descriptor.value;
        var sourceLink = getSourceLink(new Error());
        if (mode === 'sync') {
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var innerErr = getRewritedError({
                    err: new Error(),
                    className: className,
                    methodName: fnName,
                    sourceLink: sourceLink,
                });
                try {
                    return fn.apply(this, args);
                }
                catch (err) {
                    var failErr = err;
                    var errMsg = err.message, error = err.error, errorDescription = err.error_description;
                    var logs = {
                        title: title || className + "." + fnName + " failed",
                        content: [{
                                type: 'error',
                                body: err,
                            }],
                    };
                    if (errMsg && /^\{.*\}$/.test(errMsg)) {
                        var msg = JSON.parse(errMsg);
                        logs.subtitle = errMsg;
                        if (msg.code) {
                            if (innerErr) {
                                innerErr.code = msg.code;
                                innerErr.msg = msg.msg;
                            }
                            else {
                                err.code = msg.code;
                                err.message = msg.msg;
                            }
                            failErr = innerErr || err;
                            logs.content = messages.map(function (msg) { return ({
                                type: 'info',
                                body: msg,
                            }); });
                        }
                    }
                    if (error && errorDescription) {
                        logs.subtitle = errorDescription;
                        if (innerErr) {
                            innerErr.code = error;
                            innerErr.msg = errorDescription;
                        }
                        else {
                            err.code = error;
                            err.message = errorDescription;
                        }
                        failErr = innerErr || err;
                        logs.content = messages.map(function (msg) { return ({
                            type: 'info',
                            body: msg,
                        }); });
                    }
                    util_1.printGroupLog(logs);
                    throw failErr;
                }
            };
        }
        else {
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var innerErr, err_1, failErr, errMsg, error, errorDescription, logs, msg;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                innerErr = getRewritedError({
                                    err: new Error(),
                                    className: className,
                                    methodName: fnName,
                                    sourceLink: sourceLink,
                                });
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, fn.apply(this, args)];
                            case 2: return [2, _a.sent()];
                            case 3:
                                err_1 = _a.sent();
                                failErr = err_1;
                                errMsg = err_1.message, error = err_1.error, errorDescription = err_1.error_description;
                                logs = {
                                    title: title || className + "." + fnName + " failed",
                                    content: [{
                                            type: 'error',
                                            body: err_1,
                                        }],
                                };
                                if (errMsg && /^\{.*\}$/.test(errMsg)) {
                                    msg = JSON.parse(errMsg);
                                    logs.subtitle = msg;
                                    if (msg.code) {
                                        if (innerErr) {
                                            innerErr.code = msg.code;
                                            innerErr.message = msg.msg;
                                        }
                                        else {
                                            err_1.code = msg.code;
                                            err_1.message = msg.msg;
                                        }
                                        failErr = innerErr || err_1;
                                        logs.content = messages.map(function (msg) { return ({
                                            type: 'info',
                                            body: msg,
                                        }); });
                                    }
                                }
                                if (error && errorDescription) {
                                    logs.subtitle = errorDescription;
                                    if (innerErr) {
                                        innerErr.code = error;
                                        innerErr.msg = errorDescription;
                                    }
                                    else {
                                        err_1.code = error;
                                        err_1.message = errorDescription;
                                    }
                                    failErr = innerErr || err_1;
                                    logs.content = messages.map(function (msg) { return ({
                                        type: 'info',
                                        body: msg,
                                    }); });
                                }
                                util_1.printGroupLog(logs);
                                throw failErr;
                            case 4: return [2];
                        }
                    });
                });
            };
        }
    };
}
exports.catchErrorsDecorator = catchErrorsDecorator;
function getSourceLink(err) {
    var sourceLink = '';
    var outterErrStacks = err.stack.split('\n');
    var indexOfDecorator = outterErrStacks.findIndex(function (str) { return REG_STACK_DECORATE.test(str); });
    if (indexOfDecorator !== -1) {
        var match = REG_STACK_LINK.exec(outterErrStacks[indexOfDecorator + 1] || '');
        sourceLink = match ? match[0] : '';
    }
    return sourceLink;
}
function getRewritedError(options) {
    var err = options.err, className = options.className, methodName = options.methodName, sourceLink = options.sourceLink;
    if (!sourceLink) {
        return null;
    }
    var innerErrStack = err.stack.split('\n');
    var REG_STACK_INNER_METHOD = isFirefox
        ? /^catchErrorsDecorator\/<\/descriptor.value@.*\d$/
        : new RegExp(className + "\\.descriptor.value\\s*\\[as\\s" + methodName + "\\]\\s*\\(.*\\)$");
    var REG_STACK_INNER_METHOD_WITHOUT_LINK = isFirefox
        ? /^catchErrorsDecorator\/<\/descriptor.value/
        : new RegExp(className + "\\.descriptor.value\\s*\\[as\\s" + methodName + "\\]");
    var indexOfSource = innerErrStack.findIndex(function (str) { return REG_STACK_INNER_METHOD.test(str); });
    var innerErr;
    if (indexOfSource !== -1) {
        var realErrStack = innerErrStack.filter(function (v, i) { return i > indexOfSource; });
        realErrStack.unshift(innerErrStack[indexOfSource]
            .replace(REG_STACK_INNER_METHOD_WITHOUT_LINK, className + "." + methodName)
            .replace(REG_STACK_LINK, sourceLink));
        innerErr = new Error();
        innerErr.stack = (isFirefox ? '@debugger' : 'Error') + "\n" + realErrStack.join('\n');
    }
    return innerErr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2RlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTRDO0FBQzVDLDBDQUE0QztBQVk1QyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUE7QUFDckIsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtJQUMzRCxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7Q0FDMUQ7QUFJRCxJQUFNLGtCQUFrQixHQUFHLFNBQVM7SUFDbEMsQ0FBQyxDQUFDLG9DQUFvQztJQUN0QyxDQUFDLENBQUMsNENBQTRDLENBQUE7QUFDaEQsSUFBTSxjQUFjLEdBQUcsbUNBQW1DLENBQUE7QUFLMUQsU0FBZ0Isb0JBQW9CLENBQUMsT0FBcUM7SUFDaEUsSUFBQSxLQUEwRCxPQUFPLEtBQW5ELEVBQWQsSUFBSSxtQkFBRyxPQUFPLEtBQUEsRUFBRSxLQUEwQyxPQUFPLFdBQWxDLEVBQWYsVUFBVSxtQkFBRyxFQUFFLEtBQUEsRUFBRSxLQUFLLEdBQW9CLE9BQU8sTUFBM0IsRUFBRSxLQUFrQixPQUFPLFNBQVosRUFBYixRQUFRLG1CQUFHLEVBQUUsS0FBQSxDQUFZO0lBRXpFLE9BQU8sVUFDTCxNQUFXLEVBQ1gsVUFBa0IsRUFDbEIsVUFBNkM7UUFHN0MsSUFBSSxDQUFDLHlCQUFhLEVBQUU7WUFDbEIsT0FBTTtTQUNQO1FBQ0QsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtRQUNqRSxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQTtRQUNsRCxJQUFNLEVBQUUs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UUFDOUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFJLFNBQVMsdUNBQWtDLFVBQVUsUUFBSyxDQUFDLENBQUE7SUFDN0UsSUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLHNCQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFBO0lBQ3RGLElBQUksUUFBZSxDQUFBO0lBQ25CLElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBRXhCLElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLGFBQWEsRUFBakIsQ0FBaUIsQ0FBQyxDQUFBO1FBQ3RFLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzthQUM5QyxPQUFPLENBQUMsbUNBQW1DLEVBQUssU0FBUyxTQUFJLFVBQVksQ0FBQzthQUMxRSxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUE7UUFDdkMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUE7UUFDdEIsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLFdBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQTtLQUNwRjtJQUNELE9BQU8sUUFBUSxDQUFBO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmludEdyb3VwTG9nIH0gZnJvbSAnLi4vbGlicy91dGlsJ1xuaW1wb3J0IHsgSVNfREVCVUdfTU9ERSB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuaW50ZXJmYWNlIElDYXRjaEVycm9yc0RlY29yYXRvck9wdGlvbnMge1xuICBtb2RlPzogJ3N5bmMnIHwgJ2FzeW5jJztcbiAgY3VzdG9tSW5mbz86IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgbWV0aG9kTmFtZT86IHN0cmluZztcbiAgfTtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2VzPzogc3RyaW5nW107XG59XG4vLyBmaXJlZm9455qEc3RhY2vmoLzlvI/kuI5jaHJvbWXkuI3lkIxcbmxldCBpc0ZpcmVmb3ggPSBmYWxzZVxuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgIT09IC0xXG59XG4vKipcbiAqIGRlY29yYXRl5Zyoc3RhY2vkuK3kuIDoiKzpg73nibnlrprnmoTop4TojINcbiAqL1xuY29uc3QgUkVHX1NUQUNLX0RFQ09SQVRFID0gaXNGaXJlZm94XG4gID8gLyhcXC5qc1xcLyk/X19kZWNvcmF0ZShcXCRcXGQrKT88QC4qXFxkJC9cbiAgOiAvKFxcL1xcdytcXC5qc1xcLik/X19kZWNvcmF0ZShcXCRcXGQrKT9cXHMqXFwoLipcXCkkL1xuY29uc3QgUkVHX1NUQUNLX0xJTksgPSAvaHR0cHM/OlxcL1xcLy4rOlxcZCpcXC8uKlxcLmpzOlxcZCs6XFxkKy9cbi8qKlxuICogZGVidWfmqKHlvI/lvLrljJbml6Xlv5fkv6Hmga9cbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXRjaEVycm9yc0RlY29yYXRvcihvcHRpb25zOiBJQ2F0Y2hFcnJvcnNEZWNvcmF0b3JPcHRpb25zKSB7XG4gIGNvbnN0IHsgbW9kZSA9ICdhc3luYycsIGN1c3RvbUluZm8gPSB7fSwgdGl0bGUsIG1lc3NhZ2VzID0gW10gfSA9IG9wdGlvbnNcblxuICByZXR1cm4gZnVuY3Rpb24gKFxuICAgIHRhcmdldDogYW55LFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZyxcbiAgICBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxGdW5jdGlvbj5cbiAgKSB7XG4gICAgLy8g55Sf5Lqn546v5aKD56aB55SoXG4gICAgaWYgKCFJU19ERUJVR19NT0RFKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY3VzdG9tSW5mby5jbGFzc05hbWUgfHwgdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWVcbiAgICBjb25zdCBmbk5hbWUgPSBjdXN0b21JbmZvLm1ldGhvZE5hbWUgfHwgbWV0aG9kTmFtZVxuICAgIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZVxuXG4gICAgLy8g6KKrZGVjb3JhdG9y6KOF6aWw55qE5rqQ56CBbGlua1xuICAgIC8vIOWcqGRlc2NyaXB0b3IudmFsdWXlpJbpg6jmraTlpITliJvlu7rnmoRzdGFja+WxguasoeWPr+inpui+vua6kOeggVxuICAgIC8vIOiAjGRlc2NyaXB0b3IudmFsdWXlhoXpg6jmnInlj6/og73nlLHkuo5zdGFja+Wkqua3seaXoOazleinpui+vlxuICAgIGNvbnN0IHNvdXJjZUxpbmsgPSBnZXRTb3VyY2VMaW5rKG5ldyBFcnJvcigpKVxuXG4gICAgaWYgKG1vZGUgPT09ICdzeW5jJykge1xuICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAvLyDmraTlpITnmoRzdGFja+S9nOeUqOS4u+imgeaYr+S4uuS6huiOt+WPluiiq2RlY29yYXRvcuijhemlsOeahOa6kOeggWNsYXNz5ZKMbWV0aG9k5ZCN56ewXG4gICAgICAgIGNvbnN0IGlubmVyRXJyOiBhbnkgPSBnZXRSZXdyaXRlZEVycm9yKHtcbiAgICAgICAgICBlcnI6IG5ldyBFcnJvcigpLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBtZXRob2ROYW1lOiBmbk5hbWUsXG4gICAgICAgICAgc291cmNlTGluayxcbiAgICAgICAgfSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbGV0IGZhaWxFcnIgPSBlcnJcbiAgICAgICAgICBjb25zdCB7IG1lc3NhZ2U6IGVyck1zZywgZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvckRlc2NyaXB0aW9uIH0gPSBlcnJcbiAgICAgICAgICBjb25zdCBsb2dzOiBhbnkgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUgfHwgYCR7Y2xhc3NOYW1lfS4ke2ZuTmFtZX0gZmFpbGVkYCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFt7XG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgIGJvZHk6IGVycixcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDlj6rnibnmrorlpITnkIZTREvkuJrliqHpgLvovpHmipvlh7rnmoTplJnor68tSlNPTiBzdHJpbmdcbiAgICAgICAgICBpZiAoZXJyTXNnICYmIC9eXFx7LipcXH0kLy50ZXN0KGVyck1zZykpIHtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IEpTT04ucGFyc2UoZXJyTXNnKVxuICAgICAgICAgICAgbG9ncy5zdWJ0aXRsZSA9IGVyck1zZ1xuICAgICAgICAgICAgaWYgKG1zZy5jb2RlKSB7XG4gICAgICAgICAgICAgIGlmIChpbm5lckVycikge1xuICAgICAgICAgICAgICAgIGlubmVyRXJyLmNvZGUgPSBtc2cuY29kZVxuICAgICAgICAgICAgICAgIGlubmVyRXJyLm1zZyA9IG1zZy5tc2dcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9IG1zZy5jb2RlXG4gICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSBtc2cubXNnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmFpbEVyciA9IGlubmVyRXJyIHx8IGVyclxuICAgICAgICAgICAgICBsb2dzLmNvbnRlbnQgPSBtZXNzYWdlcy5tYXAobXNnID0+ICh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICAgICAgICAgIGJvZHk6IG1zZyxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gb2F1dGgg6ZSZ6K+v54m55q6K5aSE55CGXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGxvZ3Muc3VidGl0bGUgPSBlcnJvckRlc2NyaXB0aW9uXG4gICAgICAgICAgICBpZiAoaW5uZXJFcnIpIHtcbiAgICAgICAgICAgICAgaW5uZXJFcnIuY29kZSA9IGVycm9yXG4gICAgICAgICAgICAgIGlubmVyRXJyLm1zZyA9IGVycm9yRGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVyci5jb2RlID0gZXJyb3JcbiAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSBlcnJvckRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmYWlsRXJyID0gaW5uZXJFcnIgfHwgZXJyXG4gICAgICAgICAgICBsb2dzLmNvbnRlbnQgPSBtZXNzYWdlcy5tYXAobXNnID0+ICh7XG4gICAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgICAgICAgYm9keTogbXNnLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHByaW50R3JvdXBMb2cobG9ncylcbiAgICAgICAgICB0aHJvdyBmYWlsRXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGFzeW5jIGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBpbm5lckVycjogYW55ID0gZ2V0UmV3cml0ZWRFcnJvcih7XG4gICAgICAgICAgZXJyOiBuZXcgRXJyb3IoKSxcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgbWV0aG9kTmFtZTogZm5OYW1lLFxuICAgICAgICAgIHNvdXJjZUxpbmssXG4gICAgICAgIH0pXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgZm4uYXBwbHkodGhpcywgYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbGV0IGZhaWxFcnIgPSBlcnJcbiAgICAgICAgICBjb25zdCB7IG1lc3NhZ2U6IGVyck1zZywgZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvckRlc2NyaXB0aW9uIH0gPSBlcnJcbiAgICAgICAgICBjb25zdCBsb2dzOiBhbnkgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUgfHwgYCR7Y2xhc3NOYW1lfS4ke2ZuTmFtZX0gZmFpbGVkYCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFt7XG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgIGJvZHk6IGVycixcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDlj6rnibnmrorlpITnkIZTREvkuJrliqHpgLvovpHmipvlh7rnmoTplJnor68tSlNPTiBzdHJpbmdcbiAgICAgICAgICBpZiAoZXJyTXNnICYmIC9eXFx7LipcXH0kLy50ZXN0KGVyck1zZykpIHtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IEpTT04ucGFyc2UoZXJyTXNnKVxuICAgICAgICAgICAgbG9ncy5zdWJ0aXRsZSA9IG1zZ1xuICAgICAgICAgICAgaWYgKG1zZy5jb2RlKSB7XG4gICAgICAgICAgICAgIGlmIChpbm5lckVycikge1xuICAgICAgICAgICAgICAgIGlubmVyRXJyLmNvZGUgPSBtc2cuY29kZVxuICAgICAgICAgICAgICAgIGlubmVyRXJyLm1lc3NhZ2UgPSBtc2cubXNnXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSBtc2cuY29kZVxuICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gbXNnLm1zZ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZhaWxFcnIgPSBpbm5lckVyciB8fCBlcnJcbiAgICAgICAgICAgICAgbG9ncy5jb250ZW50ID0gbWVzc2FnZXMubWFwKG1zZyA9PiAoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgICAgICAgICBib2R5OiBtc2csXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG9hdXRoIOmUmeivr+eJueauiuWkhOeQhlxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvckRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBsb2dzLnN1YnRpdGxlID0gZXJyb3JEZXNjcmlwdGlvblxuICAgICAgICAgICAgaWYgKGlubmVyRXJyKSB7XG4gICAgICAgICAgICAgIGlubmVyRXJyLmNvZGUgPSBlcnJvclxuICAgICAgICAgICAgICBpbm5lckVyci5tc2cgPSBlcnJvckRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnIuY29kZSA9IGVycm9yXG4gICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gZXJyb3JEZXNjcmlwdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmFpbEVyciA9IGlubmVyRXJyIHx8IGVyclxuICAgICAgICAgICAgbG9ncy5jb250ZW50ID0gbWVzc2FnZXMubWFwKG1zZyA9PiAoe1xuICAgICAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgICAgIGJvZHk6IG1zZyxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgICBwcmludEdyb3VwTG9nKGxvZ3MpXG4gICAgICAgICAgdGhyb3cgZmFpbEVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5Zyo5Y6f5aeL5aCG5qCI5Lit5p+l5om+6KOF6aWw5Zmo5p2h55uu5bm26L+U5Zue5rqQ56CB6ZO+5o6lbGlua1xuICogQHBhcmFtIGVyclxuICovXG5mdW5jdGlvbiBnZXRTb3VyY2VMaW5rKGVycjogRXJyb3IpIHtcbiAgbGV0IHNvdXJjZUxpbmsgPSAnJ1xuICBjb25zdCBvdXR0ZXJFcnJTdGFja3MgPSBlcnIuc3RhY2suc3BsaXQoJ1xcbicpXG4gIGNvbnN0IGluZGV4T2ZEZWNvcmF0b3IgPSBvdXR0ZXJFcnJTdGFja3MuZmluZEluZGV4KHN0ciA9PiBSRUdfU1RBQ0tfREVDT1JBVEUudGVzdChzdHIpKVxuXG4gIGlmIChpbmRleE9mRGVjb3JhdG9yICE9PSAtMSkge1xuICAgIGNvbnN0IG1hdGNoID0gUkVHX1NUQUNLX0xJTksuZXhlYyhvdXR0ZXJFcnJTdGFja3NbaW5kZXhPZkRlY29yYXRvciArIDFdIHx8ICcnKVxuXG4gICAgc291cmNlTGluayA9IG1hdGNoID8gbWF0Y2hbMF0gOiAnJ1xuICB9XG4gIHJldHVybiBzb3VyY2VMaW5rXG59XG5cbi8qKlxuICog5Zyo5Y6f5aeL5aCG5qCI5Lit5p+l5om+6KOF6aWw5Zmo5p2h55uu77yM5YmU6Zmk5YW25ZCO55qE5peg55So5aCG5qCI77yM5bm25bCG6ZO+5o6l5pu/5o2i5Li65rqQ56CBbGlua1xuICogQHBhcmFtIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gZ2V0UmV3cml0ZWRFcnJvcihvcHRpb25zOiB7XG4gIGVycjogRXJyb3I7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBtZXRob2ROYW1lOiBzdHJpbmc7XG4gIHNvdXJjZUxpbms6IHN0cmluZztcbn0pIHtcbiAgY29uc3QgeyBlcnIsIGNsYXNzTmFtZSwgbWV0aG9kTmFtZSwgc291cmNlTGluayB9ID0gb3B0aW9uc1xuICAvLyDmib7kuI3liLDmupDnoIFsaW5r6L+U5ZuebnVsbO+8jOWQjue7remAu+i+keWwhuaJk+WNsOWOn+WghuagiOS/oeaBr1xuICBpZiAoIXNvdXJjZUxpbmspIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgaW5uZXJFcnJTdGFjayA9IGVyci5zdGFjay5zcGxpdCgnXFxuJylcbiAgY29uc3QgUkVHX1NUQUNLX0lOTkVSX01FVEhPRCA9IGlzRmlyZWZveFxuICAgID8gL15jYXRjaEVycm9yc0RlY29yYXRvclxcLzxcXC9kZXNjcmlwdG9yLnZhbHVlQC4qXFxkJC9cbiAgICA6IG5ldyBSZWdFeHAoYCR7Y2xhc3NOYW1lfVxcXFwuZGVzY3JpcHRvci52YWx1ZVxcXFxzKlxcXFxbYXNcXFxccyR7bWV0aG9kTmFtZX1cXFxcXVxcXFxzKlxcXFwoLipcXFxcKSRgKVxuICBjb25zdCBSRUdfU1RBQ0tfSU5ORVJfTUVUSE9EX1dJVEhPVVRfTElOSyA9IGlzRmlyZWZveFxuICAgID8gL15jYXRjaEVycm9yc0RlY29yYXRvclxcLzxcXC9kZXNjcmlwdG9yLnZhbHVlL1xuICAgIDogbmV3IFJlZ0V4cChgJHtjbGFzc05hbWV9XFxcXC5kZXNjcmlwdG9yLnZhbHVlXFxcXHMqXFxcXFthc1xcXFxzJHttZXRob2ROYW1lfVxcXFxdYClcbiAgY29uc3QgaW5kZXhPZlNvdXJjZSA9IGlubmVyRXJyU3RhY2suZmluZEluZGV4KHN0ciA9PiBSRUdfU1RBQ0tfSU5ORVJfTUVUSE9ELnRlc3Qoc3RyKSlcbiAgbGV0IGlubmVyRXJyOiBFcnJvclxuICBpZiAoaW5kZXhPZlNvdXJjZSAhPT0gLTEpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgcmVhbEVyclN0YWNrID0gaW5uZXJFcnJTdGFjay5maWx0ZXIoKHYsIGkpID0+IGkgPiBpbmRleE9mU291cmNlKVxuICAgIHJlYWxFcnJTdGFjay51bnNoaWZ0KGlubmVyRXJyU3RhY2tbaW5kZXhPZlNvdXJjZV1cbiAgICAgIC5yZXBsYWNlKFJFR19TVEFDS19JTk5FUl9NRVRIT0RfV0lUSE9VVF9MSU5LLCBgJHtjbGFzc05hbWV9LiR7bWV0aG9kTmFtZX1gKVxuICAgICAgLnJlcGxhY2UoUkVHX1NUQUNLX0xJTkssIHNvdXJjZUxpbmspKVxuICAgIGlubmVyRXJyID0gbmV3IEVycm9yKClcbiAgICBpbm5lckVyci5zdGFjayA9IGAke2lzRmlyZWZveCA/ICdAZGVidWdnZXInIDogJ0Vycm9yJ31cXG4ke3JlYWxFcnJTdGFjay5qb2luKCdcXG4nKX1gXG4gIH1cbiAgcmV0dXJuIGlubmVyRXJyXG59XG4iXX0=
}, function(modId) { var map = {"../libs/util":1734234913777,"../constants":1734234913772}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1734234913771);
})()
//miniprogram-npm-outsideDeps=["jwt-decode","@cloudbase/adapter-interface","crypto-js/hmac-sha256","crypto-js/enc-base64","crypto-js/enc-utf8"]
//# sourceMappingURL=index.js.map