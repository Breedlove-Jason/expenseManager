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
    for(let i = 0; i < expense.length; i++) {
        const table = document.getElementById('expenseList')
        const tr = document.createElement('tr');
        for (let j = 0; j < expense.length; j++) {
            // const table = document.getElementById('expenseList')
            // const tr = document.createElement('tr');
            const tableRow = table.appendChild(tr);
            const td = document.createElement('td');
            td.innerHTML = expense[j];
            const tableData = tableRow.appendChild(td);
        }
    }
    expense = [];
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addExpense').addEventListener('click', addExpense)
});
// console.log(expense);
// for(let i = 0; i < expense.length; i++){
//     console.log(expense[i])
// }


// add a new table row and 4 td fields for each entry
// const tableData = tableRow.appendChild(td);
// console.log(tableData);
// for (let i = 0; i < expense.length; i++) {
//     const table = document.getElementById('expenseList')
//     const tr = document.createElement('tr');
//     const tableRow = table.appendChild(tr);
//     const td = document.createElement('td');
//     td.innerHTML = expense[i];
//     console.log(td);
//     const tableData = tableRow.appendChild(td);
    // tr.appendChild(td);
    // const td2 = document.createElement('td');
    // td2.innerHTML = expense[i].spent;
    // tr.appendChild(td2);
    // const td3 = document.createElement('td');
    // td3.innerHTML = expense[i].date;
    // tr.appendChild(td3);
    // const td4 = document.createElement('td');
    // td4.innerHTML = expense[i].amount;
    // tr.appendChild(td4);
// }
// delete an entry