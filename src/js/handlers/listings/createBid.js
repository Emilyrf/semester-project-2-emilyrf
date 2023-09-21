import { createBid } from '../../api/listings/index.js';
import displayMessage from '../../ui/components/displayMessage.js';

export function setCreateBidListener() {
  const createBidForm = document.getElementById('createBid');

  if (createBidForm) {
    createBidForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const bid = Object.fromEntries(formData.entries());
      bid.amount = parseInt(bid.amount);

      try {
        // Removed the 'const response =' part
        await createBid(bid);

        // Check if the request was successful
        displayMessage(
          'success',
          'Your bid was received! Click to refresh.',
          '#message',
          true,
        );
      } catch (error) {
        displayMessage('danger', error.message, '#message');
      }
    });
  }
}
