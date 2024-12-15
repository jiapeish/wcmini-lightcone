module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1734234913891, function(require, module, exports) {

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
exports.helpers = exports.utils = exports.events = exports.cache = exports.adapters = exports.constants = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF5QztBQVF2Qyw4QkFBUztBQVBYLG1EQUF1QztBQVFyQyw0QkFBUTtBQVBWLGtEQUFzQztBQVFwQyxzQkFBSztBQVBQLG9EQUF3QztBQVF0Qyx3QkFBTTtBQVBSLGlEQUFxQztBQVFuQyxzQkFBSztBQVBQLGlEQUFxQztBQVFuQywwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBhZGFwdGVycyBmcm9tICcuL2FkYXB0ZXJzJztcbmltcG9ydCAqIGFzIGNhY2hlIGZyb20gJy4vbGlicy9jYWNoZSc7XG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9saWJzL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2xpYnMvdXRpbCc7XG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCB7XG4gIGNvbnN0YW50cyxcbiAgYWRhcHRlcnMsXG4gIGNhY2hlLFxuICBldmVudHMsXG4gIHV0aWxzLFxuICBoZWxwZXJzXG59OyJdfQ==
}, function(modId) {var map = {"./constants":1734234913892,"./adapters":1734234913895,"./libs/cache":1734234913898,"./libs/events":1734234913899,"./libs/util":1734234913897,"./helpers":1734234913900}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913892, function(require, module, exports) {

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
__exportStar(require("./common"), exports);
__exportStar(require("./errors"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5QjtBQUN6QiwyQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgKiBmcm9tICcuL2Vycm9ycyc7Il19
}, function(modId) { var map = {"./common":1734234913893,"./errors":1734234913894}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913893, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMUNITY_SITE_URL = exports.IS_DEBUG_MODE = exports.getProtocol = exports.setProtocol = exports.getSdkName = exports.setSdkName = void 0;
var sdk_name = '@cloudbase/js-sdk';
function setSdkName(name) {
    sdk_name = name;
}
exports.setSdkName = setSdkName;
function getSdkName() {
    return sdk_name;
}
exports.getSdkName = getSdkName;
var PROTOCOL = typeof location !== 'undefined' && location.protocol === 'http:'
    ? 'http:'
    : 'https:';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSSxRQUFRLEdBQUcsbUJBQW1CLENBQUM7QUFDbkMsU0FBZ0IsVUFBVSxDQUFDLElBQVc7SUFDcEMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNsQixDQUFDO0FBRkQsZ0NBRUM7QUFDRCxTQUFnQixVQUFVO0lBQ3hCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFGRCxnQ0FFQztBQUVELElBQUksUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLE9BQU87SUFDN0UsQ0FBQyxDQUFDLE9BQU87SUFDVCxDQUFDLENBQUMsUUFBUSxDQUFDO0FBRWIsU0FBZ0IsV0FBVyxDQUFDLFFBQXVCO0lBQ2pELFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDdEIsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsV0FBVztJQUN6QixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRkQsa0NBRUM7QUFFWSxRQUFBLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUM7QUFFdkQsUUFBQSxrQkFBa0IsR0FBRyx3Q0FBd0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzZGtfbmFtZSA9ICdAY2xvdWRiYXNlL2pzLXNkayc7XG5leHBvcnQgZnVuY3Rpb24gc2V0U2RrTmFtZShuYW1lOnN0cmluZyl7XG4gIHNka19uYW1lID0gbmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZGtOYW1lKCl7XG4gIHJldHVybiBzZGtfbmFtZTtcbn1cblxubGV0IFBST1RPQ09MID0gdHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHA6JyBcbiAgPyAnaHR0cDonIFxuICA6ICdodHRwczonO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvdG9jb2wocHJvdG9jb2w6J2h0dHAnfCdodHRwcycpe1xuICBQUk9UT0NPTCA9IHByb3RvY29sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvdG9jb2woKXtcbiAgcmV0dXJuIFBST1RPQ09MO1xufVxuLy8g5piv5ZCm5Li65byA5Y+R5qih5byPXG5leHBvcnQgY29uc3QgSVNfREVCVUdfTU9ERSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuLy8g6Zeu562U56S+5Yy66ZO+5o6lXG5leHBvcnQgY29uc3QgQ09NTVVOSVRZX1NJVEVfVVJMID0gJ2h0dHBzOi8vc3VwcG9ydC5xcS5jb20vcHJvZHVjdHMvMTQ4NzkzJzsiXX0=
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913894, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ERRORS = void 0;
exports.ERRORS = {
    INVALID_PARAMS: 'INVALID_PARAMS',
    INVALID_SYNTAX: 'INVALID_SYNTAX',
    INVALID_OPERATION: 'INVALID_OPERATION',
    OPERATION_FAIL: 'OPERATION_FAIL',
    NETWORK_ERROR: 'NETWORK_ERROR',
    UNKOWN_ERROR: 'UNKOWN_ERROR'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxNQUFNLEdBQUc7SUFDcEIsY0FBYyxFQUFLLGdCQUFnQjtJQUNuQyxjQUFjLEVBQUssZ0JBQWdCO0lBQ25DLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxjQUFjLEVBQUssZ0JBQWdCO0lBQ25DLGFBQWEsRUFBTSxlQUFlO0lBQ2xDLFlBQVksRUFBTyxjQUFjO0NBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRVJST1JTID0ge1xuICBJTlZBTElEX1BBUkFNUyAgIDogJ0lOVkFMSURfUEFSQU1TJyxcbiAgSU5WQUxJRF9TWU5UQVggICA6ICdJTlZBTElEX1NZTlRBWCcsXG4gIElOVkFMSURfT1BFUkFUSU9OOiAnSU5WQUxJRF9PUEVSQVRJT04nLFxuICBPUEVSQVRJT05fRkFJTCAgIDogJ09QRVJBVElPTl9GQUlMJyxcbiAgTkVUV09SS19FUlJPUiAgICA6ICdORVRXT1JLX0VSUk9SJyxcbiAgVU5LT1dOX0VSUk9SICAgICA6ICdVTktPV05fRVJST1InXG59OyJdfQ==
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913895, function(require, module, exports) {

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
                runtime: runtime
            };
        }
    }
}
exports.useAdapters = useAdapters;
function useDefaultAdapter() {
    return {
        adapter: Web.genAdapter(),
        runtime: RUNTIME.WEB
    };
}
exports.useDefaultAdapter = useDefaultAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRhcHRlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUF1QztBQUN2QyxxQ0FBdUM7QUFFdkMsSUFBWSxPQUdYO0FBSEQsV0FBWSxPQUFPO0lBQ2pCLHNCQUFXLENBQUE7SUFDWCwwQkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFHbEI7QUFFRCxTQUFnQixXQUFXLENBQUMsUUFBNkM7SUFDdkUsSUFBTSxXQUFXLEdBQXVCLGNBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBOEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUE0QixDQUFDLENBQUM7SUFDNUgsS0FBc0IsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7UUFBOUIsSUFBTSxPQUFPLG9CQUFBO1FBQ1IsSUFBQSxPQUFPLEdBQTBCLE9BQU8sUUFBakMsRUFBRSxVQUFVLEdBQWMsT0FBTyxXQUFyQixFQUFFLE9BQU8sR0FBSyxPQUFPLFFBQVosQ0FBYTtRQUNqRCxJQUFJLE9BQU8sRUFBRSxFQUFFO1lBQ2IsT0FBTztnQkFDTCxPQUFPLEVBQUUsVUFBVSxFQUFFO2dCQUNyQixPQUFPLFNBQUE7YUFDUixDQUFDO1NBQ0g7S0FDRjtBQUNILENBQUM7QUFYRCxrQ0FXQztBQUVELFNBQWdCLGlCQUFpQjtJQUMvQixPQUFPO1FBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUU7UUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO0tBQ3JCLENBQUM7QUFDSixDQUFDO0FBTEQsOENBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG91ZGJhc2VBZGFwdGVyIH0gZnJvbSAnQGNsb3VkYmFzZS9hZGFwdGVyLWludGVyZmFjZSc7XG5pbXBvcnQgKiBhcyBXZWIgZnJvbSAnLi9wbGF0Zm9ybXMvd2ViJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi9saWJzL3V0aWwnO1xuXG5leHBvcnQgZW51bSBSVU5USU1FIHtcbiAgV0VCID0gJ3dlYicsXG4gIFdYX01QID0gJ3d4X21wJyAvLyDlvq7kv6HlsI/nqIvluo9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFkYXB0ZXJzKGFkYXB0ZXJzOiBDbG91ZGJhc2VBZGFwdGVyfENsb3VkYmFzZUFkYXB0ZXJbXSkge1xuICBjb25zdCBhZGFwdGVyTGlzdDogQ2xvdWRiYXNlQWRhcHRlcltdID0gaXNBcnJheShhZGFwdGVycykgPyBhZGFwdGVycyBhcyBDbG91ZGJhc2VBZGFwdGVyW10gOiBbYWRhcHRlcnMgYXMgQ2xvdWRiYXNlQWRhcHRlcl07XG4gIGZvciAoY29uc3QgYWRhcHRlciBvZiBhZGFwdGVyTGlzdCkge1xuICAgIGNvbnN0IHsgaXNNYXRjaCwgZ2VuQWRhcHRlciwgcnVudGltZSB9ID0gYWRhcHRlcjtcbiAgICBpZiAoaXNNYXRjaCgpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGFwdGVyOiBnZW5BZGFwdGVyKCksXG4gICAgICAgIHJ1bnRpbWVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWZhdWx0QWRhcHRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICBhZGFwdGVyOiBXZWIuZ2VuQWRhcHRlcigpLFxuICAgIHJ1bnRpbWU6IFJVTlRJTUUuV0VCXG4gIH07XG59XG4iXX0=
}, function(modId) { var map = {"./platforms/web":1734234913896,"../libs/util":1734234913897}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913896, function(require, module, exports) {

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
        _this._timeout = timeout || 0;
        _this._timeoutMsg = timeoutMsg || '请求超时';
        _this._restrictedMethods = restrictedMethods || ['get', 'post', 'upload', 'download'];
        return _this;
    }
    WebRequest.prototype.get = function (options) {
        return this._request(__assign(__assign({}, options), { method: 'get' }), this._restrictedMethods.includes('get'));
    };
    WebRequest.prototype.post = function (options) {
        return this._request(__assign(__assign({}, options), { method: 'post' }), this._restrictedMethods.includes('post'));
    };
    WebRequest.prototype.put = function (options) {
        return this._request(__assign(__assign({}, options), { method: 'put' }));
    };
    WebRequest.prototype.upload = function (options) {
        var data = options.data, file = options.file, name = options.name;
        var formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]);
        }
        formData.append('key', name);
        formData.append('file', file);
        return this._request(__assign(__assign({}, options), { data: formData, method: 'post' }), this._restrictedMethods.includes('upload'));
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
                                tempFilePath: options.url
                            });
                        })];
                }
            });
        });
    };
    WebRequest.prototype._request = function (options, enableAbort) {
        var _this = this;
        if (enableAbort === void 0) { enableAbort = false; }
        var method = (String(options.method)).toLowerCase() || 'get';
        return new Promise(function (resolve) {
            var url = options.url, _a = options.headers, headers = _a === void 0 ? {} : _a, data = options.data, responseType = options.responseType, withCredentials = options.withCredentials, body = options.body, onUploadProgress = options.onUploadProgress;
            var realUrl = util_1.formatUrl(common_1.getProtocol(), url, method === 'get' ? data : {});
            var ajax = new XMLHttpRequest();
            ajax.open(method, realUrl);
            responseType && (ajax.responseType = responseType);
            for (var key in headers) {
                ajax.setRequestHeader(key, headers[key]);
            }
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
            if (enableAbort && _this._timeout) {
                timer = setTimeout(function () {
                    console.warn(_this._timeoutMsg);
                    ajax.abort();
                }, _this._timeout);
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
        sessionStorage: sessionStorage
    };
    return adapter;
}
exports.genAdapter = genAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3BsYXRmb3Jtcy93ZWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBUXNDO0FBQ3RDLHdDQUFxRTtBQUNyRSxpREFBcUQ7QUFLckQ7SUFBeUIsOEJBQWtCO0lBT3pDLG9CQUFZLE1BQXNCO1FBQWxDLFlBQ0UsaUJBQU8sU0FLUjtRQUpTLElBQUEsT0FBTyxHQUFrQyxNQUFNLFFBQXhDLEVBQUMsVUFBVSxHQUF1QixNQUFNLFdBQTdCLEVBQUMsaUJBQWlCLEdBQUssTUFBTSxrQkFBWCxDQUFZO1FBQ3hELEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUM3QixLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsSUFBSSxNQUFNLENBQUM7UUFDeEMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixJQUFJLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsVUFBVSxDQUFDLENBQUM7O0lBQ3BGLENBQUM7SUFDTSx3QkFBRyxHQUFWLFVBQVcsT0FBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSx1QkFDZixPQUFPLEtBQ1YsTUFBTSxFQUFFLEtBQUssS0FDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNNLHlCQUFJLEdBQVgsVUFBWSxPQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLHVCQUNmLE9BQU8sS0FDVixNQUFNLEVBQUUsTUFBTSxLQUNkLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ00sd0JBQUcsR0FBVixVQUFXLE9BQXdCO1FB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QUM7YUFDbEI7WUFFRCxJQUFJLE9BQU8sQ0FBQztZQUNaLElBQUcsaUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFFbkIsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNoQjtpQkFBTSxJQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxtQ0FBbUMsRUFBRTtnQkFDekUsT0FBTyxHQUFHLG9CQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBRyxJQUFJLEVBQUU7Z0JBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNoQjtpQkFBTTtnQkFFTCxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7YUFDbkQ7WUFFRCxJQUFHLGVBQWUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWpKRCxDQUF5QixzQ0FBa0IsR0FpSjFDO0FBYW1CLGdDQUFVO0FBWDlCLFNBQVMsVUFBVTtJQUNqQixJQUFNLE9BQU8sR0FBd0I7UUFDbkMsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsU0FBUztRQUNsQixZQUFZLEVBQUUsWUFBWTtRQUMxQixjQUFjLEVBQUUsY0FBYztLQUMvQixDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVRLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU0RLQWRhcHRlckludGVyZmFjZSxcbiAgQWJzdHJhY3RTREtSZXF1ZXN0LFxuICBJUmVxdWVzdE9wdGlvbnMsXG4gIFJlc3BvbnNlT2JqZWN0LFxuICBJVXBsb2FkUmVxdWVzdE9wdGlvbnMsXG4gIElSZXF1ZXN0Q29uZmlnLFxuICBJUmVxdWVzdE1ldGhvZFxufSBmcm9tICdAY2xvdWRiYXNlL2FkYXB0ZXItaW50ZXJmYWNlJztcbmltcG9ydCB7IGlzRm9ybURhdGEsZm9ybWF0VXJsLHRvUXVlcnlTdHJpbmcgfSBmcm9tICcuLi8uLi9saWJzL3V0aWwnO1xuaW1wb3J0IHsgZ2V0UHJvdG9jb2wgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29tbW9uJztcblxuLyoqXG4gKiBAY2xhc3MgV2ViUmVxdWVzdFxuICovXG5jbGFzcyBXZWJSZXF1ZXN0IGV4dGVuZHMgQWJzdHJhY3RTREtSZXF1ZXN0IHtcbiAgLy8g6buY6K6k5LiN6ZmQ6LaF5pe2XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RpbWVvdXQ6IG51bWJlcjtcbiAgLy8g6LaF5pe25o+Q56S65paH5qGIXG4gIHByaXZhdGUgcmVhZG9ubHkgX3RpbWVvdXRNc2c6IHN0cmluZztcbiAgLy8g6LaF5pe25Y+X6ZmQ6K+35rGC57G75Z6L77yM6buY6K6k5omA5pyJ6K+35rGC5Z2H5Y+X6ZmQXG4gIHByaXZhdGUgcmVhZG9ubHkgX3Jlc3RyaWN0ZWRNZXRob2RzOiBBcnJheTxJUmVxdWVzdE1ldGhvZD47XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogSVJlcXVlc3RDb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnN0IHsgdGltZW91dCx0aW1lb3V0TXNnLHJlc3RyaWN0ZWRNZXRob2RzIH0gPSBjb25maWc7XG4gICAgdGhpcy5fdGltZW91dCA9IHRpbWVvdXQgfHwgMDtcbiAgICB0aGlzLl90aW1lb3V0TXNnID0gdGltZW91dE1zZyB8fCAn6K+35rGC6LaF5pe2JztcbiAgICB0aGlzLl9yZXN0cmljdGVkTWV0aG9kcyA9IHJlc3RyaWN0ZWRNZXRob2RzIHx8IFsnZ2V0JywncG9zdCcsJ3VwbG9hZCcsJ2Rvd25sb2FkJ107XG4gIH1cbiAgcHVibGljIGdldChvcHRpb25zOiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Qoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG1ldGhvZDogJ2dldCdcbiAgICB9LHRoaXMuX3Jlc3RyaWN0ZWRNZXRob2RzLmluY2x1ZGVzKCdnZXQnKSk7XG4gIH1cbiAgcHVibGljIHBvc3Qob3B0aW9uczogSVJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxSZXNwb25zZU9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBtZXRob2Q6ICdwb3N0J1xuICAgIH0sdGhpcy5fcmVzdHJpY3RlZE1ldGhvZHMuaW5jbHVkZXMoJ3Bvc3QnKSk7XG4gIH1cbiAgcHVibGljIHB1dChvcHRpb25zOiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Qoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG1ldGhvZDogJ3B1dCdcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgdXBsb2FkKG9wdGlvbnM6IElVcGxvYWRSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8UmVzcG9uc2VPYmplY3Q+IHtcbiAgICBjb25zdCB7IGRhdGEsZmlsZSxuYW1lIH0gPSBvcHRpb25zO1xuICAgIC8vIHVwbG9hZOiwg+eUqGRhdGHkuLpvYmplY3TnsbvlnovvvIzlnKjmraTlpITovazkuLpGb3JtRGF0YVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9yKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LGRhdGFba2V5XSk7XG4gICAgfVxuICAgIGZvcm1EYXRhLmFwcGVuZCgna2V5JyxuYW1lKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLGZpbGUpO1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnXG4gICAgfSx0aGlzLl9yZXN0cmljdGVkTWV0aG9kcy5pbmNsdWRlcygndXBsb2FkJykpO1xuICB9XG4gIHB1YmxpYyBhc3luYyBkb3dubG9hZChvcHRpb25zOiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZ2V0KHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgaGVhZGVyczoge30sIC8vIOS4i+i9vei1hOa6kOivt+axguS4jee7j+i/h3NlcnZpY2XvvIxoZWFkZXLmuIXnqbpcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2RhdGFdKSk7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChuZXcgVVJMKG9wdGlvbnMudXJsKS5wYXRobmFtZS5zcGxpdCgnLycpLnBvcCgpIHx8ICcnKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsZmlsZU5hbWUpO1xuICAgICAgbGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgbGluay5jbGljaygpO1xuICAgICAgLy8g5Zue5pS25YaF5a2YXG4gICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICB9IGNhdGNoKGUpIHsgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHJlc29sdmUoe1xuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIHRlbXBGaWxlUGF0aDogb3B0aW9ucy51cmxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0lSZXF1ZXN0T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZUFib3J0IOaYr+WQpui2heaXtuS4reaWreivt+axglxuICAgKi9cbiAgcHJvdGVjdGVkIF9yZXF1ZXN0KG9wdGlvbnM6IElSZXF1ZXN0T3B0aW9ucyxlbmFibGVBYm9ydCA9IGZhbHNlKTogUHJvbWlzZTxSZXNwb25zZU9iamVjdD4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IChTdHJpbmcob3B0aW9ucy5tZXRob2QpKS50b0xvd2VyQ2FzZSgpIHx8ICdnZXQnO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHsgdXJsLGhlYWRlcnMgPSB7fSxkYXRhLHJlc3BvbnNlVHlwZSx3aXRoQ3JlZGVudGlhbHMsYm9keSxvblVwbG9hZFByb2dyZXNzIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgcmVhbFVybCA9IGZvcm1hdFVybChnZXRQcm90b2NvbCgpLHVybCxtZXRob2QgPT09ICdnZXQnID8gZGF0YSA6IHt9KTtcbiAgICAgIGNvbnN0IGFqYXggPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGFqYXgub3BlbihtZXRob2QscmVhbFVybCk7XG4gICAgICByZXNwb25zZVR5cGUgJiYgKGFqYXgucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlKTtcbiAgICAgIGZvcihjb25zdCBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICBhamF4LnNldFJlcXVlc3RIZWFkZXIoa2V5LGhlYWRlcnNba2V5XSk7XG4gICAgICB9XG4gICAgICBsZXQgdGltZXI7XG4gICAgICBpZihvblVwbG9hZFByb2dyZXNzKSB7XG4gICAgICAgIGFqYXgudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJyxvblVwbG9hZFByb2dyZXNzKTtcbiAgICAgIH1cbiAgICAgIGFqYXgub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IFJlc3BvbnNlT2JqZWN0ID0ge307XG4gICAgICAgIGlmKGFqYXgucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGxldCBoZWFkZXJzID0gYWpheC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcbiAgICAgICAgICBsZXQgYXJyID0gaGVhZGVycy50cmltKCkuc3BsaXQoL1tcXHJcXG5dKy8pO1xuICAgICAgICAgIC8vIENyZWF0ZSBhIG1hcCBvZiBoZWFkZXIgbmFtZXMgdG8gdmFsdWVzXG4gICAgICAgICAgbGV0IGhlYWRlck1hcCA9IHt9O1xuICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIGxldCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJyk7XG4gICAgICAgICAgICBsZXQgaGVhZGVyID0gcGFydHMuc2hpZnQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFydHMuam9pbignOiAnKTtcbiAgICAgICAgICAgIGhlYWRlck1hcFtoZWFkZXJdID0gdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzdWx0LmhlYWRlciA9IGhlYWRlck1hcDtcbiAgICAgICAgICByZXN1bHQuc3RhdHVzQ29kZSA9IGFqYXguc3RhdHVzO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyDkuIrkvKBwb3N06K+35rGC6L+U5Zue5pWw5o2u5qC85byP5Li6eG1s77yM5q2k5aSE5a656ZSZXG4gICAgICAgICAgICByZXN1bHQuZGF0YSA9IHJlc3BvbnNlVHlwZSA9PT0gJ2Jsb2InID8gYWpheC5yZXNwb25zZSA6IEpTT04ucGFyc2UoYWpheC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSByZXNwb25zZVR5cGUgPT09ICdibG9iJyA/IGFqYXgucmVzcG9uc2UgOiBhamF4LnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZihlbmFibGVBYm9ydCAmJiB0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuX3RpbWVvdXRNc2cpO1xuICAgICAgICAgIGFqYXguYWJvcnQoKTtcbiAgICAgICAgfSx0aGlzLl90aW1lb3V0KTtcbiAgICAgIH1cbiAgICAgIC8vIOWkhOeQhiBwYXlsb2FkXG4gICAgICBsZXQgcGF5bG9hZDtcbiAgICAgIGlmKGlzRm9ybURhdGEoZGF0YSkpIHtcbiAgICAgICAgLy8gRm9ybURhdGHvvIzkuI3lpITnkIZcbiAgICAgICAgcGF5bG9hZCA9IGRhdGE7XG4gICAgICB9IGVsc2UgaWYoaGVhZGVyc1snY29udGVudC10eXBlJ10gPT09ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSB7XG4gICAgICAgIHBheWxvYWQgPSB0b1F1ZXJ5U3RyaW5nKGRhdGEpO1xuICAgICAgfSBlbHNlIGlmKGJvZHkpIHtcbiAgICAgICAgcGF5bG9hZCA9IGJvZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlhbblroPmg4XlhrVcbiAgICAgICAgcGF5bG9hZCA9IGRhdGEgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYod2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIGFqYXgud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGFqYXguc2VuZChwYXlsb2FkKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5BZGFwdGVyKCkge1xuICBjb25zdCBhZGFwdGVyOiBTREtBZGFwdGVySW50ZXJmYWNlID0ge1xuICAgIHJvb3Q6IHdpbmRvdyxcbiAgICByZXFDbGFzczogV2ViUmVxdWVzdCxcbiAgICB3c0NsYXNzOiBXZWJTb2NrZXQsXG4gICAgbG9jYWxTdG9yYWdlOiBsb2NhbFN0b3JhZ2UsXG4gICAgc2Vzc2lvblN0b3JhZ2U6IHNlc3Npb25TdG9yYWdlXG4gIH07XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG5leHBvcnQgeyBnZW5BZGFwdGVyLFdlYlJlcXVlc3QgfTtcbiJdfQ==
}, function(modId) { var map = {"../../libs/util":1734234913897,"../../constants/common":1734234913893}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913897, function(require, module, exports) {

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
    return Math.random().toString(16).slice(2);
}
exports.genSeqId = genSeqId;
function formatUrl(PROTOCOL, url, query) {
    if (query === void 0) { query = {}; }
    var urlHasQuery = /\?/.test(url);
    var queryString = '';
    for (var key in query) {
        if (queryString === '') {
            !urlHasQuery && (url += '?');
        }
        else {
            queryString += '&';
        }
        queryString += key + "=" + encodeURIComponent(query[key]);
    }
    url += queryString;
    if (/^http(s)?\:\/\//.test(url)) {
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
        typ: 'JWT'
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
    for (var key in query) {
        queryString.push(key + "=" + encodeURIComponent(query[key]));
    }
    return queryString.join('&');
}
exports.toQueryString = toQueryString;
function getQuery(name, url) {
    if (typeof window === 'undefined') {
        return false;
    }
    var u = url || window.location.search;
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = u.substr(u.indexOf('?') + 1).match(reg);
    return r != null ? r[2] : '';
}
exports.getQuery = getQuery;
;
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
    var params_arr = [];
    var queryString = sourceURL.indexOf('?') !== -1 ? sourceURL.split('?')[1] : '';
    if (queryString !== '') {
        params_arr = queryString.split('&');
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split('=')[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + '?' + params_arr.join('&');
    }
    return rtn;
}
exports.removeParam = removeParam;
;
function createPromiseCallback() {
    var cb;
    if (!Promise) {
        cb = function () { };
        cb.promise = {};
        var throwPromiseNotDefined = function () {
            throw new Error('Your Node runtime does support ES6 Promises. ' +
                'Set "global.Promise" to your preferred implementation of promises.');
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
;
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
        msg: "[" + constants_1.getSdkName() + "][" + error + "]:" + msg
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
        msg: "[" + constants_1.getSdkName() + "][" + error + "]:" + msg
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0VBQTBDO0FBQzFDLG9FQUEwQztBQUMxQyxnRUFBc0M7QUFFdEMsMENBQTBDO0FBRTFDLFNBQWdCLE9BQU8sQ0FBQyxHQUFRO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGdCQUFnQixDQUFDO0FBQ2xFLENBQUM7QUFGRCwwQkFFQztBQUNELFNBQWdCLFFBQVEsQ0FBQyxHQUFRO0lBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0FBQ2pDLENBQUM7QUFGRCw0QkFFQztBQUNELFNBQWdCLFdBQVcsQ0FBQyxHQUFRO0lBQ2xDLE9BQU8sT0FBTyxHQUFHLEtBQUssV0FBVyxDQUFDO0FBQ3BDLENBQUM7QUFGRCxrQ0FFQztBQUNELFNBQWdCLGFBQWEsQ0FBQyxHQUFRO0lBQ3BDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGlCQUFpQixDQUFDO0FBQ25FLENBQUM7QUFGRCxzQ0FFQztBQUNELFNBQWdCLE1BQU0sQ0FBQyxHQUFRO0lBQzdCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGVBQWUsQ0FBQztBQUNqRSxDQUFDO0FBRkQsd0JBRUM7QUFDRCxTQUFnQixZQUFZLENBQUMsUUFBYSxFQUFDLFNBQWM7SUFDdkQsT0FBTyxRQUFRLFlBQVksU0FBUyxDQUFDO0FBQ3ZDLENBQUM7QUFGRCxvQ0FFQztBQUNELFNBQWdCLFVBQVUsQ0FBQyxHQUFRO0lBQ2pDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLG1CQUFtQixDQUFD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LElBQUksR0FBSyxHQUFHLEtBQVIsQ0FBUztRQUMxQixRQUFPLElBQUksRUFBRTtZQUNYLEtBQUssTUFBTTtnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtTQUNUO0tBQ0Y7SUFDRCxJQUFHLFVBQVUsRUFBRTtRQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDL0I7SUFDRCxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDckIsQ0FBQztBQXpCRCxzQ0F5QkM7QUFFWSxRQUFBLEtBQUssR0FBRyxVQUFDLEVBQU07SUFBTixtQkFBQSxFQUFBLE1BQU07SUFBSyxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsVUFBVSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQztBQUFsQyxDQUFrQyxDQUFDO0FBRXBFLFNBQWdCLGNBQWMsQ0FBQyxXQUFtQjtJQUNoRCxPQUFPLFFBQU0sV0FBYSxDQUFBO0FBQzVCLENBQUM7QUFGRCx3Q0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoczI1NiBmcm9tICdjcnlwdG8tanMvaG1hYy1zaGEyNTYnO1xuaW1wb3J0IGJhc2U2NCBmcm9tICdjcnlwdG8tanMvZW5jLWJhc2U2NCc7XG5pbXBvcnQgdXRmOCBmcm9tICdjcnlwdG8tanMvZW5jLXV0ZjgnO1xuaW1wb3J0IHsgS1YgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzJztcbmltcG9ydCB7IGdldFNka05hbWUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh2YWw6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1BhbGluT2JqZWN0KHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgTnVsbF0nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5zdGFuY2VPZihpbnN0YW5jZTogYW55LGNvbnN0cnVjdDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIGNvbnN0cnVjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5TZXFJZCgpOiBzdHJpbmcge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMik7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKFBST1RPQ09MOiBzdHJpbmcsdXJsOiBzdHJpbmcscXVlcnk6IEtWPGFueT4gPSB7fSk6IHN0cmluZyB7XG4gIGNvbnN0IHVybEhhc1F1ZXJ5ID0gL1xcPy8udGVzdCh1cmwpO1xuICBsZXQgcXVlcnlTdHJpbmcgPSAnJztcbiAgZm9yKGxldCBrZXkgaW4gcXVlcnkpIHtcbiAgICBpZihxdWVyeVN0cmluZyA9PT0gJycpIHtcbiAgICAgICF1cmxIYXNRdWVyeSAmJiAodXJsICs9ICc/Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5U3RyaW5nICs9ICcmJztcbiAgICB9XG4gICAgcXVlcnlTdHJpbmcgKz0gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVtrZXldKX1gO1xuICB9XG4gIHVybCArPSBxdWVyeVN0cmluZztcbiAgaWYoL15odHRwKHMpP1xcOlxcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICByZXR1cm4gYCR7UFJPVE9DT0x9JHt1cmx9YDtcbn1cblxuZnVuY3Rpb24gYmFzZTY0dXJsKHNvdXJjZTogS1Y8YW55Pik6IHN0cmluZyB7XG4gIGxldCBlbmNvZGVkU291cmNlID0gYmFzZTY0LnN0cmluZ2lmeShzb3VyY2UpO1xuXG4gIGVuY29kZWRTb3VyY2UgPSBlbmNvZGVkU291cmNlLnJlcGxhY2UoLz0rJC8sJycpO1xuICBlbmNvZGVkU291cmNlID0gZW5jb2RlZFNvdXJjZS5yZXBsYWNlKC9cXCsvZywnLScpO1xuICBlbmNvZGVkU291cmNlID0gZW5jb2RlZFNvdXJjZS5yZXBsYWNlKC9cXC8vZywnXycpO1xuXG4gIHJldHVybiBlbmNvZGVkU291cmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2lnbihwYXlsb2FkOiBLVjxhbnk+LHNlY3JldDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgaGVhZGVyID0ge1xuICAgIGFsZzogJ0hTMjU2JyxcbiAgICB0eXA6ICdKV1QnXG4gIH07XG4gIGNvbnN0IGhlYWRlclN0ciA9IGJhc2U2NHVybCh1dGY4LnBhcnNlKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpKTtcbiAgY29uc3QgcGF5bG9hZFN0ciA9IGJhc2U2NHVybCh1dGY4LnBhcnNlKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKSk7XG5cbiAgY29uc3QgdG9rZW4gPSBgJHtoZWFkZXJTdHJ9LiR7cGF5bG9hZFN0cn1gO1xuICBjb25zdCBzaWduID0gYmFzZTY0dXJsKGhzMjU2KHRva2VuLHNlY3JldCkpO1xuICByZXR1cm4gYCR7dG9rZW59LiR7c2lnbn1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvUXVlcnlTdHJpbmcocXVlcnk6IEtWPGFueT4gPSB7fSkge1xuICBsZXQgcXVlcnlTdHJpbmcgPSBbXTtcbiAgZm9yKGxldCBrZXkgaW4gcXVlcnkpIHtcbiAgICBxdWVyeVN0cmluZy5wdXNoKGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlba2V5XSl9YCk7XG4gIH1cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nLmpvaW4oJyYnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXJ5KG5hbWU6IHN0cmluZyx1cmw/OiBzdHJpbmcpIHtcbiAgaWYodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8g5Y+C5pWw77ya5Y+Y6YeP5ZCN77yMdXJs5Li656m65YiZ6KGo5LuO5b2T5YmN6aG16Z2i55qEdXJs5Lit5Y+WXG4gIGxldCB1ID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gIGxldCByZWcgPSBuZXcgUmVnRXhwKCcoXnwmKScgKyBuYW1lICsgJz0oW14mXSopKCZ8JCknKTtcbiAgbGV0IHIgPSB1LnN1YnN0cih1LmluZGV4T2YoJz8nKSArIDEpLm1hdGNoKHJlZyk7XG4gIHJldHVybiByICE9IG51bGwgPyByWzJdIDogJyc7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SGFzaCA9IGZ1bmN0aW9uKG5hbWU6IHN0cmluZykge1xuICBpZih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBtYXRjaGVzID0gd2luZG93LmxvY2F0aW9uLmhhc2gubWF0Y2goXG4gICAgbmV3IFJlZ0V4cChgWyNcXD8mXFwvXSR7bmFtZX09KFteJiNdKilgKVxuICApO1xuICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiAnJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXJhbShrZXk6IHN0cmluZyxzb3VyY2VVUkw6IHN0cmluZykge1xuICBsZXQgcnRuID0gc291cmNlVVJMLnNwbGl0KCc/JylbMF07XG4gIGxldCBwYXJhbTtcbiAgbGV0IHBhcmFtc19hcnIgPSBbXTtcbiAgbGV0IHF1ZXJ5U3RyaW5nID1cbiAgICBzb3VyY2VVUkwuaW5kZXhPZignPycpICE9PSAtMSA/IHNvdXJjZVVSTC5zcGxpdCgnPycpWzFdIDogJyc7XG4gIGlmKHF1ZXJ5U3RyaW5nICE9PSAnJykge1xuICAgIHBhcmFtc19hcnIgPSBxdWVyeVN0cmluZy5zcGxpdCgnJicpO1xuICAgIGZvcihsZXQgaSA9IHBhcmFtc19hcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIHBhcmFtID0gcGFyYW1zX2FycltpXS5zcGxpdCgnPScpWzBdO1xuICAgICAgaWYocGFyYW0gPT09IGtleSkge1xuICAgICAgICBwYXJhbXNfYXJyLnNwbGljZShpLDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBydG4gPSBydG4gKyAnPycgKyBwYXJhbXNfYXJyLmpvaW4oJyYnKTtcbiAgfVxuICByZXR1cm4gcnRuO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb21pc2VDYWxsYmFjaygpIHtcbiAgbGV0IGNiOiBhbnk7XG4gIGlmKCFQcm9taXNlKSB7XG4gICAgY2IgPSAoKSA9PiB7IH07XG4gICAgY2IucHJvbWlzZSA9IHt9O1xuXG4gICAgY29uc3QgdGhyb3dQcm9taXNlTm90RGVmaW5lZCA9ICgpID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdXIgTm9kZSBydW50aW1lIGRvZXMgc3VwcG9ydCBFUzYgUHJvbWlzZXMuICcgK1xuICAgICAgICAnU2V0IFwiZ2xvYmFsLlByb21pc2VcIiB0byB5b3VyIHByZWZlcnJlZCBpbXBsZW1lbnRhdGlvbiBvZiBwcm9taXNlcy4nXG4gICAgICApO1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2IucHJvbWlzZSwndGhlbicseyBnZXQ6IHRocm93UHJvbWlzZU5vdERlZmluZWQgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNiLnByb21pc2UsJ2NhdGNoJyx7IGdldDogdGhyb3dQcm9taXNlTm90RGVmaW5lZCB9KTtcbiAgICByZXR1cm4gY2I7XG4gIH1cblxuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgY2IgPSAoZXJyLGRhdGEpID0+IHtcbiAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoZGF0YSk7XG4gICAgfTtcbiAgfSk7XG4gIGNiLnByb21pc2UgPSBwcm9taXNlO1xuICByZXR1cm4gY2I7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlY0NhbGxiYWNrKGZuOiBGdW5jdGlvbiB8IG51bGwgfCB1bmRlZmluZWQsZXJyOiBhbnksZGF0YSA9IG51bGwpIHtcbiAgaWYoZm4gJiYgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZuKGVycixkYXRhKTtcbiAgfVxuICBpZihlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFdhcm4oZXJyb3I6IHN0cmluZyxtc2c6IHN0cmluZykge1xuICBjb25zb2xlLndhcm4oYFske2dldFNka05hbWUoKX1dWyR7ZXJyb3J9XToke21zZ31gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RXJyb3IoZXJyb3I6IHN0cmluZyxtc2c6IHN0cmluZykge1xuICBjb25zb2xlLmVycm9yKHtcbiAgICBjb2RlOiBlcnJvcixcbiAgICBtc2c6IGBbJHtnZXRTZGtOYW1lKCl9XVske2Vycm9yfV06JHttc2d9YFxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcmludEluZm8oZXJyb3I6IHN0cmluZyxtc2c6IHN0cmluZykge1xuICBjb25zb2xlLmxvZyhgWyR7Z2V0U2RrTmFtZSgpfV1bJHtlcnJvcn1dOiR7bXNnfWApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3I6IHN0cmluZyxtc2c6IHN0cmluZykge1xuICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoe1xuICAgIGNvZGU6IGVycm9yLFxuICAgIG1zZzogYFske2dldFNka05hbWUoKX1dWyR7ZXJyb3J9XToke21zZ31gXG4gIH0pKTtcbn1cblxuaW50ZXJmYWNlIElQcmludEdyb3VwTG9nT3B0aW9ucyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmcgfCBvYmplY3Q7XG4gIGNvbnRlbnQ6IHtcbiAgICB0eXBlOiAnaW5mbycgfCAnd2FybicgfCAnZXJyb3InLFxuICAgIGJvZHk6IHN0cmluZyB8IEVycm9yO1xuICB9W107XG4gIHByaW50VHJhY2U/OiBib29sZWFuO1xuICBjb2xsYXBzZWQ/OiBib29sZWFuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXBMb2cob3B0aW9uczogSVByaW50R3JvdXBMb2dPcHRpb25zKSB7XG4gIGNvbnN0IHsgdGl0bGUsc3VidGl0bGUgPSAnJyxjb250ZW50ID0gW10scHJpbnRUcmFjZSA9IGZhbHNlLGNvbGxhcHNlZCA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICBpZihjb2xsYXBzZWQpIHtcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKHRpdGxlLHN1YnRpdGxlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmdyb3VwKHRpdGxlLHN1YnRpdGxlKTtcbiAgfVxuICBmb3IoY29uc3QgdGlwIG9mIGNvbnRlbnQpIHtcbiAgICBjb25zdCB7IHR5cGUsYm9keSB9ID0gdGlwO1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICAgIGNvbnNvbGUud2Fybihib2R5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYm9keSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZihwcmludFRyYWNlKSB7XG4gICAgY29uc29sZS50cmFjZSgnc3RhY2sgdHJhY2U6Jyk7XG4gIH1cbiAgY29uc29sZS5ncm91cEVuZCgpO1xufVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAobXMgPSAwKSA9PiBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQocixtcykpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUGhvbmUocGhvbmVOdW1iZXI6IHN0cmluZykge1xuICByZXR1cm4gYCs4NiR7cGhvbmVOdW1iZXJ9YFxufVxuXG4iXX0=
}, function(modId) { var map = {"../constants":1734234913892}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913898, function(require, module, exports) {

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
        _this._root = root;
        if (!root['tcbCacheObject']) {
            root['tcbCacheObject'] = {};
        }
        return _this;
    }
    TcbCacheObject.prototype.setItem = function (key, value) {
        this._root['tcbCacheObject'][key] = value;
    };
    TcbCacheObject.prototype.getItem = function (key) {
        return this._root['tcbCacheObject'][key];
    };
    TcbCacheObject.prototype.removeItem = function (key) {
        delete this._root['tcbCacheObject'][key];
    };
    TcbCacheObject.prototype.clear = function () {
        delete this._root['tcbCacheObject'];
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
        case 'session':
            if (!adapter.sessionStorage) {
                util_1.printWarn(constants_1.ERRORS.INVALID_PARAMS, 'sessionStorage is not supported on current platform');
                return new TcbCacheObject(adapter.root);
            }
            return adapter.sessionStorage;
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
        var persistence = config.persistence, _a = config.platformInfo, platformInfo = _a === void 0 ? {} : _a, _b = config.keys, keys = _b === void 0 ? {} : _b, _c = config.alwaysLocalKeys, alwaysLocalKeys = _c === void 0 ? [] : _c;
        this._platformInfo = platformInfo;
        this._alwaysLocalKeys = alwaysLocalKeys;
        if (!this._storage) {
            this._persistence = platformInfo.adapter.primaryStorage || persistence;
            this._storage = createStorage(this._persistence, platformInfo.adapter);
            this.keys = keys;
        }
    }
    Object.defineProperty(CloudbaseCache.prototype, "mode", {
        get: function () {
            return this._storage.mode || 'sync';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudbaseCache.prototype, "persistence", {
        get: function () {
            return this._persistence;
        },
        enumerable: false,
        configurable: true
    });
    CloudbaseCache.prototype.updatePersistence = function (persistence) {
        if (this.mode === 'async') {
            util_1.printWarn(constants_1.ERRORS.INVALID_OPERATION, 'current platform\'s storage is asynchronous, please use updatePersistenceAsync insteed');
            return;
        }
        if (persistence === this._persistence) {
            return;
        }
        var isCurrentLocal = this._persistence === 'local';
        this._persistence = persistence;
        var storage = createStorage(persistence, this._platformInfo.adapter);
        for (var key in this.keys) {
            var name_1 = this.keys[key];
            if (isCurrentLocal && this._alwaysLocalKeys.includes(key)) {
                continue;
            }
            var val = this._storage.getItem(name_1);
            if (!util_1.isUndefined(val) && !util_1.isNull(val)) {
                storage.setItem(name_1, val);
                this._storage.removeItem(name_1);
            }
        }
        this._storage = storage;
    };
    CloudbaseCache.prototype.updatePersistenceAsync = function (persistence) {
        return __awaiter(this, void 0, void 0, function () {
            var isCurrentLocal, storage, _a, _b, _i, key, name_2, val;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (persistence === this._persistence) {
                            return [2];
                        }
                        isCurrentLocal = this._persistence === 'local';
                        this._persistence = persistence;
                        storage = createStorage(persistence, this._platformInfo.adapter);
                        _a = [];
                        for (_b in this.keys)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 5];
                        key = _a[_i];
                        name_2 = this.keys[key];
                        if (isCurrentLocal && this._alwaysLocalKeys.includes(key)) {
                            return [3, 4];
                        }
                        return [4, this._storage.getItem(name_2)];
                    case 2:
                        val = _c.sent();
                        if (!(!util_1.isUndefined(val) && !util_1.isNull(val))) return [3, 4];
                        storage.setItem(name_2, val);
                        return [4, this._storage.removeItem(name_2)];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3, 1];
                    case 5:
                        this._storage = storage;
                        return [2];
                }
            });
        });
    };
    CloudbaseCache.prototype.setStore = function (key, value, version) {
        if (this.mode === 'async') {
            util_1.printWarn(constants_1.ERRORS.INVALID_OPERATION, 'current platform\'s storage is asynchronous, please use setStoreAsync insteed');
            return;
        }
        if (!this._storage) {
            return;
        }
        try {
            var val = {
                version: version || 'localCachev1',
                content: value
            };
            this._storage.setItem(key, JSON.stringify(val));
        }
        catch (e) {
            throw new Error(JSON.stringify({
                code: constants_1.ERRORS.OPERATION_FAIL,
                msg: "[" + constants_1.getSdkName() + "][" + constants_1.ERRORS.OPERATION_FAIL + "]setStore failed",
                info: e
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
                        if (!this._storage) {
                            return [2];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        val = {
                            version: version || 'localCachev1',
                            content: value
                        };
                        return [4, this._storage.setItem(key, JSON.stringify(val))];
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
            if (!this._storage) {
                return '';
            }
        }
        catch (e) {
            return '';
        }
        version = version || 'localCachev1';
        var content = this._storage.getItem(key);
        if (!content) {
            return '';
        }
        if (content.indexOf(version) >= 0) {
            var d = JSON.parse(content);
            return d.content;
        }
        else {
            return '';
        }
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
                            if (!this._storage) {
                                return [2, ''];
                            }
                        }
                        catch (e) {
                            return [2, ''];
                        }
                        version = version || 'localCachev1';
                        return [4, this._storage.getItem(key)];
                    case 1:
                        content = _b.sent();
                        if (!content) {
                            return [2, ''];
                        }
                        if (content.indexOf(version) >= 0) {
                            d = JSON.parse(content);
                            return [2, d.content];
                        }
                        else {
                            return [2, ''];
                        }
                        return [2];
                }
            });
        });
    };
    CloudbaseCache.prototype.removeStore = function (key) {
        if (this.mode === 'async') {
            util_1.printWarn(constants_1.ERRORS.INVALID_OPERATION, 'current platform\'s storage is asynchronous, please use removeStoreAsync insteed');
            return;
        }
        this._storage.removeItem(key);
    };
    CloudbaseCache.prototype.removeStoreAsync = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._storage.removeItem(key)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9jYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQW9HO0FBR3BHLCtCQUFzRDtBQUN0RCwwQ0FBaUQ7QUFLakQ7SUFBNkIsa0NBQWU7SUFFMUMsd0JBQVksSUFBUztRQUFyQixZQUNFLGlCQUFPLFNBS1I7UUFKQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzdCOztJQUNILENBQUM7SUFDTSxnQ0FBTyxHQUFkLFVBQWUsR0FBVyxFQUFDLEtBQVU7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBQ00sZ0NBQU8sR0FBZCxVQUFlLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNNLG1DQUFVLEdBQWpCLFVBQWtCLEdBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNNLDhCQUFLLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBckJELENBQTZCLG1DQUFlLEdBcUIzQztBQUlELFNBQVMsYUFBYSxDQUFDLFdBQXdCLEVBQUMsT0FBNEI7SUFDMUUsUUFBTyxXQUFXLEVBQUU7UUFDbEIsS0FBSyxP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QixFQUFDLGtGQUFrRixDQUFDLENBQUM7WUFDdkgsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNZLHlDQUFnQixHQUE3QixVQUE4QixHQUFXOzs7OzRCQUN2QyxXQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQzs7Ozs7S0FDckM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoTUQsSUFnTUM7QUFoTVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yYWdlSW50ZXJmYWNlLEFic3RyYWN0U3RvcmFnZSxTREtBZGFwdGVySW50ZXJmYWNlIH0gZnJvbSAnQGNsb3VkYmFzZS9hZGFwdGVyLWludGVyZmFjZSc7XG5pbXBvcnQgeyBJQ2xvdWRiYXNlQ2FjaGUsSUNhY2hlQ29uZmlnIH0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcy9jYWNoZSc7XG5pbXBvcnQgeyBLVixQZXJzaXN0ZW5jZSxJQ2xvdWRiYXNlUGxhdGZvcm1JbmZvIH0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcyc7XG5pbXBvcnQgeyBpc1VuZGVmaW5lZCxpc051bGwscHJpbnRXYXJuIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IEVSUk9SUyxnZXRTZGtOYW1lIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBwZXJzaXRlbmNlPW5vbmXml7bnmbvlvZXmgIHkv53lrZjlnKjlhoXlrZjkuK1cbiAqL1xuY2xhc3MgVGNiQ2FjaGVPYmplY3QgZXh0ZW5kcyBBYnN0cmFjdFN0b3JhZ2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9yb290OiBhbnk7XG4gIGNvbnN0cnVjdG9yKHJvb3Q6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcm9vdCA9IHJvb3Q7XG4gICAgaWYoIXJvb3RbJ3RjYkNhY2hlT2JqZWN0J10pIHtcbiAgICAgIHJvb3RbJ3RjYkNhY2hlT2JqZWN0J10gPSB7fTtcbiAgICB9XG4gIH1cbiAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsdmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3Jvb3RbJ3RjYkNhY2hlT2JqZWN0J11ba2V5XSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3RbJ3RjYkNhY2hlT2JqZWN0J11ba2V5XTtcbiAgfVxuICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xuICAgIGRlbGV0ZSB0aGlzLl9yb290Wyd0Y2JDYWNoZU9iamVjdCddW2tleV07XG4gIH1cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9yb290Wyd0Y2JDYWNoZU9iamVjdCddO1xuICB9XG59XG4vKipcbiAqIOW3peWOguWHveaVsFxuICovXG5mdW5jdGlvbiBjcmVhdGVTdG9yYWdlKHBlcnNpc3RlbmNlOiBQZXJzaXN0ZW5jZSxhZGFwdGVyOiBTREtBZGFwdGVySW50ZXJmYWNlKTogU3RvcmFnZUludGVyZmFjZSB7XG4gIHN3aXRjaChwZXJzaXN0ZW5jZSkge1xuICAgIGNhc2UgJ2xvY2FsJzpcbiAgICAgIGlmKCFhZGFwdGVyLmxvY2FsU3RvcmFnZSkge1xuICAgICAgICBwcmludFdhcm4oRVJST1JTLklOVkFMSURfUEFSQU1TLCdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZCBvbiBjdXJyZW50IHBsYXRmb3JtJyk7XG4gICAgICAgIC8vIOS4jeaUr+aMgWxvY2Fsc3RvcmFnZeeahOW5s+WPsOmZjee6p+S4um5vbmVcbiAgICAgICAgcmV0dXJuIG5ldyBUY2JDYWNoZU9iamVjdChhZGFwdGVyLnJvb3QpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFkYXB0ZXIubG9jYWxTdG9yYWdlXG4gICAgY2FzZSAnbm9uZSc6XG4gICAgICByZXR1cm4gbmV3IFRjYkNhY2hlT2JqZWN0KGFkYXB0ZXIucm9vdCk7XG4gICAgY2FzZSAnc2Vzc2lvbic6XG4gICAgICBpZighYWRhcHRlci5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICBwcmludFdhcm4oRVJST1JTLklOVkFMSURfUEFSQU1TLCdzZXNzaW9uU3RvcmFnZSBpcyBub3Qgc3VwcG9ydGVkIG9uIGN1cnJlbnQgcGxhdGZvcm0nKTtcbiAgICAgICAgLy8g5LiN5pSv5oyBbG9jYWxzdG9yYWdl55qE5bmz5Y+w6ZmN57qn5Li6bm9uZVxuICAgICAgICByZXR1cm4gbmV3IFRjYkNhY2hlT2JqZWN0KGFkYXB0ZXIucm9vdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWRhcHRlci5zZXNzaW9uU3RvcmFnZTtcbiAgICBkZWZhdWx0OlxuICAgICAgaWYoIWFkYXB0ZXIubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIHByaW50V2FybihFUlJPUlMuSU5WQUxJRF9QQVJBTVMsJ2xvY2FsU3RvcmFnZSBpcyBub3Qgc3VwcG9ydGVkIG9uIGN1cnJlbnQgcGxhdGZvcm0nKTtcbiAgICAgICAgLy8g5LiN5pSv5oyBbG9jYWxzdG9yYWdl55qE5bmz5Y+w6ZmN57qn5Li6bm9uZVxuICAgICAgICByZXR1cm4gbmV3IFRjYkNhY2hlT2JqZWN0KGFkYXB0ZXIucm9vdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWRhcHRlci5sb2NhbFN0b3JhZ2U7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkYmFzZUNhY2hlIGltcGxlbWVudHMgSUNsb3VkYmFzZUNhY2hlIHtcbiAgcHVibGljIGtleXM6IEtWPHN0cmluZz4gPSB7fTtcblxuICBwcml2YXRlIF9wZXJzaXN0ZW5jZTogUGVyc2lzdGVuY2U7XG4gIHByaXZhdGUgX3BsYXRmb3JtSW5mbzogSUNsb3VkYmFzZVBsYXRmb3JtSW5mbztcbiAgcHJpdmF0ZSBfc3RvcmFnZTogU3RvcmFnZUludGVyZmFjZTtcbiAgLy8g5aeL57uI5a2Y5YKo5ZyobG9jYWxzdG9yYWdl5Lit55qEa2V56ZuG5ZCIXG4gIHByaXZhdGUgX2Fsd2F5c0xvY2FsS2V5czogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBJQ2FjaGVDb25maWcpIHtcbiAgICBjb25zdCB7IHBlcnNpc3RlbmNlLHBsYXRmb3JtSW5mbyA9IHt9LGtleXMgPSB7fSxhbHdheXNMb2NhbEtleXMgPSBbXSB9ID0gY29uZmlnO1xuICAgIHRoaXMuX3BsYXRmb3JtSW5mbyA9IHBsYXRmb3JtSW5mbztcbiAgICB0aGlzLl9hbHdheXNMb2NhbEtleXMgPSBhbHdheXNMb2NhbEtleXM7XG4gICAgaWYoIXRoaXMuX3N0b3JhZ2UpIHtcbiAgICAgIHRoaXMuX3BlcnNpc3RlbmNlID0gcGxhdGZvcm1JbmZvLmFkYXB0ZXIucHJpbWFyeVN0b3JhZ2UgfHwgcGVyc2lzdGVuY2U7XG4gICAgICB0aGlzLl9zdG9yYWdlID0gY3JlYXRlU3RvcmFnZSh0aGlzLl9wZXJzaXN0ZW5jZSxwbGF0Zm9ybUluZm8uYWRhcHRlcik7XG4gICAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQGdldHRlciBzdG9yYWdl5qih5byPLeWQjOatpS/lvILmraVcbiAgICovXG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLm1vZGUgfHwgJ3N5bmMnXG4gIH1cbiAgZ2V0IHBlcnNpc3RlbmNlKCk6IFBlcnNpc3RlbmNlIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyc2lzdGVuY2U7XG4gIH1cbiAgLyoqXG4gICAqIOWcqOS4jeWQjHBlcnNpc3RlbmNl5LmL6Ze06L+B56e75pWw5o2uXG4gICAqIEBwYXJhbSBwZXJzaXN0ZW5jZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZVBlcnNpc3RlbmNlKHBlcnNpc3RlbmNlOiBQZXJzaXN0ZW5jZSkge1xuICAgIGlmKHRoaXMubW9kZSA9PT0gJ2FzeW5jJykge1xuICAgICAgcHJpbnRXYXJuKEVSUk9SUy5JTlZBTElEX09QRVJBVElPTiwnY3VycmVudCBwbGF0Zm9ybVxcJ3Mgc3RvcmFnZSBpcyBhc3luY2hyb25vdXMsIHBsZWFzZSB1c2UgdXBkYXRlUGVyc2lzdGVuY2VBc3luYyBpbnN0ZWVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHBlcnNpc3RlbmNlID09PSB0aGlzLl9wZXJzaXN0ZW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc0N1cnJlbnRMb2NhbCA9IHRoaXMuX3BlcnNpc3RlbmNlID09PSAnbG9jYWwnO1xuICAgIHRoaXMuX3BlcnNpc3RlbmNlID0gcGVyc2lzdGVuY2U7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZVN0b3JhZ2UocGVyc2lzdGVuY2UsdGhpcy5fcGxhdGZvcm1JbmZvLmFkYXB0ZXIpO1xuICAgIC8vIOWIh+aNonBlcnNpc3RlbmNl6YeN5paw5Yib5bu6c3RvcmFnZeWvueixoVxuICAgIGZvcihjb25zdCBrZXkgaW4gdGhpcy5rZXlzKSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5rZXlzW2tleV07XG4gICAgICAvLyDlpoLmnpzlvZPliY3kuLpsb2NhbOW5tuS4lGtleeiiq+iuvuWumuS4uuWni+e7iOWtmOWCqOWcqGxvY2Fsc3RvcmFnZeS4re+8jOWImeS4jei/geenu1xuICAgICAgaWYoaXNDdXJyZW50TG9jYWwgJiYgdGhpcy5fYWx3YXlzTG9jYWxLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgICBpZighaXNVbmRlZmluZWQodmFsKSAmJiAhaXNOdWxsKHZhbCkpIHtcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKG5hbWUsdmFsKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zdG9yYWdlID0gc3RvcmFnZTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgdXBkYXRlUGVyc2lzdGVuY2VBc3luYyhwZXJzaXN0ZW5jZTogUGVyc2lzdGVuY2UpIHtcbiAgICBpZihwZXJzaXN0ZW5jZSA9PT0gdGhpcy5fcGVyc2lzdGVuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNDdXJyZW50TG9jYWwgPSB0aGlzLl9wZXJzaXN0ZW5jZSA9PT0gJ2xvY2FsJztcbiAgICB0aGlzLl9wZXJzaXN0ZW5jZSA9IHBlcnNpc3RlbmNlO1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVTdG9yYWdlKHBlcnNpc3RlbmNlLHRoaXMuX3BsYXRmb3JtSW5mby5hZGFwdGVyKTtcbiAgICAvLyDliIfmjaJwZXJzaXN0ZW5jZemHjeaWsOWIm+W7unN0b3JhZ2Xlr7nosaFcbiAgICBmb3IoY29uc3Qga2V5IGluIHRoaXMua2V5cykge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMua2V5c1trZXldO1xuICAgICAgLy8g5aaC5p6c5b2T5YmN5Li6bG9jYWzlubbkuJRrZXnooqvorr7lrprkuLrlp4vnu4jlrZjlgqjlnKhsb2NhbHN0b3JhZ2XkuK3vvIzliJnkuI3ov4Hnp7tcbiAgICAgIGlmKGlzQ3VycmVudExvY2FsICYmIHRoaXMuX2Fsd2F5c0xvY2FsS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsID0gYXdhaXQgdGhpcy5fc3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgICAgaWYoIWlzVW5kZWZpbmVkKHZhbCkgJiYgIWlzTnVsbCh2YWwpKSB7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShuYW1lLHZhbCk7XG4gICAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc3RvcmFnZSA9IHN0b3JhZ2U7XG4gIH1cbiAgcHVibGljIHNldFN0b3JlKGtleTogc3RyaW5nLHZhbHVlOiBhbnksdmVyc2lvbj86IGFueSkge1xuICAgIGlmKHRoaXMubW9kZSA9PT0gJ2FzeW5jJykge1xuICAgICAgcHJpbnRXYXJuKEVSUk9SUy5JTlZBTElEX09QRVJBVElPTiwnY3VycmVudCBwbGF0Zm9ybVxcJ3Mgc3RvcmFnZSBpcyBhc3luY2hyb25vdXMsIHBsZWFzZSB1c2Ugc2V0U3RvcmVBc3luYyBpbnN0ZWVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKCF0aGlzLl9zdG9yYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbCA9IHtcbiAgICAgICAgdmVyc2lvbjogdmVyc2lvbiB8fCAnbG9jYWxDYWNoZXYxJyxcbiAgICAgICAgY29udGVudDogdmFsdWVcbiAgICAgIH07XG4gICAgICB0aGlzLl9zdG9yYWdlLnNldEl0ZW0oa2V5LEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29kZTogRVJST1JTLk9QRVJBVElPTl9GQUlMLFxuICAgICAgICBtc2c6IGBbJHtnZXRTZGtOYW1lKCl9XVske0VSUk9SUy5PUEVSQVRJT05fRkFJTH1dc2V0U3RvcmUgZmFpbGVkYCxcbiAgICAgICAgaW5mbzogZVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuICBwdWJsaWMgYXN5bmMgc2V0U3RvcmVBc3luYyhrZXk6IHN0cmluZyx2YWx1ZTogYW55LHZlcnNpb24/OiBhbnkpIHtcbiAgICBpZighdGhpcy5fc3RvcmFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWwgPSB7XG4gICAgICAgIHZlcnNpb246IHZlcnNpb24gfHwgJ2xvY2FsQ2FjaGV2MScsXG4gICAgICAgIGNvbnRlbnQ6IHZhbHVlXG4gICAgICB9O1xuICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGtleSxKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cbiAgcHVibGljIGdldFN0b3JlKGtleTogc3RyaW5nLHZlcnNpb24/OiBzdHJpbmcpIHtcbiAgICBpZih0aGlzLm1vZGUgPT09ICdhc3luYycpIHtcbiAgICAgIHByaW50V2FybihFUlJPUlMuSU5WQUxJRF9PUEVSQVRJT04sJ2N1cnJlbnQgcGxhdGZvcm1cXCdzIHN0b3JhZ2UgaXMgYXN5bmNocm9ub3VzLCBwbGVhc2UgdXNlIGdldFN0b3JlQXN5bmMgaW5zdGVlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy/mtYvor5XnlKjkvovkvb/nlKhcbiAgICAgIGlmKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiA/LnRjYl90b2tlbikge1xuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYudGNiX3Rva2VuO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5fc3RvcmFnZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmVyc2lvbiA9IHZlcnNpb24gfHwgJ2xvY2FsQ2FjaGV2MSc7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgaWYoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZihjb250ZW50LmluZGV4T2YodmVyc2lvbikgPj0gMCkge1xuICAgICAgY29uc3QgZCA9IEpTT04ucGFyc2UoY29udGVudCk7XG4gICAgICByZXR1cm4gZC5jb250ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBhc3luYyBnZXRTdG9yZUFzeW5jKGtleTogc3RyaW5nLHZlcnNpb24/OiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgLy/mtYvor5XnlKjkvovkvb/nlKhcbiAgICAgIGlmKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiA/LnRjYl90b2tlbikge1xuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYudGNiX3Rva2VuO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5fc3RvcmFnZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmVyc2lvbiA9IHZlcnNpb24gfHwgJ2xvY2FsQ2FjaGV2MSc7XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgaWYoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZihjb250ZW50LmluZGV4T2YodmVyc2lvbikgPj0gMCkge1xuICAgICAgY29uc3QgZCA9IEpTT04ucGFyc2UoY29udGVudCk7XG4gICAgICByZXR1cm4gZC5jb250ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG4gIHB1YmxpYyByZW1vdmVTdG9yZShrZXk6IHN0cmluZykge1xuICAgIGlmKHRoaXMubW9kZSA9PT0gJ2FzeW5jJykge1xuICAgICAgcHJpbnRXYXJuKEVSUk9SUy5JTlZBTElEX09QRVJBVElPTiwnY3VycmVudCBwbGF0Zm9ybVxcJ3Mgc3RvcmFnZSBpcyBhc3luY2hyb25vdXMsIHBsZWFzZSB1c2UgcmVtb3ZlU3RvcmVBc3luYyBpbnN0ZWVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG4gIHB1YmxpYyBhc3luYyByZW1vdmVTdG9yZUFzeW5jKGtleTogc3RyaW5nKSB7XG4gICAgYXdhaXQgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiJdfQ==
}, function(modId) { var map = {"./util":1734234913897,"../constants":1734234913892}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913899, function(require, module, exports) {

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
function _addEventListener(name, listener, listeners) {
    listeners[name] = listeners[name] || [];
    listeners[name].push(listener);
}
function _removeEventListener(name, listener, listeners) {
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
        this._listeners = {};
    }
    CloudbaseEventEmitter.prototype.on = function (name, listener) {
        _addEventListener(name, listener, this._listeners);
        return this;
    };
    CloudbaseEventEmitter.prototype.off = function (name, listener) {
        _removeEventListener(name, listener, this._listeners);
        return this;
    };
    CloudbaseEventEmitter.prototype.fire = function (event, data) {
        if (util_1.isInstanceOf(event, IErrorEvent)) {
            console.error(event.error);
            return this;
        }
        var ev = util_1.isString(event) ? new CloudbaseEvent(event, data || {}) : event;
        var name = ev.name;
        if (this._listens(name)) {
            ev.target = this;
            var handlers = this._listeners[name] ? __spreadArrays(this._listeners[name]) : [];
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                var fn = handlers_1[_i];
                fn.call(this, ev);
            }
        }
        return this;
    };
    CloudbaseEventEmitter.prototype._listens = function (name) {
        return this._listeners[name] && this._listeners[name].length > 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWdEO0FBV2hELFNBQVMsaUJBQWlCLENBQUMsSUFBWSxFQUFFLFFBQWtCLEVBQUUsU0FBb0I7SUFDL0UsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBUUQsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZLEVBQUUsUUFBa0IsRUFBRSxTQUFvQjtJQUNsRixJQUFJLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRyxJQUFJLEdBQUc7UUFDckIsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsQztLQUNGO0FBQ0gsQ0FBQztBQVlEO0lBS0Usd0JBQVksSUFBWSxFQUFFLElBQVM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksd0NBQWM7QUFpQjNCO0lBQWlDLCtCQUFjO0lBRTdDLHFCQUFZLEtBQVksRUFBRSxJQUFVO1FBQXBDLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxTQUVoQztRQURDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztJQUNyQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBaUMsY0FBYyxHQU05QztBQU5ZLGtDQUFXO0FBV3hCO0lBQUE7UUFPbUIsZUFBVSxHQUFjLEVBQUUsQ0FBQztJQThEOUMsQ0FBQztJQXJEUSxrQ0FBRSxHQUFULFVBQVUsSUFBWSxFQUFFLFFBQWtCO1FBQ3hDLGlCQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQVFNLG1DQUFHLEdBQVYsVUFBVyxJQUFZLEVBQUUsUUFBa0I7UUFDekMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBT00sb0NBQUksR0FBWCxVQUFZLEtBQThCLEVBQUUsSUFBVTtRQUVwRCxJQUFJLG1CQUFZLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUUsS0FBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBTSxFQUFFLEdBQW1CLGVBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsS0FBZSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBdUIsQ0FBQztRQUV2SCxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVqQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3pFLEtBQWlCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO2dCQUF0QixJQUFNLEVBQUUsaUJBQUE7Z0JBQ1gsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDbkI7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQVFPLHdDQUFRLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDO0FBckVZLHNEQUFxQjtBQXlFbEMsSUFBTSxZQUFZLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO0FBRWpELFNBQWdCLGdCQUFnQixDQUFDLEtBQWEsRUFBRSxRQUFrQjtJQUNoRSxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsS0FBYSxFQUFFLElBQWM7SUFBZCxxQkFBQSxFQUFBLFNBQWM7SUFDekQsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUZELHNDQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsS0FBYSxFQUFFLFFBQWtCO0lBQ25FLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFGRCxrREFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU3RyaW5nLCBpc0luc3RhbmNlT2YgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgTGlzdGVuZXJzLCBJQ2xvdWRiYXNlRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcy9ldmVudHMnO1xuXG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lciAtIOa3u+WKoOebkeWQrFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBldmVudOWQjeensFxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSDlk43lupTlh73mlbBcbiAqIEBwYXJhbSB7TGlzdGVuZXJzfSBsaXN0ZW5lcnMgLSDlt7LlrZjlk43lupTlh73mlbDpm4blkIhcbiAqL1xuZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIobmFtZTogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24sIGxpc3RlbmVyczogTGlzdGVuZXJzKSB7XG4gIGxpc3RlbmVyc1tuYW1lXSA9IGxpc3RlbmVyc1tuYW1lXSB8fCBbXTtcbiAgbGlzdGVuZXJzW25hbWVdLnB1c2gobGlzdGVuZXIpO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIF9yZW1vdmVFdmVudExpc3RlbmVyIC0g56e76Zmk55uR5ZCsXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIGV2ZW505ZCN56ewXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIOWTjeW6lOWHveaVsFxuICogQHBhcmFtIHtMaXN0ZW5lcnN9IGxpc3RlbmVycyAtIOW3suWtmOWTjeW6lOWHveaVsOmbhuWQiFxuICovXG5mdW5jdGlvbiBfcmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lOiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbiwgbGlzdGVuZXJzOiBMaXN0ZW5lcnMpIHtcbiAgaWYgKGxpc3RlbmVycz8uW25hbWVdKSB7XG4gICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnNbbmFtZV0uaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgbGlzdGVuZXJzW25hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG59XG5pbnRlcmZhY2UgSUV2ZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0YXJnZXQ6IGFueTtcbiAgZGF0YTogYW55O1xufVxuLyoqXG4gKiDoh6rlrprkuYnkuovku7ZcbiAqIEBjbGFzcyBDbG91ZGJhc2VFdmVudFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSDnsbvlnotcbiAqIEBwYXJhbSB7YW55fSBkYXRhIC0g5pWw5o2uXG4gKi9cbmV4cG9ydCBjbGFzcyBDbG91ZGJhc2VFdmVudCBpbXBsZW1lbnRzIElFdmVudCB7XG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyB0YXJnZXQ6IGFueTtcbiAgcHVibGljIGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwgbnVsbDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG4vKipcbiAqIOiHquWumuS5iemUmeivr+S6i+S7tlxuICogQGNsYXNzIElFcnJvckV2ZW50XG4gKiBAZXh0ZW5kcyBDbG91ZGJhc2VFdmVudFxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgLSDplJnor6/kv6Hmga/lr7nosaFcbiAqIEBwYXJhbSB7YW55fSBkYXRhICAtIOaVsOaNrlxuICovXG5leHBvcnQgY2xhc3MgSUVycm9yRXZlbnQgZXh0ZW5kcyBDbG91ZGJhc2VFdmVudCB7XG4gIHB1YmxpYyByZWFkb25seSBlcnJvcjogRXJyb3I7XG4gIGNvbnN0cnVjdG9yKGVycm9yOiBFcnJvciwgZGF0YT86IGFueSkge1xuICAgIHN1cGVyKCdlcnJvcicsIHsgZXJyb3IsIGRhdGEgfSk7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIENsb3VkYmFzZUV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRiYXNlRXZlbnRFbWl0dGVyIGltcGxlbWVudHMgSUNsb3VkYmFzZUV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmVhZG9ubHlcbiAgICogQHByb3BlcnR5IHtMaXN0ZW5lcnN9IF9saXN0ZW5lcnMgLSDlk43lupTlh73mlbDpm4blkIhcbiAgICogQGRlZmF1bHQgYHt9YFxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfbGlzdGVuZXJzOiBMaXN0ZW5lcnMgPSB7fTtcblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAbWV0aG9kIG9uIC0g5re75Yqg55uR5ZCsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gZXZlbnTlkI3np7BcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSDlk43lupTlh73mlbBcbiAgICogQHJldHVybiBgdGhpc2BcbiAgICovXG4gIHB1YmxpYyBvbihuYW1lOiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbik6IHRoaXMge1xuICAgIF9hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyLCB0aGlzLl9saXN0ZW5lcnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBtZXRob2Qgb2ZmIC0g56e76Zmk55uR5ZCsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gZXZlbnTlkI3np7BcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSDlk43lupTlh73mlbBcbiAgICogQHJldHVybiBgdGhpc2BcbiAgICovXG4gIHB1YmxpYyBvZmYobmFtZTogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24pOiB0aGlzIHtcbiAgICBfcmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lciwgdGhpcy5fbGlzdGVuZXJzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAbWV0aG9kIGZpcmUgLSDop6blj5Hkuovku7ZcbiAgICogQHBhcmFtIHtzdHJpbmd8Q2xvdWRiYXNlRXZlbnR9IGV2ZW50IC0gZXZlbnRcbiAgICogQHJldHVybiBgdGhpc2BcbiAgICovXG4gIHB1YmxpYyBmaXJlKGV2ZW50OiBzdHJpbmcgfCBDbG91ZGJhc2VFdmVudCwgZGF0YT86IGFueSk6IHRoaXMge1xuICAgIC8vIOaJk+WNsOmUmeivr+S/oeaBr1xuICAgIGlmIChpc0luc3RhbmNlT2YoZXZlbnQsIElFcnJvckV2ZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoZXZlbnQgYXMgSUVycm9yRXZlbnQpLmVycm9yKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IGV2OiBDbG91ZGJhc2VFdmVudCA9IGlzU3RyaW5nKGV2ZW50KSA/IG5ldyBDbG91ZGJhc2VFdmVudChldmVudCBhcyBzdHJpbmcsIGRhdGEgfHwge30pIDogZXZlbnQgYXMgQ2xvdWRiYXNlRXZlbnQ7XG5cbiAgICBjb25zdCBuYW1lID0gZXYubmFtZTtcblxuICAgIGlmICh0aGlzLl9saXN0ZW5zKG5hbWUpKSB7XG4gICAgICBldi50YXJnZXQgPSB0aGlzO1xuXG4gICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA/IFsuLi50aGlzLl9saXN0ZW5lcnNbbmFtZV1dIDogW107XG4gICAgICBmb3IgKGNvbnN0IGZuIG9mIGhhbmRsZXJzKSB7XG4gICAgICAgIGZuLmNhbGwodGhpcywgZXYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZXRob2QgX2xpc3RlbnMgLSDliKTmlq3mmK/lkKbnm5HlkKzkuoZuYW1l5LqL5Lu2XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gZXZlbnTlkI3np7BcbiAgICogQHJldHVybiBgYm9vbGVhbmBcbiAgICovXG4gIHByaXZhdGUgX2xpc3RlbnMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSAmJiB0aGlzLl9saXN0ZW5lcnNbbmFtZV0ubGVuZ3RoID4gMDtcbiAgfVxufVxuXG5cblxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IENsb3VkYmFzZUV2ZW50RW1pdHRlcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgZXZlbnRFbWl0dGVyLm9uKGV2ZW50LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUV2ZW50KGV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSA9IHt9KSB7XG4gIGV2ZW50RW1pdHRlci5maXJlKGV2ZW50LCBkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gIGV2ZW50RW1pdHRlci5vZmYoZXZlbnQsIGNhbGxiYWNrKTtcbn0iXX0=
}, function(modId) { var map = {"./util":1734234913897}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913900, function(require, module, exports) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMnOyJdfQ==
}, function(modId) { var map = {"./decorators":1734234913901}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913901, function(require, module, exports) {

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
    isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
}
var REG_STACK_DECORATE = isFirefox ?
    /(\.js\/)?__decorate(\$\d+)?<@.*\d$/ :
    /(\/\w+\.js\.)?__decorate(\$\d+)?\s*\(.*\)$/;
var REG_STACK_LINK = /https?\:\/\/.+\:\d*\/.*\.js\:\d+\:\d+/;
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
                    sourceLink: sourceLink
                });
                try {
                    return fn.apply(this, args);
                }
                catch (err) {
                    var failErr = err;
                    var errMsg = err.message;
                    var logs = {
                        title: title || className + "." + fnName + " failed",
                        content: [{
                                type: 'error',
                                body: err
                            }]
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
                            logs.content = messages.map(function (msg) {
                                return {
                                    type: 'info',
                                    body: msg
                                };
                            });
                        }
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
                    var innerErr, err_1, failErr, errMsg, logs, msg;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                innerErr = getRewritedError({
                                    err: new Error(),
                                    className: className,
                                    methodName: fnName,
                                    sourceLink: sourceLink
                                });
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, fn.apply(this, args)];
                            case 2: return [2, _a.sent()];
                            case 3:
                                err_1 = _a.sent();
                                failErr = err_1;
                                errMsg = err_1.message;
                                logs = {
                                    title: title || className + "." + fnName + " failed",
                                    content: [{
                                            type: 'error',
                                            body: err_1
                                        }]
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
                                        logs.content = messages.map(function (msg) {
                                            return {
                                                type: 'info',
                                                body: msg
                                            };
                                        });
                                    }
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
    var REG_STACK_INNER_METHOD = isFirefox ?
        /^catchErrorsDecorator\/<\/descriptor.value@.*\d$/ :
        new RegExp(className + "\\.descriptor.value\\s*\\[as\\s" + methodName + "\\]\\s*\\(.*\\)$");
    var REG_STACK_INNER_METHOD_WITHOUT_LINK = isFirefox ?
        /^catchErrorsDecorator\/<\/descriptor.value/ :
        new RegExp(className + "\\.descriptor.value\\s*\\[as\\s" + methodName + "\\]");
    var indexOfSource = innerErrStack.findIndex(function (str) { return REG_STACK_INNER_METHOD.test(str); });
    var innerErr;
    if (indexOfSource !== -1) {
        var realErrStack = innerErrStack.filter(function (v, i) {
            return i > indexOfSource;
        });
        realErrStack.unshift(innerErrStack[indexOfSource]
            .replace(REG_STACK_INNER_METHOD_WITHOUT_LINK, className + "." + methodName)
            .replace(REG_STACK_LINK, sourceLink));
        innerErr = new Error();
        innerErr.stack = (isFirefox ? '@debugger' : 'Error') + "\n" + realErrStack.join('\n');
    }
    return innerErr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2RlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTZDO0FBQzdDLDBDQUE2QztBQVk3QyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDdEIsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtJQUMzRCxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDM0Q7QUFJRCxJQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLG9DQUFvQyxDQUFDLENBQUM7SUFDdEMsNENBQTRDLENBQUM7QUFDL0MsSUFBTSxjQUFjLEdBQUcsdUNBQXVDLENBQUM7QUFLL0QsU0FBZ0Isb0JBQW9CLENBQUMsT0FBcUM7SUFFaEUsSUFBQSxLQUEwRCxPQUFPLEtBQW5ELEVBQWQsSUFBSSxtQkFBRyxPQUFPLEtBQUEsRUFBRSxLQUEwQyxPQUFPLFdBQWxDLEVBQWYsVUFBVSxtQkFBRyxFQUFFLEtBQUEsRUFBRSxLQUFLLEdBQW9CLE9BQU8sTUFBM0IsRUFBRSxLQUFrQixPQUFPLFNBQVosRUFBYixRQUFRLG1CQUFHLEVBQUUsS0FBQSxDQUFhO0lBRTFFLE9BQU8sVUFDTCxNQUFXLEVBQ1gsVUFBa0IsRUFDbEIsVUFBNkM7UUFHN0MsSUFBSSxDQUFDLHlCQUFhLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNsRSxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQztRQUNuRCxJQUFNLEVBQUUs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QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUN2RixJQUFJLFFBQWUsQ0FBQztJQUNwQixJQUFJLGFBQWEsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUV4QixJQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsYUFBYSxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO2FBQzlDLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBSyxTQUFTLFNBQUksVUFBWSxDQUFDO2FBQzFFLE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN4QyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsS0FBSyxHQUFHLENBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sV0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFDO0tBQ3JGO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaW50R3JvdXBMb2cgfSBmcm9tIFwiLi4vbGlicy91dGlsXCI7XG5pbXBvcnQgeyBJU19ERUJVR19NT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5pbnRlcmZhY2UgSUNhdGNoRXJyb3JzRGVjb3JhdG9yT3B0aW9ucyB7XG4gIG1vZGU/OiAnc3luYycgfCAnYXN5bmMnO1xuICBjdXN0b21JbmZvPzoge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBtZXRob2ROYW1lPzogc3RyaW5nO1xuICB9O1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZXM/OiBzdHJpbmdbXTtcbn1cbi8vIGZpcmVmb3jnmoRzdGFja+agvOW8j+S4jmNocm9tZeS4jeWQjFxubGV0IGlzRmlyZWZveCA9IGZhbHNlO1xuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSAhPT0gLTE7XG59XG4vKipcbiAqIGRlY29yYXRl5Zyoc3RhY2vkuK3kuIDoiKzpg73nibnlrprnmoTop4TojINcbiAqL1xuY29uc3QgUkVHX1NUQUNLX0RFQ09SQVRFID0gaXNGaXJlZm94ID9cbiAgLyhcXC5qc1xcLyk/X19kZWNvcmF0ZShcXCRcXGQrKT88QC4qXFxkJC8gOlxuICAvKFxcL1xcdytcXC5qc1xcLik/X19kZWNvcmF0ZShcXCRcXGQrKT9cXHMqXFwoLipcXCkkLztcbmNvbnN0IFJFR19TVEFDS19MSU5LID0gL2h0dHBzP1xcOlxcL1xcLy4rXFw6XFxkKlxcLy4qXFwuanNcXDpcXGQrXFw6XFxkKy87XG4vKipcbiAqIGRlYnVn5qih5byP5by65YyW5pel5b+X5L+h5oGvXG4gKiBAcGFyYW0gb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2F0Y2hFcnJvcnNEZWNvcmF0b3Iob3B0aW9uczogSUNhdGNoRXJyb3JzRGVjb3JhdG9yT3B0aW9ucykge1xuXG4gIGNvbnN0IHsgbW9kZSA9ICdhc3luYycsIGN1c3RvbUluZm8gPSB7fSwgdGl0bGUsIG1lc3NhZ2VzID0gW10gfSA9IG9wdGlvbnM7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChcbiAgICB0YXJnZXQ6IGFueSxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8RnVuY3Rpb24+XG4gICkge1xuICAgIC8vIOeUn+S6p+eOr+Wig+emgeeUqFxuICAgIGlmICghSVNfREVCVUdfTU9ERSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjdXN0b21JbmZvLmNsYXNzTmFtZSB8fCB0YXJnZXQuY29uc3RydWN0b3IubmFtZTtcbiAgICBjb25zdCBmbk5hbWUgPSBjdXN0b21JbmZvLm1ldGhvZE5hbWUgfHwgbWV0aG9kTmFtZTtcbiAgICBjb25zdCBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICAvLyDooqtkZWNvcmF0b3Loo4XppbDnmoTmupDnoIFsaW5rXG4gICAgLy8g5ZyoZGVzY3JpcHRvci52YWx1ZeWklumDqOatpOWkhOWIm+W7uueahHN0YWNr5bGC5qyh5Y+v6Kem6L6+5rqQ56CBXG4gICAgLy8g6ICMZGVzY3JpcHRvci52YWx1ZeWGhemDqOacieWPr+iDveeUseS6jnN0YWNr5aSq5rex5peg5rOV6Kem6L6+XG4gICAgY29uc3Qgc291cmNlTGluayA9IGdldFNvdXJjZUxpbmsobmV3IEVycm9yKCkpO1xuXG4gICAgaWYgKG1vZGUgPT09ICdzeW5jJykge1xuICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAvLyDmraTlpITnmoRzdGFja+S9nOeUqOS4u+imgeaYr+S4uuS6huiOt+WPluiiq2RlY29yYXRvcuijhemlsOeahOa6kOeggWNsYXNz5ZKMbWV0aG9k5ZCN56ewXG4gICAgICAgIGNvbnN0IGlubmVyRXJyOiBhbnkgPSBnZXRSZXdyaXRlZEVycm9yKHtcbiAgICAgICAgICBlcnI6IG5ldyBFcnJvcigpLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBtZXRob2ROYW1lOiBmbk5hbWUsXG4gICAgICAgICAgc291cmNlTGlua1xuICAgICAgICB9KVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbGV0IGZhaWxFcnIgPSBlcnI7XG4gICAgICAgICAgY29uc3QgeyBtZXNzYWdlOiBlcnJNc2cgfSA9IGVycjtcbiAgICAgICAgICBjb25zdCBsb2dzOiBhbnkgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUgfHwgYCR7Y2xhc3NOYW1lfS4ke2ZuTmFtZX0gZmFpbGVkYCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFt7XG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgIGJvZHk6IGVyclxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5Y+q54m55q6K5aSE55CGU0RL5Lia5Yqh6YC76L6R5oqb5Ye655qE6ZSZ6K+vLUpTT04gc3RyaW5nXG4gICAgICAgICAgaWYgKGVyck1zZyAmJiAvXlxcey4qXFx9JC8udGVzdChlcnJNc2cpKSB7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBKU09OLnBhcnNlKGVyck1zZyk7XG4gICAgICAgICAgICBsb2dzLnN1YnRpdGxlID0gZXJyTXNnO1xuICAgICAgICAgICAgaWYgKG1zZy5jb2RlKSB7XG4gICAgICAgICAgICAgIGlmIChpbm5lckVycikge1xuICAgICAgICAgICAgICAgIGlubmVyRXJyLmNvZGUgPSBtc2cuY29kZTtcbiAgICAgICAgICAgICAgICBpbm5lckVyci5tc2cgPSBtc2cubXNnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gbXNnLmNvZGVcbiAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9IG1zZy5tc2dcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmYWlsRXJyID0gaW5uZXJFcnIgfHwgZXJyO1xuICAgICAgICAgICAgICBsb2dzLmNvbnRlbnQgPSBtZXNzYWdlcy5tYXAobXNnID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICAgICAgICAgICAgYm9keTogbXNnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcHJpbnRHcm91cExvZyhsb2dzKTtcbiAgICAgICAgICB0aHJvdyBmYWlsRXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBhc3luYyBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgaW5uZXJFcnI6IGFueSA9IGdldFJld3JpdGVkRXJyb3Ioe1xuICAgICAgICAgIGVycjogbmV3IEVycm9yKCksXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgIG1ldGhvZE5hbWU6IGZuTmFtZSxcbiAgICAgICAgICBzb3VyY2VMaW5rXG4gICAgICAgIH0pXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsZXQgZmFpbEVyciA9IGVycjtcbiAgICAgICAgICBjb25zdCB7IG1lc3NhZ2U6IGVyck1zZyB9ID0gZXJyO1xuICAgICAgICAgIGNvbnN0IGxvZ3M6IGFueSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSB8fCBgJHtjbGFzc05hbWV9LiR7Zm5OYW1lfSBmYWlsZWRgLFxuICAgICAgICAgICAgY29udGVudDogW3tcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgYm9keTogZXJyXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDlj6rnibnmrorlpITnkIZTREvkuJrliqHpgLvovpHmipvlh7rnmoTplJnor68tSlNPTiBzdHJpbmdcbiAgICAgICAgICBpZiAoZXJyTXNnICYmIC9eXFx7LipcXH0kLy50ZXN0KGVyck1zZykpIHtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IEpTT04ucGFyc2UoZXJyTXNnKTtcbiAgICAgICAgICAgIGxvZ3Muc3VidGl0bGUgPSBtc2c7XG4gICAgICAgICAgICBpZiAobXNnLmNvZGUpIHtcbiAgICAgICAgICAgICAgaWYgKGlubmVyRXJyKSB7XG4gICAgICAgICAgICAgICAgaW5uZXJFcnIuY29kZSA9IG1zZy5jb2RlO1xuICAgICAgICAgICAgICAgIGlubmVyRXJyLm1lc3NhZ2UgPSBtc2cubXNnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gbXNnLmNvZGVcbiAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9IG1zZy5tc2dcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmYWlsRXJyID0gaW5uZXJFcnIgfHwgZXJyO1xuICAgICAgICAgICAgICBsb2dzLmNvbnRlbnQgPSBtZXNzYWdlcy5tYXAobXNnID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICAgICAgICAgICAgYm9keTogbXNnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcHJpbnRHcm91cExvZyhsb2dzKTtcbiAgICAgICAgICB0aHJvdyBmYWlsRXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG59XG5cbi8qKlxuICog5Zyo5Y6f5aeL5aCG5qCI5Lit5p+l5om+6KOF6aWw5Zmo5p2h55uu5bm26L+U5Zue5rqQ56CB6ZO+5o6lbGlua1xuICogQHBhcmFtIGVyclxuICovXG5mdW5jdGlvbiBnZXRTb3VyY2VMaW5rKGVycjogRXJyb3IpIHtcbiAgbGV0IHNvdXJjZUxpbmsgPSAnJztcbiAgY29uc3Qgb3V0dGVyRXJyU3RhY2tzID0gZXJyLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgY29uc3QgaW5kZXhPZkRlY29yYXRvciA9IG91dHRlckVyclN0YWNrcy5maW5kSW5kZXgoc3RyID0+IFJFR19TVEFDS19ERUNPUkFURS50ZXN0KHN0cikpO1xuICBpZiAoaW5kZXhPZkRlY29yYXRvciAhPT0gLTEpIHtcbiAgICBjb25zdCBtYXRjaCA9IFJFR19TVEFDS19MSU5LLmV4ZWMob3V0dGVyRXJyU3RhY2tzW2luZGV4T2ZEZWNvcmF0b3IgKyAxXSB8fCAnJyk7XG4gICAgc291cmNlTGluayA9IG1hdGNoID8gbWF0Y2hbMF0gOiAnJztcbiAgfVxuICByZXR1cm4gc291cmNlTGluaztcbn1cblxuLyoqXG4gKiDlnKjljp/lp4vloIbmoIjkuK3mn6Xmib7oo4XppbDlmajmnaHnm67vvIzliZTpmaTlhbblkI7nmoTml6DnlKjloIbmoIjvvIzlubblsIbpk77mjqXmm7/mjaLkuLrmupDnoIFsaW5rXG4gKiBAcGFyYW0gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBnZXRSZXdyaXRlZEVycm9yKG9wdGlvbnM6IHtcbiAgZXJyOiBFcnJvcjtcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIG1ldGhvZE5hbWU6IHN0cmluZztcbiAgc291cmNlTGluazogc3RyaW5nO1xufSkge1xuICBjb25zdCB7IGVyciwgY2xhc3NOYW1lLCBtZXRob2ROYW1lLCBzb3VyY2VMaW5rIH0gPSBvcHRpb25zO1xuICAvLyDmib7kuI3liLDmupDnoIFsaW5r6L+U5ZuebnVsbO+8jOWQjue7remAu+i+keWwhuaJk+WNsOWOn+WghuagiOS/oeaBr1xuICBpZiAoIXNvdXJjZUxpbmspIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGlubmVyRXJyU3RhY2sgPSBlcnIuc3RhY2suc3BsaXQoJ1xcbicpO1xuICBjb25zdCBSRUdfU1RBQ0tfSU5ORVJfTUVUSE9EID0gaXNGaXJlZm94ID9cbiAgICAvXmNhdGNoRXJyb3JzRGVjb3JhdG9yXFwvPFxcL2Rlc2NyaXB0b3IudmFsdWVALipcXGQkLyA6XG4gICAgbmV3IFJlZ0V4cChgJHtjbGFzc05hbWV9XFxcXC5kZXNjcmlwdG9yLnZhbHVlXFxcXHMqXFxcXFthc1xcXFxzJHttZXRob2ROYW1lfVxcXFxdXFxcXHMqXFxcXCguKlxcXFwpJGApO1xuICBjb25zdCBSRUdfU1RBQ0tfSU5ORVJfTUVUSE9EX1dJVEhPVVRfTElOSyA9IGlzRmlyZWZveCA/XG4gICAgL15jYXRjaEVycm9yc0RlY29yYXRvclxcLzxcXC9kZXNjcmlwdG9yLnZhbHVlLyA6XG4gICAgbmV3IFJlZ0V4cChgJHtjbGFzc05hbWV9XFxcXC5kZXNjcmlwdG9yLnZhbHVlXFxcXHMqXFxcXFthc1xcXFxzJHttZXRob2ROYW1lfVxcXFxdYCk7XG4gIGNvbnN0IGluZGV4T2ZTb3VyY2UgPSBpbm5lckVyclN0YWNrLmZpbmRJbmRleChzdHIgPT4gUkVHX1NUQUNLX0lOTkVSX01FVEhPRC50ZXN0KHN0cikpO1xuICBsZXQgaW5uZXJFcnI6IEVycm9yO1xuICBpZiAoaW5kZXhPZlNvdXJjZSAhPT0gLTEpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgcmVhbEVyclN0YWNrID0gaW5uZXJFcnJTdGFjay5maWx0ZXIoKHYsIGkpID0+IHtcbiAgICAgIHJldHVybiBpID4gaW5kZXhPZlNvdXJjZVxuICAgIH0pO1xuICAgIHJlYWxFcnJTdGFjay51bnNoaWZ0KGlubmVyRXJyU3RhY2tbaW5kZXhPZlNvdXJjZV1cbiAgICAgIC5yZXBsYWNlKFJFR19TVEFDS19JTk5FUl9NRVRIT0RfV0lUSE9VVF9MSU5LLCBgJHtjbGFzc05hbWV9LiR7bWV0aG9kTmFtZX1gKVxuICAgICAgLnJlcGxhY2UoUkVHX1NUQUNLX0xJTkssIHNvdXJjZUxpbmspKTtcbiAgICBpbm5lckVyciA9IG5ldyBFcnJvcigpO1xuICAgIGlubmVyRXJyLnN0YWNrID0gYCR7aXNGaXJlZm94ID8gJ0BkZWJ1Z2dlcicgOiAnRXJyb3InfVxcbiR7cmVhbEVyclN0YWNrLmpvaW4oJ1xcbicpfWA7XG4gIH1cbiAgcmV0dXJuIGlubmVyRXJyO1xufSJdfQ==
}, function(modId) { var map = {"../libs/util":1734234913897,"../constants":1734234913892}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1734234913891);
})()
//miniprogram-npm-outsideDeps=["@cloudbase/adapter-interface","crypto-js/hmac-sha256","crypto-js/enc-base64","crypto-js/enc-utf8"]
//# sourceMappingURL=index.js.map