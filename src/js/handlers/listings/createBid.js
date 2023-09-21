import { createBid } from '../../api/listings/index.js';
import displayMessage from '../../ui/components/displayMessage.js';

//Create bid
export function setCreateBidListener() {
  const form = document.getElementById('createBid');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const bid = Object.fromEntries(formData.entries());
      bid.amount = parseInt(bid.amount);

      try {
        await createBid(bid);
        window.location.reload();
      } catch (error) {
        displayMessage('danger', error, '#message');
      }
    });
  }
}
