'use strict';

var app = angular.module('application', []);

// Angular Controller
app.controller('appController', function($scope, appFactory){

	$("#success_holder").hide();
	$("#success_create").hide();
	$("#error_holder").hide();
	$("#error_query").hide();
	
	$scope.queryAllPoints = function(){

		appFactory.queryAllPoints(function(data){
			var array = [];
			for (var i = 0; i < data.length; i++){
				parseInt(data[i].Key);
				data[i].Record.Key = parseInt(data[i].Key);
				array.push(data[i].Record);
			}
			array.sort(function(a, b) {
			    return parseFloat(a.Key) - parseFloat(b.Key);
			});
			$scope.all_points = array;
		});
	}

	$scope.queryPoints = function(){

		var id = $scope.points_id;

		appFactory.queryPoints(id, function(data){
			$scope.query_points = data;

			if ($scope.query_points == "Could not locate points"){
				console.log()
				$("#error_query").show();
			} else{
				$("#error_query").hide();
			}
		});
	}

	$scope.recordPoints = function(){

		appFactory.recordPoints($scope.points, function(data){
			$scope.create_points = data;
			$("#success_create").show();
		});
	}

	$scope.changeHolder = function(){

		appFactory.changeHolder($scope.holder, function(data){
			$scope.change_holder = data;
			if ($scope.change_holder == "Error: no points transactions found"){
				$("#error_holder").show();
				$("#success_holder").hide();
			} else{
				$("#success_holder").show();
				$("#error_holder").hide();
			}
		});
	}

});

// Angular Factory
app.factory('appFactory', function($http){
	
	var factory = {};

    factory.queryAllPoints = function(callback){

    	$http.get('/get_all_points/').success(function(output){
			callback(output)
		});
	}

	factory.queryPoints = function(id, callback){
    	$http.get('/get_points/'+id).success(function(output){
			callback(output)
		});
	}

	factory.recordPoints = function(data, callback){

		data.location = data.longitude + ", "+ data.latitude;

		var points = data.id + "-" + data.location + "-" + data.timestamp + "-" + data.holder + "-" + data.schemeid;

    	$http.get('/add_points/'+points).success(function(output){
			callback(output)
		});
	}

	factory.changeHolder = function(data, callback){

		var holder = data.id + "-" + data.name;

    	$http.get('/change_holder/'+holder).success(function(output){
			callback(output)
		});
	}

	return factory;
});


