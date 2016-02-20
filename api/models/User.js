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
  			return md5(new Date() + Math.random()).substring(0,7)
  		}
  	},
  	name: {
  		type: "string",
      required: true
  	},
  	uid: {
  		type: "string",
      required: true,
      unique: true
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

