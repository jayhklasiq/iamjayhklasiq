// footer date
let year = document.querySelector('.year');
const date = new Date().getUTCFullYear();
year.textContent = date;

// dropdown nav button
document.getElementById('myWorks').addEventListener('click', function () {
  let dropdown = document.getElementById('myworks');
  dropdown.classList.toggle('hidden');
});


document.addEventListener('DOMContentLoaded', function () {
  let links = document.querySelectorAll('#myworks > li > a');
  let idArray = Array.from(links).map(function (link) {
    return link.id;
  });

  // Add click event listeners to each element with an ID in the array
  idArray.forEach(function (id) {
    document.getElementById(id).addEventListener('click', function () {
      // Apply blur effect when clicked
      const page = document.getElementById('page');
      page.style.filter = 'blur(4px)';

      // Display content based on the clicked ID
      displayContent(id);
    });
  });
});


// Add click event listener to remove the blur and div when clicked outside the div
document.addEventListener('click', function (event) {
  const page = document.getElementById('page');
  const contentContainer = document.getElementById('contentContainer');
  if (event.target !== contentContainer && !contentContainer.contains(event.target)) {
    page.style.filter = 'none';
    contentContainer.remove();
  }
});

function displayContent(id) {
  // Fetch data from the JSON file based on the ID
  fetch('/src/assets/peronalDetails.json')
    .then(response => response.json())
    .then(data => {
      // Find the corresponding data for the clicked ID
      const contentData = data.find(item => item.id === id);

      if (contentData) {
        // Create content HTML using the data
        const contentHTML = `
          <div class="bg-[#354f52] text-center border-2 border-solid border-gray-300 rounded-lg p-4">
            <h2 class="font-bold mb-4">${contentData.title}</h2>
            <p class="mb-4">${contentData.body}</p>
            <a class="hover:text-lg bg-[#52796f] p-2 rounded-md mt-8" href="${contentData.linkUrl}">${contentData.linkText}</a>
          </div>
        `;

        // Create a container div for the content
        let contentContainer = document.createElement('div');
        contentContainer.innerHTML = contentHTML;

        // Add Tailwind CSS classes for centering the content
        contentContainer.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'm-40', 'text-white', 'contentContainer');

        // Append the container to the body
        document.body.appendChild(contentContainer);
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}