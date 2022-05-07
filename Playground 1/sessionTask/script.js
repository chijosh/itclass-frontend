const form = document.getElementById('myForm');

window.onload = function () {
  if (sessionStorage !== null) {
    let sessionData = sessionStorage['person'];
    let data = JSON.parse(sessionData);
    // console.log(data.JSON.parse());

    let greetings = `Welcome ${data.first} ${data.last} to the site`;
    let doc = document.getElementById('output');
    doc.innerHTML = greetings;
    console.log(data);
  }
};

form.addEventListener('submit', (evnt) => {
  evnt.preventDefault();
  let myForm = getFormData(form);
  let data = JSON.stringify(myForm);

  if (data) {
    sessionStorage['person'] = data;
  }
  console.log(data);
});

function getFormData(form) {
  let element = form.querySelectorAll("input[type='text']");
  let formData = {};

  element.forEach((key) => {
    let name = key.name;
    let value = key.value;
    // // console.log(element[key].name);
    formData[name] = value;
  });
  return formData;
  //   console.log(obj);
}

//   for (key in element) {
//     console.log(key);
//     let name = element[key].name;
//     let value = element[key].value;
//     // console.log(element[key].name);
//     obj[name] = value;
//   }
//   console.log(obj);
// }
