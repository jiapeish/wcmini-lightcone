module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1734234913753, function(require, module, exports) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudbase = void 0;
var utilities_1 = require("@cloudbase/utilities");
var cloudbase_adapter_wx_mp_1 = __importDefault(require("cloudbase-adapter-wx_mp"));
var component_1 = require("./libs/component");
var adapter_1 = require("./libs/adapter");
var cache_1 = require("./libs/cache");
var request_1 = require("./libs/request");
var common_1 = require("./constants/common");
var useAdapters = utilities_1.adapters.useAdapters, useDefaultAdapter = utilities_1.adapters.useDefaultAdapter, RUNTIME = utilities_1.adapters.RUNTIME;
var ERRORS = utilities_1.constants.ERRORS, COMMUNITY_SITE_URL = utilities_1.constants.COMMUNITY_SITE_URL;
var printWarn = utilities_1.utils.printWarn;
var catchErrorsDecorator = utilities_1.helpers.catchErrorsDecorator;
var DEFAULT_INIT_CONFIG = {
    timeout: 15000,
    persistence: 'local'
};
var MAX_TIMEOUT = 1000 * 60 * 10;
var MIN_TIMEOUT = 100;
var extensionMap = {};
var Cloudbase = (function () {
    function Cloudbase(config) {
        this._config = config ? config : this._config;
        this.authInstance = null;
    }
    Object.defineProperty(Cloudbase.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloudbase.prototype, "platform", {
        get: function () {
            return adapter_1.Platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloudbase.prototype, "cache", {
        get: function () {
            return cache_1.getCacheByEnvId(this._config.env);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloudbase.prototype, "localCache", {
        get: function () {
            return cache_1.getLocalCache(this._config.env);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloudbase.prototype, "request", {
        get: function () {
            return request_1.getRequestByEnvId(this._config.env);
        },
        enumerable: false,
        configurable: true
    });
    Cloudbase.prototype.init = function (config) {
        if (!config.env) {
            throw new Error(JSON.stringify({
                code: ERRORS.INVALID_PARAMS,
                msg: 'env must not be specified'
            }));
        }
        if (!adapter_1.Platform.adapter) {
            this._useDefaultAdapter();
        }
        this.requestClient = new adapter_1.Platform.adapter.reqClass({
            timeout: config.timeout || 5000,
            timeoutMsg: "[" + common_1.getSdkName() + "][REQUEST TIMEOUT] request had been abort since didn't finished within" + config.timeout / 1000 + "s"
        });
        if (adapter_1.Platform.runtime !== RUNTIME.WEB) {
            if (!config.appSecret) {
                throw new Error(JSON.stringify({
                    code: ERRORS.INVALID_PARAMS,
                    msg: 'invalid appSecret'
                }));
            }
            var appSign_1 = adapter_1.Platform.adapter.getAppSign ? adapter_1.Platform.adapter.getAppSign() : '';
            if (config.appSign && appSign_1 && config.appSign !== appSign_1) {
                throw new Error(JSON.stringify({
                    code: ERRORS.INVALID_PARAMS,
                    msg: 'invalid appSign'
                }));
            }
            appSign_1 && (config.appSign = appSign_1);
            if (!config.appSign) {
                throw new Error(JSON.stringify({
                    code: ERRORS.INVALID_PARAMS,
                    msg: 'invalid appSign'
                }));
            }
        }
        this._config = __assign(__assign({}, DEFAULT_INIT_CONFIG), config);
        this._config.timeout = this._formatTimeout(this._config.timeout);
        var _a = this._config, env = _a.env, persistence = _a.persistence, debug = _a.debug, timeout = _a.timeout, appSecret = _a.appSecret, appSign = _a.appSign;
        cache_1.initCache({ env: env, persistence: persistence, debug: debug, platformInfo: this.platform });
        request_1.initRequest({ env: env, region: config.region || '', timeout: timeout, appSecret: appSecret, appSign: appSign });
        if (config.region) {
            common_1.setRegionLevelEndpoint(env, config.region || '');
        }
        var app = new Cloudbase(this._config);
        app.requestClient = this.requestClient;
        return app;
    };
    Cloudbase.prototype.updateConfig = function (config) {
        var persistence = config.persistence, debug = config.debug;
        this._config.persistence = persistence;
        this._config.debug = debug;
        cache_1.initCache({ env: this._config.env, persistence: persistence, debug: debug, platformInfo: this.platform });
    };
    Cloudbase.prototype.registerExtension = function (ext) {
        extensionMap[ext.name] = ext;
    };
    Cloudbase.prototype.invokeExtension = function (name, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var ext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ext = extensionMap[name];
                        if (!ext) {
                            throw new Error(JSON.stringify({
                                code: ERRORS.INVALID_PARAMS,
                                msg: "extension:" + name + " must be registered before invoke"
                            }));
                        }
                        return [4, ext.invoke(opts, this)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Cloudbase.prototype.useAdapters = function (adapters) {
        var _a = useAdapters(adapters) || {}, adapter = _a.adapter, runtime = _a.runtime;
        adapter && (adapter_1.Platform.adapter = adapter);
        runtime && (adapter_1.Platform.runtime = runtime);
    };
    Cloudbase.prototype.registerHook = function (hook) {
        component_1.registerHook(Cloudbase, hook);
    };
    Cloudbase.prototype.registerComponent = function (component) {
        component_1.registerComponent(Cloudbase, component);
    };
    Cloudbase.prototype.registerVersion = function (version) {
        common_1.setSdkVersion(version);
    };
    Cloudbase.prototype.registerSdkName = function (name) {
        common_1.setSdkName(name);
    };
    Cloudbase.prototype.registerEndPoint = function (url, protocol) {
        common_1.setEndPoint(url, protocol);
    };
    Cloudbase.prototype._useDefaultAdapter = function () {
        var _a = useDefaultAdapter(), adapter = _a.adapter, runtime = _a.runtime;
        adapter_1.Platform.adapter = adapter;
        adapter_1.Platform.runtime = runtime;
    };
    Cloudbase.prototype._formatTimeout = function (timeout) {
        switch (true) {
            case timeout > MAX_TIMEOUT:
                printWarn(ERRORS.INVALID_PARAMS, 'timeout is greater than maximum value[10min]');
                return MAX_TIMEOUT;
            case timeout < MIN_TIMEOUT:
                printWarn(ERRORS.INVALID_PARAMS, 'timeout is less than maximum value[100ms]');
                return MIN_TIMEOUT;
            default:
                return timeout;
        }
    };
    __decorate([
        catchErrorsDecorator({
            mode: 'sync',
            title: 'Cloudbase 初始化失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 cloudbase.init() 的语法或参数是否正确',
                '  2 - 如果是非浏览器环境，是否配置了安全应用来源（https://docs.cloudbase.net/api-reference/webv2/adapter.html#jie-ru-liu-cheng）',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL
            ]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Cloudbase)
    ], Cloudbase.prototype, "init", null);
    __decorate([
        catchErrorsDecorator({
            title: '调用扩展能力失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 invokeExtension() 的语法或参数是否正确',
                '  2 - 被调用的扩展能力是否已经安装并通过 registerExtension() 注册',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL
            ]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Cloudbase.prototype, "invokeExtension", null);
    return Cloudbase;
}());
exports.cloudbase = new Cloudbase();
exports.cloudbase.useAdapters(cloudbase_adapter_wx_mp_1.default);
exports.default = exports.cloudbase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMkU7QUFJM0Usb0ZBQXFEO0FBQ3JELDhDQUFtRTtBQUNuRSwwQ0FBMEM7QUFHMUMsc0NBQXlFO0FBRXpFLDBDQUFnRTtBQUNoRSw2Q0FBZ0g7QUFDeEcsSUFBQSxXQUFXLEdBQWlDLG9CQUFRLFlBQXpDLEVBQUUsaUJBQWlCLEdBQWMsb0JBQVEsa0JBQXRCLEVBQUUsT0FBTyxHQUFLLG9CQUFRLFFBQWIsQ0FBYztBQUNyRCxJQUFBLE1BQU0sR0FBeUIscUJBQVMsT0FBbEMsRUFBRSxrQkFBa0IsR0FBSyxxQkFBUyxtQkFBZCxDQUFlO0FBQ3pDLElBQUEsU0FBUyxHQUFLLGlCQUFLLFVBQVYsQ0FBVztBQUNwQixJQUFBLG9CQUFvQixHQUFLLG1CQUFPLHFCQUFaLENBQWE7QUFLekMsSUFBTSxtQkFBbUIsR0FBOEI7SUFDckQsT0FBTyxFQUFFLEtBQUs7SUFDZCxXQUFXLEVBQUUsT0FBTztDQUNyQixDQUFDO0FBR0YsSUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFbkMsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBRXhCLElBQU0sWUFBWSxHQUE0QixFQUFFLENBQUM7QUFFakQ7SUFLRSxtQkFBWSxNQUF5QjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQkFBSSw2QkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENB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Qzs7OztvREFXRDtJQThDSCxnQkFBQztDQUFBLEFBaExELElBZ0xDO0FBRVksUUFBQSxTQUFTLEdBQWUsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNyRCxpQkFBUyxDQUFDLFdBQVcsQ0FBQyxpQ0FBYyxDQUFDLENBQUM7QUFFdEMsa0JBQWUsaUJBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkYXB0ZXJzLCBjb25zdGFudHMsIHV0aWxzLCBoZWxwZXJzIH0gZnJvbSAnQGNsb3VkYmFzZS91dGlsaXRpZXMnO1xuaW1wb3J0IHsgU0RLQWRhcHRlckludGVyZmFjZSwgQ2xvdWRiYXNlQWRhcHRlciwgSVJlcXVlc3RDb25maWcgfSBmcm9tICdAY2xvdWRiYXNlL2FkYXB0ZXItaW50ZXJmYWNlJztcbmltcG9ydCB7IElDbG91ZGJhc2VDb25maWcsIElDbG91ZGJhc2VVcGdyYWRlZENvbmZpZywgSUNsb3VkYmFzZSwgSUNsb3VkYmFzZUV4dGVuc2lvbiwgS1YsIElDbG91ZGJhc2VQbGF0Zm9ybUluZm8gfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzJztcbmltcG9ydCB7IElDbG91ZGJhc2VBdXRoIH0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcy9hdXRoJztcbmltcG9ydCBhZGFwdGVyRm9yV3hNcCBmcm9tICdjbG91ZGJhc2UtYWRhcHRlci13eF9tcCc7XG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudCwgcmVnaXN0ZXJIb29rIH0gZnJvbSAnLi9saWJzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4vbGlicy9hZGFwdGVyJztcbmltcG9ydCB7IElDbG91ZGJhc2VDb21wb25lbnQsIElDbG91ZGJhc2VIb29rIH0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcy9jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNsb3VkYmFzZUNhY2hlIH0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcy9jYWNoZSc7XG5pbXBvcnQgeyBpbml0Q2FjaGUsIGdldENhY2hlQnlFbnZJZCwgZ2V0TG9jYWxDYWNoZSB9IGZyb20gJy4vbGlicy9jYWNoZSc7XG5pbXBvcnQgeyBJQ2xvdWRiYXNlUmVxdWVzdCB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvcmVxdWVzdCc7XG5pbXBvcnQgeyBpbml0UmVxdWVzdCwgZ2V0UmVxdWVzdEJ5RW52SWQgfSBmcm9tICcuL2xpYnMvcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRTZGtOYW1lLCBzZXRTZGtWZXJzaW9uLCBzZXRFbmRQb2ludCwgc2V0UmVnaW9uTGV2ZWxFbmRwb2ludCwgc2V0U2RrTmFtZSB9IGZyb20gJy4vY29uc3RhbnRzL2NvbW1vbic7XG5jb25zdCB7IHVzZUFkYXB0ZXJzLCB1c2VEZWZhdWx0QWRhcHRlciwgUlVOVElNRSB9ID0gYWRhcHRlcnM7XG5jb25zdCB7IEVSUk9SUywgQ09NTVVOSVRZX1NJVEVfVVJMIH0gPSBjb25zdGFudHM7XG5jb25zdCB7IHByaW50V2FybiB9ID0gdXRpbHM7XG5jb25zdCB7IGNhdGNoRXJyb3JzRGVjb3JhdG9yIH0gPSBoZWxwZXJzO1xuXG4vKipcbiAqIEBjb25zdGFudCDpu5jorqTphY3nva5cbiAqL1xuY29uc3QgREVGQVVMVF9JTklUX0NPTkZJRzogUGFydGlhbDxJQ2xvdWRiYXNlQ29uZmlnPiA9IHtcbiAgdGltZW91dDogMTUwMDAsXG4gIHBlcnNpc3RlbmNlOiAnbG9jYWwnXG59O1xuXG4vLyB0aW1lb3V05LiK6ZmQMTDliIbpkp9cbmNvbnN0IE1BWF9USU1FT1VUID0gMTAwMCAqIDYwICogMTA7XG4vLyB0aW1lb3V05LiL6ZmQMTAwbXNcbmNvbnN0IE1JTl9USU1FT1VUID0gMTAwO1xuXG5jb25zdCBleHRlbnNpb25NYXA6IEtWPElDbG91ZGJhc2VFeHRlbnNpb24+ID0ge307XG5cbmNsYXNzIENsb3VkYmFzZSBpbXBsZW1lbnRzIElDbG91ZGJhc2Uge1xuICBwdWJsaWMgYXV0aEluc3RhbmNlOiBJQ2xvdWRiYXNlQXV0aDtcbiAgcHVibGljIHJlcXVlc3RDbGllbnQ6IGFueTtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJQ2xvdWRiYXNlQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZz86IElDbG91ZGJhc2VDb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWcgPyBjb25maWcgOiB0aGlzLl9jb25maWc7XG4gICAgdGhpcy5hdXRoSW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG5cbiAgZ2V0IHBsYXRmb3JtKCk6IElDbG91ZGJhc2VQbGF0Zm9ybUluZm8ge1xuICAgIHJldHVybiBQbGF0Zm9ybTtcbiAgfVxuXG4gIGdldCBjYWNoZSgpOiBJQ2xvdWRiYXNlQ2FjaGUge1xuICAgIHJldHVybiBnZXRDYWNoZUJ5RW52SWQodGhpcy5fY29uZmlnLmVudik7XG4gIH1cblxuICBnZXQgbG9jYWxDYWNoZSgpOiBJQ2xvdWRiYXNlQ2FjaGUge1xuICAgIHJldHVybiBnZXRMb2NhbENhY2hlKHRoaXMuX2NvbmZpZy5lbnYpO1xuICB9XG5cbiAgZ2V0IHJlcXVlc3QoKTogSUNsb3VkYmFzZVJlcXVlc3Qge1xuICAgIHJldHVybiBnZXRSZXF1ZXN0QnlFbnZJZCh0aGlzLl9jb25maWcuZW52KTtcbiAgfVxuXG5cbiAgQGNhdGNoRXJyb3JzRGVjb3JhdG9yKHtcbiAgICBtb2RlOiAnc3luYycsXG4gICAgdGl0bGU6ICdDbG91ZGJhc2Ug5Yid5aeL5YyW5aSx6LSlJyxcbiAgICBtZXNzYWdlczogW1xuICAgICAgJ+ivt+ehruiupOS7peS4i+WQhOmhue+8micsXG4gICAgICAnICAxIC0g6LCD55SoIGNsb3VkYmFzZS5pbml0KCkg55qE6K+t5rOV5oiW5Y+C5pWw5piv5ZCm5q2j56GuJyxcbiAgICAgICcgIDIgLSDlpoLmnpzmmK/pnZ7mtY/op4jlmajnjq/looPvvIzmmK/lkKbphY3nva7kuoblronlhajlupTnlKjmnaXmupDvvIhodHRwczovL2RvY3MuY2xvdWRiYXNlLm5ldC9hcGktcmVmZXJlbmNlL3dlYnYyL2FkYXB0ZXIuaHRtbCNqaWUtcnUtbGl1LWNoZW5n77yJJyxcbiAgICAgIGDlpoLmnpzpl67popjkvp3nhLblrZjlnKjvvIzlu7rorq7liLDlrpjmlrnpl67nrZTnpL7ljLrmj5Dpl67miJblr7vmib7luK7liqnvvJoke0NPTU1VTklUWV9TSVRFX1VSTH1gXG4gICAgXVxuICB9KVxuICBwdWJsaWMgaW5pdChjb25maWc6IElDbG91ZGJhc2VDb25maWcpOiBDbG91ZGJhc2Uge1xuICAgIGlmICghY29uZmlnLmVudikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29kZTogRVJST1JTLklOVkFMSURfUEFSQU1TLFxuICAgICAgICBtc2c6ICdlbnYgbXVzdCBub3QgYmUgc3BlY2lmaWVkJ1xuICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbml7boi6XmnKrlhbzlrrnlubPlj7DvvIzliJnkvb/nlKjpu5jorqRhZGFwdGVyXG4gICAgaWYgKCFQbGF0Zm9ybS5hZGFwdGVyKSB7XG4gICAgICB0aGlzLl91c2VEZWZhdWx0QWRhcHRlcigpO1xuICAgIH1cblxuICAgIHRoaXMucmVxdWVzdENsaWVudCA9IG5ldyBQbGF0Zm9ybS5hZGFwdGVyLnJlcUNsYXNzKHtcbiAgICAgIHRpbWVvdXQ6IGNvbmZpZy50aW1lb3V0IHx8IDUwMDAsXG4gICAgICB0aW1lb3V0TXNnOiBgWyR7Z2V0U2RrTmFtZSgpfV1bUkVRVUVTVCBUSU1FT1VUXSByZXF1ZXN0IGhhZCBiZWVuIGFib3J0IHNpbmNlIGRpZG5cXCd0IGZpbmlzaGVkIHdpdGhpbiR7Y29uZmlnLnRpbWVvdXQgLyAxMDAwfXNgXG4gICAgfSBhcyBJUmVxdWVzdENvbmZpZyk7XG4gICAgaWYgKFBsYXRmb3JtLnJ1bnRpbWUgIT09IFJVTlRJTUUuV0VCKSB7XG4gICAgICBpZiAoIWNvbmZpZy5hcHBTZWNyZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBjb2RlOiBFUlJPUlMuSU5WQUxJRF9QQVJBTVMsXG4gICAgICAgICAgbXNnOiAnaW52YWxpZCBhcHBTZWNyZXQnXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIC8vIGFkYXB0ZXLmj5Dkvpvojrflj5blupTnlKjmoIfor4bnmoTmjqXlj6NcbiAgICAgIGNvbnN0IGFwcFNpZ24gPSBQbGF0Zm9ybS5hZGFwdGVyLmdldEFwcFNpZ24gPyBQbGF0Zm9ybS5hZGFwdGVyLmdldEFwcFNpZ24oKSA6ICcnO1xuICAgICAgaWYgKGNvbmZpZy5hcHBTaWduICYmIGFwcFNpZ24gJiYgY29uZmlnLmFwcFNpZ24gIT09IGFwcFNpZ24pIHtcbiAgICAgICAgLy8g5Lyg5YWl55qEYXBwU2lnbuS4jnNka+iOt+WPlueahOS4jeS4gOiHtFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGNvZGU6IEVSUk9SUy5JTlZBTElEX1BBUkFNUyxcbiAgICAgICAgICBtc2c6ICdpbnZhbGlkIGFwcFNpZ24nXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIGFwcFNpZ24gJiYgKGNvbmZpZy5hcHBTaWduID0gYXBwU2lnbik7XG4gICAgICBpZiAoIWNvbmZpZy5hcHBTaWduKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgY29kZTogRVJST1JTLklOVkFMSURfUEFSQU1TLFxuICAgICAgICAgIG1zZzogJ2ludmFsaWQgYXBwU2lnbidcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAuLi5ERUZBVUxUX0lOSVRfQ09ORklHLFxuICAgICAgLi4uY29uZmlnXG4gICAgfTtcbiAgICAvLyDkv67mraN0aW1lb3V05Y+W5YC8XG4gICAgdGhpcy5fY29uZmlnLnRpbWVvdXQgPSB0aGlzLl9mb3JtYXRUaW1lb3V0KHRoaXMuX2NvbmZpZy50aW1lb3V0KTtcbiAgICAvLyDliJ3lp4vljJZjYWNoZeWSjHJlcXVlc3RcbiAgICBjb25zdCB7IGVudiwgcGVyc2lzdGVuY2UsIGRlYnVnLCB0aW1lb3V0LCBhcHBTZWNyZXQsIGFwcFNpZ24gfSA9IHRoaXMuX2NvbmZpZztcbiAgICBpbml0Q2FjaGUoeyBlbnYsIHBlcnNpc3RlbmNlLCBkZWJ1ZywgcGxhdGZvcm1JbmZvOiB0aGlzLnBsYXRmb3JtIH0pO1xuICAgIGluaXRSZXF1ZXN0KHsgZW52LCByZWdpb246IGNvbmZpZy5yZWdpb24gfHwgJycsIHRpbWVvdXQsIGFwcFNlY3JldCwgYXBwU2lnbiB9KTtcblxuICAgIGlmIChjb25maWcucmVnaW9uKSB7XG4gICAgICBzZXRSZWdpb25MZXZlbEVuZHBvaW50KGVudiwgY29uZmlnLnJlZ2lvbiB8fCAnJylcbiAgICB9XG4gICAgY29uc3QgYXBwID0gbmV3IENsb3VkYmFzZSh0aGlzLl9jb25maWcpO1xuICAgIGFwcC5yZXF1ZXN0Q2xpZW50ID0gdGhpcy5yZXF1ZXN0Q2xpZW50O1xuICAgIHJldHVybiBhcHA7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQ29uZmlnKGNvbmZpZzogSUNsb3VkYmFzZVVwZ3JhZGVkQ29uZmlnKSB7XG4gICAgY29uc3QgeyBwZXJzaXN0ZW5jZSwgZGVidWcgfSA9IGNvbmZpZztcbiAgICB0aGlzLl9jb25maWcucGVyc2lzdGVuY2UgPSBwZXJzaXN0ZW5jZTtcbiAgICB0aGlzLl9jb25maWcuZGVidWcgPSBkZWJ1ZztcbiAgICAvLyBwZXJzaXN0ZW5jZeaUueWKqOW9seWTjWNhY2hlXG4gICAgaW5pdENhY2hlKHsgZW52OiB0aGlzLl9jb25maWcuZW52LCBwZXJzaXN0ZW5jZSwgZGVidWcsIHBsYXRmb3JtSW5mbzogdGhpcy5wbGF0Zm9ybSB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlckV4dGVuc2lvbihleHQ6IElDbG91ZGJhc2VFeHRlbnNpb24pIHtcbiAgICBleHRlbnNpb25NYXBbZXh0Lm5hbWVdID0gZXh0O1xuICB9XG4gIEBjYXRjaEVycm9yc0RlY29yYXRvcih7XG4gICAgdGl0bGU6ICfosIPnlKjmianlsZXog73lipvlpLHotKUnLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICAn6K+356Gu6K6k5Lul5LiL5ZCE6aG577yaJyxcbiAgICAgICcgIDEgLSDosIPnlKggaW52b2tlRXh0ZW5zaW9uKCkg55qE6K+t5rOV5oiW5Y+C5pWw5piv5ZCm5q2j56GuJyxcbiAgICAgICcgIDIgLSDooqvosIPnlKjnmoTmianlsZXog73lipvmmK/lkKblt7Lnu4/lronoo4XlubbpgJrov4cgcmVnaXN0ZXJFeHRlbnNpb24oKSDms6jlhownLFxuICAgICAgYOWmguaenOmXrumimOS+neeEtuWtmOWcqO+8jOW7uuiuruWIsOWumOaWuemXruetlOekvuWMuuaPkOmXruaIluWvu+aJvuW4ruWKqe+8miR7Q09NTVVOSVRZX1NJVEVfVVJMfWBcbiAgICBdXG4gIH0pXG4gIHB1YmxpYyBhc3luYyBpbnZva2VFeHRlbnNpb24obmFtZTogc3RyaW5nLCBvcHRzOiBhbnkpIHtcbiAgICBjb25zdCBleHQgPSBleHRlbnNpb25NYXBbbmFtZV07XG4gICAgaWYgKCFleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvZGU6IEVSUk9SUy5JTlZBTElEX1BBUkFNUyxcbiAgICAgICAgbXNnOiBgZXh0ZW5zaW9uOiR7bmFtZX0gbXVzdCBiZSByZWdpc3RlcmVkIGJlZm9yZSBpbnZva2VgXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGV4dC5pbnZva2Uob3B0cywgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgdXNlQWRhcHRlcnMoYWRhcHRlcnM6IENsb3VkYmFzZUFkYXB0ZXIgfCBDbG91ZGJhc2VBZGFwdGVyW10pIHtcbiAgICBjb25zdCB7IGFkYXB0ZXIsIHJ1bnRpbWUgfSA9IHVzZUFkYXB0ZXJzKGFkYXB0ZXJzKSB8fCB7fTtcbiAgICBhZGFwdGVyICYmIChQbGF0Zm9ybS5hZGFwdGVyID0gYWRhcHRlciBhcyBTREtBZGFwdGVySW50ZXJmYWNlKTtcbiAgICBydW50aW1lICYmIChQbGF0Zm9ybS5ydW50aW1lID0gcnVudGltZSBhcyBzdHJpbmcpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVySG9vayhob29rOiBJQ2xvdWRiYXNlSG9vaykge1xuICAgIHJlZ2lzdGVySG9vayhDbG91ZGJhc2UsIGhvb2spXG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50OiBJQ2xvdWRiYXNlQ29tcG9uZW50KSB7XG4gICAgcmVnaXN0ZXJDb21wb25lbnQoQ2xvdWRiYXNlLCBjb21wb25lbnQpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyVmVyc2lvbih2ZXJzaW9uOiBzdHJpbmcpIHtcbiAgICBzZXRTZGtWZXJzaW9uKHZlcnNpb24pO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyU2RrTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBzZXRTZGtOYW1lKG5hbWUpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyRW5kUG9pbnQodXJsOiBzdHJpbmcsIHByb3RvY29sPzogJ2h0dHAnIHwgJ2h0dHBzJykge1xuICAgIHNldEVuZFBvaW50KHVybCwgcHJvdG9jb2wpXG4gIH1cblxuICBwcml2YXRlIF91c2VEZWZhdWx0QWRhcHRlcigpIHtcbiAgICBjb25zdCB7IGFkYXB0ZXIsIHJ1bnRpbWUgfSA9IHVzZURlZmF1bHRBZGFwdGVyKCk7XG4gICAgUGxhdGZvcm0uYWRhcHRlciA9IGFkYXB0ZXIgYXMgU0RLQWRhcHRlckludGVyZmFjZTtcbiAgICBQbGF0Zm9ybS5ydW50aW1lID0gcnVudGltZSBhcyBzdHJpbmc7XG4gIH1cblxuICBwcml2YXRlIF9mb3JtYXRUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcikge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSB0aW1lb3V0ID4gTUFYX1RJTUVPVVQ6XG4gICAgICAgIHByaW50V2FybihFUlJPUlMuSU5WQUxJRF9QQVJBTVMsICd0aW1lb3V0IGlzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIHZhbHVlWzEwbWluXScpO1xuICAgICAgICByZXR1cm4gTUFYX1RJTUVPVVQ7XG4gICAgICBjYXNlIHRpbWVvdXQgPCBNSU5fVElNRU9VVDpcbiAgICAgICAgcHJpbnRXYXJuKEVSUk9SUy5JTlZBTElEX1BBUkFNUywgJ3RpbWVvdXQgaXMgbGVzcyB0aGFuIG1heGltdW0gdmFsdWVbMTAwbXNdJyk7XG4gICAgICAgIHJldHVybiBNSU5fVElNRU9VVDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aW1lb3V0O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2xvdWRiYXNlOiBJQ2xvdWRiYXNlID0gbmV3IENsb3VkYmFzZSgpO1xuY2xvdWRiYXNlLnVzZUFkYXB0ZXJzKGFkYXB0ZXJGb3JXeE1wKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xvdWRiYXNlOyJdfQ==
}, function(modId) {var map = {"./libs/component":1734234913754,"./libs/adapter":1734234913755,"./libs/cache":1734234913756,"./libs/request":1734234913757,"./constants/common":1734234913758}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913754, function(require, module, exports) {

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHook = exports.registerComponent = void 0;
var utilities_1 = require("@cloudbase/utilities");
var ERRORS = utilities_1.constants.ERRORS;
var components = {};
function registerComponent(app, component) {
    var name = component.name, namespace = component.namespace, entity = component.entity, injectEvents = component.injectEvents, _a = component.IIFE, IIFE = _a === void 0 ? false : _a;
    if (components[name] || (namespace && app[namespace])) {
        throw new Error(JSON.stringify({
            code: ERRORS.INVALID_OPERATION,
            msg: "Duplicate component " + name
        }));
    }
    if (IIFE) {
        if (!entity || typeof entity !== 'function') {
            throw new Error(JSON.stringify({
                code: ERRORS.INVALID_PARAMS,
                msg: 'IIFE component\'s entity must be a function'
            }));
        }
        entity.call(app);
    }
    components[name] = component;
    if (namespace) {
        app.prototype[namespace] = entity;
    }
    else {
        deepExtend(app.prototype, entity);
    }
    if (injectEvents) {
        var bus = injectEvents.bus, events = injectEvents.events;
        if (!bus || !events || events.length === 0) {
            return;
        }
        var originCallback_1 = app.prototype.fire || function () { };
        if (!app.prototype.events) {
            app.prototype.events = {};
        }
        var originEvents = app.prototype.events || {};
        if (originEvents[name]) {
            app.prototype.events[name].events = __spreadArrays(app.prototype.events[name].events, events);
        }
        else {
            app.prototype.events[name] = { bus: bus, events: events };
        }
        app.prototype.fire = function (eventName, data) {
            originCallback_1(eventName, data);
            for (var name_1 in this.events) {
                var _a = this.events[name_1], bus_1 = _a.bus, eventList = _a.events;
                if (eventList.includes(eventName)) {
                    bus_1.fire(eventName, data);
                    break;
                }
            }
        };
    }
}
exports.registerComponent = registerComponent;
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            target = [];
            break;
        default:
            return source;
    }
    for (var key in source) {
        if (!source.hasOwnProperty(key)) {
            continue;
        }
        target[key] = deepExtend(target[key], source[key]);
    }
    return target;
}
function registerHook(app, hook) {
    var entity = hook.entity, target = hook.target;
    if (!app.prototype.hasOwnProperty(target)) {
        throw new Error(JSON.stringify({
            code: ERRORS.INVALID_OPERATION,
            msg: "target:" + target + " is not exist"
        }));
    }
    var originMethod = app.prototype[target];
    if (typeof originMethod !== 'function') {
        throw new Error(JSON.stringify({
            code: ERRORS.INVALID_OPERATION,
            msg: "target:" + target + " is not a function which is the only type supports hook"
        }));
    }
    app.prototype[target] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        entity.call.apply(entity, __spreadArrays([this], args));
        return originMethod.call.apply(originMethod, __spreadArrays([this], args));
    };
}
exports.registerHook = registerHook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYnMvY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxrREFBaUQ7QUFFekMsSUFBQSxNQUFNLEdBQUsscUJBQVMsT0FBZCxDQUFlO0FBRTdCLElBQU0sVUFBVSxHQUEyQixFQUFFLENBQUM7QUFFOUMsU0FBZ0IsaUJBQWlCLENBQUMsR0FBTyxFQUFDLFNBQTZCO0lBQzdELElBQUEsSUFBSSxHQUFrRCxTQUFTLEtBQTNELEVBQUUsU0FBUyxHQUF1QyxTQUFTLFVBQWhELEVBQUUsTUFBTSxHQUErQixTQUFTLE9BQXhDLEVBQUUsWUFBWSxHQUFpQixTQUFTLGFBQTFCLEVBQUUsS0FBZSxTQUFTLEtBQWQsRUFBVixJQUFJLG1CQUFDLEtBQUssS0FBQSxDQUFlO0lBRXhFLElBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFFLENBQUMsU0FBUyxJQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDO1FBQy9DLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM3QixJQUFJLEVBQUUsTUFBTSxDQUFDLGlCQUFpQjtZQUM5QixHQUFHLEVBQUUseUJBQXVCLElBQU07U0FDbkMsQ0FBQyxDQUFDLENBQUM7S0FDTDtJQUVELElBQUcsSUFBSSxFQUFDO1FBQ04sSUFBRyxDQUFDLE1BQU0sSUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUM7WUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUM3QixJQUFJLEVBQUUsTUFBTSxDQUFDLGNBQWM7Z0JBQzNCLEdBQUcsRUFBRSw2Q0FBNkM7YUFDbkQsQ0FBQyxDQUFDLENBQUM7U0FDTDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEI7SUFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLEdB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QUFHLENBQUMsQ0FBQyxDQUFDO0tBQ25EO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQWdCLFlBQVksQ0FBQyxHQUFPLEVBQUMsSUFBbUI7SUFDOUMsSUFBQSxNQUFNLEdBQWEsSUFBSSxPQUFqQixFQUFFLE1BQU0sR0FBSyxJQUFJLE9BQVQsQ0FBVTtJQUNoQyxJQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUM7UUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzdCLElBQUksRUFBRSxNQUFNLENBQUMsaUJBQWlCO1lBQzlCLEdBQUcsRUFBRSxZQUFVLE1BQU0sa0JBQWU7U0FDckMsQ0FBQyxDQUFDLENBQUM7S0FDTDtJQUNELElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsSUFBRyxPQUFPLFlBQVksS0FBSyxVQUFVLEVBQUM7UUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzdCLElBQUksRUFBRSxNQUFNLENBQUMsaUJBQWlCO1lBQzlCLEdBQUcsRUFBRSxZQUFVLE1BQU0sNERBQXlEO1NBQy9FLENBQUMsQ0FBQyxDQUFDO0tBQ0w7SUFDRCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHO1FBQVMsY0FBVzthQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7WUFBWCx5QkFBVzs7UUFDMUMsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLGtCQUFNLElBQUksR0FBSSxJQUFJLEdBQUU7UUFDMUIsT0FBTyxZQUFZLENBQUMsSUFBSSxPQUFqQixZQUFZLGtCQUFNLElBQUksR0FBSSxJQUFJLEdBQUU7SUFDekMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQW5CRCxvQ0FtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLViB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgSUNsb3VkYmFzZUNvbXBvbmVudCwgSUNsb3VkYmFzZUhvb2sgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICdAY2xvdWRiYXNlL3V0aWxpdGllcyc7XG5cbmNvbnN0IHsgRVJST1JTIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IGNvbXBvbmVudHM6S1Y8SUNsb3VkYmFzZUNvbXBvbmVudD4gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50KGFwcDphbnksY29tcG9uZW50OklDbG91ZGJhc2VDb21wb25lbnQpe1xuICBjb25zdCB7IG5hbWUsIG5hbWVzcGFjZSwgZW50aXR5LCBpbmplY3RFdmVudHMsIElJRkU9ZmFsc2UgfSA9IGNvbXBvbmVudDtcbiAgLy8g5LiN5YWB6K646YeN5aSN5rOo5YaM5oiW5ZG95ZCN56m66Ze06YeN5ZCNXG4gIGlmKGNvbXBvbmVudHNbbmFtZV18fChuYW1lc3BhY2UmJmFwcFtuYW1lc3BhY2VdKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGNvZGU6IEVSUk9SUy5JTlZBTElEX09QRVJBVElPTixcbiAgICAgIG1zZzogYER1cGxpY2F0ZSBjb21wb25lbnQgJHtuYW1lfWBcbiAgICB9KSk7XG4gIH1cbiAgLy8gSUlGReexu+Wei+eahOe7hOS7tuS7pWFwcOS4unNjb3Bl5omn6KGMZW50aXR55Ye95pWw77yM5LiN5oyC6L295YiwYXBwLnByb3RvdHlwZeS4ilxuICBpZihJSUZFKXtcbiAgICBpZighZW50aXR5fHx0eXBlb2YgZW50aXR5ICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvZGU6IEVSUk9SUy5JTlZBTElEX1BBUkFNUyxcbiAgICAgICAgbXNnOiAnSUlGRSBjb21wb25lbnRcXCdzIGVudGl0eSBtdXN0IGJlIGEgZnVuY3Rpb24nXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGVudGl0eS5jYWxsKGFwcCk7XG4gIH1cblxuICBjb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXG4gIGlmKG5hbWVzcGFjZSl7XG4gICAgKGFwcCBhcyBhbnkpLnByb3RvdHlwZVtuYW1lc3BhY2VdID0gZW50aXR5O1xuICB9ZWxzZXtcbiAgICBkZWVwRXh0ZW5kKChhcHAgYXMgYW55KS5wcm90b3R5cGUsZW50aXR5KTtcbiAgfVxuICBpZihpbmplY3RFdmVudHMpe1xuICAgIGNvbnN0IHsgYnVzLCBldmVudHMgfSA9IGluamVjdEV2ZW50cztcbiAgICBpZighYnVzfHwhZXZlbnRzfHxldmVudHMubGVuZ3RoPT09MCl7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgb3JpZ2luQ2FsbGJhY2sgPSAoYXBwIGFzIGFueSkucHJvdG90eXBlLmZpcmUgfHwgZnVuY3Rpb24oKXt9O1xuICAgIGlmKCEoYXBwIGFzIGFueSkucHJvdG90eXBlLmV2ZW50cyl7XG4gICAgICAoYXBwIGFzIGFueSkucHJvdG90eXBlLmV2ZW50cyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBvcmlnaW5FdmVudHM6S1Y8YW55PiA9IChhcHAgYXMgYW55KS5wcm90b3R5cGUuZXZlbnRzIHx8IHt9O1xuICAgIGlmKG9yaWdpbkV2ZW50c1tuYW1lXSl7XG4gICAgICAoYXBwIGFzIGFueSkucHJvdG90eXBlLmV2ZW50c1tuYW1lXS5ldmVudHMgPSBbLi4uKGFwcCBhcyBhbnkpLnByb3RvdHlwZS5ldmVudHNbbmFtZV0uZXZlbnRzLC4uLmV2ZW50c107XG4gICAgfWVsc2V7XG4gICAgICAoYXBwIGFzIGFueSkucHJvdG90eXBlLmV2ZW50c1tuYW1lXSA9IHtidXMsZXZlbnRzfTtcbiAgICB9XG4gICAgKGFwcCBhcyBhbnkpLnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oZXZlbnROYW1lOnN0cmluZyxkYXRhPzphbnkpe1xuICAgICAgb3JpZ2luQ2FsbGJhY2soZXZlbnROYW1lLGRhdGEpO1xuICAgICAgZm9yKGNvbnN0IG5hbWUgaW4gdGhpcy5ldmVudHMpe1xuICAgICAgICBjb25zdCB7IGJ1cywgZXZlbnRzOmV2ZW50TGlzdCB9ID0gdGhpcy5ldmVudHNbbmFtZV07XG4gICAgICAgIGlmKGV2ZW50TGlzdC5pbmNsdWRlcyhldmVudE5hbWUpKXtcbiAgICAgICAgICBidXMuZmlyZShldmVudE5hbWUsZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVlcEV4dGVuZCh0YXJnZXQ6YW55LHNvdXJjZTphbnkpOktWPGFueT57XG4gIGlmICghKHNvdXJjZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgc3dpdGNoIChzb3VyY2UuY29uc3RydWN0b3IpIHtcbiAgICBjYXNlIERhdGU6XG4gICAgICBjb25zdCBkYXRlVmFsdWUgPSBzb3VyY2UgYXMgRGF0ZTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlVmFsdWUuZ2V0VGltZSgpKTtcbiAgICBjYXNlIE9iamVjdDpcbiAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YXJnZXQgPSB7fTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQXJyYXk6XG4gICAgICB0YXJnZXQgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc291cmNlO1xuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgIGlmICghc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB0YXJnZXRba2V5XSA9IGRlZXBFeHRlbmQodGFyZ2V0W2tleV0sc291cmNlW2tleV0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVySG9vayhhcHA6YW55LGhvb2s6SUNsb3VkYmFzZUhvb2spe1xuICBjb25zdCB7IGVudGl0eSwgdGFyZ2V0IH0gPSBob29rO1xuICBpZighYXBwLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSh0YXJnZXQpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgY29kZTogRVJST1JTLklOVkFMSURfT1BFUkFUSU9OLFxuICAgICAgbXNnOiBgdGFyZ2V0OiR7dGFyZ2V0fSBpcyBub3QgZXhpc3RgXG4gICAgfSkpO1xuICB9XG4gIGNvbnN0IG9yaWdpbk1ldGhvZCA9IGFwcC5wcm90b3R5cGVbdGFyZ2V0XTtcbiAgaWYodHlwZW9mIG9yaWdpbk1ldGhvZCAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGNvZGU6IEVSUk9SUy5JTlZBTElEX09QRVJBVElPTixcbiAgICAgIG1zZzogYHRhcmdldDoke3RhcmdldH0gaXMgbm90IGEgZnVuY3Rpb24gd2hpY2ggaXMgdGhlIG9ubHkgdHlwZSBzdXBwb3J0cyBob29rYFxuICAgIH0pKTtcbiAgfVxuICBhcHAucHJvdG90eXBlW3RhcmdldF0gPSBmdW5jdGlvbiguLi5hcmdzOmFueSl7XG4gICAgZW50aXR5LmNhbGwodGhpcywuLi5hcmdzKTtcbiAgICByZXR1cm4gb3JpZ2luTWV0aG9kLmNhbGwodGhpcywuLi5hcmdzKTtcbiAgfVxufSJdfQ==
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913755, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = void 0;
exports.Platform = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWJzL2FkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRWEsUUFBQSxRQUFRLEdBQTBCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDbG91ZGJhc2VQbGF0Zm9ybUluZm8gfSBmcm9tIFwiQGNsb3VkYmFzZS90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgUGxhdGZvcm06SUNsb3VkYmFzZVBsYXRmb3JtSW5mbyA9IHt9OyJdfQ==
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913756, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalCache = exports.getCacheByEnvId = exports.initCache = void 0;
var utilities_1 = require("@cloudbase/utilities");
var KEY_ACCESS_TOKEN = 'access_token';
var KEY_ACCESS_TOKEN_EXPIRE = 'access_token_expire';
var KEY_REFRESH_TOKEN = 'refresh_token';
var KEY_ANONYMOUS_UUID = 'anonymous_uuid';
var KEY_LOGIN_TYPE = 'login_type';
var USER_INFO_KEY = 'user_info';
var CloudbaseCache = utilities_1.cache.CloudbaseCache;
var cacheMap = {};
var localCacheMap = {};
function initCache(config) {
    var env = config.env, persistence = config.persistence, platformInfo = config.platformInfo;
    var accessTokenKey = KEY_ACCESS_TOKEN + "_" + env;
    var accessTokenExpireKey = KEY_ACCESS_TOKEN_EXPIRE + "_" + env;
    var refreshTokenKey = KEY_REFRESH_TOKEN + "_" + env;
    var anonymousUuidKey = KEY_ANONYMOUS_UUID + "_" + env;
    var loginTypeKey = KEY_LOGIN_TYPE + "_" + env;
    var userInfoKey = USER_INFO_KEY + "_" + env;
    var keys = {
        accessTokenKey: accessTokenKey,
        accessTokenExpireKey: accessTokenExpireKey,
        refreshTokenKey: refreshTokenKey,
        anonymousUuidKey: anonymousUuidKey,
        loginTypeKey: loginTypeKey,
        userInfoKey: userInfoKey
    };
    cacheMap[env] ? cacheMap[env].updatePersistence(persistence) : (cacheMap[env] = new CloudbaseCache(__assign(__assign({}, config), { keys: keys,
        platformInfo: platformInfo, alwaysLocalKeys: ['anonymousUuidKey'] })));
    localCacheMap[env] = localCacheMap[env] || new CloudbaseCache(__assign(__assign({}, config), { keys: keys,
        platformInfo: platformInfo, persistence: 'local' }));
}
exports.initCache = initCache;
function getCacheByEnvId(env) {
    return cacheMap[env];
}
exports.getCacheByEnvId = getCacheByEnvId;
function getLocalCache(env) {
    return localCacheMap[env];
}
exports.getLocalCache = getLocalCache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicy9jYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUE2QztBQUc3QyxJQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQztBQUN4QyxJQUFNLHVCQUF1QixHQUFHLHFCQUFxQixDQUFDO0FBQ3RELElBQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDO0FBQzFDLElBQU0sa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUM7QUFDNUMsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0FBQ3BDLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUUxQixJQUFBLGNBQWMsR0FBSyxpQkFBSyxlQUFWLENBQVc7QUFFakMsSUFBTSxRQUFRLEdBQXdCLEVBQUUsQ0FBQztBQUV6QyxJQUFNLGFBQWEsR0FBd0IsRUFBRSxDQUFDO0FBRTlDLFNBQWdCLFNBQVMsQ0FBQyxNQUFpQztJQUNqRCxJQUFBLEdBQUcsR0FBOEIsTUFBTSxJQUFwQyxFQUFDLFdBQVcsR0FBa0IsTUFBTSxZQUF4QixFQUFDLFlBQVksR0FBSyxNQUFNLGFBQVgsQ0FBWTtJQUVoRCxJQUFNLGNBQWMsR0FBWSxnQkFBZ0IsU0FBSSxHQUFLLENBQUM7SUFDMUQsSUFBTSxvQkFBb0IsR0FBTSx1QkFBdUIsU0FBSSxHQUFLLENBQUM7SUFDakUsSUFBTSxlQUFlLEdBQVcsaUJBQWlCLFNBQUksR0FBSyxDQUFDO0lBQzNELElBQU0sZ0JBQWdCLEdBQVUsa0JBQWtCLFNBQUksR0FBSyxDQUFDO0lBQzVELElBQU0sWUFBWSxHQUFjLGNBQWMsU0FBSSxHQUFLLENBQUM7SUFDeEQsSUFBTSxXQUFXLEdBQWUsYUFBYSxTQUFJLEdBQUssQ0FBQztJQUV2RCxJQUFNLElBQUksR0FBRztRQUNYLGNBQWMsZ0JBQUE7UUFDZCxvQkFBb0Isc0JBQUE7UUFDcEIsZUFBZSxpQkFBQTtRQUNmLGdCQUFnQixrQkFBQTtRQUNoQixZQUFZLGNBQUE7UUFDWixXQUFXLGFBQUE7S0FDWixDQUFDO0lBRUYsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksY0FBYyx1QkFDekYsTUFBTSxLQUNULElBQUksTUFBQTtRQUNKLFlBQVksY0FBQSxFQUNaLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQ3JDLENBQUMsQ0FBQztJQUNKLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxjQUFjLHVCQUN4RCxNQUFNLEtBQ1QsSUFBSSxNQUFBO1FBQ0osWUFBWSxjQUFBLEVBQ1osV0FBVyxFQUFFLE9BQU8sSUFDcEIsQ0FBQztBQUNMLENBQUM7QUEvQkQsOEJBK0JDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEdBQVc7SUFDekMsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUZELDBDQUVDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLEdBQVc7SUFDdkMsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUZELHNDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS1YgfSBmcm9tIFwiQGNsb3VkYmFzZS90eXBlc1wiO1xuaW1wb3J0IHsgY2FjaGUgfSBmcm9tIFwiQGNsb3VkYmFzZS91dGlsaXRpZXNcIjtcbmltcG9ydCB7IElDbG91ZGJhc2VDYWNoZSwgSUNhY2hlQ29uZmlnIH0gZnJvbSBcIkBjbG91ZGJhc2UvdHlwZXMvY2FjaGVcIjtcblxuY29uc3QgS0VZX0FDQ0VTU19UT0tFTiA9ICdhY2Nlc3NfdG9rZW4nO1xuY29uc3QgS0VZX0FDQ0VTU19UT0tFTl9FWFBJUkUgPSAnYWNjZXNzX3Rva2VuX2V4cGlyZSc7XG5jb25zdCBLRVlfUkVGUkVTSF9UT0tFTiA9ICdyZWZyZXNoX3Rva2VuJztcbmNvbnN0IEtFWV9BTk9OWU1PVVNfVVVJRCA9ICdhbm9ueW1vdXNfdXVpZCc7XG5jb25zdCBLRVlfTE9HSU5fVFlQRSA9ICdsb2dpbl90eXBlJztcbmNvbnN0IFVTRVJfSU5GT19LRVkgPSAndXNlcl9pbmZvJztcblxuY29uc3QgeyBDbG91ZGJhc2VDYWNoZSB9ID0gY2FjaGU7XG5cbmNvbnN0IGNhY2hlTWFwOiBLVjxJQ2xvdWRiYXNlQ2FjaGU+ID0ge307XG4vLyDmnKzlnLDlrZjlgqhcbmNvbnN0IGxvY2FsQ2FjaGVNYXA6IEtWPElDbG91ZGJhc2VDYWNoZT4gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDYWNoZShjb25maWc6IElDYWNoZUNvbmZpZyZ7ZW52OnN0cmluZ30pIHtcbiAgY29uc3QgeyBlbnYscGVyc2lzdGVuY2UscGxhdGZvcm1JbmZvIH0gPSBjb25maWc7XG5cbiAgY29uc3QgYWNjZXNzVG9rZW5LZXkgICAgICAgPSBgJHtLRVlfQUNDRVNTX1RPS0VOfV8ke2Vudn1gO1xuICBjb25zdCBhY2Nlc3NUb2tlbkV4cGlyZUtleSA9IGAke0tFWV9BQ0NFU1NfVE9LRU5fRVhQSVJFfV8ke2Vudn1gO1xuICBjb25zdCByZWZyZXNoVG9rZW5LZXkgICAgICA9IGAke0tFWV9SRUZSRVNIX1RPS0VOfV8ke2Vudn1gO1xuICBjb25zdCBhbm9ueW1vdXNVdWlkS2V5ICAgICA9IGAke0tFWV9BTk9OWU1PVVNfVVVJRH1fJHtlbnZ9YDtcbiAgY29uc3QgbG9naW5UeXBlS2V5ICAgICAgICAgPSBgJHtLRVlfTE9HSU5fVFlQRX1fJHtlbnZ9YDtcbiAgY29uc3QgdXNlckluZm9LZXkgICAgICAgICAgPSBgJHtVU0VSX0lORk9fS0VZfV8ke2Vudn1gO1xuXG4gIGNvbnN0IGtleXMgPSB7XG4gICAgYWNjZXNzVG9rZW5LZXksXG4gICAgYWNjZXNzVG9rZW5FeHBpcmVLZXksXG4gICAgcmVmcmVzaFRva2VuS2V5LFxuICAgIGFub255bW91c1V1aWRLZXksXG4gICAgbG9naW5UeXBlS2V5LFxuICAgIHVzZXJJbmZvS2V5XG4gIH07XG4gIC8vIOiLpeaMh+WummVuduW3suWtmOWcqGNhY2hl5YiZ5bCd6K+V5pu05pawcGVyc2lzdGVuY2VcbiAgY2FjaGVNYXBbZW52XT9jYWNoZU1hcFtlbnZdLnVwZGF0ZVBlcnNpc3RlbmNlKHBlcnNpc3RlbmNlKTooY2FjaGVNYXBbZW52XSA9IG5ldyBDbG91ZGJhc2VDYWNoZSh7XG4gICAgLi4uY29uZmlnLFxuICAgIGtleXMsXG4gICAgcGxhdGZvcm1JbmZvLFxuICAgIGFsd2F5c0xvY2FsS2V5czogWydhbm9ueW1vdXNVdWlkS2V5J11cbiAgfSkpO1xuICBsb2NhbENhY2hlTWFwW2Vudl0gPSBsb2NhbENhY2hlTWFwW2Vudl0gfHwgbmV3IENsb3VkYmFzZUNhY2hlKHtcbiAgICAuLi5jb25maWcsXG4gICAga2V5cyxcbiAgICBwbGF0Zm9ybUluZm8sXG4gICAgcGVyc2lzdGVuY2U6ICdsb2NhbCdcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZUJ5RW52SWQoZW52OiBzdHJpbmcpOiBJQ2xvdWRiYXNlQ2FjaGUge1xuICByZXR1cm4gY2FjaGVNYXBbZW52XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsQ2FjaGUoZW52OiBzdHJpbmcpOiBJQ2xvdWRiYXNlQ2FjaGUge1xuICByZXR1cm4gbG9jYWxDYWNoZU1hcFtlbnZdO1xufVxuIl19
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913757, function(require, module, exports) {

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
exports.getRequestByEnvId = exports.initRequest = exports.CloudbaseRequest = void 0;
var common_1 = require("../constants/common");
var utilities_1 = require("@cloudbase/utilities");
var __1 = require("..");
var cache_1 = require("./cache");
var events_1 = require("../constants/events");
var adapter_1 = require("./adapter");
var ERRORS = utilities_1.constants.ERRORS;
var genSeqId = utilities_1.utils.genSeqId, isFormData = utilities_1.utils.isFormData, formatUrl = utilities_1.utils.formatUrl, createSign = utilities_1.utils.createSign;
var RUNTIME = utilities_1.adapters.RUNTIME;
var ACTIONS_WITHOUT_ACCESSTOKEN = [
    'auth.getJwt',
    'auth.logout',
    'auth.signInWithTicket',
    'auth.signInAnonymously',
    'auth.signIn',
    'auth.fetchAccessTokenWithRefreshToken',
    'auth.signUpWithEmailAndPassword',
    'auth.activateEndUserMail',
    'auth.sendPasswordResetEmail',
    'auth.resetPasswordWithToken',
    'auth.isUsernameRegistered'
];
function bindHooks(instance, name, hooks) {
    var originMethod = instance[name];
    instance[name] = function (options) {
        var data = {};
        var headers = {};
        hooks.forEach(function (hook) {
            var _a = hook.call(instance, options), appendedData = _a.data, appendedHeaders = _a.headers;
            Object.assign(data, appendedData);
            Object.assign(headers, appendedHeaders);
        });
        var originData = options.data;
        originData && (function () {
            if (isFormData(originData)) {
                for (var key in data) {
                    originData.append(key, data[key]);
                }
                return;
            }
            options.data = __assign(__assign({}, originData), data);
        })();
        options.headers = __assign(__assign({}, (options.headers || {})), headers);
        return originMethod.call(instance, options);
    };
}
function beforeEach() {
    var seqId = genSeqId();
    return {
        data: {
            seqId: seqId
        },
        headers: {
            'X-SDK-Version': "@cloudbase/js-sdk/" + common_1.getSdkVersion(),
            'x-seqid': seqId
        }
    };
}
var CloudbaseRequest = (function () {
    function CloudbaseRequest(config) {
        this._throwWhenRequestFail = false;
        this.config = config;
        this._reqClass = new adapter_1.Platform.adapter.reqClass({
            timeout: this.config.timeout,
            timeoutMsg: "[@cloudbase/js-sdk] \u8BF7\u6C42\u5728" + this.config.timeout / 1000 + "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD",
            restrictedMethods: ['post']
        });
        this._throwWhenRequestFail = config.throw || false;
        this._cache = cache_1.getCacheByEnvId(this.config.env);
        this._localCache = cache_1.getLocalCache(this.config.env);
        bindHooks(this._reqClass, 'post', [beforeEach]);
        bindHooks(this._reqClass, 'upload', [beforeEach]);
        bindHooks(this._reqClass, 'download', [beforeEach]);
    }
    CloudbaseRequest.prototype.post = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._reqClass.post(options)];
                    case 1:
                        res = _a.sent();
                        return [2, res];
                }
            });
        });
    };
    CloudbaseRequest.prototype.upload = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._reqClass.upload(options)];
                    case 1:
                        res = _a.sent();
                        return [2, res];
                }
            });
        });
    };
    CloudbaseRequest.prototype.download = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._reqClass.download(options)];
                    case 1:
                        res = _a.sent();
                        return [2, res];
                }
            });
        });
    };
    CloudbaseRequest.prototype.refreshAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, err, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._refreshAccessTokenPromise) {
                            this._refreshAccessTokenPromise = this._refreshAccessToken();
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this._refreshAccessTokenPromise];
                    case 2:
                        result = _a.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        err = e_1;
                        return [3, 4];
                    case 4:
                        this._refreshAccessTokenPromise = null;
                        this._shouldRefreshAccessTokenHook = null;
                        if (err) {
                            throw err;
                        }
                        return [2, result];
                }
            });
        });
    };
    CloudbaseRequest.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, accessTokenKey, accessTokenExpireKey, refreshTokenKey, refreshToken, accessToken, accessTokenExpire, _b, shouldRefreshAccessToken, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this._cache.keys, accessTokenKey = _a.accessTokenKey, accessTokenExpireKey = _a.accessTokenExpireKey, refreshTokenKey = _a.refreshTokenKey;
                        return [4, this._cache.getStoreAsync(refreshTokenKey)];
                    case 1:
                        refreshToken = _d.sent();
                        if (!refreshToken) {
                            throw new Error(JSON.stringify({
                                code: ERRORS.OPERATION_FAIL,
                                msg: 'refresh token is not exist, your local data might be messed up, please retry after clear localStorage or sessionStorage'
                            }));
                        }
                        return [4, this._cache.getStoreAsync(accessTokenKey)];
                    case 2:
                        accessToken = _d.sent();
                        _b = Number;
                        return [4, this._cache.getStoreAsync(accessTokenExpireKey)];
                    case 3:
                        accessTokenExpire = _b.apply(void 0, [_d.sent()]);
                        shouldRefreshAccessToken = true;
                        _c = this._shouldRefreshAccessTokenHook;
                        if (!_c) return [3, 5];
                        return [4, this._shouldRefreshAccessTokenHook(accessToken, accessTokenExpire)];
                    case 4:
                        _c = !(_d.sent());
                        _d.label = 5;
                    case 5:
                        if (_c) {
                            shouldRefreshAccessToken = false;
                        }
                        if (!((!accessToken || !accessTokenExpire || accessTokenExpire < Date.now()) && shouldRefreshAccessToken)) return [3, 7];
                        return [4, this.refreshAccessToken()];
                    case 6: return [2, _d.sent()];
                    case 7: return [2, {
                            accessToken: accessToken,
                            accessTokenExpire: accessTokenExpire
                        }];
                }
            });
        });
    };
    CloudbaseRequest.prototype.request = function (action, params, options) {
        return __awaiter(this, void 0, void 0, function () {
            var tcbTraceKey, contentType, tmpObj, refreshTokenKey, refreshToken, _a, payload, key, key, opts, traceHeader, _b, appSign, appSecret, timestamp, appAccessKey, appAccessKeyId, sign, parse, inQuery, search, formatQuery, _c, BASE_URL, PROTOCOL, newUrl, res, resTraceHeader;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        tcbTraceKey = "x-tcb-trace_" + this.config.env;
                        contentType = 'application/x-www-form-urlencoded';
                        tmpObj = __assign({ action: action, dataVersion: common_1.DATA_VERSION, env: this.config.env }, params);
                        if (!(ACTIONS_WITHOUT_ACCESSTOKEN.indexOf(action) === -1)) return [3, 3];
                        refreshTokenKey = this._cache.keys.refreshTokenKey;
                        return [4, this._cache.getStoreAsync(refreshTokenKey)];
                    case 1:
                        refreshToken = _d.sent();
                        if (!refreshToken) return [3, 3];
                        _a = tmpObj;
                        return [4, this.getAccessToken()];
                    case 2:
                        _a.access_token = (_d.sent()).accessToken;
                        _d.label = 3;
                    case 3:
                        if (action === 'storage.uploadFile') {
                            payload = new FormData();
                            for (key in payload) {
                                if (payload.hasOwnProperty(key) && payload[key] !== undefined) {
                                    payload.append(key, tmpObj[key]);
                                }
                            }
                            contentType = 'multipart/form-data';
                        }
                        else {
                            contentType = 'application/json;charset=UTF-8';
                            payload = {};
                            for (key in tmpObj) {
                                if (tmpObj[key] !== undefined) {
                                    payload[key] = tmpObj[key];
                                }
                            }
                        }
                        opts = {
                            headers: {
                                'content-type': contentType
                            }
                        };
                        if (options === null || options === void 0 ? void 0 : options['onUploadProgress']) {
                            opts.onUploadProgress = options['onUploadProgress'];
                        }
                        if (this.config.region) {
                            opts.headers['X-TCB-Region'] = this.config.region;
                        }
                        traceHeader = this._localCache.getStore(tcbTraceKey);
                        if (traceHeader) {
                            opts.headers['X-TCB-Trace'] = traceHeader;
                        }
                        if (adapter_1.Platform.runtime !== RUNTIME.WEB) {
                            _b = this.config, appSign = _b.appSign, appSecret = _b.appSecret;
                            timestamp = Date.now();
                            appAccessKey = appSecret.appAccessKey, appAccessKeyId = appSecret.appAccessKeyId;
                            sign = createSign({
                                data: {},
                                timestamp: timestamp,
                                appAccessKeyId: appAccessKeyId,
                                appSign: appSign
                            }, appAccessKey);
                            opts.headers['X-TCB-App-Source'] = "timestamp=" + timestamp + ";appAccessKeyId=" + appAccessKeyId + ";appSign=" + appSign + ";sign=" + sign;
                        }
                        parse = params.parse, inQuery = params.inQuery, search = params.search;
                        formatQuery = {
                            env: this.config.env
                        };
                        parse && (formatQuery.parse = true);
                        inQuery && (formatQuery = __assign(__assign({}, inQuery), formatQuery));
                        _c = common_1.getEndPoint(), BASE_URL = _c.BASE_URL, PROTOCOL = _c.PROTOCOL;
                        newUrl = formatUrl(PROTOCOL, BASE_URL, formatQuery);
                        if (search) {
                            newUrl += search;
                        }
                        return [4, this.post(__assign({ url: newUrl, data: payload }, opts))];
                    case 4:
                        res = _d.sent();
                        resTraceHeader = res.header && res.header['x-tcb-trace'];
                        if (resTraceHeader) {
                            this._localCache.setStore(tcbTraceKey, resTraceHeader);
                        }
                        if ((Number(res.status) !== 200 && Number(res.statusCode) !== 200) || !res.data) {
                            throw new Error('network request error');
                        }
                        return [2, res];
                }
            });
        });
    };
    CloudbaseRequest.prototype.send = function (action, data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.request(action, data, { onUploadProgress: data.onUploadProgress })];
                    case 1:
                        response = _a.sent();
                        if (!(response.data.code === 'ACCESS_TOKEN_EXPIRED' && ACTIONS_WITHOUT_ACCESSTOKEN.indexOf(action) === -1)) return [3, 4];
                        return [4, this.refreshAccessToken()];
                    case 2:
                        _a.sent();
                        return [4, this.request(action, data, { onUploadProgress: data.onUploadProgress })];
                    case 3:
                        response = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (response.data.code && this._throwWhenRequestFail) {
                            throw new Error(JSON.stringify({
                                code: ERRORS.OPERATION_FAIL,
                                msg: "[" + response.data.code + "] " + response.data.message
                            }));
                        }
                        return [2, response.data];
                }
            });
        });
    };
    CloudbaseRequest.prototype._refreshAccessToken = function (retryNum) {
        if (retryNum === void 0) { retryNum = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, accessTokenKey, accessTokenExpireKey, refreshTokenKey, loginTypeKey, anonymousUuidKey, refreshToken, params, response, code, isAnonymous, anonymous_uuid, refresh_token, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._cache.keys, accessTokenKey = _a.accessTokenKey, accessTokenExpireKey = _a.accessTokenExpireKey, refreshTokenKey = _a.refreshTokenKey, loginTypeKey = _a.loginTypeKey, anonymousUuidKey = _a.anonymousUuidKey;
                        return [4, this._cache.removeStoreAsync(accessTokenKey)];
                    case 1:
                        _b.sent();
                        return [4, this._cache.removeStoreAsync(accessTokenExpireKey)];
                    case 2:
                        _b.sent();
                        return [4, this._cache.getStoreAsync(refreshTokenKey)];
                    case 3:
                        refreshToken = _b.sent();
                        if (!refreshToken) {
                            throw new Error(JSON.stringify({
                                code: ERRORS.INVALID_OPERATION,
                                msg: 'not login'
                            }));
                        }
                        params = {
                            refresh_token: refreshToken
                        };
                        return [4, this.request('auth.fetchAccessTokenWithRefreshToken', params)];
                    case 4:
                        response = _b.sent();
                        if (!response.data.code) return [3, 12];
                        code = response.data.code;
                        if (!(code === 'SIGN_PARAM_INVALID' || code === 'REFRESH_TOKEN_EXPIRED' || code === 'INVALID_REFRESH_TOKEN')) return [3, 11];
                        return [4, this._cache.getStoreAsync(loginTypeKey)];
                    case 5:
                        isAnonymous = (_b.sent()) === common_1.LOGINTYPE.ANONYMOUS;
                        if (!(isAnonymous && code === 'INVALID_REFRESH_TOKEN')) return [3, 9];
                        return [4, this._cache.getStoreAsync(anonymousUuidKey)];
                    case 6:
                        anonymous_uuid = _b.sent();
                        return [4, this._cache.getStoreAsync(refreshTokenKey)];
                    case 7:
                        refresh_token = _b.sent();
                        return [4, this.send('auth.signInAnonymously', {
                                anonymous_uuid: anonymous_uuid,
                                refresh_token: refresh_token
                            })];
                    case 8:
                        res = _b.sent();
                        this._setRefreshToken(res.refresh_token);
                        if (retryNum >= 1) {
                            return [2, this._refreshAccessToken(--retryNum)];
                        }
                        else {
                            throw new Error(JSON.stringify({
                                code: ERRORS.OPERATION_FAIL,
                                message: '重试获取 refresh token 失败'
                            }));
                        }
                        _b.label = 9;
                    case 9:
                        __1.cloudbase.fire(events_1.EVENTS.LOGIN_STATE_EXPIRED);
                        return [4, this._cache.removeStoreAsync(refreshTokenKey)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: throw new Error(JSON.stringify({
                        code: ERRORS.NETWORK_ERROR,
                        msg: "refresh access_token failed\uFF1A" + response.data.code
                    }));
                    case 12:
                        if (!response.data.access_token) return [3, 15];
                        __1.cloudbase.fire(events_1.EVENTS.ACCESS_TOKEN_REFRESHD);
                        return [4, this._cache.setStoreAsync(accessTokenKey, response.data.access_token)];
                    case 13:
                        _b.sent();
                        return [4, this._cache.setStoreAsync(accessTokenExpireKey, response.data.access_token_expire + Date.now())];
                    case 14:
                        _b.sent();
                        return [2, {
                                accessToken: response.data.access_token,
                                accessTokenExpire: response.data.access_token_expire
                            }];
                    case 15:
                        if (!response.data.refresh_token) return [3, 19];
                        return [4, this._cache.removeStoreAsync(refreshTokenKey)];
                    case 16:
                        _b.sent();
                        return [4, this._cache.setStoreAsync(refreshTokenKey, response.data.refresh_token)];
                    case 17:
                        _b.sent();
                        return [4, this._refreshAccessToken()];
                    case 18:
                        _b.sent();
                        _b.label = 19;
                    case 19: return [2];
                }
            });
        });
    };
    CloudbaseRequest.prototype._setRefreshToken = function (refreshToken) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, accessTokenKey, accessTokenExpireKey, refreshTokenKey;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._cache.keys, accessTokenKey = _a.accessTokenKey, accessTokenExpireKey = _a.accessTokenExpireKey, refreshTokenKey = _a.refreshTokenKey;
                        return [4, this._cache.removeStoreAsync(accessTokenKey)];
                    case 1:
                        _b.sent();
                        return [4, this._cache.removeStoreAsync(accessTokenExpireKey)];
                    case 2:
                        _b.sent();
                        return [4, this._cache.setStoreAsync(refreshTokenKey, refreshToken)];
                    case 3:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    return CloudbaseRequest;
}());
exports.CloudbaseRequest = CloudbaseRequest;
var requestMap = {};
function initRequest(config) {
    requestMap[config.env] = new CloudbaseRequest(__assign(__assign({}, config), { throw: true }));
}
exports.initRequest = initRequest;
function getRequestByEnvId(env) {
    return requestMap[env];
}
exports.getRequestByEnvId = getRequestByEnvId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWJzL3JlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FLNkI7QUFRN0Isa0RBQWtFO0FBSWxFLHdCQUErQjtBQUMvQixpQ0FBeUQ7QUFDekQsOENBQTZDO0FBQzdDLHFDQUFxQztBQUU3QixJQUFBLE1BQU0sR0FBSyxxQkFBUyxPQUFkLENBQWU7QUFDckIsSUFBQSxRQUFRLEdBQXdDLGlCQUFLLFNBQTdDLEVBQUUsVUFBVSxHQUE0QixpQkFBSyxXQUFqQyxFQUFFLFNBQVMsR0FBaUIsaUJBQUssVUFBdEIsRUFBRSxVQUFVLEdBQUssaUJBQUssV0FBVixDQUFXO0FBQ3RELElBQUEsT0FBTyxHQUFLLG9CQUFRLFFBQWIsQ0FBYztBQUc3QixJQUFNLDJCQUEyQixHQUFHO0lBQ2xDLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwyQkFBMkI7Q0FDNUIsQ0FBQztBQUVGLFNBQVMsU0FBUyxDQUFDLFFBQTZCLEVBQUUsSUFBWSxFQUFFLEtBQTJCO0lBQ3pGLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxPQUF3QjtRQUNqRCxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ1YsSUFBQSxLQUFtRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBdkUs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QUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUE7O3dCQUFsRCxTQUFrRCxDQUFDO3dCQUNuRCxXQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsRUFBQTs7d0JBQXhELFNBQXdELENBQUM7d0JBQ3pELFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxFQUFBOzt3QkFBOUQsU0FBOEQsQ0FBQzs7Ozs7S0FDaEU7SUFDSCx1QkFBQztBQUFELENBQUMsQUFyVEQsSUFxVEM7QUFyVFksNENBQWdCO0FBdVQ3QixJQUFNLFVBQVUsR0FBeUIsRUFBRSxDQUFDO0FBRTVDLFNBQWdCLFdBQVcsQ0FBQyxNQUErQjtJQUN6RCxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksZ0JBQWdCLHVCQUN4QyxNQUFNLEtBQ1QsS0FBSyxFQUFFLElBQUksSUFDWCxDQUFDO0FBQ0wsQ0FBQztBQUxELGtDQUtDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUMsR0FBVztJQUMzQyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRkQsOENBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEQVRBX1ZFUlNJT04sXG4gIExPR0lOVFlQRSxcbiAgZ2V0U2RrVmVyc2lvbixcbiAgZ2V0RW5kUG9pbnRcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbW1vbic7XG5pbXBvcnQge1xuICBJUmVxdWVzdE9wdGlvbnMsXG4gIFNES1JlcXVlc3RJbnRlcmZhY2UsXG4gIFJlc3BvbnNlT2JqZWN0LFxuICBJVXBsb2FkUmVxdWVzdE9wdGlvbnMsXG4gIElSZXF1ZXN0Q29uZmlnXG59IGZyb20gJ0BjbG91ZGJhc2UvYWRhcHRlci1pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdXRpbHMsIGFkYXB0ZXJzLCBjb25zdGFudHMgfSBmcm9tICdAY2xvdWRiYXNlL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBLViB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgSUdldEFjY2Vzc1Rva2VuUmVzdWx0LCBJQ2xvdWRiYXNlUmVxdWVzdENvbmZpZywgSUFwcGVuZGVkUmVxdWVzdEluZm8sIElSZXF1ZXN0QmVmb3JlSG9vayB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvcmVxdWVzdCc7XG5pbXBvcnQgeyBJQ2xvdWRiYXNlQ2FjaGUgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzL2NhY2hlJztcbmltcG9ydCB7IGNsb3VkYmFzZSB9IGZyb20gJy4uJztcbmltcG9ydCB7IGdldENhY2hlQnlFbnZJZCwgZ2V0TG9jYWxDYWNoZSB9IGZyb20gJy4vY2FjaGUnO1xuaW1wb3J0IHsgRVZFTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4vYWRhcHRlcic7XG5cbmNvbnN0IHsgRVJST1JTIH0gPSBjb25zdGFudHM7XG5jb25zdCB7IGdlblNlcUlkLCBpc0Zvcm1EYXRhLCBmb3JtYXRVcmwsIGNyZWF0ZVNpZ24gfSA9IHV0aWxzO1xuY29uc3QgeyBSVU5USU1FIH0gPSBhZGFwdGVycztcblxuLy8g5LiL6Z2i5Yeg56eNIGFjdGlvbiDkuI3pnIDopoEgYWNjZXNzIHRva2VuXG5jb25zdCBBQ1RJT05TX1dJVEhPVVRfQUNDRVNTVE9LRU4gPSBbXG4gICdhdXRoLmdldEp3dCcsXG4gICdhdXRoLmxvZ291dCcsXG4gICdhdXRoLnNpZ25JbldpdGhUaWNrZXQnLFxuICAnYXV0aC5zaWduSW5Bbm9ueW1vdXNseScsXG4gICdhdXRoLnNpZ25JbicsXG4gICdhdXRoLmZldGNoQWNjZXNzVG9rZW5XaXRoUmVmcmVzaFRva2VuJyxcbiAgJ2F1dGguc2lnblVwV2l0aEVtYWlsQW5kUGFzc3dvcmQnLFxuICAnYXV0aC5hY3RpdmF0ZUVuZFVzZXJNYWlsJyxcbiAgJ2F1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCcsXG4gICdhdXRoLnJlc2V0UGFzc3dvcmRXaXRoVG9rZW4nLFxuICAnYXV0aC5pc1VzZXJuYW1lUmVnaXN0ZXJlZCdcbl07XG5cbmZ1bmN0aW9uIGJpbmRIb29rcyhpbnN0YW5jZTogU0RLUmVxdWVzdEludGVyZmFjZSwgbmFtZTogc3RyaW5nLCBob29rczogSVJlcXVlc3RCZWZvcmVIb29rW10pIHtcbiAgY29uc3Qgb3JpZ2luTWV0aG9kID0gaW5zdGFuY2VbbmFtZV07XG4gIGluc3RhbmNlW25hbWVdID0gZnVuY3Rpb24gKG9wdGlvbnM6IElSZXF1ZXN0T3B0aW9ucykge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgaG9va3MuZm9yRWFjaChob29rID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YTogYXBwZW5kZWREYXRhLCBoZWFkZXJzOiBhcHBlbmRlZEhlYWRlcnMgfSA9IGhvb2suY2FsbChpbnN0YW5jZSwgb3B0aW9ucyk7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIGFwcGVuZGVkRGF0YSk7XG4gICAgICBPYmplY3QuYXNzaWduKGhlYWRlcnMsIGFwcGVuZGVkSGVhZGVycyk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3JpZ2luRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICBvcmlnaW5EYXRhICYmICgoKSA9PiB7XG4gICAgICBpZiAoaXNGb3JtRGF0YShvcmlnaW5EYXRhKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgKG9yaWdpbkRhdGEgYXMgRm9ybURhdGEpLmFwcGVuZChrZXksIGRhdGFba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgb3B0aW9ucy5kYXRhID0ge1xuICAgICAgICAuLi5vcmlnaW5EYXRhLFxuICAgICAgICAuLi5kYXRhXG4gICAgICB9O1xuICAgIH0pKCk7XG4gICAgb3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgLi4uKG9wdGlvbnMuaGVhZGVycyB8fCB7fSksXG4gICAgICAuLi5oZWFkZXJzXG4gICAgfTtcbiAgICByZXR1cm4gKG9yaWdpbk1ldGhvZCBhcyBGdW5jdGlvbikuY2FsbChpbnN0YW5jZSwgb3B0aW9ucyk7XG4gIH07XG59XG5mdW5jdGlvbiBiZWZvcmVFYWNoKCk6IElBcHBlbmRlZFJlcXVlc3RJbmZvIHtcbiAgY29uc3Qgc2VxSWQgPSBnZW5TZXFJZCgpO1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHtcbiAgICAgIHNlcUlkXG4gICAgfSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1TREstVmVyc2lvbic6IGBAY2xvdWRiYXNlL2pzLXNkay8ke2dldFNka1ZlcnNpb24oKX1gLFxuICAgICAgJ3gtc2VxaWQnOiBzZXFJZFxuICAgIH1cbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUNsb3VkYmFzZVJlcXVlc3Qge1xuICBwb3N0OiAob3B0aW9uczogSVJlcXVlc3RPcHRpb25zKSA9PiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PjtcbiAgdXBsb2FkOiAob3B0aW9uczogSVVwbG9hZFJlcXVlc3RPcHRpb25zKSA9PiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PjtcbiAgZG93bmxvYWQ6IChvcHRpb25zOiBJUmVxdWVzdE9wdGlvbnMpID0+IFByb21pc2U8UmVzcG9uc2VPYmplY3Q+O1xuICByZWZyZXNoQWNjZXNzVG9rZW46ICgpID0+IFByb21pc2U8SUdldEFjY2Vzc1Rva2VuUmVzdWx0PjtcbiAgZ2V0QWNjZXNzVG9rZW46ICgpID0+IFByb21pc2U8SUdldEFjY2Vzc1Rva2VuUmVzdWx0PjtcbiAgcmVxdWVzdDogKGFjdGlvbjogc3RyaW5nLCBwYXJhbXM6IEtWPGFueT4sIG9wdGlvbnM/OiBLVjxhbnk+KSA9PiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PjtcbiAgc2VuZDogKGFjdGlvbjogc3RyaW5nLCBkYXRhOiBLVjxhbnk+KSA9PiBQcm9taXNlPGFueT47XG59XG5cbi8qKlxuICogQGNsYXNzIENsb3VkYmFzZVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkYmFzZVJlcXVlc3QgaW1wbGVtZW50cyBJQ2xvdWRiYXNlUmVxdWVzdCB7XG4gIGNvbmZpZzogSUNsb3VkYmFzZVJlcXVlc3RDb25maWc7XG4gIF9zaG91bGRSZWZyZXNoQWNjZXNzVG9rZW5Ib29rOiBGdW5jdGlvblxuICBfcmVmcmVzaEFjY2Vzc1Rva2VuUHJvbWlzZTogUHJvbWlzZTxJR2V0QWNjZXNzVG9rZW5SZXN1bHQ+IHwgbnVsbFxuICBfcmVxQ2xhc3M6IFNES1JlcXVlc3RJbnRlcmZhY2U7XG4gIC8vIOivt+axguWksei0peaYr+WQpuaKm+WHukVycm9yXG4gIHByaXZhdGUgX3Rocm93V2hlblJlcXVlc3RGYWlsID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhY2hlOiBJQ2xvdWRiYXNlQ2FjaGU7XG4gIC8vIOaMgeS5heWMluacrOWcsOWtmOWCqFxuICBwcml2YXRlIF9sb2NhbENhY2hlOiBJQ2xvdWRiYXNlQ2FjaGU7XG4gIC8qKlxuICAgKiDliJ3lp4vljJZcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBJQ2xvdWRiYXNlUmVxdWVzdENvbmZpZyAmIHsgdGhyb3c/OiBib29sZWFuIH0pIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB0aGlzLl9yZXFDbGFzcyA9IG5ldyBQbGF0Zm9ybS5hZGFwdGVyLnJlcUNsYXNzKDxJUmVxdWVzdENvbmZpZz57XG4gICAgICB0aW1lb3V0OiB0aGlzLmNvbmZpZy50aW1lb3V0LFxuICAgICAgdGltZW91dE1zZzogYFtAY2xvdWRiYXNlL2pzLXNka10g6K+35rGC5ZyoJHt0aGlzLmNvbmZpZy50aW1lb3V0IC8gMTAwMH1z5YaF5pyq5a6M5oiQ77yM5bey5Lit5patYCxcbiAgICAgIHJlc3RyaWN0ZWRNZXRob2RzOiBbJ3Bvc3QnXVxuICAgIH0pO1xuICAgIHRoaXMuX3Rocm93V2hlblJlcXVlc3RGYWlsID0gY29uZmlnLnRocm93IHx8IGZhbHNlO1xuICAgIHRoaXMuX2NhY2hlID0gZ2V0Q2FjaGVCeUVudklkKHRoaXMuY29uZmlnLmVudik7XG4gICAgdGhpcy5fbG9jYWxDYWNoZSA9IGdldExvY2FsQ2FjaGUodGhpcy5jb25maWcuZW52KTtcbiAgICBiaW5kSG9va3ModGhpcy5fcmVxQ2xhc3MsICdwb3N0JywgW2JlZm9yZUVhY2hdKTtcbiAgICBiaW5kSG9va3ModGhpcy5fcmVxQ2xhc3MsICd1cGxvYWQnLCBbYmVmb3JlRWFjaF0pO1xuICAgIGJpbmRIb29rcyh0aGlzLl9yZXFDbGFzcywgJ2Rvd25sb2FkJywgW2JlZm9yZUVhY2hdKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgcG9zdChvcHRpb25zOiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5fcmVxQ2xhc3MucG9zdChvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIHB1YmxpYyBhc3luYyB1cGxvYWQob3B0aW9uczogSVVwbG9hZFJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxSZXNwb25zZU9iamVjdD4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuX3JlcUNsYXNzLnVwbG9hZChvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIHB1YmxpYyBhc3luYyBkb3dubG9hZChvcHRpb25zOiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5fcmVxQ2xhc3MuZG93bmxvYWQob3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZWZyZXNoQWNjZXNzVG9rZW4oKTogUHJvbWlzZTxJR2V0QWNjZXNzVG9rZW5SZXN1bHQ+IHtcbiAgICAvLyDlj6/og73kvJrlkIzml7bosIPnlKjlpJrmrKHliLfmlrBhY2Nlc3MgdG9rZW7vvIzov5nph4zmiorlroPku6zlkIjlubbmiJDkuIDkuKpcbiAgICBpZiAoIXRoaXMuX3JlZnJlc2hBY2Nlc3NUb2tlblByb21pc2UpIHtcbiAgICAgIC8vIOayoeacieato+WcqOWIt+aWsO+8jOmCo+S5iOato+W4uOaJp+ihjOWIt+aWsOmAu+i+kVxuICAgICAgdGhpcy5fcmVmcmVzaEFjY2Vzc1Rva2VuUHJvbWlzZSA9IHRoaXMuX3JlZnJlc2hBY2Nlc3NUb2tlbigpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGVycjtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcmVmcmVzaEFjY2Vzc1Rva2VuUHJvbWlzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnIgPSBlO1xuICAgIH1cbiAgICB0aGlzLl9yZWZyZXNoQWNjZXNzVG9rZW5Qcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLl9zaG91bGRSZWZyZXNoQWNjZXNzVG9rZW5Ib29rID0gbnVsbDtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyDojrflj5ZhY2Nlc3MgdG9rZW5cbiAgcHVibGljIGFzeW5jIGdldEFjY2Vzc1Rva2VuKCk6IFByb21pc2U8SUdldEFjY2Vzc1Rva2VuUmVzdWx0PiB7XG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbktleSwgYWNjZXNzVG9rZW5FeHBpcmVLZXksIHJlZnJlc2hUb2tlbktleSB9ID0gdGhpcy5fY2FjaGUua2V5cztcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCB0aGlzLl9jYWNoZS5nZXRTdG9yZUFzeW5jKHJlZnJlc2hUb2tlbktleSk7XG4gICAgaWYgKCFyZWZyZXNoVG9rZW4pIHtcbiAgICAgIC8vIOS4jeivpeWHuueOsOeahOeKtuaAge+8muaciSBhY2Nlc3MgdG9rZW4g5Y205rKh5pyJIHJlZnJlc2ggdG9rZW5cbiAgICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvZGU6IEVSUk9SUy5PUEVSQVRJT05fRkFJTCxcbiAgICAgICAgbXNnOiAncmVmcmVzaCB0b2tlbiBpcyBub3QgZXhpc3QsIHlvdXIgbG9jYWwgZGF0YSBtaWdodCBiZSBtZXNzZWQgdXAsIHBsZWFzZSByZXRyeSBhZnRlciBjbGVhciBsb2NhbFN0b3JhZ2Ugb3Igc2Vzc2lvblN0b3JhZ2UnXG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8vIOWmguaenOayoeaciWFjY2VzcyB0b2tlbuaIluiAhei/h+acn++8jOmCo+S5iOWIt+aWsFxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgdGhpcy5fY2FjaGUuZ2V0U3RvcmVBc3luYyhhY2Nlc3NUb2tlbktleSk7XG4gICAgY29uc3QgYWNjZXNzVG9rZW5FeHBpcmUgPSBOdW1iZXIoYXdhaXQgdGhpcy5fY2FjaGUuZ2V0U3RvcmVBc3luYyhhY2Nlc3NUb2tlbkV4cGlyZUtleSkpO1xuXG4gICAgLy8g6LCD55So6ZKp5a2Q5Ye95pWwXG4gICAgbGV0IHNob3VsZFJlZnJlc2hBY2Nlc3NUb2tlbiA9IHRydWU7XG4gICAgaWYgKHRoaXMuX3Nob3VsZFJlZnJlc2hBY2Nlc3NUb2tlbkhvb2sgJiYgIShhd2FpdCB0aGlzLl9zaG91bGRSZWZyZXNoQWNjZXNzVG9rZW5Ib29rKGFjY2Vzc1Rva2VuLCBhY2Nlc3NUb2tlbkV4cGlyZSkpKSB7XG4gICAgICBzaG91bGRSZWZyZXNoQWNjZXNzVG9rZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoKCFhY2Nlc3NUb2tlbiB8fCAhYWNjZXNzVG9rZW5FeHBpcmUgfHwgYWNjZXNzVG9rZW5FeHBpcmUgPCBEYXRlLm5vdygpKSAmJiBzaG91bGRSZWZyZXNoQWNjZXNzVG9rZW4pIHtcbiAgICAgIC8vIOi/lOWbnuaWsOeahGFjY2VzcyB0b2xlblxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVmcmVzaEFjY2Vzc1Rva2VuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOi/lOWbnuacrOWcsOeahGFjY2VzcyB0b2tlblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWNjZXNzVG9rZW4sXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbiAgcHVibGljIGFzeW5jIHJlcXVlc3QoYWN0aW9uOiBzdHJpbmcsIHBhcmFtczogS1Y8YW55Piwgb3B0aW9ucz86IEtWPGFueT4pOiBQcm9taXNlPFJlc3BvbnNlT2JqZWN0PiB7XG4gICAgY29uc3QgdGNiVHJhY2VLZXkgPSBgeC10Y2ItdHJhY2VfJHt0aGlzLmNvbmZpZy5lbnZ9YDtcbiAgICBsZXQgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICAvLyBjb25zdCB3ZWJEZXZpY2VJZCA9IGF3YWl0IGdldFRjYkZpbmdlcnByaW50SWQoKTtcbiAgICBjb25zdCB0bXBPYmo6IEtWPGFueT4gPSB7XG4gICAgICBhY3Rpb24sXG4gICAgICAvLyB3ZWJEZXZpY2VJZCxcbiAgICAgIGRhdGFWZXJzaW9uOiBEQVRBX1ZFUlNJT04sXG4gICAgICBlbnY6IHRoaXMuY29uZmlnLmVudixcbiAgICAgIC4uLnBhcmFtc1xuICAgIH07XG5cblxuICAgIGlmIChBQ1RJT05TX1dJVEhPVVRfQUNDRVNTVE9LRU4uaW5kZXhPZihhY3Rpb24pID09PSAtMSkge1xuICAgICAgY29uc3QgeyByZWZyZXNoVG9rZW5LZXkgfSA9IHRoaXMuX2NhY2hlLmtleXM7XG5cbiAgICAgIC8vIOiLpeaciSByZWZyZXNoVG9rZW4g5YiZ5Lu75Yqh5pyJ55m75b2V5oCBIOWItyBhY2Nlc3NUb2tlblxuICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gYXdhaXQgdGhpcy5fY2FjaGUuZ2V0U3RvcmVBc3luYyhyZWZyZXNoVG9rZW5LZXkpO1xuICAgICAgaWYgKHJlZnJlc2hUb2tlbikge1xuICAgICAgICB0bXBPYmouYWNjZXNzX3Rva2VuID0gKGF3YWl0IHRoaXMuZ2V0QWNjZXNzVG9rZW4oKSkuYWNjZXNzVG9rZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5ou8Ym9keeWSjGNvbnRlbnQtdHlwZVxuICAgIGxldCBwYXlsb2FkO1xuICAgIGlmIChhY3Rpb24gPT09ICdzdG9yYWdlLnVwbG9hZEZpbGUnKSB7XG4gICAgICBwYXlsb2FkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gcGF5bG9hZCkge1xuICAgICAgICBpZiAocGF5bG9hZC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHBheWxvYWRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGF5bG9hZC5hcHBlbmQoa2V5LCB0bXBPYmpba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRlbnRUeXBlID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnO1xuICAgICAgcGF5bG9hZCA9IHt9O1xuICAgICAgZm9yIChsZXQga2V5IGluIHRtcE9iaikge1xuICAgICAgICBpZiAodG1wT2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBheWxvYWRba2V5XSA9IHRtcE9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBvcHRzOiBhbnkgPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiBjb250ZW50VHlwZVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKG9wdGlvbnM/Llsnb25VcGxvYWRQcm9ncmVzcyddKSB7XG4gICAgICBvcHRzLm9uVXBsb2FkUHJvZ3Jlc3MgPSBvcHRpb25zWydvblVwbG9hZFByb2dyZXNzJ107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnJlZ2lvbikge1xuICAgICAgb3B0cy5oZWFkZXJzWydYLVRDQi1SZWdpb24nXSA9IHRoaXMuY29uZmlnLnJlZ2lvbjtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFjZUhlYWRlciA9IHRoaXMuX2xvY2FsQ2FjaGUuZ2V0U3RvcmUodGNiVHJhY2VLZXkpO1xuICAgIGlmICh0cmFjZUhlYWRlcikge1xuICAgICAgb3B0cy5oZWFkZXJzWydYLVRDQi1UcmFjZSddID0gdHJhY2VIZWFkZXI7XG4gICAgfVxuICAgIC8vIOmdnndlYuW5s+WPsOS9v+eUqOWHreivgeajgOmqjOacieaViOaAp1xuICAgIGlmIChQbGF0Zm9ybS5ydW50aW1lICE9PSBSVU5USU1FLldFQikge1xuICAgICAgY29uc3QgeyBhcHBTaWduLCBhcHBTZWNyZXQgfSA9IHRoaXMuY29uZmlnO1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IHsgYXBwQWNjZXNzS2V5LCBhcHBBY2Nlc3NLZXlJZCB9ID0gYXBwU2VjcmV0O1xuICAgICAgY29uc3Qgc2lnbiA9IGNyZWF0ZVNpZ24oe1xuICAgICAgICBkYXRhOiB7fSwgLy8g5qCh6aqM562+5ZCN5rWB56iL5a6e6ZmF5pyq55So5Yiw77yM5Y+v6K6+56m6XG4gICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgYXBwQWNjZXNzS2V5SWQsXG4gICAgICAgIGFwcFNpZ25cbiAgICAgIH0sIGFwcEFjY2Vzc0tleSk7XG5cbiAgICAgIG9wdHMuaGVhZGVyc1snWC1UQ0ItQXBwLVNvdXJjZSddID0gYHRpbWVzdGFtcD0ke3RpbWVzdGFtcH07YXBwQWNjZXNzS2V5SWQ9JHthcHBBY2Nlc3NLZXlJZH07YXBwU2lnbj0ke2FwcFNpZ259O3NpZ249JHtzaWdufWA7XG4gICAgfVxuXG4gICAgLy8g5Y+R5Ye66K+35rGCXG4gICAgLy8g5paw55qEIHVybCDpnIDopoHmkLrluKYgZW52IOWPguaVsOi/m+ihjCBDT1JTIOagoemqjFxuICAgIC8vIOivt+axgumTvuaOpeaUr+aMgea3u+WKoOWKqOaAgSBxdWVyeSDlj4LmlbDvvIzmlrnkvr/nlKjmiLfosIPor5XlrprkvY3or7fmsYJcbiAgICBjb25zdCB7IHBhcnNlLCBpblF1ZXJ5LCBzZWFyY2ggfSA9IHBhcmFtcztcbiAgICBsZXQgZm9ybWF0UXVlcnk6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7XG4gICAgICBlbnY6IHRoaXMuY29uZmlnLmVudlxuICAgIH07XG4gICAgLy8g5bCd6K+V6Kej5p6Q5ZON5bqU5pWw5o2u5Li6IEpTT05cbiAgICBwYXJzZSAmJiAoZm9ybWF0UXVlcnkucGFyc2UgPSB0cnVlKTtcbiAgICBpblF1ZXJ5ICYmIChmb3JtYXRRdWVyeSA9IHtcbiAgICAgIC4uLmluUXVlcnksXG4gICAgICAuLi5mb3JtYXRRdWVyeVxuICAgIH0pO1xuICAgIGNvbnN0IHsgQkFTRV9VUkwsIFBST1RPQ09MIH0gPSBnZXRFbmRQb2ludCgpO1xuICAgIC8vIOeUn+aIkOivt+axgiB1cmxcbiAgICBsZXQgbmV3VXJsID0gZm9ybWF0VXJsKFBST1RPQ09MLCBCQVNFX1VSTCwgZm9ybWF0UXVlcnkpO1xuXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgbmV3VXJsICs9IHNlYXJjaDtcbiAgICB9XG5cbiAgICBjb25zdCByZXM6IFJlc3BvbnNlT2JqZWN0ID0gYXdhaXQgdGhpcy5wb3N0KHtcbiAgICAgIHVybDogbmV3VXJsLFxuICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgIC4uLm9wdHNcbiAgICB9KTtcblxuICAgIC8vIOS/neWtmCB0cmFjZSBoZWFkZXJcbiAgICBjb25zdCByZXNUcmFjZUhlYWRlciA9IHJlcy5oZWFkZXIgJiYgcmVzLmhlYWRlclsneC10Y2ItdHJhY2UnXTtcbiAgICBpZiAocmVzVHJhY2VIZWFkZXIpIHtcbiAgICAgIHRoaXMuX2xvY2FsQ2FjaGUuc2V0U3RvcmUodGNiVHJhY2VLZXksIHJlc1RyYWNlSGVhZGVyKTtcbiAgICB9XG5cbiAgICBpZiAoKE51bWJlcihyZXMuc3RhdHVzKSAhPT0gMjAwICYmIE51bWJlcihyZXMuc3RhdHVzQ29kZSkgIT09IDIwMCkgfHwgIXJlcy5kYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25ldHdvcmsgcmVxdWVzdCBlcnJvcicpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2VuZChhY3Rpb246IHN0cmluZywgZGF0YTogS1Y8YW55PiA9IHt9KTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3QoYWN0aW9uLCBkYXRhLCB7IG9uVXBsb2FkUHJvZ3Jlc3M6IGRhdGEub25VcGxvYWRQcm9ncmVzcyB9KTtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSAnQUNDRVNTX1RPS0VOX0VYUElSRUQnICYmIEFDVElPTlNfV0lUSE9VVF9BQ0NFU1NUT0tFTi5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICAvLyBhY2Nlc3NfdG9rZW7ov4fmnJ/vvIzph43mlrDojrflj5ZcbiAgICAgIGF3YWl0IHRoaXMucmVmcmVzaEFjY2Vzc1Rva2VuKCk7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdChhY3Rpb24sIGRhdGEsIHsgb25VcGxvYWRQcm9ncmVzczogZGF0YS5vblVwbG9hZFByb2dyZXNzIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgJiYgdGhpcy5fdGhyb3dXaGVuUmVxdWVzdEZhaWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvZGU6IEVSUk9SUy5PUEVSQVRJT05fRkFJTCxcbiAgICAgICAgbXNnOiBgWyR7cmVzcG9uc2UuZGF0YS5jb2RlfV0gJHtyZXNwb25zZS5kYXRhLm1lc3NhZ2V9YFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9XG5cbiAgLy8g6LCD55So5o6l5Y+j5Yi35pawYWNjZXNzIHRva2Vu77yM5bm25LiU6L+U5ZueXG4gIHByaXZhdGUgYXN5bmMgX3JlZnJlc2hBY2Nlc3NUb2tlbihyZXRyeU51bSA9IDEpOiBQcm9taXNlPElHZXRBY2Nlc3NUb2tlblJlc3VsdD4ge1xuICAgIGNvbnN0IHsgYWNjZXNzVG9rZW5LZXksIGFjY2Vzc1Rva2VuRXhwaXJlS2V5LCByZWZyZXNoVG9rZW5LZXksIGxvZ2luVHlwZUtleSwgYW5vbnltb3VzVXVpZEtleSB9ID0gdGhpcy5fY2FjaGUua2V5cztcbiAgICBhd2FpdCB0aGlzLl9jYWNoZS5yZW1vdmVTdG9yZUFzeW5jKGFjY2Vzc1Rva2VuS2V5KTtcbiAgICBhd2FpdCB0aGlzLl9jYWNoZS5yZW1vdmVTdG9yZUFzeW5jKGFjY2Vzc1Rva2VuRXhwaXJlS2V5KTtcblxuICAgIGxldCByZWZyZXNoVG9rZW4gPSBhd2FpdCB0aGlzLl9jYWNoZS5nZXRTdG9yZUFzeW5jKHJlZnJlc2hUb2tlbktleSk7XG4gICAgaWYgKCFyZWZyZXNoVG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvZGU6IEVSUk9SUy5JTlZBTElEX09QRVJBVElPTixcbiAgICAgICAgbXNnOiAnbm90IGxvZ2luJ1xuICAgICAgfSkpO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IEtWPHN0cmluZz4gPSB7XG4gICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW5cbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdhdXRoLmZldGNoQWNjZXNzVG9rZW5XaXRoUmVmcmVzaFRva2VuJywgcGFyYW1zKTtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlKSB7XG4gICAgICBjb25zdCB7IGNvZGUgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBpZiAoY29kZSA9PT0gJ1NJR05fUEFSQU1fSU5WQUxJRCcgfHwgY29kZSA9PT0gJ1JFRlJFU0hfVE9LRU5fRVhQSVJFRCcgfHwgY29kZSA9PT0gJ0lOVkFMSURfUkVGUkVTSF9UT0tFTicpIHtcbiAgICAgICAgLy8g6L+Z6YeM5aSE55CG5Lul5LiL6YC76L6R77yaXG4gICAgICAgIC8vIOWMv+WQjeeZu+W9leaXtu+8jOWmguaenOWIt+aWsGFjY2VzcyB0b2tlbuaKpemUmXJlZnJlc2ggdG9rZW7ov4fmnJ/vvIzmraTml7blupTor6XvvJpcbiAgICAgICAgLy8gMS4g5YaN55SoIHV1aWQg5ou/5LiA5qyh5paw55qEcmVmcmVzaCB0b2tlblxuICAgICAgICAvLyAyLiDmi7/mlrDnmoRyZWZyZXNoIHRva2Vu5o2iYWNjZXNzIHRva2VuXG4gICAgICAgIGNvbnN0IGlzQW5vbnltb3VzID0gYXdhaXQgdGhpcy5fY2FjaGUuZ2V0U3RvcmVBc3luYyhsb2dpblR5cGVLZXkpID09PSBMT0dJTlRZUEUuQU5PTllNT1VTO1xuICAgICAgICBpZiAoaXNBbm9ueW1vdXMgJiYgY29kZSA9PT0gJ0lOVkFMSURfUkVGUkVTSF9UT0tFTicpIHtcbiAgICAgICAgICAvLyDojrflj5bmlrDnmoQgcmVmcmVzaCB0b2tlblxuICAgICAgICAgIGNvbnN0IGFub255bW91c191dWlkID0gYXdhaXQgdGhpcy5fY2FjaGUuZ2V0U3RvcmVBc3luYyhhbm9ueW1vdXNVdWlkS2V5KTtcbiAgICAgICAgICAvLyDmraTlpIRjYWNoZeS4uuWfuuexu3Byb3BlcnR5XG4gICAgICAgICAgY29uc3QgcmVmcmVzaF90b2tlbiA9IGF3YWl0IHRoaXMuX2NhY2hlLmdldFN0b3JlQXN5bmMocmVmcmVzaFRva2VuS2V5KTtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnNlbmQoJ2F1dGguc2lnbkluQW5vbnltb3VzbHknLCB7XG4gICAgICAgICAgICBhbm9ueW1vdXNfdXVpZCxcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9zZXRSZWZyZXNoVG9rZW4ocmVzLnJlZnJlc2hfdG9rZW4pO1xuICAgICAgICAgIGlmIChyZXRyeU51bSA+PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVmcmVzaEFjY2Vzc1Rva2VuKC0tcmV0cnlOdW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBjb2RlOiBFUlJPUlMuT1BFUkFUSU9OX0ZBSUwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+mHjeivleiOt+WPliByZWZyZXNoIHRva2VuIOWksei0pSdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xvdWRiYXNlLmZpcmUoRVZFTlRTLkxPR0lOX1NUQVRFX0VYUElSRUQpO1xuICAgICAgICBhd2FpdCB0aGlzLl9jYWNoZS5yZW1vdmVTdG9yZUFzeW5jKHJlZnJlc2hUb2tlbktleSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjb2RlOiBFUlJPUlMuTkVUV09SS19FUlJPUixcbiAgICAgICAgbXNnOiBgcmVmcmVzaCBhY2Nlc3NfdG9rZW4gZmFpbGVk77yaJHtyZXNwb25zZS5kYXRhLmNvZGV9YFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAocmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIGNsb3VkYmFzZS5maXJlKEVWRU5UUy5BQ0NFU1NfVE9LRU5fUkVGUkVTSEQpO1xuICAgICAgYXdhaXQgdGhpcy5fY2FjaGUuc2V0U3RvcmVBc3luYyhhY2Nlc3NUb2tlbktleSwgcmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW4pO1xuICAgICAgLy8g5pys5Zyw5pe26Ze05Y+v6IO95rKh5pyJ5ZCM5q2lXG4gICAgICBhd2FpdCB0aGlzLl9jYWNoZS5zZXRTdG9yZUFzeW5jKGFjY2Vzc1Rva2VuRXhwaXJlS2V5LCByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbl9leHBpcmUgKyBEYXRlLm5vdygpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY2Vzc1Rva2VuOiByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbixcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmU6IHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuX2V4cGlyZVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8g5Yy/5ZCN55m75b2VcmVmcmVzaF90b2tlbui/h+acn+aDheWGteS4i+i/lOWbnnJlZnJlc2hfdG9rZW5cbiAgICAvLyDmraTlnLrmma/kuIvkvb/nlKjmlrDnmoRyZWZyZXNoX3Rva2Vu6I635Y+WYWNjZXNzX3Rva2VuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEucmVmcmVzaF90b2tlbikge1xuICAgICAgYXdhaXQgdGhpcy5fY2FjaGUucmVtb3ZlU3RvcmVBc3luYyhyZWZyZXNoVG9rZW5LZXkpO1xuICAgICAgYXdhaXQgdGhpcy5fY2FjaGUuc2V0U3RvcmVBc3luYyhyZWZyZXNoVG9rZW5LZXksIHJlc3BvbnNlLmRhdGEucmVmcmVzaF90b2tlbik7XG4gICAgICBhd2FpdCB0aGlzLl9yZWZyZXNoQWNjZXNzVG9rZW4oKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBhc3luYyBfc2V0UmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbjogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbktleSwgYWNjZXNzVG9rZW5FeHBpcmVLZXksIHJlZnJlc2hUb2tlbktleSB9ID0gdGhpcy5fY2FjaGUua2V5cztcbiAgICAvLyByZWZyZXNoIHRva2Vu6K6+572u5YmN77yM5YWI5riF5o6JIGFjY2VzcyB0b2tlblxuICAgIGF3YWl0IHRoaXMuX2NhY2hlLnJlbW92ZVN0b3JlQXN5bmMoYWNjZXNzVG9rZW5LZXkpO1xuICAgIGF3YWl0IHRoaXMuX2NhY2hlLnJlbW92ZVN0b3JlQXN5bmMoYWNjZXNzVG9rZW5FeHBpcmVLZXkpO1xuICAgIGF3YWl0IHRoaXMuX2NhY2hlLnNldFN0b3JlQXN5bmMocmVmcmVzaFRva2VuS2V5LCByZWZyZXNoVG9rZW4pO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RNYXA6IEtWPENsb3VkYmFzZVJlcXVlc3Q+ID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0UmVxdWVzdChjb25maWc6IElDbG91ZGJhc2VSZXF1ZXN0Q29uZmlnKSB7XG4gIHJlcXVlc3RNYXBbY29uZmlnLmVudl0gPSBuZXcgQ2xvdWRiYXNlUmVxdWVzdCh7XG4gICAgLi4uY29uZmlnLFxuICAgIHRocm93OiB0cnVlXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVxdWVzdEJ5RW52SWQoZW52OiBzdHJpbmcpOiBDbG91ZGJhc2VSZXF1ZXN0IHtcbiAgcmV0dXJuIHJlcXVlc3RNYXBbZW52XTtcbn0iXX0=
}, function(modId) { var map = {"../constants/common":1734234913758,"..":1734234913753,"./cache":1734234913756,"../constants/events":1734234913759,"./adapter":1734234913755}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913758, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGINTYPE = exports.getEndPoint = exports.setRegionLevelEndpoint = exports.setEndPoint = exports.DATA_VERSION = exports.getSdkName = exports.setSdkName = exports.getSdkVersion = exports.setSdkVersion = void 0;
var utilities_1 = require("@cloudbase/utilities");
var setUtilitiesSdkName = utilities_1.constants.setSdkName, setUtilitiesProtocol = utilities_1.constants.setProtocol;
var sdk_version = '';
var sdk_name = '@cloudbase/js-sdk';
function setSdkVersion(version) {
    sdk_version = version;
}
exports.setSdkVersion = setSdkVersion;
function getSdkVersion() {
    return sdk_version;
}
exports.getSdkVersion = getSdkVersion;
function setSdkName(name) {
    sdk_name = name;
    setUtilitiesSdkName(name);
}
exports.setSdkName = setSdkName;
function getSdkName() {
    return sdk_name;
}
exports.getSdkName = getSdkName;
exports.DATA_VERSION = '2020-01-10';
var PROTOCOL = typeof location !== 'undefined' && location.protocol === 'http:'
    ? 'http:'
    : 'https:';
var BASE_URL = typeof process !== 'undefined' && process.env.NODE_ENV === 'e2e' && process.env.END_POINT === 'pre'
    ? '//tcb-pre.tencentcloudapi.com/web'
    : '//tcb-api.tencentcloudapi.com/web';
function setEndPoint(url, protocol) {
    BASE_URL = url;
    if (protocol) {
        PROTOCOL = protocol;
        setUtilitiesProtocol(protocol);
    }
}
exports.setEndPoint = setEndPoint;
function setRegionLevelEndpoint(env, region, protocol) {
    var endpoiont = region
        ? "//" + env + "." + region + ".tcb-api.tencentcloudapi.com/web"
        : "//" + env + ".ap-shanghai.tcb-api.tencentcloudapi.com/web";
    setEndPoint(endpoiont, protocol);
}
exports.setRegionLevelEndpoint = setRegionLevelEndpoint;
function getEndPoint() {
    return { BASE_URL: BASE_URL, PROTOCOL: PROTOCOL };
}
exports.getEndPoint = getEndPoint;
var LOGINTYPE;
(function (LOGINTYPE) {
    LOGINTYPE["ANONYMOUS"] = "ANONYMOUS";
    LOGINTYPE["WECHAT"] = "WECHAT";
    LOGINTYPE["CUSTOM"] = "CUSTOM";
    LOGINTYPE["NULL"] = "NULL";
})(LOGINTYPE = exports.LOGINTYPE || (exports.LOGINTYPE = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnN0YW50cy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQWlEO0FBR3pDLElBQVksbUJBQW1CLEdBQXdDLHFCQUFTLFdBQWpELEVBQWUsb0JBQW9CLEdBQUsscUJBQVMsWUFBZCxDQUFlO0FBSXpGLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUNyQixJQUFJLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztBQUVuQyxTQUFnQixhQUFhLENBQUMsT0FBYztJQUMxQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLENBQUM7QUFGRCxzQ0FFQztBQUNELFNBQWdCLGFBQWE7SUFDM0IsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUZELHNDQUVDO0FBQ0QsU0FBZ0IsVUFBVSxDQUFDLElBQVc7SUFDcEMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNoQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBSEQsZ0NBR0M7QUFDRCxTQUFnQixVQUFVO0lBQ3hCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFGRCxnQ0FFQztBQUNZLFFBQUEsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUl6QyxJQUFJLFFBQVEsR0FBRyxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxPQUFPO0lBQzdFLENBQUMsQ0FBQyxPQUFPO0lBQ1QsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNiLElBQUksUUFBUSxHQUFHLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEtBQUssS0FBSztJQUNoSCxDQUFDLENBQUMsbUNBQW1DO0lBQ3JDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQztBQUN4QyxTQUFnQixXQUFXLENBQUMsR0FBVSxFQUFDLFFBQXdCO0lBQzdELFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDZixJQUFHLFFBQVEsRUFBQztRQUNWLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDaEM7QUFDSCxDQUFDO0FBTkQsa0NBTUM7QUFDRCxTQUFnQixzQkFBc0IsQ0FBQyxHQUFVLEVBQUMsTUFBYSxFQUFDLFFBQXdCO0lBQ3RGLElBQU0sU0FBUyxHQUFHLE1BQU07UUFDdEIsQ0FBQyxDQUFDLE9BQUssR0FBRyxTQUFJLE1BQU0scUNBQWtDO1FBQ3RELENBQUMsQ0FBQyxPQUFLLEdBQUcsaURBQThDLENBQUE7SUFDMUQsV0FBVyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUNsQyxDQUFDO0FBTEQsd0RBS0M7QUFDRCxTQUFnQixXQUFXO0lBQ3pCLE9BQU8sRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO0FBQ2hDLENBQUM7QUFGRCxrQ0FFQztBQUVELElBQVksU0FLWDtBQUxELFdBQVksU0FBUztJQUNuQixvQ0FBdUIsQ0FBQTtJQUN2Qiw4QkFBaUIsQ0FBQTtJQUNqQiw4QkFBaUIsQ0FBQTtJQUNqQiwwQkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnQGNsb3VkYmFzZS91dGlsaXRpZXMnO1xuXG4vLyBAdHMtaWdub3JlXG5jb25zdCB7IHNldFNka05hbWU6IHNldFV0aWxpdGllc1Nka05hbWUsIHNldFByb3RvY29sOiBzZXRVdGlsaXRpZXNQcm90b2NvbCB9ID0gY29uc3RhbnRzO1xuLyoqXG4gKiBTREtcbiAqL1xubGV0IHNka192ZXJzaW9uID0gJyc7XG5sZXQgc2RrX25hbWUgPSAnQGNsb3VkYmFzZS9qcy1zZGsnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2RrVmVyc2lvbih2ZXJzaW9uOnN0cmluZyl7XG4gIHNka192ZXJzaW9uID0gdmVyc2lvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZGtWZXJzaW9uKCl7XG4gIHJldHVybiBzZGtfdmVyc2lvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZGtOYW1lKG5hbWU6c3RyaW5nKXtcbiAgc2RrX25hbWUgPSBuYW1lO1xuICBzZXRVdGlsaXRpZXNTZGtOYW1lKG5hbWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNka05hbWUoKXtcbiAgcmV0dXJuIHNka19uYW1lO1xufVxuZXhwb3J0IGNvbnN0IERBVEFfVkVSU0lPTiA9ICcyMDIwLTAxLTEwJztcbi8qKlxuICogcmVxdWVzdFxuICovXG5sZXQgUFJPVE9DT0wgPSB0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonIFxuICA/ICdodHRwOicgXG4gIDogJ2h0dHBzOic7XG5sZXQgQkFTRV9VUkwgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdlMmUnICYmIHByb2Nlc3MuZW52LkVORF9QT0lOVCA9PT0gJ3ByZSdcbiAgPyAnLy90Y2ItcHJlLnRlbmNlbnRjbG91ZGFwaS5jb20vd2ViJ1xuICA6ICcvL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbS93ZWInO1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVuZFBvaW50KHVybDpzdHJpbmcscHJvdG9jb2w/OidodHRwJ3wnaHR0cHMnKXtcbiAgQkFTRV9VUkwgPSB1cmw7XG4gIGlmKHByb3RvY29sKXtcbiAgICBQUk9UT0NPTCA9IHByb3RvY29sO1xuICAgIHNldFV0aWxpdGllc1Byb3RvY29sKHByb3RvY29sKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFJlZ2lvbkxldmVsRW5kcG9pbnQoZW52OnN0cmluZyxyZWdpb246c3RyaW5nLHByb3RvY29sPzonaHR0cCd8J2h0dHBzJykge1xuICBjb25zdCBlbmRwb2lvbnQgPSByZWdpb25cbiAgICA/IGAvLyR7ZW52fS4ke3JlZ2lvbn0udGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tL3dlYmBcbiAgICA6IGAvLyR7ZW52fS5hcC1zaGFuZ2hhaS50Y2ItYXBpLnRlbmNlbnRjbG91ZGFwaS5jb20vd2ViYFxuICBzZXRFbmRQb2ludChlbmRwb2lvbnQsIHByb3RvY29sKVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuZFBvaW50KCl7XG4gIHJldHVybiB7IEJBU0VfVVJMLCBQUk9UT0NPTCB9O1xufVxuXG5leHBvcnQgZW51bSBMT0dJTlRZUEUge1xuICBBTk9OWU1PVVMgPSAnQU5PTllNT1VTJyxcbiAgV0VDSEFUID0gJ1dFQ0hBVCcsXG4gIENVU1RPTSA9ICdDVVNUT00nLFxuICBOVUxMID0gJ05VTEwnIC8vIOS/neeVmeWtl++8jOS7o+ihqOacqueZu+W9lVxufSJdfQ==
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913759, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = void 0;
exports.EVENTS = {
    LOGIN_STATE_CHANGED: 'loginStateChanged',
    LOGIN_STATE_EXPIRED: 'loginStateExpire',
    LOGIN_TYPE_CHANGED: 'loginTypeChanged',
    ANONYMOUS_CONVERTED: 'anonymousConverted',
    ACCESS_TOKEN_REFRESHD: 'refreshAccessToken'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnN0YW50cy9ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxNQUFNLEdBQUc7SUFDcEIsbUJBQW1CLEVBQUksbUJBQW1CO0lBQzFDLG1CQUFtQixFQUFJLGtCQUFrQjtJQUN6QyxrQkFBa0IsRUFBSyxrQkFBa0I7SUFDekMsbUJBQW1CLEVBQUksb0JBQW9CO0lBQzNDLHFCQUFxQixFQUFFLG9CQUFvQjtDQUM1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEVWRU5UUyA9IHtcbiAgTE9HSU5fU1RBVEVfQ0hBTkdFRCAgOiAnbG9naW5TdGF0ZUNoYW5nZWQnLFxuICBMT0dJTl9TVEFURV9FWFBJUkVEICA6ICdsb2dpblN0YXRlRXhwaXJlJyxcbiAgTE9HSU5fVFlQRV9DSEFOR0VEICAgOiAnbG9naW5UeXBlQ2hhbmdlZCcsXG4gIEFOT05ZTU9VU19DT05WRVJURUQgIDogJ2Fub255bW91c0NvbnZlcnRlZCcsIC8v5Yy/5ZCN6LSm5oi36KKr6L2s5q2j5ZCO6Kem5Y+RXG4gIEFDQ0VTU19UT0tFTl9SRUZSRVNIRDogJ3JlZnJlc2hBY2Nlc3NUb2tlbidcbn07XG4iXX0=
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1734234913753);
})()
//miniprogram-npm-outsideDeps=["@cloudbase/utilities","cloudbase-adapter-wx_mp"]
//# sourceMappingURL=index.js.map