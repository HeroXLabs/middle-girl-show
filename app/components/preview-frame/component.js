import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: "preview-frame",
  mode: "desktop",

  iosDeviceClass: computed('mode', function(){
    let mode = this.get('mode');
    switch (mode) {
      case 'mobile':
        return 'ios-device ios-device--large iphone-5s--large';
      case 'tablet':
        return 'ios-device ios-device--large ipad ipad-air-2';
      default:
        return 'desktop-device';
    }
  }),

  isBrowseDesktop: computed.equal("mode", "desktop"),
  isBrowseMobile: computed.equal("mode", "mobile"),
  isBrowseTablet: computed.equal("mode", "tablet"),

  didInsertElement: function() {
    this._super();
    return Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },

  afterRenderEvent: function() {
    this.$().perfectScrollbar();
  },

  actions: {
    changeMode(mode) {
      this.set('mode', mode);
    }
  }
});
