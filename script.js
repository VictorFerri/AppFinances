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

    {
        id: 4,
        description: 'App',
        amount: 30430,
        date: '23/01/2023'
    }
]

const Transaction = {
    all: Transactions,
    add(transaction) {
        Transaction.all.push(transaction);

        App.reload();
    },

    incomes() {
        // some the incomes.

        let income = 0;

        Transaction.all.forEach(transaction => {
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        })
        return income;
    },

    expenses() {
        // some the expenses.

        let expenses = 0;

        Transaction.all.forEach(transaction => {
            if (transaction.amount < 0) {
                expenses += transaction.amount;
            }
        })
        return expenses;
    },

    total() {
        // incomes - expenses.

        return Transaction.incomes() + Transaction.expenses();
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

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
        
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        
        `

        return html
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes());
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses());
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total());
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = "";
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "");

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        return signal + value;
    }
}

const App = {
    init() {
        
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        DOM.updateBalance();

    },

    reload() {
        DOM.clearTransactions();
        App.init();
    }
}

App.init();

Transaction.add({
    id: 5,
    description: 'alo',
    amount: 200,
    date: '23/01/2012'
})
