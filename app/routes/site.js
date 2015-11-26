import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.queryRecord('site', { name: params.name });
  }
});
