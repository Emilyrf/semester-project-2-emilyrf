import * as listingMethods from '../../api/listings/index.js';
import displayMessage from '../../ui/components/displayMessage.js';

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
      listItem.innerHTML = ` <img class="card-img-top card-position-image" src="${item.media[0]}" alt="${item.title}"> 
                 <div class="card-body">
                 <h5 class="card-title">${item.title}</h5>
                 <p class="card-text">${item.description}</p>
                 <a href="/listing/?id=${item.id}"class="btn btn-primary">Bid Now</a>
                 </div>`;
      dataList.appendChild(listItem);
    });

    dataContainer.innerHTML = '';
    dataContainer.appendChild(dataList);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getListingtById() {
  try {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    let id = params.get('id');

    const listing = await listingMethods.getListing(id);

    const listingImage = document.querySelector('#listingImage');
    const listingTitle = document.querySelector('#listingTitle');
    const listingDescription = document.querySelector('#listingDescription');

    document.title = listing.title;
    listingImage.src = listing.media[0] ?? `/images/placeholder.png`;
    listingTitle.innerHTML = listing.title;
    listingDescription.innerHTML = listing.description;
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
      listItem.innerHTML = ` <img class="card-img-top card-position-image" src="${item.media[0]}" alt="${item.title}"> 
                   <div class="card-body">
                   <h5 class="card-title">${item.title}</h5>
                   <p class="card-text">${item.description}</p>
                   <a href="/listing/?id=${item.id}"class="btn btn-primary">Bid Now</a>
                   </div>`;
      dataList.appendChild(listItem);
    });

    dataContainer.innerHTML = '';
    dataContainer.appendChild(dataList);
  } catch (error) {
    console.error('Error:', error);
  }
}
