import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const elToAdd = galleryItems
  .map(
    (el) => `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="large-image.jpg"
        alt="${el.description}"
      />
    </a>
  </div>`
  ).join("");
gallery.insertAdjacentHTML("beforeend", elToAdd);
gallery.addEventListener("click", func);
function func(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(
    `<div class="gallery__item">
      <img
        class="gallery__image"
          data-source="large-image.jpg"
          src = "${galleryItems.find((el) => el.preview === evt.target.src).original}"
      />
  </div>`
  );
  instance.show();
}
