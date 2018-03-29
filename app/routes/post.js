import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log(params);
    return this.get('store').findRecord('post', params.post_id);
  },
});
