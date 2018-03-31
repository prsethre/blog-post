import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('post', params.post_id);
  },

  actions: {
    saveEdits(post) {
      if (post.get('hasDirtyAttributes')) {
        console.log(typeof(post));
        post.save()
      }
      this.transitionTo('post', post.get('id'))
    },
  }
});
