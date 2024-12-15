import { getWedaAPI } from '@cloudbase/weda-client';
const app = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.app?.[prop] }});
const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});
const $w = new Proxy({}, { get: function(obj, prop){ return getWedaAPI()?.$w?.[prop] }});
export default async function({event, data}) {
  if (this.$WEAPPS_COMP.__internal__?.$w?.wedaContext.platforms.includes('MP')) {
    const { auth } = await this.$WEAPPS_COMP.__internal__?.$w?.cloud.getCloudInstance();
    await auth.signInWithWechat();
    await this.$WEAPPS_COMP.__internal__?.$w?.cloud.signIn({ userType: 'externalUser', force: true });
  }
}