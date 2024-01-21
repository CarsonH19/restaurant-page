import { loadHomePage } from "./homePage";
import "./style.css";

export const content = document.getElementById("content");
export const home = document.getElementById('home');
export const menu = document.getElementById('menu');
export const reservations = document.getElementById('reservations');

document.addEventListener("DOMContentLoaded", loadHomePage);

