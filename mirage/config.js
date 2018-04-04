export default function() {
  this.namespace = '/api';

  this.get('/posts'); //shorthand

  this.get('/posts/:post_id', function (db, request) {
    const id = request.params.post_id;
    return db.posts.find(id);
  });

  this.post('/posts', function (db, request) {
    console.log(request);
    const dataRecord = JSON.parse(request.requestBody);
    db.posts.insert(dataRecord);
  });

  this.patch('/posts/:id', function (db, request) {
    const id = request.params.id;
    const dataRecord = JSON.parse(request.requestBody);
    db.posts.find(id).update(dataRecord.data.attributes);
  });
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

