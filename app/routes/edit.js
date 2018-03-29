import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('post', params.post_id);
  },

  actions: {
    saveEdits() {
      console.log('saveEditsClicked', this.get(model));
    },
  }
});
