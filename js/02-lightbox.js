import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryList: document.querySelector('.gallery'),
}

const listItemsMarkup = createListItemsMarkup(galleryItems);

refs.galleryList.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
    return items.map(({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`).join('');
};

refs.galleryList.addEventListener('click', imageClickOpen);

function imageClickOpen(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const modal = new SimpleLightbox('.gallery__link', {
        sourceAttr: 'href',
        captionsData: 'alt',
        captionDelay: 250,
    });
};