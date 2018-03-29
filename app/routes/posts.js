import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const posts = this.store.findAll('post');
    return posts;
  },
});
