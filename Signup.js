// Replace 'YOUR_TITLE_ID' with your actual PlayFab title ID
const playfabTitleId = '859F4';

// Add an event listener to the sign-up form
const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Call PlayFab API to sign up the user
  const registerRequest = {
    TitleId: playfabTitleId,
    Email: email,
    Password: password,
    RequireBothUsernameAndEmail: false
  };

  PlayFabClientSDK.RegisterPlayFabUser(registerRequest, function(response) {
    // Handle the response from the API call
    if (response.data && response.data.PlayFabId) {
      // Successful sign-up
      console.log('User signed up:', response.data.PlayFabId);
      // Perform further actions like redirecting to a new page
    } else {
      // Failed sign-up
      console.error('Sign-up error:', response.errorMessage);
      // Display an error message to the user
    }
  });
});
