const chatContainer = document.getElementById("chat-container");

// Sample initial messages
const initialMessages = [
  { text: "Hello!", sender: "bot" },
  { text: "Welcome to the AI Support this is a test AI", sender: "bot" },
];

// Display initial messages
initialMessages.forEach((msg) => displayMessage(msg.text, msg.sender));

// Function to display messages
function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.innerText = message;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to bottom
}

// Function to send a message
function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value;
  if (message.trim() !== "") {
    displayMessage(message, "user");
    userInput.value = "";
    // Simulate bot response after a short delay
    setTimeout(() => {
      displayMessage(getRandomQuote(), "bot");
    }, 500);
  }
}

// Helper function to get a random quote
function getRandomQuote() {
  const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The secret of getting ahead is getting started. - Mark Twain",
    // Add more quotes here
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "A person who never made a mistake never tried anything new. - Albert Einstein",
    // Add more quotes as needed
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Simulate bot's initial greeting after a short delay
setTimeout(() => {
  displayMessage(
    "How can I help you today? Feel free to ask for advice or tips!",
    "bot"
  );
}, 1000);
