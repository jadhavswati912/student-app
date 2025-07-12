
export default {
  basePath: 'https://jadhavswati912.github.io/student-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
