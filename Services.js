// Get all tab buttons
const tabButtons = document.querySelectorAll('.tab-btn');

// Get all tab content items
const tabItems = document.querySelectorAll('.tab-item');

// Add event listeners to tab buttons
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all tab buttons
    tabButtons.forEach((btn) => btn.classList.remove('active'));

    // Add 'active' class to clicked tab button
    button.classList.add('active');

    // Hide all tab content items
    tabItems.forEach((item) => item.style.display = 'none');

    // Show the corresponding tab content item based on data attribute
    const tabId = button.getAttribute('data-tab');
    const tabContent = document.getElementById(tabId);
    tabContent.style.display = 'block';
  });
});
