import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('post', {path: '/post/:post_id'});
  this.route('create');
});

export default Router;
