import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const allGalleryEl = galleryItems.map();

const imageGallery = basicLightbox.create(
  `<img src="${event.target.dataset.source}">`
);
imageGallery.show();

const onKeydown = (e) => escapePress(e, imageGallery);

document.addEventListener("keydown", onKeydown);

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
