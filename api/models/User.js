var md5 = require("md5");
/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	guid: {
  		type: "string",
  		defaultsTo: function() {
  			return md5(Math.random()).substring(0,7)
  		}
  	},
  	name: {
  		type: "string"
  	},
  	uid: {
  		type: "string"
  	},
  	email: {
  		type: "string"
  	},
  	nick: {
  		type: "string"
  	},
  	logins: {
  		type: "integer"
  	}
  }
};

