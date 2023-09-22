export default function hideSearchResults(inputToClear) {
  const resultsContainer = document.querySelector('#searchResults');
  resultsContainer.style.display = 'none';

  if (inputToClear) {
    inputToClear.value = '';
  }
}
