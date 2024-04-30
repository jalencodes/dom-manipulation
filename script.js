
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

// Beginning of Lab 2

let subMenuEl = document.querySelector('#sub-menu')
subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = 0




let topMenuLinks = topMenuEL.childNodes
console.log(topMenuLinks);


function buildSubMenu(subLinks)
{
  subMenuEl.innerHTML = ''
  for (let link of subLinks)
  {
    let newA = document.createElement('a')
    newA.setAttribute('href', link.href)
    newA.innerText = link.text
    subMenuEl.appendChild(newA)
  }
}

let subMenuListener = subMenuEl.addEventListener('click', function(e){
  e.preventDefault()
  if (e.target.tagName !== 'A')
  {
    return
  }
  subMenuEl.style.top = 0
  topMenuLinks.forEach((link) => link.classList.remove('active'))
  
  let newH1 = document.createElement('h1')
  newH1.innerText = e.target.innerText
  mainEl.innerHTML = ''
  mainEl.appendChild(newH1)
})


let menuListener = topMenuEL.addEventListener('click', function(e){
  e.preventDefault()
  if (e.target.tagName !== 'A')
  {
    return
  }
  clickedLink = e.target
  let linkName = clickedLink.textContent
  
  for(let link of topMenuLinks)
  {
    if(link === clickedLink) continue
    link.classList.remove('active')
  }

  if (clickedLink.classList.contains('active')) {
    clickedLink.classList.remove('active')
    subMenuEl.style.top = 0 
  } 
  else {
    clickedLink.classList.add('active')
    subMenuEl.style.top = linkName !== 'about' ?  '100%' :  0
    let subLinks;
    switch(linkName)
    {
      case 'about':
        mainEl.innerHTML = '<h1>About</h1>'
        break
      case 'catalog':
        subLinks = menuLinks[1].subLinks
        buildSubMenu(subLinks)
        break
      case 'orders':
        subLinks = menuLinks[2].subLinks
        buildSubMenu(subLinks)
        break
      case 'account':
        subLinks = menuLinks[3].subLinks
        buildSubMenu(subLinks)
        break
    }
    console.log(subLinks);

  }

    
})


