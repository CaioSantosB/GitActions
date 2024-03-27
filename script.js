document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var checkIn = document.getElementById("checkIn").value;
    var checkOut = document.getElementById("checkOut").value;
    var roomType = document.getElementById("roomType").value;

    // Display reservation details
    alert("Reservation Details:\nName: " + name + "\nEmail: " + email + "\nCheck-in Date: " + checkIn + "\nCheck-out Date: " + checkOut + "\nRoom Type: " + roomType);

    // Clear form fields
    document.getElementById("reservationForm").reset();
});