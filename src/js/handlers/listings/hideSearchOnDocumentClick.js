import hideSearchResults from '../../ui/components/hideSearchResults.js';

export default function handleHideResultsOnDocumentClick() {
  document.addEventListener('click', (event) => {
    const searchInput = document.querySelector('#search');
    const resultsContainer = document.querySelector('#searchResults');
    if (
      event.target !== searchInput &&
      event.target !== resultsContainer &&
      !resultsContainer.contains(event.target)
    ) {
      hideSearchResults(searchInput);
    }
  });
}
