import DS from 'ember-data';
import DateFormat from '../mixins/date-format-mixin';

export default DS.Model.extend(DateFormat, {
  title: DS.attr('string'),
  excerpt: DS.attr('string'),
  content: DS.attr('string'),
  author: DS.attr('string'),
  image: DS.attr('string'),
  date: DS.attr('date'),
});
