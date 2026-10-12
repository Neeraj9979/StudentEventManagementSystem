
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
