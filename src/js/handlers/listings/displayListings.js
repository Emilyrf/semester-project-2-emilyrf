import * as listingMethods from '../../api/listings/index.js';
import displayMessage from '../../ui/components/displayMessage.js';
import displayBids from '../../ui/components/bidsTemplate.js';

export async function displayListings() {
  try {
    const data = await listingMethods.getListings();
    const dataContainer = document.getElementById('listingsContainer');

    const dataList = document.createElement('div');
    dataList.classList.add('row', 'justify-content-center');
    data.forEach((item) => {
      const listItem = document.createElement('article');
      listItem.classList.add(
        'card',
        'card-width',
        'p-0',
        'm-4',
        'col-12',
        'col-md-4',
      );
      listItem.innerHTML = `
      <img class="card-img-top card-position-image" src="${item.media[0]}" alt="${item.title}" onerror="this.src='/images/product.jpg'">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <p>Bids: ${item._count.bids}</p>
        <a href="/listing/?id=${item.id}" class="btn btn-primary">Bid Now</a>
      </div>`;
      dataList.appendChild(listItem);
    });

    dataContainer.innerHTML = '';
    dataContainer.appendChild(dataList);
  } catch (error) {
    console.error('Error:', error);
  }
}

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (error) {
    return false;
  }
}

//Listing by ID
export async function getListingtById() {
  try {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    let id = params.get('id');

    const listing = await listingMethods.getListing(id);

    document.title = listing.title;

    const listingImage = document.querySelector('#listingImage');
    const listingTitle = document.querySelector('#listingTitle');
    const listingOwner = document.querySelector('#listingOwner');
    const listingDescription = document.querySelector('#listingDescription');
    const endsAt = document.querySelector('#endsAt');
    const imageSrc = isValidURL(listing.media[0])
      ? listing.media[0]
      : '/images/product.jpg';

    listingImage.src = imageSrc;
    listingTitle.innerHTML = listing.title;
    listingOwner.innerHTML += listing.seller.name;
    listingDescription.innerHTML = listing.description;
    endsAt.innerHTML += new Date(listing.endsAt).toLocaleString();

    // Display bids
    displayBids(listing.bids);
  } catch (error) {
    displayMessage('danger', error, '#message');
  }
}

export async function displayMyListings() {
  try {
    const data = await listingMethods.getMyListings();
    const dataContainer = document.getElementById('listingsContainer');
    const dataList = document.createElement('div');
    dataList.classList.add('row', 'justify-content-center');
    data.forEach((item) => {
      const listItem = document.createElement('article');
      listItem.classList.add(
        'card',
        'card-width',
        'p-0',
        'm-4',
        'col-12',
        'col-md-4',
      );
      listItem.innerHTML = `
      <img class="card-img-top card-position-image" src="${item.media[0]}" alt="${item.title}" onerror="this.src='/images/product.jpg'">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <a href="/listing/?id=${item.id}" class="btn btn-primary">Bid Now</a>
      </div>`;
      dataList.appendChild(listItem);
    });

    dataContainer.innerHTML = '';
    dataContainer.appendChild(dataList);
  } catch (error) {
    console.error('Error:', error);
  }
}
