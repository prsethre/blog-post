import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveNew() {
      const store = this.get('store');
      const title = this.get('title');
      const image = this.get('image');
      const excerpt = this.get('excerpt');
      const content = this.get('text');
      const date = this.get('date');
      const author = this.get('author');

      const newPost = {
        title,
        image,
        excerpt,
        content,
        date,
        author,
      }

      const newRecord = store.createRecord('post', newPost);
      try {
        newRecord.save();
      } catch (err) {
        console.log(err);
      }
      this.transitionToRoute('posts');
    }
  }
});
