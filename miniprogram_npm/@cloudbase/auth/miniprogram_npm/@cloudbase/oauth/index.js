module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1734234913760, function(require, module, exports) {

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
exports.CloudbaseOAuth = exports.authModels = void 0;
var oauth2client_1 = require("./oauth2client/oauth2client");
var apis_1 = require("./auth/apis");
var authModels = __importStar(require("./auth/models"));
exports.authModels = authModels;
var consts_1 = require("./oauth2client/consts");
Object.defineProperty(exports, "Syntax", { enumerable: true, get: function () { return consts_1.Syntax; } });
Object.defineProperty(exports, "ErrorType", { enumerable: true, get: function () { return consts_1.ErrorType; } });
var oauth2client_2 = require("./oauth2client/oauth2client");
Object.defineProperty(exports, "defaultStorage", { enumerable: true, get: function () { return oauth2client_2.defaultStorage; } });
Object.defineProperty(exports, "defaultRequest", { enumerable: true, get: function () { return oauth2client_2.defaultRequest; } });
Object.defineProperty(exports, "toResponseError", { enumerable: true, get: function () { return oauth2client_2.toResponseError; } });
Object.defineProperty(exports, "generateRequestId", { enumerable: true, get: function () { return oauth2client_2.generateRequestId; } });
Object.defineProperty(exports, "OAuth2Client", { enumerable: true, get: function () { return oauth2client_2.OAuth2Client; } });
var interface_1 = require("./oauth2client/interface");
Object.defineProperty(exports, "AuthClient", { enumerable: true, get: function () { return interface_1.AuthClient; } });
var apis_2 = require("./auth/apis");
Object.defineProperty(exports, "Auth", { enumerable: true, get: function () { return apis_2.Auth; } });
var CloudbaseOAuth = (function () {
    function CloudbaseOAuth(authOptions) {
        var apiOrigin = authOptions.apiOrigin, clientId = authOptions.clientId, storage = authOptions.storage, request = authOptions.request, anonymousSignInFunc = authOptions.anonymousSignInFunc;
        this.oauth2client = new oauth2client_1.OAuth2Client({
            apiOrigin: apiOrigin,
            clientId: clientId,
            storage: storage,
            baseRequest: request,
            anonymousSignInFunc: anonymousSignInFunc,
        });
        this.authApi = new apis_1.Auth(__assign(__assign({ credentialsClient: this.oauth2client }, authOptions), { request: request ? this.oauth2client.request.bind(this.oauth2client) : undefined }));
    }
    return CloudbaseOAuth;
}());
exports.CloudbaseOAuth = CloudbaseOAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTBEO0FBRTFELG9DQUErQztBQUUvQyx3REFBMkM7QUF1QmxDLGdDQUFVO0FBckJuQixnREFBeUQ7QUFBaEQsZ0dBQUEsTUFBTSxPQUFBO0FBQUUsbUdBQUEsU0FBUyxPQUFBO0FBRTFCLDREQU9vQztBQU5sQyw4R0FBQSxjQUFjLE9BQUE7QUFDZCw4R0FBQSxjQUFjLE9BQUE7QUFFZCwrR0FBQSxlQUFlLE9BQUE7QUFDZixpSEFBQSxpQkFBaUIsT0FBQTtBQUNqQiw0R0FBQSxZQUFZLE9BQUE7QUFHZCxzREFBb0U7QUFBM0QsdUdBQUEsVUFBVSxPQUFBO0FBU25CLG9DQUErQztBQUF6Qiw0RkFBQSxJQUFJLE9BQUE7QUFJMUI7SUFJRSx3QkFBWSxXQUF3QjtRQUMxQixJQUFBLFNBQVMsR0FBc0QsV0FBVyxVQUFqRSxFQUFFLFFBQVEsR0FBNEMsV0FBVyxTQUF2RCxFQUFFLE9BQU8sR0FBbUMsV0FBVyxRQUE5QyxFQUFFLE9BQU8sR0FBMEIsV0FBVyxRQUFyQyxFQUFFLG1CQUFtQixHQUFLLFdBQVcsb0JBQWhCLENBQWdCO1FBQ2xGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDO1lBQ25DLFNBQVMsV0FBQTtZQUNULFFBQVEsVUFBQTtZQUNSLE9BQU8sU0FBQTtZQUNQLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLG1CQUFtQixxQkFBQTtTQUNwQixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksV0FBSSxxQkFDckIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFDakMsV0FBVyxLQUVkLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFDaEYsQ0FBQTtJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPQXV0aDJDbGllbnQgfSBmcm9tICcuL29hdXRoMmNsaWVudC9vYXV0aDJjbGllbnQnXG5cbmltcG9ydCB7IEF1dGhPcHRpb25zLCBBdXRoIH0gZnJvbSAnLi9hdXRoL2FwaXMnXG5cbmltcG9ydCAqIGFzIGF1dGhNb2RlbHMgZnJvbSAnLi9hdXRoL21vZGVscydcblxuZXhwb3J0IHsgU3ludGF4LCBFcnJvclR5cGUgfSBmcm9tICcuL29hdXRoMmNsaWVudC9jb25zdHMnXG5cbmV4cG9ydCB7XG4gIGRlZmF1bHRTdG9yYWdlLFxuICBkZWZhdWx0UmVxdWVzdCxcbiAgVG9SZXNwb25zZUVycm9yT3B0aW9ucyxcbiAgdG9SZXNwb25zZUVycm9yLFxuICBnZW5lcmF0ZVJlcXVlc3RJZCxcbiAgT0F1dGgyQ2xpZW50LFxufSBmcm9tICcuL29hdXRoMmNsaWVudC9vYXV0aDJjbGllbnQnXG5cbmV4cG9ydCB7IEF1dGhDbGllbnQsIFNpbXBsZVN0b3JhZ2UgfSBmcm9tICcuL29hdXRoMmNsaWVudC9pbnRlcmZhY2UnXG5cbmV4cG9ydCB7XG4gIENyZWRlbnRpYWxzLFxuICBSZXNwb25zZUVycm9yLFxuICBPQXV0aDJDbGllbnRPcHRpb25zLFxuICBBdXRoQ2xpZW50UmVxdWVzdE9wdGlvbnMsXG59IGZyb20gJy4vb2F1dGgyY2xpZW50L21vZGVscydcblxuZXhwb3J0IHsgQXV0aE9wdGlvbnMsIEF1dGggfSBmcm9tICcuL2F1dGgvYXBpcydcbmV4cG9ydCB7IGF1dGhNb2RlbHMgfVxuXG5cbmV4cG9ydCBjbGFzcyBDbG91ZGJhc2VPQXV0aCB7XG4gIHB1YmxpYyBvYXV0aDJjbGllbnQ6IE9BdXRoMkNsaWVudFxuICBwdWJsaWMgYXV0aEFwaTogQXV0aFxuXG4gIGNvbnN0cnVjdG9yKGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucykge1xuICAgIGNvbnN0IHsgYXBpT3JpZ2luLCBjbGllbnRJZCwgc3RvcmFnZSwgcmVxdWVzdCwgYW5vbnltb3VzU2lnbkluRnVuYyB9ID0gYXV0aE9wdGlvbnNcbiAgICB0aGlzLm9hdXRoMmNsaWVudCA9IG5ldyBPQXV0aDJDbGllbnQoe1xuICAgICAgYXBpT3JpZ2luLFxuICAgICAgY2xpZW50SWQsXG4gICAgICBzdG9yYWdlLFxuICAgICAgYmFzZVJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICBhbm9ueW1vdXNTaWduSW5GdW5jLFxuICAgIH0pXG5cbiAgICB0aGlzLmF1dGhBcGkgPSBuZXcgQXV0aCh7XG4gICAgICBjcmVkZW50aWFsc0NsaWVudDogdGhpcy5vYXV0aDJjbGllbnQsXG4gICAgICAuLi5hdXRoT3B0aW9ucyxcbiAgICAgIC8vIOWFvOWuueiAgemAu+i+ke+8jOacieWAvOS8oOWFpeWImeS4jei1sEF1dGjlhoXnmoTpqozor4HnoIHor7fmsYLpgLvovpFcbiAgICAgIHJlcXVlc3Q6IHJlcXVlc3QgPyB0aGlzLm9hdXRoMmNsaWVudC5yZXF1ZXN0LmJpbmQodGhpcy5vYXV0aDJjbGllbnQpIDogdW5kZWZpbmVkLFxuICAgIH0pXG4gIH1cbn1cblxuIl19
}, function(modId) {var map = {"./oauth2client/oauth2client":1734234913761,"./auth/apis":1734234913765,"./auth/models":1734234913768,"./oauth2client/consts":1734234913762,"./oauth2client/interface":1734234913769}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913761, function(require, module, exports) {

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
exports.OAuth2Client = exports.LocalCredentials = exports.defaultStorage = exports.generateRequestId = exports.toResponseError = exports.defaultRequest = void 0;
var consts_1 = require("./consts");
var uuid_1 = require("../utils/uuid");
var single_promise_1 = require("../utils/function/single-promise");
var RequestIdHeaderName = 'x-request-id';
var DeviceIdHeaderName = 'x-device-id';
var DeviceIdSectionName = 'device_id';
exports.defaultRequest = function (url, options) {
    return __awaiter(this, void 0, void 0, function () {
        var result, responseError, copyOptions, responseResult, jsonResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = null;
                    responseError = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    copyOptions = Object.assign({}, options);
                    if (!copyOptions.method) {
                        copyOptions.method = 'GET';
                    }
                    if (copyOptions.body && typeof copyOptions.body !== 'string') {
                        copyOptions.body = JSON.stringify(copyOptions.body);
                    }
                    return [4, fetch(url, copyOptions)];
                case 2:
                    responseResult = _a.sent();
                    return [4, responseResult.json()];
                case 3:
                    jsonResponse = _a.sent();
                    if (jsonResponse === null || jsonResponse === void 0 ? void 0 : jsonResponse.error) {
                        responseError = jsonResponse;
                        responseError.error_uri = new URL(url).pathname;
                    }
                    else {
                        result = jsonResponse;
                    }
                    return [3, 5];
                case 4:
                    error_1 = _a.sent();
                    responseError = {
                        error: consts_1.ErrorType.UNREACHABLE,
                        error_description: error_1.message,
                        error_uri: new URL(url).pathname,
                    };
                    return [3, 5];
                case 5:
                    if (responseError) {
                        throw responseError;
                    }
                    else {
                        return [2, result];
                    }
                    return [2];
            }
        });
    });
};
exports.toResponseError = function (error, options) {
    var responseError;
    var formatOptions = options || {};
    if (error instanceof Error) {
        responseError = {
            error: formatOptions.error || consts_1.ErrorType.LOCAL,
            error_description: formatOptions.error_description || error.message,
            error_uri: formatOptions.error_uri,
            details: formatOptions.details || error.stack,
        };
    }
    else {
        var formatError = error || {};
        responseError = {
            error: formatOptions.error || formatError.error || consts_1.ErrorType.LOCAL,
            error_description: formatOptions.error_description || formatError.error_description,
            error_uri: formatOptions.error_uri || formatError.error_uri,
            details: formatOptions.details || formatError.details,
        };
    }
    return responseError;
};
function generateRequestId() {
    return uuid_1.uuidv4();
}
exports.generateRequestId = generateRequestId;
var DefaultStorage = (function () {
    function DefaultStorage() {
    }
    DefaultStorage.prototype.getItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, window.localStorage.getItem(key)];
            });
        });
    };
    DefaultStorage.prototype.removeItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.localStorage.removeItem(key);
                return [2];
            });
        });
    };
    DefaultStorage.prototype.setItem = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.localStorage.setItem(key, value);
                return [2];
            });
        });
    };
    DefaultStorage.prototype.getItemSync = function (key) {
        return window.localStorage.getItem(key);
    };
    DefaultStorage.prototype.removeItemSync = function (key) {
        window.localStorage.removeItem(key);
    };
    DefaultStorage.prototype.setItemSync = function (key, value) {
        window.localStorage.setItem(key, value);
    };
    return DefaultStorage;
}());
exports.defaultStorage = new DefaultStorage();
function isCredentialsExpired(credentials) {
    var isExpired = true;
    if ((credentials === null || credentials === void 0 ? void 0 : credentials.expires_at) && (credentials === null || credentials === void 0 ? void 0 : credentials.access_token)) {
        isExpired = credentials.expires_at < new Date();
    }
    return isExpired;
}
var LocalCredentials = (function () {
    function LocalCredentials(options) {
        this.credentials = null;
        this.singlePromise = new single_promise_1.SinglePromise();
        this.tokenSectionName = options.tokenSectionName;
        this.storage = options.storage;
    }
    LocalCredentials.prototype.getStorageCredentialsSync = function () {
        var credentials = null;
        var tokenStr = this.storage.getItemSync(this.tokenSectionName);
        if (tokenStr !== undefined && tokenStr !== null) {
            try {
                credentials = JSON.parse(tokenStr);
                if (credentials === null || credentials === void 0 ? void 0 : credentials.expires_at) {
                    credentials.expires_at = new Date(credentials.expires_at);
                }
            }
            catch (error) {
                this.storage.removeItem(this.tokenSectionName);
                credentials = null;
            }
        }
        return credentials;
    };
    LocalCredentials.prototype.setCredentials = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenStr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(credentials === null || credentials === void 0 ? void 0 : credentials.expires_in)) return [3, 3];
                        credentials.expires_at = new Date(Date.now() + (credentials.expires_in - 30) * 1000);
                        if (!this.storage) return [3, 2];
                        tokenStr = JSON.stringify(credentials);
                        return [4, this.storage.setItem(this.tokenSectionName, tokenStr)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.credentials = credentials;
                        return [3, 6];
                    case 3:
                        if (!this.storage) return [3, 5];
                        return [4, this.storage.removeItem(this.tokenSectionName)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.credentials = null;
                        _a.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    LocalCredentials.prototype.getCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, this.singlePromise.run('getCredentials', function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!isCredentialsExpired(this.credentials)) return [3, 2];
                                    _a = this;
                                    return [4, this.getStorageCredentials()];
                                case 1:
                                    _a.credentials = _b.sent();
                                    _b.label = 2;
                                case 2: return [2, this.credentials];
                            }
                        });
                    }); })];
            });
        });
    };
    LocalCredentials.prototype.getStorageCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, this.singlePromise.run('_getStorageCredentials', function () { return __awaiter(_this, void 0, void 0, function () {
                        var credentials, tokenStr, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    credentials = null;
                                    return [4, this.storage.getItem(this.tokenSectionName)];
                                case 1:
                                    tokenStr = _a.sent();
                                    if (!(tokenStr !== undefined && tokenStr !== null)) return [3, 5];
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 3, , 5]);
                                    credentials = JSON.parse(tokenStr);
                                    if (credentials === null || credentials === void 0 ? void 0 : credentials.expires_at) {
                                        credentials.expires_at = new Date(credentials.expires_at);
                                    }
                                    return [3, 5];
                                case 3:
                                    error_2 = _a.sent();
                                    return [4, this.storage.removeItem(this.tokenSectionName)];
                                case 4:
                                    _a.sent();
                                    credentials = null;
                                    return [3, 5];
                                case 5: return [2, credentials];
                            }
                        });
                    }); })];
            });
        });
    };
    return LocalCredentials;
}());
exports.LocalCredentials = LocalCredentials;
var OAuth2Client = (function () {
    function OAuth2Client(options) {
        this.singlePromise = new single_promise_1.SinglePromise();
        this.apiOrigin = options.apiOrigin;
        this.clientId = options.clientId;
        this.retry = this.formatRetry(options.retry, OAuth2Client.defaultRetry);
        if (options.baseRequest) {
            this.baseRequest = options.baseRequest;
        }
        else {
            this.baseRequest = exports.defaultRequest;
        }
        this.tokenInURL = options.tokenInURL;
        this.headers = options.headers;
        this.storage = options.storage || exports.defaultStorage;
        this.localCredentials = new LocalCredentials({
            tokenSectionName: "credentials_" + options.clientId,
            storage: this.storage,
        });
        this.clientSecret = options.clientSecret;
        this.refreshTokenFunc = options.refreshTokenFunc || this.defaultRefreshTokenFunc;
        this.anonymousSignInFunc = options.anonymousSignInFunc;
    }
    OAuth2Client.prototype.setCredentials = function (credentials) {
        return this.localCredentials.setCredentials(credentials);
    };
    OAuth2Client.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var credentials, respErr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getCredentials()];
                    case 1:
                        credentials = _a.sent();
                        if (credentials === null || credentials === void 0 ? void 0 : credentials.access_token) {
                            return [2, Promise.resolve(credentials.access_token)];
                        }
                        respErr = { error: consts_1.ErrorType.UNAUTHENTICATED };
                        return [2, Promise.reject(respErr)];
                }
            });
        });
    };
    OAuth2Client.prototype.request = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var retry, deviceId, credentials, response, maxRequestTimes, requestTime, responseError_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!options) {
                            options = {};
                        }
                        retry = this.formatRetry(options.retry, this.retry);
                        options.headers = options.headers || {};
                        if (this.headers) {
                            options.headers = __assign(__assign({}, this.headers), options.headers);
                        }
                        if (!options.headers[RequestIdHeaderName]) {
                            options.headers[RequestIdHeaderName] = generateRequestId();
                        }
                        if (!!options.headers[DeviceIdHeaderName]) return [3, 2];
                        return [4, this.getDeviceId()];
                    case 1:
                        deviceId = _a.sent();
                        options.headers[DeviceIdHeaderName] = deviceId;
                        _a.label = 2;
                    case 2:
                        if (!(options === null || options === void 0 ? void 0 : options.withCredentials)) return [3, 4];
                        return [4, this.getCredentials()];
                    case 3:
                        credentials = _a.sent();
                        if (credentials) {
                            if (this.tokenInURL) {
                                if (url.indexOf('?') < 0) {
                                    url += '?';
                                }
                                url += "access_token=" + credentials.access_token;
                            }
                            else {
                                options.headers.Authorization = credentials.token_type + " " + credentials.access_token;
                            }
                        }
                        return [3, 5];
                    case 4:
                        if (this.clientId && url.indexOf('client_id') < 0) {
                            url += url.indexOf('?') < 0 ? '?' : '&';
                            url += "client_id=" + this.clientId;
                        }
                        _a.label = 5;
                    case 5:
                        if (url.startsWith('/')) {
                            url = this.apiOrigin + url;
                        }
                        response = null;
                        maxRequestTimes = retry + 1;
                        requestTime = 0;
                        _a.label = 6;
                    case 6:
                        if (!(requestTime < maxRequestTimes)) return [3, 15];
                        _a.label = 7;
                    case 7:
                        _a.trys.push([7, 9, , 12]);
                        return [4, this.baseRequest(url, options)];
                    case 8:
                        response = _a.sent();
                        return [3, 15];
                    case 9:
                        responseError_1 = _a.sent();
                        if (!(options.withCredentials && responseError_1 && responseError_1.error === consts_1.ErrorType.UNAUTHENTICATED)) return [3, 11];
                        return [4, this.setCredentials(null)];
                    case 10:
                        _a.sent();
                        return [2, Promise.reject(responseError_1)];
                    case 11:
                        if (requestTime === retry
                            || !responseError_1
                            || responseError_1.error !== 'unreachable') {
                            return [2, Promise.reject(responseError_1)];
                        }
                        return [3, 12];
                    case 12: return [4, this.sleep(OAuth2Client.retryInterval)];
                    case 13:
                        _a.sent();
                        _a.label = 14;
                    case 14:
                        requestTime++;
                        return [3, 6];
                    case 15: return [2, response];
                }
            });
        });
    };
    OAuth2Client.prototype.getCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            var credentials, c, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.localCredentials.getCredentials()];
                    case 1:
                        credentials = _b.sent();
                        if (!isCredentialsExpired(credentials)) return [3, 10];
                        if (!(credentials && credentials.scope === 'anonymous')) return [3, 8];
                        if (!this.anonymousSignInFunc) return [3, 5];
                        return [4, this.anonymousSignInFunc(credentials)];
                    case 2:
                        c = _b.sent();
                        _a = c;
                        if (_a) return [3, 4];
                        return [4, this.localCredentials.getCredentials()];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        credentials = _a;
                        return [3, 7];
                    case 5: return [4, this.anonymousSignIn(credentials)];
                    case 6:
                        credentials = _b.sent();
                        _b.label = 7;
                    case 7: return [3, 10];
                    case 8: return [4, this.refreshToken(credentials)];
                    case 9:
                        credentials = _b.sent();
                        _b.label = 10;
                    case 10: return [2, credentials];
                }
            });
        });
    };
    OAuth2Client.prototype.getCredentialsSync = function () {
        var credentials = this.localCredentials.getStorageCredentialsSync();
        return credentials;
    };
    OAuth2Client.prototype.getCredentialsAsync = function () {
        return this.localCredentials.getCredentials();
    };
    OAuth2Client.prototype.getScope = function () {
        return __awaiter(this, void 0, void 0, function () {
            var credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.localCredentials.getCredentials()];
                    case 1:
                        credentials = _a.sent();
                        if (!credentials) {
                            return [2, this.unAuthenticatedError('credentials not found')];
                        }
                        return [2, credentials.scope];
                }
            });
        });
    };
    OAuth2Client.prototype.getGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            var credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.localCredentials.getCredentials()];
                    case 1:
                        credentials = _a.sent();
                        if (!credentials) {
                            return [2, this.unAuthenticatedError('credentials not found')];
                        }
                        return [2, credentials.groups];
                }
            });
        });
    };
    OAuth2Client.prototype.checkRetry = function (retry) {
        var responseError = null;
        if (typeof retry !== 'number'
            || retry < OAuth2Client.minRetry
            || retry > OAuth2Client.maxRetry) {
            responseError = {
                error: consts_1.ErrorType.UNREACHABLE,
                error_description: 'wrong options param: retry',
            };
        }
        if (responseError) {
            throw responseError;
        }
        return retry;
    };
    OAuth2Client.prototype.formatRetry = function (retry, defaultVale) {
        if (typeof retry === 'undefined') {
            return defaultVale;
        }
        return this.checkRetry(retry);
    };
    OAuth2Client.prototype.sleep = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve();
                        }, ms);
                    })];
            });
        });
    };
    OAuth2Client.prototype.refreshToken = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, this.singlePromise.run('_refreshToken', function () { return __awaiter(_this, void 0, void 0, function () {
                        var newCredentials, error_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!credentials || !credentials.refresh_token) {
                                        return [2, this.unAuthenticatedError('no refresh token found in credentials')];
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 4, , 7]);
                                    return [4, this.refreshTokenFunc(credentials.refresh_token)];
                                case 2:
                                    newCredentials = _a.sent();
                                    return [4, this.localCredentials.setCredentials(newCredentials)];
                                case 3:
                                    _a.sent();
                                    return [2, newCredentials];
                                case 4:
                                    error_3 = _a.sent();
                                    if (!(error_3.error === consts_1.ErrorType.INVALID_GRANT)) return [3, 6];
                                    return [4, this.localCredentials.setCredentials(null)];
                                case 5:
                                    _a.sent();
                                    return [2, this.unAuthenticatedError(error_3.error_description)];
                                case 6: return [2, Promise.reject(error_3)];
                                case 7: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    OAuth2Client.prototype.anonymousSignIn = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, this.singlePromise.run('_anonymous', function () { return __awaiter(_this, void 0, void 0, function () {
                        var newCredentials, error_4;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!credentials || credentials.scope !== 'anonymous') {
                                        return [2, this.unAuthenticatedError('no anonymous in credentials')];
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 4, , 7]);
                                    return [4, this.request('/auth/v1/signin/anonymously', {
                                            method: 'POST',
                                            body: {
                                                client_id: this.clientId,
                                                client_secret: this.clientSecret,
                                            },
                                        })];
                                case 2:
                                    newCredentials = _a.sent();
                                    return [4, this.localCredentials.setCredentials(newCredentials)];
                                case 3:
                                    _a.sent();
                                    return [2, newCredentials];
                                case 4:
                                    error_4 = _a.sent();
                                    if (!(error_4.error === consts_1.ErrorType.INVALID_GRANT)) return [3, 6];
                                    return [4, this.localCredentials.setCredentials(null)];
                                case 5:
                                    _a.sent();
                                    return [2, this.unAuthenticatedError(error_4.error_description)];
                                case 6: return [2, Promise.reject(error_4)];
                                case 7: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    OAuth2Client.prototype.defaultRefreshTokenFunc = function (refreshToken) {
        if (refreshToken === undefined || refreshToken === '') {
            return this.unAuthenticatedError('refresh token not found');
        }
        return this.request('/auth/v1/token', {
            method: 'POST',
            body: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
            },
        });
    };
    OAuth2Client.prototype.getDeviceId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.deviceID) {
                            return [2, this.deviceID];
                        }
                        return [4, this.storage.getItem(DeviceIdSectionName)];
                    case 1:
                        deviceId = _a.sent();
                        if (!!(typeof deviceId === 'string'
                            && deviceId.length >= 16
                            && deviceId.length <= 48)) return [3, 3];
                        deviceId = uuid_1.uuidv4();
                        return [4, this.storage.setItem(DeviceIdSectionName, deviceId)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.deviceID = deviceId;
                        return [2, deviceId];
                }
            });
        });
    };
    OAuth2Client.prototype.unAuthenticatedError = function (err) {
        var respErr = {
            error: consts_1.ErrorType.UNAUTHENTICATED,
            error_description: err,
        };
        return Promise.reject(respErr);
    };
    OAuth2Client.defaultRetry = 2;
    OAuth2Client.minRetry = 0;
    OAuth2Client.maxRetry = 5;
    OAuth2Client.retryInterval = 1000;
    return OAuth2Client;
}());
exports.OAuth2Client = OAuth2Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgyY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29hdXRoMmNsaWVudC9vYXV0aDJjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBb0M7QUFhcEMsc0NBQXNDO0FBRXRDLG1FQUFnRTtBQUVoRSxJQUFNLG1CQUFtQixHQUFHLGNBQWMsQ0FBQTtBQUMxQyxJQUFNLGtCQUFrQixHQUFHLGFBQWEsQ0FBQTtBQUN4QyxJQUFNLG1CQUFtQixHQUFHLFdBQVcsQ0FBQTtBQVUxQixRQUFBLGNBQWMsR0FBb0IsVUFDN0MsR0FBVyxFQUNYLE9BQXdCOzs7Ozs7b0JBRXBCLE1BQU0sR0FBYSxJQUFJLENBQUE7b0JBQ3ZCLGFBQWEsR0FBeUIsSUFBSSxDQUFBOzs7O29CQUd0QyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUE7b0JBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO3dCQUN2QixXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtxQkFDM0I7b0JBQ0QsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLE9BQU8sV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQzVELFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQ3BEO29CQUNnQyxXQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEVBQUE7O29CQUF4RCxjQUFjLEdBQWEsU0FBNkI7b0JBQ3pDLFdBQU0sY0FBYyxDQUFDLElBQUksRUFBRSxFQUFBOztvQkFBMUMsWUFBWSxHQUFHLFNBQTJCO29CQUNoRCxJQUFJLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxLQUFLLEVBQUU7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LG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxFQUFBOzt3QkFBekQsU0FBeUQsQ0FBQTs7O3dCQUUzRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTt3QkFDeEIsV0FBTyxRQUFRLEVBQUE7Ozs7S0FDaEI7SUFNTywyQ0FBb0IsR0FBNUIsVUFBZ0MsR0FBWTtRQUMxQyxJQUFNLE9BQU8sR0FBa0I7WUFDN0IsS0FBSyxFQUFFLGtCQUFTLENBQUMsZUFBZTtZQUNoQyxpQkFBaUIsRUFBRSxHQUFHO1NBQ3ZCLENBQUE7UUFDRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQXZWYyx5QkFBWSxHQUFHLENBQUMsQ0FBQTtJQUNoQixxQkFBUSxHQUFHLENBQUMsQ0FBQTtJQUNaLHFCQUFRLEdBQUcsQ0FBQyxDQUFBO0lBQ1osMEJBQWEsR0FBRyxJQUFJLENBQUE7SUFxVnJDLG1CQUFDO0NBQUEsQUF6VkQsSUF5VkM7QUF6Vlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvclR5cGUgfSBmcm9tICcuL2NvbnN0cydcblxuaW1wb3J0IHsgQXV0aENsaWVudCwgU2ltcGxlU3RvcmFnZSB9IGZyb20gJy4vaW50ZXJmYWNlJ1xuXG5pbXBvcnQge1xuICBDcmVkZW50aWFscyxcbiAgUmVzcG9uc2VFcnJvcixcbiAgUmVxdWVzdE9wdGlvbnMsXG4gIFJlcXVlc3RGdW5jdGlvbixcbiAgT0F1dGgyQ2xpZW50T3B0aW9ucyxcbiAgQXV0aENsaWVudFJlcXVlc3RPcHRpb25zLFxufSBmcm9tICcuL21vZGVscydcblxuaW1wb3J0IHsgdXVpZHY0IH0gZnJvbSAnLi4vdXRpbHMvdXVpZCdcblxuaW1wb3J0IHsgU2luZ2xlUHJvbWlzZSB9IGZyb20gJy4uL3V0aWxzL2Z1bmN0aW9uL3NpbmdsZS1wcm9taXNlJ1xuXG5jb25zdCBSZXF1ZXN0SWRIZWFkZXJOYW1lID0gJ3gtcmVxdWVzdC1pZCdcbmNvbnN0IERldmljZUlkSGVhZGVyTmFtZSA9ICd4LWRldmljZS1pZCdcbmNvbnN0IERldmljZUlkU2VjdGlvbk5hbWUgPSAnZGV2aWNlX2lkJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvUmVzcG9uc2VFcnJvck9wdGlvbnMge1xuICBlcnJvcj86IEVycm9yVHlwZTtcbiAgZXJyb3JfZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xuICBlcnJvcl91cmk/OiBzdHJpbmcgfCBudWxsO1xuICBkZXRhaWxzPzogYW55IHwgbnVsbDtcbn1cblxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJlcXVlc3Q6IFJlcXVlc3RGdW5jdGlvbiA9IGFzeW5jIGZ1bmN0aW9uIDxUPihcbiAgdXJsOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc1xuKTogUHJvbWlzZTxUPiB7XG4gIGxldCByZXN1bHQ6IFQgfCBudWxsID0gbnVsbFxuICBsZXQgcmVzcG9uc2VFcnJvcjogUmVzcG9uc2VFcnJvciB8IG51bGwgPSBudWxsXG4gIHRyeSB7XG4gICAgLy8gT2JqZWN0cyBtdXN0IGJlIGNvcGllZCB0byBwcmV2ZW50IG1vZGlmaWNhdGlvbiBvZiBkYXRhIHN1Y2ggYXMgYm9keS5cbiAgICBjb25zdCBjb3B5T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpXG4gICAgaWYgKCFjb3B5T3B0aW9ucy5tZXRob2QpIHtcbiAgICAgIGNvcHlPcHRpb25zLm1ldGhvZCA9ICdHRVQnXG4gICAgfVxuICAgIGlmIChjb3B5T3B0aW9ucy5ib2R5ICYmIHR5cGVvZiBjb3B5T3B0aW9ucy5ib2R5ICE9PSAnc3RyaW5nJykge1xuICAgICAgY29weU9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvcHlPcHRpb25zLmJvZHkpXG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlUmVzdWx0OiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgY29weU9wdGlvbnMpXG4gICAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2VSZXN1bHQuanNvbigpXG4gICAgaWYgKGpzb25SZXNwb25zZT8uZXJyb3IpIHtcbiAgICAgIHJlc3BvbnNlRXJyb3IgPSBqc29uUmVzcG9uc2UgYXMgUmVzcG9uc2VFcnJvclxuICAgICAgcmVzcG9uc2VFcnJvci5lcnJvcl91cmkgPSBuZXcgVVJMKHVybCkucGF0aG5hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0ganNvblJlc3BvbnNlIGFzIFRcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzcG9uc2VFcnJvciA9IHtcbiAgICAgIGVycm9yOiBFcnJvclR5cGUuVU5SRUFDSEFCTEUsXG4gICAgICBlcnJvcl9kZXNjcmlwdGlvbjogZXJyb3IubWVzc2FnZSxcbiAgICAgIGVycm9yX3VyaTogbmV3IFVSTCh1cmwpLnBhdGhuYW1lLFxuICAgIH1cbiAgfVxuICBpZiAocmVzcG9uc2VFcnJvcikge1xuICAgIHRocm93IHJlc3BvbnNlRXJyb3JcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvUmVzcG9uc2VFcnJvciA9IChcbiAgZXJyb3I6IFJlc3BvbnNlRXJyb3IgfCBFcnJvcixcbiAgb3B0aW9ucz86IFRvUmVzcG9uc2VFcnJvck9wdGlvbnMsXG4pOiBSZXNwb25zZUVycm9yID0+IHtcbiAgbGV0IHJlc3BvbnNlRXJyb3I6IFJlc3BvbnNlRXJyb3JcbiAgY29uc3QgZm9ybWF0T3B0aW9uczogVG9SZXNwb25zZUVycm9yT3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICByZXNwb25zZUVycm9yID0ge1xuICAgICAgZXJyb3I6IGZvcm1hdE9wdGlvbnMuZXJyb3IgfHwgRXJyb3JUeXBlLkxPQ0FMLFxuICAgICAgZXJyb3JfZGVzY3JpcHRpb246IGZvcm1hdE9wdGlvbnMuZXJyb3JfZGVzY3JpcHRpb24gfHwgZXJyb3IubWVzc2FnZSxcbiAgICAgIGVycm9yX3VyaTogZm9ybWF0T3B0aW9ucy5lcnJvcl91cmksXG4gICAgICBkZXRhaWxzOiBmb3JtYXRPcHRpb25zLmRldGFpbHMgfHwgZXJyb3Iuc3RhY2ssXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZvcm1hdEVycm9yOiBUb1Jlc3BvbnNlRXJyb3JPcHRpb25zID0gZXJyb3IgfHwge31cbiAgICByZXNwb25zZUVycm9yID0ge1xuICAgICAgZXJyb3I6IGZvcm1hdE9wdGlvbnMuZXJyb3IgfHwgZm9ybWF0RXJyb3IuZXJyb3IgfHwgRXJyb3JUeXBlLkxPQ0FMLFxuICAgICAgZXJyb3JfZGVzY3JpcHRpb246XG4gICAgICAgIGZvcm1hdE9wdGlvbnMuZXJyb3JfZGVzY3JpcHRpb24gfHwgZm9ybWF0RXJyb3IuZXJyb3JfZGVzY3JpcHRpb24sXG4gICAgICBlcnJvcl91cmk6IGZvcm1hdE9wdGlvbnMuZXJyb3JfdXJpIHx8IGZvcm1hdEVycm9yLmVycm9yX3VyaSxcbiAgICAgIGRldGFpbHM6IGZvcm1hdE9wdGlvbnMuZGV0YWlscyB8fCBmb3JtYXRFcnJvci5kZXRhaWxzLFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzcG9uc2VFcnJvclxufVxuXG4vKipcbiAqIEdlbmVyYXRlIHJlcXVlc3QgaWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJlcXVlc3RJZCgpOiBzdHJpbmcge1xuICByZXR1cm4gdXVpZHY0KClcbn1cblxuXG4vKipcbiAqIERlZmF1bHQgU3RvcmFnZS5cbiAqL1xuY2xhc3MgRGVmYXVsdFN0b3JhZ2UgaW1wbGVtZW50cyBTaW1wbGVTdG9yYWdlIHtcbiAgLyoqXG4gICAgICogR2V0IGl0ZW0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqL1xuICBhc3luYyBnZXRJdGVtKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gIH1cblxuICAvKipcbiAgICAgKiBSZW1vdmUgaXRlbS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICovXG4gIGFzeW5jIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICB9XG5cbiAgLyoqXG4gICAgICogU2V0IGl0ZW0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICBhc3luYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpXG4gIH1cblxuICAvKipcbiAgICAgKiBHZXQgaXRlbSBzeW5jLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKi9cbiAgZ2V0SXRlbVN5bmMoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgfVxuXG4gIC8qKlxuICAgICAqIFJlbW92ZSBpdGVtIHN5bmMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqL1xuICByZW1vdmVJdGVtU3luYyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXG4gIH1cblxuICAvKipcbiAgICAgKiBTZXQgaXRlbSBzeW5jLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgc2V0SXRlbVN5bmMoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0b3JhZ2UgPSBuZXcgRGVmYXVsdFN0b3JhZ2UoKVxuXG5pbnRlcmZhY2UgTG9jYWxDcmVkZW50aWFsc09wdGlvbnMge1xuICB0b2tlblNlY3Rpb25OYW1lOiBzdHJpbmc7XG4gIHN0b3JhZ2U6IFNpbXBsZVN0b3JhZ2U7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgY3JlZGVudGlhbHMgaXMgZXhwaXJlZC5cbiAqIEBwYXJhbSB7Q3JlZGVudGlhbHN9IGNyZWRlbnRpYWxzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NyZWRlbnRpYWxzRXhwaXJlZChjcmVkZW50aWFsczogQ3JlZGVudGlhbHMpOiBib29sZWFuIHtcbiAgbGV0IGlzRXhwaXJlZCA9IHRydWVcbiAgaWYgKGNyZWRlbnRpYWxzPy5leHBpcmVzX2F0ICYmIGNyZWRlbnRpYWxzPy5hY2Nlc3NfdG9rZW4pIHtcbiAgICBpc0V4cGlyZWQgPSBjcmVkZW50aWFscy5leHBpcmVzX2F0IDwgbmV3IERhdGUoKVxuICB9XG4gIHJldHVybiBpc0V4cGlyZWRcbn1cblxuLyoqXG4gKiBMb2NhbCBjcmVkZW50aWFscy5cbiAqIExvY2FsIGNyZWRlbnRpYWxzLCB3aXRoIG1lbW9yeSBjYWNoZSBhbmQgc3RvcmFnZSBjYWNoZS5cbiAqIElmIHRoZSBtZW1vcnkgY2FjaGUgZXhwaXJlcywgdGhlIHN0b3JhZ2UgY2FjaGUgaXMgYXV0b21hdGljYWxseSBsb2FkZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2NhbENyZWRlbnRpYWxzIHtcbiAgcHJpdmF0ZSB0b2tlblNlY3Rpb25OYW1lOiBzdHJpbmdcblxuICBwcml2YXRlIHN0b3JhZ2U6IFNpbXBsZVN0b3JhZ2VcblxuICBwcml2YXRlIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyB8IG51bGwgPSBudWxsXG5cbiAgcHJpdmF0ZSBzaW5nbGVQcm9taXNlOiBTaW5nbGVQcm9taXNlID0gbmV3IFNpbmdsZVByb21pc2UoKVxuXG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0xvY2FsQ3JlZGVudGlhbHNPcHRpb25zfSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBMb2NhbENyZWRlbnRpYWxzT3B0aW9ucykge1xuICAgIHRoaXMudG9rZW5TZWN0aW9uTmFtZSA9IG9wdGlvbnMudG9rZW5TZWN0aW9uTmFtZVxuICAgIHRoaXMuc3RvcmFnZSA9IG9wdGlvbnMuc3RvcmFnZVxuICB9XG5cbiAgcHVibGljIGdldFN0b3JhZ2VDcmVkZW50aWFsc1N5bmMoKTogQ3JlZGVudGlhbHMgfCBudWxsIHtcbiAgICBsZXQgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzID0gbnVsbFxuICAgIGNvbnN0IHRva2VuU3RyOiBzdHJpbmcgPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbVN5bmModGhpcy50b2tlblNlY3Rpb25OYW1lLClcbiAgICBpZiAodG9rZW5TdHIgIT09IHVuZGVmaW5lZCAmJiB0b2tlblN0ciAhPT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY3JlZGVudGlhbHMgPSBKU09OLnBhcnNlKHRva2VuU3RyKVxuICAgICAgICBpZiAoY3JlZGVudGlhbHM/LmV4cGlyZXNfYXQpIHtcbiAgICAgICAgICBjcmVkZW50aWFscy5leHBpcmVzX2F0ID0gbmV3IERhdGUoY3JlZGVudGlhbHMuZXhwaXJlc19hdClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy50b2tlblNlY3Rpb25OYW1lKVxuICAgICAgICBjcmVkZW50aWFscyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyZWRlbnRpYWxzXG4gIH1cblxuICAvKipcbiAgICogc2V0Q3JlZGVudGlhbHMgUHJvdmlkZXMgYW4gYWx0ZXJuYXRpdmUgZmV0Y2ggYXBpIHJlcXVlc3QgaW1wbGVtZW50YXRpb24gd2l0aCBhdXRoIGNyZWRlbnRpYWxzXG4gICAqIEBwYXJhbSB7Q3JlZGVudGlhbHN9IGNyZWRlbnRpYWxzXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHM/OiBDcmVkZW50aWFscyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChjcmVkZW50aWFscz8uZXhwaXJlc19pbikge1xuICAgICAgY3JlZGVudGlhbHMuZXhwaXJlc19hdCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAoY3JlZGVudGlhbHMuZXhwaXJlc19pbiAtIDMwKSAqIDEwMDAsKVxuICAgICAgaWYgKHRoaXMuc3RvcmFnZSkge1xuICAgICAgICBjb25zdCB0b2tlblN0cjogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbHMpXG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXRJdGVtKHRoaXMudG9rZW5TZWN0aW9uTmFtZSwgdG9rZW5TdHIpXG4gICAgICB9XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHNcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RvcmFnZSkge1xuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnRva2VuU2VjdGlvbk5hbWUpXG4gICAgICB9XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3JlZGVudGlhbHMuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q3JlZGVudGlhbHMgfCBudWxsPn1cbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRDcmVkZW50aWFscygpOiBQcm9taXNlPENyZWRlbnRpYWxzIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZVByb21pc2UucnVuKCdnZXRDcmVkZW50aWFscycsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChpc0NyZWRlbnRpYWxzRXhwaXJlZCh0aGlzLmNyZWRlbnRpYWxzKSkge1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5nZXRTdG9yYWdlQ3JlZGVudGlhbHMoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHNcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdG9yYWdlIGNyZWRlbnRpYWxzLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBnZXRTdG9yYWdlQ3JlZGVudGlhbHMoKTogUHJvbWlzZTxDcmVkZW50aWFscyB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGVQcm9taXNlLnJ1bignX2dldFN0b3JhZ2VDcmVkZW50aWFscycsIGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBjcmVkZW50aWFsczogQ3JlZGVudGlhbHMgPSBudWxsXG4gICAgICBjb25zdCB0b2tlblN0cjogc3RyaW5nID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy50b2tlblNlY3Rpb25OYW1lLClcbiAgICAgIGlmICh0b2tlblN0ciAhPT0gdW5kZWZpbmVkICYmIHRva2VuU3RyICE9PSBudWxsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY3JlZGVudGlhbHMgPSBKU09OLnBhcnNlKHRva2VuU3RyKVxuICAgICAgICAgIGlmIChjcmVkZW50aWFscz8uZXhwaXJlc19hdCkge1xuICAgICAgICAgICAgY3JlZGVudGlhbHMuZXhwaXJlc19hdCA9IG5ldyBEYXRlKGNyZWRlbnRpYWxzLmV4cGlyZXNfYXQpXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMudG9rZW5TZWN0aW9uTmFtZSlcbiAgICAgICAgICBjcmVkZW50aWFscyA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNyZWRlbnRpYWxzXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIE9BdXRoMkNsaWVudFxuICovXG5leHBvcnQgY2xhc3MgT0F1dGgyQ2xpZW50IGltcGxlbWVudHMgQXV0aENsaWVudCB7XG4gIHByaXZhdGUgc3RhdGljIGRlZmF1bHRSZXRyeSA9IDJcbiAgcHJpdmF0ZSBzdGF0aWMgbWluUmV0cnkgPSAwXG4gIHByaXZhdGUgc3RhdGljIG1heFJldHJ5ID0gNVxuICBwcml2YXRlIHN0YXRpYyByZXRyeUludGVydmFsID0gMTAwMFxuXG4gIHByaXZhdGUgYXBpT3JpZ2luOiBzdHJpbmdcbiAgcHJpdmF0ZSBjbGllbnRJZDogc3RyaW5nXG4gIHByaXZhdGUgcmV0cnk6IG51bWJlclxuICBwcml2YXRlIGNsaWVudFNlY3JldD86IHN0cmluZ1xuICBwcml2YXRlIGJhc2VSZXF1ZXN0OiA8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zLFxuICApID0+IFByb21pc2U8VD5cbiAgcHJpdmF0ZSBsb2NhbENyZWRlbnRpYWxzOiBMb2NhbENyZWRlbnRpYWxzXG4gIHByaXZhdGUgc3RvcmFnZTogU2ltcGxlU3RvcmFnZVxuICBwcml2YXRlIGRldmljZUlEPzogc3RyaW5nXG4gIHByaXZhdGUgdG9rZW5JblVSTD86IGJvb2xlYW5cbiAgcHJpdmF0ZSByZWZyZXNoVG9rZW5GdW5jOiAocmVmcmVzaFRva2VuPzogc3RyaW5nKSA9PiBQcm9taXNlPENyZWRlbnRpYWxzPlxuICBwcml2YXRlIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHByaXZhdGUgc2luZ2xlUHJvbWlzZTogU2luZ2xlUHJvbWlzZSA9IG5ldyBTaW5nbGVQcm9taXNlKClcbiAgcHJpdmF0ZSBhbm9ueW1vdXNTaWduSW5GdW5jOiAoQ3JlZGVudGlhbHMpID0+IFByb21pc2U8Q3JlZGVudGlhbHMgfCB2b2lkPlxuXG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09BdXRoMkNsaWVudE9wdGlvbnN9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9BdXRoMkNsaWVudE9wdGlvbnMpIHtcbiAgICB0aGlzLmFwaU9yaWdpbiA9IG9wdGlvbnMuYXBpT3JpZ2luXG4gICAgdGhpcy5jbGllbnRJZCA9IG9wdGlvbnMuY2xpZW50SWRcbiAgICB0aGlzLnJldHJ5ID0gdGhpcy5mb3JtYXRSZXRyeShvcHRpb25zLnJldHJ5LCBPQXV0aDJDbGllbnQuZGVmYXVsdFJldHJ5KVxuICAgIGlmIChvcHRpb25zLmJhc2VSZXF1ZXN0KSB7XG4gICAgICB0aGlzLmJhc2VSZXF1ZXN0ID0gb3B0aW9ucy5iYXNlUmVxdWVzdFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhc2VSZXF1ZXN0ID0gZGVmYXVsdFJlcXVlc3RcbiAgICB9XG4gICAgdGhpcy50b2tlbkluVVJMID0gb3B0aW9ucy50b2tlbkluVVJMXG4gICAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuc3RvcmFnZSA9IG9wdGlvbnMuc3RvcmFnZSB8fCBkZWZhdWx0U3RvcmFnZVxuICAgIHRoaXMubG9jYWxDcmVkZW50aWFscyA9IG5ldyBMb2NhbENyZWRlbnRpYWxzKHtcbiAgICAgIHRva2VuU2VjdGlvbk5hbWU6IGBjcmVkZW50aWFsc18ke29wdGlvbnMuY2xpZW50SWR9YCxcbiAgICAgIHN0b3JhZ2U6IHRoaXMuc3RvcmFnZSxcbiAgICB9KVxuICAgIHRoaXMuY2xpZW50U2VjcmV0ID0gb3B0aW9ucy5jbGllbnRTZWNyZXRcbiAgICB0aGlzLnJlZnJlc2hUb2tlbkZ1bmMgPSAgICAgIG9wdGlvbnMucmVmcmVzaFRva2VuRnVuYyB8fCB0aGlzLmRlZmF1bHRSZWZyZXNoVG9rZW5GdW5jXG4gICAgdGhpcy5hbm9ueW1vdXNTaWduSW5GdW5jID0gb3B0aW9ucy5hbm9ueW1vdXNTaWduSW5GdW5jXG4gIH1cblxuICAvKipcbiAgICogc2V0Q3JlZGVudGlhbHMgUHJvdmlkZXMgYW4gYWx0ZXJuYXRpdmUgZmV0Y2ggYXBpIHJlcXVlc3QgaW1wbGVtZW50YXRpb24gd2l0aCBhdXRoIGNyZWRlbnRpYWxzXG4gICAqIEBwYXJhbSB7Q3JlZGVudGlhbHN9IGNyZWRlbnRpYWxzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBwdWJsaWMgc2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHM/OiBDcmVkZW50aWFscyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmxvY2FsQ3JlZGVudGlhbHMuc2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHMpXG4gIH1cblxuICAvKipcbiAgICogZ2V0QWNjZXNzVG9rZW4gcmV0dXJuIGEgdmFsaWRhdGUgYWNjZXNzIHRva2VuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBjcmVkZW50aWFsczogQ3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLmdldENyZWRlbnRpYWxzKClcbiAgICBpZiAoY3JlZGVudGlhbHM/LmFjY2Vzc190b2tlbikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjcmVkZW50aWFscy5hY2Nlc3NfdG9rZW4pXG4gICAgfVxuICAgIGNvbnN0IHJlc3BFcnI6IFJlc3BvbnNlRXJyb3IgPSB7IGVycm9yOiBFcnJvclR5cGUuVU5BVVRIRU5USUNBVEVEIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcEVycilcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1ZXN0IGh0dHAgbGlrZSBzaW1wbGUgZmV0Y2ggYXBpLCBleHA6cmVxdWVzdCgnL3YxL3VzZXIvbWUnLCB7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7QXV0aENsaWVudFJlcXVlc3RPcHRpb25zfSBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcmVxdWVzdDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzogQXV0aENsaWVudFJlcXVlc3RPcHRpb25zLFxuICApOiBQcm9taXNlPFQ+IHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cbiAgICBjb25zdCByZXRyeTogbnVtYmVyID0gdGhpcy5mb3JtYXRSZXRyeShvcHRpb25zLnJldHJ5LCB0aGlzLnJldHJ5KVxuICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fVxuICAgIGlmICh0aGlzLmhlYWRlcnMpIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgLi4udGhpcy5oZWFkZXJzLFxuICAgICAgICAuLi5vcHRpb25zLmhlYWRlcnMsXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5oZWFkZXJzW1JlcXVlc3RJZEhlYWRlck5hbWVdKSB7XG4gICAgICBvcHRpb25zLmhlYWRlcnNbUmVxdWVzdElkSGVhZGVyTmFtZV0gPSBnZW5lcmF0ZVJlcXVlc3RJZCgpXG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5oZWFkZXJzW0RldmljZUlkSGVhZGVyTmFtZV0pIHtcbiAgICAgIGNvbnN0IGRldmljZUlkID0gYXdhaXQgdGhpcy5nZXREZXZpY2VJZCgpXG4gICAgICBvcHRpb25zLmhlYWRlcnNbRGV2aWNlSWRIZWFkZXJOYW1lXSA9IGRldmljZUlkXG4gICAgfVxuICAgIGlmIChvcHRpb25zPy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5nZXRDcmVkZW50aWFscygpXG4gICAgICBpZiAoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5JblVSTCkge1xuICAgICAgICAgIGlmICh1cmwuaW5kZXhPZignPycpIDwgMCkge1xuICAgICAgICAgICAgdXJsICs9ICc/J1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cmwgKz0gYGFjY2Vzc190b2tlbj0ke2NyZWRlbnRpYWxzLmFjY2Vzc190b2tlbn1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAgICAgICAgICAgIGAke2NyZWRlbnRpYWxzLnRva2VuX3R5cGV9ICR7Y3JlZGVudGlhbHMuYWNjZXNzX3Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jbGllbnRJZCAmJiB1cmwuaW5kZXhPZignY2xpZW50X2lkJykgPCAwKSB7XG4gICAgICAgIHVybCArPSB1cmwuaW5kZXhPZignPycpIDwgMCA/ICc/JyA6ICcmJ1xuICAgICAgICB1cmwgKz0gYGNsaWVudF9pZD0ke3RoaXMuY2xpZW50SWR9YFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgdXJsID0gdGhpcy5hcGlPcmlnaW4gKyB1cmxcbiAgICB9XG4gICAgbGV0IHJlc3BvbnNlOiBUIHwgbnVsbCA9IG51bGxcbiAgICBjb25zdCBtYXhSZXF1ZXN0VGltZXM6IG51bWJlciA9IHJldHJ5ICsgMVxuICAgIGZvciAoXG4gICAgICBsZXQgcmVxdWVzdFRpbWUgPSAwO1xuICAgICAgcmVxdWVzdFRpbWUgPCBtYXhSZXF1ZXN0VGltZXM7XG4gICAgICByZXF1ZXN0VGltZSsrXG4gICAgKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuYmFzZVJlcXVlc3Q8VD4odXJsLCBvcHRpb25zKVxuICAgICAgICBicmVha1xuICAgICAgfSBjYXRjaCAocmVzcG9uc2VFcnJvcikge1xuICAgICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgJiYgcmVzcG9uc2VFcnJvciAmJiByZXNwb25zZUVycm9yLmVycm9yID09PSBFcnJvclR5cGUuVU5BVVRIRU5USUNBVEVEKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5zZXRDcmVkZW50aWFscyhudWxsKVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZUVycm9yKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJlcXVlc3RUaW1lID09PSByZXRyeVxuICAgICAgICAgIHx8ICFyZXNwb25zZUVycm9yXG4gICAgICAgICAgfHwgcmVzcG9uc2VFcnJvci5lcnJvciAhPT0gJ3VucmVhY2hhYmxlJ1xuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2VFcnJvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5zbGVlcChPQXV0aDJDbGllbnQucmV0cnlJbnRlcnZhbClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgY3JlZGVudGlhbHMuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0Q3JlZGVudGlhbHMoKTogUHJvbWlzZTxDcmVkZW50aWFscyB8IG51bGw+IHtcbiAgICBsZXQgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5sb2NhbENyZWRlbnRpYWxzLmdldENyZWRlbnRpYWxzKClcbiAgICBpZiAoaXNDcmVkZW50aWFsc0V4cGlyZWQoY3JlZGVudGlhbHMpKSB7XG4gICAgICBpZiAoY3JlZGVudGlhbHMgJiYgY3JlZGVudGlhbHMuc2NvcGUgPT09ICdhbm9ueW1vdXMnKSB7XG4gICAgICAgIGlmICh0aGlzLmFub255bW91c1NpZ25JbkZ1bmMpIHtcbiAgICAgICAgICBjb25zdCBjID0gYXdhaXQgdGhpcy5hbm9ueW1vdXNTaWduSW5GdW5jKGNyZWRlbnRpYWxzKVxuICAgICAgICAgIGNyZWRlbnRpYWxzID0gYyB8fCBhd2FpdCB0aGlzLmxvY2FsQ3JlZGVudGlhbHMuZ2V0Q3JlZGVudGlhbHMoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5hbm9ueW1vdXNTaWduSW4oY3JlZGVudGlhbHMpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5yZWZyZXNoVG9rZW4oY3JlZGVudGlhbHMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmVkZW50aWFsc1xuICB9XG5cbiAgcHVibGljIGdldENyZWRlbnRpYWxzU3luYygpOiBDcmVkZW50aWFscyB8IG51bGwge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyA9IHRoaXMubG9jYWxDcmVkZW50aWFscy5nZXRTdG9yYWdlQ3JlZGVudGlhbHNTeW5jKClcbiAgICByZXR1cm4gY3JlZGVudGlhbHNcbiAgfVxuXG4gIHB1YmxpYyBnZXRDcmVkZW50aWFsc0FzeW5jKCk6IFByb21pc2U8Q3JlZGVudGlhbHMgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxDcmVkZW50aWFscy5nZXRDcmVkZW50aWFscygpXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0U2NvcGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBjcmVkZW50aWFsczogQ3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLmxvY2FsQ3JlZGVudGlhbHMuZ2V0Q3JlZGVudGlhbHMoKVxuICAgIGlmICghY3JlZGVudGlhbHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuQXV0aGVudGljYXRlZEVycm9yKCdjcmVkZW50aWFscyBub3QgZm91bmQnKVxuICAgIH1cbiAgICByZXR1cm4gY3JlZGVudGlhbHMuc2NvcGVcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRHcm91cHMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyA9IGF3YWl0IHRoaXMubG9jYWxDcmVkZW50aWFscy5nZXRDcmVkZW50aWFscygpXG4gICAgaWYgKCFjcmVkZW50aWFscykge1xuICAgICAgcmV0dXJuIHRoaXMudW5BdXRoZW50aWNhdGVkRXJyb3IoJ2NyZWRlbnRpYWxzIG5vdCBmb3VuZCcpXG4gICAgfVxuICAgIHJldHVybiBjcmVkZW50aWFscy5ncm91cHNcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayByZXRyeSB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJldHJ5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHByaXZhdGUgY2hlY2tSZXRyeShyZXRyeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzcG9uc2VFcnJvcjogUmVzcG9uc2VFcnJvciB8IG51bGwgPSBudWxsXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHJldHJ5ICE9PSAnbnVtYmVyJ1xuICAgICAgfHwgcmV0cnkgPCBPQXV0aDJDbGllbnQubWluUmV0cnlcbiAgICAgIHx8IHJldHJ5ID4gT0F1dGgyQ2xpZW50Lm1heFJldHJ5XG4gICAgKSB7XG4gICAgICByZXNwb25zZUVycm9yID0ge1xuICAgICAgICBlcnJvcjogRXJyb3JUeXBlLlVOUkVBQ0hBQkxFLFxuICAgICAgICBlcnJvcl9kZXNjcmlwdGlvbjogJ3dyb25nIG9wdGlvbnMgcGFyYW06IHJldHJ5JyxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlRXJyb3IpIHtcbiAgICAgIHRocm93IHJlc3BvbnNlRXJyb3JcbiAgICB9XG4gICAgcmV0dXJuIHJldHJ5XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IHJldHJ5IHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcmV0cnlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlZmF1bHRWYWxlXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHByaXZhdGUgZm9ybWF0UmV0cnkocmV0cnk6IG51bWJlciwgZGVmYXVsdFZhbGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiByZXRyeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsZVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jaGVja1JldHJ5KHJldHJ5KVxuICB9XG5cbiAgLyoqXG4gICAqIFNsZWVwLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbXNcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSwgbXMpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIGV4cGlyZWQgdG9rZW4uXG4gICAqIEBwYXJhbSB7Q3JlZGVudGlhbHN9IGNyZWRlbnRpYWxzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q3JlZGVudGlhbHM+fVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyByZWZyZXNoVG9rZW4oY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzKTogUHJvbWlzZTxDcmVkZW50aWFscz4ge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZVByb21pc2UucnVuKCdfcmVmcmVzaFRva2VuJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFjcmVkZW50aWFscyB8fCAhY3JlZGVudGlhbHMucmVmcmVzaF90b2tlbikge1xuICAgICAgICByZXR1cm4gdGhpcy51bkF1dGhlbnRpY2F0ZWRFcnJvcignbm8gcmVmcmVzaCB0b2tlbiBmb3VuZCBpbiBjcmVkZW50aWFscycpXG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdDcmVkZW50aWFsczogQ3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLnJlZnJlc2hUb2tlbkZ1bmMoY3JlZGVudGlhbHMucmVmcmVzaF90b2tlbiwpXG4gICAgICAgIGF3YWl0IHRoaXMubG9jYWxDcmVkZW50aWFscy5zZXRDcmVkZW50aWFscyhuZXdDcmVkZW50aWFscylcbiAgICAgICAgcmV0dXJuIG5ld0NyZWRlbnRpYWxzXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuZXJyb3IgPT09IEVycm9yVHlwZS5JTlZBTElEX0dSQU5UKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5sb2NhbENyZWRlbnRpYWxzLnNldENyZWRlbnRpYWxzKG51bGwpXG4gICAgICAgICAgcmV0dXJuIHRoaXMudW5BdXRoZW50aWNhdGVkRXJyb3IoZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogYW5vbnltb3VzIHNpZ25JblxuICAgKiBAcGFyYW0ge0NyZWRlbnRpYWxzfSBjcmVkZW50aWFsc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPENyZWRlbnRpYWxzPn1cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYW5vbnltb3VzU2lnbkluKGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyk6IFByb21pc2U8Q3JlZGVudGlhbHM+IHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGVQcm9taXNlLnJ1bignX2Fub255bW91cycsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghY3JlZGVudGlhbHMgfHwgY3JlZGVudGlhbHMuc2NvcGUgIT09ICdhbm9ueW1vdXMnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuQXV0aGVudGljYXRlZEVycm9yKCdubyBhbm9ueW1vdXMgaW4gY3JlZGVudGlhbHMnKVxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV3Q3JlZGVudGlhbHM6IENyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCcvYXV0aC92MS9zaWduaW4vYW5vbnltb3VzbHknLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5jbGllbnRTZWNyZXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdGhpcy5sb2NhbENyZWRlbnRpYWxzLnNldENyZWRlbnRpYWxzKG5ld0NyZWRlbnRpYWxzKVxuICAgICAgICByZXR1cm4gbmV3Q3JlZGVudGlhbHNcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5lcnJvciA9PT0gRXJyb3JUeXBlLklOVkFMSURfR1JBTlQpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmxvY2FsQ3JlZGVudGlhbHMuc2V0Q3JlZGVudGlhbHMobnVsbClcbiAgICAgICAgICByZXR1cm4gdGhpcy51bkF1dGhlbnRpY2F0ZWRFcnJvcihlcnJvci5lcnJvcl9kZXNjcmlwdGlvbilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHJlZnJlc2ggdG9rZW4gZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWZyZXNoVG9rZW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxDcmVkZW50aWFscz59XG4gICAqL1xuICBwcml2YXRlIGRlZmF1bHRSZWZyZXNoVG9rZW5GdW5jKHJlZnJlc2hUb2tlbj86IHN0cmluZywpOiBQcm9taXNlPENyZWRlbnRpYWxzPiB7XG4gICAgaWYgKHJlZnJlc2hUb2tlbiA9PT0gdW5kZWZpbmVkIHx8IHJlZnJlc2hUb2tlbiA9PT0gJycpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuQXV0aGVudGljYXRlZEVycm9yKCdyZWZyZXNoIHRva2VuIG5vdCBmb3VuZCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJy9hdXRoL3YxL3Rva2VuJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiB7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcbiAgICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5jbGllbnRTZWNyZXQsXG4gICAgICAgIGdyYW50X3R5cGU6ICdyZWZyZXNoX3Rva2VuJyxcbiAgICAgICAgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuLFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZXZpY2VJZFxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBnZXREZXZpY2VJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGlmICh0aGlzLmRldmljZUlEKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZXZpY2VJRFxuICAgIH1cbiAgICBsZXQgZGV2aWNlSWQ6IHN0cmluZyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKERldmljZUlkU2VjdGlvbk5hbWUsKVxuICAgIGlmICghKHR5cGVvZiBkZXZpY2VJZCA9PT0gJ3N0cmluZydcbiAgICAgICYmIGRldmljZUlkLmxlbmd0aCA+PSAxNlxuICAgICAgJiYgZGV2aWNlSWQubGVuZ3RoIDw9IDQ4KSkge1xuICAgICAgZGV2aWNlSWQgPSB1dWlkdjQoKVxuICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldEl0ZW0oRGV2aWNlSWRTZWN0aW9uTmFtZSwgZGV2aWNlSWQpXG4gICAgfVxuICAgIHRoaXMuZGV2aWNlSUQgPSBkZXZpY2VJZFxuICAgIHJldHVybiBkZXZpY2VJZFxuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZSB1bkF1dGhlbnRpY2F0ZWQgZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJcbiAgICogQHJldHVybiB7UHJvbWlzZTxUPn1cbiAgICovXG4gIHByaXZhdGUgdW5BdXRoZW50aWNhdGVkRXJyb3I8VD4oZXJyPzogc3RyaW5nKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgcmVzcEVycjogUmVzcG9uc2VFcnJvciA9IHtcbiAgICAgIGVycm9yOiBFcnJvclR5cGUuVU5BVVRIRU5USUNBVEVELFxuICAgICAgZXJyb3JfZGVzY3JpcHRpb246IGVycixcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BFcnIpXG4gIH1cbn1cbiJdfQ==
}, function(modId) { var map = {"./consts":1734234913762,"../utils/uuid":1734234913763,"../utils/function/single-promise":1734234913764}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913762, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorType = exports.Syntax = void 0;
var Syntax;
(function (Syntax) {
    Syntax["CLIENT_ID"] = "client_id";
    Syntax["CLIENT_SECRET"] = "client_secret";
    Syntax["RESPONSE_TYPE"] = "response_type";
    Syntax["SCOPE"] = "scope";
    Syntax["STATE"] = "state";
    Syntax["REDIRECT_URI"] = "redirect_uri";
    Syntax["ERROR"] = "error";
    Syntax["ERROR_DESCRIPTION"] = "error_description";
    Syntax["ERROR_URI"] = "error_uri";
    Syntax["GRANT_TYPE"] = "grant_type";
    Syntax["CODE"] = "code";
    Syntax["ACCESS_TOKEN"] = "access_token";
    Syntax["TOKEN_TYPE"] = "token_type";
    Syntax["EXPIRES_IN"] = "expires_in";
    Syntax["USERNAME"] = "username";
    Syntax["PASSWORD"] = "password";
    Syntax["REFRESH_TOKEN"] = "refresh_token";
})(Syntax = exports.Syntax || (exports.Syntax = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["UNREACHABLE"] = "unreachable";
    ErrorType["LOCAL"] = "local";
    ErrorType["CANCELLED"] = "cancelled";
    ErrorType["UNKNOWN"] = "unknown";
    ErrorType["INVALID_ARGUMENT"] = "invalid_argument";
    ErrorType["DEADLINE_EXCEEDED"] = "deadline_exceeded";
    ErrorType["NOT_FOUND"] = "not_found";
    ErrorType["ALREADY_EXISTS"] = "already_exists";
    ErrorType["PERMISSION_DENIED"] = "permission_denied";
    ErrorType["UNAUTHENTICATED"] = "unauthenticated";
    ErrorType["RESOURCE_EXHAUSTED"] = "resource_exhausted";
    ErrorType["FAILED_PRECONDITION"] = "failed_precondition";
    ErrorType["ABORTED"] = "aborted";
    ErrorType["OUT_OF_RANGE"] = "out_of_range";
    ErrorType["UNIMPLEMENTED"] = "unimplemented";
    ErrorType["INTERNAL"] = "internal";
    ErrorType["UNAVAILABLE"] = "unavailable";
    ErrorType["DATA_LOSS"] = "data_loss";
    ErrorType["CAPTCHA_REQUIRED"] = "captcha_required";
    ErrorType["CAPTCHA_INVALID"] = "captcha_invalid";
    ErrorType["INVALID_PASSWORD"] = "invalid_password";
    ErrorType["INVALID_STATUS"] = "invalid_status";
    ErrorType["USER_PENDING"] = "user_pending";
    ErrorType["USER_BLOCKED"] = "user_blocked";
    ErrorType["INVALID_VERIFICATION_CODE"] = "invalid_verification_code";
    ErrorType["TWO_FACTOR_REQUIRED"] = "two_factor_required";
    ErrorType["INVALID_TWO_FACTOR"] = "invalid_two_factor";
    ErrorType["INVALID_TWO_FACTOR_RECOVERY"] = "invalid_two_factor_recovery";
    ErrorType["UNDER_REVIEW"] = "under_review";
    ErrorType["INVALID_REQUEST"] = "invalid_request";
    ErrorType["UNAUTHORIZED_CLIENT"] = "unauthorized_client";
    ErrorType["ACCESS_DENIED"] = "access_denied";
    ErrorType["UNSUPPORTED_RESPONSE_TYPE"] = "unsupported_response_type";
    ErrorType["INVALID_SCOPE"] = "invalid_scope";
    ErrorType["INVALID_GRANT"] = "invalid_grant";
    ErrorType["SERVER_ERROR"] = "server_error";
    ErrorType["TEMPORARILY_UNAVAILABLE"] = "temporarily_unavailable";
    ErrorType["INTERACTION_REQUIRED"] = "interaction_required";
    ErrorType["LOGIN_REQUIRED"] = "login_required";
    ErrorType["ACCOUNT_SELECTION_REQUIRED"] = "account_selection_required";
    ErrorType["CONSENT_REQUIRED"] = "consent_required";
    ErrorType["INVALID_REQUEST_URI"] = "invalid_request_uri";
    ErrorType["INVALID_REQUEST_OBJECT"] = "invalid_request_object";
    ErrorType["REQUEST_NOT_SUPPORTED"] = "request_not_supported";
    ErrorType["REQUEST_URI_NOT_SUPPORTED"] = "request_uri_not_supported";
    ErrorType["REGISTRATION_NOT_SUPPORTED"] = "registration_not_supported";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29hdXRoMmNsaWVudC9jb25zdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBWSxNQWtCWDtBQWxCRCxXQUFZLE1BQU07SUFDaEIsaUNBQXVCLENBQUE7SUFDdkIseUNBQStCLENBQUE7SUFDL0IseUNBQStCLENBQUE7SUFDL0IseUJBQWUsQ0FBQTtJQUNmLHlCQUFlLENBQUE7SUFDZix1Q0FBNkIsQ0FBQTtJQUM3Qix5QkFBZSxDQUFBO0lBQ2YsaURBQXVDLENBQUE7SUFDdkMsaUNBQXVCLENBQUE7SUFDdkIsbUNBQXlCLENBQUE7SUFDekIsdUJBQWEsQ0FBQTtJQUNiLHVDQUE2QixDQUFBO0lBQzdCLG1DQUF5QixDQUFBO0lBQ3pCLG1DQUF5QixDQUFBO0lBQ3pCLCtCQUFxQixDQUFBO0lBQ3JCLCtCQUFxQixDQUFBO0lBQ3JCLHlDQUErQixDQUFBO0FBQ2pDLENBQUMsRUFsQlcsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBa0JqQjtBQUVELElBQVksU0FnRFg7QUFoREQsV0FBWSxTQUFTO0lBQ25CLHdDQUEyQixDQUFBO0lBQzNCLDRCQUFlLENBQUE7SUFDZixvQ0FBdUIsQ0FBQTtJQUN2QixnQ0FBbUIsQ0FBQTtJQUNuQixrREFBcUMsQ0FBQTtJQUNyQyxvREFBdUMsQ0FBQTtJQUN2QyxvQ0FBdUIsQ0FBQTtJQUN2Qiw4Q0FBaUMsQ0FBQTtJQUNqQyxvREFBdUMsQ0FBQTtJQUN2QyxnREFBbUMsQ0FBQTtJQUNuQyxzREFBeUMsQ0FBQTtJQUN6Qyx3REFBMkMsQ0FBQTtJQUMzQyxnQ0FBbUIsQ0FBQTtJQUNuQiwwQ0FBNkIsQ0FBQTtJQUM3Qiw0Q0FBK0IsQ0FBQTtJQUMvQixrQ0FBcUIsQ0FBQTtJQUNyQix3Q0FBMkIsQ0FBQTtJQUMzQixvQ0FBdUIsQ0FBQTtJQUV2QixrREFBcUMsQ0FBQTtJQUNyQyxnREFBbUMsQ0FBQTtJQUNuQyxrREFBcUMsQ0FBQTtJQUNyQyw4Q0FBaUMsQ0FBQTtJQUNqQywwQ0FBNkIsQ0FBQTtJQUM3QiwwQ0FBNkIsQ0FBQTtJQUM3QixvRUFBdUQsQ0FBQTtJQUN2RCx3REFBMkMsQ0FBQTtJQUMzQyxzREFBeUMsQ0FBQTtJQUN6Qyx3RUFBMkQsQ0FBQTtJQUMzRCwwQ0FBNkIsQ0FBQTtJQUM3QixnREFBbUMsQ0FBQTtJQUNuQyx3REFBMkMsQ0FBQTtJQUMzQyw0Q0FBK0IsQ0FBQTtJQUMvQixvRUFBdUQsQ0FBQTtJQUN2RCw0Q0FBK0IsQ0FBQTtJQUMvQiw0Q0FBK0IsQ0FBQTtJQUMvQiwwQ0FBNkIsQ0FBQTtJQUM3QixnRUFBbUQsQ0FBQTtJQUNuRCwwREFBNkMsQ0FBQTtJQUM3Qyw4Q0FBaUMsQ0FBQTtJQUNqQyxzRUFBeUQsQ0FBQTtJQUN6RCxrREFBcUMsQ0FBQTtJQUNyQyx3REFBMkMsQ0FBQTtJQUMzQyw4REFBaUQsQ0FBQTtJQUNqRCw0REFBK0MsQ0FBQTtJQUMvQyxvRUFBdUQsQ0FBQTtJQUN2RCxzRUFBeUQsQ0FBQTtBQUMzRCxDQUFDLEVBaERXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBZ0RwQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFN5bnRheCB7XG4gIENMSUVOVF9JRCA9ICdjbGllbnRfaWQnLFxuICBDTElFTlRfU0VDUkVUID0gJ2NsaWVudF9zZWNyZXQnLFxuICBSRVNQT05TRV9UWVBFID0gJ3Jlc3BvbnNlX3R5cGUnLFxuICBTQ09QRSA9ICdzY29wZScsXG4gIFNUQVRFID0gJ3N0YXRlJyxcbiAgUkVESVJFQ1RfVVJJID0gJ3JlZGlyZWN0X3VyaScsXG4gIEVSUk9SID0gJ2Vycm9yJyxcbiAgRVJST1JfREVTQ1JJUFRJT04gPSAnZXJyb3JfZGVzY3JpcHRpb24nLFxuICBFUlJPUl9VUkkgPSAnZXJyb3JfdXJpJyxcbiAgR1JBTlRfVFlQRSA9ICdncmFudF90eXBlJyxcbiAgQ09ERSA9ICdjb2RlJyxcbiAgQUNDRVNTX1RPS0VOID0gJ2FjY2Vzc190b2tlbicsXG4gIFRPS0VOX1RZUEUgPSAndG9rZW5fdHlwZScsXG4gIEVYUElSRVNfSU4gPSAnZXhwaXJlc19pbicsXG4gIFVTRVJOQU1FID0gJ3VzZXJuYW1lJyxcbiAgUEFTU1dPUkQgPSAncGFzc3dvcmQnLFxuICBSRUZSRVNIX1RPS0VOID0gJ3JlZnJlc2hfdG9rZW4nLFxufVxuXG5leHBvcnQgZW51bSBFcnJvclR5cGUge1xuICBVTlJFQUNIQUJMRSA9ICd1bnJlYWNoYWJsZScsXG4gIExPQ0FMID0gJ2xvY2FsJyxcbiAgQ0FOQ0VMTEVEID0gJ2NhbmNlbGxlZCcsXG4gIFVOS05PV04gPSAndW5rbm93bicsXG4gIElOVkFMSURfQVJHVU1FTlQgPSAnaW52YWxpZF9hcmd1bWVudCcsXG4gIERFQURMSU5FX0VYQ0VFREVEID0gJ2RlYWRsaW5lX2V4Y2VlZGVkJyxcbiAgTk9UX0ZPVU5EID0gJ25vdF9mb3VuZCcsXG4gIEFMUkVBRFlfRVhJU1RTID0gJ2FscmVhZHlfZXhpc3RzJyxcbiAgUEVSTUlTU0lPTl9ERU5JRUQgPSAncGVybWlzc2lvbl9kZW5pZWQnLFxuICBVTkFVVEhFTlRJQ0FURUQgPSAndW5hdXRoZW50aWNhdGVkJyxcbiAgUkVTT1VSQ0VfRVhIQVVTVEVEID0gJ3Jlc291cmNlX2V4aGF1c3RlZCcsXG4gIEZBSUxFRF9QUkVDT05ESVRJT04gPSAnZmFpbGVkX3ByZWNvbmRpdGlvbicsXG4gIEFCT1JURUQgPSAnYWJvcnRlZCcsXG4gIE9VVF9PRl9SQU5HRSA9ICdvdXRfb2ZfcmFuZ2UnLFxuICBVTklNUExFTUVOVEVEID0gJ3VuaW1wbGVtZW50ZWQnLFxuICBJTlRFUk5BTCA9ICdpbnRlcm5hbCcsXG4gIFVOQVZBSUxBQkxFID0gJ3VuYXZhaWxhYmxlJyxcbiAgREFUQV9MT1NTID0gJ2RhdGFfbG9zcycsXG4gIC8vIENvbW1vbkVycm9yXG4gIENBUFRDSEFfUkVRVUlSRUQgPSAnY2FwdGNoYV9yZXF1aXJlZCcsXG4gIENBUFRDSEFfSU5WQUxJRCA9ICdjYXB0Y2hhX2ludmFsaWQnLFxuICBJTlZBTElEX1BBU1NXT1JEID0gJ2ludmFsaWRfcGFzc3dvcmQnLFxuICBJTlZBTElEX1NUQVRVUyA9ICdpbnZhbGlkX3N0YXR1cycsXG4gIFVTRVJfUEVORElORyA9ICd1c2VyX3BlbmRpbmcnLFxuICBVU0VSX0JMT0NLRUQgPSAndXNlcl9ibG9ja2VkJyxcbiAgSU5WQUxJRF9WRVJJRklDQVRJT05fQ09ERSA9ICdpbnZhbGlkX3ZlcmlmaWNhdGlvbl9jb2RlJyxcbiAgVFdPX0ZBQ1RPUl9SRVFVSVJFRCA9ICd0d29fZmFjdG9yX3JlcXVpcmVkJyxcbiAgSU5WQUxJRF9UV09fRkFDVE9SID0gJ2ludmFsaWRfdHdvX2ZhY3RvcicsXG4gIElOVkFMSURfVFdPX0ZBQ1RPUl9SRUNPVkVSWSA9ICdpbnZhbGlkX3R3b19mYWN0b3JfcmVjb3ZlcnknLFxuICBVTkRFUl9SRVZJRVcgPSAndW5kZXJfcmV2aWV3JyxcbiAgSU5WQUxJRF9SRVFVRVNUID0gJ2ludmFsaWRfcmVxdWVzdCcsXG4gIFVOQVVUSE9SSVpFRF9DTElFTlQgPSAndW5hdXRob3JpemVkX2NsaWVudCcsXG4gIEFDQ0VTU19ERU5JRUQgPSAnYWNjZXNzX2RlbmllZCcsXG4gIFVOU1VQUE9SVEVEX1JFU1BPTlNFX1RZUEUgPSAndW5zdXBwb3J0ZWRfcmVzcG9uc2VfdHlwZScsXG4gIElOVkFMSURfU0NPUEUgPSAnaW52YWxpZF9zY29wZScsXG4gIElOVkFMSURfR1JBTlQgPSAnaW52YWxpZF9ncmFudCcsXG4gIFNFUlZFUl9FUlJPUiA9ICdzZXJ2ZXJfZXJyb3InLFxuICBURU1QT1JBUklMWV9VTkFWQUlMQUJMRSA9ICd0ZW1wb3JhcmlseV91bmF2YWlsYWJsZScsXG4gIElOVEVSQUNUSU9OX1JFUVVJUkVEID0gJ2ludGVyYWN0aW9uX3JlcXVpcmVkJyxcbiAgTE9HSU5fUkVRVUlSRUQgPSAnbG9naW5fcmVxdWlyZWQnLFxuICBBQ0NPVU5UX1NFTEVDVElPTl9SRVFVSVJFRCA9ICdhY2NvdW50X3NlbGVjdGlvbl9yZXF1aXJlZCcsXG4gIENPTlNFTlRfUkVRVUlSRUQgPSAnY29uc2VudF9yZXF1aXJlZCcsXG4gIElOVkFMSURfUkVRVUVTVF9VUkkgPSAnaW52YWxpZF9yZXF1ZXN0X3VyaScsXG4gIElOVkFMSURfUkVRVUVTVF9PQkpFQ1QgPSAnaW52YWxpZF9yZXF1ZXN0X29iamVjdCcsXG4gIFJFUVVFU1RfTk9UX1NVUFBPUlRFRCA9ICdyZXF1ZXN0X25vdF9zdXBwb3J0ZWQnLFxuICBSRVFVRVNUX1VSSV9OT1RfU1VQUE9SVEVEID0gJ3JlcXVlc3RfdXJpX25vdF9zdXBwb3J0ZWQnLFxuICBSRUdJU1RSQVRJT05fTk9UX1NVUFBPUlRFRCA9ICdyZWdpc3RyYXRpb25fbm90X3N1cHBvcnRlZCcsXG59XG4iXX0=
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913763, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidv4 = void 0;
function uuidv4() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.uuidv4 = uuidv4;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXVpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy91dWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLFNBQWdCLE1BQU07SUFDcEIsT0FBTyxrQ0FBa0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztRQUMzRCxJQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7UUFDekMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQU5ELHdCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0ZSB1dWlkdjQgc3RyaW5nLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXVpZHY0KCk6IHN0cmluZyB7XG4gIHJldHVybiAneHh4eHh4eHh4eHh4NHh4eHl4eHh4eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwXG4gICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDhcbiAgICByZXR1cm4gdi50b1N0cmluZygxNilcbiAgfSlcbn1cbiJdfQ==
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913764, function(require, module, exports) {

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
exports.SinglePromise = void 0;
var SinglePromise = (function () {
    function SinglePromise() {
        this.fnPromiseMap = new Map();
    }
    SinglePromise.prototype.run = function (key, fn) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = this.fnPromiseMap.get(key);
                        return [4, result];
                    case 1:
                        if (!(_a.sent())) {
                            result = new Promise(function (resolve, reject) {
                                (function () { return __awaiter(_this, void 0, void 0, function () {
                                    var fnResult, _a, error_1;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _b.trys.push([0, 3, 4, 5]);
                                                return [4, this.runIdlePromise()];
                                            case 1:
                                                _b.sent();
                                                fnResult = fn();
                                                _a = resolve;
                                                return [4, fnResult];
                                            case 2:
                                                _a.apply(void 0, [_b.sent()]);
                                                return [3, 5];
                                            case 3:
                                                error_1 = _b.sent();
                                                reject(error_1);
                                                return [3, 5];
                                            case 4:
                                                this.fnPromiseMap.delete(key);
                                                return [7];
                                            case 5: return [2];
                                        }
                                    });
                                }); })();
                            });
                            this.fnPromiseMap.set(key, result);
                        }
                        return [2, result];
                }
            });
        });
    };
    SinglePromise.prototype.runIdlePromise = function () {
        return Promise.resolve();
    };
    return SinglePromise;
}());
exports.SinglePromise = SinglePromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXByb21pc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvZnVuY3Rpb24vc2luZ2xlLXByb21pc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBQTtRQUNVLGlCQUFZLEdBQThCLElBQUksR0FBRyxFQUFFLENBQUE7SUFvQzdELENBQUM7SUE3Qk8sMkJBQUcsR0FBVCxVQUFhLEdBQVcsRUFBRSxFQUFvQjs7Ozs7Ozt3QkFDeEMsTUFBTSxHQUFpQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDL0MsV0FBTSxNQUFNLEVBQUE7O3dCQUFsQixJQUFJLENBQUMsQ0FBQyxTQUFZLENBQUMsRUFBRTs0QkFDbkIsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0NBQ3hDLENBQUM7Ozs7OztnREFJRyxXQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7Z0RBQTNCLFNBQTJCLENBQUE7Z0RBQ3JCLFFBQVEsR0FBZSxFQUFFLEVBQUUsQ0FBQTtnREFDakMsS0FBQSxPQUFPLENBQUE7Z0RBQUMsV0FBTSxRQUFRLEVBQUE7O2dEQUF0QixrQkFBUSxTQUFjLEVBQUMsQ0FBQTs7OztnREFFdkIsTUFBTSxDQUFDLE9BQUssQ0FBQyxDQUFBOzs7Z0RBRWIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Ozs7O3FDQUVoQyxDQUFDLEVBQUUsQ0FBQTs0QkFDTixDQUFDLENBQUMsQ0FBQTs0QkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUE7eUJBQ25DO3dCQUNELFdBQU8sTUFBTSxFQUFBOzs7O0tBQ2Q7SUFLTyxzQ0FBYyxHQUF0QjtRQUNFLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbmdsZSBQcm9taXNlXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW5nbGVQcm9taXNlIHtcbiAgcHJpdmF0ZSBmblByb21pc2VNYXA6IE1hcDxzdHJpbmcsIFByb21pc2U8YW55Pj4gPSBuZXcgTWFwKClcbiAgLyoqXG4gICAqIFJ1biBzaW5nbGUgcHJvbWlzZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFQ+fVxuICAgKi9cbiAgYXN5bmMgcnVuPFQ+KGtleTogc3RyaW5nLCBmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCByZXN1bHQ6IFByb21pc2U8YW55PiA9IHRoaXMuZm5Qcm9taXNlTWFwLmdldChrZXkpXG4gICAgaWYgKCEoYXdhaXQgcmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFRoZSBpZGxlIHByb21pc2UgbXVzdCBiZSBydW4gdG8gcHJldmVudCBfZm5Qcm9taXNlTWFwIGZyb21cbiAgICAgICAgICAgIC8vIHN0b3JpbmcgdGhlIGN1cnJlbnQgcHJvbWlzZSBmdW5jdGlvbi5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucnVuSWRsZVByb21pc2UoKVxuICAgICAgICAgICAgY29uc3QgZm5SZXN1bHQ6IFByb21pc2U8VD4gPSBmbigpXG4gICAgICAgICAgICByZXNvbHZlKGF3YWl0IGZuUmVzdWx0KVxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZm5Qcm9taXNlTWFwLmRlbGV0ZShrZXkpXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpXG4gICAgICB9KVxuICAgICAgdGhpcy5mblByb21pc2VNYXAuc2V0KGtleSwgcmVzdWx0KVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiAgLyoqXG4gICAqIFJ1biBpZGxlIHByb21pc2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBwcml2YXRlIHJ1bklkbGVQcm9taXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG59XG4iXX0=
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913765, function(require, module, exports) {

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
exports.Auth = void 0;
var consts_1 = require("./consts");
var oauth2client_1 = require("../oauth2client/oauth2client");
var captcha_1 = require("../captcha/captcha");
var Auth = (function () {
    function Auth(opts) {
        var request = opts.request;
        var oAuth2Client = opts.credentialsClient;
        if (!oAuth2Client) {
            var initOptions = {
                apiOrigin: opts.apiOrigin,
                clientId: opts.clientId,
                storage: opts.storage,
            };
            oAuth2Client = new oauth2client_1.OAuth2Client(initOptions);
        }
        if (!request) {
            var baseRequest = oAuth2Client.request.bind(oAuth2Client);
            var captcha = new captcha_1.Captcha({
                clientId: opts.clientId,
                request: baseRequest,
                storage: opts.storage,
            });
            request = captcha.request.bind(captcha);
        }
        this.config = {
            apiOrigin: opts.apiOrigin,
            clientId: opts.clientId,
            request: request,
            credentialsClient: oAuth2Client,
            storage: opts.storage || oauth2client_1.defaultStorage,
        };
    }
    Auth.parseParamsToSearch = function (params) {
        Object.keys(params).forEach(function (key) {
            if (!params[key]) {
                delete params[key];
            }
        });
        var searchParams = new URLSearchParams(params);
        return searchParams.toString();
    };
    Auth.prototype.signIn = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.config.request(consts_1.ApiUrls.AUTH_SIGN_IN_URL, {
                            method: 'POST',
                            body: params,
                        })];
                    case 1:
                        credentials = _a.sent();
                        return [4, this.config.credentialsClient.setCredentials(credentials)];
                    case 2:
                        _a.sent();
                        return [2, Promise.resolve(credentials)];
                }
            });
        });
    };
    Auth.prototype.signInAnonymously = function (data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.config.request(consts_1.ApiUrls.AUTH_SIGN_IN_ANONYMOUSLY_URL, {
                            method: 'POST',
                            body: data,
                        })];
                    case 1:
                        credentials = _a.sent();
                        return [4, this.config.credentialsClient.setCredentials(credentials)];
                    case 2:
                        _a.sent();
                        return [2, Promise.resolve(credentials)];
                }
            });
        });
    };
    Auth.prototype.signUp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.config.request(consts_1.ApiUrls.AUTH_SIGN_UP_URL, {
                            method: 'POST',
                            body: params,
                        })];
                    case 1:
                        data = _a.sent();
                        return [4, this.config.credentialsClient.setCredentials(data)];
                    case 2:
                        _a.sent();
                        return [2, Promise.resolve(data)];
                }
            });
        });
    };
    Auth.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.config.credentialsClient.getAccessToken()];
                    case 1:
                        accessToken = _a.sent();
                        return [4, this.config.request(consts_1.ApiUrls.AUTH_REVOKE_URL, {
                                method: 'POST',
                                body: {
                                    token: accessToken,
                                },
                            })];
                    case 2:
                        data = _a.sent();
                        return [4, this.config.credentialsClient.setCredentials()];
                    case 3:
                        _a.sent();
                        return [2, Promise.resolve(data)];
                }
            });
        });
    };
    Auth.prototype.getVerification = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var withCredentials, hasLogin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        withCredentials = false;
                        if (!(params.target === 'CUR_USER')) return [3, 1];
                        withCredentials = true;
                        return [3, 3];
                    case 1: return [4, this.hasLoginState()];
                    case 2:
                        hasLogin = _a.sent();
                        if (hasLogin) {
                            withCredentials = true;
                        }
                        _a.label = 3;
                    case 3: return [2, this.config.request(consts_1.ApiUrls.VERIFICATION_URL, {
                            method: 'POST',
                            body: params,
                            withCaptcha: true,
                            withCredentials: withCredentials,
                        })];
                }
            });
        });
    };
    Auth.prototype.verify = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.VERIFY_URL, {
                        method: 'POST',
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.genProviderRedirectUri = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var url, otherParams;
            return __generator(this, function (_a) {
                url = consts_1.ApiUrls.PROVIDER_URI_URL + "?client_id=" + this.config.clientId + "&provider_id=" + params.provider_id + "&redirect_uri=" + encodeURIComponent(params.provider_redirect_uri) + "&state=" + params.state;
                otherParams = params.other_params;
                if (otherParams) {
                    if (typeof otherParams.sign_out_uri === 'string'
                        && otherParams.sign_out_uri.length > 0) {
                        url += "&other_params[sign_out_uri]=" + otherParams.sign_out_uri;
                    }
                }
                return [2, this.config.request(url, {
                        method: 'GET',
                    })];
            });
        });
    };
    Auth.prototype.grantProviderToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.PROVIDER_TOKEN_URL, {
                        method: 'POST',
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.patchProviderToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.PROVIDER_TOKEN_URL, {
                        method: 'PATCH',
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.signInWithProvider = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.config.request(consts_1.ApiUrls.AUTH_SIGN_IN_WITH_PROVIDER_URL, {
                            method: 'POST',
                            body: params,
                        })];
                    case 1:
                        credentials = _a.sent();
                        return [4, this.config.credentialsClient.setCredentials(credentials)];
                    case 2:
                        _a.sent();
                        return [2, Promise.resolve(credentials)];
                }
            });
        });
    };
    Auth.prototype.bindWithProvider = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.PROVIDER_BIND_URL, {
                        method: 'POST',
                        body: params,
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.getUserProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.getUserInfo()];
            });
        });
    };
    Auth.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.config.request(consts_1.ApiUrls.USER_ME_URL, {
                            method: 'GET',
                            withCredentials: true,
                        })];
                    case 1:
                        userInfo = _a.sent();
                        if (userInfo.sub) {
                            userInfo.uid = userInfo.sub;
                        }
                        return [2, userInfo];
                }
            });
        });
    };
    Auth.prototype.deleteMe = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = consts_1.ApiUrls.USER_ME_URL + "?" + Auth.parseParamsToSearch(params);
                return [2, this.config.request(url, {
                        method: 'DELETE',
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.hasLoginState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.config.credentialsClient.getAccessToken()];
                    case 1:
                        _a.sent();
                        return [2, true];
                    case 2:
                        error_1 = _a.sent();
                        return [2, false];
                    case 3: return [2];
                }
            });
        });
    };
    Auth.prototype.hasLoginStateSync = function () {
        var credentials = this.config.credentialsClient.getCredentialsSync();
        return credentials;
    };
    Auth.prototype.getLoginState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.credentialsClient.getCredentialsAsync()];
            });
        });
    };
    Auth.prototype.transByProvider = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.USER_TRANS_BY_PROVIDER_URL, {
                        method: 'PATCH',
                        body: params,
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.grantToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.AUTH_TOKEN_URL, {
                        method: 'POST',
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.getProviders = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.PROVIDER_LIST, {
                        method: 'GET',
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.unbindProvider = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.PROVIDER_UNBIND_URL + "/" + params.provider_id, {
                        method: 'DELETE',
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.checkPassword = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request("" + consts_1.ApiUrls.CHECK_PWD_URL, {
                        method: 'POST',
                        withCredentials: true,
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.bindPhone = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request("" + consts_1.ApiUrls.BIND_CONTACT_URL, {
                        method: 'PATCH',
                        withCredentials: true,
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.bindEmail = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request("" + consts_1.ApiUrls.BIND_CONTACT_URL, {
                        method: 'PATCH',
                        withCredentials: true,
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.setPassword = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request("" + consts_1.ApiUrls.AUTH_SET_PASSWORD, {
                        method: 'PATCH',
                        withCredentials: true,
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.updatePasswordByOld = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var sudoToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.sudo({ password: params.old_password })];
                    case 1:
                        sudoToken = _a.sent();
                        return [2, this.setPassword({
                                sudo_token: sudoToken.sudo_token,
                                new_password: params.new_password,
                            })];
                }
            });
        });
    };
    Auth.prototype.sudo = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request("" + consts_1.ApiUrls.SUDO_URL, {
                        method: 'POST',
                        withCredentials: true,
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.getCurUserVerification = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                params.target = 'CUR_USER';
                return [2, this.config.request(consts_1.ApiUrls.VERIFICATION_URL, {
                        method: 'POST',
                        body: params,
                        withCredentials: true,
                        withCaptcha: true,
                    })];
            });
        });
    };
    Auth.prototype.changeBindedProvider = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.PROVIDER_LIST + "/" + params.provider_id + "/trans", {
                        method: 'POST',
                        body: {
                            provider_trans_token: params.trans_token,
                        },
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.setUserProfile = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.USER_PRIFILE_URL, {
                        method: 'PATCH',
                        body: params,
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.queryUserProfile = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var searchParams;
            return __generator(this, function (_a) {
                searchParams = new URLSearchParams(params);
                return [2, this.config.request(consts_1.ApiUrls.USER_QUERY_URL + "?" + searchParams.toString(), {
                        method: 'GET',
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.setCustomSignFunc = function (getTickFn) {
        this.getCustomSignTicketFn = getTickFn;
    };
    Auth.prototype.signInWithCustomTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customTicket;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getCustomSignTicketFn()];
                    case 1:
                        customTicket = _a.sent();
                        return [2, this.signInWithProvider({
                                provider_id: 'custom',
                                provider_token: customTicket,
                            })];
                }
            });
        });
    };
    Auth.prototype.resetPassword = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.AUTH_RESET_PASSWORD, {
                        method: 'POST',
                        body: params,
                    })];
            });
        });
    };
    Auth.prototype.deviceAuthorize = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.AUTH_GET_DEVICE_CODE, {
                        method: 'POST',
                        body: params,
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.checkUsername = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.request(consts_1.ApiUrls.CHECK_USERNAME, {
                        method: 'GET',
                        body: params,
                        withCredentials: true,
                    })];
            });
        });
    };
    Auth.prototype.checkIfUserExist = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var searchParams;
            return __generator(this, function (_a) {
                searchParams = new URLSearchParams(params);
                return [2, this.config.request(consts_1.ApiUrls.CHECK_IF_USER_EXIST + "?" + searchParams.toString(), {
                        method: 'GET',
                    })];
            });
        });
    };
    Auth.prototype.loginScope = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.credentialsClient.getScope()];
            });
        });
    };
    Auth.prototype.loginGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.config.credentialsClient.getGroups()];
            });
        });
    };
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2FwaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixtQ0FBa0M7QUEyQ2xDLDZEQUEyRTtBQUUzRSw4Q0FBNEM7QUFlNUM7SUFrQkUsY0FBWSxJQUFpQjtRQUNyQixJQUFBLE9BQU8sR0FBSyxJQUFJLFFBQVQsQ0FBUztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7UUFDekMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixJQUFNLFdBQVcsR0FBRztnQkFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN0QixDQUFBO1lBQ0QsWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUM3QztRQUNELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixJQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUMzRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7Z0JBQzFCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN0QixDQUFDLENBQUE7WUFDRixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDeEM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixPQUFPLFNBQUE7WUFDUCxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLDZCQUFjO1NBQ3hDLENBQUE7SUFDSCxDQUFDO0lBNUNjLHdCQUFtQixHQUFsQyxVQUFtQyxNQUFXO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNuQjtRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBTSxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBYSxDQUFDLENBQUE7UUFDdkQsT0FBTyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDaEMsQ0FBQztJQTJDWSxxQkFBTSxHQUFuQixVQUFvQixNQUFxQjs7Ozs7NEJBQ04sV0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDeEQsZ0JBQU8sQ0FBQyxnQkFBZ0IsRUFDeEI7NEJBQ0UsTUFBTSxFQUFFLE1BQU07NEJBQ2QsSUFBSSxFQUFFLE1BQU07eUJBQ2IsQ0FDRixFQUFBOzt3QkFOSyxXQUFXLEdBQWdCLFNBTWhDO3dCQUNELFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUE7O3dCQUEvRCxTQUErRCxDQUFBO3dCQUMvRCxXQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUE7Ozs7S0FDcEM7SUFNWSxnQ0FBaUIsR0FBOUIsVUFBK0IsSUFFekI7UUFGeUIscUJBQUEsRUFBQSxTQUV6Qjs7Ozs7NEJBQzZCLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ3hELGdCQUFPLENBQUMsNEJBQTRCLEVBQ3BDOzRCQUNFLE1BQU0sRUFBRSxNQUFNOzRCQUNkLElBQUksRUFBRSxJQUFJO3lCQUNYLENBQ0YsRUFBQTs7d0JBTkssV0FBVyxHQUFnQixTQU1oQzt3QkFDRCxXQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBL0QsU0FBK0QsQ0FBQTt3QkFDL0QsV0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFBOzs7O0tBQ3BDO0lBT1kscUJBQU0sR0FBbkIsVUFBb0IsTUFBcUI7Ozs7OzRCQUNiLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ2pELGdCQUFPLENBQUMsZ0JBQWdCLEVBQ3hCOzRCQUNFLE1BQU0sRUFBRSxNQUFNOzRCQUNkLElBQUksRUFBRSxNQUFNO3lCQUNiLENBQ0YsRUFBQTs7d0JBTkssSUFBSSxHQUFnQixTQU16Qjt3QkFDRCxXQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBeEQsU0FBd0QsQ0FBQTt3QkFDeEQsV0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFBOzs7O0tBQzdCO0lBTVksc0JBQU8sR0FBcEI7Ozs7OzRCQUM4QixXQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEVBQUE7O3dCQUExRSxXQUFXLEdBQVcsU0FBb0Q7d0JBQ25FLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQU8sQ0FBQyxlQUFlLEVBQUU7Z0NBQzlELE1BQU0sRUFBRSxNQUFNO2dDQUNkLElBQUksRUFBRTtvQ0FDSixLQUFLLEVBQUUsV0FBVztpQ0FDbkI7NkJBQ0YsQ0FBQyxFQUFBOzt3QkFMSSxJQUFJLEdBQUcsU0FLWDt3QkFDRixXQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEVBQUE7O3dCQUFwRCxTQUFvRCxDQUFBO3dCQUNwRCxXQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUE7Ozs7S0FDN0I7SUFPWSw4QkFBZSxHQUE1QixVQUE2QixNQUE4Qjs7Ozs7O3dCQUNyRCxlQUFlLEdBQUcsS0FBSyxDQUFBOzZCQUV2QixDQUFBLE1BQU0sQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFBLEVBQTVCLGNBQTRCO3dCQUM5QixlQUFlLEdBQUcsSUFBSSxDQUFBOzs0QkFFTCxXQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBQTs7d0JBQXJDLFFBQVEsR0FBRyxTQUEwQjt3QkFDM0MsSUFBSSxRQUFRLEVBQUU7NEJBQ1osZUFBZSxHQUFHLElBQUksQ0FBQTt5QkFDdkI7OzRCQUVILFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ3hCLGdCQUFPLENBQUMsZ0JBQWdCLEVBQ3hCOzRCQUNFLE1BQU0sRUFBRSxNQUFNOzRCQUNkLElBQUksRUFBRSxNQUFNOzRCQUNaLFdBQVcsRUFBRSxJQUFJOzRCQUNqQixlQUFlLGlCQUFBO3lCQUNoQixDQUNGLEVBQUE7Ozs7S0FDRjtJQU9ZLHFCQUFNLEdBQW5CLFVBQW9CLE1BQXFCOzs7Z0JBQ3ZDLFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQWlCLGdCQUFPLENBQUMsVUFBVSxFQUFFO3dCQUM3RCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxJQUFJLEVBQUUsTUFBTTtxQkFDYixDQUFDLEVBQUE7OztLQUNIO0lBT1kscUNBQXNCLEdBQW5DLFVBQW9DLE1BQXFDOzs7O2dCQUNuRSxHQUFHLEdBQU0sZ0JBQU8sQ0FBQyxnQkFBZ0IsbUJBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLHFCQUN2RCxNQUFNLENBQUMsV0FBVyxzQkFBaUIsa0JBQWtCLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFFLGVBQVUsTUFBTSxDQUFDLEtBQU8sQ0FBQTtnQkFDdEcsV0FBVyxHQUFLLE1BQU0sYUFBWCxDQUFXO2dCQUM1QyxJQUFJLFdBQVcsRUFBRTtvQkFDZixJQUNFLE9BQU8sV0FBVyxDQUFDLFlBQVksS0FBSyxRQUFROzJCQUN6QyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3RDO3dCQUNBLEdBQUcsSUFBSSxpQ0FBK0IsV0FBVyxDQUFDLFlBQWMsQ0FBQTtxQkFDakU7aUJBQ0Y7Z0JBQ0QsV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBaUMsR0FBRyxFQUFFO3dCQUM5RCxNQUFNLEVBQUUsS0FBSztxQkFDZCxDQUFDLEVBQUE7OztLQUNIO0lBT1ksaUNBQWtCLEdBQS9CLFVBQWdDLE1BQWlDOzs7Z0JBQy9ELFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ3hCLGdCQUFPLENBQUMsa0JBQWtCLEVBQzFCO3dCQUNFLE1BQU0sRUFBRSxNQUFNO3dCQUNkLElBQUksRUFBRSxNQUFNO3FCQUNiLENBQ0YsRUFBQTs7O0tBQ0Y7SUFPWSxpQ0FBa0IsR0FBL0IsVUFBZ0MsTUFBaUM7OztnQkFDL0QsV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDeEIsZ0JBQU8sQ0FBQyxrQkFBa0IsRUFDMUI7d0JBQ0UsTUFBTSxFQUFFLE9BQU87d0JBQ2YsSUFBSSxFQUFFLE1BQU07cUJBQ2IsQ0FDRixFQUFBOzs7S0FDRjtJQU9ZLGlDQUFrQixHQUEvQixVQUFnQyxNQUFpQzs7Ozs7NEJBQzlCLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ3hELGdCQUFPLENBQUMsOEJBQThCLEVBQ3RDOzRCQUNFLE1BQU0sRUFBRSxNQUFNOzRCQUNkLElBQUksRUFBRSxNQUFNO3lCQUNiLENBQ0YsRUFBQTs7d0JBTkssV0FBVyxHQUFnQixTQU1oQzt3QkFDRCxXQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBL0QsU0FBK0QsQ0FBQTt3QkFDL0QsV0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFBOzs7O0tBQ3BDO0lBT1ksK0JBQWdCLEdBQTdCLFVBQThCLE1BQStCOzs7Z0JBQzNELFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQU0sZ0JBQU8sQ0FBQyxpQkFBaUIsRUFBRTt3QkFDekQsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLE1BQU07d0JBQ1osZUFBZSxFQUFFLElBQUk7cUJBQ3RCLENBQUMsRUFBQTs7O0tBQ0g7SUFNWSw2QkFBYyxHQUEzQjs7O2dCQUNFLFdBQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFBOzs7S0FDMUI7SUFNWSwwQkFBVyxHQUF4Qjs7Ozs7NEJBQ21CLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQVcsZ0JBQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ3hFLE1BQU0sRUFBRSxLQUFLOzRCQUNiLGVBQWUsRUFBRSxJQUFJO3lCQUN0QixDQUFDLEVBQUE7O3dCQUhJLFFBQVEsR0FBRyxTQUdmO3dCQUVGLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTs0QkFDaEIsUUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFBO3lCQUM1Qjt3QkFFRCxXQUFPLFFBQVEsRUFBQTs7OztLQUNoQjtJQU1ZLHVCQUFRLEdBQXJCLFVBQXNCLE1BQXVCOzs7O2dCQUNyQyxHQUFHLEdBQU0sZ0JBQU8sQ0FBQyxXQUFXLFNBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBRyxDQUFBO2dCQUN4RSxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFjLEdBQUcsRUFBRTt3QkFDM0MsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLGVBQWUsRUFBRSxJQUFJO3FCQUN0QixDQUFDLEVBQUE7OztLQUNIO0lBTVksNEJBQWEsR0FBMUI7Ozs7Ozs7d0JBRUksV0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBcEQsU0FBb0QsQ0FBQTt3QkFDcEQsV0FBTyxJQUFJLEVBQUE7Ozt3QkFFWCxXQUFPLEtBQUssRUFBQTs7Ozs7S0FFZjtJQUVNLGdDQUFpQixHQUF4QjtRQUNFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUN0RSxPQUFPLFdBQVcsQ0FBQTtJQUNwQixDQUFDO0lBRVksNEJBQWEsR0FBMUI7OztnQkFDRSxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsRUFBQTs7O0tBQzNEO0lBT1ksOEJBQWUsR0FBNUIsVUFBNkIsTUFBOEI7OztnQkFDekQsV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDeEIsZ0JBQU8sQ0FBQywwQkFBMEIsRUFDbEM7d0JBQ0UsTUFBTSxFQUFFLE9BQU87d0JBQ2YsSUFBSSxFQUFFLE1BQU07d0JBQ1osZUFBZSxFQUFFLElBQUk7cUJBQ3RCLENBQ0YsRUFBQTs7O0tBQ0Y7SUFPWSx5QkFBVSxHQUF2QixVQUF3QixNQUF5Qjs7O2dCQUMvQyxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFjLGdCQUFPLENBQUMsY0FBYyxFQUFFO3dCQUM5RCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxJQUFJLEVBQUUsTUFBTTtxQkFDYixDQUFDLEVBQUE7OztLQUNIO0lBTVksMkJBQVksR0FBekI7OztnQkFDRSxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFzQixnQkFBTyxDQUFDLGFBQWEsRUFBRTt3QkFDckUsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsZUFBZSxFQUFFLElBQUk7cUJBQ3RCLENBQUMsRUFBQTs7O0tBQ0g7SUFPWSw2QkFBYyxHQUEzQixVQUE0QixNQUE2Qjs7O2dCQUN2RCxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUNyQixnQkFBTyxDQUFDLG1CQUFtQixTQUFJLE1BQU0sQ0FBQyxXQUFhLEVBQ3REO3dCQUNFLE1BQU0sRUFBRSxRQUFRO3dCQUNoQixlQUFlLEVBQUUsSUFBSTtxQkFDdEIsQ0FDRixFQUFBOzs7S0FDRjtJQU9ZLDRCQUFhLEdBQTFCLFVBQTJCLE1BQTZCOzs7Z0JBQ3RELFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQU0sS0FBRyxnQkFBTyxDQUFDLGFBQWUsRUFBRTt3QkFDMUQsTUFBTSxFQUFFLE1BQU07d0JBQ2QsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLElBQUksRUFBRSxNQUFNO3FCQUNiLENBQUMsRUFBQTs7O0tBQ0g7SUFPWSx3QkFBUyxHQUF0QixVQUF1QixNQUF3Qjs7O2dCQUM3QyxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFNLEtBQUcsZ0JBQU8sQ0FBQyxnQkFBa0IsRUFBRTt3QkFDN0QsTUFBTSxFQUFFLE9BQU87d0JBQ2YsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLElBQUksRUFBRSxNQUFNO3FCQUNiLENBQUMsRUFBQTs7O0tBQ0g7SUFPWSx3QkFBUyxHQUF0QixVQUF1QixNQUF3Qjs7O2dCQUM3QyxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFNLEtBQUcsZ0JBQU8sQ0FBQyxnQkFBa0IsRUFBRTt3QkFDN0QsTUFBTSxFQUFFLE9BQU87d0JBQ2YsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLElBQUksRUFBRSxNQUFNO3FCQUNiLENBQUMsRUFBQTs7O0tBQ0g7SUFPWSwwQkFBVyxHQUF4QixVQUF5QixNQUEwQjs7O2dCQUNqRCxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFNLEtBQUcsZ0JBQU8sQ0FBQyxpQkFBbUIsRUFBRTt3QkFDOUQsTUFBTSxFQUFFLE9BQU87d0JBQ2YsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLElBQUksRUFBRSxNQUFNO3FCQUNiLENBQUMsRUFBQTs7O0tBQ0g7SUFPWSxrQ0FBbUIsR0FBaEMsVUFBaUMsTUFBNkI7Ozs7OzRCQUMxQyxXQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUE7O3dCQUE5RCxTQUFTLEdBQUcsU0FBa0Q7d0JBQ3BFLFdBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztnQ0FDdEIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVO2dDQUNoQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7NkJBQ2xDLENBQUMsRUFBQTs7OztLQUNIO0lBUVksbUJBQUksR0FBakIsVUFBa0IsTUFBbUI7OztnQkFDbkMsV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBZSxLQUFHLGdCQUFPLENBQUMsUUFBVSxFQUFFO3dCQUM5RCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxlQUFlLEVBQUUsSUFBSTt3QkFDckIsSUFBSSxFQUFFLE1BQU07cUJBQ2IsQ0FBQyxFQUFBOzs7S0FDSDtJQU9ZLHFDQUFzQixHQUFuQyxVQUFvQyxNQUE4Qjs7O2dCQUNoRSxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQTtnQkFDMUIsV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDeEIsZ0JBQU8sQ0FBQyxnQkFBZ0IsRUFDeEI7d0JBQ0UsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLE1BQU07d0JBQ1osZUFBZSxFQUFFLElBQUk7d0JBQ3JCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUNGLEVBQUE7OztLQUNGO0lBT1ksbUNBQW9CLEdBQWpDLFVBQWtDLE1BQW1DOzs7Z0JBQ25FLFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ3JCLGdCQUFPLENBQUMsYUFBYSxTQUFJLE1BQU0sQ0FBQyxXQUFXLFdBQVEsRUFDdEQ7d0JBQ0UsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFOzRCQUNKLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxXQUFXO3lCQUN6Qzt3QkFDRCxlQUFlLEVBQUUsSUFBSTtxQkFDdEIsQ0FDRixFQUFBOzs7S0FDRjtJQU9ZLDZCQUFjLEdBQTNCLFVBQTRCLE1BQW1COzs7Z0JBQzdDLFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQWMsZ0JBQU8sQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDaEUsTUFBTSxFQUFFLE9BQU87d0JBQ2YsSUFBSSxFQUFFLE1BQU07d0JBQ1osZUFBZSxFQUFFLElBQUk7cUJBQ3RCLENBQUMsRUFBQTs7O0tBQ0g7SUFPWSwrQkFBZ0IsR0FBN0IsVUFBOEIsTUFBK0I7Ozs7Z0JBRXJELFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFhLENBQUMsQ0FBQTtnQkFFdkQsV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBOEIsZ0JBQU8sQ0FBQyxjQUFjLFNBQUksWUFBWSxDQUFDLFFBQVEsRUFBSSxFQUFFO3dCQUMzRyxNQUFNLEVBQUUsS0FBSzt3QkFDYixlQUFlLEVBQUUsSUFBSTtxQkFDdEIsQ0FBQyxFQUFBOzs7S0FDSDtJQU1NLGdDQUFpQixHQUF4QixVQUF5QixTQUFnQztRQUN2RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFBO0lBQ3hDLENBQUM7SUFNWSxxQ0FBc0IsR0FBbkM7Ozs7OzRCQUN1QixXQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFBOzt3QkFBakQsWUFBWSxHQUFHLFNBQWtDO3dCQUN2RCxXQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQ0FDN0IsV0FBVyxFQUFFLFFBQVE7Z0NBQ3JCLGNBQWMsRUFBRSxZQUFZOzZCQUM3QixDQUFDLEVBQUE7Ozs7S0FDSDtJQVFZLDRCQUFhLEdBQTFCLFVBQTJCLE1BQTRCOzs7Z0JBQ3JELFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQU8sQ0FBQyxtQkFBbUIsRUFBRTt3QkFDdEQsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLE1BQU07cUJBRWIsQ0FBQyxFQUFBOzs7S0FDSDtJQVFZLDhCQUFlLEdBQTVCLFVBQTZCLE1BQThCOzs7Z0JBQ3pELFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQU8sQ0FBQyxvQkFBb0IsRUFBRTt3QkFDdkQsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLE1BQU07d0JBQ1osZUFBZSxFQUFFLElBQUk7cUJBQ3RCLENBQUMsRUFBQTs7O0tBQ0g7SUFFWSw0QkFBYSxHQUExQixVQUEyQixNQUE0Qjs7O2dCQUNyRCxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFPLENBQUMsY0FBYyxFQUFFO3dCQUNqRCxNQUFNLEVBQUUsS0FBSzt3QkFDYixJQUFJLEVBQUUsTUFBTTt3QkFDWixlQUFlLEVBQUUsSUFBSTtxQkFDdEIsQ0FBQyxFQUFBOzs7S0FDSDtJQUVZLCtCQUFnQixHQUE3QixVQUE4QixNQUErQjs7OztnQkFDckQsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFDLE1BQWEsQ0FBQyxDQUFBO2dCQUV2RCxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUE4QixnQkFBTyxDQUFDLG1CQUFtQixTQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUksRUFBRTt3QkFDaEgsTUFBTSxFQUFFLEtBQUs7cUJBQ2QsQ0FBQyxFQUFBOzs7S0FDSDtJQUVZLHlCQUFVLEdBQXZCOzs7Z0JBQ0UsV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFBOzs7S0FDaEQ7SUFFWSwwQkFBVyxHQUF4Qjs7O2dCQUNFLFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7O0tBQ2pEO0lBQ0gsV0FBQztBQUFELENBQUMsQUFuakJELElBbWpCQztBQW5qQlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgQXBpVXJscyB9IGZyb20gJy4vY29uc3RzJ1xuaW1wb3J0IHtcbiAgR2V0VmVyaWZpY2F0aW9uUmVxdWVzdCxcbiAgR2V0VmVyaWZpY2F0aW9uUmVzcG9uc2UsXG4gIFVzZXJQcm9maWxlLFxuICBVc2VySW5mbyxcbiAgU2lnbkluUmVxdWVzdCxcbiAgU2lnblVwUmVxdWVzdCxcbiAgVmVyaWZ5UmVxdWVzdCxcbiAgVmVyaWZ5UmVzcG9uc2UsXG4gIEdlblByb3ZpZGVyUmVkaXJlY3RVcmlSZXF1ZXN0LFxuICBHZW5Qcm92aWRlclJlZGlyZWN0VXJpUmVzcG9uc2UsXG4gIEdyYW50UHJvdmlkZXJUb2tlblJlcXVlc3QsXG4gIEdyYW50UHJvdmlkZXJUb2tlblJlc3BvbnNlLFxuICBQYXRjaFByb3ZpZGVyVG9rZW5SZXF1ZXN0LFxuICBQYXRjaFByb3ZpZGVyVG9rZW5SZXNwb25zZSxcbiAgU2lnbkluV2l0aFByb3ZpZGVyUmVxdWVzdCxcbiAgQmluZFdpdGhQcm92aWRlclJlcXVlc3QsXG4gIFRyYW5zQnlQcm92aWRlclJlcXVlc3QsXG4gIEdyYW50VG9rZW5SZXF1ZXN0LFxuICBVc2VyUHJvZmlsZVByb3ZpZGVyLFxuICBVbmJpbmRQcm92aWRlclJlcXVlc3QsXG4gIENoZWNrUGFzc3dvcmRyUmVxdWVzdCxcbiAgQmluZFBob25lUmVxdWVzdCxcbiAgQmluZEVtYWlsUmVxdWVzdCxcbiAgU2V0UGFzc3dvcmRSZXF1ZXN0LFxuICBDaGFuZ2VCaW5kZWRQcm92aWRlclJlcXVlc3QsXG4gIENoYW5nZUJpbmRlZFByb3ZpZGVyUmVzcG9uc2UsXG4gIFVwZGF0ZVBhc3N3b3JkUmVxdWVzdCxcbiAgU3Vkb1Jlc3BvbnNlLFxuICBTdWRvUmVxdWVzdCxcbiAgR2V0Q3VzdG9tU2lnblRpY2tldEZuLFxuICBRdWVyeVVzZXJQcm9maWxlUmVxdWVzdCxcbiAgUXVlcnlVc2VyUHJvZmlsZVJlc3BvbnNlLFxuICBSZXNldFBhc3N3b3JkUmVxdWVzdCxcbiAgRGV2aWNlQXV0aG9yaXplUmVxdWVzdCxcbiAgRGV2aWNlQXV0aG9yaXplUmVzcG9uc2UsXG4gIENoZWNrVXNlcm5hbWVSZXF1ZXN0LFxuICBDaGVja0lmVXNlckV4aXN0UmVxdWVzdCxcbiAgQ2hlY2tJZlVzZXJFeGlzdFJlc3BvbnNlLFxuICBXaXRoU3Vkb1JlcXVlc3QsXG59IGZyb20gJy4vbW9kZWxzJ1xuaW1wb3J0IHsgU2ltcGxlU3RvcmFnZSwgUmVxdWVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vb2F1dGgyY2xpZW50L2ludGVyZmFjZSdcbmltcG9ydCB7IE9BdXRoMkNsaWVudCwgZGVmYXVsdFN0b3JhZ2UgfSBmcm9tICcuLi9vYXV0aDJjbGllbnQvb2F1dGgyY2xpZW50J1xuaW1wb3J0IHsgQ3JlZGVudGlhbHMgfSBmcm9tICcuLi9vYXV0aDJjbGllbnQvbW9kZWxzJ1xuaW1wb3J0IHsgQ2FwdGNoYSB9IGZyb20gJy4uL2NhcHRjaGEvY2FwdGNoYSdcblxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhPcHRpb25zIHtcbiAgYXBpT3JpZ2luOiBzdHJpbmc7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxzQ2xpZW50PzogT0F1dGgyQ2xpZW50O1xuICByZXF1ZXN0PzogUmVxdWVzdEZ1bmN0aW9uO1xuICBzdG9yYWdlPzogU2ltcGxlU3RvcmFnZTtcbiAgYW5vbnltb3VzU2lnbkluRnVuYz86IChDcmVkZW50aWFscykgPT4gUHJvbWlzZTxDcmVkZW50aWFscyB8IHZvaWQ+XG59XG5cbi8qKlxuICogQXV0aFxuICovXG5leHBvcnQgY2xhc3MgQXV0aCB7XG4gIHByaXZhdGUgc3RhdGljIHBhcnNlUGFyYW1zVG9TZWFyY2gocGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIXBhcmFtc1trZXldKSB7XG4gICAgICAgIGRlbGV0ZSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMgYXMgYW55KVxuICAgIHJldHVybiBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWc6IEF1dGhPcHRpb25zXG4gIHByaXZhdGUgZ2V0Q3VzdG9tU2lnblRpY2tldEZuPzogR2V0Q3VzdG9tU2lnblRpY2tldEZuXG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7QXV0aE9wdGlvbnN9IG9wdHNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHM6IEF1dGhPcHRpb25zKSB7XG4gICAgbGV0IHsgcmVxdWVzdCB9ID0gb3B0c1xuICAgIGxldCBvQXV0aDJDbGllbnQgPSBvcHRzLmNyZWRlbnRpYWxzQ2xpZW50XG4gICAgaWYgKCFvQXV0aDJDbGllbnQpIHtcbiAgICAgIGNvbnN0IGluaXRPcHRpb25zID0ge1xuICAgICAgICBhcGlPcmlnaW46IG9wdHMuYXBpT3JpZ2luLFxuICAgICAgICBjbGllbnRJZDogb3B0cy5jbGllbnRJZCxcbiAgICAgICAgc3RvcmFnZTogb3B0cy5zdG9yYWdlLFxuICAgICAgfVxuICAgICAgb0F1dGgyQ2xpZW50ID0gbmV3IE9BdXRoMkNsaWVudChpbml0T3B0aW9ucylcbiAgICB9XG4gICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICBjb25zdCBiYXNlUmVxdWVzdCA9IG9BdXRoMkNsaWVudC5yZXF1ZXN0LmJpbmQob0F1dGgyQ2xpZW50KVxuICAgICAgY29uc3QgY2FwdGNoYSA9IG5ldyBDYXB0Y2hhKHtcbiAgICAgICAgY2xpZW50SWQ6IG9wdHMuY2xpZW50SWQsXG4gICAgICAgIHJlcXVlc3Q6IGJhc2VSZXF1ZXN0LFxuICAgICAgICBzdG9yYWdlOiBvcHRzLnN0b3JhZ2UsXG4gICAgICB9KVxuICAgICAgcmVxdWVzdCA9IGNhcHRjaGEucmVxdWVzdC5iaW5kKGNhcHRjaGEpXG4gICAgfVxuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgYXBpT3JpZ2luOiBvcHRzLmFwaU9yaWdpbixcbiAgICAgIGNsaWVudElkOiBvcHRzLmNsaWVudElkLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIGNyZWRlbnRpYWxzQ2xpZW50OiBvQXV0aDJDbGllbnQsXG4gICAgICBzdG9yYWdlOiBvcHRzLnN0b3JhZ2UgfHwgZGVmYXVsdFN0b3JhZ2UsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNpZ24gaW4uXG4gICAqIEBwYXJhbSB7U2lnbkluUmVxdWVzdH0gcGFyYW1zIEEgU2lnbkluUmVxdWVzdCBPYmplY3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q3JlZGVudGlhbHM+fSBBIFByb21pc2U8Q3JlZGVudGlhbHM+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBzaWduSW4ocGFyYW1zOiBTaWduSW5SZXF1ZXN0KTogUHJvbWlzZTxDcmVkZW50aWFscz4ge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyA9IGF3YWl0IHRoaXMuY29uZmlnLnJlcXVlc3Q8Q3JlZGVudGlhbHM+KFxuICAgICAgQXBpVXJscy5BVVRIX1NJR05fSU5fVVJMLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgfSxcbiAgICApXG4gICAgYXdhaXQgdGhpcy5jb25maWcuY3JlZGVudGlhbHNDbGllbnQuc2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHMpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjcmVkZW50aWFscylcbiAgfVxuXG4gIC8qKlxuICAgKiBTaWduIGluIEFub255bW91c2x5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q3JlZGVudGlhbHM+fSBBIFByb21pc2U8Q3JlZGVudGlhbHM+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBzaWduSW5Bbm9ueW1vdXNseShkYXRhOiB7XG4gICAgcHJvdmlkZXJfdG9rZW4/OiBzdHJpbmdcbiAgfSA9IHt9KTogUHJvbWlzZTxDcmVkZW50aWFscz4ge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyA9IGF3YWl0IHRoaXMuY29uZmlnLnJlcXVlc3Q8Q3JlZGVudGlhbHM+KFxuICAgICAgQXBpVXJscy5BVVRIX1NJR05fSU5fQU5PTllNT1VTTFlfVVJMLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICAgIH0sXG4gICAgKVxuICAgIGF3YWl0IHRoaXMuY29uZmlnLmNyZWRlbnRpYWxzQ2xpZW50LnNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY3JlZGVudGlhbHMpXG4gIH1cblxuICAvKipcbiAgICogU2lnbiB1cC5cbiAgICogQHBhcmFtIHtTaWduVXBSZXF1ZXN0fSBwYXJhbXMgQSBTaWduVXBSZXF1ZXN0IE9iamVjdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxDcmVkZW50aWFscz59IEEgUHJvbWlzZTxDcmVkZW50aWFscz4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHNpZ25VcChwYXJhbXM6IFNpZ25VcFJlcXVlc3QpOiBQcm9taXNlPENyZWRlbnRpYWxzPiB7XG4gICAgY29uc3QgZGF0YTogQ3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLmNvbmZpZy5yZXF1ZXN0PENyZWRlbnRpYWxzPihcbiAgICAgIEFwaVVybHMuQVVUSF9TSUdOX1VQX1VSTCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICAgIH0sXG4gICAgKVxuICAgIGF3YWl0IHRoaXMuY29uZmlnLmNyZWRlbnRpYWxzQ2xpZW50LnNldENyZWRlbnRpYWxzKGRhdGEpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIFNpZ24gb3V0LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEEgUHJvbWlzZTx2b2lkPiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2lnbk91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSBhd2FpdCB0aGlzLmNvbmZpZy5jcmVkZW50aWFsc0NsaWVudC5nZXRBY2Nlc3NUb2tlbigpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuY29uZmlnLnJlcXVlc3QoQXBpVXJscy5BVVRIX1JFVk9LRV9VUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keToge1xuICAgICAgICB0b2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICB9LFxuICAgIH0pXG4gICAgYXdhaXQgdGhpcy5jb25maWcuY3JlZGVudGlhbHNDbGllbnQuc2V0Q3JlZGVudGlhbHMoKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZlcmlmaWNhdGlvbi5cbiAgICogQHBhcmFtIHtHZXRWZXJpZmljYXRpb25SZXF1ZXN0fSBwYXJhbXMgQSBHZXRWZXJpZmljYXRpb25SZXF1ZXN0IE9iamVjdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxHZXRWZXJpZmljYXRpb25SZXNwb25zZT59IEEgUHJvbWlzZTxHZXRWZXJpZmljYXRpb25SZXNwb25zZT4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldFZlcmlmaWNhdGlvbihwYXJhbXM6IEdldFZlcmlmaWNhdGlvblJlcXVlc3QsKTogUHJvbWlzZTxHZXRWZXJpZmljYXRpb25SZXNwb25zZT4ge1xuICAgIGxldCB3aXRoQ3JlZGVudGlhbHMgPSBmYWxzZVxuICAgIC8vIOWPkemAgeefreS/oeaXtu+8jOWmguaenOaXtue7meW9k+WJjeeUqOaIt+WPke+8jOWImemcgOimgeW4puS4iumJtOadg+S/oeaBr1xuICAgIGlmIChwYXJhbXMudGFyZ2V0ID09PSAnQ1VSX1VTRVInKSB7XG4gICAgICB3aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGhhc0xvZ2luID0gYXdhaXQgdGhpcy5oYXNMb2dpblN0YXRlKClcbiAgICAgIGlmIChoYXNMb2dpbikge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PEdldFZlcmlmaWNhdGlvblJlc3BvbnNlPihcbiAgICAgIEFwaVVybHMuVkVSSUZJQ0FUSU9OX1VSTCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICAgICAgd2l0aENhcHRjaGE6IHRydWUsXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgIH0sXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqICBWZXJpZnkgdGhlIGNvZGVcbiAgICogQHBhcmFtIHtWZXJpZnlSZXF1ZXN0fSBwYXJhbXMgQSBWZXJpZnlSZXF1ZXN0IE9iamVjdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxWZXJpZnlSZXNwb25zZT59IEEgUHJvbWlzZTxWZXJpZnlSZXNwb25zZT4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHZlcmlmeShwYXJhbXM6IFZlcmlmeVJlcXVlc3QpOiBQcm9taXNlPFZlcmlmeVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnJlcXVlc3Q8VmVyaWZ5UmVzcG9uc2U+KEFwaVVybHMuVkVSSUZZX1VSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBwYXJhbXMsXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW4gcHJvdmlkZXIgcmVkaXJlY3QgdXJpLlxuICAgKiBAcGFyYW0ge0dlblByb3ZpZGVyUmVkaXJlY3RVcmlSZXF1ZXN0fSBwYXJhbXMgQSBHZW5Qcm92aWRlclJlZGlyZWN0VXJpUmVxdWVzdCBvYmplY3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8R2VuUHJvdmlkZXJSZWRpcmVjdFVyaVJlc3BvbnNlPn0gQSBQcm9taXNlPEdlblByb3ZpZGVyUmVkaXJlY3RVcmlSZXNwb25zZT4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdlblByb3ZpZGVyUmVkaXJlY3RVcmkocGFyYW1zOiBHZW5Qcm92aWRlclJlZGlyZWN0VXJpUmVxdWVzdCwpOiBQcm9taXNlPEdlblByb3ZpZGVyUmVkaXJlY3RVcmlSZXNwb25zZT4ge1xuICAgIGxldCB1cmwgPSBgJHtBcGlVcmxzLlBST1ZJREVSX1VSSV9VUkx9P2NsaWVudF9pZD0ke3RoaXMuY29uZmlnLmNsaWVudElkXG4gICAgfSZwcm92aWRlcl9pZD0ke3BhcmFtcy5wcm92aWRlcl9pZH0mcmVkaXJlY3RfdXJpPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtcy5wcm92aWRlcl9yZWRpcmVjdF91cmksKX0mc3RhdGU9JHtwYXJhbXMuc3RhdGV9YFxuICAgIGNvbnN0IHsgb3RoZXJfcGFyYW1zOiBvdGhlclBhcmFtcyB9ID0gcGFyYW1zXG4gICAgaWYgKG90aGVyUGFyYW1zKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBvdGhlclBhcmFtcy5zaWduX291dF91cmkgPT09ICdzdHJpbmcnXG4gICAgICAgICYmIG90aGVyUGFyYW1zLnNpZ25fb3V0X3VyaS5sZW5ndGggPiAwXG4gICAgICApIHtcbiAgICAgICAgdXJsICs9IGAmb3RoZXJfcGFyYW1zW3NpZ25fb3V0X3VyaV09JHtvdGhlclBhcmFtcy5zaWduX291dF91cml9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVxdWVzdDxHZW5Qcm92aWRlclJlZGlyZWN0VXJpUmVzcG9uc2U+KHVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdyYW50IHByb3ZpZGVyIHRva2VuLlxuICAgKiBAcGFyYW0ge0dyYW50UHJvdmlkZXJUb2tlblJlcXVlc3R9IHBhcmFtcyBBIEdyYW50UHJvdmlkZXJUb2tlblJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEdyYW50UHJvdmlkZXJUb2tlblJlc3BvbnNlPn0gQSBQcm9taXNlPEdyYW50UHJvdmlkZXJUb2tlblJlc3BvbnNlPiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ3JhbnRQcm92aWRlclRva2VuKHBhcmFtczogR3JhbnRQcm92aWRlclRva2VuUmVxdWVzdCwpOiBQcm9taXNlPEdyYW50UHJvdmlkZXJUb2tlblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnJlcXVlc3Q8R3JhbnRQcm92aWRlclRva2VuUmVzcG9uc2U+KFxuICAgICAgQXBpVXJscy5QUk9WSURFUl9UT0tFTl9VUkwsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICB9LFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBHcmFudCBwcm92aWRlciB0b2tlbi5cbiAgICogQHBhcmFtIHtQYXRjaFByb3ZpZGVyVG9rZW5SZXF1ZXN0fSBwYXJhbXMgQSBQYXRjaFByb3ZpZGVyVG9rZW5SZXF1ZXN0IG9iamVjdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxQYXRjaFByb3ZpZGVyVG9rZW5SZXNwb25zZT59IEEgUHJvbWlzZTxQYXRjaFByb3ZpZGVyVG9rZW5SZXNwb25zZT4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHBhdGNoUHJvdmlkZXJUb2tlbihwYXJhbXM6IFBhdGNoUHJvdmlkZXJUb2tlblJlcXVlc3QsKTogUHJvbWlzZTxQYXRjaFByb3ZpZGVyVG9rZW5SZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PFBhdGNoUHJvdmlkZXJUb2tlblJlc3BvbnNlPihcbiAgICAgIEFwaVVybHMuUFJPVklERVJfVE9LRU5fVVJMLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICAgIH0sXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFNpZ25pbiB3aXRoIHByb3ZpZGVyIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7U2lnbkluV2l0aFByb3ZpZGVyUmVxdWVzdH0gcGFyYW1zIEEgU2lnbkluV2l0aFByb3ZpZGVyUmVxdWVzdCBvYmplY3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q3JlZGVudGlhbHM+fSBBIFByb21pc2U8Q3JlZGVudGlhbHM+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBzaWduSW5XaXRoUHJvdmlkZXIocGFyYW1zOiBTaWduSW5XaXRoUHJvdmlkZXJSZXF1ZXN0LCk6IFByb21pc2U8Q3JlZGVudGlhbHM+IHtcbiAgICBjb25zdCBjcmVkZW50aWFsczogQ3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLmNvbmZpZy5yZXF1ZXN0PENyZWRlbnRpYWxzPihcbiAgICAgIEFwaVVybHMuQVVUSF9TSUdOX0lOX1dJVEhfUFJPVklERVJfVVJMLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgfSxcbiAgICApXG4gICAgYXdhaXQgdGhpcy5jb25maWcuY3JlZGVudGlhbHNDbGllbnQuc2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHMpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjcmVkZW50aWFscylcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHdpdGggcHJvdmlkZXJcbiAgICogQHBhcmFtIHtCaW5kV2l0aFByb3ZpZGVyUmVxdWVzdH0gcGFyYW1zIEEgQmluZFdpdGhQcm92aWRlclJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBBIFByb21pc2U8YW55PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgYmluZFdpdGhQcm92aWRlcihwYXJhbXM6IEJpbmRXaXRoUHJvdmlkZXJSZXF1ZXN0LCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PGFueT4oQXBpVXJscy5QUk9WSURFUl9CSU5EX1VSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBwYXJhbXMsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIgcHJvZmlsZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxVc2VyUHJvZmlsZT59IEEgUHJvbWlzZTxVc2VyUHJvZmlsZT4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldFVzZXJQcm9maWxlKCk6IFByb21pc2U8VXNlclByb2ZpbGU+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VySW5mbygpXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyIGluZm8uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VXNlckluZm8+fSBBIFByb21pc2U8VXNlclByb2ZpbGU+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRVc2VySW5mbygpOiBQcm9taXNlPFVzZXJJbmZvPiB7XG4gICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB0aGlzLmNvbmZpZy5yZXF1ZXN0PFVzZXJJbmZvPihBcGlVcmxzLlVTRVJfTUVfVVJMLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgIH0pXG5cbiAgICBpZiAodXNlckluZm8uc3ViKSB7XG4gICAgICB1c2VySW5mby51aWQgPSB1c2VySW5mby5zdWJcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlckluZm9cbiAgfVxuXG4gIC8qKlxuICAgICAqIERlbGV0ZSBtZVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgcHVibGljIGFzeW5jIGRlbGV0ZU1lKHBhcmFtczogV2l0aFN1ZG9SZXF1ZXN0KTogUHJvbWlzZTxVc2VyUHJvZmlsZT4ge1xuICAgIGNvbnN0IHVybCA9IGAke0FwaVVybHMuVVNFUl9NRV9VUkx9PyR7QXV0aC5wYXJzZVBhcmFtc1RvU2VhcmNoKHBhcmFtcyl9YFxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PFVzZXJQcm9maWxlPih1cmwsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBoYXNMb2dpblN0YXRlIGNoZWNrIGlmIGhhcyBsb2dpbiBzdGF0ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBBIFByb21pc2U8Ym9vbGVhbj4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGhhc0xvZ2luU3RhdGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuY29uZmlnLmNyZWRlbnRpYWxzQ2xpZW50LmdldEFjY2Vzc1Rva2VuKClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNMb2dpblN0YXRlU3luYygpOiBDcmVkZW50aWFscyB8IG51bGwge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gdGhpcy5jb25maWcuY3JlZGVudGlhbHNDbGllbnQuZ2V0Q3JlZGVudGlhbHNTeW5jKClcbiAgICByZXR1cm4gY3JlZGVudGlhbHNcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRMb2dpblN0YXRlKCk6IFByb21pc2U8Q3JlZGVudGlhbHMgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNyZWRlbnRpYWxzQ2xpZW50LmdldENyZWRlbnRpYWxzQXN5bmMoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zIGJ5IHByb3ZpZGVyLlxuICAgKiBAcGFyYW0ge1RyYW5zQnlQcm92aWRlclJlcXVlc3R9IHBhcmFtcyBBIFRyYW5zQnlQcm92aWRlclJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPENyZWRlbnRpYWxzPn0gQSBQcm9taXNlPENyZWRlbnRpYWxzPiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgdHJhbnNCeVByb3ZpZGVyKHBhcmFtczogVHJhbnNCeVByb3ZpZGVyUmVxdWVzdCwpOiBQcm9taXNlPENyZWRlbnRpYWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnJlcXVlc3Q8Q3JlZGVudGlhbHM+KFxuICAgICAgQXBpVXJscy5VU0VSX1RSQU5TX0JZX1BST1ZJREVSX1VSTCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEdyYW50IHRva2VuLlxuICAgKiBAcGFyYW0ge0dyYW50VG9rZW5SZXF1ZXN0fSBwYXJhbXMgQSBHcmFudFRva2VuUmVxdWVzdCBvYmplY3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q3JlZGVudGlhbHM+fSBBIFByb21pc2U8Q3JlZGVudGlhbHM+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBncmFudFRva2VuKHBhcmFtczogR3JhbnRUb2tlblJlcXVlc3QpOiBQcm9taXNlPENyZWRlbnRpYWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnJlcXVlc3Q8Q3JlZGVudGlhbHM+KEFwaVVybHMuQVVUSF9UT0tFTl9VUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogcGFyYW1zLFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwcm92aWRlIGxpc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VXNlclByb2ZpbGVQcm92aWRlcj59IEEgUHJvbWlzZTxVc2VyUHJvZmlsZVByb3ZpZGVyPiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0UHJvdmlkZXJzKCk6IFByb21pc2U8VXNlclByb2ZpbGVQcm92aWRlcj4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PFVzZXJQcm9maWxlUHJvdmlkZXI+KEFwaVVybHMuUFJPVklERVJfTElTVCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIHVuYmluZCBwcm92aWRlci5cbiAgICogQHBhcmFtIHtVbmJpbmRQcm92aWRlclJlcXVlc3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBwdWJsaWMgYXN5bmMgdW5iaW5kUHJvdmlkZXIocGFyYW1zOiBVbmJpbmRQcm92aWRlclJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVxdWVzdDxhbnk+KFxuICAgICAgYCR7QXBpVXJscy5QUk9WSURFUl9VTkJJTkRfVVJMfS8ke3BhcmFtcy5wcm92aWRlcl9pZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICB9LFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBQYXNzd29yZC5cbiAgICogQHBhcmFtIHtDaGVja1Bhc3N3b3JkclJlcXVlc3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY2hlY2tQYXNzd29yZChwYXJhbXM6IENoZWNrUGFzc3dvcmRyUmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PGFueT4oYCR7QXBpVXJscy5DSEVDS19QV0RfVVJMfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgYm9keTogcGFyYW1zLFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgUGFzc3dvcmQuXG4gICAqIEBwYXJhbSB7Q2hlY2tQYXNzd29yZHJSZXF1ZXN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGJpbmRQaG9uZShwYXJhbXM6IEJpbmRQaG9uZVJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVxdWVzdDxhbnk+KGAke0FwaVVybHMuQklORF9DT05UQUNUX1VSTH1gLCB7XG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICBib2R5OiBwYXJhbXMsXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBQYXNzd29yZC5cbiAgICogQHBhcmFtIHtDaGVja1Bhc3N3b3JkclJlcXVlc3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBwdWJsaWMgYXN5bmMgYmluZEVtYWlsKHBhcmFtczogQmluZEVtYWlsUmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PGFueT4oYCR7QXBpVXJscy5CSU5EX0NPTlRBQ1RfVVJMfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBQYXNzd29yZC5cbiAgICogQHBhcmFtIHtTZXRQYXNzd29yZHJSZXF1ZXN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgcHVibGljIGFzeW5jIHNldFBhc3N3b3JkKHBhcmFtczogU2V0UGFzc3dvcmRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnJlcXVlc3Q8YW55PihgJHtBcGlVcmxzLkFVVEhfU0VUX1BBU1NXT1JEfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gKiB1cGRhdGVQYXNzd29yZEJ5T2xkIOS9v+eUqOaXp+WvhueggeS/ruaUueWvhuegge+8jOWmguaenOW3sue7j+e7keWumuaJi+acuuWPt++8jOivt+WFiO+8mnN1ZG/vvIzlho3kv67mlLnlr4bnoIFcbiAqIEBwYXJhbSB7U2V0UGFzc3dvcmRyUmVxdWVzdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gKi9cbiAgcHVibGljIGFzeW5jIHVwZGF0ZVBhc3N3b3JkQnlPbGQocGFyYW1zOiBVcGRhdGVQYXNzd29yZFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzdWRvVG9rZW4gPSBhd2FpdCB0aGlzLnN1ZG8oeyBwYXNzd29yZDogcGFyYW1zLm9sZF9wYXNzd29yZCB9KVxuICAgIHJldHVybiB0aGlzLnNldFBhc3N3b3JkKHtcbiAgICAgIHN1ZG9fdG9rZW46IHN1ZG9Ub2tlbi5zdWRvX3Rva2VuLFxuICAgICAgbmV3X3Bhc3N3b3JkOiBwYXJhbXMubmV3X3Bhc3N3b3JkLFxuICAgIH0pXG4gIH1cblxuXG4gIC8qKlxuICAgKiBzdWRvXG4gICAqIEBwYXJhbSB7c3Vkb30gcGFyYW1zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIHB1YmxpYyBhc3luYyBzdWRvKHBhcmFtczogU3Vkb1JlcXVlc3QpOiBQcm9taXNlPFN1ZG9SZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PFN1ZG9SZXNwb25zZT4oYCR7QXBpVXJscy5TVURPX1VSTH1gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB1c2VyIHZlcmlmaWNhdGlvbi5cbiAgICogQHBhcmFtIHtHZXRWZXJpZmljYXRpb25SZXF1ZXN0fSBwYXJhbXMgQSBHZXRWZXJpZmljYXRpb25SZXF1ZXN0IE9iamVjdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxHZXRWZXJpZmljYXRpb25SZXNwb25zZT59IEEgUHJvbWlzZTxHZXRWZXJpZmljYXRpb25SZXNwb25zZT4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldEN1clVzZXJWZXJpZmljYXRpb24ocGFyYW1zOiBHZXRWZXJpZmljYXRpb25SZXF1ZXN0LCk6IFByb21pc2U8R2V0VmVyaWZpY2F0aW9uUmVzcG9uc2U+IHtcbiAgICBwYXJhbXMudGFyZ2V0ID0gJ0NVUl9VU0VSJ1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PEdldFZlcmlmaWNhdGlvblJlc3BvbnNlPihcbiAgICAgIEFwaVVybHMuVkVSSUZJQ0FUSU9OX1VSTCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB3aXRoQ2FwdGNoYTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIGNoYW5nZSBiaW5kZWQgcHJvdmlkZXIuXG4gICAqIEBwYXJhbSB7R2V0VmVyaWZpY2F0aW9uUmVxdWVzdH0gcGFyYW1zIEEgR2V0VmVyaWZpY2F0aW9uUmVxdWVzdCBPYmplY3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8R2V0VmVyaWZpY2F0aW9uUmVzcG9uc2U+fSBBIFByb21pc2U8R2V0VmVyaWZpY2F0aW9uUmVzcG9uc2U+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBjaGFuZ2VCaW5kZWRQcm92aWRlcihwYXJhbXM6IENoYW5nZUJpbmRlZFByb3ZpZGVyUmVxdWVzdCwpOiBQcm9taXNlPENoYW5nZUJpbmRlZFByb3ZpZGVyUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVxdWVzdDxDaGFuZ2VCaW5kZWRQcm92aWRlclJlc3BvbnNlPihcbiAgICAgIGAke0FwaVVybHMuUFJPVklERVJfTElTVH0vJHtwYXJhbXMucHJvdmlkZXJfaWR9L3RyYW5zYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBwcm92aWRlcl90cmFuc190b2tlbjogcGFyYW1zLnRyYW5zX3Rva2VuLFxuICAgICAgICB9LFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICB9LFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXRjaCB0aGUgdXNlciBwcm9maWxlLlxuICAgKiBAcGFyYW0ge1VzZXJQcm9maWxlfSBwYXJhbXMgQSBVc2VyUHJvZmlsZSBPYmplY3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VXNlclByb2ZpbGU+fSBBIFByb21pc2U8VXNlclByb2ZpbGU+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBzZXRVc2VyUHJvZmlsZShwYXJhbXM6IFVzZXJQcm9maWxlKTogUHJvbWlzZTxVc2VyUHJvZmlsZT4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PFVzZXJQcm9maWxlPihBcGlVcmxzLlVTRVJfUFJJRklMRV9VUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFBhdGNoIHRoZSB1c2VyIHByb2ZpbGUuXG4gICAqIEBwYXJhbSB7UXVlcnlVc2VyUHJvZmlsZVJlcX0gYXBwZW5kZWRfcGFyYW1zIEEgUXVlcnlVc2VyUHJvZmlsZVJlcSBPYmplY3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VXNlclByb2ZpbGU+fSBBIFByb21pc2U8VXNlclByb2ZpbGU+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBxdWVyeVVzZXJQcm9maWxlKHBhcmFtczogUXVlcnlVc2VyUHJvZmlsZVJlcXVlc3QsKTogUHJvbWlzZTxRdWVyeVVzZXJQcm9maWxlUmVzcG9uc2U+IHtcbiAgICAvLyBsZXQgdXJsID0gbmV3IFVSTChBcGlVcmxzLlVTRVJfUVVFUllfVVJMKTtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyBhcyBhbnkpXG4gICAgLy8gdXJsLnNlYXJjaCA9IHNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PFF1ZXJ5VXNlclByb2ZpbGVSZXNwb25zZT4oYCR7QXBpVXJscy5VU0VSX1FVRVJZX1VSTH0/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogc2V0Q3VzdG9tU2lnbkZ1bmMgc2V0IHRoZSBnZXQgdGlja2V0IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSBnZXRUaWNrRm5cbiAgICovXG4gIHB1YmxpYyBzZXRDdXN0b21TaWduRnVuYyhnZXRUaWNrRm46IEdldEN1c3RvbVNpZ25UaWNrZXRGbikge1xuICAgIHRoaXMuZ2V0Q3VzdG9tU2lnblRpY2tldEZuID0gZ2V0VGlja0ZuXG4gIH1cblxuICAvKipcbiAgICogU2lnbkluV2l0aEN1c3RvbVRpY2tldCBjdXN0b20gc2lnbkluXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgcHVibGljIGFzeW5jIHNpZ25JbldpdGhDdXN0b21UaWNrZXQoKTogUHJvbWlzZTxDcmVkZW50aWFscz4ge1xuICAgIGNvbnN0IGN1c3RvbVRpY2tldCA9IGF3YWl0IHRoaXMuZ2V0Q3VzdG9tU2lnblRpY2tldEZuKClcbiAgICByZXR1cm4gdGhpcy5zaWduSW5XaXRoUHJvdmlkZXIoe1xuICAgICAgcHJvdmlkZXJfaWQ6ICdjdXN0b20nLFxuICAgICAgcHJvdmlkZXJfdG9rZW46IGN1c3RvbVRpY2tldCxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHBhc3N3b3JkXG4gICAqIEBwYXJhbSB7UmVzZXRQYXNzd29yZFJlcXVlc3R9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlcm9mIEF1dGhcbiAgICovXG4gIHB1YmxpYyBhc3luYyByZXNldFBhc3N3b3JkKHBhcmFtczogUmVzZXRQYXNzd29yZFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVxdWVzdChBcGlVcmxzLkFVVEhfUkVTRVRfUEFTU1dPUkQsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgLy8gd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBkZXZpY2UgYXV0aG9yaXphdGlvblxuICAgKiBAcGFyYW0ge0RldmljZUF1dGhvcml6ZVJlcXVlc3R9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEZXZpY2VBdXRob3JpemVSZXNwb25zZT59XG4gICAqIEBtZW1iZXJvZiBBdXRoXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZGV2aWNlQXV0aG9yaXplKHBhcmFtczogRGV2aWNlQXV0aG9yaXplUmVxdWVzdCk6IFByb21pc2U8RGV2aWNlQXV0aG9yaXplUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVxdWVzdChBcGlVcmxzLkFVVEhfR0VUX0RFVklDRV9DT0RFLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGNoZWNrVXNlcm5hbWUocGFyYW1zOiBDaGVja1VzZXJuYW1lUmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0KEFwaVVybHMuQ0hFQ0tfVVNFUk5BTUUsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBib2R5OiBwYXJhbXMsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjaGVja0lmVXNlckV4aXN0KHBhcmFtczogQ2hlY2tJZlVzZXJFeGlzdFJlcXVlc3QpOiBQcm9taXNlPENoZWNrSWZVc2VyRXhpc3RSZXNwb25zZT4ge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zIGFzIGFueSlcblxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PENoZWNrSWZVc2VyRXhpc3RSZXNwb25zZT4oYCR7QXBpVXJscy5DSEVDS19JRl9VU0VSX0VYSVNUfT8ke3NlYXJjaFBhcmFtcy50b1N0cmluZygpfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsb2dpblNjb3BlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNyZWRlbnRpYWxzQ2xpZW50LmdldFNjb3BlKClcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsb2dpbkdyb3VwcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNyZWRlbnRpYWxzQ2xpZW50LmdldEdyb3VwcygpXG4gIH1cbn1cbiJdfQ==
}, function(modId) { var map = {"./consts":1734234913766,"../oauth2client/oauth2client":1734234913761,"../captcha/captcha":1734234913767}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913766, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorType = exports.VerificationUsages = exports.ApiUrls = void 0;
var ApiUrls;
(function (ApiUrls) {
    ApiUrls["AUTH_SIGN_IN_URL"] = "/auth/v1/signin";
    ApiUrls["AUTH_SIGN_IN_ANONYMOUSLY_URL"] = "/auth/v1/signin/anonymously";
    ApiUrls["AUTH_SIGN_IN_WITH_PROVIDER_URL"] = "/auth/v1/signin/with/provider";
    ApiUrls["AUTH_SIGN_UP_URL"] = "/auth/v1/signup";
    ApiUrls["AUTH_TOKEN_URL"] = "/auth/v1/token";
    ApiUrls["AUTH_REVOKE_URL"] = "/auth/v1/revoke";
    ApiUrls["PROVIDER_BIND_URL"] = "/auth/v1/user/provider/bind";
    ApiUrls["PROVIDER_TOKEN_URL"] = "/auth/v1/provider/token";
    ApiUrls["PROVIDER_URI_URL"] = "/auth/v1/provider/uri";
    ApiUrls["USER_ME_URL"] = "/auth/v1/user/me";
    ApiUrls["USER_QUERY_URL"] = "/auth/v1/user/query";
    ApiUrls["USER_PRIFILE_URL"] = "/auth/v1/user/profile";
    ApiUrls["USER_TRANS_BY_PROVIDER_URL"] = "/auth/v1/user/trans/by/provider";
    ApiUrls["VERIFICATION_URL"] = "/auth/v1/verification";
    ApiUrls["VERIFY_URL"] = "/auth/v1/verification/verify";
    ApiUrls["PROVIDER_LIST"] = "/auth/v1/user/provider";
    ApiUrls["PROVIDER_UNBIND_URL"] = "/auth/v1/user/provider";
    ApiUrls["CHECK_PWD_URL"] = "/auth/v1/user/sudo";
    ApiUrls["SUDO_URL"] = "/auth/v1/user/sudo";
    ApiUrls["BIND_CONTACT_URL"] = "/auth/v1/user/contact";
    ApiUrls["AUTH_SET_PASSWORD"] = "/auth/v1/user/password";
    ApiUrls["AUTH_RESET_PASSWORD"] = "/auth/v1/reset";
    ApiUrls["AUTH_GET_DEVICE_CODE"] = "/auth/v1/device/code";
    ApiUrls["CHECK_USERNAME"] = "/auth/v1/checkUsername";
    ApiUrls["CHECK_IF_USER_EXIST"] = "/auth/v1/checkIfUserExist";
})(ApiUrls = exports.ApiUrls || (exports.ApiUrls = {}));
var VerificationUsages;
(function (VerificationUsages) {
    VerificationUsages["REGISTER"] = "REGISTER";
    VerificationUsages["SIGN_IN"] = "SIGN_IN";
    VerificationUsages["PASSWORD_RESET"] = "PASSWORD_RESET";
    VerificationUsages["EMAIL_ADDRESS_CHANGE"] = "EMAIL_ADDRESS_CHANGE";
    VerificationUsages["PHONE_NUMBER_CHANGE"] = "PHONE_NUMBER_CHANGE";
})(VerificationUsages = exports.VerificationUsages || (exports.VerificationUsages = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["INVALID_ARGUMENT"] = "invalid_argument";
    ErrorType["DEADLINE_EXCEEDED"] = "deadline_exceeded";
    ErrorType["NOT_FOUND"] = "not_found";
    ErrorType["ALREADY_EXISTS"] = "already_exists";
    ErrorType["PERMISSION_DENIED"] = "permission_denied";
    ErrorType["ABORTED"] = "aborted";
    ErrorType["OUT_OF_RANGE"] = "out_of_range";
    ErrorType["UNIMPLEMENTED"] = "unimplemented";
    ErrorType["INTERNAL"] = "internal";
    ErrorType["UNAVAILABLE"] = "unavailable";
    ErrorType["DATA_LOSS"] = "data_loss";
    ErrorType["CAPTCHA_REQUIRED"] = "captcha_required";
    ErrorType["CAPTCHA_INVALID"] = "captcha_invalid";
    ErrorType["INVALID_PASSWORD"] = "invalid_password";
    ErrorType["PASSWORD_NOT_SET"] = "password_not_set";
    ErrorType["INVALID_STATUS"] = "invalid_status";
    ErrorType["USER_PENDING"] = "user_pending";
    ErrorType["USER_BLOCKED"] = "user_blocked";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvY29uc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQVksT0EwQlg7QUExQkQsV0FBWSxPQUFPO0lBQ2pCLCtDQUFvQyxDQUFBO0lBQ3BDLHVFQUE0RCxDQUFBO0lBQzVELDJFQUFnRSxDQUFBO0lBQ2hFLCtDQUFvQyxDQUFBO0lBQ3BDLDRDQUFpQyxDQUFBO0lBQ2pDLDhDQUFtQyxDQUFBO0lBQ25DLDREQUFpRCxDQUFBO0lBQ2pELHlEQUE4QyxDQUFBO0lBQzlDLHFEQUEwQyxDQUFBO0lBQzFDLDJDQUFnQyxDQUFBO0lBQ2hDLGlEQUFzQyxDQUFBO0lBQ3RDLHFEQUEwQyxDQUFBO0lBQzFDLHlFQUE4RCxDQUFBO0lBQzlELHFEQUEwQyxDQUFBO0lBQzFDLHNEQUEyQyxDQUFBO0lBQzNDLG1EQUF3QyxDQUFBO0lBQ3hDLHlEQUE4QyxDQUFBO0lBQzlDLCtDQUFvQyxDQUFBO0lBQ3BDLDBDQUErQixDQUFBO0lBQy9CLHFEQUEwQyxDQUFBO0lBQzFDLHVEQUE0QyxDQUFBO0lBQzVDLGlEQUFzQyxDQUFBO0lBQ3RDLHdEQUE2QyxDQUFBO0lBQzdDLG9EQUF5QyxDQUFBO0lBQ3pDLDREQUFpRCxDQUFBO0FBQ25ELENBQUMsRUExQlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBMEJsQjtBQUVELElBQVksa0JBTVg7QUFORCxXQUFZLGtCQUFrQjtJQUM1QiwyQ0FBcUIsQ0FBQTtJQUNyQix5Q0FBbUIsQ0FBQTtJQUNuQix1REFBaUMsQ0FBQTtJQUNqQyxtRUFBNkMsQ0FBQTtJQUM3QyxpRUFBMkMsQ0FBQTtBQUM3QyxDQUFDLEVBTlcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFNN0I7QUFFRCxJQUFZLFNBb0JYO0FBcEJELFdBQVksU0FBUztJQUNuQixrREFBcUMsQ0FBQTtJQUNyQyxvREFBdUMsQ0FBQTtJQUN2QyxvQ0FBdUIsQ0FBQTtJQUN2Qiw4Q0FBaUMsQ0FBQTtJQUNqQyxvREFBdUMsQ0FBQTtJQUN2QyxnQ0FBbUIsQ0FBQTtJQUNuQiwwQ0FBNkIsQ0FBQTtJQUM3Qiw0Q0FBK0IsQ0FBQTtJQUMvQixrQ0FBcUIsQ0FBQTtJQUNyQix3Q0FBMkIsQ0FBQTtJQUMzQixvQ0FBdUIsQ0FBQTtJQUV2QixrREFBcUMsQ0FBQTtJQUNyQyxnREFBbUMsQ0FBQTtJQUNuQyxrREFBcUMsQ0FBQTtJQUNyQyxrREFBcUMsQ0FBQTtJQUNyQyw4Q0FBaUMsQ0FBQTtJQUNqQywwQ0FBNkIsQ0FBQTtJQUM3QiwwQ0FBNkIsQ0FBQTtBQUMvQixDQUFDLEVBcEJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBb0JwQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEFwaVVybHMge1xuICBBVVRIX1NJR05fSU5fVVJMID0gJy9hdXRoL3YxL3NpZ25pbicsXG4gIEFVVEhfU0lHTl9JTl9BTk9OWU1PVVNMWV9VUkwgPSAnL2F1dGgvdjEvc2lnbmluL2Fub255bW91c2x5JyxcbiAgQVVUSF9TSUdOX0lOX1dJVEhfUFJPVklERVJfVVJMID0gJy9hdXRoL3YxL3NpZ25pbi93aXRoL3Byb3ZpZGVyJyxcbiAgQVVUSF9TSUdOX1VQX1VSTCA9ICcvYXV0aC92MS9zaWdudXAnLFxuICBBVVRIX1RPS0VOX1VSTCA9ICcvYXV0aC92MS90b2tlbicsXG4gIEFVVEhfUkVWT0tFX1VSTCA9ICcvYXV0aC92MS9yZXZva2UnLFxuICBQUk9WSURFUl9CSU5EX1VSTCA9ICcvYXV0aC92MS91c2VyL3Byb3ZpZGVyL2JpbmQnLFxuICBQUk9WSURFUl9UT0tFTl9VUkwgPSAnL2F1dGgvdjEvcHJvdmlkZXIvdG9rZW4nLFxuICBQUk9WSURFUl9VUklfVVJMID0gJy9hdXRoL3YxL3Byb3ZpZGVyL3VyaScsXG4gIFVTRVJfTUVfVVJMID0gJy9hdXRoL3YxL3VzZXIvbWUnLFxuICBVU0VSX1FVRVJZX1VSTCA9ICcvYXV0aC92MS91c2VyL3F1ZXJ5JyxcbiAgVVNFUl9QUklGSUxFX1VSTCA9ICcvYXV0aC92MS91c2VyL3Byb2ZpbGUnLFxuICBVU0VSX1RSQU5TX0JZX1BST1ZJREVSX1VSTCA9ICcvYXV0aC92MS91c2VyL3RyYW5zL2J5L3Byb3ZpZGVyJyxcbiAgVkVSSUZJQ0FUSU9OX1VSTCA9ICcvYXV0aC92MS92ZXJpZmljYXRpb24nLFxuICBWRVJJRllfVVJMID0gJy9hdXRoL3YxL3ZlcmlmaWNhdGlvbi92ZXJpZnknLFxuICBQUk9WSURFUl9MSVNUID0gJy9hdXRoL3YxL3VzZXIvcHJvdmlkZXInLFxuICBQUk9WSURFUl9VTkJJTkRfVVJMID0gJy9hdXRoL3YxL3VzZXIvcHJvdmlkZXInLFxuICBDSEVDS19QV0RfVVJMID0gJy9hdXRoL3YxL3VzZXIvc3VkbycsXG4gIFNVRE9fVVJMID0gJy9hdXRoL3YxL3VzZXIvc3VkbycsXG4gIEJJTkRfQ09OVEFDVF9VUkwgPSAnL2F1dGgvdjEvdXNlci9jb250YWN0JyxcbiAgQVVUSF9TRVRfUEFTU1dPUkQgPSAnL2F1dGgvdjEvdXNlci9wYXNzd29yZCcsXG4gIEFVVEhfUkVTRVRfUEFTU1dPUkQgPSAnL2F1dGgvdjEvcmVzZXQnLFxuICBBVVRIX0dFVF9ERVZJQ0VfQ09ERSA9ICcvYXV0aC92MS9kZXZpY2UvY29kZScsXG4gIENIRUNLX1VTRVJOQU1FID0gJy9hdXRoL3YxL2NoZWNrVXNlcm5hbWUnLFxuICBDSEVDS19JRl9VU0VSX0VYSVNUID0gJy9hdXRoL3YxL2NoZWNrSWZVc2VyRXhpc3QnXG59XG5cbmV4cG9ydCBlbnVtIFZlcmlmaWNhdGlvblVzYWdlcyB7XG4gIFJFR0lTVEVSID0gJ1JFR0lTVEVSJyxcbiAgU0lHTl9JTiA9ICdTSUdOX0lOJyxcbiAgUEFTU1dPUkRfUkVTRVQgPSAnUEFTU1dPUkRfUkVTRVQnLFxuICBFTUFJTF9BRERSRVNTX0NIQU5HRSA9ICdFTUFJTF9BRERSRVNTX0NIQU5HRScsXG4gIFBIT05FX05VTUJFUl9DSEFOR0UgPSAnUEhPTkVfTlVNQkVSX0NIQU5HRScsXG59XG5cbmV4cG9ydCBlbnVtIEVycm9yVHlwZSB7XG4gIElOVkFMSURfQVJHVU1FTlQgPSAnaW52YWxpZF9hcmd1bWVudCcsXG4gIERFQURMSU5FX0VYQ0VFREVEID0gJ2RlYWRsaW5lX2V4Y2VlZGVkJyxcbiAgTk9UX0ZPVU5EID0gJ25vdF9mb3VuZCcsXG4gIEFMUkVBRFlfRVhJU1RTID0gJ2FscmVhZHlfZXhpc3RzJyxcbiAgUEVSTUlTU0lPTl9ERU5JRUQgPSAncGVybWlzc2lvbl9kZW5pZWQnLFxuICBBQk9SVEVEID0gJ2Fib3J0ZWQnLFxuICBPVVRfT0ZfUkFOR0UgPSAnb3V0X29mX3JhbmdlJyxcbiAgVU5JTVBMRU1FTlRFRCA9ICd1bmltcGxlbWVudGVkJyxcbiAgSU5URVJOQUwgPSAnaW50ZXJuYWwnLFxuICBVTkFWQUlMQUJMRSA9ICd1bmF2YWlsYWJsZScsXG4gIERBVEFfTE9TUyA9ICdkYXRhX2xvc3MnLFxuICAvLyBDb21tb25FcnJvclxuICBDQVBUQ0hBX1JFUVVJUkVEID0gJ2NhcHRjaGFfcmVxdWlyZWQnLFxuICBDQVBUQ0hBX0lOVkFMSUQgPSAnY2FwdGNoYV9pbnZhbGlkJyxcbiAgSU5WQUxJRF9QQVNTV09SRCA9ICdpbnZhbGlkX3Bhc3N3b3JkJyxcbiAgUEFTU1dPUkRfTk9UX1NFVCA9ICdwYXNzd29yZF9ub3Rfc2V0JyxcbiAgSU5WQUxJRF9TVEFUVVMgPSAnaW52YWxpZF9zdGF0dXMnLFxuICBVU0VSX1BFTkRJTkcgPSAndXNlcl9wZW5kaW5nJyxcbiAgVVNFUl9CTE9DS0VEID0gJ3VzZXJfYmxvY2tlZCcsXG59XG4iXX0=
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913767, function(require, module, exports) {

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
exports.Captcha = void 0;
var oauth2client_1 = require("../oauth2client/oauth2client");
var GET_CAPTCHA_URL = '/auth/v1/captcha/init';
var Captcha = (function () {
    function Captcha(opts) {
        if (!opts.openURIWithCallback) {
            opts.openURIWithCallback = this.getDefaultOpenURIWithCallback();
        }
        if (!opts.storage) {
            opts.storage = oauth2client_1.defaultStorage;
        }
        this.config = opts;
        this.tokenSectionName = "captcha_" + opts.clientId;
    }
    Captcha.prototype.request = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var state, reqURL, resp, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!options) {
                            options = {};
                        }
                        if (!options.method) {
                            options.method = 'GET';
                        }
                        state = options.method + ":" + url;
                        reqURL = url;
                        if (!options.withCaptcha) return [3, 2];
                        return [4, this.appendCaptchaTokenToURL(url, state, false)];
                    case 1:
                        reqURL = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 7]);
                        return [4, this.config.request(reqURL, options)];
                    case 3:
                        resp = _a.sent();
                        return [3, 7];
                    case 4:
                        err_1 = _a.sent();
                        if (!(err_1.error === 'captcha_required' || err_1.error === 'captcha_invalid')) return [3, 6];
                        return [4, this.appendCaptchaTokenToURL(url, state, err_1.error === 'captcha_invalid')];
                    case 5:
                        url = _a.sent();
                        return [2, this.config.request(url, options)];
                    case 6: return [2, Promise.reject(err_1)];
                    case 7: return [2, resp];
                }
            });
        });
    };
    Captcha.prototype.getDefaultOpenURIWithCallback = function () {
        if (window.location.search.indexOf('__captcha') > 0) {
            document.body.style.display = 'none';
        }
        if (document.getElementById('captcha_panel_wrap') === null) {
            var elementDiv_1 = document.createElement('div');
            elementDiv_1.style.cssText = 'background-color: rgba(0, 0, 0, 0.7);position: fixed;left: 0px;right: 0px;top: 0px;bottom: 0px;padding: 9vw 0 0 0;display: none;z-index:100;';
            elementDiv_1.setAttribute('id', 'captcha_panel_wrap');
            setTimeout(function () {
                document.body.appendChild(elementDiv_1);
            }, 0);
        }
        return this.defaultOpenURIWithCallback;
    };
    Captcha.prototype.defaultOpenURIWithCallback = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var target, iframe;
            return __generator(this, function (_a) {
                target = document.getElementById('captcha_panel_wrap');
                iframe = document.createElement('iframe');
                target.innerHTML = '';
                iframe.setAttribute('src', url);
                iframe.setAttribute('id', 'review-panel-iframe');
                iframe.style.cssText = 'min-width:355px;display:block;height:355px;margin:0 auto;background-color: rgb(255, 255, 255);border: none;';
                target.appendChild(iframe);
                target.style.display = 'block';
                return [2, new Promise(function (resolve, reject) {
                        iframe.onload = function () {
                            try {
                                var windowLocation = window.location;
                                var iframeLocation = iframe.contentWindow.location;
                                if (iframeLocation.host
                                    + iframeLocation.pathname
                                    === windowLocation.host
                                        + windowLocation.pathname) {
                                    target.style.display = 'none';
                                    var iframeUrlParams = new URLSearchParams(iframeLocation.search);
                                    var captchToken = iframeUrlParams.get('captcha_token');
                                    if (captchToken) {
                                        return resolve({
                                            captcha_token: captchToken,
                                            expires_in: Number(iframeUrlParams.get('expires_in')),
                                        });
                                    }
                                    return reject({
                                        error: iframeUrlParams.get('error'),
                                        error_description: iframeUrlParams.get('error_description'),
                                    });
                                }
                                target.style.display = 'block';
                            }
                            catch (error) {
                                target.style.display = 'block';
                            }
                        };
                    })];
            });
        });
    };
    Captcha.prototype.getCaptchaToken = function (forceNewToken, state) {
        return __awaiter(this, void 0, void 0, function () {
            var captchaToken_1, redirectURL, captchaTokenResp, captchaToken_2, captchaToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!forceNewToken) return [3, 2];
                        return [4, this.findCaptchaToken()];
                    case 1:
                        captchaToken_1 = _a.sent();
                        if (captchaToken_1) {
                            return [2, captchaToken_1];
                        }
                        _a.label = 2;
                    case 2:
                        redirectURL = window.location.origin + window.location.pathname + "?__captcha=on";
                        return [4, this.config.request(GET_CAPTCHA_URL, {
                                method: 'POST',
                                body: {
                                    client_id: this.config.clientId,
                                    redirect_uri: redirectURL,
                                    state: state,
                                },
                                withCredentials: false,
                            })];
                    case 3:
                        captchaTokenResp = _a.sent();
                        if (captchaTokenResp.captcha_token) {
                            captchaToken_2 = {
                                captcha_token: captchaTokenResp.captcha_token,
                                expires_in: captchaTokenResp.expires_in,
                            };
                            this.saveCaptchaToken(captchaToken_2);
                            return [2, captchaTokenResp.captcha_token];
                        }
                        return [4, this.config.openURIWithCallback(captchaTokenResp.url)];
                    case 4:
                        captchaToken = _a.sent();
                        this.saveCaptchaToken(captchaToken);
                        return [2, captchaToken.captcha_token];
                }
            });
        });
    };
    Captcha.prototype.appendCaptchaTokenToURL = function (url, state, forceNewToken) {
        return __awaiter(this, void 0, void 0, function () {
            var captchaToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getCaptchaToken(forceNewToken, state)];
                    case 1:
                        captchaToken = _a.sent();
                        if (url.indexOf('?') > 0) {
                            url += "&captcha_token=" + captchaToken;
                        }
                        else {
                            url += "?captcha_token=" + captchaToken;
                        }
                        return [2, url];
                }
            });
        });
    };
    Captcha.prototype.saveCaptchaToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenStr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token.expires_at = new Date(Date.now() + (token.expires_in - 10) * 1000);
                        tokenStr = JSON.stringify(token);
                        return [4, this.config.storage.setItem(this.tokenSectionName, tokenStr)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Captcha.prototype.findCaptchaToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tokenStr, captchaToken, isExpired, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.config.storage.getItem(this.tokenSectionName)];
                    case 1:
                        tokenStr = _a.sent();
                        if (!(tokenStr !== undefined && tokenStr !== null)) return [3, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 3, , 5]);
                        captchaToken = JSON.parse(tokenStr);
                        if (captchaToken === null || captchaToken === void 0 ? void 0 : captchaToken.expires_at) {
                            captchaToken.expires_at = new Date(captchaToken.expires_at);
                        }
                        isExpired = captchaToken.expires_at < new Date();
                        if (isExpired) {
                            return [2, null];
                        }
                        return [2, captchaToken.captcha_token];
                    case 3:
                        error_1 = _a.sent();
                        return [4, this.config.storage.removeItem(this.tokenSectionName)];
                    case 4:
                        _a.sent();
                        return [2, null];
                    case 5: return [2, null];
                }
            });
        });
    };
    return Captcha;
}());
exports.Captcha = Captcha;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXB0Y2hhL2NhcHRjaGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkRBQTZEO0FBNEI3RCxJQUFNLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQTtBQUUvQztJQVFFLGlCQUFZLElBQW9CO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFBO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyw2QkFBYyxDQUFBO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQVcsSUFBSSxDQUFDLFFBQVUsQ0FBQTtJQUNwRCxDQUFDO0lBT1kseUJBQU8sR0FBcEIsVUFDRSxHQUFXLEVBQ1gsT0FBK0I7Ozs7Ozt3QkFFL0IsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFDWixPQUFPLEdBQUcsRUFBRSxDQUFBO3lCQUNiO3dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFOzRCQUNuQixPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTt5QkFDdkI7d0JBQ0ssS0FBSyxHQUFNLE9BQU8sQ0FBQyxNQUFNLFNBQUksR0FBSyxDQUFBO3dCQUNwQyxNQUFNLEdBQUcsR0FBRyxDQUFBOzZCQUNaLE9BQU8sQ0FBQyxXQUFXLEVBQW5CLGNBQW1CO3dCQUNaLFdBQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUE7O3dCQUE5RCxNQUFNLEdBQUcsU0FBcUQsQ0FBQTs7Ozt3QkFLdkQsV0FB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TFksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW1wbGVTdG9yYWdlLCBSZXF1ZXN0RnVuY3Rpb24gfSBmcm9tICcuLi9vYXV0aDJjbGllbnQvaW50ZXJmYWNlJ1xuaW1wb3J0IHsgQXV0aENsaWVudFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vb2F1dGgyY2xpZW50L21vZGVscydcbmltcG9ydCB7IGRlZmF1bHRTdG9yYWdlIH0gZnJvbSAnLi4vb2F1dGgyY2xpZW50L29hdXRoMmNsaWVudCdcblxuZXhwb3J0IGludGVyZmFjZSBDYXB0Y2hhT3B0aW9ucyB7XG4gIGNsaWVudElkOiBzdHJpbmdcbiAgcmVxdWVzdDogUmVxdWVzdEZ1bmN0aW9uO1xuICBzdG9yYWdlOiBTaW1wbGVTdG9yYWdlO1xuICAvLyDmiZPlvIDnvZHpobXlubbpgJrov4dVUkzlm57osIPojrflj5YgQ2FwdGNoYVRva2Vu77yM6ZKI5a+55LiN6YCa55qE5bmz5Y+w77yM6K+l5Ye95pWw5Y+v5Lul6Ieq5a6a5LmJ5a6e546wLCDpu5jorqTpm4bmiJDmtY/op4jlmajnq6/orqTor4FcbiAgb3BlblVSSVdpdGhDYWxsYmFjaz86IE9wZW5VUklXaXRoQ2FsbGJhY2tGdWN0aW9uO1xufVxuXG50eXBlIE9wZW5VUklXaXRoQ2FsbGJhY2tGdWN0aW9uID0gKHVybDogc3RyaW5nKSA9PiBQcm9taXNlPENhcHRjaGFUb2tlbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGNoYVRva2VuIHtcbiAgY2FwdGNoYV90b2tlbjogc3RyaW5nXG4gIGV4cGlyZXNfaW46IG51bWJlclxuICBleHBpcmVzX2F0PzogRGF0ZSB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGNoYVJlcXVlc3RPcHRpb25zIGV4dGVuZHMgQXV0aENsaWVudFJlcXVlc3RPcHRpb25zIHtcbiAgd2l0aENhcHRjaGE/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldENhcHRjaGFSZXNwb25zZSB7XG4gIGNhcHRjaGFfdG9rZW4/OiBzdHJpbmdcbiAgZXhwaXJlc19pbj86IG51bWJlclxuICB1cmw/OiBzdHJpbmdcbn1cblxuY29uc3QgR0VUX0NBUFRDSEFfVVJMID0gJy9hdXRoL3YxL2NhcHRjaGEvaW5pdCdcblxuZXhwb3J0IGNsYXNzIENhcHRjaGEge1xuICBwcml2YXRlIGNvbmZpZzogQ2FwdGNoYU9wdGlvbnNcbiAgcHJpdmF0ZSB0b2tlblNlY3Rpb25OYW1lOiBzdHJpbmdcblxuICAvKipcbiAgICogY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtDYXB0Y2hhT3B0aW9uc30gb3B0c1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0czogQ2FwdGNoYU9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdHMub3BlblVSSVdpdGhDYWxsYmFjaykge1xuICAgICAgb3B0cy5vcGVuVVJJV2l0aENhbGxiYWNrID0gdGhpcy5nZXREZWZhdWx0T3BlblVSSVdpdGhDYWxsYmFjaygpXG4gICAgfVxuICAgIGlmICghb3B0cy5zdG9yYWdlKSB7XG4gICAgICBvcHRzLnN0b3JhZ2UgPSBkZWZhdWx0U3RvcmFnZVxuICAgIH1cbiAgICB0aGlzLmNvbmZpZyA9IG9wdHNcbiAgICB0aGlzLnRva2VuU2VjdGlvbk5hbWUgPSBgY2FwdGNoYV8ke29wdHMuY2xpZW50SWR9YFxuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVlc3QgaHR0cCBsaWtlIHNpbXBsZSBmZXRjaCBhcGksIGV4cDpyZXF1ZXN0KCcvdjEvdXNlci9tZScsIHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtBdXRoQ2xpZW50UmVxdWVzdE9wdGlvbnN9IG9wdGlvbnNcbiAgICovXG4gIHB1YmxpYyBhc3luYyByZXF1ZXN0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBDYXB0Y2hhUmVxdWVzdE9wdGlvbnMsXG4gICk6IFByb21pc2U8VD4ge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5tZXRob2QpIHtcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCdcbiAgICB9XG4gICAgY29uc3Qgc3RhdGUgPSBgJHtvcHRpb25zLm1ldGhvZH06JHt1cmx9YFxuICAgIGxldCByZXFVUkwgPSB1cmxcbiAgICBpZiAob3B0aW9ucy53aXRoQ2FwdGNoYSkge1xuICAgICAgcmVxVVJMID0gYXdhaXQgdGhpcy5hcHBlbmRDYXB0Y2hhVG9rZW5Ub1VSTCh1cmwsIHN0YXRlLCBmYWxzZSlcbiAgICB9XG5cbiAgICBsZXQgcmVzcDogVFxuICAgIHRyeSB7XG4gICAgICByZXNwID0gYXdhaXQgdGhpcy5jb25maWcucmVxdWVzdDxUPihyZXFVUkwsIG9wdGlvbnMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmVycm9yID09PSAnY2FwdGNoYV9yZXF1aXJlZCcgfHwgZXJyLmVycm9yID09PSAnY2FwdGNoYV9pbnZhbGlkJykge1xuICAgICAgICB1cmwgPSBhd2FpdCB0aGlzLmFwcGVuZENhcHRjaGFUb2tlblRvVVJMKHVybCwgc3RhdGUsIGVyci5lcnJvciA9PT0gJ2NhcHRjaGFfaW52YWxpZCcpXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZXF1ZXN0PFQ+KHVybCwgb3B0aW9ucylcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgfVxuICAgIHJldHVybiByZXNwXG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHRPcGVuVVJJV2l0aENhbGxiYWNrKCk6IE9wZW5VUklXaXRoQ2FsbGJhY2tGdWN0aW9uIHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCdfX2NhcHRjaGEnKSA+IDApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcHRjaGFfcGFuZWxfd3JhcCcpID09PSBudWxsKSB7XG4gICAgICBjb25zdCBlbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGVsZW1lbnREaXYuc3R5bGUuY3NzVGV4dCA9ICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO3Bvc2l0aW9uOiBmaXhlZDtsZWZ0OiAwcHg7cmlnaHQ6IDBweDt0b3A6IDBweDtib3R0b206IDBweDtwYWRkaW5nOiA5dncgMCAwIDA7ZGlzcGxheTogbm9uZTt6LWluZGV4OjEwMDsnXG4gICAgICBlbGVtZW50RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FwdGNoYV9wYW5lbF93cmFwJylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnREaXYpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0T3BlblVSSVdpdGhDYWxsYmFja1xuICB9XG5cbiAgLyoqXG4gICAqIOm7mOiupOmAmui/h+a1j+iniOWZqOaJk+W8gOe9kemhteW5tuiOt+WPluWbnuiwg1xuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBkZWZhdWx0T3BlblVSSVdpdGhDYWxsYmFjayh1cmw6IHN0cmluZyk6IFByb21pc2U8Q2FwdGNoYVRva2VuPiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcHRjaGFfcGFuZWxfd3JhcCcpXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gJydcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpXG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncmV2aWV3LXBhbmVsLWlmcmFtZScpXG4gICAgaWZyYW1lLnN0eWxlLmNzc1RleHQgPSAnbWluLXdpZHRoOjM1NXB4O2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjM1NXB4O21hcmdpbjowIGF1dG87YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO2JvcmRlcjogbm9uZTsnXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGlmcmFtZSlcbiAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Q2FwdGNoYVRva2VuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZnJhbWUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHdpbmRvd0xvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uXG4gICAgICAgICAgY29uc3QgaWZyYW1lTG9jYXRpb24gPSBpZnJhbWUuY29udGVudFdpbmRvdy5sb2NhdGlvblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlmcmFtZUxvY2F0aW9uLmhvc3RcbiAgICAgICAgICAgICsgaWZyYW1lTG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgID09PSB3aW5kb3dMb2NhdGlvbi5ob3N0XG4gICAgICAgICAgICArIHdpbmRvd0xvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgY29uc3QgaWZyYW1lVXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhpZnJhbWVMb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgICAgICBjb25zdCBjYXB0Y2hUb2tlbiA9IGlmcmFtZVVybFBhcmFtcy5nZXQoJ2NhcHRjaGFfdG9rZW4nKVxuICAgICAgICAgICAgaWYgKGNhcHRjaFRva2VuKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBjYXB0Y2hhX3Rva2VuOiBjYXB0Y2hUb2tlbixcbiAgICAgICAgICAgICAgICBleHBpcmVzX2luOiBOdW1iZXIoaWZyYW1lVXJsUGFyYW1zLmdldCgnZXhwaXJlc19pbicpKSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZWplY3Qoe1xuICAgICAgICAgICAgICBlcnJvcjogaWZyYW1lVXJsUGFyYW1zLmdldCgnZXJyb3InKSxcbiAgICAgICAgICAgICAgZXJyb3JfZGVzY3JpcHRpb246IGlmcmFtZVVybFBhcmFtcy5nZXQoJ2Vycm9yX2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgLyoqXG4gICAqIGdldENhcHRjaGFUb2tlbiDojrflj5ZjYXB0Y2hhVG9rZW5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0Q2FwdGNoYVRva2VuKGZvcmNlTmV3VG9rZW46IGJvb2xlYW4sIHN0YXRlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGlmICghZm9yY2VOZXdUb2tlbikge1xuICAgICAgLy8g5aaC5p6c5pys5Zyw5a2Y5Zyo77yM5YiZ55u05o6l6L+U5ZueXG4gICAgICBjb25zdCBjYXB0Y2hhVG9rZW4gPSBhd2FpdCB0aGlzLmZpbmRDYXB0Y2hhVG9rZW4oKVxuICAgICAgaWYgKGNhcHRjaGFUb2tlbikge1xuICAgICAgICByZXR1cm4gY2FwdGNoYVRva2VuXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlZGlyZWN0VVJMID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/X19jYXB0Y2hhPW9uYFxuICAgIGNvbnN0IGNhcHRjaGFUb2tlblJlc3AgPSBhd2FpdCB0aGlzLmNvbmZpZy5yZXF1ZXN0PEdldENhcHRjaGFSZXNwb25zZT4oR0VUX0NBUFRDSEFfVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZy5jbGllbnRJZCxcbiAgICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdFVSTCxcbiAgICAgICAgc3RhdGUsXG4gICAgICB9LFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICB9KVxuICAgIGlmIChjYXB0Y2hhVG9rZW5SZXNwLmNhcHRjaGFfdG9rZW4pIHtcbiAgICAgIGNvbnN0IGNhcHRjaGFUb2tlbiA9IHtcbiAgICAgICAgY2FwdGNoYV90b2tlbjogY2FwdGNoYVRva2VuUmVzcC5jYXB0Y2hhX3Rva2VuLFxuICAgICAgICBleHBpcmVzX2luOiBjYXB0Y2hhVG9rZW5SZXNwLmV4cGlyZXNfaW4sXG4gICAgICB9XG4gICAgICB0aGlzLnNhdmVDYXB0Y2hhVG9rZW4oY2FwdGNoYVRva2VuKVxuICAgICAgcmV0dXJuIGNhcHRjaGFUb2tlblJlc3AuY2FwdGNoYV90b2tlblxuICAgIH1cbiAgICBjb25zdCBjYXB0Y2hhVG9rZW4gPSBhd2FpdCB0aGlzLmNvbmZpZy5vcGVuVVJJV2l0aENhbGxiYWNrKGNhcHRjaGFUb2tlblJlc3AudXJsKVxuICAgIHRoaXMuc2F2ZUNhcHRjaGFUb2tlbihjYXB0Y2hhVG9rZW4pXG4gICAgcmV0dXJuIGNhcHRjaGFUb2tlbi5jYXB0Y2hhX3Rva2VuXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFwcGVuZENhcHRjaGFUb2tlblRvVVJMKHVybDogc3RyaW5nLCBzdGF0ZTogc3RyaW5nLCBmb3JjZU5ld1Rva2VuOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBjYXB0Y2hhVG9rZW4gPSBhd2FpdCB0aGlzLmdldENhcHRjaGFUb2tlbihmb3JjZU5ld1Rva2VuLCBzdGF0ZSlcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA+IDApIHtcbiAgICAgIHVybCArPSBgJmNhcHRjaGFfdG9rZW49JHtjYXB0Y2hhVG9rZW59YFxuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgKz0gYD9jYXB0Y2hhX3Rva2VuPSR7Y2FwdGNoYVRva2VufWBcbiAgICB9XG4gICAgcmV0dXJuIHVybFxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzYXZlQ2FwdGNoYVRva2VuKHRva2VuOiBDYXB0Y2hhVG9rZW4pIHtcbiAgICB0b2tlbi5leHBpcmVzX2F0ID0gbmV3IERhdGUoRGF0ZS5ub3coKSArICh0b2tlbi5leHBpcmVzX2luIC0gMTApICogMTAwMCwpXG4gICAgY29uc3QgdG9rZW5TdHI6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRva2VuKVxuICAgIGF3YWl0IHRoaXMuY29uZmlnLnN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRva2VuU2VjdGlvbk5hbWUsIHRva2VuU3RyKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmaW5kQ2FwdGNoYVRva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdG9rZW5TdHI6IHN0cmluZyA9IGF3YWl0IHRoaXMuY29uZmlnLnN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuU2VjdGlvbk5hbWUsKVxuICAgIGlmICh0b2tlblN0ciAhPT0gdW5kZWZpbmVkICYmIHRva2VuU3RyICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjYXB0Y2hhVG9rZW4gPSBKU09OLnBhcnNlKHRva2VuU3RyKVxuICAgICAgICBpZiAoY2FwdGNoYVRva2VuPy5leHBpcmVzX2F0KSB7XG4gICAgICAgICAgY2FwdGNoYVRva2VuLmV4cGlyZXNfYXQgPSBuZXcgRGF0ZShjYXB0Y2hhVG9rZW4uZXhwaXJlc19hdClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0V4cGlyZWQgPSBjYXB0Y2hhVG9rZW4uZXhwaXJlc19hdCA8IG5ldyBEYXRlKClcbiAgICAgICAgaWYgKGlzRXhwaXJlZCkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcHRjaGFUb2tlbi5jYXB0Y2hhX3Rva2VuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhd2FpdCB0aGlzLmNvbmZpZy5zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy50b2tlblNlY3Rpb25OYW1lKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iXX0=
}, function(modId) { var map = {"../oauth2client/oauth2client":1734234913761}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913768, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvbW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQmFzZVJlcXVlc3Qge1xuICBjbGllbnRfaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEdldEN1c3RvbVNpZ25UaWNrZXRGbiA9ICgpID0+IFByb21pc2U8c3RyaW5nPjtcblxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5SZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Qge1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHZlcmlmaWNhdGlvbl90b2tlbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5XaXRoUHJvdmlkZXJSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Qge1xuICBwcm92aWRlcl90b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25VcFJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdCB7XG4gIHBob25lX251bWJlcj86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG5cbiAgdmVyaWZpY2F0aW9uX2NvZGU/OiBzdHJpbmc7XG4gIHZlcmlmaWNhdGlvbl90b2tlbj86IHN0cmluZztcbiAgcHJvdmlkZXJfdG9rZW4/OiBzdHJpbmc7XG5cbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGdlbmRlcj86IHN0cmluZztcbiAgcGljdHVyZT86IHN0cmluZztcbiAgbG9jYWxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFZlcmlmaWNhdGlvblJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdCB7XG4gIHBob25lX251bWJlcj86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHRhcmdldD86IHN0cmluZyB8ICdBTlknO1xuICB1c2FnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRWZXJpZmljYXRpb25SZXNwb25zZSB7XG4gIHZlcmlmaWNhdGlvbl9pZD86IHN0cmluZztcbiAgaXNfdXNlcj86IGJvb2xlYW4gfCBmYWxzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWZXJpZnlSZXNwb25zZSB7XG4gIHZlcmlmaWNhdGlvbl90b2tlbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWZXJpZnlSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Qge1xuICB2ZXJpZmljYXRpb25fY29kZTogc3RyaW5nO1xuICB2ZXJpZmljYXRpb25faWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvdmlkZXJCaW5kUmVxdWVzdCB7XG4gIHByb3ZpZGVyX3Rva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhbnRQcm92aWRlclRva2VuUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0IHtcbiAgcHJvdmlkZXJfaWQ6IHN0cmluZztcbiAgcHJvdmlkZXJfcmVkaXJlY3RfdXJpPzogc3RyaW5nO1xuICBwcm92aWRlcl9jb2RlPzogc3RyaW5nO1xuICBwcm92aWRlcl9hY2Nlc3NfdG9rZW4/OiBzdHJpbmc7XG4gIHByb3ZpZGVyX2lkX3Rva2VuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYW50UHJvdmlkZXJUb2tlblJlc3BvbnNlIHtcbiAgcHJvdmlkZXJfdG9rZW46IHN0cmluZztcbiAgZXhwaXJlc19pbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhdGNoUHJvdmlkZXJUb2tlblJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdCB7XG4gIHByb3ZpZGVyX2lkPzogc3RyaW5nO1xuICBwcm92aWRlcl90b2tlbjogc3RyaW5nO1xuICBwcm92aWRlcl9wYXJhbXM6IHtcbiAgICBlbmNyeXB0ZWREYXRhPzogc3RyaW5nO1xuICAgIGl2Pzogc3RyaW5nO1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF0Y2hQcm92aWRlclRva2VuUmVzcG9uc2Uge1xuICBwcm92aWRlcl90b2tlbjogc3RyaW5nO1xuICBleHBpcmVzX2luOiBudW1iZXI7XG4gIHByb3ZpZGVyX3Byb2ZpbGU6IFByb3ZpZGVyUHJvZmlsZTtcbn1cblxuLy8gZXhwb3J0IGludGVyZmFjZSBHZW5Qcm92aWRlclJlZGlyZWN0VXJpUmVxdWVzdCB7XG4vLyAgIHByb3ZpZGVyX2lkOiBzdHJpbmc7XG4vLyAgIHByb3ZpZGVyX3JlZGlyZWN0X3VyaTogc3RyaW5nO1xuLy8gICBzdGF0ZTogc3RyaW5nO1xuLy8gICBvdGhlcl9wYXJhbXM/OiB7XG4vLyAgICAgc2lnbl9vdXRfdXJpPzogc3RyaW5nO1xuLy8gICB9O1xuLy8gfVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlblByb3ZpZGVyUmVkaXJlY3RVcmlSZXNwb25zZSB7XG4gIHVyaTogc3RyaW5nO1xuICBzaWdub3V0X3VyaT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaW5kV2l0aFByb3ZpZGVyUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0IHtcbiAgcHJvdmlkZXJfdG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaW5kV2l0aFByb3ZpZGVyUmVxdWVzdCB7XG4gIHByb3ZpZGVyX3Rva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclByb2ZpbGVQcm92aWRlciB7XG4gIGlkPzogc3RyaW5nO1xuICBwcm92aWRlcl91c2VyX2lkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQcm9maWxlIHtcbiAgbmFtZT86IHN0cmluZztcbiAgcGljdHVyZT86IHN0cmluZztcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBlbWFpbF92ZXJpZmllZD86IGJvb2xlYW47XG4gIHBob25lX251bWJlcj86IHN0cmluZztcbiAgcHJvdmlkZXJzPzogW1VzZXJQcm9maWxlUHJvdmlkZXJdO1xuICBnZW5kZXI/OiBzdHJpbmc7XG4gIGJpcnRoZGF0ZT86IHN0cmluZztcbiAgem9uZWluZm8/OiBzdHJpbmc7XG4gIGxvY2FsZT86IHN0cmluZztcbiAgY3JlYXRlZF9mcm9tPzogc3RyaW5nO1xuICBzdWI/OiBzdHJpbmdcbiAgdWlkPzogc3RyaW5nXG4gIGFkZHJlc3M/OiB7XG4gICAgZm9ybWF0dGVkPzogc3RyaW5nLFxuICAgIHN0cmVldF9hZGRyZXNzPzogc3RyaW5nLFxuICAgIGxvY2FsaXR5Pzogc3RyaW5nLFxuICAgIHJlZ2lvbj86IHN0cmluZyxcbiAgICBwb3N0YWxfY29kZT86IHN0cmluZyxcbiAgICBjb3VudHJ5Pzogc3RyaW5nXG4gIH1cbiAgbmlja05hbWU/OiBzdHJpbmcgLy8gVE9ETzpcbiAgcHJvdmluY2U/OiBzdHJpbmcgLy8gVE9ETzpcbiAgY291bnRyeT86IHN0cmluZyAvLyBUT0RPOlxuICBjaXR5Pzogc3RyaW5nIC8vIFRPRE86XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJJbmZvID0gVXNlclByb2ZpbGU7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvdmlkZXJQcm9maWxlIHtcbiAgcHJvdmlkZXJfaWQ6IHN0cmluZztcbiAgcGhvbmVfbnVtYmVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zQnlQcm92aWRlclJlcXVlc3Qge1xuICBwcm92aWRlcl90b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYW50VG9rZW5SZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Qge1xuICBjbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuICBjb2RlPzogc3RyaW5nO1xuICBncmFudF90eXBlPzogc3RyaW5nO1xuICByZWRpcmVjdF91cmk/OiBzdHJpbmc7XG4gIG5vbmNlPzogc3RyaW5nO1xuICByZWZyZXNoX3Rva2VuPzogc3RyaW5nO1xuICBzY29wZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbmJpbmRQcm92aWRlclJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdCB7XG4gIHByb3ZpZGVyX2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tQYXNzd29yZHJSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Qge1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbmRQaG9uZVJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdCB7XG4gIHBob25lX251bWJlcjogc3RyaW5nO1xuICBzdWRvX3Rva2VuOiBzdHJpbmc7XG4gIHZlcmlmaWNhdGlvbl90b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldFBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0IHtcbiAgbmV3X3Bhc3N3b3JkOiBzdHJpbmc7XG4gIHN1ZG9fdG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VCaW5kZWRQcm92aWRlclJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdCB7XG4gIHRyYW5zX3Rva2VuOiBzdHJpbmc7XG4gIHByb3ZpZGVyX2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIENoYW5nZUJpbmRlZFByb3ZpZGVyUmVzcG9uc2UgPSBCYXNlUmVxdWVzdFxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5VXNlclByb2ZpbGVSZXEgZXh0ZW5kcyBCYXNlUmVxdWVzdCB7XG4gIGFwcGVuZGVkX3BhcmFtczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbldpdGhQcm92aWRlclJlcXVlc3Qge1xuICBwcm92aWRlcl90b2tlbjogc3RyaW5nO1xuICBwcm92aWRlcl9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduVXBSZXF1ZXN0IHtcbiAgcGhvbmVfbnVtYmVyPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcblxuICB2ZXJpZmljYXRpb25fY29kZT86IHN0cmluZztcbiAgdmVyaWZpY2F0aW9uX3Rva2VuPzogc3RyaW5nO1xuICBwcm92aWRlcl90b2tlbj86IHN0cmluZztcblxuICBwYXNzd29yZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgZ2VuZGVyPzogc3RyaW5nO1xuICBwaWN0dXJlPzogc3RyaW5nO1xuICBsb2NhbGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0VmVyaWZpY2F0aW9uUmVxdWVzdCB7XG4gIHBob25lX251bWJlcj86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIC8vIOWPr+mAiSBBTlnvvIxVU0VS77yMTk9UX1VTRVIsIENVUl9VU0VSO1xuICB0YXJnZXQ/OiBzdHJpbmcgfCAnQU5ZJztcbiAgdXNhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0VmVyaWZpY2F0aW9uUmVzcG9uc2Uge1xuICB2ZXJpZmljYXRpb25faWQ/OiBzdHJpbmc7XG4gIGlzX3VzZXI/OiBib29sZWFuIHwgZmFsc2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmVyaWZ5UmVzcG9uc2Uge1xuICB2ZXJpZmljYXRpb25fdG9rZW4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmVyaWZ5UmVxdWVzdCB7XG4gIHZlcmlmaWNhdGlvbl9jb2RlOiBzdHJpbmc7XG4gIHZlcmlmaWNhdGlvbl9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm92aWRlckJpbmRSZXF1ZXN0IHtcbiAgcHJvdmlkZXJfdG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmFudFByb3ZpZGVyVG9rZW5SZXF1ZXN0IHtcbiAgcHJvdmlkZXJfaWQ6IHN0cmluZztcbiAgcHJvdmlkZXJfcmVkaXJlY3RfdXJpPzogc3RyaW5nO1xuICBwcm92aWRlcl9jb2RlPzogc3RyaW5nO1xuICBwcm92aWRlcl9hY2Nlc3NfdG9rZW4/OiBzdHJpbmc7XG4gIHByb3ZpZGVyX2lkX3Rva2VuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYW50UHJvdmlkZXJUb2tlblJlc3BvbnNlIHtcbiAgcHJvdmlkZXJfdG9rZW46IHN0cmluZztcbiAgZXhwaXJlc19pbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhdGNoUHJvdmlkZXJUb2tlblJlcXVlc3Qge1xuICBwcm92aWRlcl90b2tlbjogc3RyaW5nO1xuICBwcm92aWRlcl9pZD86IHN0cmluZztcbiAgcHJvdmlkZXJfcGFyYW1zOiB7XG4gICAgZW5jcnlwdGVkRGF0YT86IHN0cmluZztcbiAgICBpdj86IHN0cmluZztcbiAgICBjb2RlPzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhdGNoUHJvdmlkZXJUb2tlblJlc3BvbnNlIHtcbiAgcHJvdmlkZXJfdG9rZW46IHN0cmluZztcbiAgZXhwaXJlc19pbjogbnVtYmVyO1xuICBwcm92aWRlcl9wcm9maWxlOiBQcm92aWRlclByb2ZpbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuUHJvdmlkZXJSZWRpcmVjdFVyaVJlcXVlc3Qge1xuICBwcm92aWRlcl9pZDogc3RyaW5nO1xuICBwcm92aWRlcl9yZWRpcmVjdF91cmk6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcbiAgb3RoZXJfcGFyYW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlblByb3ZpZGVyUmVkaXJlY3RVcmlSZXNwb25zZSB7XG4gIHVyaTogc3RyaW5nO1xuICBzaWdub3V0X3VyaT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaW5kV2l0aFByb3ZpZGVyUmVxdWVzdCB7XG4gIHByb3ZpZGVyX3Rva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmluZFdpdGhQcm92aWRlclJlcXVlc3Qge1xuICBwcm92aWRlcl90b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQcm9maWxlUHJvdmlkZXIge1xuICBpZD86IHN0cmluZztcbiAgcHJvdmlkZXJfdXNlcl9pZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUHJvZmlsZSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHBpY3R1cmU/OiBzdHJpbmc7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgZW1haWxfdmVyaWZpZWQ/OiBib29sZWFuO1xuICBwaG9uZV9udW1iZXI/OiBzdHJpbmc7XG4gIHByb3ZpZGVycz86IFtVc2VyUHJvZmlsZVByb3ZpZGVyXTtcbiAgZ2VuZGVyPzogc3RyaW5nO1xuICBiaXJ0aGRhdGU/OiBzdHJpbmc7XG4gIHpvbmVpbmZvPzogc3RyaW5nO1xuICBsb2NhbGU/OiBzdHJpbmc7XG4gIGNyZWF0ZWRfZnJvbT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm92aWRlclByb2ZpbGUge1xuICBwcm92aWRlcl9pZDogc3RyaW5nO1xuICBwaG9uZV9udW1iZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNCeVByb3ZpZGVyUmVxdWVzdCB7XG4gIHByb3ZpZGVyX3Rva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhbnRUb2tlblJlcXVlc3Qge1xuICBjbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuICBjb2RlPzogc3RyaW5nO1xuICBncmFudF90eXBlPzogc3RyaW5nO1xuICByZWRpcmVjdF91cmk/OiBzdHJpbmc7XG4gIG5vbmNlPzogc3RyaW5nO1xuICByZWZyZXNoX3Rva2VuPzogc3RyaW5nO1xuICBzY29wZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbmJpbmRQcm92aWRlclJlcXVlc3Qge1xuICBwcm92aWRlcl9pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrUGFzc3dvcmRyUmVxdWVzdCB7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmluZFBob25lUmVxdWVzdCB7XG4gIHBob25lX251bWJlcjogc3RyaW5nO1xuICBzdWRvX3Rva2VuOiBzdHJpbmc7XG4gIHZlcmlmaWNhdGlvbl90b2tlbjogc3RyaW5nO1xuICBjb25mbGljdF9yZXNvbHV0aW9uOiBzdHJpbmdcbiAgLy8gMS4gREVGQVVMVCAwLCDpu5jorqTmj5DnpLrnlKjmiLfmiYvmnLrlj7flt7Looqvnu5HlrppcbiAgLy8gMi4gREVMRVRFX0FDQ09VTlRfVFJBTlNGRVIgMSwg5qCH6K6w5Y6f6LSm5Y+35bey6KKr5rOo6ZSA77yM5bm25bCG5omL5py65o2i57uR57uZ6Ieq5bexXG4gIC8vIDMuIFRSQU5TRkVSIDIsIOS7heaNoue7keaJi+acuuWPt++8jOS4jeazqOmUgOWOn+aciei0puWPt++8iOaNoue7keWQjuWOn+i0puWPt+aXoOazleeZu+W9leaXtu+8jOWImeiHquWKqOazqOmUgOWOn+i0puWPt++8iVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbmRFbWFpbFJlcXVlc3Qge1xuICBlbWFpbDogc3RyaW5nO1xuICBzdWRvX3Rva2VuOiBzdHJpbmc7XG4gIHZlcmlmaWNhdGlvbl90b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldFBhc3N3b3JkUmVxdWVzdCB7XG4gIG5ld19wYXNzd29yZDogc3RyaW5nO1xuICBzdWRvX3Rva2VuOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBTZXRQYXNzd29yZFJlcXVlc3Qge1xuICBuZXdfcGFzc3dvcmQ6IHN0cmluZztcbiAgc3Vkb190b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVBhc3N3b3JkUmVxdWVzdCB7XG4gIG9sZF9wYXNzd29yZDogc3RyaW5nO1xuICBuZXdfcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuLy8gcGFzc3dvcmQg5ZKMIHZlcmlmaWNhdGlvbl90b2tlbiDogIzpgInkuIDvvIzlpoLmnpznu5HlrprkuobmiYvmnLrlj7fvvIzliJnlv4Xpobvkvb/nlKh2ZXJpZmljYXRpb25fdG9rZW4g6L+b6KGMc3Vkb1xuZXhwb3J0IGludGVyZmFjZSBTdWRvUmVxdWVzdCB7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICB2ZXJpZmljYXRpb25fdG9rZW4/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdWRvUmVzcG9uc2Uge1xuICBzdWRvX3Rva2VuPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2l0aFN1ZG9SZXF1ZXN0IHtcbiAgc3Vkb190b2tlbjogc3RyaW5nXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VCb3VuZFByb3ZpZGVyUmVxdWVzdCB7XG4gIHRyYW5zX3Rva2VuOiBzdHJpbmc7XG4gIHByb3ZpZGVyX2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlQm91bmRQcm92aWRlclJlc3BvbnNlIHtcbiAgY2xpZW50X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlVc2VyUHJvZmlsZVJlcXVlc3Qge1xuICBpZD86IFtzdHJpbmddO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lX251bWJlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVVzZXJQcm9maWxlUmVzcG9uc2Uge1xuICB0b3RhbDogc3RyaW5nO1xuICBkYXRhOiBTaW1wbGVVc2VyUHJvZmlsZVtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdCB7XG4gIGVtYWlsOiBzdHJpbmdcbiAgcGhvbmVfbnVtYmVyOiBzdHJpbmdcbiAgbmV3X3Bhc3N3b3JkOiBzdHJpbmdcbiAgdmVyaWZpY2F0aW9uX3Rva2VuOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VBdXRob3JpemVSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Qge1xuICBzY29wZT86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUF1dGhvcml6ZVJlc3BvbnNlIHtcbiAgZGV2aWNlX2NvZGU6IHN0cmluZ1xuICB1c2VyX2NvZGU6IHN0cmluZ1xuICBleHBpcmVzX2luOiBudW1iZXJcbiAgaW50ZXJ2YWw6IG51bWJlclxuICB2ZXJpZmljYXRpb25fdXJsOiBzdHJpbmdcbiAgdmVyaWZpY2F0aW9uX3VyaV9jb21wbGV0ZTogc3RyaW5nXG59XG5cbi8vIOeugOWMlueJiOeUqOaIt+S/oeaBr1xuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVVc2VyUHJvZmlsZSB7XG4gIHN1Yjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBpY3R1cmU/OiBzdHJpbmc7XG4gIGdlbmRlcj86IHN0cmluZztcbiAgbG9jYWxlPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgcGhvbmVfbnVtYmVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrVXNlcm5hbWVSZXF1ZXN0IHtcbiAgdXNlcm5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrSWZVc2VyRXhpc3RSZXF1ZXN0IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGVja0lmVXNlckV4aXN0UmVzcG9uc2Uge1xuICBleGlzdDogYm9vbGVhbjtcbn1cbiJdfQ==
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913769, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthClient = void 0;
var AuthClient = (function () {
    function AuthClient() {
    }
    return AuthClient;
}());
exports.AuthClient = AuthClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29hdXRoMmNsaWVudC9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0E7SUFBQTtJQW9CQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJxQixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWRlbnRpYWxzLCBBdXRoQ2xpZW50UmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuL21vZGVscydcblxuLyoqXG4gKiB0aGUgaW50ZXJmYWNlIGZvciB0aGUgT2F1dGgyQ2xpZW50XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdXRoQ2xpZW50IHtcbiAgLyoqXG4gICAqIFByb3ZpZGVzIGFuIGFsdGVybmF0aXZlIGZldGNoIGFwaSByZXF1ZXN0IGltcGxlbWVudGF0aW9uIHdpdGggYXV0aCBjcmVkZW50aWFsc1xuICAgKiBpZiBvcHRpb25zLndpdGhDcmVkZW50aWFsczp0cnVlLCB0aGUgcmVxdWVzdCB3aWxsIGF1dG8gYWRkIEF1dGhvcml6YXRpb246IEJlYXJlciA8QWNjZXNzVG9rZW4+IGluIHRoZSByZXF1ZXN0XG4gICAqIGVycm9yOlxuICAgKiAgICAgLSB1bnJlYWNoYWJsZSwgdGhlIG5ldHdvcmsgZXJyb3Igb3IgcmVzcG9uc2UgaXMgbm90IGpzb25cbiAgICogICAgIC0gdW5hdXRoZW50aWNhdGVkOiBoYXMgbm8gdmFsaWRhdGUgYWNjZXNzIHRva2VuXG4gICAqL1xuICBhYnN0cmFjdCByZXF1ZXN0OiBSZXF1ZXN0RnVuY3Rpb247XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhdXRoIGNyZWRlbnRpYWxzLlxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHM/OiBDcmVkZW50aWFscyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIGdldCB0aGUgY3VycmVudCBhY2Nlc3NUb2tlbiBmcm9tIEF1dGhDbGllbnQsIHlvdSBjYW4gdXNlIHRoaXMgdG8gZGV0ZWN0IGxvZ2luIHN0YXR1c1xuICAgKiBlcnJvcjpcbiAgICogICAgLSAgdW5hdXRoZW50aWNhdGVkOiBoYXMgbm8gdmFsaWRhdGUgYWNjZXNzIHRva2VuXG4gICAqL1xuICBhYnN0cmFjdCBnZXRBY2Nlc3NUb2tlbigpOiBQcm9taXNlPHN0cmluZz47XG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RGdW5jdGlvbiA9IDxUPih1cmw6IHN0cmluZywgb3B0aW9ucz86IEF1dGhDbGllbnRSZXF1ZXN0T3B0aW9ucykgPT4gUHJvbWlzZTxUPjtcblxuLyoqIEFuIGludGVyZmFjZSBvZiB0aGUgU2ltcGxlICBXZWIgU3RvcmFnZSBBUEkgICovXG5leHBvcnQgaW50ZXJmYWNlIFNpbXBsZVN0b3JhZ2Uge1xuICAvKipcbiAgICogdmFsdWUgPSBzdG9yYWdlW2tleV1cbiAgICovXG4gIGdldEl0ZW06IChrZXk6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmcgfCBudWxsPjtcbiAgLyoqXG4gICAqIGRlbGV0ZSBzdG9yYWdlW2tleV1cbiAgICovXG4gIHJlbW92ZUl0ZW06IChrZXk6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIHN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAqL1xuICBzZXRJdGVtOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIHZhbHVlID0gc3RvcmFnZVtrZXldXG4gICAqL1xuICBnZXRJdGVtU3luYzogKGtleTogc3RyaW5nKSA9PiBzdHJpbmcgfCBudWxsO1xuICAvKipcbiAgICogZGVsZXRlIHN0b3JhZ2Vba2V5XVxuICAgKi9cbiAgcmVtb3ZlSXRlbVN5bmM6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbiAgLyoqXG4gICAqIHN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAqL1xuICBzZXRJdGVtU3luYzogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuIl19
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1734234913760);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map