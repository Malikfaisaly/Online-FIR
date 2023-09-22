document.addEventListener('DOMContentLoaded', function() {
    const firForm = document.getElementById('fir-form');
    
    firForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // You can add code here to send the FIR data to a backend server for processing.
        // In a real application, this is where blockchain integration would occur.

        alert('FIR submitted successfully!');
        firForm.reset();
    });
});
