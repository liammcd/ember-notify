'use strict';

module.exports = {
  name: 'ember-notify',
  included(app) {
    this._super.included.apply(this, arguments);
    let options = Object.assign({ importCss: true }, app.options.emberNotify);
    if (options.importCss) {
      app.import('vendor/ember-notify.css');
    }
  }
};
