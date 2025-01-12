const burger = document.querySelector('.burger');
const navSelect = document.querySelector('.nav-select');

burger.addEventListener('click', () => {
    navSelect.classList.toggle('active');
    burger.classList.toggle('toggle');
});


// Weather API
const apiKey = "ea71020fe8cbadc134082ac1e319fd7c"; 
const lat = 51.0337997; 
const lon = -2.4026109; 
const weatherResult = document.getElementById("weather-data");
const weatherIcon = document.getElementById("weather-icon");

async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        const iconCode = data.weather[0].icon; // Weather icon code from OpenWeather API
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        weatherIcon.src = iconUrl;
        weatherIcon.alt = data.weather[0].description;

        weatherResult.innerHTML = `
            <strong>${data.name}</strong> - ${data.weather[0].description}
            <br>Temp: ${data.main.temp}°C
            <br>Feels like: ${data.main.feels_like}°C
        `;
    } catch (error) {
        weatherResult.textContent = "Error fetching weather data. Please try again.";
        weatherIcon.src = ""; // Clear the icon if there's an error
    }
}

// Fetch weather data on page load
document.addEventListener("DOMContentLoaded", fetchWeather);


// Email form
// Add event listener to the form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Capture form data
  const params = {
    from_name: document.getElementById("name").value,
    message: document.getElementById("message").value,
    reply_to: document.getElementById("email").value,
  };

  // Replace with your EmailJS service ID and template ID
  const serviceID = "service_u5epnop";
  const templateID = "template_dwvhdms";

  // Send email using EmailJS
  emailjs.send(serviceID, templateID, params)
    .then(() => {
      alert("Message sent successfully!");

      // Clear the form fields after successful submission
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again later.");
    });
});


