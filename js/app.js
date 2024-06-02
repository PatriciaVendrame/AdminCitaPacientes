// Selectores
const patientInput         = document.querySelector('#patient');
const ownerInput           = document.querySelector('#owner');
const emailInput           = document.querySelector('#email');
const dateInput            = document.querySelector('#entryDate');
const symptomsInput        = document.querySelector('#symptoms');
const form                 = document.querySelector('#form-appointment');
const appointmentContainer = document.querySelector('#appointment');

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

// Classes
class Notification {
    constructor({text, type}){
        this.text = text;
        this.type = type;

        this.showNotification();
    }

    showNotification() {
        //creating notification
        const alert = document.createElement('DIV');
        alert.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        // Deleting duplicated alerts with optional chaining
        const prevAlert = document.querySelector('.alert');
        prevAlert?.remove();
        

        // Alert type error, add a class
        this.type === 'error' ? alert.classList.add('bg-red-500') : alert.classList.add('bg-green-500');

        //Add Message
        alert.textContent = this.text;

        // Insert in the DOM
        form.parentElement.insertBefore(alert, form);

        // Hidden notification after 3 sec
        setTimeout(() => {
            alert.remove();
        }, 3000);

    }
}

class AdminAppointment {
    constructor() {
        this.appointments = [];
        console.log(this.appointments);
    }

    addAppointment(appointment) {
        this.appointments = [...this.appointments, appointment];
        this.showAppointment();
    }

    showAppointment() {
        // clear html previous
        while(appointmentContainer.firstChild){
            appointmentContainer.removeChild(appointmentContainer.firstChild);
        }

        // Generating appointments
        this.appointments.forEach( appointment => {
            const divAppointment = document.createElement('DIV');
            divAppointment.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl');

            const patient     = document.createElement('P');
            patient.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            patient.innerHTML = `<span class="font-bold uppercase">Patient: </span>${appointment.patient}`;

            const owner     = document.createElement('P');
            owner.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            owner.innerHTML = `<span class="font-bold uppercase">Owner: </span>${appointment.owner}`;

            const email     = document.createElement('P');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            email.innerHTML = `<span class="font-bold uppercase">Email: </span>${appointment.email}`;

            const entryDate     = document.createElement('P');
            entryDate.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            entryDate.innerHTML = `<span class="font-bold uppercase">Date: </span>${appointment.entryDate}`;

            const symptoms     = document.createElement('P');
            symptoms.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            symptoms.innerHTML = `<span class="font-bold uppercase">Symptoms: </span>${appointment.symptoms}`;
            
            // Add data appointment 
            divAppointment.appendChild(patient);
            divAppointment.appendChild(owner);
            divAppointment.appendChild(email);
            divAppointment.appendChild(entryDate);
            divAppointment.appendChild(symptoms);

            // Add appointment on HTML container
            appointmentContainer.appendChild(divAppointment);
        })
    }
}


// Instances of classes
const appointment = new AdminAppointment();

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
        return;
    } else {
        const notification = new Notification({
            text: 'Appointment added successfully',
            type: 'success',
        });
    }

    appointment.addAppointment(appObj);

    //Reset form 
    form.reset();
    // Reset obj
    resetAppObj();
}

function resetAppObj() {
    Object.assign(appObj, {
        patient: '',
        owner: '',
        email: '',
        entryDate: '',
        symptoms: ''
    });
}


