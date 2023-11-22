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
      if (id === 'webDev') {
        displayWebDevContent();
      } else if (id === 'cSharp') {
        displayCSharpContent();
      } else if (id === 'python') {
        displayPythonContent();
      }
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

function displayWebDevContent() {
  displayContent(`
    <div class="bg-[#354f52] text-center border-2 border-solid border-gray-300 rounded-lg p-4">
      <h2 class="font-bold mb-4">Web Development Showcase</h2>
      <p class="mb-4">Explore my web development projects and skills.</p>
      <a class="hover:text-lg bg-[#52796f] p-2 rounded-md mt-8" href="#">View Web Dev Projects</a>
    </div>
  `);
}

function displayCSharpContent() {
  displayContent(`
    <div class="bg-[#354f52] text-center border-2 border-solid border-gray-300 rounded-lg p-4">
      <h2 class="font-bold mb-4">Course Final Project: JK Online Store</h2>
      <p class="mb-4">Designed and programmed a C# e-commerce console app with user accounts and a simple checkout. The Online store has different stores and a function that adds and removes items from the cart.</p>
      <a class="hover:text-lg bg-[#52796f] p-2 rounded-md mt-8" href="https://github.com/jayhklasiq/cse210_jk/tree/main/final/FinalProject">View Repository</a>
    </div>
  `);
}

function displayPythonContent() {
  displayContent(`
    <div class="bg-[#354f52] text-center border-2 border-solid border-gray-300 rounded-lg p-4">
      <h2 class="font-bold mb-4">Course Final Project: Password Retriever</h2>
      <p class="mb-4">Designed and programmed a Python app where a user can retrieve their password. The application gets a phone number from the user and checks if it's stored. It then sends the user a randomly generated OTP which they use to recover their account.</p>
      <a class="hover:text-lg bg-[#52796f] p-2 rounded-md mt-8" href="https://github.com/jayhklasiq/cse111/tree/master/wk12/coded_files/prove">View Repository</a>
    </div>
  `);
}

function displayContent(contentHTML) {
  // Create a container div for the content
  let contentContainer = document.createElement('div');
  contentContainer.innerHTML = contentHTML;

  // Add Tailwind CSS classes for centering the content
  contentContainer.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'm-40', 'text-white', 'contentContainer');

  // Append the container to the body
  document.body.appendChild(contentContainer);
}

