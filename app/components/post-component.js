import Component from '@ember/component';
import { computed } from '@ember/object';
import DateFormat from '../mixins/date-format-mixin';

export default Component.extend(DateFormat,{

  // formattedDate: computed('date', function () {
  //   const date = this.get('date');
  //   return date.toDateString();
  // }),
});
