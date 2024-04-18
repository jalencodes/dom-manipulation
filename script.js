
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Step 1

let mainEl = document.querySelector("main");
let body = document.querySelector("body");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// Step 2

let topMenuEL = document.querySelector("#top-menu");
topMenuEL.style.height = "100%";
topMenuEL.style.backgroundColor = "var(--top-menu-bg)";
topMenuEL.classList.add("flex-around");

// Step 3

for (let link of menuLinks) {
  let aEL = document.createElement("a");
  aEL.setAttribute("href", link.href);
  aEL.textContent = link.text;
  topMenuEL.appendChild(aEL);
}
