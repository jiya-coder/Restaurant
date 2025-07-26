// Reservation form handler
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value;
    const guests = this.guests.value;
    const date = this.date.value;
    const confirmation = document.getElementById('confirmation');
    confirmation.textContent = `Thank you, ${name}! Reservation for ${guests} on ${date} received.`;
    confirmation.classList.remove('hidden');
    this.reset();
  });