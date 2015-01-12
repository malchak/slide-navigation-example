# Slide-navigation-example

A simple implementation of a slide-out navigation menu with Ember-cli.

Using Ember's [boolean value class name bindings](http://emberjs.com/guides/templates/binding-element-class-names/#toc_binding-to-boolean-values) helper, and the [didTransition](http://emberjs.com/api/classes/Ember.Route.html#event_didTransition) route function, we can easily toggle between menu-open and menu-close states in our application.

* in your template
`<nav {{bind-attr class=":menu isOpen:menu-open:menu-close"}}>`

* in your controller
`import Ember from 'ember';

export default Ember.Controller.extend({
	isOpen: false
});`

* in your application route
`import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		toggleMenu: function () {
			this.controller.toggleProperty('isOpen');
		},
		closeMenu: function () {
			this.controller.set('isOpen', false);
		}
	}
});`

* and in your child routes
`import Ember from 'ember';

export default Ember.Route.extend({
	
	actions: {
		didTransition: function () {
			var controller = this.controllerFor('application');
			controller.send('closeMenu');
		}
	}
});
`


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

