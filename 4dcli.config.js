module.exports = {
  envs({ mode }) {
    const enableProxy = false;
    let config;
    const localPublicPath = '/';
    const cdnPublicPath = `//bucket.cn-frontend-shenzhen-cdn.4dshoetech.com/${mode}`;
    const policyUrl = `//sdtc-public-picture.4dshoetech.com/policy/${mode}`;
    const dataPipeArtUrl = 'https://datapipe.4dshoetech.com';
    let remoteDomain;
    switch (mode) {
      case 'sit': remoteDomain = 'sit.4dshoetech.local'; break;
      case 'staging': remoteDomain = 'sit.4dshoetech.local'; break;
      case 'uat': remoteDomain = 'uat.idealabmat.com'; break;
      case 'production': remoteDomain = 'material.idealabmat.com'; break;
      case 'local': remoteDomain = 'dev.4dshoetech.local'; break;
      default: remoteDomain = 'dev.4dshoetech.local'; break;
      // default: remoteDomain = 'dev1.4dshoetech.local'; break;
    }
    const isLocalDomain = remoteDomain.endsWith('local');
    const useSSL = !isLocalDomain;
    const publicPath = !isLocalDomain ? cdnPublicPath : localPublicPath;
    return {
      remoteDomain,
      port: 9300,
      publicPath,
      useSsl: useSSL,
      apiDomain: remoteDomain,
      moduleName: 'material-platform',
      loginPort: 9300,
      ossSign: true,
      loginBasePath: '/login',
      policyUrl,
      dataPipeArtUrl,
      ...(enableProxy ? {
        apiProxyBaseUrl: `//${remoteDomain}/backend/`,
      } : { }),
      ...config,
    };
  },
};
