'use strict';
const path = require('path');
module.exports = {
  framework: 'weex',
  env: process.env.BUILD_ENV,
  entry: {
    include: 'test/web/page',
    exclude: ['test/web/page/html'],
    template: 'test/web/view/layout.html'
  },
  alias: {
    asset: 'test/web/asset',
    app: 'test/web/framework/vue/app.js',
    component: 'test/web/component',
    framework: 'test/web/framework',
    store: 'test/web/store'
  },
  install: {
    check: true
  },
  plugins: {
    npm: true
  },
  onWeb() {
    this.addEntry('common', [path.join(this.config.baseDir, 'test/web/framework/weex/web.js')]);
  }
};
