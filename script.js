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
    innetHTMLTransaction() {
        const html = `
        <tr>
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        </tr>
        `
    }
}