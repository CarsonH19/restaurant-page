import { content, home, menu, reservations } from "./index";


 // Menu
 export function loadMenuPage() {
  content.innerHTML = '';
  const element = document.createElement("main");

  element.innerHTML = `
      <h2>Menu</h2>
      <ul class="menu-items">
        <li>
          <p class="dish-name">Golden Horn Mead</p>
          <p class="dish-description"><em>The Tavern's signature mead, a golden elixir infused with honey, warmth, and tales of adventure.</em></p>
        </li>
        <li>
          <p class="dish-name">Tavern Tonic</p>
          <p class="dish-description"><em>A classic G&T with a Tavern twist—herbal gin, artisan tonic, and a citrus zing.</em></p>
        </li>
        <li>
          <p class="dish-name">Sorcerer's Sour</p>
          <p class="dish-description"><em>A savory blend of lentils, mushrooms, and vegetables topped with mashed sweet potatoes, baked to golden perfection.</em></p>
        </li>
        <li>
          <p class="dish-name">Dragon's Breath Sangria</p>
          <p class="dish-description"><em>Red wine, brandy, and exotic fruits create a fiery, refreshing Sangria with a touch of enchantment.</em></p>
        </li>
        <li>
          <p class="dish-name">Meadow Mule</p>
          <p class="dish-description"><em>Refreshing mix of vodka, elderflower, and ginger beer, served over ice with a zesty twist.</em></p>
        </li>
        <li>
          <p class="dish-name">Moonlit Mojito</p>
          <p class="dish-description"><em>Cool mint, lime, and white rum dance under the moonlight, refreshing and utterly captivating.</em></p>
        </li>
      </ul>
    `;

    home.classList.remove("tab-open");
    menu.classList.add("tab-open");
    reservations.classList.remove("tab-open");
    content.appendChild(element);
  }