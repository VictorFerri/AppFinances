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