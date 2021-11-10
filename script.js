const Modal = {
    open(){
        // Open the Modal.
        // Add Class Active in modal.
        document
            .querySelector('.modalOverlay')
            .classList.add('active');
    },
    close(){
        // Close the Modal.
        // Remove the Class Active in modal.
        document
            .querySelector('.modalOverlay')
            .classList.remove('active');
    }
}

const Transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    },
]

const Transaction = {
    incomes() {
        // some the incomes.
    },
    expenses() {
        // some the expenses.
    },
    total() {
        // incomes - expenses.
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#dataTable tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        DOM.transactionsContainer.appendChild(tr);


    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const html = `
        
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        
        `

        return html
    }
}

Transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})