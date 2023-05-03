import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryList: document.querySelector('.gallery'),
    
}

// const galleryItem = galleryItems.map(({ preview, original, description }) =>
//     `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`).join('');

// galleryList.insertAdjacentHTML('beforeend', galleryItem);
const listItemsMarkup = createListItemsMarkup(galleryItems);

refs.galleryList.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
    return items.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
}


