import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// pentru galerie 
galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  listItem.innerHTML = `<a class="gallery__link" href="${item.original}">
  <img 
      class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
    </a>
  `;
  galleryEl.append(listItem);
});

// pty tasta escape
const escapeButton = (event, imageGallery) => {
  if (event.key === "Escape") {
    imageGallery.close();
    document.removeEventListener("keydown", onKeydown);
  }
};

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedOn = event.target;
  if (clickedOn.nodeName !== "IMG") {
    return;
  }

  // basicLightbox
  const imageGallery = basicLightbox.create(
    `<img src="${clickedOn.dataset.source}">`
  );
  imageGallery.show();

// pt funct de keydown
  const onKeydown = (e) => escapeButton(e, imageGallery);
  // event listener pt Escape sa inchida lightboxul
  document.addEventListener("keydown", onKeydown);
});

// =========================DRAFT======================================
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);
// instance.show();
// object.onkeydown = function () {
//   myScript;
// };
// object.addEventListener("keydown", myScript);
// elem.addEventListener("keydown", function (event) {
//   // The parameter event is of the type KeyboardEvent
//   addRow(event);
// });
// let msg = document.getDocumentById("#message");

// msg.addEventListener("keydown", (event) => {
//   // handle keydown
// });
