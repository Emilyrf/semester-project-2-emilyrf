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
    console.log(results);
    displaySearchResults(results);
  } catch (err) {
    console.log(err);
    displaySearchError();
  }
}

// export async function searchListener() {
//   const button = document.querySelector("#searchBtn");
//   if (button) {
//     button.addEventListener("click", async () => {
//       const posts = loadPosts();
//       const input = document.querySelector("#searchInput");
//       const search = input.value.trim().toLowerCase();
//       const container = document.querySelector("#allPosts");
//       container.innerHTML = '';
//       if (search.length === 0) {
//         templates.renderPostsTemplates(posts, container)
//       }
//       const postsFiltered = posts.filter(function (element) {
//         return element?.title?.toLowerCase().includes(search);
//       });
//       templates.renderPostsTemplates(postsFiltered, container)
//     });
//   }
// }
