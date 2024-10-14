document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const destination = document.getElementById('destinationInput').value;
    alert(`Searching for travel deals to ${destination}!`);
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const flight = document.getElementById('flight').value;
    const hotel = document.getElementById('hotel').value;
    const date = document.getElementById('date').value;
    
    alert(`Booking flight to ${flight} with hotel in ${hotel} on ${date}!`);
});
