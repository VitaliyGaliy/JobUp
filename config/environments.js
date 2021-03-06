import ip from 'ip'

const localip = ip.address()

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
  // host: 'http://localhost:4000',
  // host: 'http://api.myaudit.xyz',
  development: (config) => ({
    server_port: process.env.PORT || 3000,
    server_host: localip,
    compiler_public_path: `http://${localip}:${process.env.PORT || 3000}/`,
    proxy: {
      enabled: true,
      options: {
        host: 'https://api.instagram.com/',
        match: /^\/(v1|oauth)\//,
      },
    },
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production: (config) => ({
    server_port: process.env.PORT || 3020,
    compiler_public_path: '/',
    compiler_fail_on_warning: false,
    compiler_hash_type: 'chunkhash',
    compiler_devtool: null,
    compiler_stats: {
      chunks: true,
      chunkModules: true,
      colors: true,
    },
    proxy: {
      enabled: true,
      options: {
        host: 'https://api.instagram.com/',
        match: /^\/(v1|oauth)\//,
      },
    },
  }),
}
