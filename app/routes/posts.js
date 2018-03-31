import Route from '@ember/routing/route';
import DateFormat from '../mixins/date-format-mixin';

export default Route.extend(DateFormat, {
  model() {
    const posts = this.store.findAll('post');
    return posts;
  },
});
