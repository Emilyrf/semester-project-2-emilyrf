import hideSearchResults from './hideSearchResults.js';

export default function displaySearchResults(results) {
  const resultsContainer = document.querySelector('#searchResults');
  resultsContainer.innerHTML = '';
  if (results.length === 0) {
    hideSearchResults();
    return;
  }

  results.forEach((result) => {
    const link = document.createElement('a');
    link.href = `/listing/?id=${result.id}`;
    link.innerText = result.title;
    resultsContainer.appendChild(link);
  });

  resultsContainer.style.display = 'block';
}
