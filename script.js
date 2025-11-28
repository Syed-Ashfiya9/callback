// Step 1: Define the displayMessage function
function displayMessage(name) {
  console.log(Hello, ${name}!);
}

// Step 2: Define the getUserInput function
function getUserInput(callback) {
  console.log("Fetching username...");

  setTimeout(() => {
    const username = "Alice"; // Simulated fetched username
    callback(username);       // Call the callback with the name
  }, 1000);
}

// Calling getUserInput with displayMessage as the callback
getUserInput(displayMessage);