angular.module('ExpApp').controller('mainCtrl', function($scope, mainService) {

	//call populateExpenses() to make sure list is up to date.
	$scope.populateExpenses = function() {
		$scope.list = mainService.populate();
	}

	//validate expense amount, accepts two different formats
	$scope.numberValidation = function(number) {
		if (/^\d+$/.test(number)){
			$scope.expense.amount = number + ".00";
			return true;
		}
		else if (/[0-9]{1,}\.[0-9]{2,2}/.test(number) === false) {
			alert("Your input for the expense amount is invalid or empty. \n Please input amount using one of the following formats: \n XX.XX \n XX \n Do not use any other characters except for numbers and/or a period.");
			return false;
		}
		else return true;
	}

	//add an expense and refresh list
	$scope.addExpense = function(){
		if ($scope.numberValidation($scope.expense.amount) === true){
			mainService.add($scope.expense);

			//clear input fields
			$scope.expense.merchant = "";
			$scope.expense.amount = "";
			$scope.expense.date = "";
			$scope.expense.comments = "";

			$scope.populateExpenses();
		}
		
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

	// //edit an expense
	// $scope.editExpense = function(itemId) {
	// 	mainService.edit(itemId);
	// }

	// //save edit to expenses
	// $scope.saveExpense = function(item) {
	// 	mainService.save(item);
	// 	$scope.populateExpenses();
	// }

	//sorting variables
	$scope.sortType = '';
	$scope.sortValue = false;
	
		
})