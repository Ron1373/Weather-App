const apiKey = "7LHTRAEY9TVW438P4DNA3LRFM";

const getWeatherData = async (location) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
  const description = data.description;
  const mintemp = data.days[0].tempmin;
  const maxtemp = data.days[0].tempmax;
  display.innerText = `${description}
    The minimum temperature in ${location} is ${mintemp} and the maximum tempetature is ${maxtemp}.
    `;
  locationInput.value = "";
};

const display = document.getElementById("display");
const submitBtn = document.getElementById("submit-btn");
const locationInput = document.getElementById("location");
submitBtn.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    getWeatherData(location);
  }
});
