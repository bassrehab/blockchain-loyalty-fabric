//SPDX-License-Identifier: Apache-2.0

var points = require('./controller.js');

module.exports = function(app){

  app.get('/get_points/:id', function(req, res){
    points.get_points(req, res);
  });
  app.get('/add_points/:points', function(req, res){
    points.add_points(req, res);
  });
  app.get('/get_all_points', function(req, res){
    points.get_all_points(req, res);
  });
  app.get('/change_holder/:holder', function(req, res){
    points.change_holder(req, res);
  });
}
