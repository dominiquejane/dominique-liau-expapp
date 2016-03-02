angular.module('ExpApp').service('mainService', function() {

	var list = [];

	this.add = function(expense) { //create a new object with default statuses and add input properties, add it to list array
		var newObj = {
			status: "New",
			newStatus : true,
		}
		for (var prop in expense) {
			newObj[prop] = expense[prop];
		}
		list.push(newObj);
	}

	this.populate = function() { //return the most updated list of expenses
		return list;
	}

	this.remove = function(id){ //remove expense from list array
		for (var i = 0; i < list.length; i++) {
			console.log(list[i].$$hashKey);
			if (list[i].$$hashKey === id) {
				list.splice(i,1);
			}
		}
	}

	this.reimburse = function(id) { //change status from "New" to "Reimbursed", change editability, remove buttons
		for (var i = 0; i < list.length; i++) {
			console.log(list[i].$$hashKey);
			if (list[i].$$hashKey === id) {

				list[i].newStatus = false;
				list[i].status = "Reimbursed";

				document.getElementsByName("editable")[i].contentEditable = "false";
			}
		}
	}


})