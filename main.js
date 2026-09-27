// Auto-select book in order form
function selectBookForOrder(bookValue) {
    const selectElem = document.getElementById('bookSelect');
    if (selectElem) {
        selectElem.value = bookValue;
    }
}

// Book Order Submission
function handleBookOrderSubmit(e) {
    e.preventDefault();
    const book = document.getElementById('bookSelect').value;
    const name = document.getElementById('buyerName').value;
    
    alert(`Thank you ${name}. Your order for "${book}" has been placed. Please complete the bank transfer. Once payment is confirmed, your unlocked PDF link will be delivered.`);
    document.getElementById('bookOrderForm').reset();
}