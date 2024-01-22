import { content, home, menu, reservations } from "./index";

// Reservations
export function loadReservationsPage() {
  content.innerHTML = '';
  const element = document.createElement("main");

  element.innerHTML = `
      <div class="reservation-styles">
        <div>
          <h2>Reservations</h2>
          <p>Secure your seat at The Tavern with ease using our reservations page. Choose your date, time, and revel in an evening of hearty feasts and enchanting ambiance. Reserve your medieval experience now!</p>
        </div>
        <form action="/submit-reservation" method="post">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>

          <div>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required>

            <label for="date">Date:</label>
            <input type="date" id="date" name="date" required>
          </div>

          <div>
            <label for="time">Time:</label>
            <input type="time" id="time" name="time" required>
          
            <label for="party-size">Party Size:</label>
            <input type="number" id="party-size" name="party-size" min="1" required>
          </div>

          <button type="submit">Submit Reservation</button>
        </form>
      </div>
    `;

    home.classList.remove("tab-open");
    menu.classList.remove("tab-open");
    reservations.classList.add("tab-open");

  content.appendChild(element);
}
