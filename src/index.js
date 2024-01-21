import { loadHomePage } from "./homePage";
import { loadNavBar } from "./navBar";
import "./style.css";

export const content = document.getElementById("content");

document.addEventListener("DOMContentLoaded", loadNavBar);
document.addEventListener("DOMContentLoaded", loadHomePage);
