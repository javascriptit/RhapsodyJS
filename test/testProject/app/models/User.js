var User = {
	attributes: {
		name: String,
		age: {
			type: Number,
			serverValidations: ['notNegative']
		},
		password: {
			type: String,
			restricted: true,
			required: true
		}
	},

	sharedMethods: {
		fullInfo: function() {
			return this.get('name') + ' - ' + this.get('age');
		}
	},

	clientMethods: {

	},

	serverMethods: {
		customMethod: function() {
			return 'Optional content';
		},
		notNegative: function(value) {
			return value >= 0;
		}
	},

	options: {
		allowREST: true,
		middlewares: [],
		adapter: 'mongodb'
	},

	relationships: {
		group: {
			type: 'belongsTo',
			with: 'Group',
			foreignKey: 'groupId'
		},
		classes: {
	      type: 'hasAndBelongsToMany',
	      with: 'Class'
	    }
	}
};

module.exports = User;