// Form submission function
function submitRequest() {
    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Send form input values to server for processing
    fetch('/submit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, phone: phone, message: message })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Display message to user based on server response
            if (data.success) {
                alert("Thank you for your request. Chris will be in touch soon.");
            } else {
                alert("There was an error with your request. Please try again later.");
            }
        });
}