// script.js

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Set the deadline date and time (replace with your desired date and time)
const deadline = new Date("2024-03-01T23:59:59");

// Update the countdown timer every second
const updateCountdown = () => {
  const now = new Date();
  const remainingTime = deadline - now;

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Format the time units with leading zeros
  const formattedDays = days.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // Update the countdown display
  daysElement.textContent = formattedDays;
  hoursElement.textContent = formattedHours;
  minutesElement.textContent = formattedMinutes;
  secondsElement.textContent = formattedSeconds;

  // Check if the deadline has passed
  if (remainingTime <= 0) {
    clearInterval(intervalId); // Stop the timer
    // Display a message like "Giveaway closed" or similar
  }
};

// Start the countdown timer
const intervalId = setInterval(updateCountdown, 1000);
