import EmberObject from '@ember/object';
import DateFormatMixinMixin from 'blog-project2/mixins/date-format-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | date-format-mixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let DateFormatMixinObject = EmberObject.extend(DateFormatMixinMixin);
    let subject = DateFormatMixinObject.create();
    assert.ok(subject);
  });
});
