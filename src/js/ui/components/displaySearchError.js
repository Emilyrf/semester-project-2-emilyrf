export default function displaySearchError(error = 'Search error') {
  const resultsContainer = document.querySelector('#searchResults');
  resultsContainer.innerHTML = '';

  const div = document.createElement('div');
  div.classList.add('alert', 'alert-danger');
  div.innerText = error;
  resultsContainer.appendChild(div);

  resultsContainer.style.display = 'block';
}
