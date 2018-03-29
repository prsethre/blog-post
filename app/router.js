import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts');
  this.route('post', { path: 'posts/post/:post_id' });
  this.route('edit', { path: 'posts/edit/:post_id' });
});

export default Router;
