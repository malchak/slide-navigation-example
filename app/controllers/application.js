import Ember from 'ember';

export default Ember.Controller.extend({
	isOpen: true,

	actions: {
		toggleMenu: function () {
			this.toggleProperty('isOpen');
		}
	}

});
