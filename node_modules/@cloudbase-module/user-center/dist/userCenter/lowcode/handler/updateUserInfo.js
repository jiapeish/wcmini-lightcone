import { getWedaAPI } from '@cloudbase/weda-client';
const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});
const $w = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.$w?.[prop] }});
export default function({event, data}) {
    const { nickName, avatarUrl } = this.$WEAPPS_COMP.__internal__?.$w?.form1.value || {};
    this.$WEAPPS_COMP.__internal__?.$w?.auth.modifyCurrentUser({ nickName, avatarUrl });
}