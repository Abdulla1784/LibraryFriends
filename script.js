// script.js

const activities = [];
const events = [];

function addActivity() {
    const activity = prompt("أدخل نشاط جديد:");
    if (activity) {
        activities.push(activity);
        renderActivities();
    }
}

function addEvent() {
    const event = prompt("أدخل فعالية جديدة:");
    if (event) {
        events.push(event);
        renderEvents();
    }
}

function renderActivities() {
    const activitiesList = document.getElementById("activities-list");
    activitiesList.innerHTML = '';
    activities.forEach((activity) => {
        const li = document.createElement("li");
        li.textContent = activity;
        activitiesList.appendChild(li);
    });
}

function renderEvents() {
    const eventsList = document.getElementById("events-list");
    eventsList.innerHTML = '';
    events.forEach((event) => {
        const li = document.createElement("li");
        li.textContent = event;
        eventsList.appendChild(li);
    });
}

// تحديث رابط واتساب
document.getElementById("whatsapp-link").href = "https://wa.me/00201008758629"; // استبدل 00201008758629 برقمك
