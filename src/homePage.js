import { content, home } from "./index";

export function loadHomePage() {
  const element = document.createElement("div");
  element.innerHTML = `
    <h1>The Tavern</h1>
    <p>Where medieval charm meets culinary delight. Immerse yourself in this timeless ambiance and enjoy a feast fit for a king.</p>
  `;

  home.classList.add("tab-open");

  content.appendChild(element);
  }

