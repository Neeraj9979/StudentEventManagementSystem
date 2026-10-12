
const events = [
    { name: "Technical Fest", date: "20 November 2026" },
    { name: "Cultural Fest", date: "25 November 2026" }
];

function displayEvents() {
    events.forEach(function(event) {
        console.log(event.name + " - " + event.date);
    });
}

function addEvent(name, date) {
    if (!name || !date) {
        console.log("Enter event name and date.");
        return;
    }

    events.push({ name: name, date: date });
    console.log("Event added successfully.");
}

displayEvents();

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value;

        const eventName =
            document.getElementById("eventName").value;

        document.getElementById("message").textContent =
            studentName + ", you registered for " + eventName + "!";

        registrationForm.reset();
    });
}

