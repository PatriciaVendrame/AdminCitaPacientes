// Selectores
const patientInput = document.querySelector('#patient');
const ownerInput = document.querySelector('#owner');
const emailInput = document.querySelector('#email');
const dateInput = document.querySelector('#entryDate');
const symptomsInput = document.querySelector('#symptoms');
const form = document.querySelector('#form-appointment');

// Appointment Object
const appObj = {
    patient: '',
    owner: '',
    email: '',
    entryDate: '',
    symptoms: '',
};

// Events
patientInput.addEventListener('change', dataAppointment);

ownerInput.addEventListener('change', dataAppointment);

emailInput.addEventListener('change', dataAppointment);

dateInput.addEventListener('change', dataAppointment);

symptomsInput.addEventListener('change', dataAppointment);

form.addEventListener('submit', submitAppointment);

// Functions
function dataAppointment(e){
    appObj[e.target.name] = e.target.value;
    console.log(appObj);
}

function submitAppointment(e){
    e.preventDefault();

    if(Object.values(appObj).some(valor => valor.trim() === '')) {
        const notification = new Notification({
            text: 'All fields are required',
            type: 'error',
        });
        notification.showNotification();
        return;
    } else {
        const notification = new Notification({
            text: 'Appointment added successfully',
            type: 'success',
        });
        notification.showNotification();
    }
}

class Notification {
    constructor({text, type}){
        this.text = text;
        this.type = type;
    }

    showNotification() {
        //creating notification
        const alert = document.createElement('DIV');
        alert.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        // Alert type error, add a class
        this.type === 'error' ? alert.classList.add('bg-red-500') : alert.classList.add('bg-green-500');

        //Add Message
        alert.textContent = this.text;

        // Insert in the DOM
        form.parentElement.insertBefore(alert, form);

    }
}