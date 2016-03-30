Information on the overall design
- single-page application for recording expenses
-list/table of expenses
-add an item
-change status when reimbursed
-editable boxes for merchant, amount, date, comments

Assumptions made
-no crazy dates would be input [FIXED]
-no checks that the expense amount is in USD format/numbers only [partially FIXED]

Improvements you feel would be needed
-create/open a confirm window when reimbursing to make sure [DONE]

Extra improvements:
-when editing the edits aren't reflected in the list array in the service, this would need to be reflected especially if there was a database. However, since there is no database and the information is not persisting this seemed unneccessary.
-add in a date picker [DONE]
-add in sorting/filtering options [ partially DONE]
	merchant
	date
	status
	amount

<--------CHALLENGES-------->
-remembering []
-making tables editable/uneditable


<--------CHANGES MADE-------->

-input type changed to 'date' for date field 
 -> changed how date is displayed in table
 ->if date is left empty a date picker is available in the empty date box
 ->once reimbursed the date picker is uneditable/readonly

-aligned input boxes

-confirmation popup window added when reimbursement button clicked

-money format validation for expense amount ->need to make this also applicable to table (ngblur/onblur not working)

-sorting option made available for all headings except 'Actions'.  ->Does not account/update for modifications made
