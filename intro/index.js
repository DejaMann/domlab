//1. Grab the element from the DOM by its ID//
const h1 = document.getElementById("title");
//2. Change the element properties//
h1.style.backgroundColor = "red";
h1.style.padding = "20px";
h1.style.color = "white";
h1.style.fontsize = "22px";
h1.style.textAlign = 'center';

//Using CSS selectors to query an element//

// (.name) selects by a class
const pEl = document.querySelector('.cool')
pEl.textContent = 'Comments for Today:';//plain text
pEl.style.color = 'red';
pEl.style.fontweight = 'bold'
console.log(pEl);

//# selects by an ID
const superCoolP = document.querySelector('#super-cool')
superCoolP.textContent= 'Comments for <strong>Today</strong>';
console.log(superCoolP);

//querySelectors returns a single element//
const h2 = document.querySelector('h2')
// console.log('h2');

//querySelectorAll returns all matching elements
const allH2s = document.querySelectorAll('h2')
// console.log(allH2s);




// console.log(h1);
// console.logdir(h1);//explores properties of the element//


//SetAttribute//

const a = document.querySelector('a')
a.setAttribute('href', 'http://www.yahoo.com')

if (a.hasAttribute('href')){
    console.log(`That's true.`);
}else {
    console.log(`No, that's false.`);
}

console.log(a.hasAttribute('href'));

//  getAttribute
const img = document.querySelector('img')
console.log(img.getAttribute('src'));

img.setAttribute('width', '500px')

//   ClassList
const bioP = document.querySelector('#bio')
bioP.classList.add('bioStyles', 'pad',)// add new classes
bioP.classList.toggle('bioStyles')// toggle a class off and on
bioP.classList.remove('pad')// removes a class
bioP.classList.replace('bioStyles', 'bioStyles1')
console.log(bioP.classList);

//  Loop over the node list (array-type object)
const liArr = document.querySelectorAll('.comment')

console.log(liArr);
for (let li of liArr){
    li.style.fontSize = '25px'
    // console.log(li.textContent);
}