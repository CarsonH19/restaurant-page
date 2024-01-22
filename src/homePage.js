import { content, home, menu, reservations } from "./index";

export function loadHomePage() {
  content.innerHTML = "";
  const element = document.createElement("main");
  element.innerHTML = `
    <div class="home-styling">
      <h1>The Tavern</h1>
      <p>Where medieval charm meets culinary delight. Immerse yourself in this timeless ambiance and enjoy a feast fit for a king.</p>
    </div>
    `;

  home.classList.add("tab-open");
  menu.classList.remove("tab-open");
  reservations.classList.remove("tab-open");

  content.appendChild(element);
}
