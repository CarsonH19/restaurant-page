
export function loadPage() {
  // Header
  function loadHeader() {
    const element = document.createElement("header");

    element.innerHTML = `
      <h1>The Tavern</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Menu</a></li>
          <li><a href="#services">Reservations</a></li>
        </ul>
      </nav>
    `;

    return element;
  }

  // Main
  function loadMain() {
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

    return element;
  }

  // Footer
  function loadFooter() {
    const element = document.createElement("footer");

    element.innerHTML = ` 
    <h3>Contact Us</h3>
    <form action=""></form>
    `;

    return element;
  }

  document.body.appendChild(loadHeader());
  document.body.appendChild(loadMain());
  document.body.appendChild(loadFooter());
}