// Replace 'YOUR_TITLE_ID' with your actual PlayFab title ID
const playfabTitleId = '859F4';

// Function to save sign-in data to localStorage
function saveSignInData(playFabId, username) {
  const signInData = {
    playFabId: playFabId,
    username: username
  };
  localStorage.setItem('signInData', JSON.stringify(signInData));
}

// Function to handle sign-in
function signInUser(email, password) {
  const request = {
    TitleId: playfabTitleId,
    Email: email,
    Password: password,
    RequireBothUsernameAndEmail: false
  };

  PlayFabClientSDK.LoginWithEmailAddress(request, function(response) {
    if (response.data && response.data.PlayFabId) {
      // Successful sign-in
      const playFabId = response.data.PlayFabId;
      const username = response.data.Username;

      // Save sign-in data to localStorage
      saveSignInData(playFabId, username);

      // Perform further actions like redirecting to a new page
      console.log('User signed in:', playFabId);
    } else {
      // Failed sign-in
      console.error('Sign-in error:', response.errorMessage);
      // Display an error message to the user
    }
  });
}
