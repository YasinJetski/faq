document.addEventListener("DOMContentLoaded", () => {
  // Fetch the data
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
          const faqContainer = document.getElementById('faq');
          
          data.forEach(item => {
              // Create the section title div
              const sectionDiv = document.createElement('div');
              sectionDiv.classList.add('section');
              sectionDiv.textContent = item.title;
              sectionDiv.addEventListener('click', () => {
                  sectionDiv.classList.toggle('active');
                  const descriptionDiv = sectionDiv.nextElementSibling;
                  if (sectionDiv.classList.contains('active')) {
                      descriptionDiv.style.display = 'block';
                  } else {
                      descriptionDiv.style.display = 'none';
                  }
              });
              
              // Create the description div
              const descriptionDiv = document.createElement('div');
              descriptionDiv.classList.add('description');
              descriptionDiv.textContent = item.body;
              
              // Append both to the container
              faqContainer.appendChild(sectionDiv);
              faqContainer.appendChild(descriptionDiv);
          });
      });
});
