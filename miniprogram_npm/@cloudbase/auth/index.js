module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1734234913816, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAuth = exports.Auth = exports.LoginState = void 0;
var utilities_1 = require("@cloudbase/utilities");
var oauth_1 = require("@cloudbase/oauth");
var printWarn = utilities_1.utils.printWarn, throwError = utilities_1.utils.throwError;
var ERRORS = utilities_1.constants.ERRORS, COMMUNITY_SITE_URL = utilities_1.constants.COMMUNITY_SITE_URL;
var catchErrorsDecorator = utilities_1.helpers.catchErrorsDecorator;
var CloudbaseEventEmitter = utilities_1.events.CloudbaseEventEmitter;
var COMPONENT_NAME = 'auth';
var EVENTS = {
    LOGIN_STATE_CHANGED: 'loginStateChanged',
};
var eventBus = new CloudbaseEventEmitter();
var User = (function () {
    function User(options) {
        var cache = options.cache, oauthInstance = options.oauthInstance;
        this.cache = cache;
        this.oauthInstance = oauthInstance;
        this.setUserInfo();
    }
    User.prototype.checkLocalInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.uid = this.getLocalUserInfo('uid');
                this.gender = this.getLocalUserInfo('gender');
                this.picture = this.getLocalUserInfo('picture');
                this.email = this.getLocalUserInfo('email');
                this.emailVerified = this.getLocalUserInfo('email_verified');
                this.phoneNumber = this.getLocalUserInfo('phone_number');
                this.username = this.getLocalUserInfo('username');
                this.name = this.getLocalUserInfo('name');
                this.birthdate = this.getLocalUserInfo('birthdate');
                this.zoneinfo = this.getLocalUserInfo('zoneinfo');
                this.locale = this.getLocalUserInfo('locale');
                this.sub = this.getLocalUserInfo('sub');
                this.createdFrom = this.getLocalUserInfo('created_from');
                this.providers = this.getLocalUserInfo('providers');
                return [2];
            });
        });
    };
    User.prototype.checkLocalInfoAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4, this.getLocalUserInfoAsync('uid')];
                    case 1:
                        _a.uid = _e.sent();
                        _b = this;
                        return [4, this.getLocalUserInfoAsync('gender')];
                    case 2:
                        _b.gender = _e.sent();
                        this.picture = this.getLocalUserInfo('picture');
                        _c = this;
                        return [4, this.getLocalUserInfoAsync('email')];
                    case 3:
                        _c.email = _e.sent();
                        this.emailVerified = this.getLocalUserInfo('email_verified');
                        this.phoneNumber = this.getLocalUserInfo('phone_number');
                        _d = this;
                        return [4, this.getLocalUserInfoAsync('username')];
                    case 4:
                        _d.username = _e.sent();
                        this.name = this.getLocalUserInfo('name');
                        this.birthdate = this.getLocalUserInfo('birthdate');
                        this.zoneinfo = this.getLocalUserInfo('zoneinfo');
                        this.locale = this.getLocalUserInfo('locale');
                        this.sub = this.getLocalUserInfo('sub');
                        this.createdFrom = this.getLocalUserInfo('created_from');
                        this.providers = this.getLocalUserInfo('providers');
                        return [2];
                }
            });
        });
    };
    User.prototype.update = function (userInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var newUserInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.authApi.setUserProfile(__assign({}, userInfo))];
                    case 1:
                        newUserInfo = _a.sent();
                        this.setLocalUserInfo(newUserInfo);
                        return [2];
                }
            });
        });
    };
    User.prototype.updatePassword = function (newPassword, oldPassword) {
        return this.oauthInstance.authApi.updatePasswordByOld({
            old_password: oldPassword,
            new_password: newPassword,
        });
    };
    User.prototype.updateUsername = function (username) {
        if (typeof username !== 'string') {
            throwError(ERRORS.INVALID_PARAMS, 'username must be a string');
        }
        return this.update({
            username: username,
        });
    };
    User.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newUserInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.authApi.getUserInfo()];
                    case 1:
                        newUserInfo = _a.sent();
                        this.setLocalUserInfo(newUserInfo);
                        return [2, newUserInfo];
                }
            });
        });
    };
    User.prototype.getLocalUserInfo = function (key) {
        var userInfoKey = this.cache.keys.userInfoKey;
        var userInfo = this.cache.getStore(userInfoKey);
        return userInfo[key];
    };
    User.prototype.getLocalUserInfoAsync = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var userInfoKey, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfoKey = this.cache.keys.userInfoKey;
                        return [4, this.cache.getStoreAsync(userInfoKey)];
                    case 1:
                        userInfo = _a.sent();
                        return [2, userInfo[key]];
                }
            });
        });
    };
    User.prototype.setUserInfo = function () {
        var _this = this;
        var userInfoKey = this.cache.keys.userInfoKey;
        var userInfo = this.cache.getStore(userInfoKey);
        [
            'uid',
            'email',
            'name',
            'gender',
            'picture',
            'email_verified',
            'phone_number',
            'birthdate',
            'zoneinfo',
            'locale',
            'sub',
            'created_from',
            'providers',
            'username',
        ].forEach(function (infoKey) {
            _this[infoKey] = userInfo[infoKey];
        });
    };
    User.prototype.setLocalUserInfo = function (userInfo) {
        var userInfoKey = this.cache.keys.userInfoKey;
        this.cache.setStore(userInfoKey, userInfo);
        this.setUserInfo();
    };
    __decorate([
        catchErrorsDecorator({
            title: '更新用户信息失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 User.update() 的语法或参数是否正确',
                '  2 - 用户信息中是否包含非法值',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], User.prototype, "update", null);
    __decorate([
        catchErrorsDecorator({
            title: '更新密码失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 User.updatePassword() 的语法或参数是否正确',
                '  3 - 新密码中是否包含非法字符',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], User.prototype, "updatePassword", null);
    __decorate([
        catchErrorsDecorator({
            title: '更新用户名失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 User.updateUsername() 的语法或参数是否正确',
                '  2 - 当前环境是否开通了用户名密码登录',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], User.prototype, "updateUsername", null);
    __decorate([
        catchErrorsDecorator({
            title: '刷新本地用户信息失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 User.refresh() 的语法或参数是否正确',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], User.prototype, "refresh", null);
    return User;
}());
var LoginState = (function () {
    function LoginState(options) {
        var envId = options.envId, cache = options.cache, oauthInstance = options.oauthInstance;
        if (!envId) {
            throwError(ERRORS.INVALID_PARAMS, 'envId is not defined');
        }
        this.cache = cache;
        this.oauthInstance = oauthInstance;
        this.user = new User({
            cache: this.cache,
            oauthInstance: oauthInstance,
        });
    }
    LoginState.prototype.checkLocalState = function () {
        var _a;
        this.oauthLoginState = (_a = this.oauthInstance) === null || _a === void 0 ? void 0 : _a.authApi.hasLoginStateSync();
        this.user.checkLocalInfo();
    };
    LoginState.prototype.checkLocalStateAsync = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ((_a = this.oauthInstance) === null || _a === void 0 ? void 0 : _a.authApi.getLoginState())];
                    case 1:
                        _b.sent();
                        return [4, this.user.checkLocalInfoAsync()];
                    case 2:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    return LoginState;
}());
exports.LoginState = LoginState;
var Auth = (function () {
    function Auth(config) {
        this.config = config;
        this.cache = config.cache;
        this.oauthInstance = config.oauthInstance;
    }
    Auth.prototype.bindPhoneNumber = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.bindPhone(params)];
            });
        });
    };
    Auth.prototype.unbindProvider = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.unbindProvider(params)];
            });
        });
    };
    Auth.prototype.bindEmail = function (params) {
        return this.oauthInstance.authApi.bindEmail(params);
    };
    Auth.prototype.verify = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.verify(params)];
            });
        });
    };
    Auth.prototype.getVerification = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.getVerification(params)];
            });
        });
    };
    Object.defineProperty(Auth.prototype, "currentUser", {
        get: function () {
            if (this.cache.mode === 'async') {
                printWarn(ERRORS.INVALID_OPERATION, 'current platform\'s storage is asynchronous, please use getCurrentUser insteed');
                return;
            }
            var loginState = this.hasLoginState();
            if (loginState) {
                return loginState.user || null;
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Auth.prototype.getCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getLoginState()];
                    case 1:
                        loginState = _a.sent();
                        if (!loginState) return [3, 3];
                        return [4, loginState.user.checkLocalInfoAsync()];
                    case 2:
                        _a.sent();
                        return [2, loginState.user || null];
                    case 3: return [2, null];
                }
            });
        });
    };
    Auth.prototype.signInAnonymously = function (data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.authApi.signInAnonymously(data)];
                    case 1:
                        _a.sent();
                        return [2, this.createLoginState()];
                }
            });
        });
    };
    Auth.prototype.setCustomSignFunc = function (getTickFn) {
        this.oauthInstance.authApi.setCustomSignFunc(getTickFn);
    };
    Auth.prototype.signInWithCustomTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.authApi.signInWithCustomTicket()];
                    case 1:
                        _a.sent();
                        return [2, this.createLoginState()];
                }
            });
        });
    };
    Auth.prototype.signIn = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.authApi.signIn(params)];
                    case 1:
                        _a.sent();
                        return [2, this.createLoginState()];
                }
            });
        });
    };
    Auth.prototype.signUp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.authApi.signUp(params)];
                    case 1:
                        _a.sent();
                        return [2, this.createLoginState()];
                }
            });
        });
    };
    Auth.prototype.setPassword = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.setPassword(params)];
            });
        });
    };
    Auth.prototype.isUsernameRegistered = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var exist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof username !== 'string') {
                            throwError(ERRORS.INVALID_PARAMS, 'username must be a string');
                        }
                        return [4, this.oauthInstance.authApi.checkIfUserExist({ username: username })];
                    case 1:
                        exist = (_a.sent()).exist;
                        return [2, exist];
                }
            });
        });
    };
    Auth.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfoKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfoKey = this.cache.keys.userInfoKey;
                        return [4, this.oauthInstance.authApi.signOut()];
                    case 1:
                        _a.sent();
                        return [4, this.cache.removeStoreAsync(userInfoKey)];
                    case 2:
                        _a.sent();
                        eventBus.fire(EVENTS.LOGIN_STATE_CHANGED);
                        return [2];
                }
            });
        });
    };
    Auth.prototype.hasLoginState = function () {
        var _a;
        if (this.cache.mode === 'async') {
            printWarn(ERRORS.INVALID_OPERATION, 'current platform\'s storage is asynchronous, please use getLoginState insteed');
            return;
        }
        var oauthLoginState = (_a = this.oauthInstance) === null || _a === void 0 ? void 0 : _a.authApi.hasLoginStateSync();
        if (oauthLoginState) {
            var loginState = new LoginState({
                envId: this.config.env,
                cache: this.cache,
                oauthInstance: this.oauthInstance,
            });
            return loginState;
        }
        return null;
    };
    Auth.prototype.getLoginState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var oauthLoginState, loginState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.authApi.getLoginState()];
                    case 1:
                        oauthLoginState = _a.sent();
                        if (oauthLoginState) {
                            loginState = new LoginState({
                                envId: this.config.env,
                                cache: this.cache,
                                oauthInstance: this.oauthInstance,
                            });
                            return [2, loginState];
                        }
                        return [2, null];
                }
            });
        });
    };
    Auth.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.getUserInfo()];
            });
        });
    };
    Auth.prototype.getAuthHeader = function () {
        console.error('Auth.getAuthHeader API 已废弃');
        return {};
    };
    Auth.prototype.bindWithProvider = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.bindWithProvider(params)];
            });
        });
    };
    Auth.prototype.queryUser = function (queryObj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.queryUserProfile(queryObj)];
            });
        });
    };
    Auth.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var oauthAccessTokenRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.oauth2client.getAccessToken()];
                    case 1:
                        oauthAccessTokenRes = _a.sent();
                        return [2, {
                                accessToken: oauthAccessTokenRes,
                                env: this.config.env,
                            }];
                }
            });
        });
    };
    Auth.prototype.grantProviderToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.grantProviderToken(params)];
            });
        });
    };
    Auth.prototype.patchProviderToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.patchProviderToken(params)];
            });
        });
    };
    Auth.prototype.signInWithProvider = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.authApi.signInWithProvider(params)];
                    case 1:
                        _a.sent();
                        return [2, this.createLoginState()];
                }
            });
        });
    };
    Auth.prototype.grantToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.oauthInstance.authApi.grantToken(params)];
                    case 1:
                        _a.sent();
                        return [2, this.createLoginState()];
                }
            });
        });
    };
    Auth.prototype.genProviderRedirectUri = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.genProviderRedirectUri(params)];
            });
        });
    };
    Auth.prototype.resetPassword = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.resetPassword(params)];
            });
        });
    };
    Auth.prototype.deviceAuthorize = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.deviceAuthorize(params)];
            });
        });
    };
    Auth.prototype.sudo = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.sudo(params)];
            });
        });
    };
    Auth.prototype.deleteMe = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.deleteMe(params)];
            });
        });
    };
    Auth.prototype.getProviders = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.getProviders()];
            });
        });
    };
    Auth.prototype.loginScope = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.loginScope()];
            });
        });
    };
    Auth.prototype.loginGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.oauthInstance.authApi.loginGroups()];
            });
        });
    };
    Auth.prototype.onLoginStateChanged = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var loginState;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventBus.on(EVENTS.LOGIN_STATE_CHANGED, function () { return __awaiter(_this, void 0, void 0, function () {
                            var loginState;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.getLoginState()];
                                    case 1:
                                        loginState = _a.sent();
                                        callback.call(this, loginState);
                                        return [2];
                                }
                            });
                        }); });
                        return [4, this.getLoginState()];
                    case 1:
                        loginState = _a.sent();
                        callback.call(this, loginState);
                        return [2];
                }
            });
        });
    };
    Auth.prototype.createLoginState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loginState = new LoginState({
                            envId: this.config.env,
                            cache: this.cache,
                            oauthInstance: this.oauthInstance,
                        });
                        return [4, loginState.checkLocalStateAsync()];
                    case 1:
                        _a.sent();
                        return [4, loginState.user.refresh()];
                    case 2:
                        _a.sent();
                        eventBus.fire(EVENTS.LOGIN_STATE_CHANGED);
                        return [2, loginState];
                }
            });
        });
    };
    __decorate([
        catchErrorsDecorator({
            title: '绑定手机号失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().bindPhoneNumber() 的语法或参数是否正确',
                '  2 - 当前环境是否开通了短信验证码登录',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "bindPhoneNumber", null);
    __decorate([
        catchErrorsDecorator({
            title: '解除三方绑定失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().unbindProvider() 的语法或参数是否正确',
                '  2 - 当前账户是否已经与此登录方式解绑',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "unbindProvider", null);
    __decorate([
        catchErrorsDecorator({
            title: '绑定邮箱地址失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().bindEmail() 的语法或参数是否正确',
                '  2 - 当前环境是否开通了邮箱密码登录',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Auth.prototype, "bindEmail", null);
    __decorate([
        catchErrorsDecorator({
            title: '验证码验证失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().verify() 的语法或参数是否正确',
                '  2 - 当前环境是否开通了手机验证码/邮箱登录',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "verify", null);
    __decorate([
        catchErrorsDecorator({
            title: '获取验证码失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().getVerification() 的语法或参数是否正确',
                '  2 - 当前环境是否开通了手机验证码/邮箱登录',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "getVerification", null);
    __decorate([
        catchErrorsDecorator({
            title: '获取用户信息失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().getCurrenUser() 的语法或参数是否正确',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "getCurrentUser", null);
    __decorate([
        catchErrorsDecorator({
            title: '匿名登录失败',
            messages: [
                '请确认以下各项：',
                '  1 - 当前环境是否开启了匿名登录',
                '  2 - 调用 auth().signInAnonymously() 的语法或参数是否正确',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "signInAnonymously", null);
    __decorate([
        catchErrorsDecorator({
            title: '自定义登录失败',
            messages: [
                '请确认以下各项：',
                '  1 - 当前环境是否开启了自定义登录',
                '  2 - 调用 auth().signInWithCustomTicket() 的语法或参数是否正确',
                '  3 - ticket 是否归属于当前环境',
                '  4 - 创建 ticket 的自定义登录私钥是否过期',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "signInWithCustomTicket", null);
    __decorate([
        catchErrorsDecorator({
            title: '注册失败',
            messages: [
                '请确认以下各项：',
                '  1 - 当前环境是否开启了指定登录方式',
                '  2 - 调用 auth().signUp() 的语法或参数是否正确',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "signUp", null);
    __decorate([
        catchErrorsDecorator({
            title: '获取用户是否被占用失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().isUsernameRegistered() 的语法或参数是否正确',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "isUsernameRegistered", null);
    __decorate([
        catchErrorsDecorator({
            title: '用户登出失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().signOut() 的语法或参数是否正确',
                '  2 - 当前用户是否为匿名登录（匿名登录不支持signOut）',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "signOut", null);
    __decorate([
        catchErrorsDecorator({
            title: '获取本地登录态失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().getLoginState() 的语法或参数是否正确',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "getLoginState", null);
    __decorate([
        catchErrorsDecorator({
            title: '获取用户信息失败',
            messages: [
                '请确认以下各项：',
                '  1 - 是否已登录',
                '  2 - 调用 auth().getUserInfo() 的语法或参数是否正确',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "getUserInfo", null);
    __decorate([
        catchErrorsDecorator({
            title: '绑定第三方登录方式失败',
            messages: [
                '请确认以下各项：',
                '  1 - 调用 auth().bindWithProvider() 的语法或参数是否正确',
                '  2 - 此账户是否已经绑定此第三方',
                "\u5982\u679C\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u5EFA\u8BAE\u5230\u5B98\u65B9\u95EE\u7B54\u793E\u533A\u63D0\u95EE\u6216\u5BFB\u627E\u5E2E\u52A9\uFF1A" + COMMUNITY_SITE_URL,
            ],
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Auth.prototype, "bindWithProvider", null);
    return Auth;
}());
exports.Auth = Auth;
var component = {
    name: COMPONENT_NAME,
    namespace: 'auth',
    entity: function (config) {
        if (config === void 0) { config = { region: '', persistence: 'local' }; }
        if (this.authInstance) {
            printWarn(ERRORS.INVALID_OPERATION, 'every cloudbase instance should has only one auth object');
            return this.authInstance;
        }
        var _a = this.platform, adapter = _a.adapter, runtime = _a.runtime;
        var newPersistence = config.persistence || adapter.primaryStorage;
        if (newPersistence && (newPersistence !== this.config.persistence)) {
            this.updateConfig({ persistence: newPersistence });
        }
        var _b = this.config, env = _b.env, persistence = _b.persistence, debug = _b.debug, clientId = _b.clientId, storage = _b.storage;
        var oauthInstance = new oauth_1.CloudbaseOAuth({
            clientId: clientId,
            apiOrigin: this.request.getBaseEndPoint(),
            storage: (config === null || config === void 0 ? void 0 : config.storage) || storage,
            request: config === null || config === void 0 ? void 0 : config.request,
            anonymousSignInFunc: config === null || config === void 0 ? void 0 : config.anonymousSignInFunc,
        });
        this.oauthInstance = oauthInstance;
        this.authInstance = new Auth({
            env: env,
            region: config.region,
            persistence: persistence,
            debug: debug,
            cache: this.cache,
            runtime: runtime,
            _fromApp: this,
            oauthInstance: oauthInstance,
        });
        return this.authInstance;
    },
};
try {
    cloudbase.registerComponent(component);
}
catch (e) { }
function registerAuth(app) {
    try {
        app.registerComponent(component);
    }
    catch (e) {
        console.warn(e);
    }
}
exports.registerAuth = registerAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBd0U7QUFNeEUsMENBQTBFO0FBSWxFLElBQUEsU0FBUyxHQUFpQixpQkFBSyxVQUF0QixFQUFFLFVBQVUsR0FBSyxpQkFBSyxXQUFWLENBQVU7QUFDL0IsSUFBQSxNQUFNLEdBQXlCLHFCQUFTLE9BQWxDLEVBQUUsa0JBQWtCLEdBQUsscUJBQVMsbUJBQWQsQ0FBYztBQUN4QyxJQUFBLG9CQUFvQixHQUFLLG1CQUFPLHFCQUFaLENBQVk7QUFDaEMsSUFBQSxxQkFBcUIsR0FBSyxrQkFBTSxzQkFBWCxDQUFXO0FBRXhDLElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQTtBQUU3QixJQUFNLE1BQU0sR0FBRztJQUViLG1CQUFtQixFQUFFLG1CQUFtQjtDQUN6QyxDQUFBO0FBa0JELElBQU0sUUFBUSxHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQTtBQVE1QztJQXVCRSxjQUFZLE9BQXFCO1FBQ3ZCLElBQUEsS0FBSyxHQUFvQixPQUFPLE1BQTNCLEVBQUUsYUFBYSxHQUFLLE9BQU8sY0FBWixDQUFZO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBRWxDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBSVksNkJBQWMsR0FBM0I7OztnQkFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQVcsQ0FBQTtnQkFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFXLENBQUE7Z0JBQ3ZELElBQUksQ0FBQyxPQUFPLEdB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QVNmLFNBQWdCLFlBQVksQ0FBQyxHQUEwQztJQUNyRSxJQUFJO1FBQ0YsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0tBQ2pDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2hCO0FBQ0gsQ0FBQztBQU5ELG9DQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNsb3VkYmFzZSB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMnXG5pbXBvcnQgeyB1dGlscywgY29uc3RhbnRzLCBoZWxwZXJzLCBldmVudHMgfSBmcm9tICdAY2xvdWRiYXNlL3V0aWxpdGllcydcbmltcG9ydCB7IElDbG91ZGJhc2VDYWNoZSB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvY2FjaGUnXG5pbXBvcnQgeyBJQ2xvdWRiYXNlUmVxdWVzdCB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvcmVxdWVzdCdcbmltcG9ydCB7IElDbG91ZGJhc2VBdXRoQ29uZmlnLCBJVXNlciwgSVVzZXJJbmZvLCBJTG9naW5TdGF0ZSB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvYXV0aCdcbmltcG9ydCB7IElDbG91ZGJhc2VDb21wb25lbnQgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzL2NvbXBvbmVudCdcblxuaW1wb3J0IHsgYXV0aE1vZGVscywgQ2xvdWRiYXNlT0F1dGgsIEF1dGhPcHRpb25zIH0gZnJvbSAnQGNsb3VkYmFzZS9vYXV0aCdcblxuZGVjbGFyZSBjb25zdCBjbG91ZGJhc2U6IElDbG91ZGJhc2VcblxuY29uc3QgeyBwcmludFdhcm4sIHRocm93RXJyb3IgfSA9IHV0aWxzXG5jb25zdCB7IEVSUk9SUywgQ09NTVVOSVRZX1NJVEVfVVJMIH0gPSBjb25zdGFudHNcbmNvbnN0IHsgY2F0Y2hFcnJvcnNEZWNvcmF0b3IgfSA9IGhlbHBlcnNcbmNvbnN0IHsgQ2xvdWRiYXNlRXZlbnRFbWl0dGVyIH0gPSBldmVudHNcblxuY29uc3QgQ09NUE9ORU5UX05BTUUgPSAnYXV0aCdcblxuY29uc3QgRVZFTlRTID0ge1xuICAvLyDnmbvlvZXmgIHmlLnlj5jlkI7op6blj5FcbiAgTE9HSU5fU1RBVEVfQ0hBTkdFRDogJ2xvZ2luU3RhdGVDaGFuZ2VkJyxcbn1cblxuaW50ZXJmYWNlIFVzZXJJbmZvIHtcbiAgdWlkPzogc3RyaW5nXG4gIGdlbmRlcj86IHN0cmluZ1xuICBwaWN0dXJlPzogc3RyaW5nXG4gIGVtYWlsPzogc3RyaW5nXG4gIGVtYWlsX3ZlcmlmaWVkPzogYm9vbGVhblxuICBwaG9uZV9udW1iZXI/OiBzdHJpbmdcbiAgdXNlcm5hbWU/OiBzdHJpbmdcbiAgbmFtZT86IHN0cmluZ1xuICBiaXJ0aGRhdGU/OiBzdHJpbmdcbiAgem9uZWluZm8/OiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIHN1Yj86IHN0cmluZ1xuICBjcmVhdGVkX2Zyb20/OiBzdHJpbmdcbn1cblxuY29uc3QgZXZlbnRCdXMgPSBuZXcgQ2xvdWRiYXNlRXZlbnRFbWl0dGVyKClcblxuaW50ZXJmYWNlIElVc2VyT3B0aW9ucyB7XG4gIGNhY2hlOiBJQ2xvdWRiYXNlQ2FjaGVcbiAgLy8gcmVxdWVzdDogSUNsb3VkYmFzZVJlcXVlc3RcbiAgb2F1dGhJbnN0YW5jZTogQ2xvdWRiYXNlT0F1dGhcbn1cblxuY2xhc3MgVXNlciBpbXBsZW1lbnRzIElVc2VyIHtcbiAgcHVibGljIHVpZD86IHN0cmluZztcbiAgcHVibGljIGdlbmRlcj86IHN0cmluZztcbiAgcHVibGljIHBpY3R1cmU/OiBzdHJpbmc7XG4gIHB1YmxpYyBlbWFpbD86IHN0cmluZztcbiAgcHVibGljIGVtYWlsVmVyaWZpZWQ/OiBib29sZWFuO1xuICBwdWJsaWMgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XG4gIHB1YmxpYyB1c2VybmFtZT86IHN0cmluZztcbiAgcHVibGljIG5hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBwcm92aWRlcnM/OiB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBwcm92aWRlclVzZXJJZD86IHN0cmluZ1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgfVtdO1xuICBwdWJsaWMgYmlydGhkYXRlPzogc3RyaW5nO1xuICBwdWJsaWMgem9uZWluZm8/OiBzdHJpbmc7XG4gIHB1YmxpYyBsb2NhbGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBzdWI/OiBzdHJpbmc7XG4gIHB1YmxpYyBjcmVhdGVkRnJvbT86IHN0cmluZztcblxuICBwcml2YXRlIGNhY2hlOiBJQ2xvdWRiYXNlQ2FjaGU7XG4gIHByaXZhdGUgb2F1dGhJbnN0YW5jZTogQ2xvdWRiYXNlT0F1dGg7IC8vIENsb3VkYmFzZU9BdXRoIOexu+Wei1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElVc2VyT3B0aW9ucykge1xuICAgIGNvbnN0IHsgY2FjaGUsIG9hdXRoSW5zdGFuY2UgfSA9IG9wdGlvbnNcbiAgICB0aGlzLmNhY2hlID0gY2FjaGVcbiAgICB0aGlzLm9hdXRoSW5zdGFuY2UgPSBvYXV0aEluc3RhbmNlXG5cbiAgICB0aGlzLnNldFVzZXJJbmZvKClcbiAgfVxuICAvKipcbiAgICog6I635Y+W5pys5Zyw55So5oi35L+h5oGvLeWQjOatpVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGNoZWNrTG9jYWxJbmZvKCkge1xuICAgIHRoaXMudWlkID0gdGhpcy5nZXRMb2NhbFVzZXJJbmZvKCd1aWQnKSBhcyBzdHJpbmdcbiAgICB0aGlzLmdlbmRlciA9IHRoaXMuZ2V0TG9jYWxVc2VySW5mbygnZ2VuZGVyJykgYXMgc3RyaW5nXG4gICAgdGhpcy5waWN0dXJlID0gdGhpcy5nZXRMb2NhbFVzZXJJbmZvKCdwaWN0dXJlJykgYXMgc3RyaW5nXG4gICAgdGhpcy5lbWFpbCA9IHRoaXMuZ2V0TG9jYWxVc2VySW5mbygnZW1haWwnKSBhcyBzdHJpbmdcbiAgICB0aGlzLmVtYWlsVmVyaWZpZWQgPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ2VtYWlsX3ZlcmlmaWVkJykgYXMgYm9vbGVhblxuICAgIHRoaXMucGhvbmVOdW1iZXIgPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ3Bob25lX251bWJlcicpIGFzIHN0cmluZ1xuICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ3VzZXJuYW1lJykgYXMgc3RyaW5nXG4gICAgdGhpcy5uYW1lID0gdGhpcy5nZXRMb2NhbFVzZXJJbmZvKCduYW1lJykgYXMgc3RyaW5nXG4gICAgdGhpcy5iaXJ0aGRhdGUgPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ2JpcnRoZGF0ZScpIGFzIHN0cmluZ1xuICAgIHRoaXMuem9uZWluZm8gPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ3pvbmVpbmZvJykgYXMgc3RyaW5nXG4gICAgdGhpcy5sb2NhbGUgPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ2xvY2FsZScpIGFzIHN0cmluZ1xuICAgIHRoaXMuc3ViID0gdGhpcy5nZXRMb2NhbFVzZXJJbmZvKCdzdWInKSBhcyBzdHJpbmdcbiAgICB0aGlzLmNyZWF0ZWRGcm9tID0gdGhpcy5nZXRMb2NhbFVzZXJJbmZvKCdjcmVhdGVkX2Zyb20nKSBhcyBzdHJpbmdcbiAgICB0aGlzLnByb3ZpZGVycyA9IHRoaXMuZ2V0TG9jYWxVc2VySW5mbygncHJvdmlkZXJzJykgYXMgYW55XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPluacrOWcsOeUqOaIt+S/oeaBry3lvILmraVcbiAgICovXG4gIHB1YmxpYyBhc3luYyBjaGVja0xvY2FsSW5mb0FzeW5jKCkge1xuICAgIHRoaXMudWlkID0gYXdhaXQgdGhpcy5nZXRMb2NhbFVzZXJJbmZvQXN5bmMoJ3VpZCcpXG4gICAgdGhpcy5nZW5kZXIgPSBhd2FpdCB0aGlzLmdldExvY2FsVXNlckluZm9Bc3luYygnZ2VuZGVyJylcbiAgICB0aGlzLnBpY3R1cmUgPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ3BpY3R1cmUnKSBhcyBzdHJpbmdcbiAgICB0aGlzLmVtYWlsID0gYXdhaXQgdGhpcy5nZXRMb2NhbFVzZXJJbmZvQXN5bmMoJ2VtYWlsJylcbiAgICB0aGlzLmVtYWlsVmVyaWZpZWQgPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ2VtYWlsX3ZlcmlmaWVkJykgYXMgYm9vbGVhblxuICAgIHRoaXMucGhvbmVOdW1iZXIgPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ3Bob25lX251bWJlcicpIGFzIHN0cmluZ1xuICAgIHRoaXMudXNlcm5hbWUgPSBhd2FpdCB0aGlzLmdldExvY2FsVXNlckluZm9Bc3luYygndXNlcm5hbWUnKVxuICAgIHRoaXMubmFtZSA9IHRoaXMuZ2V0TG9jYWxVc2VySW5mbygnbmFtZScpIGFzIHN0cmluZ1xuICAgIHRoaXMuYmlydGhkYXRlID0gdGhpcy5nZXRMb2NhbFVzZXJJbmZvKCdiaXJ0aGRhdGUnKSBhcyBzdHJpbmdcbiAgICB0aGlzLnpvbmVpbmZvID0gdGhpcy5nZXRMb2NhbFVzZXJJbmZvKCd6b25laW5mbycpIGFzIHN0cmluZ1xuICAgIHRoaXMubG9jYWxlID0gdGhpcy5nZXRMb2NhbFVzZXJJbmZvKCdsb2NhbGUnKSBhcyBzdHJpbmdcbiAgICB0aGlzLnN1YiA9IHRoaXMuZ2V0TG9jYWxVc2VySW5mbygnc3ViJykgYXMgc3RyaW5nXG4gICAgdGhpcy5jcmVhdGVkRnJvbSA9IHRoaXMuZ2V0TG9jYWxVc2VySW5mbygnY3JlYXRlZF9mcm9tJykgYXMgc3RyaW5nXG4gICAgdGhpcy5wcm92aWRlcnMgPSB0aGlzLmdldExvY2FsVXNlckluZm8oJ3Byb3ZpZGVycycpIGFzIGFueVxuICB9XG5cblxuICAvKipcbiAgICog5pu05paw55So5oi35L+h5oGvXG4gICAqIEBwYXJhbSB1c2VySW5mb1xuICAgKi9cbiAgQGNhdGNoRXJyb3JzRGVjb3JhdG9yKHtcbiAgICB0aXRsZTogJ+abtOaWsOeUqOaIt+S/oeaBr+Wksei0pScsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgICfor7fnoa7orqTku6XkuIvlkITpobnvvJonLFxuICAgICAgJyAgMSAtIOiwg+eUqCBVc2VyLnVwZGF0ZSgpIOeahOivreazleaIluWPguaVsOaYr+WQpuato+ehricsXG4gICAgICAnICAyIC0g55So5oi35L+h5oGv5Lit5piv5ZCm5YyF5ZCr6Z2e5rOV5YC8JyxcbiAgICAgIGDlpoLmnpzpl67popjkvp3nhLblrZjlnKjvvIzlu7rorq7liLDlrpjmlrnpl67nrZTnpL7ljLrmj5Dpl67miJblr7vmib7luK7liqnvvJoke0NPTU1VTklUWV9TSVRFX1VSTH1gLFxuICAgIF0sXG4gIH0pXG4gIHB1YmxpYyBhc3luYyB1cGRhdGUodXNlckluZm86IGF1dGhNb2RlbHMuVXNlclByb2ZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBjb25zdCB7IG5hbWUsIGdlbmRlciwgYXZhdGFyVXJsLCBwcm92aW5jZSwgY291bnRyeSwgY2l0eSB9ID0gdXNlckluZm9cbiAgICBjb25zdCBuZXdVc2VySW5mbyA9IGF3YWl0IHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLnNldFVzZXJQcm9maWxlKHsgLi4udXNlckluZm8gfSlcblxuICAgIHRoaXMuc2V0TG9jYWxVc2VySW5mbyhuZXdVc2VySW5mbylcbiAgfVxuICAvKipcbiAgICog5pu05paw5a+G56CBXG4gICAqIEBwYXJhbSBuZXdQYXNzd29yZFxuICAgKiBAcGFyYW0gb2xkUGFzc3dvcmRcbiAgICovXG4gIEBjYXRjaEVycm9yc0RlY29yYXRvcih7XG4gICAgdGl0bGU6ICfmm7TmlrDlr4bnoIHlpLHotKUnLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICAn6K+356Gu6K6k5Lul5LiL5ZCE6aG577yaJyxcbiAgICAgICcgIDEgLSDosIPnlKggVXNlci51cGRhdGVQYXNzd29yZCgpIOeahOivreazleaIluWPguaVsOaYr+WQpuato+ehricsXG4gICAgICAnICAzIC0g5paw5a+G56CB5Lit5piv5ZCm5YyF5ZCr6Z2e5rOV5a2X56ymJyxcbiAgICAgIGDlpoLmnpzpl67popjkvp3nhLblrZjlnKjvvIzlu7rorq7liLDlrpjmlrnpl67nrZTnpL7ljLrmj5Dpl67miJblr7vmib7luK7liqnvvJoke0NPTU1VTklUWV9TSVRFX1VSTH1gLFxuICAgIF0sXG4gIH0pXG4gIHB1YmxpYyB1cGRhdGVQYXNzd29yZChuZXdQYXNzd29yZDogc3RyaW5nLCBvbGRQYXNzd29yZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLnVwZGF0ZVBhc3N3b3JkQnlPbGQoe1xuICAgICAgb2xkX3Bhc3N3b3JkOiBvbGRQYXNzd29yZCxcbiAgICAgIG5ld19wYXNzd29yZDogbmV3UGFzc3dvcmQsXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrDnlKjmiLflkI1cbiAgICogQHBhcmFtIHVzZXJuYW1lXG4gICAqL1xuICBAY2F0Y2hFcnJvcnNEZWNvcmF0b3Ioe1xuICAgIHRpdGxlOiAn5pu05paw55So5oi35ZCN5aSx6LSlJyxcbiAgICBtZXNzYWdlczogW1xuICAgICAgJ+ivt+ehruiupOS7peS4i+WQhOmhue+8micsXG4gICAgICAnICAxIC0g6LCD55SoIFVzZXIudXBkYXRlVXNlcm5hbWUoKSDnmoTor63ms5XmiJblj4LmlbDmmK/lkKbmraPnoa4nLFxuICAgICAgJyAgMiAtIOW9k+WJjeeOr+Wig+aYr+WQpuW8gOmAmuS6hueUqOaIt+WQjeWvhueggeeZu+W9lScsXG4gICAgICBg5aaC5p6c6Zeu6aKY5L6d54S25a2Y5Zyo77yM5bu66K6u5Yiw5a6Y5pa56Zeu562U56S+5Yy65o+Q6Zeu5oiW5a+75om+5biu5Yqp77yaJHtDT01NVU5JVFlfU0lURV9VUkx9YCxcbiAgICBdLFxuICB9KVxuICBwdWJsaWMgdXBkYXRlVXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgdXNlcm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvd0Vycm9yKEVSUk9SUy5JTlZBTElEX1BBUkFNUywgJ3VzZXJuYW1lIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSh7XG4gICAgICB1c2VybmFtZSxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOWIt+aWsOacrOWcsOeUqOaIt+S/oeaBr+OAguW9k+eUqOaIt+WcqOWFtuS7luWuouaIt+err+abtOaWsOeUqOaIt+S/oeaBr+S5i+WQju+8jOWPr+S7peiwg+eUqOatpOaOpeWPo+WQjOatpeabtOaWsOS5i+WQjueahOS/oeaBr+OAglxuICAgKi9cbiAgQGNhdGNoRXJyb3JzRGVjb3JhdG9yKHtcbiAgICB0aXRsZTogJ+WIt+aWsOacrOWcsOeUqOaIt+S/oeaBr+Wksei0pScsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgICfor7fnoa7orqTku6XkuIvlkITpobnvvJonLFxuICAgICAgJyAgMSAtIOiwg+eUqCBVc2VyLnJlZnJlc2goKSDnmoTor63ms5XmiJblj4LmlbDmmK/lkKbmraPnoa4nLFxuICAgICAgYOWmguaenOmXrumimOS+neeEtuWtmOWcqO+8jOW7uuiuruWIsOWumOaWuemXruetlOekvuWMuuaPkOmXruaIluWvu+aJvuW4ruWKqe+8miR7Q09NTVVOSVRZX1NJVEVfVVJMfWAsXG4gICAgXSxcbiAgfSlcbiAgcHVibGljIGFzeW5jIHJlZnJlc2goKTogUHJvbWlzZTxJVXNlckluZm8+IHtcbiAgICBjb25zdCBuZXdVc2VySW5mbyA9IGF3YWl0IHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLmdldFVzZXJJbmZvKClcbiAgICB0aGlzLnNldExvY2FsVXNlckluZm8obmV3VXNlckluZm8pXG4gICAgcmV0dXJuIG5ld1VzZXJJbmZvXG4gIH1cblxuICBwcml2YXRlIGdldExvY2FsVXNlckluZm8oa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICBjb25zdCB7IHVzZXJJbmZvS2V5IH0gPSB0aGlzLmNhY2hlLmtleXNcbiAgICBjb25zdCB1c2VySW5mbyA9IHRoaXMuY2FjaGUuZ2V0U3RvcmUodXNlckluZm9LZXkpXG4gICAgcmV0dXJuIHVzZXJJbmZvW2tleV1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0TG9jYWxVc2VySW5mb0FzeW5jKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB7IHVzZXJJbmZvS2V5IH0gPSB0aGlzLmNhY2hlLmtleXNcbiAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuY2FjaGUuZ2V0U3RvcmVBc3luYyh1c2VySW5mb0tleSlcbiAgICByZXR1cm4gdXNlckluZm9ba2V5XVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVc2VySW5mbygpIHtcbiAgICBjb25zdCB7IHVzZXJJbmZvS2V5IH0gPSB0aGlzLmNhY2hlLmtleXNcbiAgICBjb25zdCB1c2VySW5mbyA9IHRoaXMuY2FjaGUuZ2V0U3RvcmUodXNlckluZm9LZXkpXG4gICAgO1tcbiAgICAgICd1aWQnLFxuICAgICAgJ2VtYWlsJyxcbiAgICAgICduYW1lJyxcbiAgICAgICdnZW5kZXInLFxuICAgICAgJ3BpY3R1cmUnLFxuICAgICAgJ2VtYWlsX3ZlcmlmaWVkJyxcbiAgICAgICdwaG9uZV9udW1iZXInLFxuICAgICAgJ2JpcnRoZGF0ZScsXG4gICAgICAnem9uZWluZm8nLFxuICAgICAgJ2xvY2FsZScsXG4gICAgICAnc3ViJyxcbiAgICAgICdjcmVhdGVkX2Zyb20nLFxuICAgICAgJ3Byb3ZpZGVycycsXG4gICAgICAndXNlcm5hbWUnLFxuICAgIF0uZm9yRWFjaCgoaW5mb0tleSkgPT4ge1xuICAgICAgdGhpc1tpbmZvS2V5XSA9IHVzZXJJbmZvW2luZm9LZXldXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9jYWxVc2VySW5mbyh1c2VySW5mbzogYW55KSB7XG4gICAgY29uc3QgeyB1c2VySW5mb0tleSB9ID0gdGhpcy5jYWNoZS5rZXlzXG4gICAgdGhpcy5jYWNoZS5zZXRTdG9yZSh1c2VySW5mb0tleSwgdXNlckluZm8pXG4gICAgdGhpcy5zZXRVc2VySW5mbygpXG4gIH1cbn1cbmludGVyZmFjZSBJTG9naW5TdGF0ZU9wdGlvbnMgZXh0ZW5kcyBJVXNlck9wdGlvbnMge1xuICBlbnZJZDogc3RyaW5nXG59XG5leHBvcnQgY2xhc3MgTG9naW5TdGF0ZSBpbXBsZW1lbnRzIElMb2dpblN0YXRlIHtcbiAgcHVibGljIHVzZXI6IElVc2VyO1xuICBwdWJsaWMgb2F1dGhMb2dpblN0YXRlOiBhbnk7XG5cbiAgcHJpdmF0ZSBvYXV0aEluc3RhbmNlOiBDbG91ZGJhc2VPQXV0aDtcbiAgcHJpdmF0ZSBjYWNoZTogSUNsb3VkYmFzZUNhY2hlO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElMb2dpblN0YXRlT3B0aW9ucykge1xuICAgIGNvbnN0IHsgZW52SWQsIGNhY2hlLCBvYXV0aEluc3RhbmNlIH0gPSBvcHRpb25zXG4gICAgaWYgKCFlbnZJZCkge1xuICAgICAgdGhyb3dFcnJvcihFUlJPUlMuSU5WQUxJRF9QQVJBTVMsICdlbnZJZCBpcyBub3QgZGVmaW5lZCcpXG4gICAgfVxuICAgIHRoaXMuY2FjaGUgPSBjYWNoZVxuICAgIHRoaXMub2F1dGhJbnN0YW5jZSA9IG9hdXRoSW5zdGFuY2VcblxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKHtcbiAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgb2F1dGhJbnN0YW5jZSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGNoZWNrTG9jYWxTdGF0ZSgpIHtcbiAgICB0aGlzLm9hdXRoTG9naW5TdGF0ZSA9IHRoaXMub2F1dGhJbnN0YW5jZT8uYXV0aEFwaS5oYXNMb2dpblN0YXRlU3luYygpXG4gICAgdGhpcy51c2VyLmNoZWNrTG9jYWxJbmZvKClcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjaGVja0xvY2FsU3RhdGVBc3luYygpIHtcbiAgICBhd2FpdCB0aGlzLm9hdXRoSW5zdGFuY2U/LmF1dGhBcGkuZ2V0TG9naW5TdGF0ZSgpXG4gICAgYXdhaXQgdGhpcy51c2VyLmNoZWNrTG9jYWxJbmZvQXN5bmMoKVxuICB9XG59XG5cbmNsYXNzIEF1dGgge1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogSUNsb3VkYmFzZUF1dGhDb25maWc7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2FjaGU6IElDbG91ZGJhc2VDYWNoZTtcblxuICBwcml2YXRlIG9hdXRoSW5zdGFuY2U6IENsb3VkYmFzZU9BdXRoO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogSUNsb3VkYmFzZUF1dGhDb25maWdcbiAgJiB7IGNhY2hlOiBJQ2xvdWRiYXNlQ2FjaGUsIHJlcXVlc3Q/OiBJQ2xvdWRiYXNlUmVxdWVzdCwgcnVudGltZT86IHN0cmluZyB9KSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICB0aGlzLmNhY2hlID0gY29uZmlnLmNhY2hlXG4gICAgdGhpcy5vYXV0aEluc3RhbmNlID0gY29uZmlnLm9hdXRoSW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAqIOe7keWumuaJi+acuuWPt1xuICAqIEBwYXJhbSBwaG9uZU51bWJlclxuICAqIEBwYXJhbSBwaG9uZUNvZGVcbiAgKi9cbiAgQGNhdGNoRXJyb3JzRGVjb3JhdG9yKHtcbiAgICB0aXRsZTogJ+e7keWumuaJi+acuuWPt+Wksei0pScsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgICfor7fnoa7orqTku6XkuIvlkITpobnvvJonLFxuICAgICAgJyAgMSAtIOiwg+eUqCBhdXRoKCkuYmluZFBob25lTnVtYmVyKCkg55qE6K+t5rOV5oiW5Y+C5pWw5piv5ZCm5q2j56GuJyxcbiAgICAgICcgIDIgLSDlvZPliY3njq/looPmmK/lkKblvIDpgJrkuobnn63kv6Hpqozor4HnoIHnmbvlvZUnLFxuICAgICAgYOWmguaenOmXrumimOS+neeEtuWtmOWcqO+8jOW7uuiuruWIsOWumOaWuemXruetlOekvuWMuuaPkOmXruaIluWvu+aJvuW4ruWKqe+8miR7Q09NTVVOSVRZX1NJVEVfVVJMfWAsXG4gICAgXSxcbiAgfSlcbiAgcHVibGljIGFzeW5jIGJpbmRQaG9uZU51bWJlcihwYXJhbXM6IGF1dGhNb2RlbHMuQmluZFBob25lUmVxdWVzdCkge1xuICAgIHJldHVybiB0aGlzLm9hdXRoSW5zdGFuY2UuYXV0aEFwaS5iaW5kUGhvbmUocGFyYW1zKVxuICB9XG5cbiAgLyoqXG4gICAqIOino+e7keS4ieaWuee7keWumlxuICAgKiBAcGFyYW0gbG9naW5UeXBlXG4gICAqL1xuICBAY2F0Y2hFcnJvcnNEZWNvcmF0b3Ioe1xuICAgIHRpdGxlOiAn6Kej6Zmk5LiJ5pa557uR5a6a5aSx6LSlJyxcbiAgICBtZXNzYWdlczogW1xuICAgICAgJ+ivt+ehruiupOS7peS4i+WQhOmhue+8micsXG4gICAgICAnICAxIC0g6LCD55SoIGF1dGgoKS51bmJpbmRQcm92aWRlcigpIOeahOivreazleaIluWPguaVsOaYr+WQpuato+ehricsXG4gICAgICAnICAyIC0g5b2T5YmN6LSm5oi35piv5ZCm5bey57uP5LiO5q2k55m75b2V5pa55byP6Kej57uRJyxcbiAgICAgIGDlpoLmnpzpl67popjkvp3nhLblrZjlnKjvvIzlu7rorq7liLDlrpjmlrnpl67nrZTnpL7ljLrmj5Dpl67miJblr7vmib7luK7liqnvvJoke0NPTU1VTklUWV9TSVRFX1VSTH1gLFxuICAgIF0sXG4gIH0pXG4gIHB1YmxpYyBhc3luYyB1bmJpbmRQcm92aWRlcihwYXJhbXM6IGF1dGhNb2RlbHMuVW5iaW5kUHJvdmlkZXJSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLnVuYmluZFByb3ZpZGVyKHBhcmFtcylcbiAgfVxuXG4gIC8qKlxuICog5pu05paw6YKu566x5Zyw5Z2AXG4gKiBAcGFyYW0gZW1haWxcbiAqIEBwYXJhbSBzdWRvX3Rva2VuXG4gKiBAcGFyYW0gdmVyaWZpY2F0aW9uX3Rva2VuXG4gKi9cbiAgQGNhdGNoRXJyb3JzRGVjb3JhdG9yKHtcbiAgICB0aXRsZTogJ+e7keWumumCrueuseWcsOWdgOWksei0pScsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgICfor7fnoa7orqTku6XkuIvlkITpobnvvJonLFxuICAgICAgJyAgMSAtIOiwg+eUqCBhdXRoKCkuYmluZEVtYWlsKCkg55qE6K+t5rOV5oiW5Y+C5pWw5piv5ZCm5q2j56GuJyxcbiAgICAgICcgIDIgLSDlvZPliY3njq/looPmmK/lkKblvIDpgJrkuobpgq7nrrHlr4bnoIHnmbvlvZUnLFxuICAgICAgYOWmguaenOmXrumimOS+neeEtuWtmOWcqO+8jOW7uuiuruWIsOWumOaWuemXruetlOekvuWMuuaPkOmXruaIluWvu+aJvuW4ruWKqe+8miR7Q09NTVVOSVRZX1NJVEVfVVJMfWAsXG4gICAgXSxcbiAgfSlcbiAgcHVibGljIGJpbmRFbWFpbChwYXJhbXM6IGF1dGhNb2RlbHMuQmluZEVtYWlsUmVxdWVzdCkge1xuICAgIHJldHVybiB0aGlzLm9hdXRoSW5zdGFuY2UuYXV0aEFwaS5iaW5kRW1haWwocGFyYW1zKVxuICB9XG5cbiAgLyoqXG4gICAqIHZlcmlmeVxuICAgKiBAcGFyYW0ge2F1dGhNb2RlbHMuVmVyaWZ5UmVxdWVzdH0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGF1dGhNb2RlbHMuVmVyaWZ5UmVzcG9uc2U+fVxuICAgKiBAbWVtYmVyb2YgVXNlclxuICAgKi9cbiAgQGNhdGNoRXJyb3JzRGVjb3JhdG9yKHtcbiAgICB0aXRsZTogJ+mqjOivgeeggemqjOivgeWksei0pScsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgICfor7fnoa7orqTku6XkuIvlkITpobnvvJonLFxuICAgICAgJyAgMSAtIOiwg+eUqCBhdXRoKCkudmVyaWZ5KCkg55qE6K+t5rOV5oiW5Y+C5pWw5piv5ZCm5q2j56GuJyxcbiAgICAgICcgIDIgLSDlvZPliY3njq/looPmmK/lkKblvIDpgJrkuobmiYvmnLrpqozor4HnoIEv6YKu566x55m75b2VJyxcbiAgICAgIGDlpoLmnpzpl67popjkvp3nhLblrZjlnKjvvIzlu7rorq7liLDlrpjmlrnpl67nrZTnpL7ljLrmj5Dpl67miJblr7vmib7luK7liqnvvJoke0NPTU1VTklUWV9TSVRFX1VSTH1gLFxuICAgIF0sXG4gIH0pXG4gIHB1YmxpYyBhc3luYyB2ZXJpZnkocGFyYW1zOiBhdXRoTW9kZWxzLlZlcmlmeVJlcXVlc3QpOiBQcm9taXNlPGF1dGhNb2RlbHMuVmVyaWZ5UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5vYXV0aEluc3RhbmNlLmF1dGhBcGkudmVyaWZ5KHBhcmFtcylcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bpqozor4HnoIFcbiAgICogQHBhcmFtIHthdXRoTW9kZWxzLkdldFZlcmlmaWNhdGlvblJlcXVlc3R9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhdXRoTW9kZWxzLkdldFZlcmlmaWNhdGlvblJlc3BvbnNlPn1cbiAgICogQG1lbWJlcm9mIFVzZXJcbiAgICovXG4gIEBjYXRjaEVycm9yc0RlY29yYXRvcih7XG4gICAgdGl0bGU6ICfojrflj5bpqozor4HnoIHlpLHotKUnLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICAn6K+356Gu6K6k5Lul5LiL5ZCE6aG577yaJyxcbiAgICAgICcgIDEgLSDosIPnlKggYXV0aCgpLmdldFZlcmlmaWNhdGlvbigpIOeahOivreazleaIluWPguaVsOaYr+WQpuato+ehricsXG4gICAgICAnICAyIC0g5b2T5YmN546v5aKD5piv5ZCm5byA6YCa5LqG5omL5py66aqM6K+B56CBL+mCrueuseeZu+W9lScsXG4gICAgICBg5aaC5p6c6Zeu6aKY5L6d54S25a2Y5Zyo77yM5bu66K6u5Yiw5a6Y5pa56Zeu562U56S+5Yy65o+Q6Zeu5oiW5a+75om+5biu5Yqp77yaJHtDT01NVU5JVFlfU0lURV9VUkx9YCxcbiAgICBdLFxuICB9KVxuICBwdWJsaWMgYXN5bmMgZ2V0VmVyaWZpY2F0aW9uKHBhcmFtczogYXV0aE1vZGVscy5HZXRWZXJpZmljYXRpb25SZXF1ZXN0KTogUHJvbWlzZTxhdXRoTW9kZWxzLkdldFZlcmlmaWNhdGlvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLmdldFZlcmlmaWNhdGlvbihwYXJhbXMpXG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5b2T5YmN55m75b2V55qE55So5oi35L+h5oGvLeWQjOatpVxuICAgKi9cbiAgZ2V0IGN1cnJlbnRVc2VyKCkge1xuICAgIGlmICh0aGlzLmNhY2hlLm1vZGUgPT09ICdhc3luYycpIHtcbiAgICAgIC8vIGFzeW5jIHN0b3JhZ2XnmoTlubPlj7DosIPnlKjmraRBUEnmj5DnpLpcbiAgICAgIHByaW50V2FybihcbiAgICAgICAgRVJST1JTLklOVkFMSURfT1BFUkFUSU9OLFxuICAgICAgICAnY3VycmVudCBwbGF0Zm9ybVxcJ3Mgc3RvcmFnZSBpcyBhc3luY2hyb25vdXMsIHBsZWFzZSB1c2UgZ2V0Q3VycmVudFVzZXIgaW5zdGVlZCdcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxvZ2luU3RhdGUgPSB0aGlzLmhhc0xvZ2luU3RhdGUoKVxuXG4gICAgaWYgKGxvZ2luU3RhdGUpIHtcbiAgICAgIHJldHVybiBsb2dpblN0YXRlLnVzZXIgfHwgbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluW9k+WJjeeZu+W9leeahOeUqOaIt+S/oeaBry3lvILmraVcbiAgICovXG4gIEBjYXRjaEVycm9yc0RlY29yYXRvcih7XG4gICAgdGl0bGU6ICfojrflj5bnlKjmiLfkv6Hmga/lpLHotKUnLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICAn6K+356Gu6K6k5Lul5LiL5ZCE6aG577yaJyxcbiAgICAgICcgIDEgLSDosIPnlKggYXV0aCgpLmdldEN1cnJlblVzZXIoKSDnmoTor63ms5XmiJblj4LmlbDmmK/lkKbmraPnoa4nLFxuICAgICAgYOWmguaenOmXrumimOS+neeEtuWtmOWcqO+8jOW7uuiuruWIsOWumOaWuemXruetlOekvuWMuuaPkOmXruaIluWvu+aJvuW4ruWKqe+8miR7Q09NTVVOSVRZX1NJVEVfVVJMfWAsXG4gICAgXSxcbiAgfSlcbiAgcHVibGljIGFzeW5jIGdldEN1cnJlbnRVc2VyKCkge1xuICAgIGNvbnN0IGxvZ2luU3RhdGUgPSBhd2FpdCB0aGlzLmdldExvZ2luU3RhdGUoKVxuICAgIGlmIChsb2dpblN0YXRlKSB7XG4gICAgICBhd2FpdCBsb2dpblN0YXRlLnVzZXIuY2hlY2tMb2NhbEluZm9Bc3luYygpXG4gICAgICByZXR1cm4gbG9naW5TdGF0ZS51c2VyIHx8IG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG5cbiAgLyoqXG4gICAqIOWMv+WQjeeZu+W9lVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2dpblN0YXRlPn1cbiAgICogQG1lbWJlcm9mIEF1dGhcbiAgICovXG4gIEBjYXRjaEVycm9yc0RlY29yYXRvcih7XG4gICAgdGl0bGU6ICfljL/lkI3nmbvlvZXlpLHotKUnLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICAn6K+356Gu6K6k5Lul5LiL5ZCE6aG577yaJyxcbiAgICAgICcgIDEgLSDlvZPliY3njq/looPmmK/lkKblvIDlkK/kuobljL/lkI3nmbvlvZUnLFxuICAgICAgJyAgMiAtIOiwg+eUqCBhdXRoKCkuc2lnbkluQW5vbnltb3VzbHkoKSDnmoTor63ms5XmiJblj4LmlbDmmK/lkKbmraPnoa4nLFxuICAgICAgYOWmguaenOmXrumimOS+neeEtuWtmOWcqO+8jOW7uuiuruWIsOWumOaWuemXruetlOekvuWMuuaPkOmXruaIluWvu+aJvuW4ruWKqe+8miR7Q09NTVVOSVRZX1NJVEVfVVJMfWAsXG4gICAgXSxcbiAgfSlcbiAgcHVibGljIGFzeW5jIHNpZ25JbkFub255bW91c2x5KGRhdGE6IHtcbiAgICBwcm92aWRlcl90b2tlbj86IHN0cmluZ1xuICB9ID0ge30pOiBQcm9taXNlPExvZ2luU3RhdGU+IHtcbiAgICBhd2FpdCB0aGlzLm9hdXRoSW5zdGFuY2UuYXV0aEFwaS5zaWduSW5Bbm9ueW1vdXNseShkYXRhKVxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUxvZ2luU3RhdGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruiOt+WPluiHquWumuS5ieeZu+W9lSB0aWNrZXQg5Ye95pWwXG4gICAqIEBwYXJhbSB7YXV0aE1vZGVscy5HZXRDdXN0b21TaWduVGlja2V0Rm59IGdldFRpY2tGblxuICAgKiBAbWVtYmVyb2YgQXV0aFxuICAgKi9cbiAgcHVibGljIHNldEN1c3RvbVNpZ25GdW5jKGdldFRpY2tGbjogYXV0aE1vZGVscy5HZXRDdXN0b21TaWduVGlja2V0Rm4pOiB2b2lkIHtcbiAgICB0aGlzLm9hdXRoSW5zdGFuY2UuYXV0aEFwaS5zZXRDdXN0b21TaWduRnVuYyhnZXRUaWNrRm4pXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8TG9naW5TdGF0ZT59XG4gICAqIEBtZW1iZXJvZiBBdXRoXG4gICAqL1xuICBAY2F0Y2hFcnJvcnNEZWNvcmF0b3Ioe1xuICAgIHRpdGxlOiAn6Ieq5a6a5LmJ55m75b2V5aSx6LSlJyxcbiAgICBtZXNzYWdlczogW1xuICAgICAgJ+ivt+ehruiupOS7peS4i+WQhOmhue+8micsXG4gICAgICAnICAxIC0g5b2T5YmN546v5aKD5piv5ZCm5byA5ZCv5LqG6Ieq5a6a5LmJ55m75b2VJyxcbiAgICAgICcgIDIgLSDosIPnlKggYXV0aCgpLnNpZ25JbldpdGhDdXN0b21UaWNrZXQoKSDnmoTor63ms5XmiJblj4LmlbDmmK/lkKbmraPnoa4nLFxuICAgICAgJyAgMyAtIHRpY2tldCDmmK/lkKblvZLlsZ7kuo7lvZPliY3njq/looMnLFxuICAgICAgJyAgNCAtIOWIm+W7uiB0aWNrZXQg55qE6Ieq5a6a5LmJ55m75b2V56eB6ZKl5piv5ZCm6L+H5pyfJyxcbiAgICAgIGDlpoLmnpzpl67popjkvp3nhLblrZjlnKjvvIzlu7rorq7liLDlrpjmlrnpl67nrZTnpL7ljLrmj5Dpl67miJblr7vmib7luK7liqnvvJoke0NPTU1VTklUWV9TSVRFX1VSTH1gLFxuICAgIF0sXG4gIH0pXG4gIHB1YmxpYyBhc3luYyBzaWduSW5XaXRoQ3VzdG9tVGlja2V0KCk6IFByb21pc2U8TG9naW5TdGF0ZT4ge1xuICAgIGF3YWl0IHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLnNpZ25JbldpdGhDdXN0b21UaWNrZXQoKVxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUxvZ2luU3RhdGUoKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7YXV0aE1vZGVscy5TaWduSW5SZXF1ZXN0fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8TG9naW5TdGF0ZT59XG4gICAqIEBtZW1iZXJvZiBBdXRoXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2lnbkluKHBhcmFtczogYXV0aE1vZGVscy5TaWduSW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblN0YXRlPiB7XG4gICAgYXdhaXQgdGhpcy5vYXV0aEluc3RhbmNlLmF1dGhBcGkuc2lnbkluKHBhcmFtcylcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVMb2dpblN0YXRlKClcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge2F1dGhNb2RlbHMuU2lnblVwUmVxdWVzdH0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExvZ2luU3RhdGU+fVxuICAgKiBAbWVtYmVyb2YgQXV0aFxuICAgKi9cbiAgQGNhdGNoRXJyb3JzRGVjb3JhdG9yKHtcbiAgICB0aXRsZTogJ+azqOWGjOWksei0pScsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgICfor7fnoa7orqTku6XkuIvlkITpobnvvJonLFxuICAgICAgJyAgMSAtIOW9k+WJjeeOr+Wig+aYr+WQpuW8gOWQr+S6huaMh+WumueZu+W9leaWueW8jycsXG4gICAgICAnICAyIC0g6LCD55SoIGF1dGgoKS5zaWduVXAoKSDnmoTor63ms5XmiJblj4LmlbDmmK/lkKbmraPnoa4nLFxuICAgICAgYOWmguaenOmXrumimOS+neeEtuWtmOWcqO+8jOW7uuiuruWIsOWumOaWuemXruetlOekvuWMuuaPkOmXruaIluWvu+aJvuW4ruWKqe+8miR7Q09NTVVOSVRZX1NJVEVfVVJMfWAsXG4gICAgXSxcbiAgfSlcbiAgcHVibGljIGFzeW5jIHNpZ25VcChwYXJhbXM6IGF1dGhNb2RlbHMuU2lnblVwUmVxdWVzdCk6IFByb21pc2U8TG9naW5TdGF0ZT4ge1xuICAgIGF3YWl0IHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLnNpZ25VcChwYXJhbXMpXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTG9naW5TdGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICog6K6+572u5a+G56CBXG4gICAqIEBwYXJhbSB7YXV0aE1vZGVscy5TZXRQYXNzd29yZFJlcXVlc3R9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlcm9mIEF1dGhcbiAgICovXG4gIHB1YmxpYyBhc3luYyBzZXRQYXNzd29yZChwYXJhbXM6IGF1dGhNb2RlbHMuU2V0UGFzc3dvcmRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLnNldFBhc3N3b3JkKHBhcmFtcylcbiAgfVxuXG4gIC8qKlxuICAgKiDmo4DmtYvnlKjmiLflkI3mmK/lkKblt7Lnu4/ljaDnlKhcbiAgICogQHBhcmFtIHVzZXJuYW1lXG4gICAqL1xuICBAY2F0Y2hFcnJvcnNEZWNvcmF0b3Ioe1xuICAgIHRpdGxlOiAn6I635Y+W55So5oi35piv5ZCm6KKr5Y2g55So5aSx6LSlJyxcbiAgICBtZXNzYWdlczogW1xuICAgICAgJ+ivt+ehruiupOS7peS4i+WQhOmhue+8micsXG4gICAgICAnICAxIC0g6LCD55SoIGF1dGgoKS5pc1VzZXJuYW1lUmVnaXN0ZXJlZCgpIOeahOivreazleaIluWPguaVsOaYr+WQpuato+ehricsXG4gICAgICBg5aaC5p6c6Zeu6aKY5L6d54S25a2Y5Zyo77yM5bu66K6u5Yiw5a6Y5pa56Zeu562U56S+5Yy65o+Q6Zeu5oiW5a+75om+5biu5Yqp77yaJHtDT01NVU5JVFlfU0lURV9VUkx9YCxcbiAgICBdLFxuICB9KVxuICBwdWJsaWMgYXN5bmMgaXNVc2VybmFtZVJlZ2lzdGVyZWQodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICh0eXBlb2YgdXNlcm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvd0Vycm9yKEVSUk9SUy5JTlZBTElEX1BBUkFNUywgJ3VzZXJuYW1lIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgZXhpc3QgfSA9IGF3YWl0IHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLmNoZWNrSWZVc2VyRXhpc3QoeyB1c2VybmFtZSB9KVxuICAgIHJldHVybiBleGlzdFxuICB9XG5cbiAgLyoqXG4gICAqIOeZu+WHulxuICAgKi9cbiAgQGNhdGNoRXJyb3JzRGVjb3JhdG9yKHtcbiAgICB0aXRsZTogJ+eUqOaIt+eZu+WHuuWksei0pScsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgICfor7fnoa7orqTku6XkuIvlkITpobnvvJonLFxuICAgICAgJyAgMSAtIOiwg+eUqCBhdXRoKCkuc2lnbk91dCgpIOeahOivreazleaIluWPguaVsOaYr+WQpuato+ehricsXG4gICAgICAnICAyIC0g5b2T5YmN55So5oi35piv5ZCm5Li65Yy/5ZCN55m75b2V77yI5Yy/5ZCN55m75b2V5LiN5pSv5oyBc2lnbk91dO+8iScsXG4gICAgICBg5aaC5p6c6Zeu6aKY5L6d54S25a2Y5Zyo77yM5bu66K6u5Yiw5a6Y5pa56Zeu562U56S+5Yy65o+Q6Zeu5oiW5a+75om+5biu5Yqp77yaJHtDT01NVU5JVFlfU0lURV9VUkx9YCxcbiAgICBdLFxuICB9KVxuICBwdWJsaWMgYXN5bmMgc2lnbk91dCgpIHtcbiAgICBjb25zdCB7IHVzZXJJbmZvS2V5IH0gPSB0aGlzLmNhY2hlLmtleXNcbiAgICBhd2FpdCB0aGlzLm9hdXRoSW5zdGFuY2UuYXV0aEFwaS5zaWduT3V0KClcbiAgICBhd2FpdCB0aGlzLmNhY2hlLnJlbW92ZVN0b3JlQXN5bmModXNlckluZm9LZXkpXG4gICAgZXZlbnRCdXMuZmlyZShFVkVOVFMuTE9HSU5fU1RBVEVfQ0hBTkdFRClcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmnKzlnLDnmbvlvZXmgIEt5ZCM5q2lXG4gICAqL1xuICBwdWJsaWMgaGFzTG9naW5TdGF0ZSgpOiBMb2dpblN0YXRlIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuY2FjaGUubW9kZSA9PT0gJ2FzeW5jJykge1xuICAgICAgLy8gYXN5bmMgc3RvcmFnZeeahOW5s+WPsOiwg+eUqOatpEFQSeaPkOekulxuICAgICAgcHJpbnRXYXJuKFxuICAgICAgICBFUlJPUlMuSU5WQUxJRF9PUEVSQVRJT04sXG4gICAgICAgICdjdXJyZW50IHBsYXRmb3JtXFwncyBzdG9yYWdlIGlzIGFzeW5jaHJvbm91cywgcGxlYXNlIHVzZSBnZXRMb2dpblN0YXRlIGluc3RlZWQnXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvYXV0aExvZ2luU3RhdGUgPSB0aGlzLm9hdXRoSW5zdGFuY2U/LmF1dGhBcGkuaGFzTG9naW5TdGF0ZVN5bmMoKVxuICAgIGlmIChvYXV0aExvZ2luU3RhdGUpIHtcbiAgICAgIGNvbnN0IGxvZ2luU3RhdGUgPSBuZXcgTG9naW5TdGF0ZSh7XG4gICAgICAgIGVudklkOiB0aGlzLmNvbmZpZy5lbnYsXG4gICAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgICBvYXV0aEluc3RhbmNlOiB0aGlzLm9hdXRoSW5zdGFuY2UsXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGxvZ2luU3RhdGVcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmnKzlnLDnmbvlvZXmgIEt5byC5q2lXG4gICAqIOatpEFQSeS4uuWFvOWuueW8guatpXN0b3JhZ2XnmoTlubPlj7BcbiAgICovXG4gIEBjYXRjaEVycm9yc0RlY29yYXRvcih7XG4gICAgdGl0bGU6ICfojrflj5bmnKzlnLDnmbvlvZXmgIHlpLHotKUnLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICAn6K+356Gu6K6k5Lul5LiL5ZCE6aG577yaJyxcbiAgICAgICcgIDEgLSDosIPnlKggYXV0aCgpLmdldExvZ2luU3RhdGUoKSDnmoTor63ms5XmiJblj4LmlbDmmK/lkKbmraPnoa4nLFxuICAgICAgYOWmguaenOmXrumimOS+neeEtuWtmOWcqO+8jOW7uuiuruWIsOWumOaWuemXruetlOekvuWMuuaPkOmXruaIluWvu+aJvuW4ruWKqe+8miR7Q09NTVVOSVRZX1NJVEVfVVJMfWAsXG4gICAgXSxcbiAgfSlcbiAgcHVibGljIGFzeW5jIGdldExvZ2luU3RhdGUoKSB7XG4gICAgY29uc3Qgb2F1dGhMb2dpblN0YXRlID0gYXdhaXQgdGhpcy5vYXV0aEluc3RhbmNlLmF1dGhBcGkuZ2V0TG9naW5TdGF0ZSgpXG4gICAgaWYgKG9hdXRoTG9naW5TdGF0ZSkge1xuICAgICAgY29uc3QgbG9naW5TdGF0ZSA9IG5ldyBMb2dpblN0YXRlKHtcbiAgICAgICAgZW52SWQ6IHRoaXMuY29uZmlnLmVudixcbiAgICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICAgIG9hdXRoSW5zdGFuY2U6IHRoaXMub2F1dGhJbnN0YW5jZSxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gbG9naW5TdGF0ZVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBAY2F0Y2hFcnJvcnNEZWNvcmF0b3Ioe1xuICAgIHRpdGxlOiAn6I635Y+W55So5oi35L+h5oGv5aSx6LSlJyxcbiAgICBtZXNzYWdlczogW1xuICAgICAgJ+ivt+ehruiupOS7peS4i+WQhOmhue+8micsXG4gICAgICAnICAxIC0g5piv5ZCm5bey55m75b2VJyxcbiAgICAgICcgIDIgLSDosIPnlKggYXV0aCgpLmdldFVzZXJJbmZvKCkg55qE6K+t5rOV5oiW5Y+C5pWw5piv5ZCm5q2j56GuJyxcbiAgICAgIGDlpoLmnpzpl67popjkvp3nhLblrZjlnKjvvIzlu7rorq7liLDlrpjmlrnpl67nrZTnpL7ljLrmj5Dpl67miJblr7vmib7luK7liqnvvJoke0NPTU1VTklUWV9TSVRFX1VSTH1gLFxuICAgIF0sXG4gIH0pXG4gIHB1YmxpYyBhc3luYyBnZXRVc2VySW5mbygpOiBQcm9taXNlPElVc2VySW5mbz4ge1xuICAgIHJldHVybiB0aGlzLm9hdXRoSW5zdGFuY2UuYXV0aEFwaS5nZXRVc2VySW5mbygpXG4gIH1cblxuICAvKipcbiAgICogZ2V0QXV0aEhlYWRlciDlhbzlrrnlpITnkIZcbiAgICog6L+U5Zue56m65a+56LGhXG4gICAqL1xuICBwdWJsaWMgZ2V0QXV0aEhlYWRlcigpOiB7fSB7XG4gICAgY29uc29sZS5lcnJvcignQXV0aC5nZXRBdXRoSGVhZGVyIEFQSSDlt7Llup/lvIMnKVxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW3suaciei0puaIt+e7keesrOS4ieaWuei0puaIt1xuICAgKiBAcGFyYW0ge2F1dGhNb2RlbHMuQmluZFdpdGhQcm92aWRlclJlcXVlc3R9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlcm9mIEF1dGhcbiAgICovXG4gIEBjYXRjaEVycm9yc0RlY29yYXRvcih7XG4gICAgdGl0bGU6ICfnu5HlrprnrKzkuInmlrnnmbvlvZXmlrnlvI/lpLHotKUnLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICAn6K+356Gu6K6k5Lul5LiL5ZCE6aG577yaJyxcbiAgICAgICcgIDEgLSDosIPnlKggYXV0aCgpLmJpbmRXaXRoUHJvdmlkZXIoKSDnmoTor63ms5XmiJblj4LmlbDmmK/lkKbmraPnoa4nLFxuICAgICAgJyAgMiAtIOatpOi0puaIt+aYr+WQpuW3sue7j+e7keWumuatpOesrOS4ieaWuScsXG4gICAgICBg5aaC5p6c6Zeu6aKY5L6d54S25a2Y5Zyo77yM5bu66K6u5Yiw5a6Y5pa56Zeu562U56S+5Yy65o+Q6Zeu5oiW5a+75om+5biu5Yqp77yaJHtDT01NVU5JVFlfU0lURV9VUkx9YCxcbiAgICBdLFxuICB9KVxuICBwdWJsaWMgYXN5bmMgYmluZFdpdGhQcm92aWRlcihwYXJhbXM6IGF1dGhNb2RlbHMuQmluZFdpdGhQcm92aWRlclJlcXVlc3QsKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLmJpbmRXaXRoUHJvdmlkZXIocGFyYW1zKVxuICB9XG5cbiAgLyoqXG4gICAqIOafpeivoueUqOaIt1xuICAgKiBAcGFyYW0ge2F1dGhNb2RlbHMuUXVlcnlVc2VyUHJvZmlsZVJlcXVlc3R9IGFwcGVuZGVkX3BhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhdXRoTW9kZWxzLlVzZXJQcm9maWxlPn1cbiAgICogQG1lbWJlcm9mIEF1dGhcbiAgICovXG4gIHB1YmxpYyBhc3luYyBxdWVyeVVzZXIocXVlcnlPYmo6IGF1dGhNb2RlbHMuUXVlcnlVc2VyUHJvZmlsZVJlcXVlc3QpOiBQcm9taXNlPGF1dGhNb2RlbHMuUXVlcnlVc2VyUHJvZmlsZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLnF1ZXJ5VXNlclByb2ZpbGUocXVlcnlPYmopXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgY29uc3Qgb2F1dGhBY2Nlc3NUb2tlblJlcyA9IGF3YWl0IHRoaXMub2F1dGhJbnN0YW5jZS5vYXV0aDJjbGllbnQuZ2V0QWNjZXNzVG9rZW4oKVxuICAgIHJldHVybiB7XG4gICAgICBhY2Nlc3NUb2tlbjogb2F1dGhBY2Nlc3NUb2tlblJlcyxcbiAgICAgIGVudjogdGhpcy5jb25maWcuZW52LFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBncmFudFByb3ZpZGVyVG9rZW4ocGFyYW1zOiBhdXRoTW9kZWxzLkdyYW50UHJvdmlkZXJUb2tlblJlcXVlc3QpOiBQcm9taXNlPGF1dGhNb2RlbHMuR3JhbnRQcm92aWRlclRva2VuUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5vYXV0aEluc3RhbmNlLmF1dGhBcGkuZ3JhbnRQcm92aWRlclRva2VuKHBhcmFtcylcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwYXRjaFByb3ZpZGVyVG9rZW4ocGFyYW1zOiBhdXRoTW9kZWxzLlBhdGNoUHJvdmlkZXJUb2tlblJlcXVlc3QpOiBQcm9taXNlPGF1dGhNb2RlbHMuUGF0Y2hQcm92aWRlclRva2VuUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5vYXV0aEluc3RhbmNlLmF1dGhBcGkucGF0Y2hQcm92aWRlclRva2VuKHBhcmFtcylcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaWduSW5XaXRoUHJvdmlkZXIocGFyYW1zOiBhdXRoTW9kZWxzLlNpZ25JbldpdGhQcm92aWRlclJlcXVlc3QpOiBQcm9taXNlPExvZ2luU3RhdGU+IHtcbiAgICBhd2FpdCB0aGlzLm9hdXRoSW5zdGFuY2UuYXV0aEFwaS5zaWduSW5XaXRoUHJvdmlkZXIocGFyYW1zKVxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUxvZ2luU3RhdGUoKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGdyYW50VG9rZW4ocGFyYW1zOiBhdXRoTW9kZWxzLkdyYW50VG9rZW5SZXF1ZXN0KTogUHJvbWlzZTxMb2dpblN0YXRlPiB7XG4gICAgYXdhaXQgdGhpcy5vYXV0aEluc3RhbmNlLmF1dGhBcGkuZ3JhbnRUb2tlbihwYXJhbXMpXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTG9naW5TdGF0ZSgpXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2VuUHJvdmlkZXJSZWRpcmVjdFVyaShwYXJhbXM6IGF1dGhNb2RlbHMuR2VuUHJvdmlkZXJSZWRpcmVjdFVyaVJlcXVlc3QpOiBQcm9taXNlPGF1dGhNb2RlbHMuR2VuUHJvdmlkZXJSZWRpcmVjdFVyaVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLmdlblByb3ZpZGVyUmVkaXJlY3RVcmkocGFyYW1zKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlc2V0UGFzc3dvcmQocGFyYW1zOiBhdXRoTW9kZWxzLlJlc2V0UGFzc3dvcmRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLnJlc2V0UGFzc3dvcmQocGFyYW1zKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGRldmljZUF1dGhvcml6ZShwYXJhbXM6IGF1dGhNb2RlbHMuRGV2aWNlQXV0aG9yaXplUmVxdWVzdCk6IFByb21pc2U8YXV0aE1vZGVscy5EZXZpY2VBdXRob3JpemVSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLm9hdXRoSW5zdGFuY2UuYXV0aEFwaS5kZXZpY2VBdXRob3JpemUocGFyYW1zKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHN1ZG8ocGFyYW1zOiBhdXRoTW9kZWxzLlN1ZG9SZXF1ZXN0KTogUHJvbWlzZTxhdXRoTW9kZWxzLlN1ZG9SZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLm9hdXRoSW5zdGFuY2UuYXV0aEFwaS5zdWRvKHBhcmFtcylcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGVNZShwYXJhbXM6IGF1dGhNb2RlbHMuV2l0aFN1ZG9SZXF1ZXN0KTogUHJvbWlzZTxhdXRoTW9kZWxzLlVzZXJQcm9maWxlPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLmRlbGV0ZU1lKHBhcmFtcylcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRQcm92aWRlcnMoKTogUHJvbWlzZTxhdXRoTW9kZWxzLlVzZXJQcm9maWxlUHJvdmlkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5vYXV0aEluc3RhbmNlLmF1dGhBcGkuZ2V0UHJvdmlkZXJzKClcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsb2dpblNjb3BlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMub2F1dGhJbnN0YW5jZS5hdXRoQXBpLmxvZ2luU2NvcGUoKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGxvZ2luR3JvdXBzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5vYXV0aEluc3RhbmNlLmF1dGhBcGkubG9naW5Hcm91cHMoKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uTG9naW5TdGF0ZUNoYW5nZWQoY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgZXZlbnRCdXMub24oRVZFTlRTLkxPR0lOX1NUQVRFX0NIQU5HRUQsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGxvZ2luU3RhdGUgPSBhd2FpdCB0aGlzLmdldExvZ2luU3RhdGUoKVxuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBsb2dpblN0YXRlKVxuICAgIH0pXG4gICAgLy8g56uL5Yi75omn6KGM5LiA5qyh5Zue6LCDXG4gICAgY29uc3QgbG9naW5TdGF0ZSA9IGF3YWl0IHRoaXMuZ2V0TG9naW5TdGF0ZSgpXG4gICAgY2FsbGJhY2suY2FsbCh0aGlzLCBsb2dpblN0YXRlKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGVMb2dpblN0YXRlKCk6IFByb21pc2U8TG9naW5TdGF0ZT4ge1xuICAgIGNvbnN0IGxvZ2luU3RhdGUgPSBuZXcgTG9naW5TdGF0ZSh7XG4gICAgICBlbnZJZDogdGhpcy5jb25maWcuZW52LFxuICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICBvYXV0aEluc3RhbmNlOiB0aGlzLm9hdXRoSW5zdGFuY2UsXG4gICAgfSlcblxuICAgIGF3YWl0IGxvZ2luU3RhdGUuY2hlY2tMb2NhbFN0YXRlQXN5bmMoKVxuICAgIGF3YWl0IGxvZ2luU3RhdGUudXNlci5yZWZyZXNoKClcbiAgICBldmVudEJ1cy5maXJlKEVWRU5UUy5MT0dJTl9TVEFURV9DSEFOR0VEKVxuICAgIHJldHVybiBsb2dpblN0YXRlXG4gIH1cbn1cblxuY29uc3QgY29tcG9uZW50OiBJQ2xvdWRiYXNlQ29tcG9uZW50ID0ge1xuICBuYW1lOiBDT01QT05FTlRfTkFNRSxcbiAgbmFtZXNwYWNlOiAnYXV0aCcsXG4gIGVudGl0eShjb25maWc6IFBpY2s8SUNsb3VkYmFzZUF1dGhDb25maWcsICdyZWdpb24nIHwgJ3BlcnNpc3RlbmNlJz4gJiBQYXJ0aWFsPEF1dGhPcHRpb25zPlxuICA9IHsgcmVnaW9uOiAnJywgcGVyc2lzdGVuY2U6ICdsb2NhbCcgfSkge1xuICAgIGlmICh0aGlzLmF1dGhJbnN0YW5jZSkge1xuICAgICAgcHJpbnRXYXJuKEVSUk9SUy5JTlZBTElEX09QRVJBVElPTiwgJ2V2ZXJ5IGNsb3VkYmFzZSBpbnN0YW5jZSBzaG91bGQgaGFzIG9ubHkgb25lIGF1dGggb2JqZWN0JylcbiAgICAgIHJldHVybiB0aGlzLmF1dGhJbnN0YW5jZVxuICAgIH1cbiAgICBjb25zdCB7IGFkYXB0ZXIsIHJ1bnRpbWUgfSA9IHRoaXMucGxhdGZvcm1cbiAgICAvLyDlpoLkuI3mmI7noa7mjIflrppwZXJzaXN0ZW5jZeWImeS8mOWFiOWPluWQhOW5s+WPsGFkYXB0ZXLpppbpgInvvIzlhbbmrKFsb2NhbFN0b3JhZ2VcbiAgICBjb25zdCBuZXdQZXJzaXN0ZW5jZSA9IGNvbmZpZy5wZXJzaXN0ZW5jZSB8fCBhZGFwdGVyLnByaW1hcnlTdG9yYWdlXG4gICAgaWYgKG5ld1BlcnNpc3RlbmNlICYmIChuZXdQZXJzaXN0ZW5jZSAhPT0gdGhpcy5jb25maWcucGVyc2lzdGVuY2UpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbmZpZyh7IHBlcnNpc3RlbmNlOiBuZXdQZXJzaXN0ZW5jZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IHsgZW52LCBwZXJzaXN0ZW5jZSwgZGVidWcsIGNsaWVudElkLCBzdG9yYWdlIH0gPSB0aGlzLmNvbmZpZ1xuICAgIGNvbnN0IG9hdXRoSW5zdGFuY2UgPSBuZXcgQ2xvdWRiYXNlT0F1dGgoe1xuICAgICAgY2xpZW50SWQsXG4gICAgICBhcGlPcmlnaW46IHRoaXMucmVxdWVzdC5nZXRCYXNlRW5kUG9pbnQoKSxcbiAgICAgIC8vIEB0b2RvIOS7peS4i+acgOWlvei1sGFkYXB0b3LlpITnkIbvvIznm67liY1vYXV0aOaooeWdl+ayoeaMiWFkYXB0b3LmjqXlj6Porr7orqFcbiAgICAgIHN0b3JhZ2U6IGNvbmZpZz8uc3RvcmFnZSB8fCBzdG9yYWdlLFxuICAgICAgcmVxdWVzdDogY29uZmlnPy5yZXF1ZXN0LFxuICAgICAgYW5vbnltb3VzU2lnbkluRnVuYzogY29uZmlnPy5hbm9ueW1vdXNTaWduSW5GdW5jLFxuICAgIH0pXG5cbiAgICB0aGlzLm9hdXRoSW5zdGFuY2UgPSBvYXV0aEluc3RhbmNlXG5cbiAgICB0aGlzLmF1dGhJbnN0YW5jZSA9IG5ldyBBdXRoKHtcbiAgICAgIGVudixcbiAgICAgIHJlZ2lvbjogY29uZmlnLnJlZ2lvbixcbiAgICAgIHBlcnNpc3RlbmNlLFxuICAgICAgZGVidWcsXG4gICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgIC8vIHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcbiAgICAgIHJ1bnRpbWUsXG4gICAgICBfZnJvbUFwcDogdGhpcyxcbiAgICAgIC8vIG9hdXRoSW5zdGFuY2U6IHRoaXMub2F1dGhJbnN0YW5jZSB8fCAodGhpcyBhcyBhbnkpLm9hdXRoKClcbiAgICAgIG9hdXRoSW5zdGFuY2UsXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLmF1dGhJbnN0YW5jZVxuICB9LFxufVxuXG50cnkge1xuICAvLyDlsJ3or5Xoh6rliqjms6jlhozoh7PlhajlsYDlj5jph49jbG91ZGJhc2VcbiAgLy8g5q2k6KGM5Li65Y+q5Zyo5rWP6KeI5Zmo546v5aKD5LiL5pyJ5pWIXG4gIGNsb3VkYmFzZS5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpXG59IGNhdGNoIChlKSB7IH1cblxuZXhwb3J0IHtcbiAgVXNlckluZm8sXG4gIEF1dGgsXG59XG4vKipcbiAqIEBhcGkg5omL5Yqo5rOo5YaM6IezY2xvdWRiYXNlIGFwcFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBdXRoKGFwcDogUGljazxJQ2xvdWRiYXNlLCAncmVnaXN0ZXJDb21wb25lbnQnPikge1xuICB0cnkge1xuICAgIGFwcC5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oZSlcbiAgfVxufVxuXG4iXX0=
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1734234913816);
})()
//miniprogram-npm-outsideDeps=["@cloudbase/utilities","@cloudbase/oauth"]
//# sourceMappingURL=index.js.map