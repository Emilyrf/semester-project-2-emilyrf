// import displayMessage from "../../ui/components/displayMessage.js";
import * as listingMethods from '../../api/listings/index.js';
import displaySearchResults from '../../ui/components/displaySearchResults.js';
import hideSearchResults from '../../ui/components/hideSearchResults.js';
import displaySearchError from '../../ui/components/displaySearchError.js';
import debounce from '../../helpers/debounce.js';

export default function searchListings() {
  const input = document.querySelector('#search');

  input.addEventListener('input', debouncedSearch);
}

const debouncedSearch = debounce(doSearch, 500);

async function doSearch(event) {
  const tag = event.target.value.trim();

  if (tag.length < 3) {
    return hideSearchResults();
  }

  try {
    const results = await listingMethods.search(tag);
    displaySearchResults(results);
  } catch (err) {
    displaySearchError();
  }
}
