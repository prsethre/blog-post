import Route from '@ember/routing/route';
import { computed } from '@ember/object';

export default Route.extend({
  model() {
    const posts = this.store.findAll('post');
    return posts;
  },

  displayDate: computed('date', function () {
    const date = this.get('date');
    return date.toDateString();
  }),
});
