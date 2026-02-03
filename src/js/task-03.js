const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryUlRef = document.querySelector('.gallery')

function makeImageItemMarkup(imageUrl="", alt = "") {
  return `<li><img src="${imageUrl}" alt="${alt}" width="300"></li>`;
}

const makeGalleryMarkup = (images) => {
  if(!images) {
    return
  }

  return images.map(({url, alt}) => {
    return makeImageItemMarkup(url,alt)
  })
}

const galleryMarkup = makeGalleryMarkup(images).join('')

galleryUlRef.insertAdjacentHTML('afterbegin', galleryMarkup)