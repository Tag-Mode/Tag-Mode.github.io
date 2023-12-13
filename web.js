const playfabTitleId = '859F4';

// Function to retrieve sign-in data from localStorage
function getSignInData() {
    const signInDataString = localStorage.getItem('signInData');
    return JSON.parse(signInDataString);
  }
  
  // Function to update the user information on the page
  function updateUserInfo(playFabId, username) {
    console.log(playFabId, username);
    const userElement = document.getElementById('user-info');
    if (userElement) {
      userElement.textContent = `Logged in as: ${username} (ID: ${playFabId})`;
      userElement.style.display = 'block';
    } else {
      console.error('Error: user-info element not found.');
    }
  }
  
  // Call the function to update user information when the page loads
  window.addEventListener('DOMContentLoaded', function() {
    const signInData = getSignInData();
    if (signInData) {
      const playFabId = signInData.playFabId;
      const username = signInData.username;
      updateUserInfo(playFabId, username);
    }
  });
  
  