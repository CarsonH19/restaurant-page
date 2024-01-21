
import { content, menu } from "./index";


 // Menu
 export function loadMenu() {
  const element = document.createElement("main");

  element.innerHTML = `
      <ul id="menu-items">
        <li>
          <p class="dish-name">King's Feast Platter</p>
          <p class="dish-description">A grand platter featuring roasted turkey legs, hearty sausages, herbed potatoes, and seasonal vegetables.</p>
        </li>
        <li>
          <p class="dish-name">Mead-Glazed Pork Shank</p>
          <p class="dish-description">Slow-cooked pork shank glazed with a mead reduction, served with garlic mashed potatoes and braised greens.</p>
        </li>
        <li>
          <p class="dish-name">Vegetarian Shepherd's Pie</p>
          <p class="dish-description">A savory blend of lentils, mushrooms, and vegetables topped with mashed sweet potatoes, baked to golden perfection.</p>
        </li>
        <li>
          <p class="dish-name">Royal Garden Salad</p>
          <p class="dish-description"></p>
        </li>
        <li>
          <p class="dish-name">Mead Sampler</p>
          <p class="dish-description">A selection of honey wines, including traditional mead, melomel, and cyser.</p>
        </li>
      </ul>
    `;

    menu.classList.add("tab-open");

    content.appendChild(element);
  }