console.log('hello');
// task 3
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];



//  grab the main element and cache in variable
const mainEl = document.querySelector('main')
    mainEl.backgroundColor = 'var(--main-bg)'
    mainEl.innerHTML = ('<h1>SEI Rocks!</h1>')
    mainEl.classList.add('flex-ctr')

    console.log(mainEl);

//  task 2

const topMenuEl = document.querySelector('#top-menu')
topMenuEl.getElementsByClassName.height = '100%'
topMenuEl.getElementsByClassName.backgroundcolor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')
console.log(topMenuEl);

menuLinks.forEach((linkObj) => {
    //create a new element
    const a = document.createElement('a')
    a.setAttribute('href', linkObj.href)
    // set the text content
    a.textContent = linkObj.text
    //append anchor tag child to a parent element
    topMenuEl.appendChild(a)
    console.log(a);
})

