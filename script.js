'use strict';

let expense = []
function addExpense(event) {
    event.preventDefault();

    const entry = {
        id: Date.now(),
        type: document.getElementById('typeList').value,
        spent: document.getElementById('spentOn').value,
        date: document.getElementById('spentDate').value,
        amount: document.getElementById('spentAmount').value,
    }
    expense.push(entry)
    console.log(expense)
}
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('addExpense').addEventListener('click', addExpense)
})
for(let i = 0; i < expense.length; i++){
    console.log(expense[i])
}