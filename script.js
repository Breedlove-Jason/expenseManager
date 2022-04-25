'use strict';

let expense = []

function addExpense(event) {
    event.preventDefault();

    const entry = {
        // id: Date.now(),
        type: document.getElementById('typeList').value,
        spent: document.getElementById('spentOn').value,
        date: document.getElementById('spentDate').value,
        amount: document.getElementById('spentAmount').value,
    }

    Object.values(entry).forEach(element => {
        expense.push(element);

        document.forms[0].reset();
    });
    for(let i = 0; i < 1; i++) {
        const table = document.getElementById('expenseList')
        const tr = document.createElement('TR');
        const deleteButton = document.createElement('BUTTON')
        deleteButton.className = 'deleteButton'
        deleteButton.innerText = '!'
        tr.appendChild(deleteButton);
        deleteButton.addEventListener('click', function(event){
            event.preventDefault();
            event.target.parentElement.remove()
            expense.splice(i, 1)
        })
        for (let j = 0; j < expense.length; j++) {
            // const table = document.getElementById('expenseList')
            // const tr = document.createElement('tr');
            const tableRow = table.appendChild(tr);
            const td = document.createElement('TD');
            td.className = 'entries'
            td.innerHTML = expense[j];
            const tableData = tableRow.appendChild(td);
        }
    }
    expense = [];
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addExpense').addEventListener('click', addExpense)
});

