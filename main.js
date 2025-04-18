// This is the API URL for fetching exchange rates
const BASE_URL = "https://open.er-api.com/v6/latest"; // Currency API

// Selecting important elements in the HTML (dropdowns, button, message area)
const dropdowns = document.querySelectorAll(".dropdown select"); // Currency dropdowns (From & To)
const btn = document.querySelector("form button"); // Submit button
const fromCurr = document.querySelector(".from select"); // From currency dropdown
const toCurr = document.querySelector(".to select"); // To currency dropdown
const msg = document.querySelector(".msg"); // Message area where exchange rate is displayed

// Function to fetch the exchange rate and update the result
const updateExchangeRate = async () => {
  // Get the amount entered by the user
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  // If amount is empty or less than 1, set it to 1
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1"; // Set the input value to 1 if it's invalid
  }

  // Construct the URL to fetch the exchange rate data based on "From" currency
  const URL = `${BASE_URL}/${fromCurr.value.toUpperCase()}`;

  try {
    // Fetch the exchange rate data from the API
    const response = await fetch(URL);
    const data = await response.json(); // Parse the response data into JSON

    // Get the exchange rate for the "To" currency
    const rate = data.rates[toCurr.value.toUpperCase()];

    // Calculate the final amount after converting the currencies
    const finalAmount = (amtVal * rate).toFixed(2);

    // Display the conversion result (e.g., "1 USD = 80 INR")
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    // Handle any errors (e.g., if API request fails)
    msg.innerText = "Error fetching exchange rate!";
    console.error("Error fetching exchange rate:", error); // Log the error in the console for debugging
  }
};

// Populate the currency dropdowns (From & To) with options
for (let select of dropdowns) {
  // A sample list of currency codes (could be expanded)

  // Loop through all the currencies and add them to the dropdowns
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode; // The currency code (e.g., USD, INR)
    newOption.value = currCode; // Set the value of the option as the currency code

    // Set default selected currencies for "From" and "To" fields
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected"; // Default "From" currency is USD
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected"; // Default "To" currency is INR
    }

    // Add the new option to the dropdown
    select.append(newOption);
  }

  // Add event listener for dropdown change to update flags
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Function to update the flag image when currency is selected
const updateFlag = (element) => {
  let currCode = element.value; // Get the selected currency code
  let countryCode = countryList[currCode]; // Get the country code from the countryList
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; // Flag image URL
  let img = element.parentElement.querySelector("img"); // Find the image tag inside the dropdown container
  img.src = newSrc; // Set the flag image source
};

// Add event listener to the "Get Exchange Rate" button
btn.addEventListener("click", (evt) => {
  evt.preventDefault(); // Prevent the form from submitting
  updateExchangeRate(); // Call the function to get the exchange rate
});

// When the page is loaded, update the exchange rate automatically (optional)
window.addEventListener("load", () => {
  updateExchangeRate();
});
