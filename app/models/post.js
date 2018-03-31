import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  excerpt: DS.attr('string'),
  content: DS.attr('string'),
  author: DS.attr('string'),
  image: DS.attr('string'),
  date: DS.attr('date'),
});
