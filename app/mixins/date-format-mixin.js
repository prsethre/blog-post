import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  displayDate: computed('date', function () {
    const date = this.get('date');
    return date.toDateString();
  }),
});
