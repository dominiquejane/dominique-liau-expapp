angular.module('ExpApp').controller('mainCtrl', function($scope) {

	$scope.list = [];

	$scope.Item={
		merchant: "name",
		amount: "number",
		date: "date",
		comments : "string"
	};

	$scope.addExpense = function(){
		$scope.Item.merchant = $scope.merchant;
		$scope.Item.amount = $scope.amount;
		$scope.Item.date = $scope.date;
		$scope.Item.comments = $scope.comments;

		$scope.list.push($scope.Item);

		console.log($scope.list);
	}
		
})