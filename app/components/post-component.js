import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  formattedDate: computed('date', function () {
    const date = this.get('date');
    return date.toDateString();
  }),
});
