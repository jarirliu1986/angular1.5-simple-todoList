var myApp = angular.module('myApp', []);

myApp.controller('todoCtrl', ['$scope', function ($scope) {
	$scope.todos = [{
		name : "task 1",
		done : false
	},{
		name : "task 2",
		done : true
	}];

	$scope.total = $scope.todos.length;

	$scope.remaining = function(){
		var count = 0;
		angular.forEach($scope.todos, function(todo){
			count += todo.done? 1 : 0;
		});
		return count;
	}

	$scope.addTodo = function(){
		if ($scope.newTodo == null || $scope.newTodo == "") {
			alert("please input the task name");
			return;
		}
		$scope.todos.push({name:$scope.newTodo, done : false});
		$scope.newTodo = "";
		updateTotal();
	}

	$scope.archive = function(){
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo){
			if (!todo.done) {
				$scope.todos.push(todo);
			}
		});
		updateTotal();
	}

	var updateTotal =  function(){
		$scope.total =  $scope.todos.length;
	}
}])