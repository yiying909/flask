// Script to handle tab switching and image uploads
const tabs = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Tab Switching Functionality
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove 'active' class from all tabs and content
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Add 'active' class to the clicked tab and corresponding content
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});



// Handle Outfit Uploads
const uploadBtn = document.getElementById("upload-btn");
const fileInput = document.getElementById("file-input");
const outfitList = document.getElementById("outfit-list");

// Upload Image Functionality
uploadBtn.addEventListener("click", () => {
    const files = fileInput.files;

    if (files.length === 0) {
        alert("Please select at least one image to upload.");
        return;
    }

    Array.from(files).forEach((file) => {
        const reader = new FileReader();

        // Load and display image
        reader.onload = () => {
            const imgElement = document.createElement("img");
            imgElement.src = reader.result;
            outfitList.appendChild(imgElement);
        };

        reader.readAsDataURL(file);
    });

    // Clear input
    fileInput.value = "";
});

// Placeholder for Recommendations
function loadRecommendedOutfits() {
    // const placeholderImages = [
    //     "https://via.placeholder.com/150/0000FF/FFFFFF?text=Coat",
    //     "https://via.placeholder.com/150/FF0000/FFFFFF?text=Hat",
    //     "https://via.placeholder.com/150/008000/FFFFFF?text=Scarf"
    // ];

    //step1: enter city and onclick
    // step2: request get outfit api with location parameter



    placeholderImages.forEach((url) => {
        const imgElement = document.createElement("img");
        imgElement.src = url;
        outfitList.appendChild(imgElement);
    });
}

// Load recommendations on page load
window.onload = loadRecommendedOutfits;


// // Script to handle image uploads and display recommendations

// const uploadBtn = document.getElementById("upload-btn");
// const fileInput = document.getElementById("file-input");
// const outfitList = document.getElementById("outfit-list");

// // Handle Upload Button Click
// uploadBtn.addEventListener("click", () => {
//   const files = fileInput.files;

//   if (files.length === 0) {
//     alert("Please select at least one image to upload.");
//     return;
//   }

//   Array.from(files).forEach((file) => {
//     const reader = new FileReader();

//     // Load the image and display it
//     reader.onload = () => {
//       const imgElement = document.createElement("img");
//       imgElement.src = reader.result;
//       outfitList.appendChild(imgElement);
//     };

//     reader.readAsDataURL(file);
//   });

//   // Clear the input after uploading
//   fileInput.value = "";
// });

// // Placeholder for Weather-Based Recommendations
// function loadRecommendedOutfits() {
//   const placeholderImages = [
//     "https://via.placeholder.com/150/0000FF/FFFFFF?text=Coat",
//     "https://via.placeholder.com/150/FF0000/FFFFFF?text=Hat",
//     "https://via.placeholder.com/150/008000/FFFFFF?text=Scarf"
//   ];

//   placeholderImages.forEach((url) => {
//     const imgElement = document.createElement("img");
//     imgElement.src = url;
//     outfitList.appendChild(imgElement);
//   });
// }

// // Load default outfits when the page loads
// window.onload = loadRecommendedOutfits;
