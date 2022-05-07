let bankAccounts = {
  customerDetails: [
    {
      firstName: 'Esther',
      lastName: 'Tallinn',
      age: 23,
      gender: 'female',
      Nigerian: true,
      address: null
    },
    {
      firstName: 'Emma',
      lastName: 'Scotland',
      age: 24,
      gender: 'male',
      Nigerian: false,
      address: null
    },
    {
      firstName: 'Aishat',
      lastName: 'Delhi',
      age: 25,
      gender: 'female',
      Nigerian: true,
      address: null
    }
  ]
};

// let details = {
//   name: 'josh',
//   address: {
//     city: 'Helsinki',
//     'post code': '00530'
//   }
// }; // Object

// console.log(details.address); // Dot notation
// console.log(details['name']); // Bracket notation

// let fruites = ['apple', 'oranges', 'mangoes']; // Array

// console.log(fruites[2]);

// console.log(bankAccounts.customerDetails[2]);
// console.log(bankAccounts);

// console.log(mount);

// Reaching out to the dom and get the precise document
// let mount = document.getElementById('data');

let realData;

async function getData() {
  let Data = await fetch('https://randomuser.me/api/?results=10')
    .then((data) => data.json())
    .then((data) => {
      // code goes here
    });
}

getData();

console.log(realData);

let html = document.querySelector('#data');

// console.log(Data.results[0].name);
// console.log(Data.results[0].gender);
// console.log(Data.results[0].picture);

let btn = document.getElementById('btn-reveal');

btn.addEventListener('click', () => {
  clickedBTN();
});

function clickedBTN() {
  let title = Data.results[0].name.title;
  let firstName = Data.results[0].name.first;
  let lastName = Data.results[0].name.last;

  // let createdElement = document.createElement('div');
  // createdElement.setAttribute('class', 'testing');
  // console.log(createdElement);

  html.innerHTML = `<p> ${title} ${firstName} ${lastName} </p>`;
  html.innerHTML += `<img class="frontend" src="${Data.results[0].picture.medium}">`;

  html.appendChild(createdElement);
}
