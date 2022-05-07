// fetch('./Data.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const data =
  '{"tasks":{ "Cut grass": false,"Clean room": false,"Go to gym": true,"Make dinner": false}}';

const dataJSON = JSON.parse(data);

const output = document.getElementById('output');
const taskList = document.querySelector('#taskList');

for (let key in dataJSON.tasks) {
  console.log(key);
}
console.log(dataJSON);
