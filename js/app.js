// Selectores
const patientInput = document.querySelector('#patient');
const ownerInput = document.querySelector('#owner');
const emailInput = document.querySelector('#email');
const dateInput = document.querySelector('#entryDate');
const symptomsInput = document.querySelector('#symptoms');

// Appointment Object
const appObj = {
    patient: '',
    owner: '',
    email: '',
    entryDate: '',
    symptoms: '',
};

// Events
patientInput.addEventListener('change', (e) => {
    appObj[e.target.name] = e.target.value;
});

ownerInput.addEventListener('change', (e) => {
    appObj[e.target.name] = e.target.value;
});

emailInput.addEventListener('change', (e) => {
    appObj[e.target.name] = e.target.value;
})

dateInput.addEventListener('change', (e) => {
    appObj[e.target.name] = e.target.value;
});

symptomsInput.addEventListener('change', (e) => {
    appObj[e.target.name] = e.target.value;
});