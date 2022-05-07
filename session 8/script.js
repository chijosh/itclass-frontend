let myForm = document.getElementById('myForm');

// Check sessionStorage for data
window.onload = function () {
  if (sessionStorage !== null) {
    let formData = sessionStorage['person'];
    let data = JSON.parse(formData);

    updateDom(data);
  }
};

// Listen for events
myForm.addEventListener('submit', (evnt) => {
  evnt.preventDefault();

  let data = getFormData(); //function invocation

  storeSessionData(data);
});

// Store data in sessionStorage
const storeSessionData = (data) => {
  if (data) {
    sessionStorage['person'] = JSON.stringify(data);
    console.log(data);
  }
};

// Get form data
const getFormData = () => {
  let input = document.querySelectorAll('input[type="text"]');

  // Initialise an empty object
  let formData = {};

  // Loop over form data
  input.forEach(function (key) {
    // Populate the formData object
    formData[key.name] = key.value;
  });

  return formData;
};

const updateDom = () => {};
