/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		User.find().exec(function (err, users){
		  if (err) {
		    return res.negotiate(err);
		  }
		  return res.json(users);
		});
	},
	getUserByUid: function(req, res) {
		User.find({uid: req.param('uid')}).exec(function (err, users){
		  if (err) {
		    return res.negotiate(err);
		  }
		  return res.json(users);
		});
	},
	create: function(req, res) {
		User.create(req.body).exec(function createCB(err, user){
		  if (err) {
		    return res.negotiate(err);
		  }
		  return res.json(user);
		});
	},
	update: function(req, res) {
		delete req.body.uid
		User.update({guid: req.param('id')}, req.body).exec(function createCB(err, user){
		  if (err) {
		    return res.negotiate(err);
		  }
		  return res.json(user);
		});
	},
	destroy: function(req, res) {
		User.destroy({guid: req.param('id')}).exec(function (err){
		  if (err) {
		    return res.negotiate(err);
		  }
		  return res.ok();
		});
	}
};

