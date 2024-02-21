document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const profileIcon = document.querySelector('.profile-icon');
    const menuOptions = document.querySelector('.menu-options');
  
    menuIcon.addEventListener('click', function() {
      // Toggle the visibility of the menu options
      if (menuOptions.style.display === 'block') {
        menuOptions.style.display = 'none';
      } else {
        menuOptions.style.display = 'block';
      }
    });
    profileIcon.addEventListener('click', function() {
        const profileOptions = document.querySelector('.profile-options');
        profileOptions.style.display = (profileOptions.style.display === 'block') ? 'none' : 'block';
      });
  
    // Your existing code for the profile icon
  });
