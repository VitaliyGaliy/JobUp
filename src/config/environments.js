// Here is where you can define configuration overrides based on the execution environment.
// Supply a key to the default export matching the NODE_ENV that you wish to target, and
// the base configuration will apply your overrides before exporting itself.
export default {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  // NOTE: In development, we use an explicit public path when the assets
  // are served webpack by to fix this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  development: (config) => ({
    Google: {
      clientId: '319822290235-lg19j3brhd10dsjvr1d9ekgm38098sga.apps.googleusercontent.com',
    },
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production: (config) => ({
    Google: {
      clientId: '319822290235-1o3p4njl786uv13cc9v31bsgvcpvushk.apps.googleusercontent.com',
    },
    instagram: {
      redirect_uri: 'http://daxx.online:3000/insta/gallery',
      endpoints: {
        access_token: '/oauth/access_token',
      },
    },
  }),
}
