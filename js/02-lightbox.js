import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const elToAdd = galleryItems
  .map(
    (el) => `<li class="gallery__item">
    <a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>
  </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", elToAdd);
console.log("asd");
new SimpleLightbox(".gallery__item a", {
  overlayOpacity: 0.5,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
