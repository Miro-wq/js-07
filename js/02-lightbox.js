import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// pt galerie
galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  listItem.innerHTML = `
    <a class="gallery__link" href="${item.original}">
      <img 
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  `;
  galleryEl.append(listItem);
});

// SimpleLightbox pentru galerie
const imageGallery = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// Funcția pentru keydown
const onKeydown = (event) => {
  if (event.key === "Escape") {
    imageGallery.close();
    event.preventDefault(); // pt comportamentul implicit
  }
};

// evenimentul keydown pe document 
document.addEventListener("keydown", onKeydown); // de revizuit daca e necesar sau nu

// =========================DRAFT======================================
//optiuni pt galerie
// captions	true	bool	Show captions if available or not
//captionsData	title	string	Get the caption from given attribute
//captionDelay	0	int	Adds a delay before the caption shows (in ms)
//var lightbox = new SimpleLightbox('.gallery a', { /* options */ }); (const in loc de var)