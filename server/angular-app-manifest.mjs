
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jadhavswati912.github.io/student-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/student-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5132, hash: 'd270305be2a1d7b66d5d0aa8fef4d41381c88474d3ad8d0dabf41840a0f46fbd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1104, hash: '55724e719075e2742b58bb7b021c95cc3c8caafa27bb84472f3bb4fd7739c4a9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14482, hash: 'd92629f25939a594b41e8d72e681e8220bfb93826bb6bcae9f649ce713a444d2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
