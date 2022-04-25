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

    // console.log(expense);
    Object.values(entry).forEach(element => {
        expense.push(element);
        // console.log(element);

        // console.log(expense);
        document.forms[0].reset();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addExpense').addEventListener('click', addExpense)
});
console.log(expense);
// for(let i = 0; i < expense.length; i++){
//     console.log(expense[i])
// }
// object.values then iterate through the values

// add a new table row and 4 td fields for each entry


document.createElement('tr');
for (let i = 0; i < expense.length; i++) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerHTML = expense[i].type;
    tr.appendChild(td);
    const td2 = document.createElement('td');
    td2.innerHTML = expense[i].spent;
    tr.appendChild(td2);
    const td3 = document.createElement('td');
    td3.innerHTML = expense[i].date;
    tr.appendChild(td3);
    const td4 = document.createElement('td');
    td4.innerHTML = expense[i].amount;
    tr.appendChild(td4);
    document.getElementById('expenseTable').appendChild(tr);
}
// delete an entry