const content = document.querySelector("#content");
const header = document.createElement("header");
const main = document.createElement("main");
const nav = document.createElement("nav");
const section = document.createElement("section");

function createHeader() {
  const span = document.createElement("span");
  span.textContent = "gummies";
  const paragraph = document.createElement("p");
  paragraph.textContent = "All about the sweet life.";

  header.append(span, paragraph);
}

function createHome() {
  const h2 = document.createElement("h2");
  h2.innerHTML = "We have <strong>gummies</strong></br>gummies,</br>and more<strong>gummies</strong>";
  const paragraph = document.createElement("p");
  paragraph.textContent = "A true gummy lover will not need more explanation than that. Check our menu! Or, contact us, we promise to be as sweet as a gummy.";

  section.replaceChildren(h2, paragraph);
}

function createMenu() {
  const bears = document.createElement("div");
  const bearsH3 = document.createElement("h3");
  bearsH3.textContent = "Bears";
  const bearsDescription = document.createElement("p");
  bearsDescription.textContent = "Gummy bears, a must have. Large - Standard - Small";
  bears.append(bearsH3, bearsDescription);

  const worms = document.createElement("div");
  const wormsH3 = document.createElement("h3");
  wormsH3.textContent = "Worms";
  const wormsDescription = document.createElement("p");
  wormsDescription.textContent = "Feeling some movement in your stomach? Large - Standard - Small";
  worms.append(wormsH3, wormsDescription);

  const custom = document.createElement("div");
  const customH3 = document.createElement("h3");
  customH3.textContent = "Custom";
  const customDescription = document.createElement("p");
  customDescription.textContent = "Make your own, we teach you how to do it. Beware, you will be exposed to wisdom that is as ancient as time.";
  custom.append(customH3, customDescription);

  section.replaceChildren(bears, worms, custom);
}

function createForm() {
  const h2 = document.createElement("h2");
  h2.textContent = "Hey! We don't bite... unless you are too sweet!";

  const form = document.createElement("form");
  const name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("placeholder", "Name");
  const email = document.createElement("input");
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "Email");
  const message = document.createElement("textarea");
  message.setAttribute("cols", "30");
  message.setAttribute("rows", "5");
  message.setAttribute("placeholder", "Your message...");

  form.append(name, email, message);

  const button = document.createElement("button");
  button.textContent = "Send";

  section.replaceChildren(form, button);
}

function checkSelected(element) {
  if (!element.classList.contains("tab-selected")) {
    const tempNav = document.querySelectorAll("nav div");
    tempNav.forEach((div) => {
      if (div.classList.contains("tab-selected")) {
        div.classList.toggle("tab-selected");
      }
    });
    element.classList.toggle("tab-selected");
  }
}

function createNav() {
  const home = document.createElement("div");
  home.textContent = "home";
  home.classList.add("tab-selected");
  const menu = document.createElement("div");
  menu.textContent = "menu";
  const contact = document.createElement("div");
  contact.textContent = "contact";

  nav.append(home, menu, contact);

  home.addEventListener("click", (e) => {
    checkSelected(e.target);
    createHome();
  });

  menu.addEventListener("click", (e) => {
    checkSelected(e.target);
    createMenu();
  });

  contact.addEventListener("click", (e) => {
    checkSelected(e.target);
    createForm();
  });
}

function createMain() {
  createNav();
  main.append(nav, section);
}

function Pageload() {
  createHeader();
  createMain();
  createHome();

  content.append(header, main);
}

export default Pageload;
