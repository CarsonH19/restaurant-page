import { loadHomePage } from "./homePage";
import { loadMenuPage } from "./menuPage";
import { loadReservationsPage } from "./reservationsPage";
import Tavern from "./tavern.png";

import "./style.css";

export const content = document.getElementById("content");
export const home = document.getElementById("home");
export const menu = document.getElementById("menu");
export const reservations = document.getElementById("reservations");

document.addEventListener("DOMContentLoaded", loadHomePage);

home.addEventListener("click", loadHomePage);

menu.addEventListener("click", loadMenuPage);

reservations.addEventListener("click", loadReservationsPage);
