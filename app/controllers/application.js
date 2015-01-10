import Ember from 'ember';

export default Ember.Controller.extend({
	isOpen: false,

	actions: {
		toggleMenu: function () {
			this.toggleProperty('isOpen');
		}
	}

});
