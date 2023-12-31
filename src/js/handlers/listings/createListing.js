import { createListing } from '../../api/listings/index.js';
import displayMessage from '../../ui/components/displayMessage.js';

//Create listing
export function setCreateListingFormListener() {
  const form = document.getElementById('createListingForm');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());

      listing.tags = listing.tags.split(',');
      listing.endsAt = new Date(listing.endsAt).toISOString();

      const mediaArray = Array.from(formData.getAll('media[]'));
      listing.media = mediaArray;

      // Input validation for endsAt
      if (!isValidISODate(listing.endsAt)) {
        throw new Error('Invalid date format for endsAt');
      }

      // Function to validate ISO date format (YYYY-MM-DDTHH:mm:ss.sssZ)
      function isValidISODate(dateString) {
        const isoDatePattern =
          /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)$/;

        return isoDatePattern.test(dateString);
      }

      try {
        await createListing(listing);

        displayMessage('success', 'Your item was listed', '#message');
      } catch (error) {
        displayMessage('danger', error, '#message');
      }
    });
  }
}
