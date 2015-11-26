import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('preview-frame', 'Integration | Component | preview frame', {
  integration: true
});

test('it shows no preview', function(assert) {
  this.render(hbs`{{preview-frame}}`);
  assert.equal(this.$().text().trim(), 'No preview available yet.');
});

test('it shows preview', function(assert) {
  this.set("previewUrl", "http://heyook.com");
  this.render(hbs`{{preview-frame previewUrl=previewUrl}}`);
  assert.equal(this.$('iframe').length, 1);
  assert.equal(this.$('.preview-nav button.mobile-mode').hasClass('active'), true);
});

test('it sets mode', function(assert) {
  this.set("previewUrl", "http://heyook.com");
  this.set('mode', 'desktop');
  this.render(hbs`
    {{preview-frame
      previewUrl=previewUrl
      mode=mode
    }}`);
  assert.equal(this.$('.preview-nav button.desktop-mode').hasClass('active'), true);
  assert.equal(this.$('.preview-nav button.mobile-mode').hasClass('active'), false);
});

test('it switches mode', function(assert) {
  this.set("previewUrl", "http://heyook.com");
  this.render(hbs`{{preview-frame previewUrl=previewUrl}}`);

  Ember.run(function(){
    this.$('.preview-nav button.desktop-mode').click();
    assert.equal(this.$('.preview-nav button.desktop-mode').hasClass('active'), true);
  });
});
