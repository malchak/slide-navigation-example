import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		didTransition: function () {
			var controller = this.controllerFor('application');
			controller.send('toggleMenu');
		}
	}
});
