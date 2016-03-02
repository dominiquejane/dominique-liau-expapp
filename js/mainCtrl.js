angular.module('ExpApp').controller('mainCtrl', function($scope, mainService) {

	//call populateExpenses() to make sure list is up to date.
	$scope.populateExpenses = function() {
		$scope.list = mainService.populate();
	}

	//add an expense and refresh list
	$scope.addExpense = function(){
		mainService.add($scope.expense);

		//clear input fields
		$scope.expense.merchant = "";
		$scope.expense.amount = "";
		$scope.expense.date = "";
		$scope.expense.comments = "";

		$scope.populateExpenses();
	}

	//change status and remove buttons
	$scope.reimburseExpense = function(item) {
		mainService.reimburse(item.$$hashKey);
		$scope.populateExpenses(); 
	}

	//remove an expense
	$scope.removeExpense = function(itemId) {
		mainService.remove(itemId);
		$scope.populateExpenses();
	}
		
})