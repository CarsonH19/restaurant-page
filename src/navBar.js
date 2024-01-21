import { content } from "./index.js";

// Nav Bar
export function loadNavBar() {
  const element = document.createElement("nav");

  element.innerHTML = `
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#reservations">Reservations</a></li>
    </ul>
    `;

  content.appendChild(element);
}
