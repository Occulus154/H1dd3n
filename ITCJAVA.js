let selectedButton = null; // Variable to track the selected button
let clickCount = 0; // Counter for clicks on the selected button

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Check if the clicked button is the same as the currently selected button
  if (selectedButton === elmnt) {
    clickCount++; // Increment the click count

    // Show different messages based on the click count
    if (clickCount === 1) {
      alert("Don't click me again!");
      // After the alert, show the content
      setTimeout(() => {
        document.getElementById(pageName).style.display = "block"; // Show the content for the new tab
      }, 0);
    } else if (clickCount === 2) {
      alert("You sure won't like what comes next!");
      // After the alert, show the content
      setTimeout(() => {
        document.getElementById(pageName).style.display = "block"; // Show the content for the new tab
      }, 0);
    } else if (clickCount === 3) {
      // On the fourth click, open the link
      setTimeout(()=> {
        document.getElementById(pageName).style.display = "block";
      }, 0);
      window.open('https://tinyurl.com/rroll154', '_blank'); // Change this URL to your desired link
      // Reset the click count after opening the link
      clickCount = 0;
    }
  } else {
    // Show the specific tab content
    selectedButton = elmnt; // Update the selected button
    clickCount = 0; // Reset click count for the new button

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;

    // Show the content for the new tab
    document.getElementById(pageName).style.display = "block"; // Show the content for the new tab
  }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





/*https://tinyurl.com/rroll154*/