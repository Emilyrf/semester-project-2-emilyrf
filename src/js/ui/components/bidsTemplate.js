export default function displayBids(bids) {
  const bidsContainer = document.querySelector('#biddingHistoryContainer');

  if (!bids || bids.length === 0) {
    bidsContainer.innerHTML += `<h2>No bids yet, be the first!</h2>`;
    return;
  }

  bids.forEach((bid, index) => {
    const bidElement = document.createElement('div');
    bidElement.classList.add('bid-item');
    bidElement.innerHTML = `
      <div class="row">
        <div class="bid-number col">${index + 1}.</div>
        <div class="bid-bidder col">${bid.bidderName}</div>
        <div class="bid-amount col">Amount: ${bid.amount}</div>
        `;

    bidsContainer.appendChild(bidElement);
  });
}
//   <div class="row">
//   <p class="col" id="bidderName">noname</p>
//   <p class="col" id="bidAmount">Amount: 25</p>
// </div>
