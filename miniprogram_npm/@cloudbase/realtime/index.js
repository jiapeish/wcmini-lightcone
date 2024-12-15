module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1734234913879, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRealtime = void 0;
var websocket_client_1 = require("./websocket-client");
var common_1 = require("./common");
var hook = {
    target: 'database',
    entity: function () {
        var _a = this.platform, adapter = _a.adapter, runtime = _a.runtime;
        common_1.setWsClass(adapter.wsClass);
        common_1.setRuntime(runtime);
    }
};
var component = {
    name: 'realtime',
    IIFE: true,
    entity: function () {
        this.prototype.wsClientClass = websocket_client_1.RealtimeWebSocketClient;
    }
};
try {
    cloudbase.registerComponent(component);
    cloudbase.registerHook(hook);
}
catch (e) { }
function registerRealtime(app) {
    try {
        app.registerComponent(component);
        app.registerHook(hook);
    }
    catch (e) {
        console.warn(e);
    }
}
exports.registerRealtime = registerRealtime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdURBQTZEO0FBQzdELG1DQUFrRDtBQUtsRCxJQUFNLElBQUksR0FBa0I7SUFDMUIsTUFBTSxFQUFFLFVBQVU7SUFDbEIsTUFBTSxFQUFFO1FBQ0EsSUFBQSxLQUFzQixJQUFJLENBQUMsUUFBUSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxPQUFPLGFBQWtCLENBQUM7UUFDMUMsbUJBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0YsQ0FBQTtBQUVELElBQU0sU0FBUyxHQUF1QjtJQUNwQyxJQUFJLEVBQUUsVUFBVTtJQUNoQixJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLDBDQUF1QixDQUFDO0lBQ3pELENBQUM7Q0FDRixDQUFBO0FBRUQsSUFBRztJQUNELFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzlCO0FBQUEsT0FBTSxDQUFDLEVBQUMsR0FBRTtBQUVYLFNBQWdCLGdCQUFnQixDQUFDLEdBQXdEO0lBQ3ZGLElBQUc7UUFDRCxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4QjtJQUFBLE9BQU0sQ0FBQyxFQUFDO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFQRCw0Q0FPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDbG91ZGJhc2UgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzJztcbmltcG9ydCB7IFJlYWx0aW1lV2ViU29ja2V0Q2xpZW50IH0gZnJvbSAnLi93ZWJzb2NrZXQtY2xpZW50JztcbmltcG9ydCB7IHNldFdzQ2xhc3MsIHNldFJ1bnRpbWUgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgeyBJQ2xvdWRiYXNlQ29tcG9uZW50LCBJQ2xvdWRiYXNlSG9vayB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvY29tcG9uZW50JztcblxuZGVjbGFyZSBjb25zdCBjbG91ZGJhc2U6IElDbG91ZGJhc2U7XG5cbmNvbnN0IGhvb2s6SUNsb3VkYmFzZUhvb2sgPSB7XG4gIHRhcmdldDogJ2RhdGFiYXNlJyxcbiAgZW50aXR5OiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHsgYWRhcHRlcixydW50aW1lIH0gPSB0aGlzLnBsYXRmb3JtO1xuICAgIHNldFdzQ2xhc3MoYWRhcHRlci53c0NsYXNzKTtcbiAgICBzZXRSdW50aW1lKHJ1bnRpbWUpO1xuICB9XG59XG5cbmNvbnN0IGNvbXBvbmVudDpJQ2xvdWRiYXNlQ29tcG9uZW50ID0ge1xuICBuYW1lOiAncmVhbHRpbWUnLFxuICBJSUZFOiB0cnVlLFxuICBlbnRpdHk6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5wcm90b3R5cGUud3NDbGllbnRDbGFzcyA9IFJlYWx0aW1lV2ViU29ja2V0Q2xpZW50O1xuICB9XG59XG5cbnRyeXtcbiAgY2xvdWRiYXNlLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIGNsb3VkYmFzZS5yZWdpc3Rlckhvb2soaG9vayk7XG59Y2F0Y2goZSl7fVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJSZWFsdGltZShhcHA6UGljazxJQ2xvdWRiYXNlLCAncmVnaXN0ZXJDb21wb25lbnQnfCdyZWdpc3Rlckhvb2snPil7XG4gIHRyeXtcbiAgICBhcHAucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBhcHAucmVnaXN0ZXJIb29rKGhvb2spO1xuICB9Y2F0Y2goZSl7XG4gICAgY29uc29sZS53YXJuKGUpO1xuICB9XG59Il19
}, function(modId) {var map = {"./websocket-client":1734234913880,"./common":1734234913888}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913880, function(require, module, exports) {

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
exports.RealtimeWebSocketClient = void 0;
var virtual_websocket_client_1 = require("./virtual-websocket-client");
var message_1 = require("./message");
var ws_event_1 = require("./ws-event");
var error_1 = require("./error");
var common_1 = require("./common");
var utils_1 = require("./utils");
var WS_READY_STATE = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
};
var MAX_RTT_OBSERVED = 3;
var DEFAULT_EXPECTED_EVENT_WAIT_TIME = 5000;
var DEFAULT_UNTRUSTED_RTT_THRESHOLD = 10000;
var DEFAULT_MAX_RECONNECT = 5;
var DEFAULT_WS_RECONNECT_INTERVAL = 10000;
var DEFAULT_PING_FAIL_TOLERANCE = 2;
var DEFAULT_PONG_MISS_TOLERANCE = 2;
var DEFAULT_LOGIN_TIMEOUT = 5000;
var RealtimeWebSocketClient = (function () {
    function RealtimeWebSocketClient(options) {
        var _this = this;
        this._virtualWSClient = new Set();
        this._queryIdClientMap = new Map();
        this._watchIdClientMap = new Map();
        this._pingFailed = 0;
        this._pongMissed = 0;
        this._logins = new Map();
        this._wsReadySubsribers = [];
        this._wsResponseWait = new Map();
        this._rttObserved = [];
        this.send = function (opts) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (_resolve, _reject) { return __awaiter(_this, void 0, void 0, function () {
                        var timeoutId, _hasResolved, _hasRejected, resolve, reject, err_1, e_1;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _hasResolved = false;
                                    _hasRejected = false;
                                    resolve = function (value) {
                                        _hasResolved = true;
                                        timeoutId && clearTimeout(timeoutId);
                                        _resolve(value);
                                    };
                                    reject = function (error) {
                                        _hasRejected = true;
                                        timeoutId && clearTimeout(timeoutId);
                                        _reject(error);
                                    };
                                    if (opts.timeout) {
                                        timeoutId = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!(!_hasResolved || !_hasRejected)) return [3, 2];
                                                        return [4, utils_1.sleep(0)];
                                                    case 1:
                                                        _a.sent();
                                                        if (!_hasResolved || !_hasRejected) {
                                                            reject(new error_1.TimeoutError('wsclient.send timedout'));
                                                        }
                                                        _a.label = 2;
                                                    case 2: return [2];
                                                }
                                            });
                                        }); }, opts.timeout);
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 8, , 9]);
                                    if (!this._wsInitPromise) return [3, 3];
                                    return [4, this._wsInitPromise];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    if (!this._ws) {
                                        reject(new Error('invalid state: ws connection not exists, can not send message'));
                                        return [2];
                                    }
                                    if (this._ws.readyState !== WS_READY_STATE.OPEN) {
                                        reject(new Error("ws readyState invalid: " + this._ws.readyState + ", can not send message"));
                                        return [2];
                                    }
                                    if (opts.waitResponse) {
                                        this._wsResponseWait.set(opts.msg.requestId, {
                                            resolve: resolve,
                                            reject: reject,
                                            skipOnMessage: opts.skipOnMessage
                                        });
                                    }
                                    _a.label = 4;
                                case 4:
                                    _a.trys.push([4, 6, , 7]);
                                    return [4, this._ws.send(JSON.stringify(opts.msg))];
                                case 5:
                                    _a.sent();
                                    if (!opts.waitResponse) {
                                        resolve();
                                    }
                                    return [3, 7];
                                case 6:
                                    err_1 = _a.sent();
                                    if (err_1) {
                                        reject(err_1);
                                        if (opts.waitResponse) {
                                            this._wsResponseWait.delete(opts.msg.requestId);
                                        }
                                    }
                                    return [3, 7];
                                case 7: return [3, 9];
                                case 8:
                                    e_1 = _a.sent();
                                    reject(e_1);
                                    return [3, 9];
                                case 9: return [2];
                            }
                        });
                    }); })];
            });
        }); };
        this.closeAllClients = function (error) {
            _this._virtualWSClient.forEach(function (client) {
                client.closeWithError(error);
            });
        };
        this.pauseClients = function (clients) {
            ;
            (clients || _this._virtualWSClient).forEach(function (client) {
                client.pause();
            });
        };
        this.resumeClients = function (clients) {
            ;
            (clients || _this._virtualWSClient).forEach(function (client) {
                client.resume();
            });
        };
        this.initWebSocketConnection = function (reconnect, availableRetries) {
            if (availableRetries === void 0) { availableRetries = _this._maxReconnect; }
            return __awaiter(_this, void 0, void 0, function () {
                var e_2;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (reconnect && this._reconnectState) {
                                return [2];
                            }
                            if (reconnect) {
                                this._reconnectState = true;
                            }
                            if (this._wsInitPromise) {
                                return [2, this._wsInitPromise];
                            }
                            if (reconnect) {
                                this.pauseClients();
                            }
                            this.close(ws_event_1.CLOSE_EVENT_CODE.ReconnectWebSocket);
                            this._wsInitPromise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                var wsSign_1, e_3, isConnected;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 6, , 11]);
                                            return [4, this.getWsSign()];
                                        case 1:
                                            wsSign_1 = _a.sent();
                                            return [4, new Promise(function (success) {
                                                    var url = wsSign_1.wsUrl || 'wss://tcb-ws.tencentcloudapi.com';
                                                    var wsClass = common_1.getWsClass();
                                                    _this._ws = wsClass ? new wsClass(url) : new WebSocket(url);
                                                    success();
                                                })];
                                        case 2:
                                            _a.sent();
                                            if (!this._ws.connect) return [3, 4];
                                            return [4, this._ws.connect()];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4: return [4, this.initWebSocketEvent()];
                                        case 5:
                                            _a.sent();
                                            resolve();
                                            if (reconnect) {
                                                this.resumeClients();
                                                this._reconnectState = false;
                                            }
                                            return [3, 11];
                                        case 6:
                                            e_3 = _a.sent();
                                            console.error('[realtime] initWebSocketConnection connect fail', e_3);
                                            if (!(availableRetries > 0)) return [3, 9];
                                            isConnected = true;
                                            this._wsInitPromise = undefined;
                                            if (!isConnected) return [3, 8];
                                            return [4, utils_1.sleep(this._reconnectInterval)];
                                        case 7:
                                            _a.sent();
                                            if (reconnect) {
                                                this._reconnectState = false;
                                            }
                                            _a.label = 8;
                                        case 8:
                                            resolve(this.initWebSocketConnection(reconnect, availableRetries - 1));
                                            return [3, 10];
                                        case 9:
                                            reject(e_3);
                                            if (reconnect) {
                                                this.closeAllClients(new error_1.CloudSDKError({
                                                    errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL,
                                                    errMsg: e_3
                                                }));
                                            }
                                            _a.label = 10;
                                        case 10: return [3, 11];
                                        case 11: return [2];
                                    }
                                });
                            }); });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, 4, 5]);
                            return [4, this._wsInitPromise];
                        case 2:
                            _a.sent();
                            this._wsReadySubsribers.forEach(function (_a) {
                                var resolve = _a.resolve;
                                return resolve();
                            });
                            return [3, 5];
                        case 3:
                            e_2 = _a.sent();
                            this._wsReadySubsribers.forEach(function (_a) {
                                var reject = _a.reject;
                                return reject();
                            });
                            return [3, 5];
                        case 4:
                            this._wsInitPromise = undefined;
                            this._wsReadySubsribers = [];
                            return [7];
                        case 5: return [2];
                    }
                });
            });
        };
        this.initWebSocketEvent = function () {
            return new Promise(function (resolve, reject) {
                if (!_this._ws) {
                    throw new Error('can not initWebSocketEvent, ws not exists');
                }
                var wsOpened = false;
                _this._ws.onopen = function (event) {
                    console.warn('[realtime] ws event: open', event);
                    wsOpened = true;
                    resolve();
                };
                _this._ws.onerror = function (event) {
                    _this._logins = new Map();
                    if (!wsOpened) {
                        console.error('[realtime] ws open failed with ws event: error', event);
                        reject(event);
                    }
                    else {
                        console.error('[realtime] ws event: error', event);
                        _this.clearHeartbeat();
                        _this._virtualWSClient.forEach(function (client) {
                            return client.closeWithError(new error_1.CloudSDKError({
                                errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR,
                                errMsg: event
                            }));
                        });
                    }
                };
                _this._ws.onclose = function (closeEvent) {
                    console.warn('[realtime] ws event: close', closeEvent);
                    _this._logins = new Map();
                    _this.clearHeartbeat();
                    switch (closeEvent.code) {
                        case ws_event_1.CLOSE_EVENT_CODE.ReconnectWebSocket: {
                            break;
                        }
                        case ws_event_1.CLOSE_EVENT_CODE.NoRealtimeListeners: {
                            break;
                        }
                        case ws_event_1.CLOSE_EVENT_CODE.HeartbeatPingError:
                        case ws_event_1.CLOSE_EVENT_CODE.HeartbeatPongTimeoutError:
                        case ws_event_1.CLOSE_EVENT_CODE.NormalClosure:
                        case ws_event_1.CLOSE_EVENT_CODE.AbnormalClosure: {
                            if (_this._maxReconnect > 0) {
                                _this.initWebSocketConnection(true, _this._maxReconnect);
                            }
                            else {
                                _this.closeAllClients(ws_event_1.getWSCloseError(closeEvent.code));
                            }
                            break;
                        }
                        case ws_event_1.CLOSE_EVENT_CODE.NoAuthentication: {
                            _this.closeAllClients(ws_event_1.getWSCloseError(closeEvent.code, closeEvent.reason));
                            break;
                        }
                        default: {
                            if (_this._maxReconnect > 0) {
                                _this.initWebSocketConnection(true, _this._maxReconnect);
                            }
                            else {
                                _this.closeAllClients(ws_event_1.getWSCloseError(closeEvent.code));
                            }
                        }
                    }
                };
                _this._ws.onmessage = function (res) {
                    var rawMsg = res.data;
                    _this.heartbeat();
                    var msg;
                    try {
                        msg = JSON.parse(rawMsg);
                    }
                    catch (e) {
                        throw new Error("[realtime] onMessage parse res.data error: " + e);
                    }
                    if (msg.msgType === 'ERROR') {
                        var virtualWatch_1 = null;
                        _this._virtualWSClient.forEach(function (item) {
                            if (item.watchId === msg.watchId) {
                                virtualWatch_1 = item;
                            }
                        });
                        if (virtualWatch_1) {
                            virtualWatch_1.listener.onError(msg);
                        }
                    }
                    var responseWaitSpec = _this._wsResponseWait.get(msg.requestId);
                    if (responseWaitSpec) {
                        try {
                            if (msg.msgType === 'ERROR') {
                                responseWaitSpec.reject(new error_1.RealtimeErrorMessageError(msg));
                            }
                            else {
                                responseWaitSpec.resolve(msg);
                            }
                        }
                        catch (e) {
                            console.error('ws onMessage responseWaitSpec.resolve(msg) errored:', e);
                        }
                        finally {
                            _this._wsResponseWait.delete(msg.requestId);
                        }
                        if (responseWaitSpec.skipOnMessage) {
                            return;
                        }
                    }
                    if (msg.msgType === 'PONG') {
                        if (_this._lastPingSendTS) {
                            var rtt = Date.now() - _this._lastPingSendTS;
                            if (rtt > DEFAULT_UNTRUSTED_RTT_THRESHOLD) {
                                console.warn("[realtime] untrusted rtt observed: " + rtt);
                                return;
                            }
                            if (_this._rttObserved.length >= MAX_RTT_OBSERVED) {
                                _this._rttObserved.splice(0, _this._rttObserved.length - MAX_RTT_OBSERVED + 1);
                            }
                            _this._rttObserved.push(rtt);
                        }
                        return;
                    }
                    var client = msg.watchId && _this._watchIdClientMap.get(msg.watchId);
                    if (client) {
                        client.onMessage(msg);
                    }
                    else {
                        console.error("[realtime] no realtime listener found responsible for watchId " + msg.watchId + ": ", msg);
                        switch (msg.msgType) {
                            case 'INIT_EVENT':
                            case 'NEXT_EVENT':
                            case 'CHECK_EVENT': {
                                client = _this._queryIdClientMap.get(msg.msgData.queryID);
                                if (client) {
                                    client.onMessage(msg);
                                }
                                break;
                            }
                            default: {
                                for (var _i = 0, _a = Array.from(_this._watchIdClientMap.entries()); _i < _a.length; _i++) {
                                    var _b = _a[_i], client_1 = _b[1];
                                    client_1.onMessage(msg);
                                    break;
                                }
                            }
                        }
                    }
                };
                _this.heartbeat();
            });
        };
        this.isWSConnected = function () {
            return Boolean(_this._ws && _this._ws.readyState === WS_READY_STATE.OPEN);
        };
        this.onceWSConnected = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.isWSConnected()) {
                    return [2];
                }
                if (this._wsInitPromise) {
                    return [2, this._wsInitPromise];
                }
                return [2, new Promise(function (resolve, reject) {
                        _this._wsReadySubsribers.push({
                            resolve: resolve,
                            reject: reject
                        });
                    })];
            });
        }); };
        this.webLogin = function (envId, refresh) { return __awaiter(_this, void 0, void 0, function () {
            var loginInfo_1, emptyEnvLoginInfo, promise, loginInfo, loginStartTS, loginResult, curLoginInfo, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!refresh) {
                            if (envId) {
                                loginInfo_1 = this._logins.get(envId);
                                if (loginInfo_1) {
                                    if (loginInfo_1.loggedIn && loginInfo_1.loginResult) {
                                        return [2, loginInfo_1.loginResult];
                                    }
                                    else if (loginInfo_1.loggingInPromise) {
                                        return [2, loginInfo_1.loggingInPromise];
                                    }
                                }
                            }
                            else {
                                emptyEnvLoginInfo = this._logins.get('');
                                if (emptyEnvLoginInfo === null || emptyEnvLoginInfo === void 0 ? void 0 : emptyEnvLoginInfo.loggingInPromise) {
                                    return [2, emptyEnvLoginInfo.loggingInPromise];
                                }
                            }
                        }
                        promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var wsSign, msgData, loginMsg, loginResMsg, e_5;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 3, , 4]);
                                        return [4, this.getWsSign()];
                                    case 1:
                                        wsSign = _a.sent();
                                        msgData = {
                                            envId: wsSign.envId || '',
                                            accessToken: '',
                                            referrer: 'web',
                                            sdkVersion: '',
                                            dataVersion: ''
                                        };
                                        loginMsg = {
                                            watchId: undefined,
                                            requestId: message_1.genRequestId(),
                                            msgType: 'LOGIN',
                                            msgData: msgData,
                                            exMsgData: {
                                                runtime: common_1.getRuntime(),
                                                signStr: wsSign.signStr,
                                                secretVersion: wsSign.secretVersion
                                            }
                                        };
                                        return [4, this.send({
                                                msg: loginMsg,
                                                waitResponse: true,
                                                skipOnMessage: true,
                                                timeout: DEFAULT_LOGIN_TIMEOUT
                                            })];
                                    case 2:
                                        loginResMsg = _a.sent();
                                        if (!loginResMsg.msgData.code) {
                                            resolve({
                                                envId: wsSign.envId
                                            });
                                        }
                                        else {
                                            reject(new Error(loginResMsg.msgData.code + " " + loginResMsg.msgData.message));
                                        }
                                        return [3, 4];
                                    case 3:
                                        e_5 = _a.sent();
                                        reject(e_5);
                                        return [3, 4];
                                    case 4: return [2];
                                }
                            });
                        }); });
                        loginInfo = envId && this._logins.get(envId);
                        loginStartTS = Date.now();
                        if (loginInfo) {
                            loginInfo.loggedIn = false;
                            loginInfo.loggingInPromise = promise;
                            loginInfo.loginStartTS = loginStartTS;
                        }
                        else {
                            loginInfo = {
                                loggedIn: false,
                                loggingInPromise: promise,
                                loginStartTS: loginStartTS
                            };
                            this._logins.set(envId || '', loginInfo);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, promise];
                    case 2:
                        loginResult = _a.sent();
                        curLoginInfo = envId && this._logins.get(envId);
                        if (curLoginInfo &&
                            curLoginInfo === loginInfo &&
                            curLoginInfo.loginStartTS === loginStartTS) {
                            loginInfo.loggedIn = true;
                            loginInfo.loggingInPromise = undefined;
                            loginInfo.loginStartTS = undefined;
                            loginInfo.loginResult = loginResult;
                            return [2, loginResult];
                        }
                        else if (curLoginInfo) {
                            if (curLoginInfo.loggedIn && curLoginInfo.loginResult) {
                                return [2, curLoginInfo.loginResult];
                            }
                            else if (curLoginInfo.loggingInPromise) {
                                return [2, curLoginInfo.loggingInPromise];
                            }
                            else {
                                throw new Error('ws unexpected login info');
                            }
                        }
                        else {
                            throw new Error('ws login info reset');
                        }
                        return [3, 4];
                    case 3:
                        e_4 = _a.sent();
                        loginInfo.loggedIn = false;
                        loginInfo.loggingInPromise = undefined;
                        loginInfo.loginStartTS = undefined;
                        loginInfo.loginResult = undefined;
                        throw e_4;
                    case 4: return [2];
                }
            });
        }); };
        this.getWsSign = function () { return __awaiter(_this, void 0, void 0, function () {
            var expiredTs, res, _a, signStr, wsUrl, secretVersion, envId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._wsSign && this._wsSign.expiredTs > Date.now()) {
                            return [2, this._wsSign];
                        }
                        expiredTs = Date.now() + 60000;
                        return [4, this._context.appConfig.request.send('auth.wsWebSign', { runtime: common_1.getRuntime() })];
                    case 1:
                        res = _b.sent();
                        if (res.code) {
                            throw new Error("[tcb-js-sdk] \u83B7\u53D6\u5B9E\u65F6\u6570\u636E\u63A8\u9001\u767B\u5F55\u7968\u636E\u5931\u8D25: " + res.code);
                        }
                        if (res.data) {
                            _a = res.data, signStr = _a.signStr, wsUrl = _a.wsUrl, secretVersion = _a.secretVersion, envId = _a.envId;
                            return [2, {
                                    signStr: signStr,
                                    wsUrl: wsUrl,
                                    secretVersion: secretVersion,
                                    envId: envId,
                                    expiredTs: expiredTs
                                }];
                        }
                        else {
                            throw new Error('[tcb-js-sdk] 获取实时数据推送登录票据失败');
                        }
                        return [2];
                }
            });
        }); };
        this.getWaitExpectedTimeoutLength = function () {
            if (!_this._rttObserved.length) {
                return DEFAULT_EXPECTED_EVENT_WAIT_TIME;
            }
            return ((_this._rttObserved.reduce(function (acc, cur) { return acc + cur; }) /
                _this._rttObserved.length) *
                1.5);
        };
        this.ping = function () { return __awaiter(_this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = {
                            watchId: undefined,
                            requestId: message_1.genRequestId(),
                            msgType: 'PING',
                            msgData: null
                        };
                        return [4, this.send({
                                msg: msg
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); };
        this.onWatchStart = function (client, queryID) {
            _this._queryIdClientMap.set(queryID, client);
        };
        this.onWatchClose = function (client, queryID) {
            if (queryID) {
                _this._queryIdClientMap.delete(queryID);
            }
            _this._watchIdClientMap.delete(client.watchId);
            _this._virtualWSClient.delete(client);
            if (!_this._virtualWSClient.size) {
                _this.close(ws_event_1.CLOSE_EVENT_CODE.NoRealtimeListeners);
            }
        };
        this._maxReconnect = options.maxReconnect || DEFAULT_MAX_RECONNECT;
        this._reconnectInterval =
            options.reconnectInterval || DEFAULT_WS_RECONNECT_INTERVAL;
        this._context = options.context;
    }
    RealtimeWebSocketClient.prototype.clearHeartbeat = function () {
        this._pingTimeoutId && clearTimeout(this._pingTimeoutId);
        this._pongTimeoutId && clearTimeout(this._pongTimeoutId);
    };
    RealtimeWebSocketClient.prototype.close = function (code) {
        this.clearHeartbeat();
        if (this._ws) {
            this._ws.close(code, ws_event_1.CLOSE_EVENT_CODE_INFO[code].name);
            this._ws = undefined;
        }
    };
    RealtimeWebSocketClient.prototype.watch = function (options) {
        if (!this._ws && !this._wsInitPromise) {
            this.initWebSocketConnection(false);
        }
        var virtualClient = new virtual_websocket_client_1.VirtualWebSocketClient(__assign(__assign({}, options), { send: this.send, login: this.webLogin, isWSConnected: this.isWSConnected, onceWSConnected: this.onceWSConnected, getWaitExpectedTimeoutLength: this.getWaitExpectedTimeoutLength, onWatchStart: this.onWatchStart, onWatchClose: this.onWatchClose, debug: true }));
        this._virtualWSClient.add(virtualClient);
        this._watchIdClientMap.set(virtualClient.watchId, virtualClient);
        return virtualClient.listener;
    };
    RealtimeWebSocketClient.prototype.heartbeat = function (immediate) {
        var _this = this;
        this.clearHeartbeat();
        this._pingTimeoutId = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var e_6;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!this._ws || this._ws.readyState !== WS_READY_STATE.OPEN) {
                            return [2];
                        }
                        this._lastPingSendTS = Date.now();
                        return [4, this.ping()];
                    case 1:
                        _a.sent();
                        this._pingFailed = 0;
                        this._pongTimeoutId = setTimeout(function () {
                            console.error('pong timed out');
                            if (_this._pongMissed < DEFAULT_PONG_MISS_TOLERANCE) {
                                _this._pongMissed++;
                                _this.heartbeat(true);
                            }
                            else {
                                _this.initWebSocketConnection(true);
                            }
                        }, this._context.appConfig.realtimePongWaitTimeout);
                        return [3, 3];
                    case 2:
                        e_6 = _a.sent();
                        if (this._pingFailed < DEFAULT_PING_FAIL_TOLERANCE) {
                            this._pingFailed++;
                            this.heartbeat();
                        }
                        else {
                            this.close(ws_event_1.CLOSE_EVENT_CODE.HeartbeatPingError);
                        }
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); }, immediate ? 0 : this._context.appConfig.realtimePingInterval);
    };
    return RealtimeWebSocketClient;
}());
exports.RealtimeWebSocketClient = RealtimeWebSocketClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LWNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJzb2NrZXQtY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQW1FO0FBQ25FLHFDQUF3QztBQWN4Qyx1Q0FJbUI7QUFFbkIsaUNBQXlGO0FBQ3pGLG1DQUFpRDtBQUNqRCxpQ0FBK0I7QUE0RC9CLElBQU0sY0FBYyxHQUFHO0lBQ3JCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsSUFBSSxFQUFFLENBQUM7SUFDUCxPQUFPLEVBQUUsQ0FBQztJQUNWLE1BQU0sRUFBRSxDQUFDO0NBQ1YsQ0FBQTtBQUVELElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFBO0FBQzFCLElBQU0sZ0NBQWdDLEdBQUcsSUFBSSxDQUFBO0FBQzdDLElBQU0sK0JBQStCLEdBQUcsS0FBSyxDQUFBO0FBQzdDLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFBO0FBQy9CLElBQU0sNkJBQTZCLEdBQUcsS0FBSyxDQUFBO0FBRTNDLElBQU0sMkJBQTJCLEdBQUcsQ0FBQyxDQUFBO0FBQ3JDLElBQU0sMkJBQTJCLEdBQUcsQ0FBQyxDQUFBO0FBQ3JDLElBQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFBO0FBRWxDO0lBK0JFLGlDQUFZLE9BQW1EO1FBQS9ELGlCQU1DO1FBcENPLHFCQUFnQixHQUFnQyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBRXpELHNCQUFpQixHQUF3QyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2xFLHNCQUFpQixHQUF3QyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBUWxFLGdCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsZ0JBQVcsR0FBRyxDQUFDLENBQUE7UUFHZixZQUFPLEdBQXdDLElBQUksR0FBRyxFQUFFLENBQUE7UUFJeEQsdUJBQWtCLEdBQXFCLEVBQUUsQ0FBQTtR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RTtnQ0FDbEQsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO2dDQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBOzZCQUNyQjtpQ0FBTTtnQ0FFTCxLQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUE7NkJBQ25DO3dCQUNILENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBOzs7O3dCQUVuRCxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLEVBQUU7NEJBQ2xELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTs0QkFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO3lCQUNqQjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLDJCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUE7eUJBQ2hEOzs7OzthQUVKLEVBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUM3RCxDQUFBO0lBQ0gsQ0FBQztJQStCSCw4QkFBQztBQUFELENBQUMsQUEzM0JELElBMjNCQztBQTMzQlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlydHVhbFdlYlNvY2tldENsaWVudCB9IGZyb20gJy4vdmlydHVhbC13ZWJzb2NrZXQtY2xpZW50J1xuaW1wb3J0IHsgZ2VuUmVxdWVzdElkIH0gZnJvbSAnLi9tZXNzYWdlJ1xuaW1wb3J0IHtcbiAgSURhdGFiYXNlU2VydmljZUNvbnRleHQsXG59IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvZGF0YWJhc2UnXG5pbXBvcnQge1xuICBJV2F0Y2hPcHRpb25zLFxuICBEQlJlYWx0aW1lTGlzdGVuZXIsXG4gIElSZXF1ZXN0TWVzc2FnZSxcbiAgSVJlc3BvbnNlTWVzc2FnZSxcbiAgSVJlcXVlc3RNZXNzYWdlUGluZ01zZyxcbiAgSVJlcXVlc3RNZXNzYWdlTG9naW5Nc2csXG4gIElSZXNwb25zZU1lc3NhZ2VMb2dpblJlc01zZyxcbiAgSVJlcXVlc3RNZXNzYWdlTG9naW5EYXRhXG59IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvcmVhbHRpbWUnXG5pbXBvcnQge1xuICBDTE9TRV9FVkVOVF9DT0RFLFxuICBDTE9TRV9FVkVOVF9DT0RFX0lORk8sXG4gIGdldFdTQ2xvc2VFcnJvclxufSBmcm9tICcuL3dzLWV2ZW50J1xuXG5pbXBvcnQgeyBFUlJfQ09ERSwgVGltZW91dEVycm9yLCBSZWFsdGltZUVycm9yTWVzc2FnZUVycm9yLENsb3VkU0RLRXJyb3IgfSBmcm9tICcuL2Vycm9yJ1xuaW1wb3J0IHsgZ2V0V3NDbGFzcywgZ2V0UnVudGltZSB9IGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZWFsdGltZVdlYlNvY2tldENsaWVudENvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIG1heFJlY29ubmVjdD86IG51bWJlclxuICByZWNvbm5lY3RJbnRlcnZhbD86IG51bWJlclxuICBjb250ZXh0OiBJRGF0YWJhc2VTZXJ2aWNlQ29udGV4dFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTaWduYXR1cmUge1xuICBlbnZJZDogc3RyaW5nXG4gIHNlY3JldFZlcnNpb246IG51bWJlclxuICBzaWduU3RyOiBzdHJpbmdcbiAgd3NVcmw6IHN0cmluZ1xuICBleHBpcmVUUzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2luSW5mbyB7XG4gIGxvZ2dlZEluOiBib29sZWFuXG4gIGxvZ2dpbmdJblByb21pc2U/OiBQcm9taXNlPElMb2dpblJlc3VsdD5cbiAgbG9naW5TdGFydFRTPzogbnVtYmVyXG4gIGxvZ2luUmVzdWx0PzogSUxvZ2luUmVzdWx0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2luUmVzdWx0IHtcbiAgZW52SWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElXU1NlbmRPcHRpb25zIHtcbiAgbXNnOiBJUmVxdWVzdE1lc3NhZ2VcbiAgd2FpdFJlc3BvbnNlPzogYm9vbGVhblxuICAvLyB3aGVuIHdhaXRSZXNwb25zZSBpcyBzZXQgdG8gdHJ1ZSwgaWYgc2tpcE9uTWVzc2FnZSBpcyB0cnVlLCBnZW5lcmFsIG9uTWVzc2FnZSBoYW5kbGVyIHdpbGwgYmUgc2tpcHBlZFxuICBza2lwT25NZXNzYWdlPzogYm9vbGVhblxuICB0aW1lb3V0PzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdTV2F0Y2hPcHRpb25zIGV4dGVuZHMgSVdhdGNoT3B0aW9ucyB7XG4gIGVudklkPzogc3RyaW5nXG4gIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmdcbiAgcXVlcnk6IHN0cmluZ1xuICBsaW1pdD86IG51bWJlclxuICBvcmRlckJ5PzogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5pbnRlcmZhY2UgSVJlc29sdmVSZWplY3Qge1xuICByZXNvbHZlOiAodmFsdWU/OiBhbnkgfCBQcm9taXNlTGlrZTxhbnk+IHwgdW5kZWZpbmVkKSA9PiB2b2lkXG4gIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVJlc3BvbnNlV2FpdFNwZWMgZXh0ZW5kcyBJUmVzb2x2ZVJlamVjdCB7XG4gIHNraXBPbk1lc3NhZ2U/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJV3NTaWduIHtcbiAgc2lnblN0cjogc3RyaW5nLFxuICB3c1VybDogc3RyaW5nLFxuICBzZWNyZXRWZXJzaW9uOiBzdHJpbmdcbiAgZW52SWQ6IHN0cmluZ1xuICBleHBpcmVkVHM6IG51bWJlclxufVxuXG5jb25zdCBXU19SRUFEWV9TVEFURSA9IHtcbiAgQ09OTkVDVElORzogMCxcbiAgT1BFTjogMSxcbiAgQ0xPU0lORzogMixcbiAgQ0xPU0VEOiAzXG59XG5cbmNvbnN0IE1BWF9SVFRfT0JTRVJWRUQgPSAzXG5jb25zdCBERUZBVUxUX0VYUEVDVEVEX0VWRU5UX1dBSVRfVElNRSA9IDUwMDBcbmNvbnN0IERFRkFVTFRfVU5UUlVTVEVEX1JUVF9USFJFU0hPTEQgPSAxMDAwMFxuY29uc3QgREVGQVVMVF9NQVhfUkVDT05ORUNUID0gNVxuY29uc3QgREVGQVVMVF9XU19SRUNPTk5FQ1RfSU5URVJWQUwgPSAxMDAwMFxuLy8gY29uc3QgREVGQVVMVF9XU19SRUNPTk5FQ1RfTUFYX1ZBTElEX0lOVEVSVkFMID0gMyAqIDYwICogMTAwMFxuY29uc3QgREVGQVVMVF9QSU5HX0ZBSUxfVE9MRVJBTkNFID0gMlxuY29uc3QgREVGQVVMVF9QT05HX01JU1NfVE9MRVJBTkNFID0gMlxuY29uc3QgREVGQVVMVF9MT0dJTl9USU1FT1VUID0gNTAwMFxuXG5leHBvcnQgY2xhc3MgUmVhbHRpbWVXZWJTb2NrZXRDbGllbnQge1xuICBwcml2YXRlIF92aXJ0dWFsV1NDbGllbnQ6IFNldDxWaXJ0dWFsV2ViU29ja2V0Q2xpZW50PiA9IG5ldyBTZXQoKVxuICAvLyBhZnRlciBsaXN0ZW5lciBpbml0V2F0Y2gsIHRoZSBsaXN0ZW5lciBoYXMgdGhlIHF1ZXJ5SUQgYW5kIGNhbiBzdG9yZSBpdCBoZXJlXG4gIHByaXZhdGUgX3F1ZXJ5SWRDbGllbnRNYXA6IE1hcDxzdHJpbmcsIFZpcnR1YWxXZWJTb2NrZXRDbGllbnQ+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgX3dhdGNoSWRDbGllbnRNYXA6IE1hcDxzdHJpbmcsIFZpcnR1YWxXZWJTb2NrZXRDbGllbnQ+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgX21heFJlY29ubmVjdDogbnVtYmVyXG4gIC8vIHByaXZhdGUgX2F2YWlsYWJsZVJldHJpZXM6IG51bWJlclxuICBwcml2YXRlIF9yZWNvbm5lY3RJbnRlcnZhbDogbnVtYmVyXG4gIHByaXZhdGUgX2NvbnRleHQ6IElEYXRhYmFzZVNlcnZpY2VDb250ZXh0XG4gIC8vIHByaXZhdGUgX3dzPzogV1hOUy5Tb2NrZXQuSVNvY2tldFRhc2tcbiAgcHJpdmF0ZSBfd3M/OiBhbnlcbiAgcHJpdmF0ZSBfbGFzdFBpbmdTZW5kVFM/OiBudW1iZXJcbiAgcHJpdmF0ZSBfcGluZ0ZhaWxlZCA9IDBcbiAgcHJpdmF0ZSBfcG9uZ01pc3NlZCA9IDBcbiAgcHJpdmF0ZSBfcGluZ1RpbWVvdXRJZD86IG51bWJlclxuICBwcml2YXRlIF9wb25nVGltZW91dElkPzogbnVtYmVyXG4gIHByaXZhdGUgX2xvZ2luczogTWFwPHN0cmluZyAvKiBlbnZJZCAqLywgSUxvZ2luSW5mbz4gPSBuZXcgTWFwKClcbiAgLy8gcHJpdmF0ZSBfbG9naW5JbmZvOiBJTG9naW5JbmZvXG4gIC8vIHByaXZhdGUgX3NpZ25hdHVyZXM6IE1hcDxzdHJpbmcgLyogZW52SWQgKi8sIElTaWduYXR1cmU+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgX3dzSW5pdFByb21pc2U/OiBQcm9taXNlPHZvaWQ+XG4gIHByaXZhdGUgX3dzUmVhZHlTdWJzcmliZXJzOiBJUmVzb2x2ZVJlamVjdFtdID0gW11cbiAgcHJpdmF0ZSBfd3NSZXNwb25zZVdhaXQ6IE1hcDxcbiAgICBzdHJpbmcgLyogcmVxdWVzdElkICovLFxuICAgIElSZXNwb25zZVdhaXRTcGVjXG4gID4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSBfcnR0T2JzZXJ2ZWQ6IG51bWJlcltdID0gW11cbiAgcHJpdmF0ZSBfcmVjb25uZWN0U3RhdGU6IGJvb2xlYW5cbiAgLy8gb2J0YWluZWQgZnJvbSB0aGUgZmlyc3QgZ2V0U2lnbmF0dXJlIHdpdGggbm8gZW52SWQgcHJvdmlkZWRcbiAgLy8gcHJpdmF0ZSBfZGVmYXVsdEVudklkPzogc3RyaW5nXG4gIHByaXZhdGUgX3dzU2lnbjogSVdzU2lnblxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElSZWFsdGltZVdlYlNvY2tldENsaWVudENvbnN0cnVjdG9yT3B0aW9ucykge1xuICAgIHRoaXMuX21heFJlY29ubmVjdCA9IG9wdGlvbnMubWF4UmVjb25uZWN0IHx8IERFRkFVTFRfTUFYX1JFQ09OTkVDVFxuICAgIC8vIHRoaXMuX2F2YWlsYWJsZVJldHJpZXMgPSB0aGlzLl9tYXhSZWNvbm5lY3RcbiAgICB0aGlzLl9yZWNvbm5lY3RJbnRlcnZhbCA9XG4gICAgICBvcHRpb25zLnJlY29ubmVjdEludGVydmFsIHx8IERFRkFVTFRfV1NfUkVDT05ORUNUX0lOVEVSVkFMXG4gICAgdGhpcy5fY29udGV4dCA9IG9wdGlvbnMuY29udGV4dFxuICB9XG5cbiAgY2xlYXJIZWFydGJlYXQoKSB7XG4gICAgdGhpcy5fcGluZ1RpbWVvdXRJZCAmJiBjbGVhclRpbWVvdXQodGhpcy5fcGluZ1RpbWVvdXRJZClcbiAgICB0aGlzLl9wb25nVGltZW91dElkICYmIGNsZWFyVGltZW91dCh0aGlzLl9wb25nVGltZW91dElkKVxuICB9XG5cbiAgc2VuZCA9IGFzeW5jIDxUID0gYW55PihvcHRzOiBJV1NTZW5kT3B0aW9ucyk6IFByb21pc2U8VD4gPT5cbiAgICBuZXcgUHJvbWlzZTxUPihhc3luYyAoX3Jlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIGxldCB0aW1lb3V0SWQ6IG51bWJlclxuICAgICAgbGV0IF9oYXNSZXNvbHZlZCA9IGZhbHNlXG4gICAgICBsZXQgX2hhc1JlamVjdGVkID0gZmFsc2VcblxuICAgICAgY29uc3QgcmVzb2x2ZTogdHlwZW9mIF9yZXNvbHZlID0gKFxuICAgICAgICB2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPiB8IHVuZGVmaW5lZFxuICAgICAgKSA9PiB7XG4gICAgICAgIF9oYXNSZXNvbHZlZCA9IHRydWVcbiAgICAgICAgdGltZW91dElkICYmIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG4gICAgICAgIF9yZXNvbHZlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWplY3Q6IHR5cGVvZiBfcmVqZWN0ID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgX2hhc1JlamVjdGVkID0gdHJ1ZVxuICAgICAgICB0aW1lb3V0SWQgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcbiAgICAgICAgX3JlamVjdChlcnJvcilcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMudGltZW91dCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmICghX2hhc1Jlc29sdmVkIHx8ICFfaGFzUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIHdhaXQgYW5vdGhlciBpbW1lZGlhdGUgdGltZW91dCB0byBhbGxvdyB0aGUgc3VjY2Vzcy9mYWlsIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgaWYgd3MgaGFzIGFscmVhZHkgZ290IHRoZSByZXN1bHQsXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGJlY2F1c2UgdGhlIHRpbWVyIGlzIHJlZ2lzdGVyZWQgYmVmb3JlIHdzLnNlbmRcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDApXG4gICAgICAgICAgICBpZiAoIV9oYXNSZXNvbHZlZCB8fCAhX2hhc1JlamVjdGVkKSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgVGltZW91dEVycm9yKCd3c2NsaWVudC5zZW5kIHRpbWVkb3V0JykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBvcHRzLnRpbWVvdXQpXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGlmICh0aGlzLl9jb250ZXh0LmRlYnVnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBbcmVhbHRpbWVdIHdzIHNlbmQgKCR7bmV3IERhdGUoKX0pOiBgLCBvcHRzKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgICAgLy8gICBgW3JlYWx0aW1lXSB3cyBzZW5kICR7XG4gICAgICAgIC8vICAgICBvcHRzLm1zZy5tc2dUeXBlXG4gICAgICAgIC8vICAgfSAoJHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9KTogYCxcbiAgICAgICAgLy8gICBvcHRzXG4gICAgICAgIC8vIClcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmICh0aGlzLl93c0luaXRQcm9taXNlKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fd3NJbml0UHJvbWlzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xuICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgJ2ludmFsaWQgc3RhdGU6IHdzIGNvbm5lY3Rpb24gbm90IGV4aXN0cywgY2FuIG5vdCBzZW5kIG1lc3NhZ2UnXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3dzLnJlYWR5U3RhdGUgIT09IFdTX1JFQURZX1NUQVRFLk9QRU4pIHtcbiAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGB3cyByZWFkeVN0YXRlIGludmFsaWQ6ICR7dGhpcy5fd3MucmVhZHlTdGF0ZX0sIGNhbiBub3Qgc2VuZCBtZXNzYWdlYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRzLndhaXRSZXNwb25zZSkge1xuICAgICAgICAgIHRoaXMuX3dzUmVzcG9uc2VXYWl0LnNldChvcHRzLm1zZy5yZXF1ZXN0SWQsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3QsXG4gICAgICAgICAgICBza2lwT25NZXNzYWdlOiBvcHRzLnNraXBPbk1lc3NhZ2VcbiAgICAgICAgICB9IGFzIElSZXNwb25zZVdhaXRTcGVjKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbmQgbXNnOicsIG9wdHMubXNnKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3dzLnNlbmQoSlNPTi5zdHJpbmdpZnkob3B0cy5tc2cpKVxuICAgICAgICAgIGlmICghb3B0cy53YWl0UmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgIGlmIChvcHRzLndhaXRSZXNwb25zZSkge1xuICAgICAgICAgICAgICB0aGlzLl93c1Jlc3BvbnNlV2FpdC5kZWxldGUob3B0cy5tc2cucmVxdWVzdElkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLl93cy5zZW5kKEpTT04uc3RyaW5naWZ5KG9wdHMubXNnKSwgZXJyID0+IHtcbiAgICAgICAgLy8gICBpZiAoZXJyKSB7XG4gICAgICAgIC8vICAgICByZWplY3QoZXJyKVxuICAgICAgICAvLyAgICAgaWYgKG9wdHMud2FpdFJlc3BvbnNlKSB7XG4gICAgICAgIC8vICAgICAgIHRoaXMuX3dzUmVzcG9uc2VXYWl0LmRlbGV0ZShvcHRzLm1zZy5yZXF1ZXN0SWQpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gICB9XG5cbiAgICAgICAgLy8gICBpZiAoIW9wdHMud2FpdFJlc3BvbnNlKSB7XG4gICAgICAgIC8vICAgICByZXNvbHZlKClcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgLy8gdGhpcy5fd3Muc2VuZCh7XG4gICAgICAgIC8vICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob3B0cy5tc2cpLFxuICAgICAgICAvLyAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoIW9wdHMud2FpdFJlc3BvbnNlKSB7XG4gICAgICAgIC8vICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vICAgZmFpbDogZSA9PiB7XG4gICAgICAgIC8vICAgICByZWplY3QoZSlcbiAgICAgICAgLy8gICAgIGlmIChvcHRzLndhaXRSZXNwb25zZSkge1xuICAgICAgICAvLyAgICAgICB0aGlzLl93c1Jlc3BvbnNlV2FpdC5kZWxldGUob3B0cy5tc2cucmVxdWVzdElkKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9XG4gICAgfSlcblxuICBjbG9zZShjb2RlOiBDTE9TRV9FVkVOVF9DT0RFKSB7XG4gICAgdGhpcy5jbGVhckhlYXJ0YmVhdCgpXG5cbiAgICBpZiAodGhpcy5fd3MpIHtcbiAgICAgIHRoaXMuX3dzLmNsb3NlKGNvZGUsIENMT1NFX0VWRU5UX0NPREVfSU5GT1tjb2RlXS5uYW1lKVxuICAgICAgdGhpcy5fd3MgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBjbG9zZUFsbENsaWVudHMgPSAoZXJyb3I6IGFueSkgPT4ge1xuICAgIHRoaXMuX3ZpcnR1YWxXU0NsaWVudC5mb3JFYWNoKGNsaWVudCA9PiB7XG4gICAgICBjbGllbnQuY2xvc2VXaXRoRXJyb3IoZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIHBhdXNlQ2xpZW50cyA9IChjbGllbnRzPzogU2V0PFZpcnR1YWxXZWJTb2NrZXRDbGllbnQ+KSA9PiB7XG4gICAgOyhjbGllbnRzIHx8IHRoaXMuX3ZpcnR1YWxXU0NsaWVudCkuZm9yRWFjaChjbGllbnQgPT4ge1xuICAgICAgY2xpZW50LnBhdXNlKClcbiAgICB9KVxuICB9XG5cbiAgcmVzdW1lQ2xpZW50cyA9IChjbGllbnRzPzogU2V0PFZpcnR1YWxXZWJTb2NrZXRDbGllbnQ+KSA9PiB7XG4gICAgOyhjbGllbnRzIHx8IHRoaXMuX3ZpcnR1YWxXU0NsaWVudCkuZm9yRWFjaChjbGllbnQgPT4ge1xuICAgICAgY2xpZW50LnJlc3VtZSgpXG4gICAgfSlcbiAgfVxuXG4gIHdhdGNoKG9wdGlvbnM6IElXU1dhdGNoT3B0aW9ucyk6IERCUmVhbHRpbWVMaXN0ZW5lciB7XG4gICAgaWYgKCF0aGlzLl93cyAmJiAhdGhpcy5fd3NJbml0UHJvbWlzZSkge1xuICAgICAgdGhpcy5pbml0V2ViU29ja2V0Q29ubmVjdGlvbihmYWxzZSlcbiAgICB9XG5cbiAgICBjb25zdCB2aXJ0dWFsQ2xpZW50ID0gbmV3IFZpcnR1YWxXZWJTb2NrZXRDbGllbnQoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHNlbmQ6IHRoaXMuc2VuZCxcbiAgICAgIGxvZ2luOiB0aGlzLndlYkxvZ2luLFxuICAgICAgaXNXU0Nvbm5lY3RlZDogdGhpcy5pc1dTQ29ubmVjdGVkLFxuICAgICAgb25jZVdTQ29ubmVjdGVkOiB0aGlzLm9uY2VXU0Nvbm5lY3RlZCxcbiAgICAgIGdldFdhaXRFeHBlY3RlZFRpbWVvdXRMZW5ndGg6IHRoaXMuZ2V0V2FpdEV4cGVjdGVkVGltZW91dExlbmd0aCxcbiAgICAgIG9uV2F0Y2hTdGFydDogdGhpcy5vbldhdGNoU3RhcnQsXG4gICAgICBvbldhdGNoQ2xvc2U6IHRoaXMub25XYXRjaENsb3NlLFxuICAgICAgZGVidWc6IHRydWVcbiAgICB9KVxuICAgIHRoaXMuX3ZpcnR1YWxXU0NsaWVudC5hZGQodmlydHVhbENsaWVudClcbiAgICB0aGlzLl93YXRjaElkQ2xpZW50TWFwLnNldCh2aXJ0dWFsQ2xpZW50LndhdGNoSWQsIHZpcnR1YWxDbGllbnQpXG4gICAgcmV0dXJuIHZpcnR1YWxDbGllbnQubGlzdGVuZXJcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFdlYlNvY2tldENvbm5lY3Rpb24gPSBhc3luYyAoXG4gICAgcmVjb25uZWN0OiBib29sZWFuLFxuICAgIGF2YWlsYWJsZVJldHJpZXM6IG51bWJlciA9IHRoaXMuX21heFJlY29ubmVjdFxuICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAvLyDlvZPliY3lpITkuo7mraPlnKjph43ov57kuK3nmoTnirbmgIFcbiAgICBpZiAocmVjb25uZWN0ICYmIHRoaXMuX3JlY29ubmVjdFN0YXRlKSB7XG4gICAgICByZXR1cm4gLy8g5b+955WlXG4gICAgfVxuXG4gICAgaWYgKHJlY29ubmVjdCkge1xuICAgICAgdGhpcy5fcmVjb25uZWN0U3RhdGUgPSB0cnVlIC8vIOmHjei/nueKtuaAgeW8gOWni1xuICAgIH1cblxuICAgIGlmICh0aGlzLl93c0luaXRQcm9taXNlKSB7XG4gICAgICAvLyB0aGVyZSBhbHJlYWR5IGV4aXN0cyBhIHdlYnNvY2tldCBpbml0aWF0aW9uLCBqdXN0IHdhaXQgZm9yIGl0XG4gICAgICByZXR1cm4gdGhpcy5fd3NJbml0UHJvbWlzZVxuICAgIH1cblxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIC8vIGNvbnNvbGUubG9nKFxuICAgIC8vICAgYFtyZWFsdGltZV0gaW5pdFdlYlNvY2tldENvbm5lY3Rpb24gcmVjb25uZWN0ICR7cmVjb25uZWN0fSBhdmFpbGFibGVSZXRyaWVzICR7YXZhaWxhYmxlUmV0cmllc31gXG4gICAgLy8gKVxuICAgIC8vIH1cblxuICAgIGlmIChyZWNvbm5lY3QpIHtcbiAgICAgIHRoaXMucGF1c2VDbGllbnRzKClcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKENMT1NFX0VWRU5UX0NPREUuUmVjb25uZWN0V2ViU29ja2V0KVxuXG4gICAgdGhpcy5fd3NJbml0UHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgICAgLy8gICAnW3JlYWx0aW1lXSBpbml0V2ViU29ja2V0Q29ubmVjdGlvbiBzdGFydCB0aHJvd0Vycm9ySWZOZXR3b3JrT2ZmbGluZSdcbiAgICAgICAgLy8gKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8g5pqC5LiN5qOA5p+l572R57uc5oCBXG4gICAgICAgIC8vIGF3YWl0IHRocm93RXJyb3JJZk5ldHdvcmtPZmZsaW5lKClcblxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1tyZWFsdGltZV0gaW5pdFdlYlNvY2tldENvbm5lY3Rpb24gc3RhcnQgZ2V0U2lnbmF0dXJlJylcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHRoaXMuZ2V0U2lnbmF0dXJlKClcbiAgICAgICAgY29uc3Qgd3NTaWduID0gYXdhaXQgdGhpcy5nZXRXc1NpZ24oKVxuXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnW3JlYWx0aW1lXSBpbml0V2ViU29ja2V0Q29ubmVjdGlvbiBnZXRTaWduYXR1cmUgc3VjY2VzcycpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdbcmVhbHRpbWVdIGluaXRXZWJTb2NrZXRDb25uZWN0aW9uIHN0YXJ0IGNvbm5lY3RTb2NrZXQnKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2Uoc3VjY2VzcyA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5fd3MgPSBnZXRTREsodGhpcy5fY29udGV4dC5pZGVudGlmaWVycylcbiAgICAgICAgICAvLyAgIC5fc29ja2V0U2tpcENoZWNrRG9tYWluRmFjdG9yeSgpXG4gICAgICAgICAgLy8gICAuY29ubmVjdFNvY2tldCh7XG4gICAgICAgICAgLy8gICAgIHVybDogc2lnbmF0dXJlLndzVXJsLFxuICAgICAgICAgIC8vICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAvLyAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgIC8vICAgICBzdWNjZXNzOiAoKSA9PiBzdWNjZXNzKCksXG4gICAgICAgICAgLy8gICAgIGZhaWxcbiAgICAgICAgICAvLyAgIH0pXG5cbiAgICAgICAgICBjb25zdCB1cmwgPSB3c1NpZ24ud3NVcmwgfHwgJ3dzczovL3RjYi13cy50ZW5jZW50Y2xvdWRhcGkuY29tJztcbiAgICAgICAgICBjb25zdCB3c0NsYXNzID0gZ2V0V3NDbGFzcygpO1xuICAgICAgICAgIHRoaXMuX3dzID0gd3NDbGFzcyA/IG5ldyB3c0NsYXNzKHVybCkgOiBuZXcgV2ViU29ja2V0KHVybClcbiAgICAgICAgICBzdWNjZXNzKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZih0aGlzLl93cy5jb25uZWN0KXtcbiAgICAgICAgICBhd2FpdCB0aGlzLl93cy5jb25uZWN0KClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgICAgLy8gICAnW3JlYWx0aW1lXSBpbml0V2ViU29ja2V0Q29ubmVjdGlvbiBjb25uZWN0U29ja2V0IHN1Y2Nlc3NmdWxseSBmaXJlZCdcbiAgICAgICAgLy8gKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0V2ViU29ja2V0RXZlbnQoKVxuICAgICAgICByZXNvbHZlKClcblxuICAgICAgICBpZiAocmVjb25uZWN0KSB7XG4gICAgICAgICAgdGhpcy5yZXN1bWVDbGllbnRzKClcbiAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RTdGF0ZSA9IGZhbHNlIC8vIOmHjei/nueKtuaAgee7k+adn1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbcmVhbHRpbWVdIGluaXRXZWJTb2NrZXRDb25uZWN0aW9uIGNvbm5lY3QgZmFpbCcsIGUpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoYXZhaWxhYmxlUmV0cmllcyA+IDApIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGFuIG9wdGltaXphdGlvbiwgaW4gY2FzZSBvZiBuZXR3b3JrIG9mZmxpbmUsIHdlIGRvbid0IG5lZWQgdG8gc3R1YmJvcm5seSBzbGVlcCBmb3Igc29tZXRpbWUsXG4gICAgICAgICAgLy8gd2Ugb25seSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBuZXR3b3JrIHRvIGJlIGJhY2sgb25saW5lLCB0aGlzIGVuc3VyZXMgbWluaW11bSBkb3dudGltZVxuICAgICAgICAgIC8vIGNvbnN0IHsgaXNDb25uZWN0ZWQgfSA9IGF3YWl0IGdldE5ldHdvcmtTdGF0dXMoKVxuICAgICAgICAgIGNvbnN0IGlzQ29ubmVjdGVkID0gdHJ1ZVxuXG4gICAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgICAgLy8gICAnW3JlYWx0aW1lXSBpbml0V2ViU29ja2V0Q29ubmVjdGlvbiB3YWl0aW5nIGZvciBuZXR3b3JrIG9ubGluZSdcbiAgICAgICAgICAvLyApXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gYXV0byB3YWl0IHVudGlsIG5ldHdvcmsgb25saW5lLCBjYXVzZScgaXQgd291bGQgYmUgbWVhbmluZ2xlc3MgdG8gcmVjb25uZWN0IHdoaWxlIG5ldHdvcmsgaXMgb2ZmbGluZVxuXG4gICAgICAgICAgLy8gYXdhaXQgb25jZU5ldHdvcmtPbmxpbmUoKVxuXG4gICAgICAgICAgLy8gQ09NUEFUSUJJTElUWTogd2FpdCBmb3IgaWRlIHN0YXRlIHVwZGF0ZVxuICAgICAgICAgIC8vIGlmIChpc0RldlRvb2xzKCkpIHtcbiAgICAgICAgICAvLyAgIGF3YWl0IHNsZWVwKDApXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tyZWFsdGltZV0gaW5pdFdlYlNvY2tldENvbm5lY3Rpb24gbmV0d29yayBvbmxpbmUnKVxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIHRoaXMuX3dzSW5pdFByb21pc2UgPSB1bmRlZmluZWRcblxuICAgICAgICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIC8vICAgYFtyZWFsdGltZV0gaW5pdFdlYlNvY2tldENvbm5lY3Rpb24gc2xlZXAgJHt0aGlzLl9yZWNvbm5lY3RJbnRlcnZhbH1tc2BcbiAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKHRoaXMuX3JlY29ubmVjdEludGVydmFsKVxuICAgICAgICAgICAgaWYgKHJlY29ubmVjdCkge1xuICAgICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RTdGF0ZSA9IGZhbHNlIC8vIOmHjei/nuW8guW4uOS5n+eul+mHjei/nueKtuaAgee7k+adn1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUodGhpcy5pbml0V2ViU29ja2V0Q29ubmVjdGlvbihyZWNvbm5lY3QsIGF2YWlsYWJsZVJldHJpZXMgLSAxKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoZSlcblxuICAgICAgICAgIGlmIChyZWNvbm5lY3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxDbGllbnRzKFxuICAgICAgICAgICAgICBuZXcgQ2xvdWRTREtFcnJvcih7XG4gICAgICAgICAgICAgICAgZXJyQ29kZTogRVJSX0NPREUuU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1JFQ09OTkVDVF9XQVRDSF9GQUlMIGFzIHN0cmluZyxcbiAgICAgICAgICAgICAgICBlcnJNc2c6IGVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gbGV0IHN1Y2Nlc3MgPSBmYWxzZVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3dzSW5pdFByb21pc2VcbiAgICAgIC8vIHN1Y2Nlc3MgPSB0cnVlXG4gICAgICB0aGlzLl93c1JlYWR5U3Vic3JpYmVycy5mb3JFYWNoKCh7IHJlc29sdmUgfSkgPT4gcmVzb2x2ZSgpKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuX3dzUmVhZHlTdWJzcmliZXJzLmZvckVhY2goKHsgcmVqZWN0IH0pID0+IHJlamVjdCgpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl93c0luaXRQcm9taXNlID0gdW5kZWZpbmVkXG4gICAgICB0aGlzLl93c1JlYWR5U3Vic3JpYmVycyA9IFtdXG4gICAgfVxuXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgLy8gY29uc29sZS5sb2coXG4gICAgLy8gICBgW3JlYWx0aW1lXSBpbml0V2ViU29ja2V0Q29ubmVjdGlvbiAke3N1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZmFpbCd9YFxuICAgIC8vIClcbiAgICAvLyB9XG4gIH1cblxuICBwcml2YXRlIGluaXRXZWJTb2NrZXRFdmVudCA9ICgpID0+XG4gICAgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl93cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbiBub3QgaW5pdFdlYlNvY2tldEV2ZW50LCB3cyBub3QgZXhpc3RzJylcbiAgICAgIH1cblxuICAgICAgbGV0IHdzT3BlbmVkID0gZmFsc2VcblxuICAgICAgdGhpcy5fd3Mub25vcGVuID0gZXZlbnQgPT4ge1xuICAgICAgICAvLyB0aGlzLl93cy5vbk9wZW4oKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLl93cy5vbihcIm9wZW5cIiwgKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLl9jb250ZXh0LmRlYnVnICYmXG4gICAgICAgIGNvbnNvbGUud2FybignW3JlYWx0aW1lXSB3cyBldmVudDogb3BlbicsIGV2ZW50KVxuICAgICAgICB3c09wZW5lZCA9IHRydWVcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3dzLm9uZXJyb3IgPSBldmVudCA9PiB7XG4gICAgICAgIC8vIHRoaXMuX3dzLm9uKFwiZXJyb3JcIiwgZXJyb3IgPT4ge1xuICAgICAgICAvLyB0aGlzLl93cy5vbkVycm9yKGVycm9yID0+IHtcbiAgICAgICAgLy8gYWxsIGxvZ2lucyBhcmUgaW52YWxpZCBhZnRlciBkaXNjb25uZWN0aW9uXG4gICAgICAgIHRoaXMuX2xvZ2lucyA9IG5ldyBNYXAoKVxuXG4gICAgICAgIC8vIGVycm9y5YaZ6L+bZmlsZVxuXG4gICAgICAgIGlmICghd3NPcGVuZWQpIHtcbiAgICAgICAgICAvLyB0aGlzLl9jb250ZXh0LmRlYnVnICYmXG4gICAgICAgICAgY29uc29sZS5lcnJvcignW3JlYWx0aW1lXSB3cyBvcGVuIGZhaWxlZCB3aXRoIHdzIGV2ZW50OiBlcnJvcicsIGV2ZW50KVxuICAgICAgICAgIC8vIHdyaXRlVG9GaWxlKFxuICAgICAgICAgIC8vICAgXCJ3c2Vycm9yLnR4dFwiLFxuICAgICAgICAgIC8vICAgYCR7XG4gICAgICAgICAgLy8gICAgIHRoaXMuc3BlY2lhbE51bWJlclxuICAgICAgICAgIC8vICAgfSBbcmVhbHRpbWVdIHdzIG9wZW4gZmFpbGVkIHdpdGggd3MgZXZlbnQ6IGVycm9yICR7ZXJyb3J9IFxcbmBcbiAgICAgICAgICAvLyApXG5cbiAgICAgICAgICByZWplY3QoZXZlbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcy5fY29udGV4dC5kZWJ1ZyAmJlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tyZWFsdGltZV0gd3MgZXZlbnQ6IGVycm9yJywgZXZlbnQpXG5cbiAgICAgICAgICAvLyB3cml0ZVRvRmlsZShcbiAgICAgICAgICAvLyAgIFwid3NlcnJvci50eHRcIixcbiAgICAgICAgICAvLyAgIGAke3RoaXMuc3BlY2lhbE51bWJlcn0gW3JlYWx0aW1lXSB3cyBldmVudDogZXJyb3IgJHtlcnJvcn0gXFxuYFxuICAgICAgICAgIC8vIClcblxuICAgICAgICAgIHRoaXMuY2xlYXJIZWFydGJlYXQoKVxuICAgICAgICAgIHRoaXMuX3ZpcnR1YWxXU0NsaWVudC5mb3JFYWNoKGNsaWVudCA9PlxuICAgICAgICAgICAgY2xpZW50LmNsb3NlV2l0aEVycm9yKFxuICAgICAgICAgICAgICBuZXcgQ2xvdWRTREtFcnJvcih7XG4gICAgICAgICAgICAgICAgZXJyQ29kZTogRVJSX0NPREUuU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1dFQlNPQ0tFVF9DT05ORUNUSU9OX0VSUk9SIGFzIHN0cmluZyxcbiAgICAgICAgICAgICAgICBlcnJNc2c6IGV2ZW50XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IHJlY29ubmVjdFxuICAgICAgdGhpcy5fd3Mub25jbG9zZSA9IGNsb3NlRXZlbnQgPT4ge1xuICAgICAgICAvLyB0aGlzLl93cy5vbihcImNsb3NlXCIsIChjbG9zZUV2ZW50LCBjbG9zZXJlYXNvbikgPT4ge1xuICAgICAgICAvLyB0aGlzLl93cy5vbkNsb3NlKGNsb3NlRXZlbnQgPT4ge1xuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbcmVhbHRpbWVdIHdzIGV2ZW50OiBjbG9zZScsIGNsb3NlRXZlbnQpXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB3cml0ZVRvRmlsZShcbiAgICAgICAgLy8gICBcIndzY2xvc2UudHh0XCIsXG4gICAgICAgIC8vICAgYCR7XG4gICAgICAgIC8vICAgICB0aGlzLnNwZWNpYWxOdW1iZXJcbiAgICAgICAgLy8gICB9IFtyZWFsdGltZV0gd3MgZXZlbnQ6IGNsb3NlICR7Y2xvc2VFdmVudH0gJHtjbG9zZXJlYXNvbn0gXFxuYFxuICAgICAgICAvLyApXG5cbiAgICAgICAgLy8gYWxsIGxvZ2lucyBhcmUgaW52YWxpZCBhZnRlciBkaXNjb25uZWN0aW9uXG4gICAgICAgIHRoaXMuX2xvZ2lucyA9IG5ldyBNYXAoKVxuXG4gICAgICAgIHRoaXMuY2xlYXJIZWFydGJlYXQoKVxuICAgICAgICBzd2l0Y2ggKGNsb3NlRXZlbnQuY29kZSkge1xuICAgICAgICAgIGNhc2UgQ0xPU0VfRVZFTlRfQ09ERS5SZWNvbm5lY3RXZWJTb2NrZXQ6IHtcbiAgICAgICAgICAgIC8vIGp1c3QgaWdub3JlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENMT1NFX0VWRU5UX0NPREUuTm9SZWFsdGltZUxpc3RlbmVyczoge1xuICAgICAgICAgICAgLy8gcXVpdFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBDTE9TRV9FVkVOVF9DT0RFLkhlYXJ0YmVhdFBpbmdFcnJvcjpcbiAgICAgICAgICBjYXNlIENMT1NFX0VWRU5UX0NPREUuSGVhcnRiZWF0UG9uZ1RpbWVvdXRFcnJvcjpcbiAgICAgICAgICBjYXNlIENMT1NFX0VWRU5UX0NPREUuTm9ybWFsQ2xvc3VyZTpcbiAgICAgICAgICBjYXNlIENMT1NFX0VWRU5UX0NPREUuQWJub3JtYWxDbG9zdXJlOiB7XG4gICAgICAgICAgICAvLyBOb3JtYWwgQ2xvc3VyZSBhbmQgQWJub3JtYWwgQ2xvc3VyZTpcbiAgICAgICAgICAgIC8vICAgZXhwZWN0ZWQgY2xvc3VyZSwgbW9zdCBsaWtlbHkgZGlzcGF0Y2hlZCBieSB3ZWNoYXQgY2xpZW50LFxuICAgICAgICAgICAgLy8gICBzaW5jZSB0aGlzIGlzIHRoZSBzdGF0dXMgY29kZSBkaXNwYXRjaGVkIGluIGNhc2Ugb2YgbmV0d29yayBmYWlsdXJlLFxuICAgICAgICAgICAgLy8gICB3ZSBzaG91bGQgcmV0cnlcblxuICAgICAgICAgICAgaWYgKHRoaXMuX21heFJlY29ubmVjdCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX2F2YWlsYWJsZVJldHJpZXMgPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdFdlYlNvY2tldENvbm5lY3Rpb24odHJ1ZSwgdGhpcy5fbWF4UmVjb25uZWN0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZUFsbENsaWVudHMoZ2V0V1NDbG9zZUVycm9yKGNsb3NlRXZlbnQuY29kZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENMT1NFX0VWRU5UX0NPREUuTm9BdXRoZW50aWNhdGlvbjoge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUFsbENsaWVudHMoXG4gICAgICAgICAgICAgIGdldFdTQ2xvc2VFcnJvcihjbG9zZUV2ZW50LmNvZGUsIGNsb3NlRXZlbnQucmVhc29uKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIHJldHJ5IGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhSZWNvbm5lY3QgPiAwKSB7XG4gICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9hdmFpbGFibGVSZXRyaWVzID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLmluaXRXZWJTb2NrZXRDb25uZWN0aW9uKHRydWUsIHRoaXMuX21heFJlY29ubmVjdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxDbGllbnRzKGdldFdTQ2xvc2VFcnJvcihjbG9zZUV2ZW50LmNvZGUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKGBbcmVhbHRpbWVdIHVucmVjb2duaXplIHdzIGNsb3NlIGV2ZW50YCwgY2xvc2VFdmVudClcbiAgICAgICAgICAgIC8vIHRoaXMuY2xvc2VBbGxDbGllbnRzKGdldFdTQ2xvc2VFcnJvcihjbG9zZUV2ZW50LmNvZGUpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl93cy5vbm1lc3NhZ2UgPSByZXMgPT4ge1xuICAgICAgICAvLyB0aGlzLl93cy5vbihcIm1lc3NhZ2VcIiwgcmVzID0+IHtcbiAgICAgICAgLy8gdGhpcy5fd3Mub25NZXNzYWdlKHJlcyA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHJhd01zZyA9IHJlcy5kYXRhXG4gICAgICAgIGNvbnN0IHJhd01zZyA9IHJlcy5kYXRhXG5cbiAgICAgICAgLy8gcmVzZXQgJiByZXN0YXJ0IGhlYXJ0YmVhdFxuICAgICAgICB0aGlzLmhlYXJ0YmVhdCgpXG5cbiAgICAgICAgbGV0IG1zZzogSVJlc3BvbnNlTWVzc2FnZVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbXNnID0gSlNPTi5wYXJzZShyYXdNc2cgYXMgc3RyaW5nKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbcmVhbHRpbWVdIG9uTWVzc2FnZSBwYXJzZSByZXMuZGF0YSBlcnJvcjogJHtlfWApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgICAgLy8gICBgW3JlYWx0aW1lXSBvbk1lc3NhZ2UgJHtcbiAgICAgICAgLy8gICAgIG1zZy5tc2dUeXBlXG4gICAgICAgIC8vICAgfSAoJHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9KWAsXG4gICAgICAgIC8vICAgbXNnXG4gICAgICAgIC8vIClcblxuICAgICAgICBpZiAobXNnLm1zZ1R5cGUgPT09ICdFUlJPUicpIHtcbiAgICAgICAgICAvLyDmib7liLDlvZPliY3nm5HlkKzvvIzlubblsIZlcnJvcui/lOWbnlxuICAgICAgICAgIGxldCB2aXJ0dWFsV2F0Y2ggPSBudWxsXG4gICAgICAgICAgdGhpcy5fdmlydHVhbFdTQ2xpZW50LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS53YXRjaElkID09PSBtc2cud2F0Y2hJZCkge1xuICAgICAgICAgICAgICB2aXJ0dWFsV2F0Y2ggPSBpdGVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmICh2aXJ0dWFsV2F0Y2gpIHtcbiAgICAgICAgICAgIHZpcnR1YWxXYXRjaC5saXN0ZW5lci5vbkVycm9yKG1zZylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZVdhaXRTcGVjID0gdGhpcy5fd3NSZXNwb25zZVdhaXQuZ2V0KG1zZy5yZXF1ZXN0SWQpXG4gICAgICAgIGlmIChyZXNwb25zZVdhaXRTcGVjKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChtc2cubXNnVHlwZSA9PT0gJ0VSUk9SJykge1xuICAgICAgICAgICAgICByZXNwb25zZVdhaXRTcGVjLnJlamVjdChuZXcgUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvcihtc2cpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2VXYWl0U3BlYy5yZXNvbHZlKG1zZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyB0aGlzLl9jb250ZXh0LmRlYnVnICYmXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAnd3Mgb25NZXNzYWdlIHJlc3BvbnNlV2FpdFNwZWMucmVzb2x2ZShtc2cpIGVycm9yZWQ6JyxcbiAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLl93c1Jlc3BvbnNlV2FpdC5kZWxldGUobXNnLnJlcXVlc3RJZClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3BvbnNlV2FpdFNwZWMuc2tpcE9uTWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1zZy5tc2dUeXBlID09PSAnUE9ORycpIHtcbiAgICAgICAgICBpZiAodGhpcy5fbGFzdFBpbmdTZW5kVFMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ0dCA9IERhdGUubm93KCkgLSB0aGlzLl9sYXN0UGluZ1NlbmRUU1xuICAgICAgICAgICAgaWYgKHJ0dCA+IERFRkFVTFRfVU5UUlVTVEVEX1JUVF9USFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5fY29udGV4dC5kZWJ1ZyAmJlxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtyZWFsdGltZV0gdW50cnVzdGVkIHJ0dCBvYnNlcnZlZDogJHtydHR9YClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcnR0T2JzZXJ2ZWQubGVuZ3RoID49IE1BWF9SVFRfT0JTRVJWRUQpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcnR0T2JzZXJ2ZWQuc3BsaWNlKFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgdGhpcy5fcnR0T2JzZXJ2ZWQubGVuZ3RoIC0gTUFYX1JUVF9PQlNFUlZFRCArIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcnR0T2JzZXJ2ZWQucHVzaChydHQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsaWVudCA9IG1zZy53YXRjaElkICYmIHRoaXMuX3dhdGNoSWRDbGllbnRNYXAuZ2V0KG1zZy53YXRjaElkKVxuICAgICAgICBpZiAoY2xpZW50KSB7XG4gICAgICAgICAgY2xpZW50Lm9uTWVzc2FnZShtc2cpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVE9ETywgdGhpcyBpcyBhIHRlbXBvcmFyeSBmaXggZG9uZSBmb3Igc2VydmVyXG4gICAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBbcmVhbHRpbWVdIG5vIHJlYWx0aW1lIGxpc3RlbmVyIGZvdW5kIHJlc3BvbnNpYmxlIGZvciB3YXRjaElkICR7bXNnLndhdGNoSWR9OiBgLFxuICAgICAgICAgICAgbXNnXG4gICAgICAgICAgKVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBzd2l0Y2ggKG1zZy5tc2dUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdJTklUX0VWRU5UJzpcbiAgICAgICAgICAgIGNhc2UgJ05FWFRfRVZFTlQnOlxuICAgICAgICAgICAgY2FzZSAnQ0hFQ0tfRVZFTlQnOiB7XG4gICAgICAgICAgICAgIGNsaWVudCA9IHRoaXMuX3F1ZXJ5SWRDbGllbnRNYXAuZ2V0KG1zZy5tc2dEYXRhLnF1ZXJ5SUQpXG4gICAgICAgICAgICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgICAgICAgICBjbGllbnQub25NZXNzYWdlKG1zZylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IFssY2xpZW50XSBvZiBBcnJheS5mcm9tKHRoaXMuX3dhdGNoSWRDbGllbnRNYXAuZW50cmllcygpKSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd3YXRjaGlkKioqKionLCB3YXRjaElkKVxuICAgICAgICAgICAgICAgIGNsaWVudC5vbk1lc3NhZ2UobXNnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5oZWFydGJlYXQoKVxuICAgIH0pXG5cbiAgcHJpdmF0ZSBpc1dTQ29ubmVjdGVkID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX3dzICYmIHRoaXMuX3dzLnJlYWR5U3RhdGUgPT09IFdTX1JFQURZX1NUQVRFLk9QRU4pXG4gIH1cblxuICBwcml2YXRlIG9uY2VXU0Nvbm5lY3RlZCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBpZiAodGhpcy5pc1dTQ29ubmVjdGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl93c0luaXRQcm9taXNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3NJbml0UHJvbWlzZVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl93c1JlYWR5U3Vic3JpYmVycy5wdXNoKHtcbiAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHdlYkxvZ2luID0gYXN5bmMgKFxuICAgIGVudklkPzogc3RyaW5nLFxuICAgIHJlZnJlc2g/OiBib29sZWFuXG4gICk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgaWYgKCFyZWZyZXNoKSB7XG4gICAgICAvLyBsZXQgbG9naW5JbmZvID0gdGhpcy5fbG9naW5JbmZvXG4gICAgICBpZiAoZW52SWQpIHtcbiAgICAgICAgY29uc3QgbG9naW5JbmZvID0gdGhpcy5fbG9naW5zLmdldChlbnZJZClcbiAgICAgICAgaWYgKGxvZ2luSW5mbykge1xuICAgICAgICAgIGlmIChsb2dpbkluZm8ubG9nZ2VkSW4gJiYgbG9naW5JbmZvLmxvZ2luUmVzdWx0KSB7XG4gICAgICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbcmVhbHRpbWVdIGxvZ2luOiBhbHJlYWR5IGxvZ2dlZCBpbicpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gbG9naW5JbmZvLmxvZ2luUmVzdWx0XG4gICAgICAgICAgfSBlbHNlIGlmIChsb2dpbkluZm8ubG9nZ2luZ0luUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvZ2luSW5mby5sb2dnaW5nSW5Qcm9taXNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbXB0eUVudkxvZ2luSW5mbyA9IHRoaXMuX2xvZ2lucy5nZXQoJycpXG4gICAgICAgIGlmIChlbXB0eUVudkxvZ2luSW5mbz8ubG9nZ2luZ0luUHJvbWlzZSkge1xuICAgICAgICAgIHJldHVybiBlbXB0eUVudkxvZ2luSW5mby5sb2dnaW5nSW5Qcm9taXNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ1tyZWFsdGltZV0gbG9naW46IGxvZ2dpbmcgaW4nKVxuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPElMb2dpblJlc3VsdD4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgdGhpcy5nZXRTaWduYXR1cmUoZW52SWQsIHJlZnJlc2gpXG5cbiAgICAgICAgY29uc3Qgd3NTaWduID0gYXdhaXQgdGhpcy5nZXRXc1NpZ24oKVxuXG4gICAgICAgIC8vIGNvbnN0IHd4VmVyc2lvbiA9IGdldFdYVmVyc2lvbigpXG4gICAgICAgIGNvbnN0IG1zZ0RhdGE6IElSZXF1ZXN0TWVzc2FnZUxvZ2luRGF0YSA9IHtcbiAgICAgICAgICBlbnZJZDogd3NTaWduLmVudklkIHx8ICcnLFxuICAgICAgICAgIGFjY2Vzc1Rva2VuOiAnJywgLy8g5bey5bqf5byD5a2X5q61XG4gICAgICAgICAgLy8gc2lnblN0cjogc2lnbmF0dXJlLnNpZ25TdHIsXG4gICAgICAgICAgLy8gc2VjcmV0VmVyc2lvbjogc2lnbmF0dXJlLnNlY3JldFZlcnNpb24sXG4gICAgICAgICAgcmVmZXJyZXI6ICd3ZWInLFxuICAgICAgICAgIHNka1ZlcnNpb246ICcnLFxuICAgICAgICAgIGRhdGFWZXJzaW9uOiAnJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvZ2luTXNnOiBJUmVxdWVzdE1lc3NhZ2VMb2dpbk1zZyA9IHtcbiAgICAgICAgICB3YXRjaElkOiB1bmRlZmluZWQsXG4gICAgICAgICAgcmVxdWVzdElkOiBnZW5SZXF1ZXN0SWQoKSxcbiAgICAgICAgICBtc2dUeXBlOiAnTE9HSU4nLFxuICAgICAgICAgIG1zZ0RhdGEsXG4gICAgICAgICAgZXhNc2dEYXRhOiB7XG4gICAgICAgICAgICBydW50aW1lOiBnZXRSdW50aW1lKCksXG4gICAgICAgICAgICBzaWduU3RyOiB3c1NpZ24uc2lnblN0cixcbiAgICAgICAgICAgIHNlY3JldFZlcnNpb246IHdzU2lnbi5zZWNyZXRWZXJzaW9uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvZ2luUmVzTXNnID0gYXdhaXQgdGhpcy5zZW5kPElSZXNwb25zZU1lc3NhZ2VMb2dpblJlc01zZz4oe1xuICAgICAgICAgIG1zZzogbG9naW5Nc2csXG4gICAgICAgICAgd2FpdFJlc3BvbnNlOiB0cnVlLFxuICAgICAgICAgIHNraXBPbk1lc3NhZ2U6IHRydWUsXG4gICAgICAgICAgdGltZW91dDogREVGQVVMVF9MT0dJTl9USU1FT1VUXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCFsb2dpblJlc01zZy5tc2dEYXRhLmNvZGUpIHtcbiAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzXG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBlbnZJZDogd3NTaWduLmVudklkXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBsb2dpbiBmYWlsZWRcbiAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGAke2xvZ2luUmVzTXNnLm1zZ0RhdGEuY29kZX0gJHtsb2dpblJlc01zZy5tc2dEYXRhLm1lc3NhZ2V9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gbGV0IGxvZ2luSW5mbyA9IHRoaXMuX2xvZ2luSW5mb1xuICAgIGxldCBsb2dpbkluZm8gPSBlbnZJZCAmJiB0aGlzLl9sb2dpbnMuZ2V0KGVudklkKVxuXG4gICAgY29uc3QgbG9naW5TdGFydFRTID0gRGF0ZS5ub3coKVxuXG4gICAgaWYgKGxvZ2luSW5mbykge1xuICAgICAgbG9naW5JbmZvLmxvZ2dlZEluID0gZmFsc2VcbiAgICAgIGxvZ2luSW5mby5sb2dnaW5nSW5Qcm9taXNlID0gcHJvbWlzZVxuICAgICAgbG9naW5JbmZvLmxvZ2luU3RhcnRUUyA9IGxvZ2luU3RhcnRUU1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dpbkluZm8gPSB7XG4gICAgICAgIGxvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgbG9nZ2luZ0luUHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgbG9naW5TdGFydFRTXG4gICAgICB9XG4gICAgICAvLyB0aGlzLl9sb2dpbkluZm8gPSBsb2dpbkluZm9cbiAgICAgIHRoaXMuX2xvZ2lucy5zZXQoZW52SWQgfHwgJycsIGxvZ2luSW5mbylcbiAgICB9XG5cbiAgICAvLyB0cnkge1xuICAgIC8vICAgY29uc3QgbG9naW5SZXN1bHQgPSBhd2FpdCBwcm9taXNlXG4gICAgLy8gICBsb2dpbkluZm8ubG9nZ2VkSW4gPSB0cnVlXG4gICAgLy8gICBsb2dpbkluZm8ubG9nZ2luZ0luUHJvbWlzZSA9IHVuZGVmaW5lZFxuICAgIC8vICAgbG9naW5JbmZvLmxvZ2luU3RhcnRUUyA9IHVuZGVmaW5lZFxuICAgIC8vICAgbG9naW5JbmZvLmxvZ2luUmVzdWx0ID0gbG9naW5SZXN1bHRcbiAgICAvLyAgIHJldHVybiBsb2dpblJlc3VsdFxuICAgIC8vIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyAgIGxvZ2luSW5mby5sb2dnZWRJbiA9IGZhbHNlXG4gICAgLy8gICBsb2dpbkluZm8ubG9nZ2luZ0luUHJvbWlzZSA9IHVuZGVmaW5lZFxuICAgIC8vICAgbG9naW5JbmZvLmxvZ2luU3RhcnRUUyA9IHVuZGVmaW5lZFxuICAgIC8vICAgbG9naW5JbmZvLmxvZ2luUmVzdWx0ID0gdW5kZWZpbmVkXG4gICAgLy8gICB0aHJvdyBlXG4gICAgLy8gfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvZ2luUmVzdWx0ID0gYXdhaXQgcHJvbWlzZVxuICAgICAgY29uc3QgY3VyTG9naW5JbmZvID0gZW52SWQgJiYgdGhpcy5fbG9naW5zLmdldChlbnZJZClcbiAgICAgIGlmIChcbiAgICAgICAgY3VyTG9naW5JbmZvICYmXG4gICAgICAgIGN1ckxvZ2luSW5mbyA9PT0gbG9naW5JbmZvICYmXG4gICAgICAgIGN1ckxvZ2luSW5mby5sb2dpblN0YXJ0VFMgPT09IGxvZ2luU3RhcnRUU1xuICAgICAgKSB7XG4gICAgICAgIGxvZ2luSW5mby5sb2dnZWRJbiA9IHRydWVcbiAgICAgICAgbG9naW5JbmZvLmxvZ2dpbmdJblByb21pc2UgPSB1bmRlZmluZWRcbiAgICAgICAgbG9naW5JbmZvLmxvZ2luU3RhcnRUUyA9IHVuZGVmaW5lZFxuICAgICAgICBsb2dpbkluZm8ubG9naW5SZXN1bHQgPSBsb2dpblJlc3VsdFxuICAgICAgICByZXR1cm4gbG9naW5SZXN1bHRcbiAgICAgIH0gZWxzZSBpZiAoY3VyTG9naW5JbmZvKSB7XG4gICAgICAgIGlmIChjdXJMb2dpbkluZm8ubG9nZ2VkSW4gJiYgY3VyTG9naW5JbmZvLmxvZ2luUmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIGN1ckxvZ2luSW5mby5sb2dpblJlc3VsdFxuICAgICAgICB9IGVsc2UgaWYgKGN1ckxvZ2luSW5mby5sb2dnaW5nSW5Qcm9taXNlKSB7XG4gICAgICAgICAgcmV0dXJuIGN1ckxvZ2luSW5mby5sb2dnaW5nSW5Qcm9taXNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3cyB1bmV4cGVjdGVkIGxvZ2luIGluZm8nKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dzIGxvZ2luIGluZm8gcmVzZXQnKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZ2luSW5mby5sb2dnZWRJbiA9IGZhbHNlXG4gICAgICBsb2dpbkluZm8ubG9nZ2luZ0luUHJvbWlzZSA9IHVuZGVmaW5lZFxuICAgICAgbG9naW5JbmZvLmxvZ2luU3RhcnRUUyA9IHVuZGVmaW5lZFxuICAgICAgbG9naW5JbmZvLmxvZ2luUmVzdWx0ID0gdW5kZWZpbmVkXG4gICAgICB0aHJvdyBlXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRXc1NpZ24gPSBhc3luYyAoKTogUHJvbWlzZTxJV3NTaWduPiA9PiB7XG4gICAgaWYgKHRoaXMuX3dzU2lnbiAmJiB0aGlzLl93c1NpZ24uZXhwaXJlZFRzID4gRGF0ZS5ub3coKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dzU2lnblxuICAgIH1cbiAgICBjb25zdCBleHBpcmVkVHMgPSBEYXRlLm5vdygpICsgNjAwMDBcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLl9jb250ZXh0LmFwcENvbmZpZy5yZXF1ZXN0LnNlbmQoJ2F1dGgud3NXZWJTaWduJywge3J1bnRpbWU6IGdldFJ1bnRpbWUoKX0pXG5cbiAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3RjYi1qcy1zZGtdIOiOt+WPluWunuaXtuaVsOaNruaOqOmAgeeZu+W9leelqOaNruWksei0pTogJHtyZXMuY29kZX1gKVxuICAgIH1cblxuICAgIGlmIChyZXMuZGF0YSkge1xuICAgICAgY29uc3Qge3NpZ25TdHIsIHdzVXJsLCBzZWNyZXRWZXJzaW9uLCBlbnZJZH0gPSByZXMuZGF0YVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2lnblN0cixcbiAgICAgICAgd3NVcmwsXG4gICAgICAgIHNlY3JldFZlcnNpb24sXG4gICAgICAgIGVudklkLFxuICAgICAgICBleHBpcmVkVHNcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbdGNiLWpzLXNka10g6I635Y+W5a6e5pe25pWw5o2u5o6o6YCB55m75b2V56Wo5o2u5aSx6LSlJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFdhaXRFeHBlY3RlZFRpbWVvdXRMZW5ndGggPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLl9ydHRPYnNlcnZlZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBERUZBVUxUX0VYUEVDVEVEX0VWRU5UX1dBSVRfVElNRVxuICAgIH1cblxuICAgIC8vIDEuNSAqIFJUVFxuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5fcnR0T2JzZXJ2ZWQucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyKSAvXG4gICAgICAgIHRoaXMuX3J0dE9ic2VydmVkLmxlbmd0aCkgKlxuICAgICAgMS41XG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBoZWFydGJlYXQoaW1tZWRpYXRlPzogYm9vbGVhbikge1xuICAgIHRoaXMuY2xlYXJIZWFydGJlYXQoKVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLl9waW5nVGltZW91dElkID0gc2V0VGltZW91dChcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX3dzIHx8IHRoaXMuX3dzLnJlYWR5U3RhdGUgIT09IFdTX1JFQURZX1NUQVRFLk9QRU4pIHtcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gcGluZ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbGFzdFBpbmdTZW5kVFMgPSBEYXRlLm5vdygpXG4gICAgICAgICAgYXdhaXQgdGhpcy5waW5nKClcbiAgICAgICAgICB0aGlzLl9waW5nRmFpbGVkID0gMFxuXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRoaXMuX3BvbmdUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BvbmcgdGltZWQgb3V0JylcbiAgICAgICAgICAgIGlmICh0aGlzLl9wb25nTWlzc2VkIDwgREVGQVVMVF9QT05HX01JU1NfVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3BvbmdNaXNzZWQrK1xuICAgICAgICAgICAgICB0aGlzLmhlYXJ0YmVhdCh0cnVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbG9naWNhbCBwZXJjZWl2ZWQgY29ubmVjdGlvbiBsb3N0LCBldmVuIHRob3VnaCB3ZWJzb2NrZXQgZGlkIG5vdCByZWNlaXZlIGVycm9yIG9yIGNsb3NlIGV2ZW50XG4gICAgICAgICAgICAgIHRoaXMuaW5pdFdlYlNvY2tldENvbm5lY3Rpb24odHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzLl9jb250ZXh0LmFwcENvbmZpZy5yZWFsdGltZVBvbmdXYWl0VGltZW91dClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmICh0aGlzLl9waW5nRmFpbGVkIDwgREVGQVVMVF9QSU5HX0ZBSUxfVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICB0aGlzLl9waW5nRmFpbGVkKytcbiAgICAgICAgICAgIHRoaXMuaGVhcnRiZWF0KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZShDTE9TRV9FVkVOVF9DT0RFLkhlYXJ0YmVhdFBpbmdFcnJvcilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbW1lZGlhdGUgPyAwIDogdGhpcy5fY29udGV4dC5hcHBDb25maWcucmVhbHRpbWVQaW5nSW50ZXJ2YWxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIHBpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbXNnOiBJUmVxdWVzdE1lc3NhZ2VQaW5nTXNnID0ge1xuICAgICAgd2F0Y2hJZDogdW5kZWZpbmVkLFxuICAgICAgcmVxdWVzdElkOiBnZW5SZXF1ZXN0SWQoKSxcbiAgICAgIG1zZ1R5cGU6ICdQSU5HJyxcbiAgICAgIG1zZ0RhdGE6IG51bGxcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zZW5kKHtcbiAgICAgIG1zZ1xuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coJ3Bpbmcgc2VudCcpXG4gIH1cblxuICBwcml2YXRlIG9uV2F0Y2hTdGFydCA9IChjbGllbnQ6IFZpcnR1YWxXZWJTb2NrZXRDbGllbnQsIHF1ZXJ5SUQ6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuX3F1ZXJ5SWRDbGllbnRNYXAuc2V0KHF1ZXJ5SUQsIGNsaWVudClcbiAgfVxuXG4gIHByaXZhdGUgb25XYXRjaENsb3NlID0gKGNsaWVudDogVmlydHVhbFdlYlNvY2tldENsaWVudCwgcXVlcnlJRDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHF1ZXJ5SUQpIHtcbiAgICAgIHRoaXMuX3F1ZXJ5SWRDbGllbnRNYXAuZGVsZXRlKHF1ZXJ5SUQpXG4gICAgfVxuICAgIHRoaXMuX3dhdGNoSWRDbGllbnRNYXAuZGVsZXRlKGNsaWVudC53YXRjaElkKVxuICAgIHRoaXMuX3ZpcnR1YWxXU0NsaWVudC5kZWxldGUoY2xpZW50KVxuXG4gICAgaWYgKCF0aGlzLl92aXJ0dWFsV1NDbGllbnQuc2l6ZSkge1xuICAgICAgLy8gbm8gbW9yZSBleGlzdGluZyB3YXRjaCwgd2Ugc2hvdWxkIHJlbGVhc2UgdGhlIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICB0aGlzLmNsb3NlKENMT1NFX0VWRU5UX0NPREUuTm9SZWFsdGltZUxpc3RlbmVycylcbiAgICB9XG4gIH1cbn1cbiJdfQ==
}, function(modId) { var map = {"./virtual-websocket-client":1734234913881,"./message":1734234913882,"./ws-event":1734234913887,"./error":1734234913885,"./common":1734234913888,"./utils":1734234913886}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913881, function(require, module, exports) {

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualWebSocketClient = void 0;
var lodash_set_1 = __importDefault(require("lodash.set"));
var lodash_unset_1 = __importDefault(require("lodash.unset"));
var lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
var message_1 = require("./message");
var listener_1 = require("./listener");
var snapshot_1 = require("./snapshot");
var error_1 = require("./error");
var utils_1 = require("./utils");
var WATCH_STATUS;
(function (WATCH_STATUS) {
    WATCH_STATUS["LOGGINGIN"] = "LOGGINGIN";
    WATCH_STATUS["INITING"] = "INITING";
    WATCH_STATUS["REBUILDING"] = "REBUILDING";
    WATCH_STATUS["ACTIVE"] = "ACTIVE";
    WATCH_STATUS["ERRORED"] = "ERRORED";
    WATCH_STATUS["CLOSING"] = "CLOSING";
    WATCH_STATUS["CLOSED"] = "CLOSED";
    WATCH_STATUS["PAUSED"] = "PAUSED";
    WATCH_STATUS["RESUMING"] = "RESUMING";
})(WATCH_STATUS || (WATCH_STATUS = {}));
var DEFAULT_WAIT_TIME_ON_UNKNOWN_ERROR = 100;
var DEFAULT_MAX_AUTO_RETRY_ON_ERROR = 2;
var DEFAULT_MAX_SEND_ACK_AUTO_RETRY_ON_ERROR = 2;
var DEFAULT_SEND_ACK_DEBOUNCE_TIMEOUT = 10 * 1000;
var DEFAULT_INIT_WATCH_TIMEOUT = 10 * 1000;
var DEFAULT_REBUILD_WATCH_TIMEOUT = 10 * 1000;
var VirtualWebSocketClient = (function () {
    function VirtualWebSocketClient(options) {
        var _this = this;
        this.watchStatus = WATCH_STATUS.INITING;
        this._login = function (envId, refresh) { return __awaiter(_this, void 0, void 0, function () {
            var loginResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.watchStatus = WATCH_STATUS.LOGGINGIN;
                        return [4, this.login(envId, refresh)];
                    case 1:
                        loginResult = _a.sent();
                        if (!this.envId) {
                            this.envId = loginResult.envId;
                        }
                        return [2, loginResult];
                }
            });
        }); };
        this.initWatch = function (forceRefreshLogin) { return __awaiter(_this, void 0, void 0, function () {
            var success;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._initWatchPromise) {
                            return [2, this._initWatchPromise];
                        }
                        this._initWatchPromise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var envId, initWatchMsg, initEventMsg, _a, events, currEvent, _i, events_1, e, snapshot, e_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 3, , 4]);
                                        if (this.watchStatus === WATCH_STATUS.PAUSED) {
                                            console.log('[realtime] initWatch cancelled on pause');
                                            return [2, resolve()];
                                        }
                                        return [4, this._login(this.envId, forceRefreshLogin)];
                                    case 1:
                                        envId = (_b.sent()).envId;
                                        if (this.watchStatus === WATCH_STATUS.PAUSED) {
                                            console.log('[realtime] initWatch cancelled on pause');
                                            return [2, resolve()];
                                        }
                                        this.watchStatus = WATCH_STATUS.INITING;
                                        initWatchMsg = {
                                            watchId: this.watchId,
                                            requestId: message_1.genRequestId(),
                                            msgType: 'INIT_WATCH',
                                            msgData: {
                                                envId: envId,
                                                collName: this.collectionName,
                                                query: this.query,
                                                limit: this.limit,
                                                orderBy: this.orderBy
                                            }
                                        };
                                        return [4, this.send({
                                                msg: initWatchMsg,
                                                waitResponse: true,
                                                skipOnMessage: true,
                                                timeout: DEFAULT_INIT_WATCH_TIMEOUT
                                            })];
                                    case 2:
                                        initEventMsg = _b.sent();
                                        _a = initEventMsg.msgData, events = _a.events, currEvent = _a.currEvent;
                                        this.sessionInfo = {
                                            queryID: initEventMsg.msgData.queryID,
                                            currentEventId: currEvent - 1,
                                            currentDocs: []
                                        };
                                        if (events.length > 0) {
                                            for (_i = 0, events_1 = events; _i < events_1.length; _i++) {
                                                e = events_1[_i];
                                                e.ID = currEvent;
                                            }
                                            this.handleServerEvents(initEventMsg);
                                        }
                                        else {
                                            this.sessionInfo.currentEventId = currEvent;
                                            snapshot = new snapshot_1.Snapshot({
                                                id: currEvent,
                                                docChanges: [],
                                                docs: [],
                                                type: 'init'
                                            });
                                            this.listener.onChange(snapshot);
                                            this.scheduleSendACK();
                                        }
                                        this.onWatchStart(this, this.sessionInfo.queryID);
                                        this.watchStatus = WATCH_STATUS.ACTIVE;
                                        this._availableRetries.INIT_WATCH = DEFAULT_MAX_AUTO_RETRY_ON_ERROR;
                                        resolve();
                                        return [3, 4];
                                    case 3:
                                        e_1 = _b.sent();
                                        this.handleWatchEstablishmentError(e_1, {
                                            operationName: 'INIT_WATCH',
                                            resolve: resolve,
                                            reject: reject
                                        });
                                        return [3, 4];
                                    case 4: return [2];
                                }
                            });
                        }); });
                        success = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4, this._initWatchPromise];
                    case 2:
                        _a.sent();
                        success = true;
                        return [3, 4];
                    case 3:
                        this._initWatchPromise = undefined;
                        return [7];
                    case 4:
                        console.log("[realtime] initWatch " + (success ? 'success' : 'fail'));
                        return [2];
                }
            });
        }); };
        this.rebuildWatch = function (forceRefreshLogin) { return __awaiter(_this, void 0, void 0, function () {
            var success;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._rebuildWatchPromise) {
                            return [2, this._rebuildWatchPromise];
                        }
                        this._rebuildWatchPromise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var envId, rebuildWatchMsg, nextEventMsg, e_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 3, , 4]);
                                        if (this.watchStatus === WATCH_STATUS.PAUSED) {
                                            console.log('[realtime] rebuildWatch cancelled on pause');
                                            return [2, resolve()];
                                        }
                                        return [4, this._login(this.envId, forceRefreshLogin)];
                                    case 1:
                                        envId = (_a.sent()).envId;
                                        if (!this.sessionInfo) {
                                            throw new Error('can not rebuildWatch without a successful initWatch (lack of sessionInfo)');
                                        }
                                        if (this.watchStatus === WATCH_STATUS.PAUSED) {
                                            console.log('[realtime] rebuildWatch cancelled on pause');
                                            return [2, resolve()];
                                        }
                                        this.watchStatus = WATCH_STATUS.REBUILDING;
                                        rebuildWatchMsg = {
                                            watchId: this.watchId,
                                            requestId: message_1.genRequestId(),
                                            msgType: 'REBUILD_WATCH',
                                            msgData: {
                                                envId: envId,
                                                collName: this.collectionName,
                                                queryID: this.sessionInfo.queryID,
                                                eventID: this.sessionInfo.currentEventId
                                            }
                                        };
                                        return [4, this.send({
                                                msg: rebuildWatchMsg,
                                                waitResponse: true,
                                                skipOnMessage: false,
                                                timeout: DEFAULT_REBUILD_WATCH_TIMEOUT
                                            })];
                                    case 2:
                                        nextEventMsg = _a.sent();
                                        this.handleServerEvents(nextEventMsg);
                                        this.watchStatus = WATCH_STATUS.ACTIVE;
                                        this._availableRetries.REBUILD_WATCH = DEFAULT_MAX_AUTO_RETRY_ON_ERROR;
                                        resolve();
                                        return [3, 4];
                                    case 3:
                                        e_2 = _a.sent();
                                        this.handleWatchEstablishmentError(e_2, {
                                            operationName: 'REBUILD_WATCH',
                                            resolve: resolve,
                                            reject: reject
                                        });
                                        return [3, 4];
                                    case 4: return [2];
                                }
                            });
                        }); });
                        success = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4, this._rebuildWatchPromise];
                    case 2:
                        _a.sent();
                        success = true;
                        return [3, 4];
                    case 3:
                        this._rebuildWatchPromise = undefined;
                        return [7];
                    case 4:
                        console.log("[realtime] rebuildWatch " + (success ? 'success' : 'fail'));
                        return [2];
                }
            });
        }); };
        this.handleWatchEstablishmentError = function (e, options) { return __awaiter(_this, void 0, void 0, function () {
            var isInitWatch, abortWatch, retry;
            var _this = this;
            return __generator(this, function (_a) {
                isInitWatch = options.operationName === 'INIT_WATCH';
                abortWatch = function () {
                    _this.closeWithError(new error_1.CloudSDKError({
                        errCode: isInitWatch
                            ? error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL
                            : error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL,
                        errMsg: e
                    }));
                    options.reject(e);
                };
                retry = function (refreshLogin) {
                    if (_this.useRetryTicket(options.operationName)) {
                        if (isInitWatch) {
                            _this._initWatchPromise = undefined;
                            options.resolve(_this.initWatch(refreshLogin));
                        }
                        else {
                            _this._rebuildWatchPromise = undefined;
                            options.resolve(_this.rebuildWatch(refreshLogin));
                        }
                    }
                    else {
                        abortWatch();
                    }
                };
                this.handleCommonError(e, {
                    onSignError: function () { return retry(true); },
                    onTimeoutError: function () { return retry(false); },
                    onNotRetryableError: abortWatch,
                    onCancelledError: options.reject,
                    onUnknownError: function () { return __awaiter(_this, void 0, void 0, function () {
                        var onWSDisconnected, e_3;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 8, , 9]);
                                    onWSDisconnected = function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.pause();
                                                    return [4, this.onceWSConnected()];
                                                case 1:
                                                    _a.sent();
                                                    retry(true);
                                                    return [2];
                                            }
                                        });
                                    }); };
                                    if (!!this.isWSConnected()) return [3, 2];
                                    return [4, onWSDisconnected()];
                                case 1:
                                    _a.sent();
                                    return [3, 7];
                                case 2: return [4, utils_1.sleep(DEFAULT_WAIT_TIME_ON_UNKNOWN_ERROR)];
                                case 3:
                                    _a.sent();
                                    if (!(this.watchStatus === WATCH_STATUS.PAUSED)) return [3, 4];
                                    options.reject(new error_1.CancelledError(options.operationName + " cancelled due to pause after unknownError"));
                                    return [3, 7];
                                case 4:
                                    if (!!this.isWSConnected()) return [3, 6];
                                    return [4, onWSDisconnected()];
                                case 5:
                                    _a.sent();
                                    return [3, 7];
                                case 6:
                                    retry(false);
                                    _a.label = 7;
                                case 7: return [3, 9];
                                case 8:
                                    e_3 = _a.sent();
                                    retry(true);
                                    return [3, 9];
                                case 9: return [2];
                            }
                        });
                    }); }
                });
                return [2];
            });
        }); };
        this.closeWatch = function () { return __awaiter(_this, void 0, void 0, function () {
            var queryId, closeWatchMsg, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryId = this.sessionInfo ? this.sessionInfo.queryID : '';
                        if (this.watchStatus !== WATCH_STATUS.ACTIVE) {
                            this.watchStatus = WATCH_STATUS.CLOSED;
                            this.onWatchClose(this, queryId);
                            return [2];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        this.watchStatus = WATCH_STATUS.CLOSING;
                        closeWatchMsg = {
                            watchId: this.watchId,
                            requestId: message_1.genRequestId(),
                            msgType: 'CLOSE_WATCH',
                            msgData: null
                        };
                        return [4, this.send({
                                msg: closeWatchMsg
                            })];
                    case 2:
                        _a.sent();
                        this.sessionInfo = undefined;
                        this.watchStatus = WATCH_STATUS.CLOSED;
                        return [3, 5];
                    case 3:
                        e_4 = _a.sent();
                        this.closeWithError(new error_1.CloudSDKError({
                            errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL,
                            errMsg: e_4
                        }));
                        return [3, 5];
                    case 4:
                        this.onWatchClose(this, queryId);
                        return [7];
                    case 5: return [2];
                }
            });
        }); };
        this.scheduleSendACK = function () {
            _this.clearACKSchedule();
            _this._ackTimeoutId = setTimeout(function () {
                if (_this._waitExpectedTimeoutId) {
                    _this.scheduleSendACK();
                }
                else {
                    _this.sendACK();
                }
            }, DEFAULT_SEND_ACK_DEBOUNCE_TIMEOUT);
        };
        this.clearACKSchedule = function () {
            if (_this._ackTimeoutId) {
                clearTimeout(_this._ackTimeoutId);
            }
        };
        this.sendACK = function () { return __awaiter(_this, void 0, void 0, function () {
            var ackMsg, e_5, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (this.watchStatus !== WATCH_STATUS.ACTIVE) {
                            this.scheduleSendACK();
                            return [2];
                        }
                        if (!this.sessionInfo) {
                            console.warn('[realtime listener] can not send ack without a successful initWatch (lack of sessionInfo)');
                            return [2];
                        }
                        ackMsg = {
                            watchId: this.watchId,
                            requestId: message_1.genRequestId(),
                            msgType: 'CHECK_LAST',
                            msgData: {
                                queryID: this.sessionInfo.queryID,
                                eventID: this.sessionInfo.currentEventId
                            }
                        };
                        return [4, this.send({
                                msg: ackMsg
                            })];
                    case 1:
                        _a.sent();
                        this.scheduleSendACK();
                        return [3, 3];
                    case 2:
                        e_5 = _a.sent();
                        if (error_1.isRealtimeErrorMessageError(e_5)) {
                            msg = e_5.payload;
                            switch (msg.msgData.code) {
                                case 'CHECK_LOGIN_FAILED':
                                case 'SIGN_EXPIRED_ERROR':
                                case 'SIGN_INVALID_ERROR':
                                case 'SIGN_PARAM_INVALID': {
                                    this.rebuildWatch();
                                    return [2];
                                }
                                case 'QUERYID_INVALID_ERROR':
                                case 'SYS_ERR':
                                case 'INVALIID_ENV':
                                case 'COLLECTION_PERMISSION_DENIED': {
                                    this.closeWithError(new error_1.CloudSDKError({
                                        errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL,
                                        errMsg: msg.msgData.code
                                    }));
                                    return [2];
                                }
                                default: {
                                    break;
                                }
                            }
                        }
                        if (this._availableRetries.CHECK_LAST &&
                            this._availableRetries.CHECK_LAST > 0) {
                            this._availableRetries.CHECK_LAST--;
                            this.scheduleSendACK();
                        }
                        else {
                            this.closeWithError(new error_1.CloudSDKError({
                                errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL,
                                errMsg: e_5
                            }));
                        }
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); };
        this.handleCommonError = function (e, options) {
            if (error_1.isRealtimeErrorMessageError(e)) {
                var msg = e.payload;
                switch (msg.msgData.code) {
                    case 'CHECK_LOGIN_FAILED':
                    case 'SIGN_EXPIRED_ERROR':
                    case 'SIGN_INVALID_ERROR':
                    case 'SIGN_PARAM_INVALID': {
                        options.onSignError(e);
                        return;
                    }
                    case 'QUERYID_INVALID_ERROR':
                    case 'SYS_ERR':
                    case 'INVALIID_ENV':
                    case 'COLLECTION_PERMISSION_DENIED': {
                        options.onNotRetryableError(e);
                        return;
                    }
                    default: {
                        options.onNotRetryableError(e);
                        return;
                    }
                }
            }
            else if (error_1.isTimeoutError(e)) {
                options.onTimeoutError(e);
                return;
            }
            else if (error_1.isCancelledError(e)) {
                options.onCancelledError(e);
                return;
            }
            options.onUnknownError(e);
        };
        this.watchId = "watchid_" + +new Date() + "_" + Math.random();
        this.envId = options.envId;
        this.collectionName = options.collectionName;
        this.query = options.query;
        this.limit = options.limit;
        this.orderBy = options.orderBy;
        this.send = options.send;
        this.login = options.login;
        this.isWSConnected = options.isWSConnected;
        this.onceWSConnected = options.onceWSConnected;
        this.getWaitExpectedTimeoutLength = options.getWaitExpectedTimeoutLength;
        this.onWatchStart = options.onWatchStart;
        this.onWatchClose = options.onWatchClose;
        this.debug = options.debug;
        this._availableRetries = {
            INIT_WATCH: DEFAULT_MAX_AUTO_RETRY_ON_ERROR,
            REBUILD_WATCH: DEFAULT_MAX_AUTO_RETRY_ON_ERROR,
            CHECK_LAST: DEFAULT_MAX_SEND_ACK_AUTO_RETRY_ON_ERROR
        };
        this.listener = new listener_1.RealtimeListener({
            close: this.closeWatch,
            onChange: options.onChange,
            onError: options.onError,
            debug: this.debug,
            virtualClient: this
        });
        this.initWatch();
    }
    VirtualWebSocketClient.prototype.onMessage = function (msg) {
        var _this = this;
        switch (this.watchStatus) {
            case WATCH_STATUS.PAUSED: {
                if (msg.msgType !== 'ERROR') {
                    return;
                }
                break;
            }
            case WATCH_STATUS.LOGGINGIN:
            case WATCH_STATUS.INITING:
            case WATCH_STATUS.REBUILDING: {
                console.warn("[realtime listener] internal non-fatal error: unexpected message received while " + this.watchStatus);
                return;
            }
            case WATCH_STATUS.CLOSED: {
                console.warn('[realtime listener] internal non-fatal error: unexpected message received when the watch has closed');
                return;
            }
            case WATCH_STATUS.ERRORED: {
                console.warn('[realtime listener] internal non-fatal error: unexpected message received when the watch has ended with error');
                return;
            }
        }
        if (!this.sessionInfo) {
            console.warn('[realtime listener] internal non-fatal error: sessionInfo not found while message is received.');
            return;
        }
        this.scheduleSendACK();
        switch (msg.msgType) {
            case 'NEXT_EVENT': {
                console.warn("nextevent " + msg.msgData.currEvent + " ignored", msg);
                this.handleServerEvents(msg);
                break;
            }
            case 'CHECK_EVENT': {
                if (this.sessionInfo.currentEventId < msg.msgData.currEvent) {
                    this.sessionInfo.expectEventId = msg.msgData.currEvent;
                    this.clearWaitExpectedEvent();
                    this._waitExpectedTimeoutId = setTimeout(function () {
                        _this.rebuildWatch();
                    }, this.getWaitExpectedTimeoutLength());
                    console.log("[realtime] waitExpectedTimeoutLength " + this.getWaitExpectedTimeoutLength());
                }
                break;
            }
            case 'ERROR': {
                this.closeWithError(new error_1.CloudSDKError({
                    errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG,
                    errMsg: msg.msgData.code + " - " + msg.msgData.message
                }));
                break;
            }
            default: {
                console.warn("[realtime listener] virtual client receive unexpected msg " + msg.msgType + ": ", msg);
                break;
            }
        }
    };
    VirtualWebSocketClient.prototype.closeWithError = function (error) {
        this.watchStatus = WATCH_STATUS.ERRORED;
        this.clearACKSchedule();
        this.listener.onError(error);
        this.onWatchClose(this, (this.sessionInfo && this.sessionInfo.queryID) || '');
        console.log("[realtime] client closed (" + this.collectionName + " " + this.query + ") (watchId " + this.watchId + ")");
    };
    VirtualWebSocketClient.prototype.pause = function () {
        this.watchStatus = WATCH_STATUS.PAUSED;
        console.log("[realtime] client paused (" + this.collectionName + " " + this.query + ") (watchId " + this.watchId + ")");
    };
    VirtualWebSocketClient.prototype.resume = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.watchStatus = WATCH_STATUS.RESUMING;
                        console.log("[realtime] client resuming with " + (this.sessionInfo ? 'REBUILD_WATCH' : 'INIT_WATCH') + " (" + this.collectionName + " " + this.query + ") (" + this.watchId + ")");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, (this.sessionInfo ? this.rebuildWatch() : this.initWatch())];
                    case 2:
                        _a.sent();
                        console.log("[realtime] client successfully resumed (" + this.collectionName + " " + this.query + ") (" + this.watchId + ")");
                        return [3, 4];
                    case 3:
                        e_6 = _a.sent();
                        console.error("[realtime] client resume failed (" + this.collectionName + " " + this.query + ") (" + this.watchId + ")", e_6);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    VirtualWebSocketClient.prototype.useRetryTicket = function (operationName) {
        if (this._availableRetries[operationName] &&
            this._availableRetries[operationName] > 0) {
            this._availableRetries[operationName]--;
            console.log("[realtime] " + operationName + " use a retry ticket, now only " + this._availableRetries[operationName] + " retry left");
            return true;
        }
        return false;
    };
    VirtualWebSocketClient.prototype.handleServerEvents = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.scheduleSendACK();
                        return [4, this._handleServerEvents(msg)];
                    case 1:
                        _a.sent();
                        this._postHandleServerEventsValidityCheck(msg);
                        return [3, 3];
                    case 2:
                        e_7 = _a.sent();
                        console.error('[realtime listener] internal non-fatal error: handle server events failed with error: ', e_7);
                        throw e_7;
                    case 3: return [2];
                }
            });
        });
    };
    VirtualWebSocketClient.prototype._handleServerEvents = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var requestId, events, msgType, sessionInfo, allChangeEvents, docs, initEncountered, _loop_1, this_1, i, len, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestId = msg.requestId;
                        events = msg.msgData.events;
                        msgType = msg.msgType;
                        if (!events.length || !this.sessionInfo) {
                            return [2];
                        }
                        sessionInfo = this.sessionInfo;
                        try {
                            allChangeEvents = events.map(getPublicEvent);
                        }
                        catch (e) {
                            this.closeWithError(new error_1.CloudSDKError({
                                errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA,
                                errMsg: e
                            }));
                            return [2];
                        }
                        docs = __spreadArrays(sessionInfo.currentDocs);
                        initEncountered = false;
                        _loop_1 = function (i, len) {
                            var change, localDoc, doc, fieldPath, _i, _a, fieldPath, err, err, doc, doc, err, ind, ind, docsSnapshot, docChanges, snapshot;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        change = allChangeEvents[i];
                                        if (!(sessionInfo.currentEventId >= change.id)) return [3, 1];
                                        if (!allChangeEvents[i - 1] || change.id > allChangeEvents[i - 1].id) {
                                            console.warn("[realtime] duplicate event received, cur " + sessionInfo.currentEventId + " but got " + change.id);
                                        }
                                        else {
                                            console.error("[realtime listener] server non-fatal error: events out of order (the latter event's id is smaller than that of the former) (requestId " + requestId + ")");
                                        }
                                        return [2, "continue"];
                                    case 1:
                                        if (!(sessionInfo.currentEventId === change.id - 1)) return [3, 2];
                                        switch (change.dataType) {
                                            case 'update': {
                                                if (!change.doc) {
                                                    switch (change.queueType) {
                                                        case 'update':
                                                        case 'dequeue': {
                                                            localDoc = docs.find(function (doc) { return doc._id === change.docId; });
                                                            if (localDoc) {
                                                                doc = lodash_clonedeep_1.default(localDoc);
                                                                if (change.updatedFields) {
                                                                    for (fieldPath in change.updatedFields) {
                                                                        lodash_set_1.default(doc, fieldPath, change.updatedFields[fieldPath]);
                                                                    }
                                                                }
                                                                if (change.removedFields) {
                                                                    for (_i = 0, _a = change.removedFields; _i < _a.length; _i++) {
                                                                        fieldPath = _a[_i];
                                                                        lodash_unset_1.default(doc, fieldPath);
                                                                    }
                                                                }
                                                                change.doc = doc;
                                                            }
                                                            else {
                                                                console.error('[realtime listener] internal non-fatal server error: unexpected update dataType event where no doc is associated.');
                                                            }
                                                            break;
                                                        }
                                                        case 'enqueue': {
                                                            err = new error_1.CloudSDKError({
                                                                errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR,
                                                                errMsg: "HandleServerEvents: full doc is not provided with dataType=\"update\" and queueType=\"enqueue\" (requestId " + msg.requestId + ")"
                                                            });
                                                            this_1.closeWithError(err);
                                                            throw err;
                                                        }
                                                        default: {
                                                            break;
                                                        }
                                                    }
                                                }
                                                break;
                                            }
                                            case 'replace': {
                                                if (!change.doc) {
                                                    err = new error_1.CloudSDKError({
                                                        errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR,
                                                        errMsg: "HandleServerEvents: full doc is not provided with dataType=\"replace\" (requestId " + msg.requestId + ")"
                                                    });
                                                    this_1.closeWithError(err);
                                                    throw err;
                                                }
                                                break;
                                            }
                                            case 'remove': {
                                                doc = docs.find(function (doc) { return doc._id === change.docId; });
                                                if (doc) {
                                                    change.doc = doc;
                                                }
                                                else {
                                                    console.error('[realtime listener] internal non-fatal server error: unexpected remove event where no doc is associated.');
                                                }
                                                break;
                                            }
                                            case 'limit': {
                                                if (!change.doc) {
                                                    switch (change.queueType) {
                                                        case 'dequeue': {
                                                            doc = docs.find(function (doc) { return doc._id === change.docId; });
                                                            if (doc) {
                                                                change.doc = doc;
                                                            }
                                                            else {
                                                                console.error('[realtime listener] internal non-fatal server error: unexpected limit dataType event where no doc is associated.');
                                                            }
                                                            break;
                                                        }
                                                        case 'enqueue': {
                                                            err = new error_1.CloudSDKError({
                                                                errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR,
                                                                errMsg: "HandleServerEvents: full doc is not provided with dataType=\"limit\" and queueType=\"enqueue\" (requestId " + msg.requestId + ")"
                                                            });
                                                            this_1.closeWithError(err);
                                                            throw err;
                                                        }
                                                        default: {
                                                            break;
                                                        }
                                                    }
                                                }
                                                break;
                                            }
                                        }
                                        switch (change.queueType) {
                                            case 'init': {
                                                if (!initEncountered) {
                                                    initEncountered = true;
                                                    docs = [change.doc];
                                                }
                                                else {
                                                    docs.push(change.doc);
                                                }
                                                break;
                                            }
                                            case 'enqueue': {
                                                docs.push(change.doc);
                                                break;
                                            }
                                            case 'dequeue': {
                                                ind = docs.findIndex(function (doc) { return doc._id === change.docId; });
                                                if (ind > -1) {
                                                    docs.splice(ind, 1);
                                                }
                                                else {
                                                    console.error('[realtime listener] internal non-fatal server error: unexpected dequeue event where no doc is associated.');
                                                }
                                                break;
                                            }
                                            case 'update': {
                                                ind = docs.findIndex(function (doc) { return doc._id === change.docId; });
                                                if (ind > -1) {
                                                    docs[ind] = change.doc;
                                                }
                                                else {
                                                    console.error('[realtime listener] internal non-fatal server error: unexpected queueType update event where no doc is associated.');
                                                }
                                                break;
                                            }
                                        }
                                        if (i === len - 1 ||
                                            (allChangeEvents[i + 1] && allChangeEvents[i + 1].id !== change.id)) {
                                            docsSnapshot = __spreadArrays(docs);
                                            docChanges = allChangeEvents
                                                .slice(0, i + 1)
                                                .filter(function (c) { return c.id === change.id; });
                                            this_1.sessionInfo.currentEventId = change.id;
                                            this_1.sessionInfo.currentDocs = docs;
                                            snapshot = new snapshot_1.Snapshot({
                                                id: change.id,
                                                docChanges: docChanges,
                                                docs: docsSnapshot,
                                                msgType: msgType
                                            });
                                            this_1.listener.onChange(snapshot);
                                        }
                                        return [3, 4];
                                    case 2:
                                        console.warn("[realtime listener] event received is out of order, cur " + this_1.sessionInfo.currentEventId + " but got " + change.id);
                                        return [4, this_1.rebuildWatch()];
                                    case 3:
                                        _b.sent();
                                        return [2, { value: void 0 }];
                                    case 4: return [2];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0, len = allChangeEvents.length;
                        _a.label = 1;
                    case 1:
                        if (!(i < len)) return [3, 4];
                        return [5, _loop_1(i, len)];
                    case 2:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2, state_1.value];
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    VirtualWebSocketClient.prototype._postHandleServerEventsValidityCheck = function (msg) {
        if (!this.sessionInfo) {
            console.error('[realtime listener] internal non-fatal error: sessionInfo lost after server event handling, this should never occur');
            return;
        }
        if (this.sessionInfo.expectEventId &&
            this.sessionInfo.currentEventId >= this.sessionInfo.expectEventId) {
            this.clearWaitExpectedEvent();
        }
        if (this.sessionInfo.currentEventId < msg.msgData.currEvent) {
            console.warn('[realtime listener] internal non-fatal error: client eventId does not match with server event id after server event handling');
            return;
        }
    };
    VirtualWebSocketClient.prototype.clearWaitExpectedEvent = function () {
        if (this._waitExpectedTimeoutId) {
            clearTimeout(this._waitExpectedTimeoutId);
            this._waitExpectedTimeoutId = undefined;
        }
    };
    return VirtualWebSocketClient;
}());
exports.VirtualWebSocketClient = VirtualWebSocketClient;
function getPublicEvent(event) {
    var e = {
        id: event.ID,
        dataType: event.DataType,
        queueType: event.QueueType,
        docId: event.DocID,
        doc: event.Doc && event.Doc !== '{}' ? JSON.parse(event.Doc) : undefined
    };
    if (event.DataType === 'update') {
        if (event.UpdatedFields) {
            e.updatedFields = JSON.parse(event.UpdatedFields);
        }
        if (event.removedFields || event.RemovedFields) {
            e.removedFields = JSON.parse(event.removedFields);
        }
    }
    return e;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC13ZWJzb2NrZXQtY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpcnR1YWwtd2Vic29ja2V0LWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQTRCO0FBQzVCLDhEQUFnQztBQUNoQyxzRUFBd0M7QUFDeEMscUNBQXdDO0FBaUJ4Qyx1Q0FBNkM7QUFDN0MsdUNBQXFDO0FBRXJDLGlDQVNnQjtBQUNoQixpQ0FBK0I7QUE0Qy9CLElBQUssWUFVSjtBQVZELFdBQUssWUFBWTtJQUNmLHVDQUF1QixDQUFBO0lBQ3ZCLG1DQUFtQixDQUFBO0lBQ25CLHlDQUF5QixDQUFBO0lBQ3pCLGlDQUFpQixDQUFBO0lBQ2pCLG1DQUFtQixDQUFBO0lBQ25CLG1DQUFtQixDQUFBO0lBQ25CLGlDQUFpQixDQUFBO0lBQ2pCLGlDQUFpQixDQUFBO0lBQ2pCLHFDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFWSSxZQUFZLEtBQVosWUFBWSxRQVVoQjtBQUVELElBQU0sa0NBQWtDLEdBQUcsR0FBRyxDQUFBO0FBQzlDLElBQU0sK0JBQStCLEdBQUcsQ0FBQyxDQUFBO0FBQ3pDLElBQU0sd0NBQXdDLEdBQUcsQ0FBQyxDQUFBO0FBQ2xELElBQU0saUNBQWlDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQTtBQUNuRCxJQUFNLDBCQUEwQixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUE7QUFDNUMsSUFBTSw2QkFBNkIsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFBO0FBRS9DO0lBcUNFLGdDQUFZLE9BQWtEO1FBQTlELGlCQStCQztRQTNDTyxnQkFBVyxHQUFpQixZQUFZLENBQUMsT0FBTyxDQUFBO1FBME1oRCxXQUFNLEdBQUcsVUFDZixLQUFjLEVBQ2QsT0FBaUI7Ozs7O3dCQUVqQixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVks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QVEsRUFBRTtRQUUvQixJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDdkIsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUNsRDtRQUdELElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1lBSzlDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDbEQ7S0FDRjtJQUVELE9BQU8sQ0FBQyxDQUFBO0FBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXQgZnJvbSAnbG9kYXNoLnNldCdcbmltcG9ydCB1bnNldCBmcm9tICdsb2Rhc2gudW5zZXQnXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnXG5pbXBvcnQgeyBnZW5SZXF1ZXN0SWQgfSBmcm9tICcuL21lc3NhZ2UnXG5pbXBvcnQge1xuICBJUmVzcG9uc2VNZXNzYWdlLFxuICBJUmVxdWVzdE1lc3NhZ2VJbml0V2F0Y2hNc2csXG4gIElSZXNwb25zZU1lc3NhZ2VJbml0RXZlbnRNc2csXG4gIElEQkV2ZW50LFxuICBJUmVxdWVzdE1lc3NhZ2VSZWJ1aWxkV2F0Y2hNc2csXG4gIElSZXF1ZXN0TWVzc2FnZUNsb3NlV2F0Y2hNc2csXG4gIElSZXF1ZXN0TXNnVHlwZSxcbiAgSVJlc3BvbnNlTWVzc2FnZU5leHRFdmVudE1zZyxcbiAgSVJlcXVlc3RNZXNzYWdlQ2hlY2tMYXN0TXNnLFxuICBJV2F0Y2hPcHRpb25zXG59IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvcmVhbHRpbWUnXG5pbXBvcnQgeyBcbiAgSVNpbmdsZURCRXZlbnRcbn0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcy9kYXRhYmFzZSdcbi8vIGltcG9ydCBSZXBvcnRlciBmcm9tIFwiLi9leHRlcm5hbHMvcHVibGljLWxpYi9yZXBvcnRlclwiXG5pbXBvcnQgeyBSZWFsdGltZUxpc3RlbmVyIH0gZnJvbSAnLi9saXN0ZW5lcidcbmltcG9ydCB7IFNuYXBzaG90IH0gZnJvbSAnLi9zbmFwc2hvdCdcbmltcG9ydCB7IElXU1NlbmRPcHRpb25zLCBJTG9naW5SZXN1bHQgfSBmcm9tICcuL3dlYnNvY2tldC1jbGllbnQnXG5pbXBvcnQgeyBcbiAgRVJSX0NPREUsXG4gIENsb3VkU0RLRXJyb3IsXG4gIGlzVGltZW91dEVycm9yLFxuICBDYW5jZWxsZWRFcnJvcixcbiAgaXNDYW5jZWxsZWRFcnJvcixcbiAgaXNSZWFsdGltZUVycm9yTWVzc2FnZUVycm9yLCBcbiAgUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvciwgXG4gIFRpbWVvdXRFcnJvciBcbn0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi91dGlscydcblxuLy8gPT09PT09PT09PT09PT09IFJlYWx0aW1lIFZpcnR1YWwgV2ViU29ja2V0IENsaWVudCAoSW50ZXJuYWwpID09PT09PT09PT09PT09PT09PT09XG5cbmludGVyZmFjZSBJVmlydHVhbFdlYlNvY2tldENsaWVudENvbnN0cnVjdG9yT3B0aW9ucyBleHRlbmRzIElXYXRjaE9wdGlvbnMge1xuICAvLyB3czogUmVhbHRpbWVXZWJTb2NrZXRDbGllbnRcbiAgZW52SWQ/OiBzdHJpbmdcbiAgY29sbGVjdGlvbk5hbWU6IHN0cmluZ1xuICBxdWVyeTogc3RyaW5nXG4gIGxpbWl0PzogbnVtYmVyXG4gIG9yZGVyQnk/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gIHNlbmQ6IDxUID0gYW55PihvcHRzOiBJV1NTZW5kT3B0aW9ucykgPT4gUHJvbWlzZTxUPlxuICBsb2dpbjogKGVudklkPzogc3RyaW5nLCByZWZyZXNoPzogYm9vbGVhbikgPT4gUHJvbWlzZTxhbnk+XG4gIGlzV1NDb25uZWN0ZWQ6ICgpID0+IGJvb2xlYW5cbiAgb25jZVdTQ29ubmVjdGVkOiAoKSA9PiBQcm9taXNlPHZvaWQ+XG4gIGdldFdhaXRFeHBlY3RlZFRpbWVvdXRMZW5ndGg6ICgpID0+IG51bWJlclxuICBvbldhdGNoU3RhcnQ6IChjbGllbnQ6IFZpcnR1YWxXZWJTb2NrZXRDbGllbnQsIHF1ZXJ5SUQ6IHN0cmluZykgPT4gdm9pZFxuICBvbldhdGNoQ2xvc2U6IChjbGllbnQ6IFZpcnR1YWxXZWJTb2NrZXRDbGllbnQsIHF1ZXJ5SUQ6IHN0cmluZykgPT4gdm9pZFxuICBkZWJ1Zz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElXYXRjaFNlc3Npb25JbmZvIHtcbiAgcXVlcnlJRDogc3RyaW5nXG4gIGN1cnJlbnRFdmVudElkOiBudW1iZXJcbiAgY3VycmVudERvY3M6IFJlY29yZDxzdHJpbmcsIGFueT5bXVxuICBleHBlY3RFdmVudElkPzogbnVtYmVyXG59XG5cbmludGVyZmFjZSBJSGFuZGxlQ29tbW9uRXJyb3JPcHRpb25zIHtcbiAgb25TaWduRXJyb3I6IChlOiBSZWFsdGltZUVycm9yTWVzc2FnZUVycm9yKSA9PiB2b2lkXG4gIG9uVGltZW91dEVycm9yOiAoZTogVGltZW91dEVycm9yKSA9PiB2b2lkXG4gIG9uQ2FuY2VsbGVkRXJyb3I6IChlOiBDYW5jZWxsZWRFcnJvcikgPT4gdm9pZFxuICBvbk5vdFJldHJ5YWJsZUVycm9yOiAoZTogUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvcikgPT4gdm9pZFxuICBvblVua25vd25FcnJvcjogKGU6IGFueSkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSUhhbmRsZVdhdGNoRXN0YWJsaXNobWVudEVycm9yT3B0aW9ucyB7XG4gIG9wZXJhdGlvbk5hbWU6ICdJTklUX1dBVENIJyB8ICdSRUJVSUxEX1dBVENIJ1xuICByZXNvbHZlOiAodmFsdWU/OiBQcm9taXNlTGlrZTx2b2lkPiB8IHVuZGVmaW5lZCkgPT4gdm9pZFxuICByZWplY3Q6IChlOiBhbnkpID0+IHZvaWRcbiAgLy8gcmV0cnk6IChyZWZyZXNoTG9naW4/OiBib29sZWFuKSA9PiB2b2lkXG4gIC8vIGFib3J0V2F0Y2g6IChlOiBhbnkpID0+IHZvaWRcbn1cblxuZW51bSBXQVRDSF9TVEFUVVMge1xuICBMT0dHSU5HSU4gPSAnTE9HR0lOR0lOJyxcbiAgSU5JVElORyA9ICdJTklUSU5HJyxcbiAgUkVCVUlMRElORyA9ICdSRUJVSUxESU5HJyxcbiAgQUNUSVZFID0gJ0FDVElWRScsXG4gIEVSUk9SRUQgPSAnRVJST1JFRCcsXG4gIENMT1NJTkcgPSAnQ0xPU0lORycsXG4gIENMT1NFRCA9ICdDTE9TRUQnLFxuICBQQVVTRUQgPSAnUEFVU0VEJyxcbiAgUkVTVU1JTkcgPSAnUkVTVU1JTkcnXG59XG5cbmNvbnN0IERFRkFVTFRfV0FJVF9USU1FX09OX1VOS05PV05fRVJST1IgPSAxMDBcbmNvbnN0IERFRkFVTFRfTUFYX0FVVE9fUkVUUllfT05fRVJST1IgPSAyXG5jb25zdCBERUZBVUxUX01BWF9TRU5EX0FDS19BVVRPX1JFVFJZX09OX0VSUk9SID0gMlxuY29uc3QgREVGQVVMVF9TRU5EX0FDS19ERUJPVU5DRV9USU1FT1VUID0gMTAgKiAxMDAwXG5jb25zdCBERUZBVUxUX0lOSVRfV0FUQ0hfVElNRU9VVCA9IDEwICogMTAwMFxuY29uc3QgREVGQVVMVF9SRUJVSUxEX1dBVENIX1RJTUVPVVQgPSAxMCAqIDEwMDBcblxuZXhwb3J0IGNsYXNzIFZpcnR1YWxXZWJTb2NrZXRDbGllbnQge1xuICAvLyBwYXNzZWQgb3ZlclxuICB3YXRjaElkOiBzdHJpbmdcbiAgLy8gb3duXG4gIGxpc3RlbmVyOiBSZWFsdGltZUxpc3RlbmVyXG4gIHByaXZhdGUgZW52SWQ/OiBzdHJpbmdcbiAgcHJpdmF0ZSBjb2xsZWN0aW9uTmFtZTogc3RyaW5nXG4gIHByaXZhdGUgcXVlcnk6IHN0cmluZ1xuICBwcml2YXRlIGxpbWl0OiBudW1iZXJcbiAgcHJpdmF0ZSBvcmRlckJ5OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gIHByaXZhdGUgc2VuZDogPFQgPSBhbnk+KG9wdHM6IElXU1NlbmRPcHRpb25zKSA9PiBQcm9taXNlPFQ+XG4gIHByaXZhdGUgbG9naW46IChlbnZJZD86IHN0cmluZywgcmVmcmVzaD86IGJvb2xlYW4pID0+IFByb21pc2U8YW55PlxuICBwcml2YXRlIGlzV1NDb25uZWN0ZWQ6ICgpID0+IGJvb2xlYW5cbiAgcHJpdmF0ZSBvbmNlV1NDb25uZWN0ZWQ6ICgpID0+IFByb21pc2U8dm9pZD5cbiAgcHJpdmF0ZSBnZXRXYWl0RXhwZWN0ZWRUaW1lb3V0TGVuZ3RoOiAoKSA9PiBudW1iZXJcbiAgcHJpdmF0ZSBvbldhdGNoU3RhcnQ6IChcbiAgICBjbGllbnQ6IFZpcnR1YWxXZWJTb2NrZXRDbGllbnQsXG4gICAgcXVlcnlJRDogc3RyaW5nXG4gICkgPT4gdm9pZFxuICBwcml2YXRlIG9uV2F0Y2hDbG9zZTogKFxuICAgIGNsaWVudDogVmlydHVhbFdlYlNvY2tldENsaWVudCxcbiAgICBxdWVyeUlEOiBzdHJpbmdcbiAgKSA9PiB2b2lkXG4gIHByaXZhdGUgZGVidWc/OiBib29sZWFuXG5cbiAgcHJpdmF0ZSB3YXRjaFN0YXR1czogV0FUQ0hfU1RBVFVTID0gV0FUQ0hfU1RBVFVTLklOSVRJTkdcbiAgcHJpdmF0ZSBfYXZhaWxhYmxlUmV0cmllczogUGFydGlhbDxSZWNvcmQ8SVJlcXVlc3RNc2dUeXBlLCBudW1iZXI+PlxuICBwcml2YXRlIF9hY2tUaW1lb3V0SWQ/OiBudW1iZXJcbiAgcHJpdmF0ZSBfaW5pdFdhdGNoUHJvbWlzZT86IFByb21pc2U8dm9pZD5cbiAgcHJpdmF0ZSBfcmVidWlsZFdhdGNoUHJvbWlzZT86IFByb21pc2U8dm9pZD5cblxuICAvLyBvYnRhaW5lZFxuICBwcml2YXRlIHNlc3Npb25JbmZvPzogSVdhdGNoU2Vzc2lvbkluZm9cblxuICAvLyBpbnRlcm5hbFxuICBwcml2YXRlIF93YWl0RXhwZWN0ZWRUaW1lb3V0SWQ/OiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJVmlydHVhbFdlYlNvY2tldENsaWVudENvbnN0cnVjdG9yT3B0aW9ucykge1xuICAgIHRoaXMud2F0Y2hJZCA9IGB3YXRjaGlkXyR7K25ldyBEYXRlKCl9XyR7TWF0aC5yYW5kb20oKX1gXG4gICAgdGhpcy5lbnZJZCA9IG9wdGlvbnMuZW52SWRcbiAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gb3B0aW9ucy5jb2xsZWN0aW9uTmFtZVxuICAgIHRoaXMucXVlcnkgPSBvcHRpb25zLnF1ZXJ5XG4gICAgdGhpcy5saW1pdCA9IG9wdGlvbnMubGltaXRcbiAgICB0aGlzLm9yZGVyQnkgPSBvcHRpb25zLm9yZGVyQnlcbiAgICB0aGlzLnNlbmQgPSBvcHRpb25zLnNlbmRcbiAgICB0aGlzLmxvZ2luID0gb3B0aW9ucy5sb2dpblxuICAgIHRoaXMuaXNXU0Nvbm5lY3RlZCA9IG9wdGlvbnMuaXNXU0Nvbm5lY3RlZFxuICAgIHRoaXMub25jZVdTQ29ubmVjdGVkID0gb3B0aW9ucy5vbmNlV1NDb25uZWN0ZWRcbiAgICB0aGlzLmdldFdhaXRFeHBlY3RlZFRpbWVvdXRMZW5ndGggPSBvcHRpb25zLmdldFdhaXRFeHBlY3RlZFRpbWVvdXRMZW5ndGhcbiAgICB0aGlzLm9uV2F0Y2hTdGFydCA9IG9wdGlvbnMub25XYXRjaFN0YXJ0XG4gICAgdGhpcy5vbldhdGNoQ2xvc2UgPSBvcHRpb25zLm9uV2F0Y2hDbG9zZVxuICAgIHRoaXMuZGVidWcgPSBvcHRpb25zLmRlYnVnXG5cbiAgICB0aGlzLl9hdmFpbGFibGVSZXRyaWVzID0ge1xuICAgICAgSU5JVF9XQVRDSDogREVGQVVMVF9NQVhfQVVUT19SRVRSWV9PTl9FUlJPUixcbiAgICAgIFJFQlVJTERfV0FUQ0g6IERFRkFVTFRfTUFYX0FVVE9fUkVUUllfT05fRVJST1IsXG4gICAgICBDSEVDS19MQVNUOiBERUZBVUxUX01BWF9TRU5EX0FDS19BVVRPX1JFVFJZX09OX0VSUk9SXG4gICAgfVxuXG4gICAgdGhpcy5saXN0ZW5lciA9IG5ldyBSZWFsdGltZUxpc3RlbmVyKHtcbiAgICAgIGNsb3NlOiB0aGlzLmNsb3NlV2F0Y2gsXG4gICAgICBvbkNoYW5nZTogb3B0aW9ucy5vbkNoYW5nZSxcbiAgICAgIG9uRXJyb3I6IG9wdGlvbnMub25FcnJvcixcbiAgICAgIGRlYnVnOiB0aGlzLmRlYnVnLFxuICAgICAgdmlydHVhbENsaWVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmluaXRXYXRjaCgpXG4gIH1cblxuICBvbk1lc3NhZ2UobXNnOiBJUmVzcG9uc2VNZXNzYWdlKSB7XG4gICAgLy8gd2F0Y2hTdGF0dXMgc2FuaXR5IGNoZWNrXG4gICAgc3dpdGNoICh0aGlzLndhdGNoU3RhdHVzKSB7XG4gICAgICBjYXNlIFdBVENIX1NUQVRVUy5QQVVTRUQ6IHtcbiAgICAgICAgLy8gaWdub3JlIGFsbCBidXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICBpZiAobXNnLm1zZ1R5cGUgIT09ICdFUlJPUicpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSBXQVRDSF9TVEFUVVMuTE9HR0lOR0lOOlxuICAgICAgY2FzZSBXQVRDSF9TVEFUVVMuSU5JVElORzpcbiAgICAgIGNhc2UgV0FUQ0hfU1RBVFVTLlJFQlVJTERJTkc6IHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBbcmVhbHRpbWUgbGlzdGVuZXJdIGludGVybmFsIG5vbi1mYXRhbCBlcnJvcjogdW5leHBlY3RlZCBtZXNzYWdlIHJlY2VpdmVkIHdoaWxlICR7dGhpcy53YXRjaFN0YXR1c31gXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjYXNlIFdBVENIX1NUQVRVUy5DTE9TRUQ6IHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdbcmVhbHRpbWUgbGlzdGVuZXJdIGludGVybmFsIG5vbi1mYXRhbCBlcnJvcjogdW5leHBlY3RlZCBtZXNzYWdlIHJlY2VpdmVkIHdoZW4gdGhlIHdhdGNoIGhhcyBjbG9zZWQnXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjYXNlIFdBVENIX1NUQVRVUy5FUlJPUkVEOiB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnW3JlYWx0aW1lIGxpc3RlbmVyXSBpbnRlcm5hbCBub24tZmF0YWwgZXJyb3I6IHVuZXhwZWN0ZWQgbWVzc2FnZSByZWNlaXZlZCB3aGVuIHRoZSB3YXRjaCBoYXMgZW5kZWQgd2l0aCBlcnJvcidcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc2Vzc2lvbkluZm8pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1tyZWFsdGltZSBsaXN0ZW5lcl0gaW50ZXJuYWwgbm9uLWZhdGFsIGVycm9yOiBzZXNzaW9uSW5mbyBub3QgZm91bmQgd2hpbGUgbWVzc2FnZSBpcyByZWNlaXZlZC4nXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNjaGVkdWxlU2VuZEFDSygpXG5cbiAgICBzd2l0Y2ggKG1zZy5tc2dUeXBlKSB7XG4gICAgICBjYXNlICdORVhUX0VWRU5UJzoge1xuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAvLyBpZiAod3guX2lnbm9yZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYG5leHRldmVudCAke21zZy5tc2dEYXRhLmN1cnJFdmVudH0gaWdub3JlZGAsIG1zZylcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAvLyB3eC5faWdub3JlID0gZmFsc2VcbiAgICAgICAgLy8gcmV0dXJuXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlU2VydmVyRXZlbnRzKG1zZylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0NIRUNLX0VWRU5UJzoge1xuICAgICAgICBpZiAodGhpcy5zZXNzaW9uSW5mby5jdXJyZW50RXZlbnRJZCA8IG1zZy5tc2dEYXRhLmN1cnJFdmVudCkge1xuICAgICAgICAgIC8vIGNsaWVudCBldmVudElEIDwgc2VydmVyIGV2ZW50SUQ6XG4gICAgICAgICAgLy8gdGhlcmUgbWlnaHQgYmUgb25lIG9yIG1vcmUgcGVuZGluZyBldmVudHMgbm90IHlldCByZWNlaXZlZCBidXQgc2VudCBieSB0aGUgc2VydmVyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uSW5mby5leHBlY3RFdmVudElkID0gbXNnLm1zZ0RhdGEuY3VyckV2ZW50XG4gICAgICAgICAgdGhpcy5jbGVhcldhaXRFeHBlY3RlZEV2ZW50KClcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGhpcy5fd2FpdEV4cGVjdGVkVGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBtdXN0IHJlYnVpbGQgd2F0Y2hcbiAgICAgICAgICAgIHRoaXMucmVidWlsZFdhdGNoKClcbiAgICAgICAgICB9LCB0aGlzLmdldFdhaXRFeHBlY3RlZFRpbWVvdXRMZW5ndGgoKSlcblxuICAgICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYFtyZWFsdGltZV0gd2FpdEV4cGVjdGVkVGltZW91dExlbmd0aCAke3RoaXMuZ2V0V2FpdEV4cGVjdGVkVGltZW91dExlbmd0aCgpfWBcbiAgICAgICAgICApXG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdFUlJPUic6IHtcbiAgICAgICAgLy8gcmVjZWl2ZSBzZXJ2ZXIgZXJyb3JcbiAgICAgICAgdGhpcy5jbG9zZVdpdGhFcnJvcihcbiAgICAgICAgICBuZXcgQ2xvdWRTREtFcnJvcih7XG4gICAgICAgICAgICBlcnJDb2RlOiBFUlJfQ09ERS5TREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfU0VSVkVSX0VSUk9SX01TRyBhcyBzdHJpbmcsXG4gICAgICAgICAgICBlcnJNc2c6IGAke21zZy5tc2dEYXRhLmNvZGV9IC0gJHttc2cubXNnRGF0YS5tZXNzYWdlfWBcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYFtyZWFsdGltZSBsaXN0ZW5lcl0gdmlydHVhbCBjbGllbnQgcmVjZWl2ZSB1bmV4cGVjdGVkIG1zZyAke21zZy5tc2dUeXBlfTogYCxcbiAgICAgICAgICBtc2dcbiAgICAgICAgKVxuICAgICAgICAvLyB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2VXaXRoRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIHRoaXMud2F0Y2hTdGF0dXMgPSBXQVRDSF9TVEFUVVMuRVJST1JFRFxuICAgIHRoaXMuY2xlYXJBQ0tTY2hlZHVsZSgpXG4gICAgdGhpcy5saXN0ZW5lci5vbkVycm9yKGVycm9yKVxuICAgIC8vIFJlcG9ydGVyLnN1cnJvdW5kVGhpcmRCeVRyeUNhdGNoKCgpID0+IHRoaXMubGlzdGVuZXIub25FcnJvcihlcnJvcikpXG4gICAgdGhpcy5vbldhdGNoQ2xvc2UoXG4gICAgICB0aGlzLFxuICAgICAgKHRoaXMuc2Vzc2lvbkluZm8gJiYgdGhpcy5zZXNzaW9uSW5mby5xdWVyeUlEKSB8fCAnJ1xuICAgIClcblxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFtyZWFsdGltZV0gY2xpZW50IGNsb3NlZCAoJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSAke3RoaXMucXVlcnl9KSAod2F0Y2hJZCAke3RoaXMud2F0Y2hJZH0pYFxuICAgIClcbiAgICAvLyB9XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICB0aGlzLndhdGNoU3RhdHVzID0gV0FUQ0hfU1RBVFVTLlBBVVNFRFxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFtyZWFsdGltZV0gY2xpZW50IHBhdXNlZCAoJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSAke3RoaXMucXVlcnl9KSAod2F0Y2hJZCAke3RoaXMud2F0Y2hJZH0pYFxuICAgIClcbiAgICAvLyB9XG4gIH1cblxuICAvLyByZXN1bWUoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuc2Vzc2lvbkluZm8gPyB0aGlzLnJlYnVpbGRXYXRjaCgpIDogdGhpcy5pbml0V2F0Y2goKVxuICAvLyB9XG5cbiAgYXN5bmMgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMud2F0Y2hTdGF0dXMgPSBXQVRDSF9TVEFUVVMuUkVTVU1JTkdcblxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFtyZWFsdGltZV0gY2xpZW50IHJlc3VtaW5nIHdpdGggJHtcbiAgICAgICAgdGhpcy5zZXNzaW9uSW5mbyA/ICdSRUJVSUxEX1dBVENIJyA6ICdJTklUX1dBVENIJ1xuICAgICAgfSAoJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSAke3RoaXMucXVlcnl9KSAoJHt0aGlzLndhdGNoSWR9KWBcbiAgICApXG4gICAgLy8gfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0ICh0aGlzLnNlc3Npb25JbmZvID8gdGhpcy5yZWJ1aWxkV2F0Y2goKSA6IHRoaXMuaW5pdFdhdGNoKCkpXG5cbiAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBbcmVhbHRpbWVdIGNsaWVudCBzdWNjZXNzZnVsbHkgcmVzdW1lZCAoJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSAke3RoaXMucXVlcnl9KSAoJHt0aGlzLndhdGNoSWR9KWBcbiAgICAgIClcbiAgICAgIC8vIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBbcmVhbHRpbWVdIGNsaWVudCByZXN1bWUgZmFpbGVkICgke3RoaXMuY29sbGVjdGlvbk5hbWV9ICR7dGhpcy5xdWVyeX0pICgke3RoaXMud2F0Y2hJZH0pYCxcbiAgICAgICAgZVxuICAgICAgKVxuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xvZ2luID0gYXN5bmMgKFxuICAgIGVudklkPzogc3RyaW5nLFxuICAgIHJlZnJlc2g/OiBib29sZWFuXG4gICk6IFByb21pc2U8SUxvZ2luUmVzdWx0PiA9PiB7XG4gICAgdGhpcy53YXRjaFN0YXR1cyA9IFdBVENIX1NUQVRVUy5MT0dHSU5HSU5cbiAgICBjb25zdCBsb2dpblJlc3VsdCA9IGF3YWl0IHRoaXMubG9naW4oZW52SWQsIHJlZnJlc2gpXG4gICAgaWYgKCF0aGlzLmVudklkKSB7XG4gICAgICB0aGlzLmVudklkID0gbG9naW5SZXN1bHQuZW52SWRcbiAgICB9XG4gICAgcmV0dXJuIGxvZ2luUmVzdWx0XG4gIH1cblxuICBwcml2YXRlIGluaXRXYXRjaCA9IGFzeW5jIChmb3JjZVJlZnJlc2hMb2dpbj86IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBpZiAodGhpcy5faW5pdFdhdGNoUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXRXYXRjaFByb21pc2VcbiAgICB9XG5cbiAgICB0aGlzLl9pbml0V2F0Y2hQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oXG4gICAgICBhc3luYyAocmVzb2x2ZSwgcmVqZWN0KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHRoaXMud2F0Y2hTdGF0dXMgPT09IFdBVENIX1NUQVRVUy5QQVVTRUQpIHtcbiAgICAgICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tyZWFsdGltZV0gaW5pdFdhdGNoIGNhbmNlbGxlZCBvbiBwYXVzZScpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgeyBlbnZJZCB9ID0gYXdhaXQgdGhpcy5fbG9naW4odGhpcy5lbnZJZCwgZm9yY2VSZWZyZXNoTG9naW4pXG5cbiAgICAgICAgICAvLyBpZiAoIXRoaXMuc2Vzc2lvbkluZm8pIHtcbiAgICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihgY2FuIG5vdCByZWJ1aWxkV2F0Y2ggd2l0aG91dCBhIHN1Y2Nlc3NmdWwgaW5pdFdhdGNoIChsYWNrIG9mIHNlc3Npb25JbmZvKWApXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgaWYgKCh0aGlzLndhdGNoU3RhdHVzIGFzIFdBVENIX1NUQVRVUykgPT09IFdBVENIX1NUQVRVUy5QQVVTRUQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbcmVhbHRpbWVdIGluaXRXYXRjaCBjYW5jZWxsZWQgb24gcGF1c2UnKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMud2F0Y2hTdGF0dXMgPSBXQVRDSF9TVEFUVVMuSU5JVElOR1xuXG4gICAgICAgICAgY29uc3QgaW5pdFdhdGNoTXNnOiBJUmVxdWVzdE1lc3NhZ2VJbml0V2F0Y2hNc2cgPSB7XG4gICAgICAgICAgICB3YXRjaElkOiB0aGlzLndhdGNoSWQsXG4gICAgICAgICAgICByZXF1ZXN0SWQ6IGdlblJlcXVlc3RJZCgpLFxuICAgICAgICAgICAgbXNnVHlwZTogJ0lOSVRfV0FUQ0gnLFxuICAgICAgICAgICAgbXNnRGF0YToge1xuICAgICAgICAgICAgICBlbnZJZCxcbiAgICAgICAgICAgICAgY29sbE5hbWU6IHRoaXMuY29sbGVjdGlvbk5hbWUsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgICAgICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgICAgICAgICAgb3JkZXJCeTogdGhpcy5vcmRlckJ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaW5pdEV2ZW50TXNnID0gYXdhaXQgdGhpcy5zZW5kPElSZXNwb25zZU1lc3NhZ2VJbml0RXZlbnRNc2c+KHtcbiAgICAgICAgICAgIG1zZzogaW5pdFdhdGNoTXNnLFxuICAgICAgICAgICAgd2FpdFJlc3BvbnNlOiB0cnVlLFxuICAgICAgICAgICAgc2tpcE9uTWVzc2FnZTogdHJ1ZSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IERFRkFVTFRfSU5JVF9XQVRDSF9USU1FT1VUXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IHsgZXZlbnRzLCBjdXJyRXZlbnQgfSA9IGluaXRFdmVudE1zZy5tc2dEYXRhXG5cbiAgICAgICAgICB0aGlzLnNlc3Npb25JbmZvID0ge1xuICAgICAgICAgICAgcXVlcnlJRDogaW5pdEV2ZW50TXNnLm1zZ0RhdGEucXVlcnlJRCxcbiAgICAgICAgICAgIGN1cnJlbnRFdmVudElkOiBjdXJyRXZlbnQgLSAxLFxuICAgICAgICAgICAgY3VycmVudERvY3M6IFtdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRklYOiBpbiBpbml0RXZlbnQgbWVzc2FnZSwgYWxsIGV2ZW50cyBoYXZlIGlkIDAsIHdoaWNoIGlzIGluY29uc2lzdGVudCB3aXRoIGN1cnJFdmVudFxuICAgICAgICAgIGlmIChldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xuICAgICAgICAgICAgICBlLklEID0gY3VyckV2ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNlcnZlckV2ZW50cyhpbml0RXZlbnRNc2cpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkluZm8uY3VycmVudEV2ZW50SWQgPSBjdXJyRXZlbnRcbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IFNuYXBzaG90KHtcbiAgICAgICAgICAgICAgaWQ6IGN1cnJFdmVudCxcbiAgICAgICAgICAgICAgZG9jQ2hhbmdlczogW10sXG4gICAgICAgICAgICAgIGRvY3M6IFtdLFxuICAgICAgICAgICAgICB0eXBlOiAnaW5pdCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyLm9uQ2hhbmdlKHNuYXBzaG90KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVNlbmRBQ0soKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm9uV2F0Y2hTdGFydCh0aGlzLCB0aGlzLnNlc3Npb25JbmZvLnF1ZXJ5SUQpXG4gICAgICAgICAgdGhpcy53YXRjaFN0YXR1cyA9IFdBVENIX1NUQVRVUy5BQ1RJVkVcbiAgICAgICAgICB0aGlzLl9hdmFpbGFibGVSZXRyaWVzLklOSVRfV0FUQ0ggPSBERUZBVUxUX01BWF9BVVRPX1JFVFJZX09OX0VSUk9SXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVdhdGNoRXN0YWJsaXNobWVudEVycm9yKGUsIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6ICdJTklUX1dBVENIJyxcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX2luaXRXYXRjaFByb21pc2VcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2luaXRXYXRjaFByb21pc2UgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBjb25zb2xlLmxvZyhgW3JlYWx0aW1lXSBpbml0V2F0Y2ggJHtzdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2ZhaWwnfWApXG4gICAgLy8gfVxuICB9XG5cbiAgcHJpdmF0ZSByZWJ1aWxkV2F0Y2ggPSBhc3luYyAoZm9yY2VSZWZyZXNoTG9naW4/OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKHRoaXMuX3JlYnVpbGRXYXRjaFByb21pc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWJ1aWxkV2F0Y2hQcm9taXNlXG4gICAgfVxuXG4gICAgdGhpcy5fcmVidWlsZFdhdGNoUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KFxuICAgICAgYXN5bmMgKHJlc29sdmUsIHJlamVjdCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh0aGlzLndhdGNoU3RhdHVzID09PSBXQVRDSF9TVEFUVVMuUEFVU0VEKSB7XG4gICAgICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbcmVhbHRpbWVdIHJlYnVpbGRXYXRjaCBjYW5jZWxsZWQgb24gcGF1c2UnKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IGVudklkIH0gPSBhd2FpdCB0aGlzLl9sb2dpbih0aGlzLmVudklkLCBmb3JjZVJlZnJlc2hMb2dpbilcblxuICAgICAgICAgIGlmICghdGhpcy5zZXNzaW9uSW5mbykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAnY2FuIG5vdCByZWJ1aWxkV2F0Y2ggd2l0aG91dCBhIHN1Y2Nlc3NmdWwgaW5pdFdhdGNoIChsYWNrIG9mIHNlc3Npb25JbmZvKSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoKHRoaXMud2F0Y2hTdGF0dXMgYXMgV0FUQ0hfU1RBVFVTKSA9PT0gV0FUQ0hfU1RBVFVTLlBBVVNFRCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tyZWFsdGltZV0gcmVidWlsZFdhdGNoIGNhbmNlbGxlZCBvbiBwYXVzZScpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy53YXRjaFN0YXR1cyA9IFdBVENIX1NUQVRVUy5SRUJVSUxESU5HXG5cbiAgICAgICAgICBjb25zdCByZWJ1aWxkV2F0Y2hNc2c6IElSZXF1ZXN0TWVzc2FnZVJlYnVpbGRXYXRjaE1zZyA9IHtcbiAgICAgICAgICAgIHdhdGNoSWQ6IHRoaXMud2F0Y2hJZCxcbiAgICAgICAgICAgIHJlcXVlc3RJZDogZ2VuUmVxdWVzdElkKCksXG4gICAgICAgICAgICBtc2dUeXBlOiAnUkVCVUlMRF9XQVRDSCcsXG4gICAgICAgICAgICBtc2dEYXRhOiB7XG4gICAgICAgICAgICAgIGVudklkLFxuICAgICAgICAgICAgICBjb2xsTmFtZTogdGhpcy5jb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgcXVlcnlJRDogdGhpcy5zZXNzaW9uSW5mby5xdWVyeUlELFxuICAgICAgICAgICAgICBldmVudElEOiB0aGlzLnNlc3Npb25JbmZvLmN1cnJlbnRFdmVudElkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV4dEV2ZW50TXNnID0gYXdhaXQgdGhpcy5zZW5kPElSZXNwb25zZU1lc3NhZ2VOZXh0RXZlbnRNc2c+KHtcbiAgICAgICAgICAgIG1zZzogcmVidWlsZFdhdGNoTXNnLFxuICAgICAgICAgICAgd2FpdFJlc3BvbnNlOiB0cnVlLFxuICAgICAgICAgICAgc2tpcE9uTWVzc2FnZTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lb3V0OiBERUZBVUxUX1JFQlVJTERfV0FUQ0hfVElNRU9VVFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICB0aGlzLmhhbmRsZVNlcnZlckV2ZW50cyhuZXh0RXZlbnRNc2cpXG5cbiAgICAgICAgICB0aGlzLndhdGNoU3RhdHVzID0gV0FUQ0hfU1RBVFVTLkFDVElWRVxuICAgICAgICAgIHRoaXMuX2F2YWlsYWJsZVJldHJpZXMuUkVCVUlMRF9XQVRDSCA9IERFRkFVTFRfTUFYX0FVVE9fUkVUUllfT05fRVJST1JcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMuaGFuZGxlV2F0Y2hFc3RhYmxpc2htZW50RXJyb3IoZSwge1xuICAgICAgICAgICAgb3BlcmF0aW9uTmFtZTogJ1JFQlVJTERfV0FUQ0gnLFxuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG5cbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlXG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fcmVidWlsZFdhdGNoUHJvbWlzZVxuICAgICAgc3VjY2VzcyA9IHRydWVcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fcmVidWlsZFdhdGNoUHJvbWlzZSA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGNvbnNvbGUubG9nKGBbcmVhbHRpbWVdIHJlYnVpbGRXYXRjaCAke3N1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZmFpbCd9YClcbiAgICAvLyB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVdhdGNoRXN0YWJsaXNobWVudEVycm9yID0gYXN5bmMgKFxuICAgIGU6IGFueSxcbiAgICBvcHRpb25zOiBJSGFuZGxlV2F0Y2hFc3RhYmxpc2htZW50RXJyb3JPcHRpb25zXG4gICkgPT4ge1xuICAgIGNvbnN0IGlzSW5pdFdhdGNoID0gb3B0aW9ucy5vcGVyYXRpb25OYW1lID09PSAnSU5JVF9XQVRDSCdcblxuICAgIGNvbnN0IGFib3J0V2F0Y2ggPSAoKSA9PiB7XG4gICAgICAvLyBtb2NrIHRlbXAgY29tbWVudFxuICAgICAgdGhpcy5jbG9zZVdpdGhFcnJvcihcbiAgICAgICAgbmV3IENsb3VkU0RLRXJyb3Ioe1xuICAgICAgICAgIGVyckNvZGU6IGlzSW5pdFdhdGNoXG4gICAgICAgICAgICA/IChFUlJfQ09ERS5TREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfSU5JVF9XQVRDSF9GQUlMIGFzIHN0cmluZylcbiAgICAgICAgICAgIDogKEVSUl9DT0RFLlNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9SRUJVSUxEX1dBVENIX0ZBSUwgYXMgc3RyaW5nKSxcbiAgICAgICAgICBlcnJNc2c6IGVcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIG9wdGlvbnMucmVqZWN0KGUpXG4gICAgfVxuXG4gICAgY29uc3QgcmV0cnkgPSAocmVmcmVzaExvZ2luPzogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHRoaXMudXNlUmV0cnlUaWNrZXQob3B0aW9ucy5vcGVyYXRpb25OYW1lKSkge1xuICAgICAgICBpZiAoaXNJbml0V2F0Y2gpIHtcbiAgICAgICAgICB0aGlzLl9pbml0V2F0Y2hQcm9taXNlID0gdW5kZWZpbmVkXG4gICAgICAgICAgb3B0aW9ucy5yZXNvbHZlKHRoaXMuaW5pdFdhdGNoKHJlZnJlc2hMb2dpbikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVidWlsZFdhdGNoUHJvbWlzZSA9IHVuZGVmaW5lZFxuICAgICAgICAgIG9wdGlvbnMucmVzb2x2ZSh0aGlzLnJlYnVpbGRXYXRjaChyZWZyZXNoTG9naW4pKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhYm9ydFdhdGNoKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUNvbW1vbkVycm9yKGUsIHtcbiAgICAgIG9uU2lnbkVycm9yOiAoKSA9PiByZXRyeSh0cnVlKSxcbiAgICAgIG9uVGltZW91dEVycm9yOiAoKSA9PiByZXRyeShmYWxzZSksXG4gICAgICBvbk5vdFJldHJ5YWJsZUVycm9yOiBhYm9ydFdhdGNoLFxuICAgICAgb25DYW5jZWxsZWRFcnJvcjogb3B0aW9ucy5yZWplY3QsXG4gICAgICBvblVua25vd25FcnJvcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG9uV1NEaXNjb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlKClcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub25jZVdTQ29ubmVjdGVkKClcbiAgICAgICAgICAgIHJldHJ5KHRydWUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF0aGlzLmlzV1NDb25uZWN0ZWQoKSkge1xuICAgICAgICAgICAgYXdhaXQgb25XU0Rpc2Nvbm5lY3RlZCgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKERFRkFVTFRfV0FJVF9USU1FX09OX1VOS05PV05fRVJST1IpXG4gICAgICAgICAgICBpZiAodGhpcy53YXRjaFN0YXR1cyA9PT0gV0FUQ0hfU1RBVFVTLlBBVVNFRCkge1xuICAgICAgICAgICAgICAvLyBjYW5jZWxcbiAgICAgICAgICAgICAgb3B0aW9ucy5yZWplY3QoXG4gICAgICAgICAgICAgICAgbmV3IENhbmNlbGxlZEVycm9yKFxuICAgICAgICAgICAgICAgICAgYCR7b3B0aW9ucy5vcGVyYXRpb25OYW1lfSBjYW5jZWxsZWQgZHVlIHRvIHBhdXNlIGFmdGVyIHVua25vd25FcnJvcmBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNXU0Nvbm5lY3RlZCgpKSB7XG4gICAgICAgICAgICAgIGF3YWl0IG9uV1NEaXNjb25uZWN0ZWQoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0cnkoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCBlcnJvciB3aGlsZSBoYW5kbGluZyBlcnJvciwgaW4gb3JkZXIgdG8gcHJvdmlkZSBtYXhpbXVtIGVmZm9ydCBvbiBTRUFNSU5HTEVTUyBGQVVMVCBUT0xFUkFOQ0UsIGp1c3QgcmV0cnlcbiAgICAgICAgICByZXRyeSh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VXYXRjaCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBxdWVyeUlkID0gdGhpcy5zZXNzaW9uSW5mbyA/IHRoaXMuc2Vzc2lvbkluZm8ucXVlcnlJRCA6ICcnXG5cbiAgICBpZiAodGhpcy53YXRjaFN0YXR1cyAhPT0gV0FUQ0hfU1RBVFVTLkFDVElWRSkge1xuICAgICAgdGhpcy53YXRjaFN0YXR1cyA9IFdBVENIX1NUQVRVUy5DTE9TRURcbiAgICAgIHRoaXMub25XYXRjaENsb3NlKHRoaXMsIHF1ZXJ5SWQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy53YXRjaFN0YXR1cyA9IFdBVENIX1NUQVRVUy5DTE9TSU5HXG5cbiAgICAgIGNvbnN0IGNsb3NlV2F0Y2hNc2c6IElSZXF1ZXN0TWVzc2FnZUNsb3NlV2F0Y2hNc2cgPSB7XG4gICAgICAgIHdhdGNoSWQ6IHRoaXMud2F0Y2hJZCxcbiAgICAgICAgcmVxdWVzdElkOiBnZW5SZXF1ZXN0SWQoKSxcbiAgICAgICAgbXNnVHlwZTogJ0NMT1NFX1dBVENIJyxcbiAgICAgICAgbXNnRGF0YTogbnVsbFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNlbmQoe1xuICAgICAgICBtc2c6IGNsb3NlV2F0Y2hNc2dcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc2Vzc2lvbkluZm8gPSB1bmRlZmluZWRcbiAgICAgIHRoaXMud2F0Y2hTdGF0dXMgPSBXQVRDSF9TVEFUVVMuQ0xPU0VEXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5jbG9zZVdpdGhFcnJvcihcbiAgICAgICAgbmV3IENsb3VkU0RLRXJyb3Ioe1xuICAgICAgICAgIGVyckNvZGU6IEVSUl9DT0RFLlNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9DTE9TRV9XQVRDSF9GQUlMIGFzIHN0cmluZyxcbiAgICAgICAgICBlcnJNc2c6IGVcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5vbldhdGNoQ2xvc2UodGhpcywgcXVlcnlJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjaGVkdWxlU2VuZEFDSyA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFyQUNLU2NoZWR1bGUoKVxuXG4gICAgLy8gVE9ETzogc2hvdWxkIHdlIGNoZWNrIHN0YXR1cyBhZnRlciB0aW1lb3V0XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuX2Fja1RpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3dhaXRFeHBlY3RlZFRpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlU2VuZEFDSygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbmRBQ0soKVxuICAgICAgfVxuICAgIH0sIERFRkFVTFRfU0VORF9BQ0tfREVCT1VOQ0VfVElNRU9VVClcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJBQ0tTY2hlZHVsZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5fYWNrVGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYWNrVGltZW91dElkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VuZEFDSyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMud2F0Y2hTdGF0dXMgIT09IFdBVENIX1NUQVRVUy5BQ1RJVkUpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVNlbmRBQ0soKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnNlc3Npb25JbmZvKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnW3JlYWx0aW1lIGxpc3RlbmVyXSBjYW4gbm90IHNlbmQgYWNrIHdpdGhvdXQgYSBzdWNjZXNzZnVsIGluaXRXYXRjaCAobGFjayBvZiBzZXNzaW9uSW5mbyknXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFja01zZzogSVJlcXVlc3RNZXNzYWdlQ2hlY2tMYXN0TXNnID0ge1xuICAgICAgICB3YXRjaElkOiB0aGlzLndhdGNoSWQsXG4gICAgICAgIHJlcXVlc3RJZDogZ2VuUmVxdWVzdElkKCksXG4gICAgICAgIG1zZ1R5cGU6ICdDSEVDS19MQVNUJyxcbiAgICAgICAgbXNnRGF0YToge1xuICAgICAgICAgIHF1ZXJ5SUQ6IHRoaXMuc2Vzc2lvbkluZm8ucXVlcnlJRCxcbiAgICAgICAgICBldmVudElEOiB0aGlzLnNlc3Npb25JbmZvLmN1cnJlbnRFdmVudElkXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZW5kKHtcbiAgICAgICAgbXNnOiBhY2tNc2dcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc2NoZWR1bGVTZW5kQUNLKClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPOiByZWZhY3RvclxuICAgICAgaWYgKGlzUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvcihlKSkge1xuICAgICAgICBjb25zdCBtc2cgPSBlLnBheWxvYWRcbiAgICAgICAgc3dpdGNoIChtc2cubXNnRGF0YS5jb2RlKSB7XG4gICAgICAgICAgLy8gc2lnbmF0dXJlIGVycm9yIC0+IHJldHJ5IHdpdGggcmVmcmVzaGVkIHNpZ25hdHVyZVxuICAgICAgICAgIGNhc2UgJ0NIRUNLX0xPR0lOX0ZBSUxFRCc6XG4gICAgICAgICAgY2FzZSAnU0lHTl9FWFBJUkVEX0VSUk9SJzpcbiAgICAgICAgICBjYXNlICdTSUdOX0lOVkFMSURfRVJST1InOlxuICAgICAgICAgIGNhc2UgJ1NJR05fUEFSQU1fSU5WQUxJRCc6IHtcbiAgICAgICAgICAgIHRoaXMucmVidWlsZFdhdGNoKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBvdGhlciAtPiB0aHJvd1xuICAgICAgICAgIGNhc2UgJ1FVRVJZSURfSU5WQUxJRF9FUlJPUic6XG4gICAgICAgICAgY2FzZSAnU1lTX0VSUic6XG4gICAgICAgICAgY2FzZSAnSU5WQUxJSURfRU5WJzpcbiAgICAgICAgICBjYXNlICdDT0xMRUNUSU9OX1BFUk1JU1NJT05fREVOSUVEJzoge1xuICAgICAgICAgICAgLy8gbXVzdCB0aHJvd1xuICAgICAgICAgICAgdGhpcy5jbG9zZVdpdGhFcnJvcihcbiAgICAgICAgICAgICAgbmV3IENsb3VkU0RLRXJyb3Ioe1xuICAgICAgICAgICAgICAgIGVyckNvZGU6IEVSUl9DT0RFLlNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9DSEVDS19MQVNUX0ZBSUwgYXMgc3RyaW5nLFxuICAgICAgICAgICAgICAgIGVyck1zZzogbXNnLm1zZ0RhdGEuY29kZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIG1heWJlIHJldHJ5YWJsZVxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9hdmFpbGFibGVSZXRyaWVzLkNIRUNLX0xBU1QgJiZcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlUmV0cmllcy5DSEVDS19MQVNUID4gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZVJldHJpZXMuQ0hFQ0tfTEFTVC0tXG4gICAgICAgIHRoaXMuc2NoZWR1bGVTZW5kQUNLKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VXaXRoRXJyb3IoXG4gICAgICAgICAgbmV3IENsb3VkU0RLRXJyb3Ioe1xuICAgICAgICAgICAgZXJyQ29kZTogRVJSX0NPREUuU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX0NIRUNLX0xBU1RfRkFJTCBhcyBzdHJpbmcsXG4gICAgICAgICAgICBlcnJNc2c6IGVcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21tb25FcnJvciA9IChcbiAgICBlOiBhbnksXG4gICAgb3B0aW9uczogSUhhbmRsZUNvbW1vbkVycm9yT3B0aW9uc1xuICApOiB2b2lkID0+IHtcbiAgICBpZiAoaXNSZWFsdGltZUVycm9yTWVzc2FnZUVycm9yKGUpKSB7XG4gICAgICBjb25zdCBtc2cgPSBlLnBheWxvYWRcbiAgICAgIHN3aXRjaCAobXNnLm1zZ0RhdGEuY29kZSkge1xuICAgICAgICAvLyBzaWduYXR1cmUgZXJyb3IgLT4gcmV0cnkgd2l0aCByZWZyZXNoZWQgc2lnbmF0dXJlXG4gICAgICAgIGNhc2UgJ0NIRUNLX0xPR0lOX0ZBSUxFRCc6XG4gICAgICAgIGNhc2UgJ1NJR05fRVhQSVJFRF9FUlJPUic6XG4gICAgICAgIGNhc2UgJ1NJR05fSU5WQUxJRF9FUlJPUic6XG4gICAgICAgIGNhc2UgJ1NJR05fUEFSQU1fSU5WQUxJRCc6IHtcbiAgICAgICAgICBvcHRpb25zLm9uU2lnbkVycm9yKGUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gbm90LXJldHJ5YWJsZSBlcnJvciAtPiB0aHJvd1xuICAgICAgICBjYXNlICdRVUVSWUlEX0lOVkFMSURfRVJST1InOlxuICAgICAgICBjYXNlICdTWVNfRVJSJzpcbiAgICAgICAgY2FzZSAnSU5WQUxJSURfRU5WJzpcbiAgICAgICAgY2FzZSAnQ09MTEVDVElPTl9QRVJNSVNTSU9OX0RFTklFRCc6IHtcbiAgICAgICAgICBvcHRpb25zLm9uTm90UmV0cnlhYmxlRXJyb3IoZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgb3B0aW9ucy5vbk5vdFJldHJ5YWJsZUVycm9yKGUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVGltZW91dEVycm9yKGUpKSB7XG4gICAgICAvLyB0aW1lb3V0IGVycm9yXG4gICAgICBvcHRpb25zLm9uVGltZW91dEVycm9yKGUpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKGlzQ2FuY2VsbGVkRXJyb3IoZSkpIHtcbiAgICAgIC8vIGNhbmNlbGxlZCBlcnJvclxuICAgICAgb3B0aW9ucy5vbkNhbmNlbGxlZEVycm9yKGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB1bmtub3duIGVycm9yXG4gICAgb3B0aW9ucy5vblVua25vd25FcnJvcihlKVxuICB9XG5cbiAgLy8gY3JlZGl0IGEgcmV0cnkgY2hhbmNlIGZyb20gYXZhaWxhYmxlUmV0cmllc1xuICBwcml2YXRlIHVzZVJldHJ5VGlja2V0KG9wZXJhdGlvbk5hbWU6IElSZXF1ZXN0TXNnVHlwZSk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHRoaXMuX2F2YWlsYWJsZVJldHJpZXNbb3BlcmF0aW9uTmFtZV0gJiZcbiAgICAgIHRoaXMuX2F2YWlsYWJsZVJldHJpZXNbb3BlcmF0aW9uTmFtZV0hID4gMFxuICAgICkge1xuICAgICAgdGhpcy5fYXZhaWxhYmxlUmV0cmllc1tvcGVyYXRpb25OYW1lXSEtLVxuXG4gICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgW3JlYWx0aW1lXSAke29wZXJhdGlvbk5hbWV9IHVzZSBhIHJldHJ5IHRpY2tldCwgbm93IG9ubHkgJHt0aGlzLl9hdmFpbGFibGVSZXRyaWVzW29wZXJhdGlvbk5hbWVdfSByZXRyeSBsZWZ0YFxuICAgICAgKVxuICAgICAgLy8gfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlU2VydmVyRXZlbnRzKFxuICAgIG1zZzogSVJlc3BvbnNlTWVzc2FnZUluaXRFdmVudE1zZyB8IElSZXNwb25zZU1lc3NhZ2VOZXh0RXZlbnRNc2dcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2NoZWR1bGVTZW5kQUNLKClcbiAgICAgIGF3YWl0IHRoaXMuX2hhbmRsZVNlcnZlckV2ZW50cyhtc2cpXG4gICAgICB0aGlzLl9wb3N0SGFuZGxlU2VydmVyRXZlbnRzVmFsaWRpdHlDaGVjayhtc2cpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICAvLyBUT0RPOiByZXBvcnRcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdbcmVhbHRpbWUgbGlzdGVuZXJdIGludGVybmFsIG5vbi1mYXRhbCBlcnJvcjogaGFuZGxlIHNlcnZlciBldmVudHMgZmFpbGVkIHdpdGggZXJyb3I6ICcsXG4gICAgICAgIGVcbiAgICAgIClcblxuICAgICAgLy8gd3JpdGVUb0ZpbGUoXG4gICAgICAvLyAgIFwid3NlcnJvci50eHRcIixcbiAgICAgIC8vICAgYFtyZWFsdGltZSBsaXN0ZW5lcl0gaW50ZXJuYWwgbm9uLWZhdGFsIGVycm9yOiBoYW5kbGUgc2VydmVyIGV2ZW50cyBmYWlsZWQgd2l0aCBlcnJvcjogICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAvLyAgICAgT2JqZWN0LmFzc2lnbih7fSwgZSwge1xuICAgICAgLy8gICAgICAgcmVxdWVzdElkOiBtc2cucmVxdWVzdElkLFxuICAgICAgLy8gICAgICAgd2F0Y2hJZDogbXNnLndhdGNoSWRcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICApfSBcXG5gXG4gICAgICAvLyApXG4gICAgICAvLyB9XG5cbiAgICAgIHRocm93IGVcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVTZXJ2ZXJFdmVudHMoXG4gICAgbXNnOiBJUmVzcG9uc2VNZXNzYWdlSW5pdEV2ZW50TXNnIHwgSVJlc3BvbnNlTWVzc2FnZU5leHRFdmVudE1zZ1xuICApIHtcbiAgICBjb25zdCB7IHJlcXVlc3RJZCB9ID0gbXNnXG5cbiAgICBjb25zdCB7IGV2ZW50cyB9ID0gbXNnLm1zZ0RhdGFcbiAgICBjb25zdCB7IG1zZ1R5cGUgfSA9IG1zZ1xuXG4gICAgaWYgKCFldmVudHMubGVuZ3RoIHx8ICF0aGlzLnNlc3Npb25JbmZvKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzZXNzaW9uSW5mbyA9IHRoaXMuc2Vzc2lvbkluZm9cblxuICAgIGxldCBhbGxDaGFuZ2VFdmVudHM6IElTaW5nbGVEQkV2ZW50W11cbiAgICB0cnkge1xuICAgICAgYWxsQ2hhbmdlRXZlbnRzID0gZXZlbnRzLm1hcChnZXRQdWJsaWNFdmVudClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmNsb3NlV2l0aEVycm9yKFxuICAgICAgICBuZXcgQ2xvdWRTREtFcnJvcih7XG4gICAgICAgICAgZXJyQ29kZTogRVJSX0NPREUuU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1JFQ0VJVkVfSU5WQUxJRF9TRVJWRVJfREFUQSBhcyBzdHJpbmcsXG4gICAgICAgICAgZXJyTXNnOiBlXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBhZ2dyZWdhdGUgZG9jc1xuICAgIGxldCBkb2NzID0gWy4uLnNlc3Npb25JbmZvLmN1cnJlbnREb2NzXVxuICAgIGxldCBpbml0RW5jb3VudGVyZWQgPSBmYWxzZVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhbGxDaGFuZ2VFdmVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYW5nZSA9IGFsbENoYW5nZUV2ZW50c1tpXVxuXG4gICAgICBpZiAoc2Vzc2lvbkluZm8uY3VycmVudEV2ZW50SWQgPj0gY2hhbmdlLmlkKSB7XG4gICAgICAgIGlmICghYWxsQ2hhbmdlRXZlbnRzW2kgLSAxXSB8fCBjaGFuZ2UuaWQgPiBhbGxDaGFuZ2VFdmVudHNbaSAtIDFdLmlkKSB7XG4gICAgICAgICAgLy8gZHVwbGljYXRlIGV2ZW50LCBkcm9wYWJsZVxuICAgICAgICAgIC8vIFRPRE86IHJlcG9ydFxuICAgICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBbcmVhbHRpbWVdIGR1cGxpY2F0ZSBldmVudCByZWNlaXZlZCwgY3VyICR7c2Vzc2lvbkluZm8uY3VycmVudEV2ZW50SWR9IGJ1dCBnb3QgJHtjaGFuZ2UuaWR9YFxuICAgICAgICAgIClcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYWxsQ2hhbmdlRXZlbnRzIHNob3VsZCBiZSBpbiBhc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGV2ZW50SWQsIHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbnMsIG11c3QgcmVwb3J0IGEgbm9uLWZhdGFsIGVycm9yXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBbcmVhbHRpbWUgbGlzdGVuZXJdIHNlcnZlciBub24tZmF0YWwgZXJyb3I6IGV2ZW50cyBvdXQgb2Ygb3JkZXIgKHRoZSBsYXR0ZXIgZXZlbnQncyBpZCBpcyBzbWFsbGVyIHRoYW4gdGhhdCBvZiB0aGUgZm9ybWVyKSAocmVxdWVzdElkICR7cmVxdWVzdElkfSlgXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gd3JpdGVUb0ZpbGUoXG4gICAgICAgICAgLy8gICBcIndzZXJyb3IudHh0XCIsXG4gICAgICAgICAgLy8gICBgW3JlYWx0aW1lIGxpc3RlbmVyXSBzZXJ2ZXIgbm9uLWZhdGFsIGVycm9yOiBldmVudHMgb3V0IG9mIG9yZGVyICh0aGUgbGF0dGVyIGV2ZW50J3MgaWQgaXMgc21hbGxlciB0aGFuIHRoYXQgb2YgdGhlIGZvcm1lcikgICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgLy8gICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgLy8gICAgICAge30sXG4gICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgIC8vICAgICAgICAgcmVxdWVzdElkOiBtc2cucmVxdWVzdElkLFxuICAgICAgICAgIC8vICAgICAgICAgd2F0Y2hJZDogbXNnLndhdGNoSWRcbiAgICAgICAgICAvLyAgICAgICB9XG4gICAgICAgICAgLy8gICAgIClcbiAgICAgICAgICAvLyAgICl9IFxcbmBcbiAgICAgICAgICAvLyApXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAoc2Vzc2lvbkluZm8uY3VycmVudEV2ZW50SWQgPT09IGNoYW5nZS5pZCAtIDEpIHtcbiAgICAgICAgLy8gY29ycmVjdCBzZXF1ZW5jZVxuICAgICAgICAvLyBmaXJzdCBoYW5kbGUgZGF0YVR5cGUgdGhlbiBxdWV1ZVR5cGU6XG4gICAgICAgIC8vIDEuIGRhdGFUeXBlOiB3ZSBPTkxZIHBvcHVsYXRlIGNoYW5nZS5kb2MgaWYgbmVjY2Vzc2FyeVxuICAgICAgICAvLyAyLiBxdWV1ZVR5cGU6IHdlIGJ1aWxkIHRoZSBkYXRhIHNuYXBzaG90XG5cbiAgICAgICAgc3dpdGNoIChjaGFuZ2UuZGF0YVR5cGUpIHtcbiAgICAgICAgICBjYXNlICd1cGRhdGUnOiB7XG4gICAgICAgICAgICAvLyBvbmx5IG5lZWQgdG8gcG9wdWxhdGUgY2hhbmdlLmRvYyB3aGVuIGl0IGlzIG5vdCBwcm92aWRlZFxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UuZG9jKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoY2hhbmdlLnF1ZXVlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZGVxdWV1ZSc6IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsRG9jID0gZG9jcy5maW5kKGRvYyA9PiBkb2MuX2lkID09PSBjaGFuZ2UuZG9jSWQpXG4gICAgICAgICAgICAgICAgICBpZiAobG9jYWxEb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBwYXJ0aWFsIHVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBjbG9uZURlZXAobG9jYWxEb2MpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS51cGRhdGVkRmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZFBhdGggaW4gY2hhbmdlLnVwZGF0ZWRGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldChkb2MsIGZpZWxkUGF0aCwgY2hhbmdlLnVwZGF0ZWRGaWVsZHNbZmllbGRQYXRoXSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnJlbW92ZWRGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkUGF0aCBvZiBjaGFuZ2UucmVtb3ZlZEZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5zZXQoZG9jLCBmaWVsZFBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmRvYyA9IGRvY1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyByZXBvcnRcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnW3JlYWx0aW1lIGxpc3RlbmVyXSBpbnRlcm5hbCBub24tZmF0YWwgc2VydmVyIGVycm9yOiB1bmV4cGVjdGVkIHVwZGF0ZSBkYXRhVHlwZSBldmVudCB3aGVyZSBubyBkb2MgaXMgYXNzb2NpYXRlZC4nXG4gICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgICAvLyB3cml0ZVRvRmlsZShcbiAgICAgICAgICAgICAgICAgICAgLy8gICBcIndzZXJyb3IudHh0XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgYFtyZWFsdGltZSBsaXN0ZW5lcl0gaW50ZXJuYWwgbm9uLWZhdGFsIHNlcnZlciBlcnJvcjogdW5leHBlY3RlZCB1cGRhdGUgZGF0YVR5cGUgZXZlbnQgd2hlcmUgbm8gZG9jIGlzIGFzc29jaWF0ZWQuICAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXF1ZXN0SWQ6IG1zZy5yZXF1ZXN0SWQsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2F0Y2hJZDogbXNnLndhdGNoSWRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICl9IFxcbmBcbiAgICAgICAgICAgICAgICAgICAgLy8gKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5xdWV1ZSc6IHtcbiAgICAgICAgICAgICAgICAgIC8vIGRvYyBpcyBwcm92aWRlZCBieSBzZXJ2ZXIsIHRoaXMgc2hvdWxkIG5ldmVyIG9jY3VyXG4gICAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgQ2xvdWRTREtFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIGVyckNvZGU6IEVSUl9DT0RFLlNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9VTkVYUEVDVEVEX0ZBVEFMX0VSUk9SIGFzIHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiBgSGFuZGxlU2VydmVyRXZlbnRzOiBmdWxsIGRvYyBpcyBub3QgcHJvdmlkZWQgd2l0aCBkYXRhVHlwZT1cInVwZGF0ZVwiIGFuZCBxdWV1ZVR5cGU9XCJlbnF1ZXVlXCIgKHJlcXVlc3RJZCAke21zZy5yZXF1ZXN0SWR9KWBcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlV2l0aEVycm9yKGVycilcbiAgICAgICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAncmVwbGFjZSc6IHtcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGlmICghY2hhbmdlLmRvYykge1xuICAgICAgICAgICAgICAvLyBkb2MgaXMgcHJvdmlkZWQgYnkgc2VydmVyLCB0aGlzIHNob3VsZCBuZXZlciBvY2N1clxuICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgQ2xvdWRTREtFcnJvcih7XG4gICAgICAgICAgICAgICAgZXJyQ29kZTogRVJSX0NPREUuU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1VORVhQRUNURURfRkFUQUxfRVJST1IgYXMgc3RyaW5nLFxuICAgICAgICAgICAgICAgIGVyck1zZzogYEhhbmRsZVNlcnZlckV2ZW50czogZnVsbCBkb2MgaXMgbm90IHByb3ZpZGVkIHdpdGggZGF0YVR5cGU9XCJyZXBsYWNlXCIgKHJlcXVlc3RJZCAke21zZy5yZXF1ZXN0SWR9KWBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZVdpdGhFcnJvcihlcnIpXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAncmVtb3ZlJzoge1xuICAgICAgICAgICAgY29uc3QgZG9jID0gZG9jcy5maW5kKGRvYyA9PiBkb2MuX2lkID09PSBjaGFuZ2UuZG9jSWQpXG4gICAgICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgICAgIGNoYW5nZS5kb2MgPSBkb2NcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRPRE8gcmVwb3J0XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1tyZWFsdGltZSBsaXN0ZW5lcl0gaW50ZXJuYWwgbm9uLWZhdGFsIHNlcnZlciBlcnJvcjogdW5leHBlY3RlZCByZW1vdmUgZXZlbnQgd2hlcmUgbm8gZG9jIGlzIGFzc29jaWF0ZWQuJ1xuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgLy8gd3JpdGVUb0ZpbGUoXG4gICAgICAgICAgICAgIC8vICAgXCJ3c2Vycm9yLnR4dFwiLFxuICAgICAgICAgICAgICAvLyAgIGBbcmVhbHRpbWUgbGlzdGVuZXJdIGludGVybmFsIG5vbi1mYXRhbCBzZXJ2ZXIgZXJyb3I6IHVuZXhwZWN0ZWQgcmVtb3ZlIGV2ZW50IHdoZXJlIG5vIGRvYyBpcyBhc3NvY2lhdGVkLiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAvLyAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgLy8gICAgICAge30sXG4gICAgICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gICAgICAgICByZXF1ZXN0SWQ6IG1zZy5yZXF1ZXN0SWQsXG4gICAgICAgICAgICAgIC8vICAgICAgICAgd2F0Y2hJZDogbXNnLndhdGNoSWRcbiAgICAgICAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAgICAgICAvLyAgICAgKVxuICAgICAgICAgICAgICAvLyAgICl9IFxcbmBcbiAgICAgICAgICAgICAgLy8gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnbGltaXQnOiB7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZS5kb2MpIHtcbiAgICAgICAgICAgICAgc3dpdGNoKGNoYW5nZS5xdWV1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdkZXF1ZXVlJzoge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gZG9jcy5maW5kKGRvYyA9PiBkb2MuX2lkID09PSBjaGFuZ2UuZG9jSWQpXG4gICAgICAgICAgICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZS5kb2MgPSBkb2NcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ1tyZWFsdGltZSBsaXN0ZW5lcl0gaW50ZXJuYWwgbm9uLWZhdGFsIHNlcnZlciBlcnJvcjogdW5leHBlY3RlZCBsaW1pdCBkYXRhVHlwZSBldmVudCB3aGVyZSBubyBkb2MgaXMgYXNzb2NpYXRlZC4nXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2VucXVldWUnOiB7XG4gICAgICAgICAgICAgICAgICAvLyBkb2MgaXMgcHJvdmlkZWQgYnkgc2VydmVyLCB0aGlzIHNob3VsZCBuZXZlciBvY2N1clxuICAgICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IENsb3VkU0RLRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBlcnJDb2RlOiBFUlJfQ09ERS5TREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfVU5FWFBFQ1RFRF9GQVRBTF9FUlJPUiBhcyBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogYEhhbmRsZVNlcnZlckV2ZW50czogZnVsbCBkb2MgaXMgbm90IHByb3ZpZGVkIHdpdGggZGF0YVR5cGU9XCJsaW1pdFwiIGFuZCBxdWV1ZVR5cGU9XCJlbnF1ZXVlXCIgKHJlcXVlc3RJZCAke21zZy5yZXF1ZXN0SWR9KWBcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlV2l0aEVycm9yKGVycilcbiAgICAgICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGNoYW5nZS5xdWV1ZVR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpbml0Jzoge1xuICAgICAgICAgICAgaWYgKCFpbml0RW5jb3VudGVyZWQpIHtcbiAgICAgICAgICAgICAgaW5pdEVuY291bnRlcmVkID0gdHJ1ZVxuICAgICAgICAgICAgICBkb2NzID0gW2NoYW5nZS5kb2NdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkb2NzLnB1c2goY2hhbmdlLmRvYylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ2VucXVldWUnOiB7XG4gICAgICAgICAgICBkb2NzLnB1c2goY2hhbmdlLmRvYylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ2RlcXVldWUnOiB7XG4gICAgICAgICAgICBjb25zdCBpbmQgPSBkb2NzLmZpbmRJbmRleChkb2MgPT4gZG9jLl9pZCA9PT0gY2hhbmdlLmRvY0lkKVxuICAgICAgICAgICAgaWYgKGluZCA+IC0xKSB7XG4gICAgICAgICAgICAgIGRvY3Muc3BsaWNlKGluZCwgMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRPRE8gcmVwb3J0XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1tyZWFsdGltZSBsaXN0ZW5lcl0gaW50ZXJuYWwgbm9uLWZhdGFsIHNlcnZlciBlcnJvcjogdW5leHBlY3RlZCBkZXF1ZXVlIGV2ZW50IHdoZXJlIG5vIGRvYyBpcyBhc3NvY2lhdGVkLidcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIC8vIHdyaXRlVG9GaWxlKFxuICAgICAgICAgICAgICAvLyAgIFwid3NlcnJvci50eHRcIixcbiAgICAgICAgICAgICAgLy8gICBgW3JlYWx0aW1lIGxpc3RlbmVyXSBpbnRlcm5hbCBub24tZmF0YWwgc2VydmVyIGVycm9yOiB1bmV4cGVjdGVkIGRlcXVldWUgZXZlbnQgd2hlcmUgbm8gZG9jIGlzIGFzc29jaWF0ZWQuICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgIC8vICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAvLyAgICAgICB7fSxcbiAgICAgICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgICAgICAvLyAgICAgICAgIHJlcXVlc3RJZDogbXNnLnJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgLy8gICAgICAgICB3YXRjaElkOiBtc2cud2F0Y2hJZFxuICAgICAgICAgICAgICAvLyAgICAgICB9XG4gICAgICAgICAgICAgIC8vICAgICApXG4gICAgICAgICAgICAgIC8vICAgKX0gXFxuYFxuICAgICAgICAgICAgICAvLyApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICd1cGRhdGUnOiB7XG4gICAgICAgICAgICAvLyB3cml0ZVRvRmlsZShcbiAgICAgICAgICAgIC8vICAgXCJ3c2Vycm9yLnR4dFwiLFxuICAgICAgICAgICAgLy8gICBgW3JlYWx0aW1lIGxpc3RlbmVyXSBkb2NzICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAvLyAgICAgZG9jc1xuICAgICAgICAgICAgLy8gICApfSBjaGFuZ2UgZG9jICR7SlNPTi5zdHJpbmdpZnkoY2hhbmdlKX0gXFxuYFxuICAgICAgICAgICAgLy8gKVxuICAgICAgICAgICAgY29uc3QgaW5kID0gZG9jcy5maW5kSW5kZXgoZG9jID0+IGRvYy5faWQgPT09IGNoYW5nZS5kb2NJZClcbiAgICAgICAgICAgIGlmIChpbmQgPiAtMSkge1xuICAgICAgICAgICAgICBkb2NzW2luZF0gPSBjaGFuZ2UuZG9jXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUT0RPIHJlcG9ydFxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICdbcmVhbHRpbWUgbGlzdGVuZXJdIGludGVybmFsIG5vbi1mYXRhbCBzZXJ2ZXIgZXJyb3I6IHVuZXhwZWN0ZWQgcXVldWVUeXBlIHVwZGF0ZSBldmVudCB3aGVyZSBubyBkb2MgaXMgYXNzb2NpYXRlZC4nXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAvLyB3cml0ZVRvRmlsZShcbiAgICAgICAgICAgICAgLy8gICBcIndzZXJyb3IudHh0XCIsXG4gICAgICAgICAgICAgIC8vICAgYFtyZWFsdGltZSBsaXN0ZW5lcl0gaW50ZXJuYWwgbm9uLWZhdGFsIHNlcnZlciBlcnJvcjogdW5leHBlY3RlZCBxdWV1ZVR5cGUgdXBkYXRlIGV2ZW50IHdoZXJlIG5vIGRvYyBpcyBhc3NvY2lhdGVkLiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAvLyAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgLy8gICAgICAge30sXG4gICAgICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gICAgICAgICByZXF1ZXN0SWQ6IG1zZy5yZXF1ZXN0SWQsXG4gICAgICAgICAgICAgIC8vICAgICAgICAgd2F0Y2hJZDogbXNnLndhdGNoSWRcbiAgICAgICAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAgICAgICAvLyAgICAgKVxuICAgICAgICAgICAgICAvLyAgICl9IFxcbmBcbiAgICAgICAgICAgICAgLy8gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgaSA9PT0gbGVuIC0gMSB8fFxuICAgICAgICAgIChhbGxDaGFuZ2VFdmVudHNbaSArIDFdICYmIGFsbENoYW5nZUV2ZW50c1tpICsgMV0uaWQgIT09IGNoYW5nZS5pZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gYSBzaGFsbG93IHNsaWNlIGNyZWF0ZXMgYSBzaGFsbG93IHNuYXBzaG90XG4gICAgICAgICAgY29uc3QgZG9jc1NuYXBzaG90ID0gWy4uLmRvY3NdXG5cbiAgICAgICAgICAvLyB3ZSBzbGljZSBmaXJzdCBjYXVzZScgaWYgdGhlcmUncmUgYWxsQ2hhbmdlRXZlbnRzIHRoYXQgYXJlIG9mIHRoZSBzYW1lIGlkIGFmdGVyIHRoaXMgY2hhbmdlLCB3ZSBkb24ndCB3YW50IHRvIGludm9sdmUgaXQgZm9yIGl0IGlzIHVuZXhwZWN0ZWQgaW52YWxpZCBvcmRlclxuICAgICAgICAgIGNvbnN0IGRvY0NoYW5nZXMgPSBhbGxDaGFuZ2VFdmVudHNcbiAgICAgICAgICAgIC5zbGljZSgwLCBpICsgMSlcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjLmlkID09PSBjaGFuZ2UuaWQpXG5cbiAgICAgICAgICAvLyBhbGwgY2hhbmdlcyBvZiB0aGlzIGV2ZW50IGhhcyBiZWVuIGhhbmRsZSwgd2UgY291bGQgZGlzcGF0Y2ggdGhlIGV2ZW50IG5vd1xuICAgICAgICAgIHRoaXMuc2Vzc2lvbkluZm8uY3VycmVudEV2ZW50SWQgPSBjaGFuZ2UuaWRcbiAgICAgICAgICB0aGlzLnNlc3Npb25JbmZvLmN1cnJlbnREb2NzID0gZG9jc1xuXG4gICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgU25hcHNob3Qoe1xuICAgICAgICAgICAgaWQ6IGNoYW5nZS5pZCxcbiAgICAgICAgICAgIGRvY0NoYW5nZXMsXG4gICAgICAgICAgICBkb2NzOiBkb2NzU25hcHNob3QsXG4gICAgICAgICAgICBtc2dUeXBlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIC8vIFJlcG9ydGVyLnN1cnJvdW5kVGhpcmRCeVRyeUNhdGNoKCgpID0+XG4gICAgICAgICAgdGhpcy5saXN0ZW5lci5vbkNoYW5nZShzbmFwc2hvdClcbiAgICAgICAgICAvLyApKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb3V0LW9mLW9yZGVyIGV2ZW50XG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgICAgICAvLyBUT0RPOiByZXBvcnRcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBbcmVhbHRpbWUgbGlzdGVuZXJdIGV2ZW50IHJlY2VpdmVkIGlzIG91dCBvZiBvcmRlciwgY3VyICR7dGhpcy5zZXNzaW9uSW5mby5jdXJyZW50RXZlbnRJZH0gYnV0IGdvdCAke2NoYW5nZS5pZH1gXG4gICAgICAgIClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZWJ1aWxkIHdhdGNoXG4gICAgICAgIGF3YWl0IHRoaXMucmVidWlsZFdhdGNoKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcG9zdEhhbmRsZVNlcnZlckV2ZW50c1ZhbGlkaXR5Q2hlY2soXG4gICAgbXNnOiBJUmVzcG9uc2VNZXNzYWdlSW5pdEV2ZW50TXNnIHwgSVJlc3BvbnNlTWVzc2FnZU5leHRFdmVudE1zZ1xuICApIHtcbiAgICBpZiAoIXRoaXMuc2Vzc2lvbkluZm8pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdbcmVhbHRpbWUgbGlzdGVuZXJdIGludGVybmFsIG5vbi1mYXRhbCBlcnJvcjogc2Vzc2lvbkluZm8gbG9zdCBhZnRlciBzZXJ2ZXIgZXZlbnQgaGFuZGxpbmcsIHRoaXMgc2hvdWxkIG5ldmVyIG9jY3VyJ1xuICAgICAgKVxuXG4gICAgICAvLyB3cml0ZVRvRmlsZShcbiAgICAgIC8vICAgXCJ3c2Vycm9yLnR4dFwiLFxuICAgICAgLy8gICBgW3JlYWx0aW1lIGxpc3RlbmVyXSBpbnRlcm5hbCBub24tZmF0YWwgZXJyb3I6IHNlc3Npb25JbmZvIGxvc3QgYWZ0ZXIgc2VydmVyIGV2ZW50IGhhbmRsaW5nLCB0aGlzIHNob3VsZCBuZXZlciBvY2N1ciAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgLy8gICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAvLyAgICAgICB7fSxcbiAgICAgIC8vICAgICAgIHtcbiAgICAgIC8vICAgICAgICAgcmVxdWVzdElkOiBtc2cucmVxdWVzdElkLFxuICAgICAgLy8gICAgICAgICB3YXRjaElkOiBtc2cud2F0Y2hJZFxuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIClcbiAgICAgIC8vICAgKX0gXFxuYFxuICAgICAgLy8gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5zZXNzaW9uSW5mby5leHBlY3RFdmVudElkICYmXG4gICAgICB0aGlzLnNlc3Npb25JbmZvLmN1cnJlbnRFdmVudElkID49IHRoaXMuc2Vzc2lvbkluZm8uZXhwZWN0RXZlbnRJZFxuICAgICkge1xuICAgICAgdGhpcy5jbGVhcldhaXRFeHBlY3RlZEV2ZW50KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXNzaW9uSW5mby5jdXJyZW50RXZlbnRJZCA8IG1zZy5tc2dEYXRhLmN1cnJFdmVudCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnW3JlYWx0aW1lIGxpc3RlbmVyXSBpbnRlcm5hbCBub24tZmF0YWwgZXJyb3I6IGNsaWVudCBldmVudElkIGRvZXMgbm90IG1hdGNoIHdpdGggc2VydmVyIGV2ZW50IGlkIGFmdGVyIHNlcnZlciBldmVudCBoYW5kbGluZydcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJXYWl0RXhwZWN0ZWRFdmVudCgpIHtcbiAgICBpZiAodGhpcy5fd2FpdEV4cGVjdGVkVGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fd2FpdEV4cGVjdGVkVGltZW91dElkKVxuICAgICAgdGhpcy5fd2FpdEV4cGVjdGVkVGltZW91dElkID0gdW5kZWZpbmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFB1YmxpY0V2ZW50KGV2ZW50OiBJREJFdmVudCk6IElTaW5nbGVEQkV2ZW50IHtcbiAgY29uc3QgZTogSVNpbmdsZURCRXZlbnQgPSB7XG4gICAgaWQ6IGV2ZW50LklELFxuICAgIGRhdGFUeXBlOiBldmVudC5EYXRhVHlwZSxcbiAgICBxdWV1ZVR5cGU6IGV2ZW50LlF1ZXVlVHlwZSxcbiAgICBkb2NJZDogZXZlbnQuRG9jSUQsXG4gICAgZG9jOiBldmVudC5Eb2MgJiYgZXZlbnQuRG9jICE9PSAne30nID8gSlNPTi5wYXJzZShldmVudC5Eb2MpIDogdW5kZWZpbmVkXG4gIH1cblxuICBpZiAoZXZlbnQuRGF0YVR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmIChldmVudC5VcGRhdGVkRmllbGRzKSB7XG4gICAgICBlLnVwZGF0ZWRGaWVsZHMgPSBKU09OLnBhcnNlKGV2ZW50LlVwZGF0ZWRGaWVsZHMpXG4gICAgfVxuICAgIC8vIFRPRE86IHdhaXQgZm9yIHRjYiB0byBjaGFuZ2UgcmVtb3ZlZEZpZWxkcyB0byBSZW1vdmVkRmllbGRzXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmIChldmVudC5yZW1vdmVkRmllbGRzIHx8IGV2ZW50LlJlbW92ZWRGaWVsZHMpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIC8vIGUucmVtb3ZlZEZpZWxkcyA9IGV2ZW50LnJlbW92ZWRGaWVsZHNcbiAgICAgIC8vICAgPyBKU09OLnBhcnNlKGV2ZW50LnJlbW92ZWRGaWVsZHMpXG4gICAgICAvLyAgIDogSlNPTi5wYXJzZShldmVudC5SZW1vdmVkRmllbGRzKVxuICAgICAgZS5yZW1vdmVkRmllbGRzID0gSlNPTi5wYXJzZShldmVudC5yZW1vdmVkRmllbGRzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlXG59XG4iXX0=
}, function(modId) { var map = {"./message":1734234913882,"./listener":1734234913883,"./snapshot":1734234913884,"./error":1734234913885,"./utils":1734234913886}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913882, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isInitEventMessage = exports.genRequestId = void 0;
function genRequestId(prefix) {
    if (prefix === void 0) { prefix = ''; }
    return "" + (prefix ? prefix + "_" : '') + +new Date() + "_" + Math.random();
}
exports.genRequestId = genRequestId;
function isInitEventMessage(msg) {
    return msg.msgType === 'INIT_EVENT';
}
exports.isInitEventMessage = isInitEventMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLFNBQWdCLFlBQVksQ0FBQyxNQUFXO0lBQVgsdUJBQUEsRUFBQSxXQUFXO0lBQ3RDLE9BQU8sTUFBRyxNQUFNLENBQUMsQ0FBQyxDQUFJLE1BQU0sTUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxTQUFJLElBQUksQ0FBQyxNQUFNLEVBQUksQ0FBQTtBQUN2RSxDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FDaEMsR0FBcUI7SUFFckIsT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FBQTtBQUNyQyxDQUFDO0FBSkQsZ0RBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJUmVzcG9uc2VNZXNzYWdlLFxuICBJUmVzcG9uc2VNZXNzYWdlSW5pdEV2ZW50TXNnXG59IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvcmVhbHRpbWUnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5SZXF1ZXN0SWQocHJlZml4ID0gJycpIHtcbiAgcmV0dXJuIGAke3ByZWZpeCA/IGAke3ByZWZpeH1fYCA6ICcnfSR7K25ldyBEYXRlKCl9XyR7TWF0aC5yYW5kb20oKX1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luaXRFdmVudE1lc3NhZ2UoXG4gIG1zZzogSVJlc3BvbnNlTWVzc2FnZVxuKTogbXNnIGlzIElSZXNwb25zZU1lc3NhZ2VJbml0RXZlbnRNc2cge1xuICByZXR1cm4gbXNnLm1zZ1R5cGUgPT09ICdJTklUX0VWRU5UJ1xufVxuIl19
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913883, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.RealtimeListener = void 0;
var RealtimeListener = (function () {
    function RealtimeListener(options) {
        this.close = options.close;
        this.onChange = options.onChange;
        this.onError = options.onError;
        if (options.debug) {
            Object.defineProperty(this, 'virtualClient', {
                get: function () {
                    return options.virtualClient;
                }
            });
        }
    }
    return RealtimeListener;
}());
exports.RealtimeListener = RealtimeListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBZ0JBO0lBS0UsMEJBQVksT0FBaUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUE7UUFFOUIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtnQkFDM0MsR0FBRyxFQUFFO29CQUNILE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQTtnQkFDOUIsQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaXJ0dWFsV2ViU29ja2V0Q2xpZW50IH0gZnJvbSAnLi92aXJ0dWFsLXdlYnNvY2tldC1jbGllbnQnXG5pbXBvcnQge1xuICBJUmVhbHRpbWVMaXN0ZW5lckNvbnN0cnVjdG9yT3B0aW9ucyxcbiAgREJSZWFsdGltZUxpc3RlbmVyXG59IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvcmVhbHRpbWUnXG5cbi8vID09PT09PT09PT09PT09PSBSZWFsdGltZSBMaXN0ZW5lciAoUHVibGljKSA9PT09PT09PT09PT09PT09PT09PVxuXG5pbnRlcmZhY2UgSVJlYWx0aW1lTGlzdGVuZXJPcHRpb25zIGV4dGVuZHMgSVJlYWx0aW1lTGlzdGVuZXJDb25zdHJ1Y3Rvck9wdGlvbnMge1xuICAvLyBpbml0XG4gIGNsb3NlOiAoKSA9PiB2b2lkXG4gIC8vIGRlYnVnXG4gIGRlYnVnPzogYm9vbGVhblxuICB2aXJ0dWFsQ2xpZW50PzogVmlydHVhbFdlYlNvY2tldENsaWVudFxufVxuXG5leHBvcnQgY2xhc3MgUmVhbHRpbWVMaXN0ZW5lciBpbXBsZW1lbnRzIERCUmVhbHRpbWVMaXN0ZW5lciB7XG4gIGNsb3NlOiAoKSA9PiB2b2lkXG4gIG9uQ2hhbmdlOiAocmVzOiBhbnkpID0+IHZvaWRcbiAgb25FcnJvcjogKGVycm9yOiBhbnkpID0+IHZvaWRcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJUmVhbHRpbWVMaXN0ZW5lck9wdGlvbnMpIHtcbiAgICB0aGlzLmNsb3NlID0gb3B0aW9ucy5jbG9zZVxuICAgIHRoaXMub25DaGFuZ2UgPSBvcHRpb25zLm9uQ2hhbmdlXG4gICAgdGhpcy5vbkVycm9yID0gb3B0aW9ucy5vbkVycm9yXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd2aXJ0dWFsQ2xpZW50Jywge1xuICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy52aXJ0dWFsQ2xpZW50XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913884, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Snapshot = void 0;
var Snapshot = (function () {
    function Snapshot(options) {
        var id = options.id, docChanges = options.docChanges, docs = options.docs, msgType = options.msgType, type = options.type;
        var cachedDocChanges;
        var cachedDocs;
        Object.defineProperties(this, {
            id: {
                get: function () { return id; },
                enumerable: true
            },
            docChanges: {
                get: function () {
                    if (!cachedDocChanges) {
                        cachedDocChanges = JSON.parse(JSON.stringify(docChanges));
                    }
                    return cachedDocChanges;
                },
                enumerable: true
            },
            docs: {
                get: function () {
                    if (!cachedDocs) {
                        cachedDocs = JSON.parse(JSON.stringify(docs));
                    }
                    return cachedDocs;
                },
                enumerable: true
            },
            msgType: {
                get: function () { return msgType; },
                enumerable: true
            },
            type: {
                get: function () { return type; },
                enumerable: true
            }
        });
    }
    return Snapshot;
}());
exports.Snapshot = Snapshot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hcHNob3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc25hcHNob3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBY0E7SUFPRSxrQkFBWSxPQUFvQztRQUN0QyxJQUFBLEVBQUUsR0FBc0MsT0FBTyxHQUE3QyxFQUFFLFVBQVUsR0FBMEIsT0FBTyxXQUFqQyxFQUFFLElBQUksR0FBb0IsT0FBTyxLQUEzQixFQUFFLE9BQU8sR0FBVyxPQUFPLFFBQWxCLEVBQUUsSUFBSSxHQUFLLE9BQU8sS0FBWixDQUFZO1FBRXZELElBQUksZ0JBQWtDLENBQUE7UUFDdEMsSUFBSSxVQUFpQyxDQUFBO1FBRXJDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7WUFDNUIsRUFBRSxFQUFFO2dCQUNGLEdBQUcsRUFBRSxjQUFNLE9BQUEsRUFBRSxFQUFGLENBQUU7Z0JBQ2IsVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsR0FBRyxFQUFFO29CQUNILElBQUksQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDckIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7cUJBQzFEO29CQUNELE9BQU8sZ0JBQWdCLENBQUE7Z0JBQ3pCLENBQUM7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osR0FBRyxFQUFFO29CQUNILElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ2YsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO3FCQUM5QztvQkFDRCxPQUFPLFVBQVUsQ0FBQTtnQkFDbkIsQ0FBQztnQkFDRCxVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxHQUFHLEVBQUUsY0FBTSxPQUFBLE9BQU8sRUFBUCxDQUFPO2dCQUNsQixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2FBQ2pCO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU25hcHNob3RUeXBlLCBJU25hcHNob3QgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzL3JlYWx0aW1lJ1xuaW1wb3J0IHsgSVNpbmdsZURCRXZlbnQgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzL2RhdGFiYXNlJ1xuXG4vLyA9PT09PT09PT09PT09PT0gUmVhbHRpbWUgU25hcHNob3QgLyBDaGFuZ2UgRXZlbnQgKFB1YmxpYykgPT09PT09PT09PT09PT09PT09PT1cblxuaW50ZXJmYWNlIElTbmFwc2hvdENvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIGlkOiBudW1iZXJcbiAgZG9jQ2hhbmdlczogSVNpbmdsZURCRXZlbnRbXVxuICBkb2NzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+W11cbiAgdHlwZT86IFNuYXBzaG90VHlwZVxuICAvLyBFSlNPTjogYW55XG4gIG1zZ1R5cGU/OiBTdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFNuYXBzaG90IGltcGxlbWVudHMgSVNuYXBzaG90IHtcbiAgaWQhOiBudW1iZXJcbiAgZG9jQ2hhbmdlcyE6IElTaW5nbGVEQkV2ZW50W11cbiAgZG9jcyE6IFJlY29yZDxzdHJpbmcsIGFueT5bXVxuICB0eXBlPzogJ2luaXQnXG4gIC8vIEVKU09OOiBhbnlcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJU25hcHNob3RDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkLCBkb2NDaGFuZ2VzLCBkb2NzLCBtc2dUeXBlLCB0eXBlIH0gPSBvcHRpb25zXG5cbiAgICBsZXQgY2FjaGVkRG9jQ2hhbmdlczogSVNpbmdsZURCRXZlbnRbXVxuICAgIGxldCBjYWNoZWREb2NzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+W11cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGlkOiB7XG4gICAgICAgIGdldDogKCkgPT4gaWQsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBkb2NDaGFuZ2VzOiB7XG4gICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgIGlmICghY2FjaGVkRG9jQ2hhbmdlcykge1xuICAgICAgICAgICAgY2FjaGVkRG9jQ2hhbmdlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZG9jQ2hhbmdlcykpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjYWNoZWREb2NDaGFuZ2VzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBkb2NzOiB7XG4gICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgIGlmICghY2FjaGVkRG9jcykge1xuICAgICAgICAgICAgY2FjaGVkRG9jcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZG9jcykpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjYWNoZWREb2NzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBtc2dUeXBlOiB7XG4gICAgICAgIGdldDogKCkgPT4gbXNnVHlwZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0eXBlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913885, function(require, module, exports) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERR_CODE = exports.CloudSDKError = exports.isCancelledError = exports.CancelledError = exports.isTimeoutError = exports.TimeoutError = exports.isRealtimeErrorMessageError = exports.RealtimeErrorMessageError = void 0;
var RealtimeErrorMessageError = (function (_super) {
    __extends(RealtimeErrorMessageError, _super);
    function RealtimeErrorMessageError(serverErrorMsg) {
        var _this = _super.call(this, "Watch Error " + JSON.stringify(serverErrorMsg.msgData) + " (requestid: " + serverErrorMsg.requestId + ")") || this;
        _this.isRealtimeErrorMessageError = true;
        _this.payload = serverErrorMsg;
        return _this;
    }
    return RealtimeErrorMessageError;
}(Error));
exports.RealtimeErrorMessageError = RealtimeErrorMessageError;
exports.isRealtimeErrorMessageError = function (e) { return e === null || e === void 0 ? void 0 : e.isRealtimeErrorMessageError; };
var TimeoutError = (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'timeout';
        _this.payload = null;
        _this.generic = true;
        return _this;
    }
    return TimeoutError;
}(Error));
exports.TimeoutError = TimeoutError;
exports.isTimeoutError = function (e) {
    return e.type === 'timeout';
};
var CancelledError = (function (_super) {
    __extends(CancelledError, _super);
    function CancelledError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'cancelled';
        _this.payload = null;
        _this.generic = true;
        return _this;
    }
    return CancelledError;
}(Error));
exports.CancelledError = CancelledError;
exports.isCancelledError = function (e) {
    return e.type === 'cancelled';
};
var CloudSDKError = (function (_super) {
    __extends(CloudSDKError, _super);
    function CloudSDKError(options) {
        var _this = _super.call(this, options.errMsg) || this;
        _this.errCode = 'UNKNOWN_ERROR';
        Object.defineProperties(_this, {
            message: {
                get: function () {
                    return ("errCode: " + this.errCode + " " + (exports.ERR_CODE[this.errCode] ||
                        '') + " | errMsg: " + this.errMsg);
                },
                set: function (msg) {
                    this.errMsg = msg;
                }
            }
        });
        _this.errCode = options.errCode || 'UNKNOWN_ERROR';
        _this.errMsg = options.errMsg;
        return _this;
    }
    Object.defineProperty(CloudSDKError.prototype, "message", {
        get: function () {
            return "errCode: " + this.errCode + " | errMsg: " + this.errMsg;
        },
        set: function (msg) {
            this.errMsg = msg;
        },
        enumerable: false,
        configurable: true
    });
    return CloudSDKError;
}(Error));
exports.CloudSDKError = CloudSDKError;
exports.ERR_CODE = {
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
    SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG: 'SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG',
    SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA: 'SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA',
    SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR: 'SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR',
    SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED: 'SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED',
    SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR: 'SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQStDLDZDQUFLO0lBSWxELG1DQUFZLGNBQXdDO1FBQXBELFlBQ0Usa0JBQ0UsaUJBQWUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLHFCQUNuRCxjQUFjLENBQUMsU0FBUyxNQUN2QixDQUNKLFNBRUY7UUFWRCxpQ0FBMkIsR0FBRyxJQUFJLENBQUE7UUFTaEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUE7O0lBQy9CLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFaRCxDQUErQyxLQUFLLEdBWW5EO0FBWlksOERBQXlCO0FBY3pCLFFBQUEsMkJBQTJCLEdBQUcsVUFDekMsQ0FBTSxXQUM2QixDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsMkJBQTJCLEdBQUEsQ0FBQTtBQUVuRTtJQUFrQyxnQ0FBSztJQUF2QztRQUFBLHFFQUtDO1FBSEMsVUFBSSxHQUFHLFNBQWtCLENBQUE7UUFDekIsYUFBTyxHQUFHLElBQUksQ0FBQTtRQUNkLGFBQU8sR0FBRyxJQUFJLENBQUE7O0lBQ2hCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFMRCxDQUFrQyxLQUFLLEdBS3RDO0FBTFksb0NBQVk7QUFPWixRQUFBLGNBQWMsR0FBRyxVQUFDLENBQU07SUFDbkMsT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVM7QUFBcEIsQ0FBb0IsQ0FBQTtBQUV0QjtJQUFvQyxrQ0FBSztJQUF6QztRQUFBLHFFQUtDO1FBSEMsVUFBSSxHQUFHLFdBQW9CLENBQUE7UUFDM0IsYUFBTyxHQUFHLElBQUksQ0FBQTtRQUNkLGFBQU8sR0FBRyxJQUFJLENBQUE7O0lBQ2hCLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFMRCxDQUFvQyxLQUFLLEdBS3hDO0FBTFksd0NBQWM7QUFPZCxRQUFBLGdCQUFnQixHQUFHLFVBQUMsQ0FBTTtJQUNyQyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVztBQUF0QixDQUFzQixDQUFBO0FBRXhCO0lBQW1DLGlDQUFLO0lBTXRDLHVCQUFZLE9BQWlDO1FBQTdDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQWtCdEI7UUF4Qk0sYUFBTyxHQUFHLGVBQWUsQ0FBQTtRQVE5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxFQUFFO1lBQzVCLE9BQU8sRUFBRTtnQkFDUCxHQUFHO29CQUNELE9BQU8sQ0FDTCxjQUFZLElBQUksQ0FBQyxPQUFPLFVBQUksZ0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNoRCxFQUFFLGlCQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FDaEMsQ0FBQTtnQkFDSCxDQUFDO2dCQUNELEdBQUcsRUFBSCxVQUFJLEdBQVc7b0JBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7Z0JBQ25CLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQTtRQUVGLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUE7UUFDakQsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBOztJQUM5QixDQUFDO0lBRUQsc0JBQUksa0NBQU87YUFBWDtZQUNFLE9BQU8sY0FBWSxJQUFJLENBQUMsT0FBTyxnQkFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDNUQsQ0FBQzthQUVELFVBQVksR0FBVztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtRQUNuQixDQUFDOzs7T0FKQTtJQUtILG9CQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUFtQyxLQUFLLEdBa0N2QztBQWxDWSxzQ0FBYTtBQXlDYixRQUFBLFFBQVEsR0FBdUM7SUFFMUQsYUFBYSxFQUFFLGVBQWU7SUFDOUIsOENBQThDLEVBQzVDLGdEQUFnRDtJQUVsRCxtREFBbUQsRUFDakQscURBQXFEO0lBRXZELGlEQUFpRCxFQUMvQyxtREFBbUQ7SUFFckQsK0NBQStDLEVBQzdDLGlEQUFpRDtJQUVuRCwrQ0FBK0MsRUFDN0MsaURBQWlEO0lBRW5ELDBEQUEwRCxFQUN4RCw0REFBNEQ7SUFFOUQseURBQXlELEVBQ3ZELDJEQUEyRDtJQUU3RCwwREFBMEQsRUFDeEQsNERBQTREO0lBRTlELDhDQUE4QyxFQUM1QyxnREFBZ0Q7SUFFbEQscURBQXFELEVBQ25ELHVEQUF1RDtDQUUxRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUdlbmVyaWNFcnJvciB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMnXG5pbXBvcnQgeyBJUmVzcG9uc2VNZXNzYWdlRXJyb3JNc2cgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzL3JlYWx0aW1lJ1xuXG5leHBvcnQgY2xhc3MgUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgaXNSZWFsdGltZUVycm9yTWVzc2FnZUVycm9yID0gdHJ1ZVxuICBwYXlsb2FkOiBJUmVzcG9uc2VNZXNzYWdlRXJyb3JNc2dcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXJFcnJvck1zZzogSVJlc3BvbnNlTWVzc2FnZUVycm9yTXNnKSB7XG4gICAgc3VwZXIoXG4gICAgICBgV2F0Y2ggRXJyb3IgJHtKU09OLnN0cmluZ2lmeShzZXJ2ZXJFcnJvck1zZy5tc2dEYXRhKX0gKHJlcXVlc3RpZDogJHtcbiAgICAgICAgc2VydmVyRXJyb3JNc2cucmVxdWVzdElkXG4gICAgICB9KWBcbiAgICApXG4gICAgdGhpcy5wYXlsb2FkID0gc2VydmVyRXJyb3JNc2dcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaXNSZWFsdGltZUVycm9yTWVzc2FnZUVycm9yID0gKFxuICBlOiBhbnlcbik6IGUgaXMgUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvciA9PiBlPy5pc1JlYWx0aW1lRXJyb3JNZXNzYWdlRXJyb3JcblxuZXhwb3J0IGNsYXNzIFRpbWVvdXRFcnJvciBleHRlbmRzIEVycm9yXG4gIGltcGxlbWVudHMgSUdlbmVyaWNFcnJvcjwndGltZW91dCcsIG51bGw+IHtcbiAgdHlwZSA9ICd0aW1lb3V0JyBhcyBjb25zdFxuICBwYXlsb2FkID0gbnVsbFxuICBnZW5lcmljID0gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgaXNUaW1lb3V0RXJyb3IgPSAoZTogYW55KTogZSBpcyBUaW1lb3V0RXJyb3IgPT5cbiAgZS50eXBlID09PSAndGltZW91dCdcblxuZXhwb3J0IGNsYXNzIENhbmNlbGxlZEVycm9yIGV4dGVuZHMgRXJyb3JcbiAgaW1wbGVtZW50cyBJR2VuZXJpY0Vycm9yPCdjYW5jZWxsZWQnLCBudWxsPiB7XG4gIHR5cGUgPSAnY2FuY2VsbGVkJyBhcyBjb25zdFxuICBwYXlsb2FkID0gbnVsbFxuICBnZW5lcmljID0gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgaXNDYW5jZWxsZWRFcnJvciA9IChlOiBhbnkpOiBlIGlzIENhbmNlbGxlZEVycm9yID0+XG4gIGUudHlwZSA9PT0gJ2NhbmNlbGxlZCdcblxuZXhwb3J0IGNsYXNzIENsb3VkU0RLRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHB1YmxpYyBlcnJDb2RlID0gJ1VOS05PV05fRVJST1InXG4gIHB1YmxpYyBlcnJNc2c6IHN0cmluZ1xuXG4gIHB1YmxpYyByZXF1ZXN0SUQ/OiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRXJyb3JDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zLmVyck1zZylcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgZXJyQ29kZTogJHt0aGlzLmVyckNvZGV9ICR7RVJSX0NPREVbdGhpcy5lcnJDb2RlXSB8fFxuICAgICAgICAgICAgICAnJ30gfCBlcnJNc2c6IGAgKyB0aGlzLmVyck1zZ1xuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KG1zZzogc3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5lcnJNc2cgPSBtc2dcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmVyckNvZGUgPSBvcHRpb25zLmVyckNvZGUgfHwgJ1VOS05PV05fRVJST1InXG4gICAgdGhpcy5lcnJNc2cgPSBvcHRpb25zLmVyck1zZ1xuICB9XG5cbiAgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIGBlcnJDb2RlOiAke3RoaXMuZXJyQ29kZX0gfCBlcnJNc2c6IGAgKyB0aGlzLmVyck1zZ1xuICB9XG5cbiAgc2V0IG1lc3NhZ2UobXNnOiBzdHJpbmcpIHtcbiAgICB0aGlzLmVyck1zZyA9IG1zZ1xuICB9XG59XG5cbmludGVyZmFjZSBJRXJyb3JDb25zdHJ1Y3Rvck9wdGlvbnMge1xuICBlcnJDb2RlPzogc3RyaW5nXG4gIGVyck1zZzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBFUlJfQ09ERTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSA9IHtcbiAgLy8gXCItMVwiOiBcIlwiLFxuICBVTktOT1dOX0VSUk9SOiAnVU5LTk9XTl9FUlJPUicsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9JTklUX1dBVENIX0ZBSUw6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9JTklUX1dBVENIX0ZBSUwnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIGluaXQgd2F0Y2ggZmFpbFwiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfUkVDT05ORUNUX1dBVENIX0ZBSUw6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9SRUNPTk5FQ1RfV0FUQ0hfRkFJTCcsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgcmVjb25uZWN0IHdhdGNoIGZhaWxcIixcbiAgU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1JFQlVJTERfV0FUQ0hfRkFJTDpcbiAgICAnU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1JFQlVJTERfV0FUQ0hfRkFJTCcsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgcmVidWlsZCB3YXRjaCBmYWlsXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9DTE9TRV9XQVRDSF9GQUlMOlxuICAgICdTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfQ0xPU0VfV0FUQ0hfRkFJTCcsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgcmVidWlsZCB3YXRjaCBmYWlsXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9TRVJWRVJfRVJST1JfTVNHOlxuICAgICdTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfU0VSVkVSX0VSUk9SX01TRycsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgcmVjZWl2ZSBzZXJ2ZXIgZXJyb3IgbXNnXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9SRUNFSVZFX0lOVkFMSURfU0VSVkVSX0RBVEE6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9SRUNFSVZFX0lOVkFMSURfU0VSVkVSX0RBVEEnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIHJlY2VpdmUgaW52YWxpZCBzZXJ2ZXIgZGF0YVwiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfV0VCU09DS0VUX0NPTk5FQ1RJT05fRVJST1I6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9XRUJTT0NLRVRfQ09OTkVDVElPTl9FUlJPUicsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgd2Vic29ja2V0IGNvbm5lY3Rpb24gZXJyb3JcIixcbiAgU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1dFQlNPQ0tFVF9DT05ORUNUSU9OX0NMT1NFRDpcbiAgICAnU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1dFQlNPQ0tFVF9DT05ORUNUSU9OX0NMT1NFRCcsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgd2Vic29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9DSEVDS19MQVNUX0ZBSUw6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9DSEVDS19MQVNUX0ZBSUwnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIGNoZWNrIGxhc3QgZmFpbFwiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfVU5FWFBFQ1RFRF9GQVRBTF9FUlJPUjpcbiAgICAnU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1VORVhQRUNURURfRkFUQUxfRVJST1InXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgdW5leHBlY3RlZCBmYXRhbCBlcnJvclwiXG59Il19
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913886, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
exports.sleep = function (ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (r) { return setTimeout(r, ms); });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxLQUFLLEdBQUcsVUFBQyxFQUFNO0lBQU4sbUJBQUEsRUFBQSxNQUFNO0lBQUssT0FBQSxJQUFJLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFVBQVUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQWpCLENBQWlCLENBQUM7QUFBbkMsQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzbGVlcCA9IChtcyA9IDApID0+IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCBtcykpOyJdfQ==
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913887, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getWSCloseError = exports.CLOSE_EVENT_CODE = exports.CLOSE_EVENT_CODE_INFO = void 0;
var error_1 = require("./error");
exports.CLOSE_EVENT_CODE_INFO = {
    1000: {
        code: 1000,
        name: 'Normal Closure',
        description: 'Normal closure; the connection successfully completed whatever purpose for which it was created.'
    },
    1001: {
        code: 1001,
        name: 'Going Away',
        description: 'The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.'
    },
    1002: {
        code: 1002,
        name: 'Protocol Error',
        description: 'The endpoint is terminating the connection due to a protocol error.'
    },
    1003: {
        code: 1003,
        name: 'Unsupported Data',
        description: 'The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data).'
    },
    1005: {
        code: 1005,
        name: 'No Status Received',
        description: 'Indicates that no status code was provided even though one was expected.'
    },
    1006: {
        code: 1006,
        name: 'Abnormal Closure',
        description: 'Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected.'
    },
    1007: {
        code: 1007,
        name: 'Invalid frame payload data',
        description: 'The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).'
    },
    1008: {
        code: 1008,
        name: 'Policy Violation',
        description: 'The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable.'
    },
    1009: {
        code: 1009,
        name: 'Message too big',
        description: 'The endpoint is terminating the connection because a data frame was received that is too large.'
    },
    1010: {
        code: 1010,
        name: 'Missing Extension',
        description: "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
    },
    1011: {
        code: 1011,
        name: 'Internal Error',
        description: 'The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.'
    },
    1012: {
        code: 1012,
        name: 'Service Restart',
        description: 'The server is terminating the connection because it is restarting.'
    },
    1013: {
        code: 1013,
        name: 'Try Again Later',
        description: 'The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients.'
    },
    1014: {
        code: 1014,
        name: 'Bad Gateway',
        description: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code.'
    },
    1015: {
        code: 1015,
        name: 'TLS Handshake',
        description: "Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
    },
    3000: {
        code: 3000,
        name: 'Reconnect WebSocket',
        description: 'The client is terminating the connection because it wants to reconnect'
    },
    3001: {
        code: 3001,
        name: 'No Realtime Listeners',
        description: 'The client is terminating the connection because no more realtime listeners exist'
    },
    3002: {
        code: 3002,
        name: 'Heartbeat Ping Error',
        description: 'The client is terminating the connection due to its failure in sending heartbeat messages'
    },
    3003: {
        code: 3003,
        name: 'Heartbeat Pong Timeout Error',
        description: 'The client is terminating the connection because no heartbeat response is received from the server'
    },
    3050: {
        code: 3050,
        name: 'Server Close',
        description: 'The client is terminating the connection because no heartbeat response is received from the server'
    }
};
var CLOSE_EVENT_CODE;
(function (CLOSE_EVENT_CODE) {
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["NormalClosure"] = 1000] = "NormalClosure";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["GoingAway"] = 1001] = "GoingAway";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["ProtocolError"] = 1002] = "ProtocolError";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["UnsupportedData"] = 1003] = "UnsupportedData";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["NoStatusReceived"] = 1005] = "NoStatusReceived";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["AbnormalClosure"] = 1006] = "AbnormalClosure";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["InvalidFramePayloadData"] = 1007] = "InvalidFramePayloadData";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["PolicyViolation"] = 1008] = "PolicyViolation";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["MessageTooBig"] = 1009] = "MessageTooBig";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["MissingExtension"] = 1010] = "MissingExtension";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["InternalError"] = 1011] = "InternalError";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["ServiceRestart"] = 1012] = "ServiceRestart";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["TryAgainLater"] = 1013] = "TryAgainLater";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["BadGateway"] = 1014] = "BadGateway";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["TLSHandshake"] = 1015] = "TLSHandshake";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["ReconnectWebSocket"] = 3000] = "ReconnectWebSocket";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["NoRealtimeListeners"] = 3001] = "NoRealtimeListeners";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["HeartbeatPingError"] = 3002] = "HeartbeatPingError";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["HeartbeatPongTimeoutError"] = 3003] = "HeartbeatPongTimeoutError";
    CLOSE_EVENT_CODE[CLOSE_EVENT_CODE["NoAuthentication"] = 3050] = "NoAuthentication";
})(CLOSE_EVENT_CODE = exports.CLOSE_EVENT_CODE || (exports.CLOSE_EVENT_CODE = {}));
exports.getWSCloseError = function (code, reason) {
    var info = exports.CLOSE_EVENT_CODE_INFO[code];
    var errMsg = !info
        ? "code " + code
        : info.name + ", code " + code + ", reason " + (reason || info.description);
    return new error_1.CloudSDKError({
        errCode: error_1.ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED,
        errMsg: errMsg
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3MtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd3MtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQWlEO0FBRXBDLFFBQUEscUJBQXFCLEdBQUc7SUFDbkMsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFdBQVcsRUFDVCxrR0FBa0c7S0FDckc7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxZQUFZO1FBQ2xCLFdBQVcsRUFDVCxvSkFBb0o7S0FDdko7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsV0FBVyxFQUNULHFFQUFxRTtLQUN4RTtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixXQUFXLEVBQ1QsNEpBQTRKO0tBQy9KO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLFdBQVcsRUFDVCwwRUFBMEU7S0FDN0U7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsV0FBVyxFQUNULG9JQUFvSTtLQUN2STtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxXQUFXLEVBQ1QsMEpBQTBKO0tBQzdKO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFdBQVcsRUFDVCxtTEFBbUw7S0FDdEw7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsV0FB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ZFNES0Vycm9yIH0gZnJvbSAnLi9lcnJvcidcblxuZXhwb3J0IGNvbnN0IENMT1NFX0VWRU5UX0NPREVfSU5GTyA9IHtcbiAgMTAwMDoge1xuICAgIGNvZGU6IDEwMDAsXG4gICAgbmFtZTogJ05vcm1hbCBDbG9zdXJlJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdOb3JtYWwgY2xvc3VyZTsgdGhlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCB3aGF0ZXZlciBwdXJwb3NlIGZvciB3aGljaCBpdCB3YXMgY3JlYXRlZC4nXG4gIH0sXG4gIDEwMDE6IHtcbiAgICBjb2RlOiAxMDAxLFxuICAgIG5hbWU6ICdHb2luZyBBd2F5JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGUgZW5kcG9pbnQgaXMgZ29pbmcgYXdheSwgZWl0aGVyIGJlY2F1c2Ugb2YgYSBzZXJ2ZXIgZmFpbHVyZSBvciBiZWNhdXNlIHRoZSBicm93c2VyIGlzIG5hdmlnYXRpbmcgYXdheSBmcm9tIHRoZSBwYWdlIHRoYXQgb3BlbmVkIHRoZSBjb25uZWN0aW9uLidcbiAgfSxcbiAgMTAwMjoge1xuICAgIGNvZGU6IDEwMDIsXG4gICAgbmFtZTogJ1Byb3RvY29sIEVycm9yJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGUgZW5kcG9pbnQgaXMgdGVybWluYXRpbmcgdGhlIGNvbm5lY3Rpb24gZHVlIHRvIGEgcHJvdG9jb2wgZXJyb3IuJ1xuICB9LFxuICAxMDAzOiB7XG4gICAgY29kZTogMTAwMyxcbiAgICBuYW1lOiAnVW5zdXBwb3J0ZWQgRGF0YScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhlIGNvbm5lY3Rpb24gaXMgYmVpbmcgdGVybWluYXRlZCBiZWNhdXNlIHRoZSBlbmRwb2ludCByZWNlaXZlZCBkYXRhIG9mIGEgdHlwZSBpdCBjYW5ub3QgYWNjZXB0IChmb3IgZXhhbXBsZSwgYSB0ZXh0LW9ubHkgZW5kcG9pbnQgcmVjZWl2ZWQgYmluYXJ5IGRhdGEpLidcbiAgfSxcbiAgMTAwNToge1xuICAgIGNvZGU6IDEwMDUsXG4gICAgbmFtZTogJ05vIFN0YXR1cyBSZWNlaXZlZCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnSW5kaWNhdGVzIHRoYXQgbm8gc3RhdHVzIGNvZGUgd2FzIHByb3ZpZGVkIGV2ZW4gdGhvdWdoIG9uZSB3YXMgZXhwZWN0ZWQuJ1xuICB9LFxuICAxMDA2OiB7XG4gICAgY29kZTogMTAwNixcbiAgICBuYW1lOiAnQWJub3JtYWwgQ2xvc3VyZScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVXNlZCB0byBpbmRpY2F0ZSB0aGF0IGEgY29ubmVjdGlvbiB3YXMgY2xvc2VkIGFibm9ybWFsbHkgKHRoYXQgaXMsIHdpdGggbm8gY2xvc2UgZnJhbWUgYmVpbmcgc2VudCkgd2hlbiBhIHN0YXR1cyBjb2RlIGlzIGV4cGVjdGVkLidcbiAgfSxcbiAgMTAwNzoge1xuICAgIGNvZGU6IDEwMDcsXG4gICAgbmFtZTogJ0ludmFsaWQgZnJhbWUgcGF5bG9hZCBkYXRhJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGUgZW5kcG9pbnQgaXMgdGVybWluYXRpbmcgdGhlIGNvbm5lY3Rpb24gYmVjYXVzZSBhIG1lc3NhZ2Ugd2FzIHJlY2VpdmVkIHRoYXQgY29udGFpbmVkIGluY29uc2lzdGVudCBkYXRhIChlLmcuLCBub24tVVRGLTggZGF0YSB3aXRoaW4gYSB0ZXh0IG1lc3NhZ2UpLidcbiAgfSxcbiAgMTAwODoge1xuICAgIGNvZGU6IDEwMDgsXG4gICAgbmFtZTogJ1BvbGljeSBWaW9sYXRpb24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RoZSBlbmRwb2ludCBpcyB0ZXJtaW5hdGluZyB0aGUgY29ubmVjdGlvbiBiZWNhdXNlIGl0IHJlY2VpdmVkIGEgbWVzc2FnZSB0aGF0IHZpb2xhdGVzIGl0cyBwb2xpY3kuIFRoaXMgaXMgYSBnZW5lcmljIHN0YXR1cyBjb2RlLCB1c2VkIHdoZW4gY29kZXMgMTAwMyBhbmQgMTAwOSBhcmUgbm90IHN1aXRhYmxlLidcbiAgfSxcbiAgMTAwOToge1xuICAgIGNvZGU6IDEwMDksXG4gICAgbmFtZTogJ01lc3NhZ2UgdG9vIGJpZycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhlIGVuZHBvaW50IGlzIHRlcm1pbmF0aW5nIHRoZSBjb25uZWN0aW9uIGJlY2F1c2UgYSBkYXRhIGZyYW1lIHdhcyByZWNlaXZlZCB0aGF0IGlzIHRvbyBsYXJnZS4nXG4gIH0sXG4gIDEwMTA6IHtcbiAgICBjb2RlOiAxMDEwLFxuICAgIG5hbWU6ICdNaXNzaW5nIEV4dGVuc2lvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoZSBjbGllbnQgaXMgdGVybWluYXRpbmcgdGhlIGNvbm5lY3Rpb24gYmVjYXVzZSBpdCBleHBlY3RlZCB0aGUgc2VydmVyIHRvIG5lZ290aWF0ZSBvbmUgb3IgbW9yZSBleHRlbnNpb24sIGJ1dCB0aGUgc2VydmVyIGRpZG4ndC5cIlxuICB9LFxuICAxMDExOiB7XG4gICAgY29kZTogMTAxMSxcbiAgICBuYW1lOiAnSW50ZXJuYWwgRXJyb3InLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RoZSBzZXJ2ZXIgaXMgdGVybWluYXRpbmcgdGhlIGNvbm5lY3Rpb24gYmVjYXVzZSBpdCBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB0aGF0IHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuJ1xuICB9LFxuICAxMDEyOiB7XG4gICAgY29kZTogMTAxMixcbiAgICBuYW1lOiAnU2VydmljZSBSZXN0YXJ0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGUgc2VydmVyIGlzIHRlcm1pbmF0aW5nIHRoZSBjb25uZWN0aW9uIGJlY2F1c2UgaXQgaXMgcmVzdGFydGluZy4nXG4gIH0sXG4gIDEwMTM6IHtcbiAgICBjb2RlOiAxMDEzLFxuICAgIG5hbWU6ICdUcnkgQWdhaW4gTGF0ZXInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RoZSBzZXJ2ZXIgaXMgdGVybWluYXRpbmcgdGhlIGNvbm5lY3Rpb24gZHVlIHRvIGEgdGVtcG9yYXJ5IGNvbmRpdGlvbiwgZS5nLiBpdCBpcyBvdmVybG9hZGVkIGFuZCBpcyBjYXN0aW5nIG9mZiBzb21lIG9mIGl0cyBjbGllbnRzLidcbiAgfSxcbiAgMTAxNDoge1xuICAgIGNvZGU6IDEwMTQsXG4gICAgbmFtZTogJ0JhZCBHYXRld2F5JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGUgc2VydmVyIHdhcyBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5IGFuZCByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIGZyb20gdGhlIHVwc3RyZWFtIHNlcnZlci4gVGhpcyBpcyBzaW1pbGFyIHRvIDUwMiBIVFRQIFN0YXR1cyBDb2RlLidcbiAgfSxcbiAgMTAxNToge1xuICAgIGNvZGU6IDEwMTUsXG4gICAgbmFtZTogJ1RMUyBIYW5kc2hha2UnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJbmRpY2F0ZXMgdGhhdCB0aGUgY29ubmVjdGlvbiB3YXMgY2xvc2VkIGR1ZSB0byBhIGZhaWx1cmUgdG8gcGVyZm9ybSBhIFRMUyBoYW5kc2hha2UgKGUuZy4sIHRoZSBzZXJ2ZXIgY2VydGlmaWNhdGUgY2FuJ3QgYmUgdmVyaWZpZWQpLlwiXG4gIH0sXG4gIC8vIGN1c3RvbVxuICAzMDAwOiB7XG4gICAgY29kZTogMzAwMCxcbiAgICBuYW1lOiAnUmVjb25uZWN0IFdlYlNvY2tldCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhlIGNsaWVudCBpcyB0ZXJtaW5hdGluZyB0aGUgY29ubmVjdGlvbiBiZWNhdXNlIGl0IHdhbnRzIHRvIHJlY29ubmVjdCdcbiAgfSxcbiAgMzAwMToge1xuICAgIGNvZGU6IDMwMDEsXG4gICAgbmFtZTogJ05vIFJlYWx0aW1lIExpc3RlbmVycycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhlIGNsaWVudCBpcyB0ZXJtaW5hdGluZyB0aGUgY29ubmVjdGlvbiBiZWNhdXNlIG5vIG1vcmUgcmVhbHRpbWUgbGlzdGVuZXJzIGV4aXN0J1xuICB9LFxuICAzMDAyOiB7XG4gICAgY29kZTogMzAwMixcbiAgICBuYW1lOiAnSGVhcnRiZWF0IFBpbmcgRXJyb3InLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RoZSBjbGllbnQgaXMgdGVybWluYXRpbmcgdGhlIGNvbm5lY3Rpb24gZHVlIHRvIGl0cyBmYWlsdXJlIGluIHNlbmRpbmcgaGVhcnRiZWF0IG1lc3NhZ2VzJ1xuICB9LFxuICAzMDAzOiB7XG4gICAgY29kZTogMzAwMyxcbiAgICBuYW1lOiAnSGVhcnRiZWF0IFBvbmcgVGltZW91dCBFcnJvcicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhlIGNsaWVudCBpcyB0ZXJtaW5hdGluZyB0aGUgY29ubmVjdGlvbiBiZWNhdXNlIG5vIGhlYXJ0YmVhdCByZXNwb25zZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXInXG4gIH0sXG4gIDMwNTA6IHtcbiAgICBjb2RlOiAzMDUwLFxuICAgIG5hbWU6ICdTZXJ2ZXIgQ2xvc2UnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RoZSBjbGllbnQgaXMgdGVybWluYXRpbmcgdGhlIGNvbm5lY3Rpb24gYmVjYXVzZSBubyBoZWFydGJlYXQgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyJ1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIENMT1NFX0VWRU5UX0NPREUge1xuICAvLyBzcGVjXG4gIE5vcm1hbENsb3N1cmUgPSAxMDAwLFxuICBHb2luZ0F3YXkgPSAxMDAxLFxuICBQcm90b2NvbEVycm9yID0gMTAwMixcbiAgVW5zdXBwb3J0ZWREYXRhID0gMTAwMyxcbiAgTm9TdGF0dXNSZWNlaXZlZCA9IDEwMDUsXG4gIEFibm9ybWFsQ2xvc3VyZSA9IDEwMDYsXG4gIEludmFsaWRGcmFtZVBheWxvYWREYXRhID0gMTAwNyxcbiAgUG9saWN5VmlvbGF0aW9uID0gMTAwOCxcbiAgTWVzc2FnZVRvb0JpZyA9IDEwMDksXG4gIE1pc3NpbmdFeHRlbnNpb24gPSAxMDEwLFxuICBJbnRlcm5hbEVycm9yID0gMTAxMSxcbiAgU2VydmljZVJlc3RhcnQgPSAxMDEyLFxuICBUcnlBZ2FpbkxhdGVyID0gMTAxMyxcbiAgQmFkR2F0ZXdheSA9IDEwMTQsXG4gIFRMU0hhbmRzaGFrZSA9IDEwMTUsXG4gIC8vIGN1c3RvbSAtIGNsaWVudCBjbG9zZSBpdHNlbGZcbiAgUmVjb25uZWN0V2ViU29ja2V0ID0gMzAwMCxcbiAgTm9SZWFsdGltZUxpc3RlbmVycyA9IDMwMDEsXG4gIEhlYXJ0YmVhdFBpbmdFcnJvciA9IDMwMDIsXG4gIEhlYXJ0YmVhdFBvbmdUaW1lb3V0RXJyb3IgPSAzMDAzLFxuICAvLyBjdXN0b20gLSBzZXJ2ZXIgY2xvc2VcbiAgTm9BdXRoZW50aWNhdGlvbiA9IDMwNTBcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdTQ2xvc2VFcnJvciA9IChjb2RlOiBDTE9TRV9FVkVOVF9DT0RFLCByZWFzb24/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgaW5mbyA9IENMT1NFX0VWRU5UX0NPREVfSU5GT1tjb2RlXVxuICBjb25zdCBlcnJNc2cgPSAhaW5mb1xuICAgID8gYGNvZGUgJHtjb2RlfWBcbiAgICA6IGAke2luZm8ubmFtZX0sIGNvZGUgJHtjb2RlfSwgcmVhc29uICR7cmVhc29uIHx8IGluZm8uZGVzY3JpcHRpb259YFxuICByZXR1cm4gbmV3IENsb3VkU0RLRXJyb3Ioe1xuICAgIGVyckNvZGU6IEVSUl9DT0RFLlNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9XRUJTT0NLRVRfQ09OTkVDVElPTl9DTE9TRUQgYXMgc3RyaW5nLFxuICAgIGVyck1zZ1xuICB9KVxufVxuIl19
}, function(modId) { var map = {"./error":1734234913885}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1734234913888, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.setRuntime = exports.getRuntime = exports.setWsClass = exports.getWsClass = void 0;
var wsClass = null;
var runtime = 'web';
function getWsClass() {
    return wsClass;
}
exports.getWsClass = getWsClass;
function setWsClass(val) {
    wsClass = val;
}
exports.setWsClass = setWsClass;
function getRuntime() {
    return runtime;
}
exports.getRuntime = getRuntime;
function setRuntime(val) {
    runtime = val;
}
exports.setRuntime = setRuntime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBRXBCLFNBQWdCLFVBQVU7SUFDeEIsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUZELGdDQUVDO0FBQ0QsU0FBZ0IsVUFBVSxDQUFDLEdBQU87SUFDaEMsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUNoQixDQUFDO0FBRkQsZ0NBRUM7QUFFRCxTQUFnQixVQUFVO0lBQ3hCLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFGRCxnQ0FFQztBQUNELFNBQWdCLFVBQVUsQ0FBQyxHQUFVO0lBQ25DLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDaEIsQ0FBQztBQUZELGdDQUVDIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHdzQ2xhc3MgPSBudWxsO1xubGV0IHJ1bnRpbWUgPSAnd2ViJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdzQ2xhc3MoKXtcbiAgcmV0dXJuIHdzQ2xhc3M7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0V3NDbGFzcyh2YWw6YW55KXtcbiAgd3NDbGFzcyA9IHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJ1bnRpbWUoKXtcbiAgcmV0dXJuIHJ1bnRpbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0UnVudGltZSh2YWw6c3RyaW5nKXtcbiAgcnVudGltZSA9IHZhbDtcbn0iXX0=
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1734234913879);
})()
//miniprogram-npm-outsideDeps=["lodash.set","lodash.unset","lodash.clonedeep"]
//# sourceMappingURL=index.js.map